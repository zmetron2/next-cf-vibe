import { getRequestContext } from '@cloudflare/next-on-pages';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const context = getRequestContext();
    const env = context?.env;

    if (!env || !env.DB) {
      return Response.json({ 
        error: "데이터베이스 바인딩(DB)을 찾을 수 없습니다. Cloudflare 설정에서 바인딩을 확인해주세요.",
        debug: { hasContext: !!context, hasEnv: !!env }
      }, { status: 500 });
    }

    const body = await request.json() as { username?: string; password?: string };
    const { username, password } = body;

    if (!username || !password) {
      return Response.json({ error: "아이디와 비밀번호를 모두 입력해주세요." }, { status: 400 });
    }

    interface Admin {
      username: string;
      role: string;
    }

    const admin = await env.DB.prepare(
      "SELECT * FROM admins WHERE username = ? AND password = ?"
    )
    .bind(username, password)
    .first<Admin>();

    if (admin) {
      return Response.json({ 
        success: true, 
        user: { 
          username: admin.username,
          role: admin.role
        } 
      });
    } else {
      return Response.json({ error: "아이디 또는 비밀번호가 일치하지 않습니다." }, { status: 401 });
    }
  } catch (error) {
    return Response.json({ 
      error: `서버 오류: ${(error as Error).message}`
    }, { status: 500 });
  }
}
