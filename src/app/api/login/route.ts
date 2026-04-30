import { getRequestContext } from '@cloudflare/next-on-pages';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  let username = '';
  let password = '';

  try {
    // 먼저 요청 본문을 읽습니다 (나중에 에러가 나도 데이터를 유지하기 위함)
    const body = await request.json() as { username?: string; password?: string };
    username = body.username || '';
    password = body.password || '';

    if (!username || !password) {
      return Response.json({ error: "아이디와 비밀번호를 모두 입력해주세요." }, { status: 400 });
    }

    // Cloudflare 컨텍스트를 안전하게 가져옵니다.
    let context;
    try {
      context = getRequestContext();
    } catch (e) {
      // 개발 환경에서는 컨텍스트 획득 실패를 허용합니다.
      if (process.env.NODE_ENV !== 'development') throw e;
    }

    const env = context?.env;

    // DB 바인딩 확인 및 처리
    if (!env || !env.DB) {
      if (process.env.NODE_ENV === 'development') {
        // 개발 환경 우회 로직 실행
        if (username === 'ljj' && password === '0000') {
          return Response.json({ 
            success: true, 
            user: { username: 'ljj', role: 'admin' },
            note: "Development fallback (No DB)"
          });
        }
        return Response.json({ error: "아이디 또는 비밀번호가 일치하지 않습니다. (Dev Mode)" }, { status: 401 });
      }
      
      return Response.json({ 
        error: "데이터베이스 바인딩(DB)을 찾을 수 없습니다.",
        debug: { hasContext: !!context, hasEnv: !!env }
      }, { status: 500 });
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
        user: { username: admin.username, role: admin.role } 
      });
    } else {
      return Response.json({ error: "아이디 또는 비밀번호가 일치하지 않습니다." }, { status: 401 });
    }
  } catch (error) {
    console.error("Login API Error:", error);
    return Response.json({ 
      error: `서버 오류: ${(error as Error).message}`,
      debug: "인증 처리 중 예상치 못한 오류가 발생했습니다."
    }, { status: 500 });
  }
}
