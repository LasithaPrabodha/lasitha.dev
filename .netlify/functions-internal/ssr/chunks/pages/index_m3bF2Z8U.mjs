import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, h as renderHead, m as maybeRenderHead, u as unescapeHTML, F as Fragment } from '../astro_HCqiZmik.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header, S as SITE_TITLE, b as SITE_DESCRIPTION } from './contact_DmNQHckK.mjs';
/* empty css                          */
import { $ as $$Image } from './generic_CwOgoM9A.mjs';
/* empty css                          */

const $$Astro$2 = createAstro("https://lasitha.netlify.app");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  const SITE_TITLE = "Lasitha's - Technical Skills";
  const SITE_DESCRIPTION = "Lasitha's - Technical Skills";
  await import('../eye_CbmjVSHE.mjs');
  await import('../book_DhIMT_sU.mjs');
  await import('../code_CiJI-N8V.mjs');
  return renderTemplate`<html lang="en" data-astro-cid-cvbuhuel> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-cvbuhuel": true })}${renderHead()}</head> <body class="light" id="top" data-astro-cid-cvbuhuel> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-cvbuhuel": true })} <section id="projects" data-astro-cid-cvbuhuel> <h2 class="section__title" data-astro-cid-cvbuhuel>Blogs</h2> <div class="projects__grid" data-astro-cid-cvbuhuel></div> </section> </body></html>`;
}, "/Users/lasithaw/Projects/Website/src/pages/blogs/index.astro", void 0);

const $$file$1 = "/Users/lasithaw/Projects/Website/src/pages/blogs/index.astro";
const $$url$1 = "/blogs";

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

const avatar = new Proxy({"src":"/_astro/avatar.BC0r15jH.webp","width":512,"height":512,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lasithaw/Projects/Website/src/assets/images/avatar.webp";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://lasitha.netlify.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body class="light" id="top"> ${renderComponent($$result, "Header", $$Header, {})} <div class="about center"> <canvas id="canvas"></canvas> <h1>
Hi, I am <span class="about__name">Lasitha Prabodha.</span> <div class="welcome-animation">👋🏼</div> </h1> <h2 class="about__role">A Full Stack & Mobile Software Engineer.</h2> <p class="about__desc">
I design and develop engaging web, mobile, and API experiences with
<br>
Angular, React Native, ASP.NET Core and more.
<br> <br>
I'm always eager to bring my skills and enthusiasm for new challenges.
<br> <br> <a class="link link--nav" href="#contact">Let's collaborate!</a> </p> ${renderComponent($$result, "Image", $$Image, { "id": "avatar", "src": avatar, "alt": "my avatar, holding a macbook pro" })} ${renderComponent($$result, "ContactIcons", $$ContactIcons, {})} </div>  </body> </html>`;
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
