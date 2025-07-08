import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { p as NOOP_MIDDLEWARE_HEADER, q as decodeKey } from './chunks/astro/server_MKBel6VV.mjs';
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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/","cacheDir":"file:///C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/node_modules/.astro/","outDir":"file:///C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/dist/","srcDir":"file:///C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/","publicDir":"file:///C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/public/","buildClientDir":"file:///C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/dist/","buildServerDir":"file:///C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.10.1_@netlify+blobs@8.2.0_@types+node@24.0.3_jiti@1.21.7_rollup@4.44.0_typescript@5.8.3_yaml@2.8.0/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/conditions-generales.BQ7LBoyb.css"}],"routeData":{"route":"/conditions-generales","isIndex":false,"type":"page","pattern":"^\\/conditions-generales\\/?$","segments":[[{"content":"conditions-generales","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/conditions-generales.astro","pathname":"/conditions-generales","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/conditions-generales.BQ7LBoyb.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/conditions-generales.BQ7LBoyb.css"}],"routeData":{"route":"/mentions-legales","isIndex":false,"type":"page","pattern":"^\\/mentions-legales\\/?$","segments":[[{"content":"mentions-legales","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/mentions-legales.astro","pathname":"/mentions-legales","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/conditions-generales.BQ7LBoyb.css"}],"routeData":{"route":"/solutions","isIndex":false,"type":"page","pattern":"^\\/solutions\\/?$","segments":[[{"content":"solutions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/solutions.astro","pathname":"/solutions","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/conditions-generales.BQ7LBoyb.css"}],"routeData":{"route":"/termes-utilisation","isIndex":false,"type":"page","pattern":"^\\/termes-utilisation\\/?$","segments":[[{"content":"termes-utilisation","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/termes-utilisation.astro","pathname":"/termes-utilisation","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/conditions-generales.BQ7LBoyb.css"},{"type":"external","src":"/_astro/index.DV8PrLMj.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://automatisons.fr","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/pages/conditions-generales.astro",{"propagation":"none","containsHead":true}],["C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/pages/mentions-legales.astro",{"propagation":"none","containsHead":true}],["C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/pages/solutions.astro",{"propagation":"none","containsHead":true}],["C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/pages/termes-utilisation.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/conditions-generales@_@astro":"pages/conditions-generales.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/mentions-legales@_@astro":"pages/mentions-legales.astro.mjs","\u0000@astro-page:src/pages/solutions@_@astro":"pages/solutions.astro.mjs","\u0000@astro-page:src/pages/termes-utilisation@_@astro":"pages/termes-utilisation.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.10.1_@netlify+blobs@8.2.0_@types+node@24.0.3_jiti@1.21.7_rollup@4.44.0_typescript@5.8.3_yaml@2.8.0/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CBkH7NtI.mjs","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/node_modules/.pnpm/unstorage@1.16.0_@netlify+blobs@8.2.0/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/node_modules/.pnpm/astro@5.10.1_@netlify+blobs@8.2.0_@types+node@24.0.3_jiti@1.21.7_rollup@4.44.0_typescript@5.8.3_yaml@2.8.0/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DxpVw9di.mjs","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Navigation":"_astro/Navigation.CgNMEbOj.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Contact":"_astro/Contact.B6q7M8K7.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Footer":"_astro/Footer.qiKTvw66.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Chatbot":"_astro/Chatbot.pYFIKaPk.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Solutions":"_astro/Solutions.Dfr4r4k4.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Hero":"_astro/Hero.B05Clpjp.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Sectors":"_astro/Sectors.CGoOA4om.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Methodology":"_astro/Methodology.tHFmSUjL.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/About":"_astro/About.CNQzLg9M.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Testimonials":"_astro/Testimonials.BOCokH5N.js","@astrojs/react/client.js":"_astro/client.BRu5ZLAo.js","C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.CfX7NDh1.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","window.dataLayer=window.dataLayer||[];function a(){dataLayer.push(arguments)}a(\"js\",new Date);a(\"config\",\"G-8CDN9B0J2D\");"]],"assets":["/_astro/conditions-generales.BQ7LBoyb.css","/_astro/index.DV8PrLMj.css","/banner-reduite.png","/brand.png","/Design sans titre (6).png","/favicon.svg","/generated-image-18abf820-fca4-4bc4-a361-7a45e6c5651f copy.png","/generated-image-18abf820-fca4-4bc4-a361-7a45e6c5651f.png","/generated-image-37226eb7-c689-4a53-8e30-e7ca050c3539.png","/LOGO AUTOOMATISATION - FOND TRANSPARENT copy.png","/LOGO AUTOOMATISATION - FOND TRANSPARENT.png","/logo-automatisation - transparent copy copy.png","/logo-automatisation - transparent copy.png","/logo-automatisation - transparent.png","/logo-automatisation-transparent.png","/logo-automatisation.png","/logo-automatisons.png","/logo-reduit copy.png","/logo-reduit.png","/logo.png","/new-logo.png","/_astro/About.CNQzLg9M.js","/_astro/Chatbot.pYFIKaPk.js","/_astro/circle-check-big.CNZMibJP.js","/_astro/client.BRu5ZLAo.js","/_astro/Contact.B6q7M8K7.js","/_astro/Footer.qiKTvw66.js","/_astro/Hero.B05Clpjp.js","/_astro/index.ayUVAKvA.js","/_astro/index.BPTb0ivw.js","/_astro/index.CaZlGE7t.js","/_astro/jsx-runtime.CyXy1Ci3.js","/_astro/mail.Dqq3kzA9.js","/_astro/message-circle.BPKSRKiW.js","/_astro/Methodology.tHFmSUjL.js","/_astro/Navigation.CgNMEbOj.js","/_astro/proxy.BbFzrjiT.js","/_astro/Sectors.CGoOA4om.js","/_astro/send.BADEZATM.js","/_astro/Solutions.Dfr4r4k4.js","/_astro/Testimonials.BOCokH5N.js","/_astro/users.CBYvFev4.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"X8jeJWkENp5ScnnXL7qUtLiq754nvERij0qx8QxX5w4=","sessionConfig":{"driver":"fs-lite","options":{"base":"C:\\Users\\MohMost\\Downloads\\Sandbox\\Projects\\automatisations\\node_modules\\.astro\\sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
