import { supabase } from './supabase';
const API_URL = import.meta.env.VITE_API_URL;
export async function api<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = (await supabase?.auth.getSession())?.data.session?.access_token;
  const response = await fetch(`${API_URL}${path}`, { ...options, headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}), ...options.headers } });
  const data = await response.json(); if (!response.ok) throw new Error(data.error || 'Request failed.'); return data;
}
