import { renderers } from './renderers.mjs';
import { manifest } from './manifest_D4aSD8rz.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_AfTssK5_.mjs');
const _page1 = () => import('./chunks/index_LTi5jrWw.mjs');
const _page2 = () => import('./chunks/contact_BJ_a-MNn.mjs');
const _page3 = () => import('./chunks/projects_D48x9ICx.mjs');
const _page4 = () => import('./chunks/skills_bhaaO9Gn.mjs');
const _page5 = () => import('./chunks/index_BNceB3HU.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/blogs/index.astro", _page1],
    ["src/pages/contact.astro", _page2],
    ["src/pages/projects.astro", _page3],
    ["src/pages/skills.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "fa9d51d2-3cd2-4e7a-9adf-3b3f367f511f"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
