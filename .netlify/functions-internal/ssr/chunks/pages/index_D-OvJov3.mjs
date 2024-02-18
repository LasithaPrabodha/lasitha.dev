import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, e as addAttribute, u as unescapeHTML, F as Fragment } from '../astro_alz-BsiK.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$Page } from './__DlbiDtyt.mjs';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from './about_DmLJigOB.mjs';
/* empty css                          */

const $$Astro$2 = createAstro("https://lasitha.netlify.app");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  const posts = (await getCollection("blog")).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "addNight": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="projects"> <h2 class="section__title">Let's Learn Together!</h2> <div class="projects__grid"> <ul> ${posts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.slug}/`, "href")}> <div class="blog"> <div> <img${addAttribute(post.data.heroImage, "src")} alt=""> </div> <div class="text"> <div class="title"> <h4>${post.data.title}</h4> <small>${post.data.pubDate}</small> </div> <p> ${post.data.description} </p> </div> </div> </a>`)} </ul> </div> </section> ` })}`;
}, "/Users/lasithaw/Projects/Website/src/pages/blog/index.astro", void 0);

const $$file$1 = "/Users/lasithaw/Projects/Website/src/pages/blog/index.astro";
const $$url$1 = "/blog";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://lasitha.netlify.app");
const $$ContactIcons = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactIcons;
  const { default: instagram } = await import('../instagram_BC7Y5_rI.mjs');
  const { default: facebook } = await import('../facebook_CsLfrisN.mjs');
  const { default: linkedin } = await import('../linkedin_CD56u4Bz.mjs');
  const { default: github } = await import('../github_E4boNF-N.mjs');
  return renderTemplate`${maybeRenderHead()}<div class="contact-links center"> <a href="https://www.instagram.com/lu6_fer/" target="_blank" rel="noreferrer" aria-label="insta" class="link link--icon"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(instagram)}` })} </a> <a href="https://www.facebook.com/lmlxlml/" target="_blank" rel="noreferrer" aria-label="fb" class="link link--icon"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(facebook)}` })} </a> <a href="https://linkedin.com/in/lasithapw" target="_blank" rel="noreferrer" aria-label="linkedin" class="link link--icon"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(linkedin)}` })} </a> <a href="https://github.com/LasithaPrabodha" target="_blank" rel="noreferrer" aria-label="github" class="link link--icon"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(github)}` })} </a> </div>`;
}, "/Users/lasithaw/Projects/Website/src/components/ContactIcons.astro", void 0);

const $$Astro = createAstro("https://lasitha.netlify.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "addNight": true, "class": "about center" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>
Hi, I am <span class="about__name">Lasitha Prabodha.</span> </h1> <h2 class="about__role">A Full Stack & Mobile Software Engineer.</h2> ${renderComponent($$result2, "ContactIcons", $$ContactIcons, {})} ` })}`;
}, "/Users/lasithaw/Projects/Website/src/pages/index.astro", void 0);

const $$file = "/Users/lasithaw/Projects/Website/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
