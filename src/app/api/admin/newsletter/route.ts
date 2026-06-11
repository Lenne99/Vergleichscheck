import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminAuth';
import { newsletterStore } from '@/lib/store';

export async function GET(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Nicht autorisiert' }, { status: 401 });
  }
  return NextResponse.json({ subscribers: newsletterStore.getAll(), count: newsletterStore.count() });
}

export async function POST(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Nicht autorisiert' }, { status: 401 });
  }
  const { email, name } = await request.json();
  if (!email) return NextResponse.json({ error: 'E-Mail erforderlich' }, { status: 400 });

  const sub = newsletterStore.add(email, name ?? '', 'manual');
  if (!sub) return NextResponse.json({ error: 'E-Mail bereits eingetragen' }, { status: 409 });
  return NextResponse.json({ subscriber: sub }, { status: 201 });
}

export async function DELETE(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Nicht autorisiert' }, { status: 401 });
  }
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'ID fehlt' }, { status: 400 });

  const ok = newsletterStore.remove(id);
  if (!ok) return NextResponse.json({ error: 'Nicht gefunden' }, { status: 404 });
  return NextResponse.json({ success: true });
}
