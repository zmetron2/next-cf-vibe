import { getRequestContext } from '@cloudflare/next-on-pages';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const context = getRequestContext();
    const env = context?.env;

    if (!env?.DB) {
      return Response.json({ 
        error: "데이터베이스 연결을 찾을 수 없습니다. npm run pages:dev (8788 포트)로 접속 중인지 확인해주세요." 
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
    console.error('Login API Error:', error);
    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
}
