import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, m as maybeRenderHead, s as spreadAttributes, f as renderSlot, g as renderComponent, u as unescapeHTML, F as Fragment, h as renderHead } from '../astro_HCqiZmik.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
/* empty css                            */

const $$Astro$3 = createAstro("https://lasitha.netlify.app");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = Astro2.site ? new URL(Astro2.url.pathname, Astro2.site) : "";
  const { title, description, image = "/images/casual-photo.jpg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="X-UA-Compatible" content="ie=edge"><meta name="robots" content="index, follow"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="shortcut icon" href="favicon.ico"><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Site Manifest --><link rel="manifest" href="/site.webmanifest"><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="author" content="Lasitha Prabodha Weligampola"><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "/Users/lasithaw/Projects/Website/src/components/BaseHead.astro", void 0);

const $$Astro$2 = createAstro("https://lasitha.netlify.app");
const $$HeaderLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === "/" + subpath?.[0];
  console.log(isActive, href, pathname);
  return renderTemplate`${maybeRenderHead()}<li class="nav__list-item" data-astro-cid-eimmu3lg> <a${addAttribute(href, "href")}${addAttribute(["link link--nav", [className, { active: isActive }]], "class:list")}${spreadAttributes(props)} data-astro-cid-eimmu3lg> ${renderSlot($$result, $$slots["default"])} </a> </li> `;
}, "/Users/lasithaw/Projects/Website/src/components/HeaderLink.astro", void 0);

const SITE_TITLE = "Lasitha Prabodha Weligampola";
const SHORT_SITE_TITLE = "LP.";
const SITE_DESCRIPTION = "Experienced full-stack web developer with expertise in building robust, scalable, and user-friendly applications. Skilled in modern Javascript UI frameworks such as React, Angular and VueJS, and proficient in object-oriented languages like C#, TypeScript and Java. Passionate about leveraging technology to deliver innovative solutions and improve user experiences. Connect with me to discuss collaborations and explore opportunities.";

const $$Astro$1 = createAstro("https://lasitha.netlify.app");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { default: moon } = await import('../moon_C22maEpB.mjs');
  const { default: sun } = await import('../sun_BHYwecnk.mjs');
  return renderTemplate`${maybeRenderHead()}<header class="header center" data-astro-cid-3ef6ksr2> <h3 data-astro-cid-3ef6ksr2> <a href="/" class="link" data-astro-cid-3ef6ksr2>${SHORT_SITE_TITLE}</a> </h3> <nav class="nav center" data-astro-cid-3ef6ksr2> <ul class="nav__list center" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/projects", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Projects` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/skills", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Skills` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/blogs", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Blogs` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/contact", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Contact` })} </ul> <button id="theme-toggle" type="button" aria-label="toggle theme" class="btn btn--icon" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(moon)}` })} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(sun)}` })} </button> <button type="button" aria-label="toggle navigation" class="btn btn--icon nav__hamburger" data-astro-cid-3ef6ksr2> <i aria-hidden="true" class="fas fa-bars" data-astro-cid-3ef6ksr2></i> </button> </nav> </header>  `;
}, "/Users/lasithaw/Projects/Website/src/components/Header.astro", void 0);

const $$Astro = createAstro("https://lasitha.netlify.app");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const SITE_TITLE = "Contact Lasitha";
  const SITE_DESCRIPTION = "Contact Lasitha";
  await import('../eye_CbmjVSHE.mjs');
  await import('../book_DhIMT_sU.mjs');
  await import('../code_CiJI-N8V.mjs');
  return renderTemplate`<html lang="en" data-astro-cid-uw5kdbxl> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-uw5kdbxl": true })}${renderHead()}</head> <body class="light" id="top" data-astro-cid-uw5kdbxl> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-uw5kdbxl": true })} <section id="projects" data-astro-cid-uw5kdbxl> <h2 class="section__title" data-astro-cid-uw5kdbxl>Contact Me</h2> <div class="projects__grid" data-astro-cid-uw5kdbxl></div> </section> </body></html>`;
}, "/Users/lasithaw/Projects/Website/src/pages/contact.astro", void 0);

const $$file = "/Users/lasithaw/Projects/Website/src/pages/contact.astro";
const $$url = "/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseHead as $, SITE_TITLE as S, $$Header as a, SITE_DESCRIPTION as b, contact as c };
