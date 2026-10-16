# Search visibility and Google Business Profile

Updated 2026-10-15. Local implementation; deployment and Google indexing are separate.

## Implemented

- Existing English URLs are preserved: `/`, `/services`, `/currency-exchange`.
- Spanish URLs serve Spanish content in initial static HTML: `/es`, `/es/services`,
  `/es/currency-exchange`. Language comes from the URL, not browser storage.
- Separate root layouts share `SiteDocument` and set the initial HTML language.
  Switching language loads the equivalent document; normal navigation stays in that language.
- Unique titles/descriptions, self-canonicals, reciprocal EN/ES/x-default alternates,
  matching social metadata and the existing branded `/opengraph-image` asset.
- `/sitemap.xml` lists the twenty canonical pages and language alternates. No invented
  modification dates, priorities or publishing frequencies.
- `/robots.txt` advertises the sitemap and excludes API crawling. This is not access control.
- Organization JSON-LD uses the existing business name, website, email, logo and
  supplied social links. Product pages also identify Currency Exchange as a web
  BusinessApplication, without invented prices, ratings or AI functionality.

Content intent: company pages cover JokerLabs and applied AI/software in Colombia;
services pages cover software development, AI, automation and integrations; product
pages cover software for Colombian exchange houses. These are editorial targets,
not measured search volumes or ranking claims.

## Google Business Profile connection

The owner supplied the profile link on 2026-10-15. Its entity identifier is
`/g/11zfb2610_`. `SITE.googleBusinessProfile` preserves that identifier and the
search query while removing session, account, attribution and sharing parameters.
It is included in Organization.sameAs and linked visibly in both footer languages.
This is an owner-supplied identity link; the profile details could not be read by
the browsing tool.

The owner confirmed Cali, Colombia as the company base and Colombia, Peru and
Mexico as the initial service markets. Company/services descriptions, hero location
and localized contact copy reflect this. Organization.location contains the city
and country only; areaServed lists the three countries using Schema.org Country
entities. No street address, foreign office, phone or opening hours were supplied.
Keep those details absent until confirmed. This is owner-confirmed geography,
not independent verification of the current Google profile fields.

Currency Exchange remains positioned for Colombian exchange houses and its
Colombia-specific reporting workflows. Regional services coverage does not imply
Peruvian or Mexican regulatory support for that product.

After confirmation, show relevant contact information visibly on the site. Use LocalBusiness markup only with
appropriate, accurate public details. Do not expose a service-area business's hidden
street address merely to fill schema fields. Do not invent reviews or ratings.

## After deployment

1. Ensure the live domain uses the same preferred HTTPS host as SITE_URL; verify
   redirects for alternate hosts before changing canonical configuration.
2. In Google Search Console, verify the domain using the owner-provided DNS record.
   Submit `https://jokerlabs.ai/sitemap.xml` and inspect all twenty canonical URLs.
   Confirm rendered language, indexing eligibility, canonical selection and crawl errors.
3. Validate live JSON-LD using Google's Rich Results Test and Schema Markup Validator.
   Organization/product markup describes entities; it does not guarantee a rich result.
4. Match profile business name/contact/service information to the site. Use the
   appropriate language landing URL as the profile website; optional attribution:
   `?utm_source=google&utm_medium=organic&utm_campaign=business_profile`.
   The canonical stays query-free. Add only services actually delivered.
5. Request honest reviews from actual customers and respond to them. Publish real
   project examples with permission; do not manufacture testimonials or city pages.
6. Establish Search Console baselines by query, landing page, country and device:
   impressions, clicks, click-through rate and qualified inquiries. Review actual
   Core Web Vitals before making performance claims or prioritizing further optimization.

No profile edits, DNS changes, Search Console submission or publication were performed.

## Verification

Run a production build, then `node --test tests/seo-artifacts.test.mjs`. This checks
rendered HTML language, one H1, unique titles, descriptions, canonicals, reciprocal
alternates, social URLs, parseable organization/product JSON-LD, Spanish navigation,
all sitemap entries and robots discovery. TypeScript and targeted ESLint supplement
these artifact checks. Browser interaction was checked for the new detail pages; live indexing remains a separate check.

## References

- Google multilingual URLs and language annotations:
  https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
- Google Organization structured data:
  https://developers.google.com/search/docs/appearance/structured-data/organization
- Google sitemaps:
  https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Business Profile local ranking guidance:
  https://support.google.com/business/answer/7091

Local validation: production webpack build passed with network access for Google
Fonts; twenty-two rendered-artifact checks passed; targeted ESLint passed. The build
retains the existing edge social-image notice and a fallback metadataBase warning
for the generated not-found document. All twenty public-page social image URLs and
canonicals were verified as absolute production URLs. Desktop/mobile browser checks cover the new detail pages; no live Google crawl was run.

## Keyword research workbook

Use the [keyword-to-page workflow](marketing/keyword-research/START-HERE.md) and
its Excel workbook to collect market-specific Planner data, verify intent, assign
pages and track outcomes. Starter keywords and page assignments are hypotheses;
measured fields remain blank until sourced exports are supplied.


## Detail-page expansion — 2026-10-16

Four services and three product guides now have ES/EN detail URLs, translated slug
navigation and hub/related links. Metadata and sitemap share the route registry.
See [the implementation ledger](marketing/keyword-research/PAGE-DELIVERY.md).
These pages were authorized from repository evidence before keyword validation;
research and deployment statuses remain independently tracked in the main workbook.
