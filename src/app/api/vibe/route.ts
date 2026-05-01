import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge';

export async function GET() {
  let env;
  try {
    const context = getRequestContext();
    env = context.env;
  } catch (error) {
    return Response.json({ error: "Failed to get context", details: (error as Error).message }, { status: 500 });
  }
  
  try {
    return Response.json({
      message: "Vibe check passed! 🚀",
      env: {
        hasDB: !!env?.DB,
        hasBucket: !!env?.BUCKET,
      },
      hint: "Configure your D1 and R2 IDs in wrangler.toml to start using them."
    });
  } catch (error) {
    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
}
