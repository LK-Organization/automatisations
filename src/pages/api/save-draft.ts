export const prerender = false;
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  console.log("Received draft save request"); // Add this
  if (request.headers.get("Content-Type") !== "application/json") {
    console.warn("Invalid content type");
    return new Response(null, { status: 400 });
  }

  const data = await request.json();
  console.log("Draft data:", data); // Add this

  try {
    console.log(
      "Sending to WordPress:",
      `${import.meta.env.WORDPRESS_URL}/wp-json/abandoned-form/v1/save`
    );

    const response = await fetch(
      `${import.meta.env.WORDPRESS_URL}/wp-json/abandoned-form/v1/save`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.WP_API_SECRET}`,
        },
        body: JSON.stringify(data),
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
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to save draft:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to save draft",
        details: error instanceof Error ? error.message : String(error),
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
