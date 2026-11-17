import { useState } from 'react';

export default function TerritoryLockCTA() {
  const [postcode, setPostcode] = useState('');
  const [industry, setIndustry] = useState('');
  const [status, setStatus] = useState<null | 'available' | 'limited' | 'unavailable'>(null);
  const [checking, setChecking] = useState(false);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postcode || !industry) return;
    
    setChecking(true);
    setStatus(null);

    // Simulate API call
    setTimeout(() => {
      setChecking(false);
      // Randomize result for demo purposes or stick to 'available' to encourage leads
      const random = Math.random();
      if (random > 0.7) setStatus('limited');
      else if (random > 0.9) setStatus('unavailable');
      else setStatus('available');
    }, 1500);
  };

  return (
    <section className="bg-[#030712] py-32 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-sans leading-tight">
            We Only Work With A Limited Number Of Businesses <br className="hidden md:block" />
            <span className="text-teal-400 italic">Per Industry In Each Market.</span>
          </h2>
          <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
            Once a territory is secured, we don't onboard direct competitors within the same suburb. Check your market availability below.
          </p>

          {/* Interactive Tool */}
          <div className="bg-[#0B1329]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
             
             <form onSubmit={handleCheck} className="flex flex-col md:flex-row gap-4 relative z-10">
                <input 
                  type="text" 
                  placeholder="Enter Postcode (e.g. 3000)" 
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/50 transition-colors"
                  required
                />
                <select 
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white hover:border-white/20 focus:outline-none focus:border-teal-500/50 transition-colors appearance-none"
                  required
                >
                   <option value="" disabled className="bg-[#0B1329]">Select Industry</option>
                   <option value="automotive" className="bg-[#0B1329]">Automotive</option>
                   <option value="construction" className="bg-[#0B1329]">Construction</option>
                   <option value="cleaning" className="bg-[#0B1329]">Cleaning</option>
                   <option value="trades" className="bg-[#0B1329]">Trades</option>
                   <option value="healthcare" className="bg-[#0B1329]">Healthcare</option>
                </select>
                <button 
                  type="submit" 
                  disabled={checking}
                  className="bg-teal-500 hover:bg-teal-400 text-navy font-bold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wider text-sm"
                >
                  {checking ? 'Checking...' : 'Check Availability'}
                </button>
             </form>

             {/* Result Area */}
             <div className="mt-8 relative z-10 min-h-[60px] flex items-center justify-center">
                {status && (
                   <div className={`px-6 py-3 rounded-full text-sm font-bold tracking-widest uppercase border ${
                     status === 'available' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' :
                     status === 'limited' ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400' :
                     'bg-red-500/10 border-red-500/30 text-red-400'
                   }`}>
                      {status === 'available' && "Market Available - Lock In Territory"}
                      {status === 'limited' && "Limited Availability - 1 Spot Remaining"}
                      {status === 'unavailable' && "Market Unavailable - Join Waitlist"}
                   </div>
                )}
             </div>

          </div>
        </div>
      </div>
    </section>
  );
}
