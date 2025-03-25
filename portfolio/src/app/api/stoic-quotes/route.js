// app/api/anime-quote/route.ts
export async function GET() {
  try {
    const response = await fetch("https://stoic.tekloon.net/stoic-quote", {
      method: "GET",
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
