// Run after next build: node --test tests/seo-artifacts.test.mjs
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import test from 'node:test';

const origin = 'https://jokerlabs.ai';
const pairs = [
  ['', '/es'], ['/services', '/es/services'], ['/currency-exchange', '/es/currency-exchange'],
  ['/services/custom-software', '/es/services/desarrollo-software'],
  ['/services/artificial-intelligence', '/es/services/inteligencia-artificial'],
  ['/services/process-automation', '/es/services/automatizacion'],
  ['/services/system-integrations', '/es/services/integraciones'],
  ['/resources/exchange-house-cash-closing', '/es/recursos/cierre-caja-casa-cambio'],
  ['/resources/exchange-house-rate-control', '/es/recursos/control-tasas-casa-cambio'],
  ['/resources/colombian-exchange-house-reports', '/es/recursos/reportes-casas-cambio-colombia'],
];
function html(path) {
  return readFileSync(`.next/server/app/${path ? path.slice(1) : 'index'}.html`, 'utf8');
}
function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map((match) => [match[1], match[2]]));
}
const sameUrl = (actual, expected) => actual && new URL(actual).href === new URL(expected).href;
const titles = new Set();
for (const [base, spanishPath] of pairs) {
  for (const locale of ['en', 'es']) {
    const path = locale === 'es' ? spanishPath : base;
    test(`${path || '/'} has indexable content, unique metadata and reciprocal languages`, () => {
      const source = html(path);
      assert.match(source, new RegExp(`<html[^>]*lang="${locale}"`));
      assert.equal((source.match(/<h1\b/g) || []).length, 1);
      const title = source.match(/<title>([^<]+)<\/title>/)?.[1];
      assert.ok(title);
      assert.ok(!titles.has(title), `Duplicate title: ${title}`);
      titles.add(title);
      const links = [...source.matchAll(/<link\b[^>]*>/g)].map(([tag]) => attributes(tag));
      assert.ok(sameUrl(links.find((tag) => tag.rel === 'canonical')?.href, `${origin}${path || '/'}`));
      for (const [lang, href] of [['en', `${origin}${base || '/'}`], ['es', `${origin}${spanishPath}`], ['x-default', `${origin}${base || '/'}`]]) {
        assert.ok(links.some((tag) => tag.rel === 'alternate' && tag.hrefLang === lang && sameUrl(tag.href, href)), `Missing alternate ${lang}`);
      }
      const meta = [...source.matchAll(/<meta\b[^>]*>/g)].map(([tag]) => attributes(tag));
      assert.ok(meta.find((tag) => tag.name === 'description')?.content);
      assert.ok(sameUrl(meta.find((tag) => tag.property === 'og:url')?.content, `${origin}${path || '/'}`));
      assert.equal(meta.find((tag) => tag.property === 'og:image')?.content, `${origin}/opengraph-image`);
      const schemas = [...source.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
      const organization = schemas.find((schema) => schema['@type'] === 'Organization' && schema.name === 'JokerLabs');
      assert.ok(organization);
      assert.equal(organization.location.address.addressLocality, 'Cali');
      assert.equal(organization.location.address.addressCountry, 'CO');
      assert.deepEqual(organization.areaServed.map((country) => country.name).sort(), ['Colombia', 'Mexico', 'Peru']);
      assert.ok(organization.sameAs.some((url) => new URL(url).searchParams.get('kgmid') === '/g/11zfb2610_'));
      if (base === '/currency-exchange') assert.ok(schemas.some((schema) => schema['@type'] === 'SoftwareApplication'));
      // Inspect actual SSR HTML before React's serialized hydration scripts.
      const visible = source.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
      assert.ok(visible.includes(locale === 'es' ? 'Solicitar una demo' : 'Request a demo'));
      assert.ok(visible.includes(locale === 'es' ? 'JokerLabs en Google' : 'JokerLabs on Google'));
      assert.ok(visible.includes('Cali, Colombia'));
      assert.ok(visible.includes(locale === 'es' ? 'Colombia, Perú y México' : 'Colombia, Peru and Mexico'));
      if (base === '/currency-exchange') {
        assert.ok(!/Peru|Perú|Mexico|México/.test(meta.find((tag) => tag.name === 'description').content));
      }
      assert.ok(visible.includes('https://www.google.com/search?kgmid=/g/11zfb2610_'));
      if (locale === 'es') {
        assert.ok(visible.includes('href="/es/currency-exchange'));
        assert.ok(visible.includes('href="/es#why"'));
        assert.ok(visible.includes(`href="${base || '/'}" hrefLang="en"`));
      }
    });
  }
}

test('sitemap lists all twenty canonical pages and robots advertises it', () => {
  const sitemap = readFileSync('.next/server/app/sitemap.xml.body', 'utf8');
  assert.equal((sitemap.match(/<url>/g) || []).length, 20);
  for (const [base, spanishPath] of pairs) {
    assert.ok(sitemap.includes(`<loc>${origin}${base || '/'}</loc>`));
    assert.ok(sitemap.includes(`<loc>${origin}${spanishPath}</loc>`));
  }
  const robots = readFileSync('.next/server/app/robots.txt.body', 'utf8');
  assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
  assert.ok(robots.includes('Disallow: /api/'));
});

test('all rendered internal page links resolve to known pages and anchors', () => {
  const paths = new Set(pairs.flat().map((path) => path || '/'));
  for (const path of paths) {
    const source = html(path === '/' ? '' : path);
    for (const [tag] of source.matchAll(/<a\b[^>]*>/g)) {
      const href = attributes(tag).href;
      if (!href || (!href.startsWith('/') && !href.startsWith('#')) || href.startsWith('//')) continue;
      const target = new URL(href.replaceAll('&amp;', '&'), `${origin}${path}`);
      assert.ok(paths.has(target.pathname), `${path} links to missing page ${target.pathname}`);
      if (target.hash) {
        const targetHtml = html(target.pathname === '/' ? '' : target.pathname);
        assert.ok(targetHtml.includes(`id="${target.hash.slice(1)}"`), `${path} links to missing anchor ${target.href}`);
      }
    }
  }
});

test('Core prices stay unchanged and Growth offers a custom quote', () => {
  for (const [path, locale, quote] of [['/es/currency-exchange', 'es-CO', 'Cotización personalizada'], ['/currency-exchange', 'en-US', 'Custom quote']]) {
    const visible = html(path).replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
    for (const amount of [1500000, 1318800, 109900, 181200, 3000000]) {
      assert.ok(visible.includes(`$${new Intl.NumberFormat(locale).format(amount)}`));
    }
    for (const amount of [4200000, 3150000, 262500, 1050000]) {
      assert.ok(!visible.includes(`$${new Intl.NumberFormat(locale).format(amount)}`), 'Growth must not advertise a fixed price');
    }
    assert.ok(visible.includes(quote));
    assert.ok(visible.includes(locale === 'es-CO' ? '+ IVA' : '+ VAT'));
    assert.ok(visible.includes(locale === 'es-CO' ? 'Pago anual' : 'Annual payment'));
    assert.ok(visible.includes(locale === 'es-CO' ? 'mes total' : 'month total'));
    assert.ok(visible.includes('cx-plan-annual-total'));
    assert.ok(visible.includes('id="cx-plans"'));
  }
});
