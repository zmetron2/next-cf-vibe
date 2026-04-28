import { getRequestContext } from '@cloudflare/next-on-pages';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function POST(_request: NextRequest) {
  let context;
  try {
    context = getRequestContext();
  } catch (e) {
    return new Response(`Context Retrieval Failed: ${(e as Error).message}`, { status: 500 });
  }

  try {
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
  } catch (error) {
    return new Response(`Logic Error: ${(error as Error).message}`, { status: 500 });
  }
}
