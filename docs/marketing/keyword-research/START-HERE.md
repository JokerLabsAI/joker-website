# JokerLabs keyword-to-page research workflow

Prepared 2026-10-15. Start with `JokerLabs_Keyword_to_Page_Workbook.xlsx` in this folder.
[Open the workbook](JokerLabs_Keyword_to_Page_Workbook.xlsx), import it into Google Sheets or open it in Excel. Blue text means an input; gray
cells are formulas. Templates are working documents, not measured research results.

JokerLabs is based in Cali, Colombia, initially serving Colombia, Peru and Mexico.
Currency Exchange currently addresses Colombian exchange houses. Spanish is the
first research language; English routes exist but English keyword demand remains
a separate research task. No keyword volumes or competitor findings were fabricated.

## Workbook and template index

| Tab/file | Purpose |
| --- | --- |
| 00_Start | Assign owners and track the research sequence |
| 01_Markets | Record country, city, language, dates, currency and run IDs |
| 02_Pages | Separate six current local routes from seven proposed pages |
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
| planner-imports/*.csv | Ten one-column topic batches for discovery/volume checks |
| templates/*.csv | Portable seeded tables; CSV does not retain workbook formulas |
| [Page brief](templates/PAGE-BRIEF.md) | Expanded fillable writing and approval brief |
| [Research run](templates/RESEARCH-RUN.md) | Settings and evidence note for each export |

Excel/Sheets should recalculate formulas on opening; the workbook does not contain
cached score results. Extend tables/formulas when adding rows beyond template capacity.
Import each CSV to its own sheet with UTF-8 encoding; use comma as the separator.
Do not treat spreadsheet input validation as approval of evidence or publication.

## 1. Set up access and preserve a baseline

- Assign a research owner, product reviewer, writer and publishing owner in the workbook.
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
  dedicated child URLs are **proposals** requiring demand, intent and delivery evidence.
- Exchange-house software buyers in Colombia: `/es/currency-exchange`.
- FX operational questions: proposed support guides only when their topic helps the
  product buyer and product evidence supports the content.

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

1. Complete market settings and owners; confirm live deployment/Search Console access.
2. Research Colombian Currency Exchange purchase terms and software/AI service terms.
3. Inspect results for five promising phrases; record exact URLs and intent.
4. Repeat the service batches separately for Peru and Mexico.
5. Validate a small set of clusters, choose destinations and complete two briefs.
6. Schedule content only after reviewing the evidence and delivery scope.

Blank cells are intentional. All starter rows are hypotheses. A CSV export from
Keyword Planner plus the corresponding SERP observations is the first useful input
for turning this workbook into a researched map.
