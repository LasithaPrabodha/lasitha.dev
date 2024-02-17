import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_HCqiZmik.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DKmc1MT3.js"}],"styles":[{"type":"external","src":"/_astro/index.CCLarabR.css"},{"type":"inline","content":".projects__grid[data-astro-cid-cvbuhuel]{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(18em,1fr));grid-gap:2em}\n"}],"routeData":{"route":"/blogs","isIndex":true,"type":"page","pattern":"^\\/blogs\\/?$","segments":[[{"content":"blogs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blogs/index.astro","pathname":"/blogs","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DKmc1MT3.js"}],"styles":[{"type":"external","src":"/_astro/index.CCLarabR.css"},{"type":"inline","content":".projects__grid[data-astro-cid-uw5kdbxl]{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(18em,1fr));grid-gap:2em}\n"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DKmc1MT3.js"}],"styles":[{"type":"external","src":"/_astro/index.CCLarabR.css"},{"type":"inline","content":".project[data-astro-cid-tkm2rszc]{padding:2em;margin:0 auto;text-align:center;box-shadow:var(--shadow);transition:transform .2s linear;border-radius:8px;display:flex;flex-direction:column}.project__description[data-astro-cid-tkm2rszc]{margin-top:1em}.project__stack[data-astro-cid-tkm2rszc]{display:flex;flex-wrap:wrap;justify-content:center;margin:1.2em 0}.project__stack-item[data-astro-cid-tkm2rszc]{margin:.5em;font-weight:500;font-size:.8rem;color:var(--clr-fg-alt)}.link--icon[data-astro-cid-tkm2rszc]{margin-left:.5em}.links[data-astro-cid-tkm2rszc]{flex:1;display:flex;justify-content:center;align-items:flex-end}.projects__grid[data-astro-cid-aid3sr62]{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(18em,1fr));grid-gap:2em}\n"}],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DKmc1MT3.js"}],"styles":[{"type":"external","src":"/_astro/index.CCLarabR.css"},{"type":"inline","content":".skill[data-astro-cid-lfejdz7i]{padding:1em .8em;border-radius:8px;width:100%;max-width:10em}.skill[data-astro-cid-lfejdz7i]>[data-astro-cid-lfejdz7i]{background:transparent;font-weight:500;font-size:18px;text-align:center}.skills__grid[data-astro-cid-xahix5fp]{max-width:1100px;margin:2em auto 0;display:flex;justify-content:center;flex-wrap:wrap;gap:2em}.section__sub-title[data-astro-cid-xahix5fp]{text-align:center;margin-top:2.5em;margin-bottom:1em;text-transform:uppercase}#skills[data-astro-cid-xahix5fp]{margin-bottom:3em}\n"}],"routeData":{"route":"/skills","isIndex":false,"type":"page","pattern":"^\\/skills\\/?$","segments":[[{"content":"skills","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/skills.astro","pathname":"/skills","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.P24soSxn.js"}],"styles":[{"type":"external","src":"/_astro/index.CCLarabR.css"},{"type":"inline","content":".about{flex-direction:column;overflow:hidden;background:transparent}.about *:not(canvas){z-index:1}.nav-open .about *:not(canvas){z-index:-1}canvas{z-index:0;position:absolute;top:0;left:0;display:none}.dark canvas{display:block}.light canvas{display:none}.about h1{font-size:4em}.about__name{-webkit-text-fill-color:transparent;background-clip:text;-webkit-background-clip:text;background-image:linear-gradient(45deg,var(--clr-grd-one),var(--clr-grd-two))}.about__role{margin-top:1em}.about__desc{font-size:1rem;max-width:720px;margin-top:4em}.about .btn--outline{margin-right:1em}#avatar{width:150px;height:150px;margin-top:2em}.welcome-animation{display:inline-block;animation:wave 1s ease;animation-delay:1s}.contact-links{margin-top:3em}.contact-links .link--icon{margin-right:.5em;margin-left:.5em;display:flex;padding:8px 0}@media (max-width: 600px){.about{margin-top:2em;margin-left:1em;margin-right:1em}.about h1{font-size:3em}.night-back-container{margin-left:-1em;margin-right:-1em}.contact-links{margin-top:2em}}@keyframes wave{0%{transform:rotate(0)}25%{transform:rotate(15deg)}75%{transform:rotate(-15deg)}to{transform:rotate(0)}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://lasitha.netlify.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/lasithaw/Projects/Website/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/lasithaw/Projects/Website/src/pages/blogs/index.astro",{"propagation":"none","containsHead":true}],["/Users/lasithaw/Projects/Website/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/lasithaw/Projects/Website/src/pages/projects.astro",{"propagation":"none","containsHead":true}],["/Users/lasithaw/Projects/Website/src/pages/skills.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/projects.astro":"chunks/pages/projects_CTN8wwJs.mjs","/src/pages/skills.astro":"chunks/pages/skills_Cw41mq1A.mjs","\u0000@astrojs-manifest":"manifest_D4aSD8rz.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_AfTssK5_.mjs","\u0000@astro-page:src/pages/blogs/index@_@astro":"chunks/index_LTi5jrWw.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_BJ_a-MNn.mjs","\u0000@astro-page:src/pages/projects@_@astro":"chunks/projects_D48x9ICx.mjs","\u0000@astro-page:src/pages/skills@_@astro":"chunks/skills_bhaaO9Gn.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_BNceB3HU.mjs","/Users/lasithaw/Projects/Website/src/assets/icons/eye.svg?raw":"chunks/eye_CbmjVSHE.mjs","/Users/lasithaw/Projects/Website/src/assets/icons/book.svg?raw":"chunks/book_DhIMT_sU.mjs","/Users/lasithaw/Projects/Website/src/assets/icons/code.svg?raw":"chunks/code_CiJI-N8V.mjs","/Users/lasithaw/Projects/Website/src/assets/icons/moon.svg?raw":"chunks/moon_C22maEpB.mjs","/Users/lasithaw/Projects/Website/src/assets/icons/sun.svg?raw":"chunks/sun_BHYwecnk.mjs","/Users/lasithaw/Projects/Website/src/assets/icons/instagram.svg?raw":"chunks/instagram_BC7Y5_rI.mjs","/Users/lasithaw/Projects/Website/src/assets/icons/facebook.svg?raw":"chunks/facebook_CsLfrisN.mjs","/Users/lasithaw/Projects/Website/src/assets/icons/linkedin.svg?raw":"chunks/linkedin_CD56u4Bz.mjs","/Users/lasithaw/Projects/Website/src/assets/icons/github.svg?raw":"chunks/github_E4boNF-N.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.DKmc1MT3.js","/astro/hoisted.js?q=0":"_astro/hoisted.P24soSxn.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/avatar.BC0r15jH.webp","/_astro/index.CCLarabR.css","/favicon.ico","/robots.txt","/site.webmanifest","/sitemap.xml","/_astro/hoisted.DKmc1MT3.js","/_astro/hoisted.P24soSxn.js","/fonts/pxiByp8kv8JHgFVrLCz7Z11lFd2JQEl8qw.woff2","/fonts/pxiByp8kv8JHgFVrLCz7Z1JlFd2JQEl8qw.woff2","/fonts/pxiByp8kv8JHgFVrLCz7Z1xlFd2JQEk.woff2","/fonts/pxiByp8kv8JHgFVrLGT9Z11lFd2JQEl8qw.woff2","/fonts/pxiByp8kv8JHgFVrLGT9Z1xlFd2JQEk.woff2","/fonts/pxiEyp8kv8JHgFVrJJbecnFHGPezSQ.woff2","/fonts/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2","/fonts/pxiEyp8kv8JHgFVrJJnecnFHGPezSQ.woff2"],"buildFormat":"directory"});

export { manifest };
