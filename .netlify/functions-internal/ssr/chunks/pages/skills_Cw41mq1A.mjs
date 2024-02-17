import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderComponent, h as renderHead } from '../astro_HCqiZmik.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header } from './contact_DmNQHckK.mjs';
import 'clsx';
/* empty css                           */

const $$Astro$1 = createAstro("https://lasitha.netlify.app");
const $$Skill = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Skill;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="skill btn btn--plain" data-astro-cid-lfejdz7i> <p data-astro-cid-lfejdz7i>${title}</p> </div> `;
}, "/Users/lasithaw/Projects/Website/src/components/Skill.astro", void 0);

const $$Astro = createAstro("https://lasitha.netlify.app");
const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Skills;
  const SITE_TITLE = "Lasitha's - Technical Skills";
  const SITE_DESCRIPTION = "Lasitha's - Technical Skills";
  return renderTemplate`<html lang="en" data-astro-cid-xahix5fp> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-xahix5fp": true })}${renderHead()}</head> <body class="light" id="top" data-astro-cid-xahix5fp> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-xahix5fp": true })} <section id="skills" data-astro-cid-xahix5fp> <h2 class="section__title" data-astro-cid-xahix5fp>Technical Skills</h2> <h4 class="section__sub-title" data-astro-cid-xahix5fp>Languages</h4> <div class="skills__grid" data-astro-cid-xahix5fp> ${renderComponent($$result, "Skill", $$Skill, { "title": "JavaScript", "data-astro-cid-xahix5fp": true })} ${renderComponent($$result, "Skill", $$Skill, { "title": "TypeScript", "data-astro-cid-xahix5fp": true })} ${renderComponent($$result, "Skill", $$Skill, { "title": "C#", "data-astro-cid-xahix5fp": true })} ${renderComponent($$result, "Skill", $$Skill, { "title": "Dart", "data-astro-cid-xahix5fp": true })} ${renderComponent($$result, "Skill", $$Skill, { "title": "PHP", "data-astro-cid-xahix5fp": true })} ${renderComponent($$result, "Skill", $$Skill, { "title": "Kotlin", "data-astro-cid-xahix5fp": true })} ${renderComponent($$result, "Skill", $$Skill, { "title": "Swift", "data-astro-cid-xahix5fp": true })} ${renderComponent($$result, "Skill", $$Skill, { "title": "HTML5", "data-astro-cid-xahix5fp": true })} ${renderComponent($$result, "Skill", $$Skill, { "title": "CSS3", "data-astro-cid-xahix5fp": true })} </div> <h4 class="section__sub-title" data-astro-cid-xahix5fp>Frameworks & Libraries</h4> <div class="skills__grid" data-astro-cid-xahix5fp> ${renderComponent($$result, "Skill", $$Skill, { "title": "Laravel", "data-astro-cid-xahix5fp": true })} ${renderComponent($$result, "Skill", $$Skill, { "title": "ASP.NET Core", "data-astro-cid-xahix5fp": true })} ${renderComponent($$result, "Skill", $$Skill, { "title": "Flutter", "data-astro-cid-xahix5fp": true })} ${renderComponent($$result, "Skill", $$Skill, { "title": "Angular", "data-astro-cid-xahix5fp": true })} ${renderComponent($$result, "Skill", $$Skill, { "title": "ReactJS", "data-astro-cid-xahix5fp": true })} ${renderComponent($$result, "Skill", $$Skill, { "title": "React Native", "data-astro-cid-xahix5fp": true })} ${renderComponent($$result, "Skill", $$Skill, { "title": "VueJS", "data-astro-cid-xahix5fp": true })} ${renderComponent($$result, "Skill", $$Skill, { "title": "Astro", "data-astro-cid-xahix5fp": true })} </div> <h4 class="section__sub-title" data-astro-cid-xahix5fp>Cloud & DB</h4> <div class="skills__grid" data-astro-cid-xahix5fp> ${renderComponent($$result, "Skill", $$Skill, { "title": "Azure", "data-astro-cid-xahix5fp": true })} ${renderComponent($$result, "Skill", $$Skill, { "title": "Firebase", "data-astro-cid-xahix5fp": true })} ${renderComponent($$result, "Skill", $$Skill, { "title": "MSSQL", "data-astro-cid-xahix5fp": true })} </div> </section> </body></html>`;
}, "/Users/lasithaw/Projects/Website/src/pages/skills.astro", void 0);

const $$file = "/Users/lasithaw/Projects/Website/src/pages/skills.astro";
const $$url = "/skills";

export { $$Skills as default, $$file as file, $$url as url };
