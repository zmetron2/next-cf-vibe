import { getRequestContext } from '@cloudflare/next-on-pages';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function POST(_request: NextRequest) {
  try {
    const context = getRequestContext();
    const env = context?.env;

    return Response.json({ 
      success: false, 
      error: "진단 모드: API 접속 성공",
      debug: {
        hasContext: !!context,
        hasEnv: !!env,
        hasDB: !!env?.DB,
        envKeys: env ? Object.keys(env) : []
      }
    });
  } catch (_error) {
    return new Response(`Fatal Error: ${(_error as Error).message}`, { status: 500 });
  }
}
