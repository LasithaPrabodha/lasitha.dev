import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderComponent, u as unescapeHTML, F as Fragment, h as renderHead } from '../astro_HCqiZmik.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header } from './contact_DmNQHckK.mjs';
/* empty css                             */

const $$Astro$1 = createAstro("https://lasitha.netlify.app");
const $$Project = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Project;
  const { title, description, technologies, links } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="project" data-astro-cid-tkm2rszc> <h3 data-astro-cid-tkm2rszc>${title}</h3> <p class="project__description" data-astro-cid-tkm2rszc>${description}</p> <ul class="project__stack" data-astro-cid-tkm2rszc> ${technologies.map((t) => renderTemplate`<li class="project__stack-item" data-astro-cid-tkm2rszc>${t}</li>`)} </ul> <div class="links" data-astro-cid-tkm2rszc> ${links.map((l) => renderTemplate`<a${addAttribute(l.href, "href")} target="_blank" rel="noreferrer"${addAttribute(l.ariaLabel, "aria-label")} class="link link--icon" data-astro-cid-tkm2rszc> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(l.icon)}` })} </a>`)} </div> </div> `;
}, "/Users/lasithaw/Projects/Website/src/components/Project.astro", void 0);

const $$Astro = createAstro("https://lasitha.netlify.app");
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const SITE_TITLE = "Lasitha's - Projects";
  const SITE_DESCRIPTION = "Lasitha's - Projects";
  const { default: eye } = await import('../eye_CbmjVSHE.mjs');
  const { default: book } = await import('../book_DhIMT_sU.mjs');
  const { default: code } = await import('../code_CiJI-N8V.mjs');
  return renderTemplate`<html lang="en" data-astro-cid-aid3sr62> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-aid3sr62": true })}${renderHead()}</head> <body class="light" id="top" data-astro-cid-aid3sr62> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-aid3sr62": true })} <section id="projects" data-astro-cid-aid3sr62> <h2 class="section__title" data-astro-cid-aid3sr62>Projects</h2> <div class="projects__grid" data-astro-cid-aid3sr62> ${renderComponent($$result, "Project", $$Project, { "title": "SuperOffice - Developer Portal", "description": "Contains a set of self-serve tools that developers can use to manage their access to SuperOffice Online APIs", "technologies": ["Angular", ".NET", "C#"], "links": [
    {
      href: "https://docs.superoffice.com/en/developer-portal/about.html",
      ariaLabel: "documentation",
      icon: book
    }
  ], "data-astro-cid-aid3sr62": true })} ${renderComponent($$result, "Project", $$Project, { "title": "Cenium PMS", "description": "Streamlines complex group bookings with a versatile and dynamic PMS solution", "technologies": ["Angular", ".NET", "C#"], "links": [{ href: "https://www.cenium.com/pms", ariaLabel: "website", icon: book }], "data-astro-cid-aid3sr62": true })} ${renderComponent($$result, "Project", $$Project, { "title": "CarPool App Backend", "description": "A project written .NET to learn clean architecture with DDD", "technologies": [".NET", "C#"], "links": [
    { href: "https://github.com/LasithaPrabodha/CleanArchitecture", ariaLabel: "source code", icon: code }
  ], "data-astro-cid-aid3sr62": true })} ${renderComponent($$result, "Project", $$Project, { "title": "Club Arena", "description": "Simplifies sports facility management, enabling easy bookings without manual processing", "technologies": ["Angular", ".NET", "C#"], "links": [{ href: "https://github.com/LasithaPrabodha/jeopardy-app", ariaLabel: "source code", icon: eye }], "data-astro-cid-aid3sr62": true })} ${renderComponent($$result, "Project", $$Project, { "title": "Jeopardy", "description": "A simple implementation of the classic TV game show 'Jeopardy'. The project is built using vanilla JavaScript", "technologies": ["JavaScript", "CSS", "HTML"], "links": [
    { href: "https://github.com/LasithaPrabodha/jeopardy-app", ariaLabel: "source code", icon: code },
    { href: "https://lasithaprabodha.github.io/jeopardy-app", ariaLabel: "source code", icon: eye }
  ], "data-astro-cid-aid3sr62": true })} ${renderComponent($$result, "Project", $$Project, { "title": "Kingsbury Toronto", "description": "A mobile-first and user-friendly website for a luxurious apartment in Toronto", "technologies": ["CSS", "HTML"], "links": [{ href: "https://kingsbury-toronto-website.web.app", ariaLabel: "live preview", icon: eye }], "data-astro-cid-aid3sr62": true })} </div> </section> </body></html>`;
}, "/Users/lasithaw/Projects/Website/src/pages/projects.astro", void 0);

const $$file = "/Users/lasithaw/Projects/Website/src/pages/projects.astro";
const $$url = "/projects";

export { $$Projects as default, $$file as file, $$url as url };
