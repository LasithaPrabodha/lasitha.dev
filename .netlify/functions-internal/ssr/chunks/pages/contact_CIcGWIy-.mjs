import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, h as renderHead } from '../astro_alz-BsiK.mjs';
import 'kleur/colors';
import { a as $$BaseHead, b as $$Header } from './__DlbiDtyt.mjs';
/* empty css                            */

const $$Astro = createAstro("https://lasitha.netlify.app");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const SITE_TITLE = "Contact Lasitha";
  const SITE_DESCRIPTION = "Contact Lasitha";
  await import('../eye_CbmjVSHE.mjs');
  await import('../book_DhIMT_sU.mjs');
  await import('../code_CiJI-N8V.mjs');
  return renderTemplate`<html lang="en" data-astro-cid-uw5kdbxl> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-uw5kdbxl": true })}${renderHead()}</head> <body class="dark" id="top" data-astro-cid-uw5kdbxl> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-uw5kdbxl": true })} <section id="projects" data-astro-cid-uw5kdbxl> <h2 class="section__title" data-astro-cid-uw5kdbxl>Contact Me</h2> <div class="projects__grid" data-astro-cid-uw5kdbxl></div> </section> </body></html>`;
}, "/Users/lasithaw/Projects/Website/src/pages/contact.astro", void 0);

const $$file = "/Users/lasithaw/Projects/Website/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
