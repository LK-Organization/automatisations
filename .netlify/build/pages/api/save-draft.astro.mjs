export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  console.log("Received draft save request");
  if (request.headers.get("Content-Type") !== "application/json") {
    console.warn("Invalid content type");
    return new Response(null, { status: 400 });
  }
  const data = await request.json();
  console.log("Draft data:", data);
  try {
    console.log(
      "Sending to WordPress:",
      `${"https://lk-4.mmazone.fr/"}/wp-json/abandoned-form/v1/save`
    );
    const response = await fetch(
      `${"https://lk-4.mmazone.fr/"}/wp-json/abandoned-form/v1/save`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${"yT4kH7p2qX9w0oF3rA6bE1cM8zN5lP9iK3jG7vD0sR4wU2xY5"}`
        },
        body: JSON.stringify(data)
      }
    );
    if (!response.ok) {
      const error = await response.text();
      console.error("WordPress API error:", error);
      throw new Error(`WordPress API error: ${error}`);
    }
    console.log("Draft saved successfully");
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Failed to save draft:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to save draft",
        details: error instanceof Error ? error.message : String(error)
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
