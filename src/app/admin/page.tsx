'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Users, Mail, MessageSquare, Eye } from 'lucide-react';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalSubscribers: 0,
    totalContacts: 0,
    totalPageViews: 0,
  });

  useEffect(() => {
    // Später: Daten von API laden
    setStats({
      totalUsers: 1,
      totalSubscribers: 0,
      totalContacts: 0,
      totalPageViews: 0,
    });
  }, []);

  const statsCards = [
    {
      icon: Users,
      label: 'Admin-Benutzer',
      value: stats.totalUsers,
      color: 'bg-blue-100 text-blue-700',
      href: '/admin/users',
    },
    {
      icon: Mail,
      label: 'Newsletter-Abonnenten',
      value: stats.totalSubscribers,
      color: 'bg-green-100 text-green-700',
      href: '/admin/newsletter',
    },
    {
      icon: MessageSquare,
      label: 'Kontaktanfragen',
      value: stats.totalContacts,
      color: 'bg-purple-100 text-purple-700',
      href: '/admin/contacts',
    },
    {
      icon: Eye,
      label: 'Seitenaufrufe',
      value: stats.totalPageViews,
      color: 'bg-orange-100 text-orange-700',
      href: '/admin',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Willkommen im Admin Dashboard
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Verwalte deine Website, Newsletter und Kontakte
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.label}
              href={card.href}
              className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${card.color}`}>
                  <Icon size={24} />
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">
                {card.label}
              </p>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">
                {card.value}
              </p>
            </Link>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
          Schnellzugriffe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            href="/admin/pages"
            className="p-4 border-2 border-slate-200 dark:border-slate-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
          >
            <p className="font-semibold text-slate-900 dark:text-white mb-1">
              📄 Seite erstellen
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Neue Seite oder Blog-Post
            </p>
          </Link>

          <Link
            href="/admin/media"
            className="p-4 border-2 border-slate-200 dark:border-slate-700 rounded-lg hover:border-green-500 dark:hover:border-green-500 transition-colors"
          >
            <p className="font-semibold text-slate-900 dark:text-white mb-1">
              🖼️ Bilder hochladen
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Zur Medienbibliothek
            </p>
          </Link>

          <Link
            href="/admin/newsletter"
            className="p-4 border-2 border-slate-200 dark:border-slate-700 rounded-lg hover:border-purple-500 dark:hover:border-purple-500 transition-colors"
          >
            <p className="font-semibold text-slate-900 dark:text-white mb-1">
              ✉️ Newsletter erstellen
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Neue Newsletter-Kampagne
            </p>
          </Link>

          <Link
            href="/admin/contacts"
            className="p-4 border-2 border-slate-200 dark:border-slate-700 rounded-lg hover:border-orange-500 dark:hover:border-orange-500 transition-colors"
          >
            <p className="font-semibold text-slate-900 dark:text-white mb-1">
              💬 Kontaktanfragen
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Neue Nachrichten ansehen
            </p>
          </Link>

          <Link
            href="/admin/settings"
            className="p-4 border-2 border-slate-200 dark:border-slate-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
          >
            <p className="font-semibold text-slate-900 dark:text-white mb-1">
              ⚙️ Einstellungen
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Farben, Fonts, Passwort
            </p>
          </Link>

          <Link
            href="/"
            className="p-4 border-2 border-slate-200 dark:border-slate-700 rounded-lg hover:border-slate-400 dark:hover:border-slate-600 transition-colors"
          >
            <p className="font-semibold text-slate-900 dark:text-white mb-1">
              🌐 Website ansehen
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Zur öffentlichen Website
            </p>
          </Link>
        </div>
      </div>

      {/* Status */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
        <p className="text-blue-900 dark:text-blue-200">
          <span className="font-semibold">ℹ️ Info:</span> Das Admin-System ist noch in Phase 1 (MVP). Weitere Funktionen wie Newsletter-Versand, Media-Upload und erweiterte Analytics kommen bald!
        </p>
      </div>
    </div>
  );
}
