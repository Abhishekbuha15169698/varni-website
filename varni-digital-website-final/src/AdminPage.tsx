import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { Download, Loader2, LogOut, Mail, Phone, RefreshCw, Search, Trash2, X } from 'lucide-react';

type Status = 'new' | 'contacted' | 'qualified' | 'won' | 'lost';
interface Enquiry {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  business: string;
  phone: string;
  email: string;
  services: string[];
  message: string;
  status: Status;
  notes: string;
  source: string;
}

const STATUS: { key: Status; label: string; cls: string }[] = [
  { key: 'new', label: 'New', cls: 'bg-teal-400/15 text-teal-300 border-teal-400/40' },
  { key: 'contacted', label: 'Contacted', cls: 'bg-sky-400/15 text-sky-300 border-sky-400/40' },
  { key: 'qualified', label: 'Qualified', cls: 'bg-amber-400/15 text-amber-300 border-amber-400/40' },
  { key: 'won', label: 'Won', cls: 'bg-emerald-400/15 text-emerald-300 border-emerald-400/40' },
  { key: 'lost', label: 'Lost', cls: 'bg-white/5 text-white/50 border-white/15' },
];
const statusOf = (s: Status) => STATUS.find((x) => x.key === s)!;

const fmt = (iso: string) =>
  new Date(iso).toLocaleString('en-AU', { day: '2-digit', month: 'short', year: 'numeric', hour: 'numeric', minute: '2-digit', timeZone: 'Australia/Melbourne' });

async function api<T = any>(url: string, opts: RequestInit = {}): Promise<T> {
  const res = await fetch(url, { credentials: 'same-origin', headers: { 'Content-Type': 'application/json' }, ...opts });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw Object.assign(new Error(data.error || 'Request failed'), { status: res.status });
  return data;
}

export default function AdminPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);

  useEffect(() => {
    document.title = 'Admin | Varni Digital';
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    api('/api/admin/me').then((d) => setAuthed(d.authed)).catch(() => setAuthed(false));
    return () => meta.remove();
  }, []);

  if (authed === null)
    return (
      <div className="min-h-screen bg-navy-deep flex items-center justify-center">
        <Loader2 className="w-6 h-6 text-teal-400 animate-spin" />
      </div>
    );
  return authed ? <Dashboard onLogout={() => setAuthed(false)} /> : <Login onLogin={() => setAuthed(true)} />;
}

function Login({ onLogin }: { onLogin: () => void }) {
  const [pw, setPw] = useState('');
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);
  async function submit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr('');
    try {
      await api('/api/admin/login', { method: 'POST', body: JSON.stringify({ password: pw }) });
      onLogin();
    } catch (e: any) {
      setErr(e.message);
    } finally {
      setBusy(false);
    }
  }
  return (
    <div className="min-h-screen main-gradient flex items-center justify-center px-6 font-sans">
      <form onSubmit={submit} className="glass-panel-heavy rounded-2xl p-8 md:p-10 w-full max-w-sm">
        <div className="font-[800] tracking-[-1px] text-2xl text-gradient mb-1">VARNI DIGITAL</div>
        <p className="text-white/50 text-sm mb-8">Admin panel</p>
        <label className="block text-[11px] uppercase tracking-widest font-semibold text-white/60 mb-2">Password</label>
        <input
          type="password"
          autoFocus
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-400"
        />
        {err && <p className="text-red-300 text-sm mt-3">{err}</p>}
        <button disabled={busy || !pw} className="btn-primary w-full mt-6 disabled:opacity-50">
          {busy ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </div>
  );
}

function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [rows, setRows] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState('');
  const [filter, setFilter] = useState<Status | 'all'>('all');
  const [open, setOpen] = useState<Enquiry | null>(null);

  async function load() {
    setLoading(true);
    try {
      const d = await api<{ enquiries: Enquiry[] }>('/api/admin/enquiries');
      setRows(d.enquiries);
    } catch (e: any) {
      if (e.status === 401) onLogout();
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    load();
  }, []);

  async function logout() {
    await api('/api/admin/logout', { method: 'POST' }).catch(() => {});
    onLogout();
  }
  async function update(id: string, patch: Partial<Enquiry>) {
    const d = await api<{ enquiry: Enquiry }>(`/api/admin/enquiries/${id}`, { method: 'PATCH', body: JSON.stringify(patch) });
    setRows((r) => r.map((x) => (x.id === id ? d.enquiry : x)));
    setOpen((o) => (o && o.id === id ? d.enquiry : o));
  }
  async function remove(id: string) {
    if (!confirm('Delete this enquiry permanently?')) return;
    await api(`/api/admin/enquiries/${id}`, { method: 'DELETE' });
    setRows((r) => r.filter((x) => x.id !== id));
    setOpen(null);
  }

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: rows.length };
    STATUS.forEach((s) => (c[s.key] = rows.filter((r) => r.status === s.key).length));
    return c;
  }, [rows]);

  const shown = useMemo(() => {
    const t = q.trim().toLowerCase();
    return rows.filter(
      (r) =>
        (filter === 'all' || r.status === filter) &&
        (!t || [r.name, r.business, r.email, r.phone, r.message, r.services.join(' ')].join(' ').toLowerCase().includes(t)),
    );
  }, [rows, q, filter]);

  const thisWeek = rows.filter((r) => Date.now() - new Date(r.createdAt).getTime() < 7 * 864e5).length;

  return (
    <div className="min-h-screen bg-navy-deep text-white font-sans">
      <header className="border-b border-white/5 bg-navy/80 backdrop-blur sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <span className="font-[800] tracking-[-1px] text-xl text-gradient">VARNI DIGITAL</span>
            <span className="text-white/40 text-sm">Enquiries</span>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={load} className="p-2 rounded-lg hover:bg-white/5 text-white/60" title="Refresh">
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <a href="/api/admin/export.csv" className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg hover:bg-white/5 text-white/70">
              <Download className="w-4 h-4" /> <span className="hidden sm:inline">Export CSV</span>
            </a>
            <button onClick={logout} className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg hover:bg-white/5 text-white/70">
              <LogOut className="w-4 h-4" /> <span className="hidden sm:inline">Log out</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            ['Total enquiries', counts.all],
            ['New (not actioned)', counts.new],
            ['Last 7 days', thisWeek],
            ['Won', counts.won],
          ].map(([l, v]) => (
            <div key={l as string} className="glass-panel rounded-xl p-5">
              <div className="stat-label">{l}</div>
              <div className="stat-val">{v}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between mb-5">
          <div className="flex flex-wrap gap-2">
            {[{ key: 'all', label: 'All' } as const, ...STATUS].map((s) => (
              <button
                key={s.key}
                onClick={() => setFilter(s.key)}
                className={`px-3.5 py-1.5 rounded-full text-sm border ${
                  filter === s.key ? 'bg-teal-400 text-navy-deep border-teal-400 font-semibold' : 'border-white/10 text-white/60 hover:border-white/30'
                }`}
              >
                {s.label} <span className="opacity-60">{counts[s.key] ?? 0}</span>
              </button>
            ))}
          </div>
          <div className="relative md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search name, business, email…"
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:border-teal-400"
            />
          </div>
        </div>

        <div className="glass-panel rounded-xl overflow-hidden">
          {loading && !rows.length ? (
            <div className="p-16 text-center"><Loader2 className="w-6 h-6 text-teal-400 animate-spin mx-auto" /></div>
          ) : !shown.length ? (
            <div className="p-16 text-center text-white/40">{rows.length ? 'No enquiries match your filters.' : 'No enquiries yet. They\'ll appear here as soon as someone fills in the form.'}</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-left text-[11px] uppercase tracking-widest text-white/40 border-b border-white/5">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Received</th>
                    <th className="px-4 py-3 font-semibold">Name / Business</th>
                    <th className="px-4 py-3 font-semibold hidden md:table-cell">Contact</th>
                    <th className="px-4 py-3 font-semibold hidden lg:table-cell">Needs help with</th>
                    <th className="px-4 py-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {shown.map((r) => (
                    <tr key={r.id} onClick={() => setOpen(r)} className="border-b border-white/5 last:border-0 hover:bg-white/[0.03] cursor-pointer">
                      <td className="px-4 py-3.5 whitespace-nowrap text-white/50">{fmt(r.createdAt)}</td>
                      <td className="px-4 py-3.5">
                        <div className="font-semibold flex items-center gap-2">
                          {r.status === 'new' && <span className="w-2 h-2 rounded-full bg-teal-400" />}
                          {r.name}
                        </div>
                        <div className="text-white/50">{r.business}</div>
                      </td>
                      <td className="px-4 py-3.5 hidden md:table-cell text-white/70">
                        <div>{r.phone}</div>
                        <div className="text-white/50">{r.email}</div>
                      </td>
                      <td className="px-4 py-3.5 hidden lg:table-cell text-white/60 max-w-xs truncate">
                        {r.services.join(', ') || r.message}
                      </td>
                      <td className="px-4 py-3.5" onClick={(e) => e.stopPropagation()}>
                        <select
                          value={r.status}
                          onChange={(e) => update(r.id, { status: e.target.value as Status })}
                          className={`text-xs font-semibold border rounded-full px-2.5 py-1 bg-transparent focus:outline-none ${statusOf(r.status).cls}`}
                        >
                          {STATUS.map((s) => <option key={s.key} value={s.key} className="bg-navy text-white">{s.label}</option>)}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {open && <Detail e={open} onClose={() => setOpen(null)} onUpdate={update} onDelete={remove} />}
    </div>
  );
}

function Detail({ e, onClose, onUpdate, onDelete }: {
  e: Enquiry; onClose: () => void; onUpdate: (id: string, p: Partial<Enquiry>) => Promise<void>; onDelete: (id: string) => void;
}) {
  const [notes, setNotes] = useState(e.notes);
  const [saving, setSaving] = useState(false);
  useEffect(() => setNotes(e.notes), [e.id]);
  const dirty = notes !== e.notes;

  async function save() {
    setSaving(true);
    await onUpdate(e.id, { notes }).finally(() => setSaving(false));
  }
  const waPhone = e.phone.replace(/[^\d]/g, '').replace(/^0/, '61');

  return (
    <div className="fixed inset-0 z-30 flex justify-end" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60" />
      <aside onClick={(x) => x.stopPropagation()} className="relative w-full max-w-lg h-full bg-navy border-l border-white/10 overflow-y-auto p-6 md:p-8">
        <button onClick={onClose} className="absolute top-5 right-5 p-2 rounded-lg hover:bg-white/5 text-white/60"><X className="w-5 h-5" /></button>
        <div className="text-xs text-white/40 mb-1">{fmt(e.createdAt)} · from {e.source}</div>
        <h2 className="text-3xl mb-1">{e.name}</h2>
        <div className="text-white/60 mb-6">{e.business}</div>

        <div className="flex flex-wrap gap-2 mb-8">
          <a href={`tel:${e.phone}`} className="flex items-center gap-2 text-sm px-3.5 py-2 rounded-lg bg-teal-400 text-navy-deep font-semibold"><Phone className="w-4 h-4" /> {e.phone}</a>
          <a href={`mailto:${e.email}?subject=${encodeURIComponent('Your enquiry with Varni Digital')}`} className="flex items-center gap-2 text-sm px-3.5 py-2 rounded-lg border border-white/15 hover:border-teal-400"><Mail className="w-4 h-4" /> Email</a>
          <a href={`https://wa.me/${waPhone}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm px-3.5 py-2 rounded-lg border border-white/15 hover:border-teal-400">WhatsApp</a>
        </div>

        <Section title="Email"><span className="break-all">{e.email}</span></Section>
        <Section title="Needs help with">
          {e.services.length ? (
            <div className="flex flex-wrap gap-2">{e.services.map((s) => <span key={s} className="badge-primary !normal-case !tracking-normal !text-xs">{s}</span>)}</div>
          ) : '—'}
        </Section>
        <Section title="Message"><p className="whitespace-pre-wrap text-white/80">{e.message || '—'}</p></Section>

        <Section title="Status">
          <div className="flex flex-wrap gap-2">
            {STATUS.map((s) => (
              <button key={s.key} onClick={() => onUpdate(e.id, { status: s.key })}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${e.status === s.key ? s.cls : 'border-white/10 text-white/40 hover:text-white/70'}`}>
                {s.label}
              </button>
            ))}
          </div>
        </Section>

        <Section title="Internal notes">
          <textarea value={notes} onChange={(x) => setNotes(x.target.value)} placeholder="Call notes, quote sent, follow-up date…"
            className="w-full min-h-[120px] bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-teal-400" />
          <button onClick={save} disabled={!dirty || saving} className="mt-2 text-sm px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 disabled:opacity-40">
            {saving ? 'Saving…' : dirty ? 'Save notes' : 'Saved'}
          </button>
        </Section>

        <button onClick={() => onDelete(e.id)} className="mt-6 flex items-center gap-2 text-sm text-red-300/80 hover:text-red-300">
          <Trash2 className="w-4 h-4" /> Delete enquiry
        </button>
      </aside>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <div className="text-[11px] uppercase tracking-widest font-semibold text-white/40 mb-2">{title}</div>
      <div className="text-sm">{children}</div>
    </div>
  );
}
