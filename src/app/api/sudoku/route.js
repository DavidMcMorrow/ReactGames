export async function GET() {
    try {
        const response = await fetch("https://youdosudoku.com/api/", {
            cache: 'no-store',
        });

        if (!response.ok) {
            return new Response(JSON.stringify({ error: "Failed to fetch puzzle" }), { status: 500 });
        }

        const data = await response.json();
        return Response.json(data);
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}