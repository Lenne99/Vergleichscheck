// Session-Utilities — läuft nur in Node.js Runtime (nicht Edge)

const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 Stunden

function getSecret(): string {
  return process.env.SESSION_SECRET || 'vergleichscheck-secret-change-in-production-2026';
}

async function hmacSign(payload: string, secret: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(payload));
  return Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function hmacVerify(payload: string, signature: string, secret: string): Promise<boolean> {
  const expected = await hmacSign(payload, secret);
  if (expected.length !== signature.length) return false;
  // Constant-time compare
  let diff = 0;
  for (let i = 0; i < expected.length; i++) {
    diff |= expected.charCodeAt(i) ^ signature.charCodeAt(i);
  }
  return diff === 0;
}

export async function createSessionToken(userId: string): Promise<string> {
  const timestamp = Date.now().toString();
  const payload = `${userId}:${timestamp}`;
  const signature = await hmacSign(payload, getSecret());
  return Buffer.from(`${payload}:${signature}`).toString('base64url');
}

export async function validateSessionToken(token: string): Promise<{ valid: boolean; userId?: string }> {
  try {
    const decoded = Buffer.from(token, 'base64url').toString('utf-8');
    const lastColon = decoded.lastIndexOf(':');
    const secondLastColon = decoded.lastIndexOf(':', lastColon - 1);

    const userId = decoded.substring(0, secondLastColon);
    const timestamp = decoded.substring(secondLastColon + 1, lastColon);
    const signature = decoded.substring(lastColon + 1);

    const payload = `${userId}:${timestamp}`;
    const valid = await hmacVerify(payload, signature, getSecret());
    if (!valid) return { valid: false };

    const tokenAge = Date.now() - parseInt(timestamp);
    if (tokenAge > SESSION_DURATION) return { valid: false };

    return { valid: true, userId };
  } catch {
    return { valid: false };
  }
}
