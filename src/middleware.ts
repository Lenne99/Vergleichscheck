import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Schütze /admin Routes
  if (pathname.startsWith('/admin')) {
    // Nur /admin/login ist ohne Session erlaubt
    if (pathname === '/admin/login' || pathname === '/admin/login/') {
      return NextResponse.next();
    }

    // Alle anderen /admin Routes brauchen Session
    const sessionToken = request.cookies.get('sessionToken')?.value;
    if (!sessionToken) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
