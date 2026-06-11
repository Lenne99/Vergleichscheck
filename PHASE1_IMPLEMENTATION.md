# Phase 1: MVP Implementation Guide
**Admin-Bereich: Authentication + Basic CMS**  
**Estimated Duration:** 2-3 weeks  
**Status:** Ready to start

---

## Quick Start Checklist

- [ ] PostgreSQL lokal starten (Docker)
- [ ] Dependencies installieren
- [ ] Database Schema erstellen
- [ ] NextAuth.js Setup
- [ ] Login Seite bauen
- [ ] Admin Layout erstellen
- [ ] CMS Pages Manager implementieren
- [ ] Deploy zu Vercel

---

## Step 1: Database Setup (2 hours)

### Option A: PostgreSQL mit Docker (Empfohlen)

```bash
# 1. Docker Image starten
docker run --name vergleichscheck-db \
  -e POSTGRES_USER=admin \
  -e POSTGRES_PASSWORD=dev_password_123 \
  -e POSTGRES_DB=vergleichscheck \
  -p 5432:5432 \
  -v postgres_data:/var/lib/postgresql/data \
  postgres:16-alpine

# 2. Connection String in .env.local
DATABASE_URL="postgresql://admin:dev_password_123@localhost:5432/vergleichscheck"
```

### Option B: SQLite (für schnelle Tests)

```bash
# .env.local
DATABASE_URL="file:./prisma/dev.db"
```

**Achtung:** SQLite hat Limitations (kein Concurrent Write), nur für MVP wenn keine externe DB.

---

## Step 2: Dependency Installation (15 min)

```bash
npm install next-auth@5 @prisma/client zod react-hook-form date-fns
npm install --save-dev prisma @prisma/studio typescript @types/node
```

Verify versions:
- next-auth >= 5.0.0 (v5 ist neu!)
- @prisma/client >= 5.0.0

---

## Step 3: Prisma Setup (30 min)

### 3.1 Prisma konfigurieren

```bash
npx prisma init --datasource-provider postgresql
```

Dies erstellt:
- `/prisma/schema.prisma`
- `.env.local` mit DATABASE_URL

### 3.2 Schema schreiben

Ersetze `/prisma/schema.prisma` mit:

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String?
  passwordHash  String
  role          String    @default("editor") // admin, editor
  isActive      Boolean   @default(true)
  lastLogin     DateTime?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  sessions      Session[]
  loginHistory  LoginHistory[]
  cmsPages      CmsPage[]
  auditLogs     AuditLog[]

  @@map("users")
}

model Session {
  id            String    @id @default(cuid())
  sessionToken  String    @unique
  userId        String
  user          User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  expires       DateTime
  createdAt     DateTime  @default(now())

  @@map("sessions")
}

model LoginHistory {
  id        String    @id @default(cuid())
  userId    String
  user      User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  ipAddress String?
  userAgent String?
  success   Boolean   @default(true)
  loginAt   DateTime  @default(now())

  @@map("login_history")
}

model CmsPage {
  id            String    @id @default(cuid())
  title         String
  slug          String    @unique
  content       String    // HTML
  seoTitle      String?   @db.VarChar(160)
  seoDesc       String?   @db.VarChar(160)
  seoKeywords   String?
  schemaMarkup  Json?     // Structured data
  isPublished   Boolean   @default(false)
  publishedAt   DateTime?
  authorId      String
  author        User      @relation(fields: [authorId], references: [id])
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  @@index([slug])
  @@index([isPublished])
  @@map("cms_pages")
}

model AuditLog {
  id            String    @id @default(cuid())
  userId        String
  user          User      @relation(fields: [userId], references: [id])
  entityType    String    // cms_page, contact, etc
  entityId      String
  action        String    // create, update, delete, publish
  oldValues     Json?
  newValues     Json?
  ipAddress     String?
  userAgent     String?
  createdAt     DateTime  @default(now())

  @@index([entityType, entityId])
  @@index([createdAt])
  @@map("audit_logs")
}

model ContactSubmission {
  id        String    @id @default(cuid())
  name      String
  email     String
  phone     String?
  subject   String?
  message   String
  status    String    @default("new") // new, read, replied, archived
  notes     String?
  repliedAt DateTime?
  createdAt DateTime  @default(now())

  @@map("contact_submissions")
}

model NewsletterSubscriber {
  id        String    @id @default(cuid())
  email     String    @unique
  name      String?
  status    String    @default("subscribed") // subscribed, unsubscribed
  subscribedAt   DateTime @default(now())
  unsubscribedAt DateTime?

  @@map("newsletter_subscribers")
}

model DashboardStats {
  id           String    @id @default(cuid())
  pagesCount   Int       @default(0)
  postsCount   Int       @default(0)
  contactsCount Int      @default(0)
  subscribersCount Int   @default(0)
  updatedAt    DateTime  @updatedAt

  @@map("dashboard_stats")
}
```

### 3.3 Migration erstellen

```bash
npx prisma migrate dev --name init

# oder mit Namen
npx prisma migrate dev --name add_core_tables
```

Das erstellt:
- `/prisma/migrations/[timestamp]_init/migration.sql`
- Tables in PostgreSQL
- Prisma Client (TypeScript types)

### 3.4 Prisma Studio testen

```bash
npx prisma studio
```

Browser öffnet sich auf `http://localhost:5555` - dort kannst du Daten direkt einsehen/bearbeiten.

---

## Step 4: NextAuth.js v5 Setup (1 hour)

### 4.1 NextAuth Config

Erstelle `/src/lib/auth.ts`:

```typescript
// src/lib/auth.ts

import { type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "@noble/hashes/bcrypt";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./db";

// Credentials Provider mit Prisma
export const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          throw new Error("Email und Passwort erforderlich");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        });

        if (!user || !user.isActive) {
          throw new Error("Benutzer nicht gefunden");
        }

        // Password vergleichen (TODO: Implement Argon2)
        const isPasswordValid = await compare(
          credentials.password as string,
          user.passwordHash
        );

        if (!isPasswordValid) {
          // Log failed attempt
          await prisma.loginHistory.create({
            data: {
              userId: user.id,
              success: false,
              ipAddress: credentials.ip as string,
              userAgent: credentials.userAgent as string,
            },
          });
          throw new Error("Falsches Passwort");
        }

        // Log successful login
        await prisma.loginHistory.create({
          data: {
            userId: user.id,
            success: true,
            ipAddress: credentials.ip as string,
            userAgent: credentials.userAgent as string,
          },
        });

        // Update last login
        await prisma.user.update({
          where: { id: user.id },
          data: { lastLogin: new Date() },
        });

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "database",
    maxAge: 24 * 60 * 60, // 24 hours
    updateAge: 60 * 60, // Refresh every hour
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        (session.user as any).role = user.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/admin/login",
    error: "/admin/login",
  },
  trustHost: true,
};
```

### 4.2 Auth Route Handler

Erstelle `/src/app/api/auth/[...nextauth]/route.ts`:

```typescript
// src/app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import { authConfig } from "@/lib/auth";

const handler = NextAuth(authConfig);
export { handler as GET, handler as POST };
```

### 4.3 Middleware für Protected Routes

Erstelle `/src/middleware.ts`:

```typescript
// src/middleware.ts

import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    // Optional: Check roles
    const token = req.nextauth.token;
    if (req.nextUrl.pathname.startsWith("/admin") && token?.role !== "admin") {
      // Nur admins dürfen hier hin
      return Response.redirect(new URL("/admin/login", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        return token?.email != null;
      },
    },
  }
);

export const config = {
  matcher: ["/admin/:path*"],
};
```

### 4.4 Environment Variables

Füge zu `.env.local` hinzu:

```env
NEXTAUTH_SECRET=<generate with: openssl rand -base64 32>
NEXTAUTH_URL=http://localhost:3000
```

Generiere Secret:

```bash
openssl rand -base64 32
# Output: LongRandomString123...
```

---

## Step 5: Initial Admin User erstellen (15 min)

Erstelle ein Seed Script `/prisma/seed.ts`:

```typescript
// prisma/seed.ts

import { prisma } from "../src/lib/db";
import { hash } from "@noble/hashes/bcrypt";

async function main() {
  // Lösche existing (nur für Dev!)
  await prisma.user.deleteMany();

  // Erstelle Admin
  const hashedPassword = await hash("AdminPassword123!", 11);
  
  const admin = await prisma.user.create({
    data: {
      email: "admin@vergleichscheck.com",
      name: "Admin",
      passwordHash: hashedPassword,
      role: "admin",
      isActive: true,
    },
  });

  console.log("✅ Admin user created:", admin.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

Füge zu `package.json` hinzu:

```json
{
  "prisma": {
    "seed": "ts-node prisma/seed.ts"
  }
}
```

Führe aus:

```bash
npm run prisma:seed
```

---

## Step 6: Prisma Client Singleton

Erstelle `/src/lib/db.ts`:

```typescript
// src/lib/db.ts

import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```

---

## Step 7: Login Page (30 min)

Erstelle `/src/app/admin/login/page.tsx`:

```typescript
// src/app/admin/login/page.tsx

"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
      } else if (result?.ok) {
        router.push("/admin");
      }
    } catch (err) {
      setError("Login fehlgeschlagen");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-8">
        <h1 className="text-2xl font-bold mb-6">Admin Login</h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Passwort
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Wird angemeldet..." : "Anmelden"}
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4">
          Test: admin@vergleichscheck.com / AdminPassword123!
        </p>
      </div>
    </div>
  );
}
```

---

## Step 8: Admin Layout & Dashboard (1 hour)

### 8.1 Admin Layout

Erstelle `/src/app/admin/layout.tsx`:

```typescript
// src/app/admin/layout.tsx

import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authConfig);

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h1 className="text-2xl font-bold mb-8">Admin</h1>

        <nav className="space-y-4">
          <Link
            href="/admin"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Dashboard
          </Link>
          <Link
            href="/admin/pages"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Pages
          </Link>
          <Link
            href="/admin/contacts"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Kontakte
          </Link>
          <Link
            href="/admin/settings/security"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Einstellungen
          </Link>
        </nav>

        <div className="mt-auto pt-8 border-t border-gray-700">
          <p className="text-sm">{session.user?.email}</p>
          <Link
            href="/api/auth/signout"
            className="text-sm text-blue-400 hover:underline"
          >
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-8">{children}</main>
    </div>
  );
}
```

### 8.2 Dashboard Page

Erstelle `/src/app/admin/page.tsx`:

```typescript
// src/app/admin/page.tsx

import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";

export default async function Dashboard() {
  const session = await getServerSession(authConfig);
  const pagesCount = await prisma.cmsPage.count();
  const contactsCount = await prisma.contactSubmission.count();
  const subscribersCount = await prisma.newsletterSubscriber.count();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Pages</h3>
          <p className="text-3xl font-bold">{pagesCount}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Kontakte</h3>
          <p className="text-3xl font-bold">{contactsCount}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Newsletter</h3>
          <p className="text-3xl font-bold">{subscribersCount}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Logged In</h3>
          <p className="text-lg font-semibold">{session?.user?.email}</p>
        </div>
      </div>
    </div>
  );
}
```

---

## Step 9: CMS Pages Manager (2 hours)

### 9.1 API Endpoints

Erstelle `/src/app/api/admin/pages/route.ts`:

```typescript
// src/app/api/admin/pages/route.ts

import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";

export async function GET(req: Request) {
  const session = await getServerSession(authConfig);
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const pages = await prisma.cmsPage.findMany({
    include: { author: { select: { name: true } } },
    orderBy: { updatedAt: "desc" },
  });

  return Response.json(pages);
}

export async function POST(req: Request) {
  const session = await getServerSession(authConfig);
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();

  const page = await prisma.cmsPage.create({
    data: {
      title: body.title,
      slug: body.slug,
      content: body.content || "",
      seoTitle: body.seoTitle,
      seoDesc: body.seoDesc,
      seoKeywords: body.seoKeywords,
      authorId: session.user?.id as string,
    },
  });

  return Response.json(page);
}
```

Erstelle `/src/app/api/admin/pages/[id]/route.ts`:

```typescript
// src/app/api/admin/pages/[id]/route.ts

import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authConfig);
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const page = await prisma.cmsPage.findUnique({
    where: { id: params.id },
    include: { author: true },
  });

  if (!page) return Response.json({ error: "Not found" }, { status: 404 });

  return Response.json(page);
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authConfig);
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();

  const page = await prisma.cmsPage.update({
    where: { id: params.id },
    data: {
      title: body.title,
      slug: body.slug,
      content: body.content,
      seoTitle: body.seoTitle,
      seoDesc: body.seoDesc,
      seoKeywords: body.seoKeywords,
    },
  });

  return Response.json(page);
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authConfig);
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  await prisma.cmsPage.delete({
    where: { id: params.id },
  });

  return Response.json({ success: true });
}
```

### 9.2 Pages Manager UI

Erstelle `/src/app/admin/pages/page.tsx`:

```typescript
// src/app/admin/pages/page.tsx

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Page = {
  id: string;
  title: string;
  slug: string;
  isPublished: boolean;
  updatedAt: string;
  author?: { name: string | null };
};

export default function PagesPage() {
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPages();
  }, []);

  async function fetchPages() {
    const res = await fetch("/api/admin/pages");
    const data = await res.json();
    setPages(data);
    setLoading(false);
  }

  async function deletePage(id: string) {
    if (!confirm("Wirklich löschen?")) return;
    await fetch(`/api/admin/pages/${id}`, { method: "DELETE" });
    fetchPages();
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Pages</h1>
        <Link
          href="/admin/pages/new"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Neue Page
        </Link>
      </div>

      {loading ? (
        <p>Wird geladen...</p>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium">Slug</th>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {pages.map((page) => (
                <tr key={page.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-3">{page.title}</td>
                  <td className="px-6 py-3 text-sm text-gray-500">/{page.slug}</td>
                  <td className="px-6 py-3 text-sm">
                    {page.isPublished ? (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                        Published
                      </span>
                    ) : (
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                        Draft
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-3 text-sm">
                    <Link
                      href={`/admin/pages/${page.id}/edit`}
                      className="text-blue-600 hover:underline"
                    >
                      Bearbeiten
                    </Link>
                    <button
                      onClick={() => deletePage(page.id)}
                      className="text-red-600 hover:underline ml-4"
                    >
                      Löschen
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
```

---

## Step 10: Testing Checklist

Starten:

```bash
npm run dev
```

Öffne `http://localhost:3000/admin/login`

- [ ] Login mit `admin@vergleichscheck.com` / `AdminPassword123!`
- [ ] Dashboard zeigt Stats
- [ ] Sidebar Navigation funktioniert
- [ ] Page erstellen funktioniert
- [ ] Page bearbeiten funktioniert
- [ ] Page löschen funktioniert
- [ ] Logout funktioniert

---

## Step 11: Deploy zu Vercel (30 min)

### 11.1 Git Push

```bash
git add .
git commit -m "feat: add admin panel with auth and cms"
git push
```

### 11.2 Vercel Deploy

```bash
npx vercel
```

Oder direkt auf vercel.com:
1. Connect GitHub Repo
2. Konfiguriere Environment Variables:
   - DATABASE_URL (PostgreSQL)
   - NEXTAUTH_SECRET
   - NEXTAUTH_URL (production URL)
3. Deploy

### 11.3 Database Migrations auf Production

```bash
# Nach Deploy:
vercel env pull .env.production.local
npx prisma migrate deploy --skip-generate
```

---

## Known Issues & Fixes

### "Session strategy is not configured"

Lösung: Stelle sicher, dass `session.strategy` in authConfig auf `"database"` gesetzt ist.

### Password Hashing funktioniert nicht

```bash
npm install @noble/hashes
```

Dann in seed.ts:

```typescript
import { hash } from "@noble/hashes/bcrypt";
const hashedPassword = await hash(password, 11); // cost factor 11
```

### Prisma Studio Error

```bash
npm install -D @prisma/studio
npx prisma studio
```

### Database Connection Error

Überprüfe:
1. PostgreSQL läuft (`docker ps`)
2. DATABASE_URL korrekt in `.env.local`
3. Firewall/Port 5432 offen

---

## Next Steps (nach Phase 1 completion)

1. **Newsletter System** (Phase 2)
   - Subscriber Management
   - Campaign Builder
   - Email Templates

2. **Media Library** (Phase 2)
   - File Upload Handler
   - Image Optimization
   - Bulk Management

3. **Advanced Features** (Phase 3)
   - Design Editor
   - Analytics
   - Backups
   - Dark Mode

---

## Support

**Häufige Probleme:**
- Auth Middleware not working: Überprüfe `matcher` in middleware.ts
- API endpoint returns 401: Session abgelaufen, neu anmelden
- Database error: Check DATABASE_URL, db läuft?

**Resources:**
- NextAuth.js v5 Docs: https://next-auth.js.org/
- Prisma Docs: https://www.prisma.io/docs/
- Next.js Docs: https://nextjs.org/docs
