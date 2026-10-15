import { NextResponse } from "next/server";

export const runtime = "nodejs";

const DEFAULT_CONTACT_EMAIL = "jokermaster@jokerlabs.ai";
const MAX_NAME_LENGTH = 120;
const MAX_MESSAGE_LENGTH = 5000;

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character] ?? character,
  );
}

function requiredEnv(name: string) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`${name} is not configured`);
  }
  return value;
}

async function responseBody(response: Response) {
  return response.text().catch(() => "");
}

function invalidRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

function renderEmail({ name, email, message }: ContactPayload, now: string) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width" /></head>
<body style="margin:0;padding:0;background:#0d1117;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0d1117;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
        <tr>
          <td style="background:#0f1923;border-radius:16px 16px 0 0;padding:32px 40px;border-bottom:2px solid #1A6EDB;">
            <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.18em;color:#00C9A7;font-weight:600;text-transform:uppercase;">JokerLabs · Creative Technology Lab</p>
            <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;">New Client Inquiry</h1>
            <p style="margin:6px 0 0;font-size:12px;color:#4a6a8a;">${now} (Colombia)</p>
          </td>
        </tr>
        <tr>
          <td style="background:#111d2b;padding:32px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding-bottom:20px;">
                  <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.12em;color:#00C9A7;font-weight:600;text-transform:uppercase;">From</p>
                  <p style="margin:0;font-size:18px;font-weight:700;color:#ffffff;">${safeName}</p>
                  <a href="mailto:${safeEmail}" style="font-size:14px;color:#1A6EDB;text-decoration:none;">${safeEmail}</a>
                </td>
              </tr>
              <tr>
                <td style="border-top:1px solid #1e3048;padding-top:24px;">
                  <p style="margin:0 0 12px;font-size:11px;letter-spacing:0.12em;color:#00C9A7;font-weight:600;text-transform:uppercase;">Message</p>
                  <div style="background:#0d1a28;border-left:3px solid #1A6EDB;border-radius:0 8px 8px 0;padding:20px 24px;">
                    <p style="margin:0;font-size:15px;line-height:1.8;color:#c8d8e8;white-space:pre-wrap;">${safeMessage}</p>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background:#0f1923;border-radius:0 0 16px 16px;padding:24px 40px;border-top:1px solid #1e3048;text-align:center;">
            <a href="mailto:${safeEmail}?subject=Re%3A%20Your%20inquiry%20to%20JokerLabs"
               style="display:inline-block;background:#1A6EDB;color:#ffffff;font-size:14px;font-weight:600;padding:12px 28px;border-radius:8px;text-decoration:none;">
              Reply to ${safeName}
            </a>
            <p style="margin:16px 0 0;font-size:11px;color:#2a4060;">
              This message was submitted via the JokerLabs contact form.
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

async function getMicrosoftAccessToken(tenantId: string, clientId: string, clientSecret: string) {
  const tokenUrl = `https://login.microsoftonline.com/${encodeURIComponent(tenantId)}/oauth2/v2.0/token`;
  const response = await fetch(tokenUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      scope: "https://graph.microsoft.com/.default",
      grant_type: "client_credentials",
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    const body = await responseBody(response);
    console.error("Microsoft identity token request failed", {
      status: response.status,
      body: body.slice(0, 1000),
    });
    throw new Error(`Microsoft identity token request returned HTTP ${response.status}`);
  }

  const tokenResponse = (await response.json()) as { access_token?: unknown };
  if (typeof tokenResponse.access_token !== "string" || !tokenResponse.access_token) {
    throw new Error("Microsoft identity response did not contain an access token");
  }

  return tokenResponse.access_token;
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return invalidRequest("Invalid request body");
  }

  if (!body || typeof body !== "object") {
    return invalidRequest("Invalid request body");
  }

  const { name, email, message } = body as Record<string, unknown>;
  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
    return invalidRequest("Missing fields");
  }

  const contact = {
    name: name.trim().replace(/[\r\n\t]+/g, " "),
    email: email.trim(),
    message: message.trim(),
  } satisfies ContactPayload;

  if (!contact.name || !contact.email || !contact.message) {
    return invalidRequest("Missing fields");
  }

  if (contact.name.length > MAX_NAME_LENGTH || contact.message.length > MAX_MESSAGE_LENGTH) {
    return invalidRequest("Message is too long");
  }

  if (!isEmail(contact.email)) {
    return invalidRequest("Invalid email address");
  }

  try {
    const tenantId = requiredEnv("MICROSOFT_TENANT_ID");
    const clientId = requiredEnv("MICROSOFT_CLIENT_ID");
    const clientSecret = requiredEnv("MICROSOFT_CLIENT_SECRET");
    const sender = requiredEnv("MICROSOFT_SENDER");
    const recipient = process.env.CONTACT_TO_EMAIL?.trim() || DEFAULT_CONTACT_EMAIL;

    if (!isEmail(sender) || !isEmail(recipient)) {
      throw new Error("MICROSOFT_SENDER or CONTACT_TO_EMAIL is not a valid email address");
    }

    const accessToken = await getMicrosoftAccessToken(tenantId, clientId, clientSecret);
    const graphUrl = `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(sender)}/sendMail`;
    const now = new Date().toLocaleString("en-US", {
      timeZone: "America/Bogota",
      dateStyle: "full",
      timeStyle: "short",
    });

    const response = await fetch(graphUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: {
          subject: `[New Client] ${contact.name} — JokerLabs Contact Form`,
          body: {
            contentType: "HTML",
            content: renderEmail(contact, now),
          },
          toRecipients: [{ emailAddress: { address: recipient } }],
          replyTo: [{ emailAddress: { address: contact.email, name: contact.name } }],
        },
        saveToSentItems: true,
      }),
      cache: "no-store",
    });

    if (response.status !== 202) {
      const responseText = await responseBody(response);
      console.error("Microsoft Graph send request failed", {
        status: response.status,
        body: responseText.slice(0, 1000),
      });
      return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact email error:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ error: "Email service unavailable" }, { status: 500 });
  }
}
