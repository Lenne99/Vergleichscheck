#!/bin/bash

set -e

echo "🚀 Vergleichscheck Admin-System Setup"
echo "========================================"
echo ""

# 1. Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "❌ .env.local nicht gefunden!"
    echo "Bitte erstelle .env.local mit DATABASE_URL"
    exit 1
fi

echo "✅ .env.local gefunden"
echo ""

# 2. Generate SESSION_SECRET if not present
if ! grep -q "SESSION_SECRET=" .env.local; then
    echo "🔐 Generiere SESSION_SECRET..."
    SESSION_SECRET=$(openssl rand -hex 32)
    echo "SESSION_SECRET=\"$SESSION_SECRET\"" >> .env.local
    echo "✅ SESSION_SECRET generiert"
else
    echo "✅ SESSION_SECRET bereits vorhanden"
fi
echo ""

# 3. Install dependencies
echo "📦 Installiere Dependencies..."
npm install
echo "✅ Dependencies installiert"
echo ""

# 4. Setup Prisma
echo "🗄️  Richte Prisma-Migration ein..."
npx prisma migrate dev --name init --skip-generate || true
echo "✅ Prisma-Migration durchgeführt"
echo ""

# 5. Generate Prisma Client
echo "🔧 Generiere Prisma Client..."
npx prisma generate
echo "✅ Prisma Client generiert"
echo ""

# 6. Create default admin user
echo "👤 Erstelle Standard-Admin-Benutzer..."
npx prisma db push
echo "✅ Datenbankschema aktualisiert"
echo ""

echo "========================================"
echo "✅ Setup abgeschlossen!"
echo ""
echo "📝 Nächste Schritte:"
echo "1. Starte PostgreSQL (falls nicht laufen): docker run --name vergleichscheck-db -e POSTGRES_PASSWORD=dev_password_123 -p 5432:5432 postgres:16-alpine"
echo "2. Starte Dev-Server: npm run dev"
echo "3. Öffne http://localhost:3000/admin/login"
echo ""
echo "🔓 Login-Daten:"
echo "   E-Mail: admin@vergleichscheck.com"
echo "   Passwort: 12345"
echo ""
