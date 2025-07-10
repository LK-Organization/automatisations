import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_D4toJY9_.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/contact.astro.mjs');
const _page2 = () => import('./pages/conditions-generales.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/en/conditions-generales.astro.mjs');
const _page5 = () => import('./pages/en/contact.astro.mjs');
const _page6 = () => import('./pages/en/mentions-legales.astro.mjs');
const _page7 = () => import('./pages/en/solutions.astro.mjs');
const _page8 = () => import('./pages/en/termes-utilisation.astro.mjs');
const _page9 = () => import('./pages/en.astro.mjs');
const _page10 = () => import('./pages/mentions-legales.astro.mjs');
const _page11 = () => import('./pages/robots.txt.astro.mjs');
const _page12 = () => import('./pages/solutions.astro.mjs');
const _page13 = () => import('./pages/studio/_---params_.astro.mjs');
const _page14 = () => import('./pages/termes-utilisation.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.10.1_@netlify+blobs@8.2.0_@types+node@24.0.3_jiti@2.4.2_rollup@4.44.0_typescript@5.8.3_yaml@2.8.0/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/contact.ts", _page1],
    ["src/pages/conditions-generales.astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/en/conditions-generales.astro", _page4],
    ["src/pages/en/contact.astro", _page5],
    ["src/pages/en/mentions-legales.astro", _page6],
    ["src/pages/en/solutions.astro", _page7],
    ["src/pages/en/termes-utilisation.astro", _page8],
    ["src/pages/en/index.astro", _page9],
    ["src/pages/mentions-legales.astro", _page10],
    ["src/pages/robots.txt.ts", _page11],
    ["src/pages/solutions.astro", _page12],
    ["node_modules/.pnpm/@sanity+astro@3.2.6_@emotion+is-prop-valid@1.2.2_@sanity+client@6.29.1_@sanity+types@3.98.1_@_7uoyc4h3zt4bn4uaalyv743nha/node_modules/@sanity/astro/dist/studio/studio-route.astro", _page13],
    ["src/pages/termes-utilisation.astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "6788d544-1a9d-40ce-b44a-edce17f4c490"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
