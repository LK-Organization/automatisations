export function GET() {
  return new Response(
    `User-agent: *
Disallow:

Sitemap: https://automatisons.fr/sitemap-index.xml`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
