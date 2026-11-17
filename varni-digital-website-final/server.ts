/**
 * Varni Digital — website server
 * - Serves the React site (Vite in dev, /dist in production)
 * - POST /api/enquiries        → public enquiry form
 * - /api/admin/*               → password-protected admin panel API
 *
 * Storage: Firestore when STORAGE=firestore (recommended on Cloud Run),
 * otherwise a local JSON file at DATA_DIR/enquiries.json.
 */
import 'dotenv/config';
import express, { type Request, type Response, type NextFunction } from 'express';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import nodemailer from 'nodemailer';

const PORT = Number(process.env.PORT || 3000);
const IS_PROD = process.env.NODE_ENV === 'production';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '';
const SESSION_SECRET =
  process.env.SESSION_SECRET || crypto.createHash('sha256').update('varni:' + ADMIN_PASSWORD).digest('hex');
const SESSION_HOURS = 12;

// ---------- Types ----------
export type EnquiryStatus = 'new' | 'contacted' | 'qualified' | 'won' | 'lost';
export interface Enquiry {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  business: string;
  phone: string;
  email: string;
  services: string[];
  message: string;
  status: EnquiryStatus;
  notes: string;
  source: string; // page the form was submitted from
  ip?: string;
}
const STATUSES: EnquiryStatus[] = ['new', 'contacted', 'qualified', 'won', 'lost'];
const SERVICES = [
  'Social Media Management',
  'Content Creation',
  'Paid Advertising (Meta / Google)',
  'Website Development',
  'SEO',
  'Print & Letterbox Distribution',
  'Full Digital Marketing',
];

// ---------- Storage ----------
interface Store {
  list(): Promise<Enquiry[]>;
  get(id: string): Promise<Enquiry | null>;
  create(e: Enquiry): Promise<void>;
  update(id: string, patch: Partial<Enquiry>): Promise<Enquiry | null>;
  remove(id: string): Promise<boolean>;
}

class FileStore implements Store {
  private file: string;
  constructor(dir: string) {
    fs.mkdirSync(dir, { recursive: true });
    this.file = path.join(dir, 'enquiries.json');
    if (!fs.existsSync(this.file)) fs.writeFileSync(this.file, '[]');
  }
  private read(): Enquiry[] {
    try { return JSON.parse(fs.readFileSync(this.file, 'utf8')); } catch { return []; }
  }
  private write(all: Enquiry[]) {
    const tmp = this.file + '.tmp';
    fs.writeFileSync(tmp, JSON.stringify(all, null, 2));
    fs.renameSync(tmp, this.file);
  }
  async list() { return this.read().sort((a, b) => b.createdAt.localeCompare(a.createdAt)); }
  async get(id: string) { return this.read().find((e) => e.id === id) || null; }
  async create(e: Enquiry) { const all = this.read(); all.push(e); this.write(all); }
  async update(id: string, patch: Partial<Enquiry>) {
    const all = this.read();
    const i = all.findIndex((e) => e.id === id);
    if (i < 0) return null;
    all[i] = { ...all[i], ...patch, updatedAt: new Date().toISOString() };
    this.write(all);
    return all[i];
  }
  async remove(id: string) {
    const all = this.read();
    const next = all.filter((e) => e.id !== id);
    if (next.length === all.length) return false;
    this.write(next);
    return true;
  }
}

async function makeFirestoreStore(): Promise<Store> {
  const { Firestore } = await import('@google-cloud/firestore');
  const db = new Firestore({
    projectId: process.env.GOOGLE_CLOUD_PROJECT || undefined,
    databaseId: process.env.FIRESTORE_DATABASE || undefined,
    ignoreUndefinedProperties: true,
  });
  const col = db.collection(process.env.FIRESTORE_COLLECTION || 'enquiries');
  return {
    async list() {
      const snap = await col.orderBy('createdAt', 'desc').limit(2000).get();
      return snap.docs.map((d) => d.data() as Enquiry);
    },
    async get(id) { const d = await col.doc(id).get(); return d.exists ? (d.data() as Enquiry) : null; },
    async create(e) { await col.doc(e.id).set(e); },
    async update(id, patch) {
      const ref = col.doc(id);
      const d = await ref.get();
      if (!d.exists) return null;
      const next = { ...(d.data() as Enquiry), ...patch, updatedAt: new Date().toISOString() };
      await ref.set(next);
      return next;
    },
    async remove(id) {
      const ref = col.doc(id);
      const d = await ref.get();
      if (!d.exists) return false;
      await ref.delete();
      return true;
    },
  };
}

// ---------- Email notification (Zoho SMTP) ----------
const mailer = process.env.SMTP_PASS
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.zoho.com.au',
      port: Number(process.env.SMTP_PORT || 465),
      secure: Number(process.env.SMTP_PORT || 465) === 465,
      auth: { user: process.env.SMTP_USER || 'admin@varnidigital.com.au', pass: process.env.SMTP_PASS },
    })
  : null;

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));

async function notify(e: Enquiry) {
  if (!mailer) return;
  const from = process.env.SMTP_USER || 'admin@varnidigital.com.au';
  const to = process.env.NOTIFY_TO || from;
  const rows: [string, string][] = [
    ['Name', e.name], ['Business', e.business], ['Phone', e.phone], ['Email', e.email],
    ['Services', e.services.join(', ') || '—'], ['Message', e.message || '—'], ['Page', e.source],
  ];
  const html = `<div style="font-family:Arial,sans-serif;max-width:600px">
    <h2 style="color:#050B1F;margin:0 0 12px">New website enquiry</h2>
    <table cellpadding="8" style="border-collapse:collapse;width:100%">
    ${rows.map(([k, v]) => `<tr><td style="background:#f3f4f6;font-weight:bold;width:120px;vertical-align:top">${k}</td><td style="white-space:pre-wrap">${esc(v)}</td></tr>`).join('')}
    </table>
    ${process.env.APP_URL && !process.env.APP_URL.startsWith('MY_') ? `<p><a href="${process.env.APP_URL.replace(/\/$/, '')}/admin">Open admin panel →</a></p>` : ''}
  </div>`;
  try {
    await mailer.sendMail({
      from: `"Varni Digital Website" <${from}>`,
      to,
      replyTo: `"${e.name}" <${e.email}>`,
      subject: `New enquiry: ${e.name} — ${e.business}`,
      text: rows.map(([k, v]) => `${k}: ${v}`).join('\n'),
      html,
    });
  } catch (err) {
    console.error('[mail] failed to send notification:', (err as Error).message);
  }
}

// ---------- Auth (signed cookie) ----------
function sign(payload: string) {
  return crypto.createHmac('sha256', SESSION_SECRET).update(payload).digest('base64url');
}
function makeToken() {
  const exp = Date.now() + SESSION_HOURS * 3600_000;
  const payload = `admin.${exp}`;
  return `${payload}.${sign(payload)}`;
}
function verifyToken(token?: string) {
  if (!token) return false;
  const parts = token.split('.');
  if (parts.length !== 3) return false;
  const payload = `${parts[0]}.${parts[1]}`;
  const expected = sign(payload);
  const a = Buffer.from(parts[2]);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return false;
  return Number(parts[1]) > Date.now();
}
function getCookie(req: Request, name: string) {
  const raw = req.headers.cookie || '';
  for (const part of raw.split(';')) {
    const [k, ...v] = part.trim().split('=');
    if (k === name) return decodeURIComponent(v.join('='));
  }
  return undefined;
}
function passwordMatches(input: string) {
  if (!ADMIN_PASSWORD) return false;
  const a = crypto.createHash('sha256').update(input).digest();
  const b = crypto.createHash('sha256').update(ADMIN_PASSWORD).digest();
  return crypto.timingSafeEqual(a, b);
}
function requireAdmin(req: Request, res: Response, next: NextFunction) {
  if (verifyToken(getCookie(req, 'vd_admin'))) return next();
  res.status(401).json({ error: 'Not signed in' });
}

// ---------- Simple in-memory rate limiter ----------
function rateLimit(max: number, windowMs: number) {
  const hits = new Map<string, number[]>();
  return (req: Request, res: Response, next: NextFunction) => {
    const key = req.ip || 'unknown';
    const now = Date.now();
    const list = (hits.get(key) || []).filter((t) => now - t < windowMs);
    if (list.length >= max) return res.status(429).json({ error: 'Too many requests. Please try again shortly.' });
    list.push(now);
    hits.set(key, list);
    next();
  };
}

// ---------- Validation ----------
const clean = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\d\s-]{8,20}$/;

function csvCell(v: unknown) {
  let s = Array.isArray(v) ? v.join('; ') : String(v ?? '');
  if (/^[=+\-@]/.test(s)) s = "'" + s; // prevent formula injection in Excel
  return `"${s.replace(/"/g, '""')}"`;
}

// ---------- App ----------
async function start() {
  const store: Store =
    process.env.STORAGE === 'firestore'
      ? await makeFirestoreStore()
      : new FileStore(process.env.DATA_DIR || path.join(process.cwd(), 'data'));
  console.log(`[storage] using ${process.env.STORAGE === 'firestore' ? 'Firestore' : 'local JSON file'}`);
  if (!ADMIN_PASSWORD) console.warn('[admin] ADMIN_PASSWORD is not set — admin login is disabled.');
  if (!mailer) console.warn('[mail] SMTP_PASS not set — email notifications are off.');

  const app = express();
  app.set('trust proxy', true);
  app.use(express.json({ limit: '50kb' }));

  // Public: submit enquiry
  app.post('/api/enquiries', rateLimit(5, 10 * 60_000), async (req, res) => {
    const b = req.body || {};
    if (clean(b.website, 200)) return res.json({ ok: true }); // honeypot: silently accept bots
    const enquiry: Enquiry = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      name: clean(b.name, 120),
      business: clean(b.business, 200),
      phone: clean(b.phone, 30),
      email: clean(b.email, 200).toLowerCase(),
      services: Array.isArray(b.services) ? b.services.filter((s: unknown) => typeof s === 'string' && SERVICES.includes(s)) : [],
      message: clean(b.message, 3000),
      status: 'new',
      notes: '',
      source: clean(b.source, 200) || '/',
      ip: req.ip,
    };
    const errors: Record<string, string> = {};
    if (enquiry.name.length < 2) errors.name = 'Please enter your name';
    if (enquiry.business.length < 2) errors.business = 'Please enter your business or company';
    if (!PHONE_RE.test(enquiry.phone)) errors.phone = 'Please enter a valid phone number';
    if (!EMAIL_RE.test(enquiry.email)) errors.email = 'Please enter a valid email';
    if (!enquiry.services.length && enquiry.message.length < 3) errors.message = 'Tell us what you need help with';
    if (Object.keys(errors).length) return res.status(400).json({ error: 'Please check the form', errors });
    try {
      await store.create(enquiry);
      notify(enquiry); // fire-and-forget
      res.json({ ok: true });
    } catch (err) {
      console.error('[enquiry] save failed', err);
      res.status(500).json({ error: 'Something went wrong. Please call us on 0416 824 965.' });
    }
  });

  // Admin auth
  app.post('/api/admin/login', rateLimit(10, 15 * 60_000), (req, res) => {
    if (!ADMIN_PASSWORD) return res.status(503).json({ error: 'Admin password not configured on server' });
    if (!passwordMatches(String(req.body?.password || ''))) return res.status(401).json({ error: 'Incorrect password' });
    res.setHeader(
      'Set-Cookie',
      `vd_admin=${makeToken()}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${SESSION_HOURS * 3600}${IS_PROD ? '; Secure' : ''}`,
    );
    res.json({ ok: true });
  });
  app.post('/api/admin/logout', (_req, res) => {
    res.setHeader('Set-Cookie', 'vd_admin=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0');
    res.json({ ok: true });
  });
  app.get('/api/admin/me', (req, res) => res.json({ authed: verifyToken(getCookie(req, 'vd_admin')) }));

  // Admin data
  app.get('/api/admin/enquiries', requireAdmin, async (_req, res) => {
    res.json({ enquiries: await store.list() });
  });
  app.patch('/api/admin/enquiries/:id', requireAdmin, async (req, res) => {
    const patch: Partial<Enquiry> = {};
    if (STATUSES.includes(req.body?.status)) patch.status = req.body.status;
    if (typeof req.body?.notes === 'string') patch.notes = req.body.notes.slice(0, 5000);
    const updated = await store.update(String(req.params.id), patch);
    if (!updated) return res.status(404).json({ error: 'Not found' });
    res.json({ enquiry: updated });
  });
  app.delete('/api/admin/enquiries/:id', requireAdmin, async (req, res) => {
    const ok = await store.remove(String(req.params.id));
    res.status(ok ? 200 : 404).json({ ok });
  });
  app.get('/api/admin/export.csv', requireAdmin, async (_req, res) => {
    const all = await store.list();
    const cols: (keyof Enquiry)[] = ['createdAt', 'name', 'business', 'phone', 'email', 'services', 'message', 'status', 'notes', 'source'];
    const csv = [cols.join(','), ...all.map((e) => cols.map((c) => csvCell(e[c])).join(','))].join('\r\n');
    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', `attachment; filename="varni-enquiries-${new Date().toISOString().slice(0, 10)}.csv"`);
    res.send('﻿' + csv);
  });

  app.use('/api', (_req, res) => res.status(404).json({ error: 'Not found' }));

  // Frontend
  if (!IS_PROD) {
    const { createServer } = await import('vite');
    const vite = await createServer({ server: { middlewareMode: true }, appType: 'spa' });
    app.use(vite.middlewares);
  } else {
    const dist = path.join(process.cwd(), 'dist');
    app.use(express.static(dist, { index: false, maxAge: '1h' }));
    app.get('*', (_req, res) => res.sendFile(path.join(dist, 'index.html')));
  }

  app.listen(PORT, '0.0.0.0', () => console.log(`Varni Digital running on http://localhost:${PORT}`));
}

start();
