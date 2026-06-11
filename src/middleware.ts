import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith('/admin')) return NextResponse.next();

  // Login-Seite immer erlauben
  if (pathname === '/admin/login') return NextResponse.next();

  // Session-Cookie prüfen (einfache Präsenz-Prüfung im Edge, echte Validierung im API)
  const token = request.cookies.get('sessionToken')?.value;
  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
