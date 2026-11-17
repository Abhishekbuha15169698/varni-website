import { motion } from 'motion/react';
import { XCircle, Activity, FilterX, MousePointerClick } from 'lucide-react';

export default function WhyAgenciesFail() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="badge-primary mb-6">The Industry Lie</div>
          <h3 className="text-4xl md:text-5xl font-semibold mb-6">Why Businesses Get Marketing Wrong</h3>
          <p className="text-lg text-gray-300 opacity-60">
            Agencies sell you "traffic" and "impressions". But traffic without a system is just a leaky bucket. Here is why most campaigns bleed money.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: The Broken Funnel Visual */}
          <div className="relative h-[500px] flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="absolute inset-0"
            >
              {/* Funnel Outline */}
              <svg className="w-full h-full opacity-20" viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 50 L350 50 L250 250 L250 450 L150 450 L150 250 Z" stroke="white" strokeWidth="4" strokeDasharray="8 8" />
              </svg>
              
              {/* Traffic Entering (Top) */}
              <div className="absolute top-[8%] left-1/2 -translate-x-1/2 flex gap-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div 
                    key={`traffic-${i}`}
                    animate={{ y: [0, 50], opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 2, delay: i * 0.4 }}
                    className="w-4 h-4 bg-teal-500 rounded-full shadow-[0_0_10px_#14b8a6]"
                  />
                ))}
              </div>

              {/* The Leak (Middle) */}
              <div className="absolute top-[45%] left-[20%] text-red-500 flex flex-col items-center">
                <FilterX className="w-8 h-8 mb-2" />
                <span className="text-xs font-bold uppercase tracking-wider bg-red-500/10 px-2 py-1 rounded">Leads Dropping</span>
              </div>
              
              <div className="absolute top-[60%] right-[20%] text-red-500 flex flex-col items-center">
                <Activity className="w-8 h-8 mb-2 opacity-50" />
                <span className="text-xs font-bold uppercase tracking-wider bg-red-500/10 px-2 py-1 rounded">No Follow-up</span>
              </div>

              {/* Leaking particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div 
                  key={`leak-${i}`}
                  animate={{ 
                    x: [(i%2===0?-50:50), (i%2===0?-150:150)], 
                    y: [200, 350], 
                    opacity: [1, 0] 
                  }}
                  transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.3 }}
                  className="absolute top-0 left-1/2 w-3 h-3 bg-red-500 rounded-full"
                  style={{ marginLeft: i%2===0 ? '-40px' : '40px' }}
                />
              ))}

              {/* Bottom Result */}
              <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 text-center">
                <div className="w-2h h-2h bg-gray-800 rounded-full border border-gray-700 flex items-center justify-center p-4">
                  <span className="opacity-50 text-sm">Minimal Sales</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: The Problems */}
          <div>
            <div className="space-y-6">
              {[
                { title: "Slow response times", desc: "Leads go cold in 5 minutes. Most businesses take 24 hours to reply." },
                { title: "No centralized system", desc: "Leads scattered across emails, spreadsheets, and messy notebooks." },
                { title: "No lead nurturing", desc: "If they don't buy immediately, they are ignored forever." },
                { title: "No conversion tracking", desc: "Spending $5,000 on ads but not knowing exactly which ad brought the sale." },
                { title: "Ghost reporting", desc: "Agencies sending automated PDF reports with vanity clicks, not revenue." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-panel p-5 rounded-xl flex gap-4 items-start border-red-500/10 hover:border-red-500/30 transition-colors"
                >
                  <div className="bg-teal-500/10 p-2 rounded-lg mt-1 border border-teal-500/20">
                    <XCircle className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-sans font-[600] text-lg text-white mb-1 tracking-wide">{item.title}</h4>
                    <p className="text-gray-300 opacity-60 text-sm leading-[1.6]">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Big Bottom Statement */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center glass-panel-heavy p-12 rounded-2xl border-teal-500/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-transparent" />
          <h3 className="text-3xl md:text-5xl font-semibold relative z-10 leading-[1.2]">
            "You don't need more leads.<br />
            <span className="text-teal-400 italic mt-2 block">You need a better system."</span>
          </h3>
        </motion.div>

      </div>
    </section>
  );
}
