import { NextRequest } from 'next/server';
import { validateSessionToken } from './session';

export async function requireAdmin(request: NextRequest): Promise<boolean> {
  const token = request.cookies.get('sessionToken')?.value;
  if (!token) return false;
  const { valid } = await validateSessionToken(token);
  return valid;
}
