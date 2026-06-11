import bcrypt from 'bcryptjs';
import { randomBytes } from 'crypto';

/**
 * Hash ein Passwort mit bcrypt (cost: 12)
 */
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

/**
 * Vergleiche Passwort mit Hash
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

/**
 * Generiere einen sicheren Session-Token
 */
export function generateSessionToken(): string {
  return randomBytes(32).toString('hex');
}

/**
 * Validiere einen Passwort (Anforderungen)
 */
export function validatePassword(password: string): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (password.length < 12) {
    errors.push('Passwort muss mindestens 12 Zeichen lang sein');
  }
  if (!/[A-Z]/.test(password)) {
    errors.push('Passwort muss mindestens einen Großbuchstaben enthalten');
  }
  if (!/[a-z]/.test(password)) {
    errors.push('Passwort muss mindestens einen Kleinbuchstaben enthalten');
  }
  if (!/[0-9]/.test(password)) {
    errors.push('Passwort muss mindestens eine Zahl enthalten');
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Passwort muss mindestens ein Sonderzeichen enthalten');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
