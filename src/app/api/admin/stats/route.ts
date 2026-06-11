import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminAuth';
import { newsletterStore, contactStore } from '@/lib/store';

export async function GET(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Nicht autorisiert' }, { status: 401 });
  }
  return NextResponse.json({
    totalUsers: 1,
    totalSubscribers: newsletterStore.count(),
    totalContacts: contactStore.count(),
    unreadContacts: contactStore.unreadCount(),
  });
}
