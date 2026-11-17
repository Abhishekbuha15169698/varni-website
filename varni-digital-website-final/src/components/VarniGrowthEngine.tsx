import { motion } from 'motion/react';
import { MousePointerClick, UserPlus, Cog, CalendarCheck, DollarSign, Star, HeartHandshake } from 'lucide-react';

const steps = [
  { icon: MousePointerClick, label: "Traffic", color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/30" },
  { icon: UserPlus, label: "Lead Capture", color: "text-indigo-400", bg: "bg-indigo-400/10", border: "border-indigo-400/30" },
  { icon: Cog, label: "Automation", color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/30" },
  { icon: CalendarCheck, label: "Booking", color: "text-fuchsia-400", bg: "bg-fuchsia-400/10", border: "border-fuchsia-400/30" },
  { icon: DollarSign, label: "Sales", color: "text-rose-400", bg: "bg-rose-400/10", border: "border-rose-400/30" },
  { icon: Star, label: "Reviews", color: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/30" },
  { icon: HeartHandshake, label: "Referrals", color: "text-teal-400", bg: "bg-teal-400/10", border: "border-teal-400/30" }
];

export default function VarniGrowthEngine() {
  return (
    <section id="growth-engine" className="py-32 bg-navy-deep relative overflow-hidden">
      <div className="mesh-grid absolute inset-0 z-0 opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-teal-500/10 via-teal-500/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="badge-primary mb-6">
            Proprietary Framework
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold mb-6">
            The Varni <span className="italic text-teal-400">Growth Engine</span>
          </h2>
          <p className="text-lg text-gray-300 opacity-60 font-sans">
            A self-sustaining, closed-loop system designed to capture attention, nurture intent, and continuously multiply your customer base.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto h-[600px] sm:h-[700px] flex items-center justify-center">
          {/* Central Orb */}
          <div className="absolute z-20 flex flex-col items-center justify-center">
            <motion.div 
              animate={{ 
                boxShadow: ['0 0 40px rgba(20,184,166,0.3)', '0 0 80px rgba(37,99,235,0.4)', '0 0 40px rgba(20,184,166,0.3)'] 
              }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-navy-light to-navy border-2 border-white/10 flex items-center justify-center z-10 backdrop-blur-xl"
            >
              <div className="text-center">
                <span className="block font-sans font-[800] text-3xl md:text-4xl text-white tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-400">VARNI</span>
                <span className="block text-[10px] md:text-xs tracking-[4px] text-teal-500 uppercase mt-2">Engine</span>
              </div>
            </motion.div>
          </div>

          {/* Connected Nodes placed in an ellipse */}
          {steps.map((step, i) => {
            const angle = (i / steps.length) * Math.PI * 2 - Math.PI / 2;
            // Ellipse dimensions
            const rx = typeof window !== 'undefined' && window.innerWidth < 640 ? 140 : 350;
            const ry = typeof window !== 'undefined' && window.innerWidth < 640 ? 250 : 250;
            
            const x = Math.cos(angle) * rx;
            const y = Math.sin(angle) * ry;

            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="absolute z-10"
                style={{
                  transform: `translate(${x}px, ${y}px)`
                }}
              >
                <div className={`glass-panel p-4 md:p-6 rounded-2xl flex flex-col items-center text-center w-[120px] md:w-[150px]
                  border-t ${step.border} hover:scale-105 transition-transform duration-300 cursor-default`}
                >
                  <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-3 ${step.bg} ${step.color}`}>
                    <step.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-white">{step.label}</span>
                </div>
              </motion.div>
            )
          })}

          {/* SVG Connecting Circle/Ellipse Lines with animated dots */}
          <div className="absolute inset-0 z-0">
            <svg viewBox="0 0 1000 800" className="w-full h-full pointer-events-none opacity-30 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              {/* Note: This is an approximation ellipse path depending on responsive state, 
                  for simplicity we draw a perfect responsive oval via viewBox scaling */}
              <ellipse 
                cx="500" cy="400" rx="400" ry="300" 
                fill="none" 
                stroke="url(#gradient-ring)" 
                strokeWidth="2"
                strokeDasharray="10 10"
                className="animate-[spin_60s_linear_infinite] transform-origin-center"
                style={{ transformOrigin: 'center' }}
              />
              
              <defs>
                <linearGradient id="gradient-ring" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Animated particles moving along orbit (Simulated with absolute positioning rotators) */}
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
               className="absolute inset-0 flex justify-center items-center"
            >
              <div className="w-[800px] h-[600px] rounded-[100%] absolute border border-transparent">
                 <div className="absolute top-0 left-1/2 w-4 h-4 rounded-full bg-teal-400 blur-[2px] shadow-[0_0_15px_#2dd4bf] -translate-x-1/2 -translate-y-1/2" />
              </div>
            </motion.div>
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ repeat: Infinity, duration: 15, ease: "linear", delay: 7.5 }}
               className="absolute inset-0 flex justify-center items-center"
            >
              <div className="w-[800px] h-[600px] rounded-[100%] absolute border border-transparent">
                 <div className="absolute top-0 left-1/2 w-4 h-4 rounded-full bg-purple-400 blur-[2px] shadow-[0_0_15px_#c084fc] -translate-x-1/2 -translate-y-1/2" />
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
