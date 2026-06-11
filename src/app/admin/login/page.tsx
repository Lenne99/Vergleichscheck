'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: identifier, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Login fehlgeschlagen');
        setLoading(false);
        return;
      }

      router.push('/admin');
    } catch {
      setError('Verbindungsfehler. Bitte versuche es erneut.');
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30">
              <svg viewBox="0 0 32 32" fill="none" width="36" height="36">
                <rect x="3" y="14" width="7" height="13" rx="1.5" fill="white" opacity="0.7"/>
                <rect x="13" y="8" width="7" height="19" rx="1.5" fill="white"/>
                <path d="M23 16l3 3 5-6" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <span className="text-2xl font-bold text-white">vergleichs</span>
              <span className="text-2xl font-bold text-blue-400">check</span>
            </div>
          </Link>
          <p className="text-slate-400 mt-2 text-sm">Admin Dashboard</p>
        </div>

        {/* Card */}
        <div className="bg-slate-800/80 backdrop-blur rounded-2xl border border-slate-700 p-8 shadow-2xl">
          <h2 className="text-xl font-bold text-white mb-6">Anmelden</h2>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6 flex gap-2">
              <span className="text-red-400 shrink-0">⚠️</span>
              <p className="text-sm text-red-300">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Benutzername */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Benutzername oder E-Mail
              </label>
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="Benutzername"
                autoComplete="username"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                required
              />
            </div>

            {/* Passwort */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Passwort
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  className="w-full px-4 py-3 pr-12 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-colors p-1"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:text-slate-500 text-white font-semibold py-3 rounded-xl transition-all mt-2 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Wird angemeldet...
                </>
              ) : (
                'Anmelden →'
              )}
            </button>
          </form>
        </div>

        {/* Zurück-Link */}
        <div className="text-center mt-6">
          <Link href="/" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
            ← Zurück zur Website
          </Link>
        </div>
      </div>
    </div>
  );
}
