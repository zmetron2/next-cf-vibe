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

    const { results } = await db.prepare('SELECT * FROM vibe_inquiries ORDER BY created_at DESC').all();
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
      name: unknown;
      email: unknown;
      phone?: unknown;
      message: unknown;
    };

    if (typeof body.name !== 'string' || typeof body.email !== 'string' || typeof body.message !== 'string') {
      return NextResponse.json({ success: false, message: 'Invalid data type' }, { status: 400 });
    }

    const phone = typeof body.phone === 'string' ? body.phone : null;

    await db.prepare(
      'INSERT INTO vibe_inquiries (name, email, phone, message) VALUES (?, ?, ?, ?)'
    ).bind(body.name, body.email, phone, body.message).run();

    return NextResponse.json({ success: true, message: 'Inquiry submitted' });
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
    
    const body = await request.json() as { id: unknown, status: unknown };
    
    if (typeof body.id !== 'number' || typeof body.status !== 'string') {
      return NextResponse.json({ success: false, message: 'Invalid data' }, { status: 400 });
    }

    await db.prepare('UPDATE vibe_inquiries SET status = ? WHERE id = ?')
      .bind(body.status, body.id)
      .run();

    return NextResponse.json({ success: true, message: 'Status updated' });
  } catch (error) {
    return NextResponse.json({ success: false, message: (error as Error).message }, { status: 500 });
  }
}
