import { getRequestContext } from '@cloudflare/next-on-pages';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    let context;
    try {
      context = getRequestContext();
    } catch (e) {
      if (process.env.NODE_ENV !== 'development') throw e;
    }
    const env = context?.env;
    const db = env?.DB;
    if (!db) {
      return NextResponse.json({ success: false, message: 'No DB binding' }, { status: 500 });
    }

    const { results } = await db.prepare('SELECT * FROM vibe_students ORDER BY joined_at DESC').all();
    return NextResponse.json({ success: true, data: results });
  } catch (error) {
    return NextResponse.json({ success: false, message: (error as Error).message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    let context;
    try {
      context = getRequestContext();
    } catch (e) {
      if (process.env.NODE_ENV !== 'development') throw e;
    }
    const env = context?.env;
    const db = env?.DB;
    if (!db) {
      return NextResponse.json({ success: false, message: 'No DB binding' }, { status: 500 });
    }

    const body = await request.json() as {
      name: string;
      email: string;
      phone: string;
      course: string;
    };

    await db.prepare(
      'INSERT INTO vibe_students (name, email, phone, course) VALUES (?, ?, ?, ?)'
    ).bind(body.name, body.email, body.phone, body.course).run();

    return NextResponse.json({ success: true, message: 'Student added' });
  } catch (error) {
    return NextResponse.json({ success: false, message: (error as Error).message }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    let context;
    try {
      context = getRequestContext();
    } catch (e) {
      if (process.env.NODE_ENV !== 'development') throw e;
    }
    const env = context?.env;
    const db = env?.DB;
    if (!db) {
      return NextResponse.json({ success: false, message: 'No DB binding' }, { status: 500 });
    }

    const body = await request.json() as { id: number; progress?: number; status?: string };

    if (body.progress !== undefined) {
      await db.prepare('UPDATE vibe_students SET progress = ? WHERE id = ?')
        .bind(body.progress, body.id)
        .run();
    }

    if (body.status !== undefined) {
      await db.prepare('UPDATE vibe_students SET status = ? WHERE id = ?')
        .bind(body.status, body.id)
        .run();
    }

    return NextResponse.json({ success: true, message: 'Student updated' });
  } catch (error) {
    return NextResponse.json({ success: false, message: (error as Error).message }, { status: 500 });
  }
}
