import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { p as NOOP_MIDDLEWARE_HEADER, q as decodeKey } from './chunks/astro/server_BZE_cvkn.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
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
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
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
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/","cacheDir":"file:///C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/node_modules/.astro/","outDir":"file:///C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/dist/","srcDir":"file:///C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/","publicDir":"file:///C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/public/","buildClientDir":"file:///C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/dist/","buildServerDir":"file:///C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.10.1_@netlify+blobs@8.2.0_@types+node@24.0.3_jiti@2.4.2_rollup@4.44.0_typescript@5.8.3_yaml@2.8.0/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.C5VM41Zj.css"},{"type":"external","src":"/_astro/conditions-generales.BfSb1Wo_.css"}],"routeData":{"route":"/conditions-generales","isIndex":false,"type":"page","pattern":"^\\/conditions-generales\\/?$","segments":[[{"content":"conditions-generales","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/conditions-generales.astro","pathname":"/conditions-generales","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.C5VM41Zj.css"},{"type":"external","src":"/_astro/conditions-generales.BfSb1Wo_.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.C5VM41Zj.css"},{"type":"external","src":"/_astro/conditions-generales.BfSb1Wo_.css"}],"routeData":{"route":"/en/conditions-generales","isIndex":false,"type":"page","pattern":"^\\/en\\/conditions-generales\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"conditions-generales","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/conditions-generales.astro","pathname":"/en/conditions-generales","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.C5VM41Zj.css"},{"type":"external","src":"/_astro/conditions-generales.BfSb1Wo_.css"}],"routeData":{"route":"/en/contact","isIndex":false,"type":"page","pattern":"^\\/en\\/contact\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/contact.astro","pathname":"/en/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.C5VM41Zj.css"},{"type":"external","src":"/_astro/conditions-generales.BfSb1Wo_.css"}],"routeData":{"route":"/en/mentions-legales","isIndex":false,"type":"page","pattern":"^\\/en\\/mentions-legales\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"mentions-legales","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/mentions-legales.astro","pathname":"/en/mentions-legales","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.C5VM41Zj.css"},{"type":"external","src":"/_astro/conditions-generales.BfSb1Wo_.css"}],"routeData":{"route":"/en/solutions","isIndex":false,"type":"page","pattern":"^\\/en\\/solutions\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"solutions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/solutions.astro","pathname":"/en/solutions","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.C5VM41Zj.css"},{"type":"external","src":"/_astro/conditions-generales.BfSb1Wo_.css"}],"routeData":{"route":"/en/termes-utilisation","isIndex":false,"type":"page","pattern":"^\\/en\\/termes-utilisation\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"termes-utilisation","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/termes-utilisation.astro","pathname":"/en/termes-utilisation","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.C5VM41Zj.css"},{"type":"external","src":"/_astro/conditions-generales.BfSb1Wo_.css"},{"type":"external","src":"/_astro/index.DV8PrLMj.css"}],"routeData":{"route":"/en","isIndex":true,"type":"page","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/index.astro","pathname":"/en","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.C5VM41Zj.css"},{"type":"external","src":"/_astro/conditions-generales.BfSb1Wo_.css"}],"routeData":{"route":"/mentions-legales","isIndex":false,"type":"page","pattern":"^\\/mentions-legales\\/?$","segments":[[{"content":"mentions-legales","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/mentions-legales.astro","pathname":"/mentions-legales","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.C5VM41Zj.css"},{"type":"external","src":"/_astro/conditions-generales.BfSb1Wo_.css"}],"routeData":{"route":"/solutions","isIndex":false,"type":"page","pattern":"^\\/solutions\\/?$","segments":[[{"content":"solutions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/solutions.astro","pathname":"/solutions","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.C5VM41Zj.css"},{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/studio/[...params]","pattern":"^\\/studio(?:\\/(.*?))?\\/?$","segments":[[{"content":"studio","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/.pnpm/@sanity+astro@3.2.6_@emotion+is-prop-valid@1.2.2_@sanity+client@6.29.1_@sanity+types@3.98.1_@_7uoyc4h3zt4bn4uaalyv743nha/node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.C5VM41Zj.css"},{"type":"external","src":"/_astro/conditions-generales.BfSb1Wo_.css"}],"routeData":{"route":"/termes-utilisation","isIndex":false,"type":"page","pattern":"^\\/termes-utilisation\\/?$","segments":[[{"content":"termes-utilisation","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/termes-utilisation.astro","pathname":"/termes-utilisation","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.C5VM41Zj.css"},{"type":"external","src":"/_astro/conditions-generales.BfSb1Wo_.css"},{"type":"external","src":"/_astro/index.DV8PrLMj.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.automatisons.fr","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/node_modules/.pnpm/@sanity+astro@3.2.6_@emotion+is-prop-valid@1.2.2_@sanity+client@6.29.1_@sanity+types@3.98.1_@_7uoyc4h3zt4bn4uaalyv743nha/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/pages/conditions-generales.astro",{"propagation":"none","containsHead":true}],["C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/pages/en/conditions-generales.astro",{"propagation":"none","containsHead":true}],["C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/pages/en/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/pages/en/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/pages/en/mentions-legales.astro",{"propagation":"none","containsHead":true}],["C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/pages/en/solutions.astro",{"propagation":"none","containsHead":true}],["C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/pages/en/termes-utilisation.astro",{"propagation":"none","containsHead":true}],["C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/pages/mentions-legales.astro",{"propagation":"none","containsHead":true}],["C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/pages/solutions.astro",{"propagation":"none","containsHead":true}],["C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/pages/termes-utilisation.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/conditions-generales@_@astro":"pages/conditions-generales.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/en/conditions-generales@_@astro":"pages/en/conditions-generales.astro.mjs","\u0000@astro-page:src/pages/en/contact@_@astro":"pages/en/contact.astro.mjs","\u0000@astro-page:src/pages/en/mentions-legales@_@astro":"pages/en/mentions-legales.astro.mjs","\u0000@astro-page:src/pages/en/solutions@_@astro":"pages/en/solutions.astro.mjs","\u0000@astro-page:src/pages/en/termes-utilisation@_@astro":"pages/en/termes-utilisation.astro.mjs","\u0000@astro-page:src/pages/en/index@_@astro":"pages/en.astro.mjs","\u0000@astro-page:src/pages/mentions-legales@_@astro":"pages/mentions-legales.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astro-page:src/pages/solutions@_@astro":"pages/solutions.astro.mjs","\u0000@astro-page:node_modules/.pnpm/@sanity+astro@3.2.6_@emotion+is-prop-valid@1.2.2_@sanity+client@6.29.1_@sanity+types@3.98.1_@_7uoyc4h3zt4bn4uaalyv743nha/node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/studio/_---params_.astro.mjs","\u0000@astro-page:src/pages/termes-utilisation@_@astro":"pages/termes-utilisation.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.10.1_@netlify+blobs@8.2.0_@types+node@24.0.3_jiti@2.4.2_rollup@4.44.0_typescript@5.8.3_yaml@2.8.0/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_D4toJY9_.mjs","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/node_modules/.pnpm/unstorage@1.16.0_@netlify+blobs@8.2.0/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/node_modules/.pnpm/astro@5.10.1_@netlify+blobs@8.2.0_@types+node@24.0.3_jiti@2.4.2_rollup@4.44.0_typescript@5.8.3_yaml@2.8.0/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_x44RYl2_.mjs","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Navigation":"_astro/Navigation.ircIUMtD.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Footer":"_astro/Footer.RrYP-K37.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Chatbot":"_astro/Chatbot.CJ68iUuK.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Contact":"_astro/Contact.CxdGQd_5.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Solutions":"_astro/Solutions.DjLUfxpp.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Hero":"_astro/Hero.CHrou5-7.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Sectors":"_astro/Sectors.B69_dXo7.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Methodology":"_astro/Methodology.Ce_RWq76.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/About":"_astro/About.CQSaTvXK.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Testimonials":"_astro/Testimonials.B4ePD5F5.js","@astrojs/react/client.js":"_astro/client._U2CWBEy.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.CfX7NDh1.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/node_modules/.pnpm/sanity@3.98.1_@emotion+is-prop-valid@1.2.2_@types+node@24.0.3_@types+react@19.1.8_immer@10.1._qk26cn637k3gu2nn6z2c7qwdxi/node_modules/sanity/lib/_chunks-es/resources2.mjs":"_astro/resources2.DbN95BOs.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/node_modules/.pnpm/sanity@3.98.1_@emotion+is-prop-valid@1.2.2_@types+node@24.0.3_@types+react@19.1.8_immer@10.1._qk26cn637k3gu2nn6z2c7qwdxi/node_modules/sanity/lib/_chunks-es/resources4.mjs":"_astro/resources4.DXDHqzXb.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/node_modules/.pnpm/sanity@3.98.1_@emotion+is-prop-valid@1.2.2_@types+node@24.0.3_@types+react@19.1.8_immer@10.1._qk26cn637k3gu2nn6z2c7qwdxi/node_modules/sanity/lib/_chunks-es/resources.mjs":"_astro/resources.o2tYnHHX.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/node_modules/.pnpm/sanity@3.98.1_@emotion+is-prop-valid@1.2.2_@types+node@24.0.3_@types+react@19.1.8_immer@10.1._qk26cn637k3gu2nn6z2c7qwdxi/node_modules/sanity/lib/_chunks-es/resources5.mjs":"_astro/resources5.CL2P0pBX.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/node_modules/.pnpm/sanity@3.98.1_@emotion+is-prop-valid@1.2.2_@types+node@24.0.3_@types+react@19.1.8_immer@10.1._qk26cn637k3gu2nn6z2c7qwdxi/node_modules/sanity/lib/_chunks-es/resources3.mjs":"_astro/resources3.D6VGbrK-.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/node_modules/.pnpm/sanity@3.98.1_@emotion+is-prop-valid@1.2.2_@types+node@24.0.3_@types+react@19.1.8_immer@10.1._qk26cn637k3gu2nn6z2c7qwdxi/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.mjs":"_astro/ViteDevServerStopped.DHsjLv3l.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/node_modules/.pnpm/@sanity+client@7.6.0_debug@4.4.1/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.DEegdncy.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/node_modules/.pnpm/@sanity+ui@2.16.4_@emotion+is-prop-valid@1.2.2_react-dom@19.1.0_react@19.1.0__react-is@18.3.1_cuxp6m2fcqe7mdg2qfqbkgo4im/node_modules/@sanity/ui/dist/_chunks-es/refractor.mjs":"_astro/refractor.C72sHNhD.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/node_modules/.pnpm/sanity@3.98.1_@emotion+is-prop-valid@1.2.2_@types+node@24.0.3_@types+react@19.1.8_immer@10.1._qk26cn637k3gu2nn6z2c7qwdxi/node_modules/sanity/lib/_chunks-es/index3.mjs":"_astro/index3.BDmTJWgn.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/node_modules/.pnpm/@sanity+vision@3.98.1_@babel+runtime@7.27.6_@codemirror+lint@6.8.5_@codemirror+theme-one-dark_5cue5sl2fbtcoj6oznjbu7zyle/node_modules/@sanity/vision/lib/_chunks-es/resources.mjs":"_astro/resources.R4jBHZxf.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/node_modules/.pnpm/@sanity+vision@3.98.1_@babel+runtime@7.27.6_@codemirror+lint@6.8.5_@codemirror+theme-one-dark_5cue5sl2fbtcoj6oznjbu7zyle/node_modules/@sanity/vision/lib/_chunks-es/SanityVision.mjs":"_astro/SanityVision.0Tvo5mvN.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/node_modules/.pnpm/sanity@3.98.1_@emotion+is-prop-valid@1.2.2_@types+node@24.0.3_@types+react@19.1.8_immer@10.1._qk26cn637k3gu2nn6z2c7qwdxi/node_modules/sanity/lib/_chunks-es/resources6.mjs":"_astro/resources6.Dm1ie1v2.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/node_modules/.pnpm/sanity@3.98.1_@emotion+is-prop-valid@1.2.2_@types+node@24.0.3_@types+react@19.1.8_immer@10.1._qk26cn637k3gu2nn6z2c7qwdxi/node_modules/sanity/lib/_chunks-es/index.mjs":"_astro/index.BKTqZBs3.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/node_modules/.pnpm/sanity@3.98.1_@emotion+is-prop-valid@1.2.2_@types+node@24.0.3_@types+react@19.1.8_immer@10.1._qk26cn637k3gu2nn6z2c7qwdxi/node_modules/sanity/lib/_chunks-es/index2.mjs":"_astro/index2.DIxL6kvN.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/node_modules/.pnpm/@sanity+ui@2.16.4_@emotion+is-prop-valid@1.2.2_react-dom@19.1.0_react@19.1.0__react-is@19.1.0_gsa754rfll4u4tvdduixqlzm5q/node_modules/@sanity/ui/dist/_chunks-es/refractor.mjs":"_astro/refractor.CgGV0lSr.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/node_modules/.pnpm/@sanity+astro@3.2.6_@emotion+is-prop-valid@1.2.2_@sanity+client@6.29.1_@sanity+types@3.98.1_@_7uoyc4h3zt4bn4uaalyv743nha/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.BmAstcRn.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","window.dataLayer=window.dataLayer||[];function a(){dataLayer.push(arguments)}a(\"js\",new Date);a(\"config\",\"G-8CDN9B0J2D\");"]],"assets":["/_astro/conditions-generales.BfSb1Wo_.css","/_astro/index.DV8PrLMj.css","/_astro/studio-route.C5VM41Zj.css","/banner-reduite.png","/brand.png","/clair.webp","/Design sans titre (6).png","/favicon.svg","/generated-image-18abf820-fca4-4bc4-a361-7a45e6c5651f copy.png","/generated-image-18abf820-fca4-4bc4-a361-7a45e6c5651f.png","/generated-image-37226eb7-c689-4a53-8e30-e7ca050c3539.png","/google-logo.svg","/google.svg","/LOGO AUTOOMATISATION - FOND TRANSPARENT copy.png","/LOGO AUTOOMATISATION - FOND TRANSPARENT.png","/logo-automatisation - transparent copy copy.png","/logo-automatisation - transparent copy.png","/logo-automatisation - transparent.png","/logo-automatisation-transparent.png","/logo-automatisation.png","/logo-automatisons.png","/logo-reduit copy.png","/logo-reduit.png","/logo.png","/lucie.webp","/new-logo.png","/youtube-logo.png","/_redirects","/_astro/About.CQSaTvXK.js","/_astro/browser.z9ZdGAJv.js","/_astro/Chatbot.CJ68iUuK.js","/_astro/circle-check-big.XkPDpOaP.js","/_astro/client.BWkQLP4W.js","/_astro/client._U2CWBEy.js","/_astro/Contact.CxdGQd_5.js","/_astro/Footer.RrYP-K37.js","/_astro/Hero.CHrou5-7.js","/_astro/index.BKmLb0-U.js","/_astro/index.BKTqZBs3.js","/_astro/index.Bzy1wsxs.js","/_astro/index.C8rRlmmw.js","/_astro/index2.DIxL6kvN.js","/_astro/index3.BDmTJWgn.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/mail.D6K7-W19.js","/_astro/message-circle.C9pKeqwS.js","/_astro/Methodology.Ce_RWq76.js","/_astro/Navigation.ircIUMtD.js","/_astro/proxy.BVUCmXhd.js","/_astro/refractor.C72sHNhD.js","/_astro/refractor.CgGV0lSr.js","/_astro/resources.o2tYnHHX.js","/_astro/resources.R4jBHZxf.js","/_astro/resources2.DbN95BOs.js","/_astro/resources3.D6VGbrK-.js","/_astro/resources4.DXDHqzXb.js","/_astro/resources5.CL2P0pBX.js","/_astro/resources6.Dm1ie1v2.js","/_astro/SanityVision.0Tvo5mvN.js","/_astro/Sectors.B69_dXo7.js","/_astro/send.F_brkm8f.js","/_astro/Solutions.DjLUfxpp.js","/_astro/stegaEncodeSourceMap.DEegdncy.js","/_astro/studio-component.BmAstcRn.js","/_astro/studio-component.lrQDX5G2.js","/_astro/Testimonials.B4ePD5F5.js","/_astro/users.CSKb-ysn.js","/_astro/ViteDevServerStopped.DHsjLv3l.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"T50Vroif+g/TeCTzAx4/WLnDCHsutNvEaE7JKSSOZnc=","sessionConfig":{"driver":"fs-lite","options":{"base":"C:\\Users\\MohMost\\Downloads\\Sandbox\\Projects\\automatisations\\node_modules\\.astro\\sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
