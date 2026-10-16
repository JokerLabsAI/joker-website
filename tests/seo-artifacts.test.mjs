// Run after next build: node --test tests/seo-artifacts.test.mjs
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import test from 'node:test';

const origin = 'https://jokerlabs.ai';
const pages = ['', '/services', '/currency-exchange'];
function html(path) {
  return readFileSync(`.next/server/app/${path ? path.slice(1) : 'index'}.html`, 'utf8');
}
function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map((match) => [match[1], match[2]]));
}
const sameUrl = (actual, expected) => actual && new URL(actual).href === new URL(expected).href;
const titles = new Set();
for (const base of pages) {
  for (const locale of ['en', 'es']) {
    const path = locale === 'es' ? `/es${base}` : base;
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
      for (const [lang, href] of [['en', `${origin}${base || '/'}`], ['es', `${origin}/es${base}`], ['x-default', `${origin}${base || '/'}`]]) {
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

test('sitemap lists all six canonical pages and robots advertises it', () => {
  const sitemap = readFileSync('.next/server/app/sitemap.xml.body', 'utf8');
  assert.equal((sitemap.match(/<url>/g) || []).length, 6);
  for (const base of pages) {
    assert.ok(sitemap.includes(`<loc>${origin}${base || '/'}</loc>`));
    assert.ok(sitemap.includes(`<loc>${origin}/es${base}</loc>`));
  }
  const robots = readFileSync('.next/server/app/robots.txt.body', 'utf8');
  assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
  assert.ok(robots.includes('Disallow: /api/'));
});
