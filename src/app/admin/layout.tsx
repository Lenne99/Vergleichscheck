'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const navItems = [
  { icon: '📊', label: 'Dashboard', href: '/admin' },
  { icon: '📄', label: 'Seiten', href: '/admin/pages' },
  { icon: '🖼️', label: 'Medien', href: '/admin/media' },
  { icon: '✉️', label: 'Newsletter', href: '/admin/newsletter' },
  { icon: '💬', label: 'Kontakt', href: '/admin/contacts' },
  { icon: '⚙️', label: 'Einstellungen', href: '/admin/settings' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ name: string; email: string; role: string } | null>(null);

  useEffect(() => {
    fetch('/api/admin/auth/me')
      .then((r) => r.json())
      .then((data) => { if (data.user) setCurrentUser(data.user); })
      .catch(() => {});
  }, []);

  async function handleLogout() {
    await fetch('/api/admin/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  }

  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* Overlay für Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white flex flex-col
        transform transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        {/* Logo */}
        <div className="p-5 border-b border-slate-700 shrink-0">
          <Link href="/admin" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
              <svg viewBox="0 0 32 32" fill="none" width="22" height="22">
                <rect x="3" y="14" width="7" height="13" rx="1.5" fill="white" opacity="0.7"/>
                <rect x="13" y="8" width="7" height="19" rx="1.5" fill="white"/>
                <path d="M23 16l3 3 5-6" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <span className="font-bold text-white">vergleichs</span>
              <span className="font-bold text-blue-400">check</span>
              <p className="text-xs text-slate-400">Admin</p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = item.href === '/admin'
              ? pathname === '/admin'
              : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all
                  ${isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'}
                `}
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}

          <div className="pt-4 mt-4 border-t border-slate-700">
            <Link
              href="/"
              target="_blank"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
            >
              <span className="text-base">🌐</span>
              Website ansehen
            </Link>
          </div>
        </nav>

        {/* User & Logout */}
        <div className="p-4 border-t border-slate-700 shrink-0">
          <div className="bg-slate-800 rounded-xl p-3 mb-3">
            <p className="text-xs text-slate-400">Angemeldet als</p>
            <p className="font-semibold text-white text-sm">{currentUser?.name ?? '–'}</p>
            <p className="text-xs text-slate-400">{currentUser?.role ?? ''}</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-red-600/80 hover:bg-red-600 text-white rounded-xl text-sm font-medium transition-colors"
          >
            🚪 Abmelden
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">

        {/* Top Bar */}
        <header className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-30 flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <span className="text-xl">{sidebarOpen ? '✕' : '☰'}</span>
          </button>
          <h1 className="text-lg font-semibold text-slate-800 flex-1">
            {navItems.find(i =>
              i.href === '/admin' ? pathname === '/admin' : pathname.startsWith(i.href)
            )?.label ?? 'Admin'}
          </h1>
          <span className="text-xs text-slate-400 hidden sm:block">vergleichscheck.com</span>
        </header>

        {/* Page */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
