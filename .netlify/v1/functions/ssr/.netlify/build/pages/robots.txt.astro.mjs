export { renderers } from '../renderers.mjs';

function GET() {
  return new Response(
    `User-agent: *
Disallow:

Sitemap: https://automatisons.fr/sitemap-index.xml`,
    {
      headers: {
        "Content-Type": "text/plain"
      }
    }
  );
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
