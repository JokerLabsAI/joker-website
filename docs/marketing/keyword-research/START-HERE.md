# JokerLabs keyword-to-page research workflow

Prepared 2026-10-15. Start with `JokerLabs_Keyword_to_Page_Workbook.xlsx` in this folder.
[Open the workbook](JokerLabs_Keyword_to_Page_Workbook.xlsx), import it into Google Sheets or open it in Excel. Blue text means an input; gray
cells are formulas. Templates are working documents, not measured research results.

JokerLabs is based in Cali, Colombia, initially serving Colombia, Peru and Mexico.
Currency Exchange currently addresses Colombian exchange houses. Spanish is the
first research language; English routes exist but English keyword demand remains
a separate research task. No keyword volumes or competitor findings were fabricated.

## Research ownership

Updated 2026-10-16: **Camilo owns the full research process**, including tool setup,
exports, intent review, clustering, page mapping, briefs and performance review.
The starter Owner fields reflect this assignment; research statuses and evidence
ratings remain unchanged. Product/regulatory review and publishing are distinct
responsibilities: research ownership does not establish that these reviews occurred.

Use [the main workbook](JokerLabs_Keyword_to_Page_Workbook.xlsx). After Excel was
closed, the 48 ownership assignments were applied to the original workbook.
Existing non-owner content, formulas and workbook structure were checked and
preserved. The earlier `_Camilo.xlsx` copy is no longer the working master.
Future blank rows and reviewer fields remain unassigned.

## Page implementation update — 2026-10-16

At Camilo's request, the four service topics and three operational guides have now
been implemented from repository evidence in Spanish and English. This is an
explicit production decision before keyword-account research, not a validation of
the starter keyword map. The site now has twenty local page URLs and the main
workbook has sixteen tabs, including `15_Page_Delivery`.

See [page delivery and source evidence](PAGE-DELIVERY.md). Page records, content
briefs and service destinations reflect the implementation. The first research
session below still applies: collect exports and inspect intent before claiming
search demand, prioritization or ranking results. No page has been marked live or
indexed by these local checks. Reporting content describes product file generation;
regulatory obligations and foreign product compatibility are not inferred.

## Workbook and template index

| Tab/file | Purpose |
| --- | --- |
| 00_Start | Assign owners and track the research sequence |
| 01_Markets | Record country, city, language, dates, currency and run IDs |
| 02_Pages | Track twenty implemented local ES/EN routes; deployment remains pending |
| 03_Seeds | 70 starter keyword/market observations; all hypotheses |
| 04_Keyword_Data | Enter sourced estimates, ranges, bids and export references |
| 05_SERP_Evidence | Log actual ranking URLs, buyer intent and inspection conditions |
| 06_Insights | Trends context and anonymized buyer language |
| 07_Page_Map | 21 initial cluster/market decisions; validation and priority scoring |
| 08_Content_Briefs | Turn selected clusters into reviewed page plans |
| 09_Search_Console | Capture filtered query/page observations and calculate CTR |
| 10_Outcomes | Track landing-page inquiries and qualified opportunities |
| 11_Exclusions | Review irrelevant intent and unavailable-product claims |
| 12_Decisions | Record evidence, URL changes, ownership and review dates |
| 13_Definitions / 14_Sources | Interpret fields and trace methodology |
| 15_Page_Delivery | Fourteen new detail URLs, source evidence, verification and remaining work |
| planner-imports/*.csv | Ten one-column topic batches for discovery/volume checks |
| templates/*.csv | Portable seeded tables; CSV does not retain workbook formulas |
| [Page brief](templates/PAGE-BRIEF.md) | Expanded fillable writing and approval brief |
| [Research run](templates/RESEARCH-RUN.md) | Settings and evidence note for each export |

Excel/Sheets should recalculate formulas on opening; the workbook does not contain
cached score results. Extend tables/formulas when adding rows beyond template capacity.
Import each CSV to its own sheet with UTF-8 encoding; use comma as the separator.
Do not treat spreadsheet input validation as approval of evidence or publication.

## 1. Set up access and preserve a baseline

- Research owner: Camilo. Assign any required product reviewer and publishing owner separately in the workbook.
- Confirm the SEO changes have actually been deployed. Local pages do not establish
  live indexing. Verify the domain in Search Console and submit `/sitemap.xml`.
- Open Keyword Planner in your Google Ads account. Google currently requires account
  setup, including billing information, for basic keyword discovery. Access setup
  is separate from launching an advertising campaign; do not create one for this workflow.
- Access Search Console Performance, Google Trends and your verified Business Profile.
  A paid SEO subscription is optional, not a prerequisite for this first pass.
- Export existing Search Console performance before changing content, if data exists.
  A new site may have no meaningful baseline yet. Record that explicitly.

Source: [Google Keyword Planner](https://support.google.com/google-ads/answer/7337243).

Deliverable: owners + access checked + deployment state + available baseline.

## 2. Fix research settings before comparing numbers

Fill `01_Markets`. Run national Colombia, Peru and Mexico separately. Run Cali as
an additional local-service segment; it overlaps Colombia and must not be added
to the national total. Do not change countries inside an export without recording it.

Use Google Search network, Spanish, and the same latest 12 complete months for
initial national comparisons. Record the actual dates, currency and export date;
check seasonality with available monthly columns. For local modifiers, first test
“desarrollo de software en Cali” under Colombia, then optionally repeat with Cali
targeting. These answer different questions and must retain separate run IDs.

Use IDs like `CO_ES_YYYYMMDD_SOFTWARE_01`; put the exact settings in the Markets
sheet and file name. Keep downloaded files unchanged in `raw-exports/`.
The single-column files in `planner-imports/` are **seed lists**, not metric exports.

Deliverable: reproducible market settings and one run ID per batch.

## 3. Discover and expand keywords in Keyword Planner

1. Open Tools → Keyword Planner → Discover new keywords. Menu labels can vary.
2. Start with a focused topic batch from `planner-imports/`; use the words as seeds
   in Discover. Alternatively upload the one-column file to Get search volume and
   forecasts when validating a known list. Split batches if the UI imposes limits.
3. Research software, AI, automation, integrations and Currency Exchange separately.
   Start with services for each national market; FX batches are Colombia-only.
4. Try a second discovery pass using the relevant JokerLabs page URL after it is
   live. Also use competitor URLs found in step 4; never assume they are competitors
   merely because a tool suggested them.
5. Export keywords and historical metrics. Preserve the original file, then copy
   reviewed observations into `04_Keyword_Data`; keep ID, country, run and source.
6. Add relevant newly discovered phrases to `03_Seeds`, noting their actual source.
   Preserve accents, synonyms and original query spelling. Do not deduplicate across
   different markets, settings or time periods.

Capture average monthly searches **as the tool displays them**, optional numeric
lower/upper bounds if it gives a range, monthly pattern, ad competition, bid range,
currency, exact reporting window, extraction date and raw-export filename.

If the tool returns a rounded estimate, label it an estimate; if it returns a range,
retain the range. Blank/withheld/unavailable is not zero. If a low-volume niche is
missing, keep it as an unmeasured lead for interviews or later Search Console data.
Keyword Planner competition is **advertiser competition**, not organic ranking
difficulty. Bid ranges are advertising observations, not proof of a customer's budget.
Do not sum close variants as independent demand or merge them into invented precision.

Source: [Google's metric definitions](https://support.google.com/google-ads/answer/3022575).

Deliverable: source-backed keyword observations, with unknowns visibly unknown.

## 4. Verify search intent and the actual competition

For promising phrases, manually inspect Google results in the target market and
language. Record date, country, approximate location, device and personalization
conditions. Incognito alone does not establish another country's search results.
If accurate local inspection is unavailable, label it approximate. A location-aware
rank tool is optional; it still needs recorded settings and a dated export.

In `05_SERP_Evidence`, log roughly the first five organic URLs initially and extend
to ten when a page decision is uncertain. Keep organic positions distinct from
ads, Maps results and AI features. Record a screenshot/file or reproducible URL.

For every phrase ask:

- Who is searching: a buyer, a student, an applicant, or a consumer exchanging money?
- What dominates: agency landing pages, products, comparisons, tutorials or directories?
- What job is the searcher trying to complete and what page format meets it?
- Which examples, proof, pricing explanations or objections are competitors covering?
- Can JokerLabs provide a useful, supported answer with a credible conversion path?

Compare related phrases by their top organic URLs. As an internal starting heuristic,
three shared URLs among the first five plus the same buyer task suggest one cluster.
Disjoint results or different tasks suggest separation. This is a review heuristic,
not a Google rule. Manual review wins over mechanically counting overlaps.

Deliverable: observed intent and evidence supporting each cluster.

## 5. Check seasonality and learn the buyer's vocabulary

In Google Trends compare related **search terms** within one country, category,
search type and time window. Use 12 months for seasonality and five years where
useful for direction. Record if you used a Topic rather than a search term. Keep
compared terms in the same view or document an overlapping anchor term if you use
multiple comparison batches. Export the view and retain its URL and settings.

Trends values are normalized relative interest, not monthly search counts. Values
from separate views/countries cannot be compared as absolute demand. Low-volume
terms can appear as zero; this does not prove no business opportunity.
[Google Trends methodology](https://support.google.com/trends/answer/4365533).

Use `06_Insights` to record Trends observations and anonymized prospect language.
Ask buyers what they searched before contacting vendors, what they call their
problem and which evidence they need. Keep customer identities and private data
out of this marketing workbook. Do not turn interviews into search-volume estimates.

Deliverable: seasonality notes and vocabulary that strengthens the intent decision.

## 6. Cluster and prioritize before assigning pages

`07_Page_Map` is the decision table: one row per cluster + market + language.
Several countries can deliberately share the same Spanish page. A cluster may
contain multiple closely related phrases; one primary phrase is an editorial focus,
not a restriction on which queries the page can rank for.

Fill the four 0–5 ratings using these internal rubrics:

| Rating | 0 | 3 | 5 |
| --- | --- | --- | --- |
| Business fit | Not an offer we deliver | Related, needs qualification | Exact offer and target buyer |
| Buyer intent | Irrelevant audience | Buyer researching options | Buyer selecting/requesting a provider |
| Organic feasibility | Wrong format/no credible answer | Reachable with substantial work | Matching format and distinctive proof available |
| Evidence strength | Seed only | Dated metrics and SERP evidence | Metrics, SERPs and first-party evidence agree |

Use 1/2 and 4 for intermediate cases with a written rationale. Feasibility is an
editorial assessment, not a vendor difficulty metric. Volume informs context; it
is deliberately not part of the score so niche high-value buyers are not erased.

Score = 20 × (0.40 × fit + 0.30 × intent + 0.20 × feasibility + 0.10 × evidence).
The workbook returns no score until all four ratings are numeric and evidence
status is `Validated`. Suggested internal bands: 80–100 first review; 60–79 second;
below 60 hold/rework. These are planning rules, not ranking predictions or automatic
publication approval. Apply capacity, costs and business constraints before scheduling.

Use evidence status `Hypothesis` → `Collecting` → `Validated`, or `Rejected`.
`Validated` means the researcher has linked dated source observations and SERP
review; an interview-supported niche can qualify with missing tool metrics explicitly
documented. Never mark a row Validated solely to reveal its score.

## 7. Assign one destination per intent

Use `02_Pages` for actual route status and `07_Page_Map` for research decisions:

- Brand/company: `/es` (English counterpart `/`).
- Service discovery: `/es/services`, currently a hub covering several services.
- Specialized software/AI/automation/integration intent: existing hub initially;
  dedicated child URLs are implemented locally under the authorized production
  decision above; their demand and intent assignments still require research.
- Exchange-house software buyers in Colombia: `/es/currency-exchange`.
- FX operational questions: the three implemented support guides cover closing,
  rate review and product report preparation; validate their search targeting.

Do not create separate Peru/Mexico pages simply by swapping country names. One
strong Spanish services page can serve all three markets; country pages require
materially different, useful content and a distinct user need. Service coverage is
not a claim of offices in Peru/Mexico. Currency Exchange does not yet establish
Peruvian or Mexican regulatory support.
[Google's doorway/scaled-content policies](https://developers.google.com/search/docs/essentials/spam-policies).

Before splitting a page, check overlapping intent. Differentiate, consolidate or
retain the existing page; do not assign multiple destinations to the same task
without a clear reason. Two pages appearing for a query alone is not proof of
harmful cannibalization. Review their tasks, impressions, click performance and
URL changes first. Record URL changes and redirect needs before publication.

Deliverable: one justified destination, action and owner per reviewed cluster.

## 8. Turn the map into a useful page brief

Fill `08_Content_Briefs` and copy `templates/PAGE-BRIEF.md` for the selected page.
Specify the buyer task, primary/related queries, unique evidence, title/H1 proposal,
outline, examples, internal links, CTA, claim boundaries and reviewer.

Use supported product cases: closing differences, rate-change history, receipts,
read-only access and configured report generation. Planned AI and invoicing must
remain labelled planned. Regulatory guides need current authoritative references
and an appropriate reviewer; report generation is not authority filing/acceptance.

No keyword-density targets, forced repetitions or fixed word counts. Content length
follows the task. The reader must understand what is available and how to evaluate it.
No mass-generated location pages or invented customer proof.

Deliverable: a reviewed brief with enough evidence to produce a useful page.

## 9. Publish, measure and revisit decisions

After publishing, verify response status, rendered language, self-canonical,
indexability, sitemap and internal links. Record publication date and what changed
in `12_Decisions`. Check Search Console URL Inspection against the live page.

In Search Console Performance → Search results use Web, a consistent date window
and country; export Queries and Pages for each market. For query→page evidence,
filter a query and export its Pages view, or filter a page and export its Queries.
Separate global query and page exports do not establish a query-page relationship.
Record filters and device in `09_Search_Console` and keep original exports. Query
rows are incomplete because of privacy/other limits; don't expect their sum to
match chart totals. [Google's dimensions guidance](https://support.google.com/webmasters/answer/17011259).

Review after indexing and when enough data exists; use 28-day comparisons as a
starting cadence, with equivalent periods and longer windows for small samples.
Log clicks, impressions, CTR and average position without promising a rank deadline.
Track organic landing sessions, inquiries and qualified leads in `10_Outcomes` from
analytics/CRM, with attribution definition and consent limitations recorded. GSC
queries cannot normally be joined to individual lead identity: assess conversions
by landing page/source, not invented keyword-level revenue.

- Impressions absent: check indexing and demand before rewriting the title.
- Relevant impressions but few clicks: review intent, title and result presentation.
- Clicks but weak inquiries: inspect offer, proof, CTA and form delivery.
- Wrong-country or consumer traffic: revisit query intent and destination.
- Several URLs alternating: inspect overlap before assuming cannibalization.

Deliverable: evidence-backed changes, not rankings monitored without decisions.

## First working session

### Start with two Colombia runs

The workbook and CSVs are prepared, but no account data has been collected yet. Start
with these two national batches; do not combine their results:

| Run ID | Market | Seed batch | Question |
| --- | --- | --- | --- |
| `CO_ES_20261016_FXBUY_01` | Colombia, national, Spanish | `planner-imports/fx-buy.csv` | Do exchange-house buyers search for operational software, and what purchase task do results serve? |
| `CO_ES_20261016_SOFTWARE_01` | Colombia, national, Spanish | `planner-imports/software.csv` | What buyer needs and page formats appear for custom-software services? |

Use 2025-10-01 through 2026-09-30 as the initial comparison window (the latest 12
complete months as of 2026-10-16). If the tool does not offer that exact window,
record the dates it does offer and use the same dates for comparable national runs.
Record Keyword Planner's account currency; do not assume it from the market. Keep
FX-specific research Colombia-only. Cali targeting is a separate follow-up run and
must not be added to national Colombia figures.

### Session checklist

1. **Open the workbook and establish the baseline.** In `00_Start`, assign researcher,
  product reviewer, writer and publishing owner, or mark each unassigned. In
  `01_Markets`, verify Colombia / national / Spanish / Google Search and enter the
  exact dates, account currency, run ID, extraction date and owner. Confirm whether
  the Spanish routes are live and whether Search Console has usable data. Do not
  block Keyword Planner discovery on Search Console if it is not yet available.
2. **Run FX purchase discovery.** In Google Ads, open Keyword Planner → Discover new
  keywords and enter the terms from `planner-imports/fx-buy.csv`. Set Colombia and
  Spanish, Google Search, and the recorded date window. Export keyword ideas and
  historical metrics. Save the untouched download under `raw-exports/` using the
  naming rule in its README. Duplicate `templates/RESEARCH-RUN.md`, name it for
  this run ID, and record settings and the exact export filename.
3. **Run software discovery separately.** Repeat with `planner-imports/software.csv`
  and the same national settings, dates and account currency. Save a distinct
  untouched export and run note. Do not mix FX and service terms in one export.
4. **Transfer observations, not guesses.** Add exported metrics to `04_Keyword_Data`
  with run ID, market, source, exact displayed value or range, date window and raw
  filename. Match existing phrases to their `03_Seeds` keyword IDs. Add genuinely
  new relevant phrases there with the source noted; never give a blank or withheld
  value a numeric zero. The seed lists are discovery inputs, not measured results.
5. **Inspect actual results.** For each batch, choose up to five relevant phrases
  after reviewing the export. Search each in Google with the country/language
  conditions recorded; if location cannot be controlled, label the inspection
  approximate. Log organic URLs (separate from ads, Maps and AI features), positions,
  page formats and observed buyer tasks in `05_SERP_Evidence`. Keep dated screenshots
  or reproducible result references. Do not call a suggested domain a competitor
  until its result and offer have been reviewed.
6. **Stop at a reviewable evidence set.** Update `07_Page_Map` only after linking
  keyword and SERP evidence. Leave status `Collecting` if either is missing. Record
  unknowns and the next action in the run note. The first session is complete when
  both original exports are preserved, observations are traceable, and the selected
  SERPs have dated evidence; it does not require a page or volume conclusion.

### After the first session

- Review whether FX purchase intent maps to `/es/currency-exchange`; treat any new
  regulatory or reporting topic as a separate claim review, not a keyword-led promise.
- Review how software intent should be divided between `/es/services` and the
  implemented `/es/services/desarrollo-software` page. Use the same country-level service process for Peru and
  Mexico in separate runs; do not create country pages from translated or swapped
  keywords alone.
- Add AI, automation and integration batches only after these first two exports have
  been reviewed. Then check Trends and buyer vocabulary, validate candidate clusters,
  and draft no more than two briefs from supported evidence.
- If Google account access is not ready, the immediate task is access setup and owner
  assignment. Do not create or launch an advertising campaign for this research.

Blank cells are intentional. All starter rows are hypotheses. A CSV export from
Keyword Planner plus the corresponding SERP observations is the first useful input
for turning this workbook into a researched map.
