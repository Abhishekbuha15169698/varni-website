import { motion } from 'motion/react';
import { Search, Construction, Rocket, TrendingUp } from 'lucide-react';

const processes = [
  {
    step: "01",
    title: "Discover",
    icon: Search,
    items: ["Deep-dive business audit", "Competitor analysis", "Growth strategy blueprint"]
  },
  {
    step: "02",
    title: "Build",
    icon: Construction,
    items: ["High-conversion website", "Funnel architecture", "System & automation setup"]
  },
  {
    step: "03",
    title: "Launch",
    icon: Rocket,
    items: ["Ad campaign deployment", "Tracking verification", "Multi-channel go-live"]
  },
  {
    step: "04",
    title: "Scale",
    icon: TrendingUp,
    items: ["A/B testing & optimization", "CPA reduction", "Continuous growth iteration"]
  }
];

export default function HowWeWork() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0a1120]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How We Work</h2>
          <p className="text-xl text-gray-400">A clear, predictable roadmap from audit to execution.</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Pathway Line (Desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[50px] right-[50px] h-1 bg-white/5 rounded-full overflow-hidden">
             <motion.div 
                initial={{ x: '-100%' }}
                whileInView={{ x: '100%' }}
                transition={{ duration: 3, ease: 'linear', repeat: Infinity }}
                className="w-1/2 h-full bg-gradient-to-r from-transparent via-teal-500 to-transparent"
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processes.map((process, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative"
              >
                {/* Connector Line for Mobile */}
                {idx !== processes.length - 1 && (
                  <div className="md:hidden absolute left-8 top-20 bottom-[-50px] w-px bg-white/10" />
                )}

                {/* Node */}
                <div className="flex md:flex-col items-start md:items-center gap-6 md:gap-0 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-navy border-2 border-teal-500/30 flex justify-center items-center shrink-0 shadow-[0_0_20px_rgba(20,184,166,0.15)] mb-0 md:mb-6 mt-2 md:mt-0 relative group">
                    <div className="absolute inset-0 bg-teal-500/20 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                    <process.icon className="w-7 h-7 text-teal-400 relative z-10" />
                  </div>
                  
                  <div className="flex-1 md:text-center glass-panel w-full p-6 rounded-2xl md:mt-4 hover:border-white/20 transition-colors">
                    <span className="text-xs font-bold text-teal-500 tracking-widest mb-2 block">PHASE {process.step}</span>
                    <h3 className="text-xl font-bold text-white mb-4">{process.title}</h3>
                    <ul className="space-y-3">
                      {process.items.map((item, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-start text-left">
                          <span className="text-teal-500 mr-2 mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
