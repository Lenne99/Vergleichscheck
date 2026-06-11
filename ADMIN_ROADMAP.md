# Admin-Bereich Roadmap für vergleichscheck.com

**Projekt:** Vollständiger Admin-Bereich für Next.js Website  
**Startdatum:** 2026-06-11  
**Tech-Stack:** Next.js 16.2.9, React 19.2.4, TypeScript, Tailwind CSS  

---

## 1. TECH-STACK EMPFEHLUNG

### Datenbank
- **Primär: PostgreSQL** (remote oder lokal via Docker)
  - ✅ Scalable, Production-ready
  - ✅ Volltext-Suche (für CMS)
  - ✅ JSON-Support (für Meta-Daten)
  - ✅ Backups einfach zu handhaben
  
- **Fallback: SQLite** (wenn kein Server/nur lokal)
  - ✅ Zero-Setup, dateibasiert
  - ✅ Good für MVP
  - ❌ Limited Skalierbarkeit
  - Empfehlung: `better-sqlite3` für performante Queries

### Authentication & Sessions
- **NextAuth.js v5** (neu seit Next.js 13)
  - ✅ Built-in für Next.js
  - ✅ Session Management
  - ✅ Credentials + OAuth Support
  - ✅ Database Sessions (nicht JWT)
  
- **Alternative: Custom Auth** (wenn minimal)
  - Ed25519 für Passwort-Hashing (via `@noble/hashes`)
  - HTTP-Only Cookies
  - Redis für Session-Store (optional)

### ORM & Datenbankzugriff
- **Prisma** (empfohlen)
  - ✅ Type-safe Queries
  - ✅ Auto-Migrations
  - ✅ Admin UI (Prisma Studio)
  - ✅ PostgreSQL + SQLite Support
  
- **Alternative: Drizzle ORM**
  - Leichter, weniger Dependencies
  - Auch Type-safe

### API & Validierung
- **API Routes** (Next.js native)
- **Zod** für Input-Validierung
- **tRPC** (optional später)

### File Upload & Media
- **Lokale Storage** (Phase 1)
  - `public/uploads` Verzeichnis
  - Sharp für Image-Optimierung
  
- **S3-compatible** (Phase 2)
  - AWS S3 oder Cloudflare R2
  - via `@aws-sdk/client-s3`

### UI & Design
- **Existing:** Tailwind CSS 4
- **Component Library:** shadcn/ui
- **Icons:** lucide-react
- **Tables:** TanStack Table (React Table)
- **Forms:** React Hook Form + Zod

### Sicherheit
- **Rate Limiting:** `Ratelimit` (Upstash)
- **CSRF Protection:** `csrf` package
- **Password Hashing:** `@noble/hashes` oder `bcryptjs`
- **Encryption:** `tweetnacl.js` für sensitive Data

### Logging & Monitoring
- **Audit Logs:** PostgreSQL Table (Phase 1)
- **Error Tracking:** Optional Sentry (Phase 2)

---

## 2. PHASIERUNG (Realistic MVP → Production)

### Phase 1: Kern-Admin (Woche 1-3)
**MVP - Minimum Viable Product**

Ziel: Sichere Admin-Verwaltung mit Basis-CMS
- [ ] Login/Logout + Session Management
- [ ] Admin Dashboard (Übersicht)
- [ ] Basic CMS (Blog/Seiten Editor)
- [ ] Kontaktformular-Viewer
- [ ] Analytics-Display (aus vorhandenen Daten)
- [ ] Basic Sicherheit (Passwords, Login-History)

**Warum erst:** 
- Du brauchst Admin-Zugang, um Rest zu managen
- Basis-CMS = größtes Pain-Point

**Nicht in Phase 1:**
- Newsletter-System (komplex, später)
- Medienbibliothek (can use external service)
- Design-Editor (Nice-to-Have)
- Dark Mode (später)

---

### Phase 2: Content & Media (Woche 4-6)
**Erweiterte CMS-Features**

- [ ] Newsletter-System (Subscriber-DB, Templates, Versand)
- [ ] Medienbibliothek (Upload, Galerie, Delete)
- [ ] SEO-Editor (Meta-Tags, Keywords, Schema)
- [ ] Advanced CMS (Categories, Tags, Versioning)
- [ ] User Management (weitere Admin-Accounts)

**Warum jetzt:**
- Phase 1 Foundation stabil
- Newsletter = eigenständiges System
- Media separate Concerns

---

### Phase 3: Advanced & Polish (Woche 7-8)
**Production-Ready**

- [ ] Design-Editor (Farben, Fonts, Custom CSS)
- [ ] Analytics (erweitert)
- [ ] Backup-System
- [ ] Dark/Light Mode
- [ ] Audit Log (Änderungsverlauf)
- [ ] Performance Optimizations
- [ ] Security Hardening

**Warum am Ende:**
- Nicht essentiell für MVP
- Braucht stabile Basis

---

### Phase 4: Infrastruktur (Ongoing)
**Automation & Skalierung**

- [ ] S3/R2 Integration (Media)
- [ ] Email-Service (Resend/SendGrid für Newsletter)
- [ ] Cron-Jobs (Scheduler)
- [ ] Monitoring & Alerts
- [ ] CDN für Assets

---

## 3. DATENBANKSTRUKTUR

### Core Tables

```sql
-- Users (Admin-Accounts)
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  role VARCHAR(50) DEFAULT 'editor', -- admin, editor
  is_active BOOLEAN DEFAULT true,
  two_factor_enabled BOOLEAN DEFAULT false,
  two_factor_secret VARCHAR(255),
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Sessions
CREATE TABLE sessions (
  id VARCHAR(255) PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  expires_at TIMESTAMP NOT NULL,
  data TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Login History (Audit)
CREATE TABLE login_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  ip_address VARCHAR(45),
  user_agent TEXT,
  success BOOLEAN DEFAULT true,
  login_at TIMESTAMP DEFAULT NOW()
);

-- CMS Pages
CREATE TABLE cms_pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  content TEXT, -- HTML
  seo_title VARCHAR(160),
  seo_description VARCHAR(160),
  seo_keywords VARCHAR(255),
  schema_markup JSONB, -- Structured data
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMP,
  author_id UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  INDEX idx_slug (slug),
  INDEX idx_published (is_published)
);

-- Blog Posts
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  content TEXT,
  excerpt VARCHAR(500),
  featured_image_url VARCHAR(255),
  category_id UUID REFERENCES blog_categories(id),
  tags JSONB, -- Array of tags
  seo_title VARCHAR(160),
  seo_description VARCHAR(160),
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMP,
  author_id UUID REFERENCES users(id),
  view_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Blog Categories
CREATE TABLE blog_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Contact Form Submissions
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  subject VARCHAR(255),
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new', -- new, read, replied, archived
  notes TEXT,
  replied_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Newsletter Subscribers
CREATE TABLE newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  status VARCHAR(50) DEFAULT 'subscribed', -- subscribed, unsubscribed, bounced
  unsubscribe_token VARCHAR(255) UNIQUE,
  subscribed_at TIMESTAMP DEFAULT NOW(),
  unsubscribed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Newsletter Campaigns
CREATE TABLE newsletter_campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subject VARCHAR(255) NOT NULL,
  preview_text VARCHAR(255),
  html_content TEXT,
  status VARCHAR(50) DEFAULT 'draft', -- draft, scheduled, sent, archived
  recipient_count INT DEFAULT 0,
  sent_count INT DEFAULT 0,
  open_count INT DEFAULT 0,
  click_count INT DEFAULT 0,
  scheduled_for TIMESTAMP,
  sent_at TIMESTAMP,
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Newsletter Campaign Recipients (Tracking)
CREATE TABLE newsletter_campaign_recipients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id UUID REFERENCES newsletter_campaigns(id) ON DELETE CASCADE,
  subscriber_id UUID REFERENCES newsletter_subscribers(id) ON DELETE CASCADE,
  opened_at TIMESTAMP,
  clicked_at TIMESTAMP,
  bounced BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(campaign_id, subscriber_id)
);

-- Media Files
CREATE TABLE media_files (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  filename VARCHAR(255) NOT NULL,
  original_name VARCHAR(255),
  mime_type VARCHAR(100),
  file_size INT,
  file_url VARCHAR(255) NOT NULL,
  thumbnail_url VARCHAR(255),
  alt_text VARCHAR(255),
  tags JSONB, -- Array
  uploaded_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  INDEX idx_mime (mime_type)
);

-- Design Settings
CREATE TABLE design_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  setting_key VARCHAR(100) UNIQUE NOT NULL,
  setting_value TEXT,
  data_type VARCHAR(50), -- color, font, text, etc
  updated_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Audit Log (Änderungsverlauf)
CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  entity_type VARCHAR(100), -- cms_page, blog_post, etc
  entity_id VARCHAR(255),
  action VARCHAR(50), -- create, update, delete, publish
  old_values JSONB,
  new_values JSONB,
  ip_address VARCHAR(45),
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  INDEX idx_entity (entity_type, entity_id),
  INDEX idx_created (created_at)
);

-- Analytics Events (Basic)
CREATE TABLE analytics_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type VARCHAR(100), -- page_view, click, form_submit
  page_url VARCHAR(255),
  referrer VARCHAR(255),
  user_agent TEXT,
  ip_address VARCHAR(45),
  created_at TIMESTAMP DEFAULT NOW(),
  INDEX idx_event (event_type, created_at),
  INDEX idx_page (page_url)
);

-- Backups (Log)
CREATE TABLE backup_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  backup_type VARCHAR(100), -- database, files
  status VARCHAR(50), -- success, failed
  file_path VARCHAR(255),
  file_size INT,
  error_message TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  INDEX idx_status (status)
);
```

### Indexes & Constraints
```sql
-- Performance
CREATE INDEX idx_cms_pages_updated ON cms_pages(updated_at DESC);
CREATE INDEX idx_blog_posts_published ON blog_posts(published_at DESC);
CREATE INDEX idx_newsletter_subscribers_status ON newsletter_subscribers(status);
CREATE INDEX idx_audit_logs_user ON audit_logs(user_id, created_at DESC);

-- Unique Constraints
ALTER TABLE users ADD CONSTRAINT unique_email UNIQUE(email);
ALTER TABLE cms_pages ADD CONSTRAINT unique_slug UNIQUE(slug);
ALTER TABLE blog_posts ADD CONSTRAINT unique_blog_slug UNIQUE(slug);
```

---

## 4. API-STRUKTUR

### Auth Endpoints
```
POST   /api/auth/login              - Login mit Email/Password
POST   /api/auth/logout             - Logout
POST   /api/auth/register           - Admin registrieren (nur von existierenden Admin)
GET    /api/auth/session            - Current session data
POST   /api/auth/password-change    - Passwort ändern
POST   /api/auth/2fa/setup          - 2FA aktivieren
POST   /api/auth/2fa/verify         - 2FA Verifizierung
```

### Admin Dashboard
```
GET    /api/admin/dashboard         - Statistiken (Pages, Posts, Contacts, Subscribers)
GET    /api/admin/login-history     - Login-Verlauf
```

### CMS & Pages
```
GET    /api/admin/pages             - Alle Seiten (mit Pagination)
GET    /api/admin/pages/[id]        - Detail einer Seite
POST   /api/admin/pages             - Neue Seite erstellen
PUT    /api/admin/pages/[id]        - Seite aktualisieren
DELETE /api/admin/pages/[id]        - Seite löschen
POST   /api/admin/pages/[id]/publish - Seite publizieren
```

### Blog
```
GET    /api/admin/blog/posts        - Alle Blog-Posts
GET    /api/admin/blog/posts/[id]   - Detail
POST   /api/admin/blog/posts        - Neuer Post
PUT    /api/admin/blog/posts/[id]   - Update
DELETE /api/admin/blog/posts/[id]   - Delete
POST   /api/admin/blog/posts/[id]/publish

GET    /api/admin/blog/categories   - Kategorien
POST   /api/admin/blog/categories
```

### Kontaktformular
```
GET    /api/admin/contacts          - Alle Submissions (mit Filter)
GET    /api/admin/contacts/[id]     - Detail
PATCH  /api/admin/contacts/[id]     - Status updaten
DELETE /api/admin/contacts/[id]     - Löschen
```

### Newsletter
```
GET    /api/admin/newsletter/subscribers       - Alle Subscriber
POST   /api/admin/newsletter/subscribers/import - CSV Import
DELETE /api/admin/newsletter/subscribers/[id]  - Unsubscribe

GET    /api/admin/newsletter/campaigns         - Alle Kampagnen
POST   /api/admin/newsletter/campaigns         - Neue Kampagne
PUT    /api/admin/newsletter/campaigns/[id]   - Draft speichern
POST   /api/admin/newsletter/campaigns/[id]/send - Versenden
GET    /api/admin/newsletter/campaigns/[id]/stats - Statistiken

GET    /api/admin/newsletter/unsubscribe      - Public Unsubscribe Link
```

### Media
```
GET    /api/admin/media             - Alle Media mit Pagination
POST   /api/admin/media             - Upload (multipart/form-data)
DELETE /api/admin/media/[id]        - Delete
PATCH  /api/admin/media/[id]        - Update Meta (alt_text, tags)
```

### Design & Settings
```
GET    /api/admin/settings/design   - Alle Design-Einstellungen
PUT    /api/admin/settings/design/[key] - Specific Setting Update
GET    /api/admin/settings/colors   - Color Palette
PUT    /api/admin/settings/colors   - Update Colors
```

### Analytics
```
GET    /api/admin/analytics/overview      - Pageviews, Users, etc
GET    /api/admin/analytics/pages         - Top Pages
GET    /api/admin/analytics/traffic       - Traffic Sources
GET    /api/admin/analytics/events        - Event Tracking
GET    /api/admin/analytics/export        - CSV Export
```

### Sicherheit & Audit
```
GET    /api/admin/audit-logs        - Änderungsverlauf
GET    /api/admin/users             - Alle Admin-User
POST   /api/admin/users             - Neuer User
DELETE /api/admin/users/[id]        - User deaktivieren
```

### Backups
```
GET    /api/admin/backups           - Backup-History
POST   /api/admin/backups/create    - Backup erstellen (trigger)
POST   /api/admin/backups/restore   - Restore
GET    /api/admin/backups/[id]/download - Download
```

---

## 5. ORDNERSTRUKTUR

```
/src
  /app
    /admin
      /layout.tsx              # Admin Layout (Sidebar, Header)
      /(auth)
        /login/page.tsx
        /setup/page.tsx        # Initial Admin Setup
      /(dashboard)
        /page.tsx              # Dashboard
        /profile/page.tsx      # Admin Profile
      /pages
        /page.tsx              # CMS Pages Manager
        /[id]/edit/page.tsx
      /blog
        /page.tsx              # Blog Manager
        /[id]/edit/page.tsx
      /contacts/page.tsx       # Contact Form Viewer
      /newsletter
        /subscribers/page.tsx
        /campaigns/page.tsx
        /[id]/edit/page.tsx
      /media/page.tsx          # Media Library
      /settings
        /design/page.tsx
        /security/page.tsx
        /analytics/page.tsx
      /audit/page.tsx          # Audit Logs
      
  /api
    /auth
      /login/route.ts
      /logout/route.ts
      /session/route.ts
      /password/route.ts
      /2fa/route.ts
    /admin
      /dashboard/route.ts
      /pages/route.ts
      /pages/[id]/route.ts
      /blog/posts/route.ts
      /blog/posts/[id]/route.ts
      /contacts/route.ts
      /newsletter/subscribers/route.ts
      /newsletter/campaigns/route.ts
      /media/route.ts
      /settings/route.ts
      /audit-logs/route.ts
      /users/route.ts
    
  /components
    /admin
      /Sidebar.tsx
      /DashboardCard.tsx
      /PageEditor.tsx
      /MediaUpload.tsx
      /NewsletterBuilder.tsx
    
  /lib
    /auth.ts                   # Auth utilities
    /db.ts                     # Prisma client
    /api-handlers.ts           # Common API logic
    /validations.ts            # Zod schemas
    /rate-limit.ts
    /audit.ts                  # Audit logging
    /email.ts                  # Email sending
    /storage.ts                # File upload logic
    
  /types
    /index.ts                  # Shared types
    /admin.ts
    
  /middleware.ts              # Auth middleware

/prisma
  /schema.prisma              # Database Schema
  /migrations

/.env.local
/.env.example
/ADMIN_ROADMAP.md           # This file
```

---

## 6. SICHERHEITSARCHITEKTUR

### Authentication Flow
```
1. Login Request (POST /api/auth/login)
   - Email + Password
   - Zod validation
   - Rate Limit Check (max 5 attempts in 15 min)

2. Password Verification
   - Hash mit Argon2 (via @noble/hashes)
   - Timing-resistant comparison
   
3. Session Creation
   - NextAuth.js v5 mit Database Sessions
   - httpOnly, Secure, SameSite Cookies
   - Token: 24 hours expiry
   
4. Middleware
   - Alle /api/admin/* require Auth
   - Role-based Access Control (admin vs editor)
   
5. Logout
   - Session DB löschen
   - Cookie löschen
```

### Password Security
```
- Minimum 12 chars, 1 upper, 1 number, 1 special
- Hash: Argon2id (CPU + Memory intensive)
- Salt: Auto generated
- Storage: Hash-only in DB (never plain)
- Change: Require old password verification
```

### Session Management
```
Storage: Database (NOT JWT)
- Sessionid in httpOnly Cookie
- Server-side validation
- Automatic expiry
- Logout destroys session immediately

Refresh: Auto-refresh on activity
- New expiry timestamp on each request
- Max 30 days total (even with activity)
```

### Rate Limiting
```
Login attempts: 5 per 15 minutes per IP
API calls: 100 per hour per user (configurable per endpoint)
File upload: 10 MB per file, 500 MB per month per user
```

### Data Protection
```
Sensitive fields encrypted at rest:
- 2FA secrets: Encrypted with server key
- API tokens: Encrypted
- Password reset tokens: Hash only

CSRF: Double-submit cookie (Next.js built-in)
XSS: Content Security Policy headers
SQL Injection: Prepared statements (Prisma)
```

### Audit & Logging
```
Every admin action logged:
- User ID, Timestamp
- Entity changed, Old/New values
- IP address, User Agent
- Retention: 2 years
- Access logs: Login/logout only
```

### Backup Security
```
- Encrypted backups
- Stored in separate location
- Retention policy: 30 daily, 12 weekly, 12 monthly
- Tested restores (monthly)
```

---

## 7. IMPLEMENTATION ROADMAP (Detailliert)

### Phase 1, Woche 1: Basis-Setup
**Tag 1-2: Database & ORM**
- [ ] PostgreSQL lokal via Docker Setup
- [ ] Prisma installieren & konfigurieren
- [ ] Schema für `users`, `sessions`, `login_history` schreiben
- [ ] Erstes Migration erstellen
- [ ] Prisma Studio testen

**Tag 3: Authentication Base**
- [ ] NextAuth.js v5 installieren
- [ ] Custom Credentials Provider implementieren
- [ ] Password Hashing (Argon2)
- [ ] Session DB Schema
- [ ] Login API Endpoint

**Tag 4-5: Admin Layout & Dashboard**
- [ ] Middleware für Auth-Check
- [ ] Admin Layout Component (Sidebar, Header)
- [ ] Protected Routes (admin/* require login)
- [ ] Login Page
- [ ] Dashboard Page (Basic)
- [ ] Logout

**Tag 6-7: Testing & Deployment**
- [ ] Manual Login Flow testen
- [ ] Error Handling
- [ ] Environment Vars (.env.local)
- [ ] Deploy zu Vercel (mit DB verbinden)

---

### Phase 1, Woche 2: CMS Pages
- [ ] `cms_pages` Table & Migration
- [ ] Page Manager UI (List, Create, Edit, Delete)
- [ ] Rich Text Editor Integration (Draft.js oder Editor.js)
- [ ] SEO Editor (Title, Description, Keywords)
- [ ] Publish/Draft States
- [ ] URL Slug Generation
- [ ] API: GET, POST, PUT, DELETE

**Deliverable:** Admin kann Seiten bearbeiten, neue hinzufügen, publishen

---

### Phase 1, Woche 3: Contact Form & Security
- [ ] Contact Submissions Table
- [ ] Contact Manager UI (List, View, Mark as Read, Reply)
- [ ] Login History Page
- [ ] Password Change Form
- [ ] Session Management (View Active Sessions, Logout Others)
- [ ] Audit Logging Middleware
- [ ] Rate Limiting auf Auth Endpoints

**Deliverable:** MVP Admin-Bereich funktional

---

### Phase 2, Woche 4: Newsletter System
- [ ] `newsletter_subscribers` Table
- [ ] CSV Import für Subscriber
- [ ] Subscriber Manager UI
- [ ] `newsletter_campaigns` Table
- [ ] Campaign Builder (HTML Editor mit Templates)
- [ ] Email Template System
- [ ] Campaign Scheduling

**Deliverable:** Newsletter erstellen & versenden können

---

### Phase 2, Woche 5: Media Library
- [ ] `media_files` Table
- [ ] File Upload Handler (multipart/form-data)
- [ ] Image Optimization (Sharp)
- [ ] Media Library UI (Grid, Upload, Delete, Bulk Actions)
- [ ] Alt Text & Tags Management
- [ ] Search & Filter

**Deliverable:** Media management funktional

---

### Phase 2, Woche 6: Advanced CMS
- [ ] Blog Posts System
- [ ] Blog Categories
- [ ] Extended SEO (Schema Markup)
- [ ] Post Preview/Draft Feature
- [ ] Versioning (Track Changes)
- [ ] User Management (Multiple Admins)

**Deliverable:** Vollständiges CMS für Content

---

### Phase 3, Woche 7: Design & Analytics
- [ ] Design Settings Table
- [ ] Color/Font Picker UI
- [ ] Custom CSS Editor (Safe subset)
- [ ] Analytics Events Tracking
- [ ] Dashboard Stats (Realtime)
- [ ] Dark/Light Mode Toggle

**Deliverable:** Design-Anpassungen ohne Code

---

### Phase 3, Woche 8: Polish & Production
- [ ] Backup System (automated daily)
- [ ] Performance Optimization
- [ ] Security Audit
- [ ] Mobile Responsiveness Admin
- [ ] Error Boundaries & 404 Pages
- [ ] Documentation

**Deliverable:** Production-ready Admin-Bereich

---

## 8. DEPENDENCIES (npm packages)

### Phase 1 (MVP)
```json
{
  "next": "^16.2.9",
  "react": "^19.2.4",
  "next-auth": "^5.0.0",
  "@prisma/client": "^5.x",
  "@noble/hashes": "^1.x",
  "zod": "^3.x",
  "react-hook-form": "^7.x",
  "@hookform/resolvers": "^3.x",
  "date-fns": "^2.x"
}
```

### Phase 2 (Extended)
```json
{
  "react-markdown": "^9.x",
  "remark-gfm": "^4.x",
  "sharp": "^0.33.x",
  "react-dropzone": "^14.x",
  "react-table": "^8.x",
  "framer-motion": "^10.x"
}
```

### Phase 3 (Polish)
```json
{
  "next-themes": "^0.x",
  "sonner": "^1.x",
  "react-toastify": "^10.x",
  "xlsx": "^0.x" // For CSV Export
}
```

### Dev Dependencies
```json
{
  "@prisma/studio": "^5.x",
  "prisma": "^5.x",
  "typescript": "^5.x",
  "tailwindcss": "^4.x",
  "@tailwindcss/postcss": "^4.x",
  "eslint": "^9.x"
}
```

---

## 9. ENVIRONMENT VARIABLES

```env
# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/vergleichscheck

# NextAuth
NEXTAUTH_SECRET=<generate with: openssl rand -base64 32>
NEXTAUTH_URL=http://localhost:3000

# Optional: Email (Phase 2)
RESEND_API_KEY=re_xxxxx
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=app-password

# Optional: S3 Storage (Phase 2)
AWS_ACCESS_KEY_ID=xxxxx
AWS_SECRET_ACCESS_KEY=xxxxx
AWS_S3_BUCKET=vergleichscheck-media
AWS_REGION=eu-central-1

# Optional: Monitoring (Phase 3)
SENTRY_DSN=https://xxxxx
```

---

## 10. MVP ACCEPTANCE CRITERIA (Phase 1 End)

- [x] Admin kann sich einloggen/ausloggen
- [x] Dashboard zeigt Statistiken (Pages, Posts, Contacts, Subscribers)
- [x] Admin kann Seiten erstellen/bearbeiten/löschen
- [x] Admin kann Seiten publishen
- [x] SEO Editor für alle Seiten funktioniert
- [x] Contact Form Submissions anschauen
- [x] Login-History sichtbar
- [x] Passwort ändern funktioniert
- [x] Sessions korrekt verwaltet (Logout, Timeout)
- [x] Alle Änderungen im Audit Log
- [x] Rate Limiting auf Login

---

## 11. TESTING STRATEGIE

### Unit Tests (Phase 1)
```typescript
// __tests__/auth.test.ts
- Password hashing & verification
- Session creation & validation
- Role-based access control
```

### Integration Tests (Phase 2)
```typescript
// __tests__/api/pages.test.ts
- Create/Read/Update/Delete flows
- Authorization checks
```

### E2E Tests (Phase 3)
```typescript
// e2e/admin-workflow.spec.ts
- Complete admin workflows (Login -> Create Page -> Publish)
```

### Manual Testing Checklist
```
Phase 1:
- [ ] Login mit falschen Credentials
- [ ] Login mit richtigen Credentials
- [ ] Session Timeout (30 min)
- [ ] Page erstellen & speichern
- [ ] Page löschen (mit Bestätigung)
- [ ] Seite in Vercel live sehen
```

---

## 12. KNOWN CHALLENGES & SOLUTIONS

| Challenge | Problem | Lösung |
|-----------|---------|--------|
| **Email Versand** | SMTP Setup kompliziert | Phase 2: Resend.com API nutzen (einfach) |
| **S3 Uploads** | Credentials sicher handhaben | Phase 2: Use signed URLs (no frontend credentials) |
| **Large Content** | Seiten mit viel HTML langsam | Lazy-load Editor, Content Caching |
| **WYSIWYG Editor** | Komplexe Dependencies | Start mit Markdown, später Rich Text (Draft.js) |
| **Concurrent Edits** | Merge-Konflikte | Optimistic Locking (version field) |
| **Backup Strategy** | Wer triggert Backups? | Automated Cron (Phase 3) oder Manual Button (Phase 1) |
| **Newsletter Tracking** | Open Rates korrekt tracken | Pixel-based (einfach) vs Event-based (kompliziert) |

---

## 13. GO-LIVE CHECKLIST (Phase 1 → Production)

**Pre-Deploy**
- [ ] Alle env vars in Vercel konfiguriert
- [ ] Database gebackupped
- [ ] SSL Zertifikat korrekt
- [ ] Error Logging (Sentry optional)
- [ ] Load Testing durchgeführt

**Post-Deploy**
- [ ] Admin-Login funktioniert
- [ ] Seite ändern & im Frontend live sehen
- [ ] Backups werden erstellt
- [ ] Monitoring aktiv

---

## 14. MAINTENANCE GUIDE

### Wöchentlich
- [ ] Check Login History auf verdächtige Aktivitäten
- [ ] Monitor Database Size
- [ ] Review Audit Logs

### Monatlich
- [ ] Security Updates (Dependencies)
- [ ] Test Backups (Restore einmal durchspielen)
- [ ] Review Analytics

### Jährlich
- [ ] Security Audit
- [ ] Performance Review
- [ ] Compliance Check (GDPR für Newsletter)

---

## Zusammenfassung

**Phase 1 (MVP):** Secure Admin Panel mit Auth + Basic CMS
- Zeitaufwand: 2-3 Wochen
- Komplexität: Mittel
- Risk: Niedrig (fokussiert, getestet)

**Phase 2 (Extended):** Newsletter + Media + Advanced CMS
- Zeitaufwand: 2 Wochen
- Komplexität: Mittel-Hoch
- Risk: Mittel (External Services)

**Phase 3 (Polish):** Design Editor, Analytics, Backup
- Zeitaufwand: 1-2 Wochen
- Komplexität: Niedrig
- Risk: Niedrig

**Total:** 5-7 Wochen für vollständigen Admin-Bereich

Beginne mit Phase 1, Launch zu Vercel, dann iteriere. MVP ist selbst-hosting ready und kann später problemlos erweitert werden.
