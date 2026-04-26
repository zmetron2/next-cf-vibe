import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge';

export async function GET() {
  const { env } = getRequestContext();
  
  try {
    // Example: Query D1
    // const results = await env.DB.prepare("SELECT * FROM users LIMIT 1").all();
    
    // Example: List R2 objects
    // const objects = await env.BUCKET.list();

    return Response.json({
      message: "Vibe check passed! 🚀",
      env: {
        hasDB: !!env.DB,
        hasBucket: !!env.BUCKET,
      },
      hint: "Configure your D1 and R2 IDs in wrangler.toml to start using them."
    });
  } catch (error) {
    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
}
