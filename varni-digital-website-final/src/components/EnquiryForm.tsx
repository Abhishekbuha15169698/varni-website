import { useState, type FormEvent } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';

export const SERVICE_OPTIONS = [
  'Social Media Management',
  'Content Creation',
  'Paid Advertising (Meta / Google)',
  'Website Development',
  'SEO',
  'Print & Letterbox Distribution',
  'Full Digital Marketing',
];

type Fields = { name: string; business: string; phone: string; email: string; message: string; website: string };
const empty: Fields = { name: '', business: '', phone: '', email: '', message: '', website: '' };

export default function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const [f, setF] = useState<Fields>(empty);
  const [services, setServices] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setF((p) => ({ ...p, [k]: e.target.value }));
    setErrors((p) => ({ ...p, [k]: '' }));
  };
  const toggle = (s: string) => {
    setServices((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));
    setErrors((p) => ({ ...p, message: '' }));
  };

  async function submit(e: FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...f, services, source: window.location.pathname }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrors(data.errors || {});
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
        setStatus('error');
        return;
      }
      setStatus('done');
      setF(empty);
      setServices([]);
    } catch {
      setErrorMsg('Network error. Please try again or call 0416 824 965.');
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <div className="text-center py-10">
        <CheckCircle2 className="w-14 h-14 text-teal-400 mx-auto mb-5" />
        <h3 className="text-3xl mb-3">Thanks — we've got it!</h3>
        <p className="text-gray-300/80 font-sans">
          A Varni Digital strategist will be in touch within one business day.
        </p>
        <button onClick={() => setStatus('idle')} className="btn-secondary mx-auto mt-8">
          Send another enquiry
        </button>
      </div>
    );
  }

  const input =
    'w-full bg-white/5 border rounded-lg px-4 py-3.5 text-white placeholder-white/30 font-sans text-[15px] focus:outline-none focus:border-teal-400 focus:bg-white/[0.07] transition-colors';
  const border = (k: string) => (errors[k] ? 'border-red-400/70' : 'border-white/10');
  const label = 'block text-[11px] uppercase tracking-widest font-semibold text-white/60 mb-2 font-sans';
  const err = (k: string) => errors[k] && <p className="text-red-300 text-xs mt-1.5 font-sans">{errors[k]}</p>;

  return (
    <form onSubmit={submit} noValidate className="text-left font-sans">
      <div className={`grid gap-5 ${compact ? 'sm:grid-cols-2' : 'md:grid-cols-2'}`}>
        <div>
          <label className={label} htmlFor="eq-name">Name *</label>
          <input id="eq-name" className={`${input} ${border('name')}`} value={f.name} onChange={set('name')} placeholder="Your full name" autoComplete="name" required />
          {err('name')}
        </div>
        <div>
          <label className={label} htmlFor="eq-business">Business / Company *</label>
          <input id="eq-business" className={`${input} ${border('business')}`} value={f.business} onChange={set('business')} placeholder="e.g. Smith Builders, Geelong" autoComplete="organization" required />
          {err('business')}
        </div>
        <div>
          <label className={label} htmlFor="eq-phone">Phone *</label>
          <input id="eq-phone" type="tel" className={`${input} ${border('phone')}`} value={f.phone} onChange={set('phone')} placeholder="04xx xxx xxx" autoComplete="tel" required />
          {err('phone')}
        </div>
        <div>
          <label className={label} htmlFor="eq-email">Email *</label>
          <input id="eq-email" type="email" className={`${input} ${border('email')}`} value={f.email} onChange={set('email')} placeholder="you@business.com.au" autoComplete="email" required />
          {err('email')}
        </div>
      </div>

      <div className="mt-6">
        <span className={label}>What do you need help with? *</span>
        <div className="flex flex-wrap gap-2.5">
          {SERVICE_OPTIONS.map((s) => {
            const on = services.includes(s);
            return (
              <button
                type="button"
                key={s}
                onClick={() => toggle(s)}
                aria-pressed={on}
                className={`px-4 py-2 rounded-full text-sm border transition-all ${
                  on ? 'bg-teal-400 text-navy-deep border-teal-400 font-semibold' : 'bg-white/5 text-white/75 border-white/15 hover:border-teal-400/60'
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
        <textarea
          className={`${input} ${border('message')} mt-4 min-h-[120px] resize-y`}
          value={f.message}
          onChange={set('message')}
          placeholder="Tell us about your business and goals (optional if you've picked a service above)"
        />
        {err('message')}
      </div>

      {/* Honeypot — hidden from humans */}
      <input type="text" name="website" value={f.website} onChange={set('website')} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      {status === 'error' && errorMsg && (
        <p className="mt-5 text-sm text-red-300 bg-red-500/10 border border-red-400/30 rounded-lg px-4 py-3">{errorMsg}</p>
      )}

      <button type="submit" disabled={status === 'sending'} className="btn-primary w-full mt-7 gap-2 disabled:opacity-60">
        {status === 'sending' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        {status === 'sending' ? 'Sending…' : 'Book my free strategy call'}
      </button>
      <p className="text-center text-xs text-white/40 mt-4">We respect your privacy. No spam, ever.</p>
    </form>
  );
}
