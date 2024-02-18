import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DAQIPkhF.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_Ckec0UeG.mjs');
const _page1 = () => import('./chunks/about_Cqtlf3Se.mjs');
const _page2 = () => import('./chunks/index_XdOxtInn.mjs');
const _page3 = () => import('./chunks/_.._DMb5eH7y.mjs');
const _page4 = () => import('./chunks/contact_BRoHKlL6.mjs');
const _page5 = () => import('./chunks/projects_GwYKc7XH.mjs');
const _page6 = () => import('./chunks/index_7JnvgcSR.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/blog/index.astro", _page2],
    ["src/pages/blog/[...slug].astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/projects.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "b6d8c8ca-8bfd-4437-a1c3-58d17e9c0e23"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
