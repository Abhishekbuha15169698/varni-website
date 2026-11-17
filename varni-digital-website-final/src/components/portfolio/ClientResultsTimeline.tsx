import { motion } from 'motion/react';
import { Search, MonitorSmartphone, Target, Activity, Maximize2 } from 'lucide-react';

const TIMELINE_STEPS = [
  { month: "Month 1", title: "Audit & Strategy", desc: "Deep dive into your market, competitors, and infrastructure.", icon: Search },
  { month: "Month 2", title: "Website & Tracking", desc: "Setting up high-converting pages and exact ROI tracking.", icon: MonitorSmartphone },
  { month: "Month 3", title: "Campaign Launch", desc: "Activating tailored traffic funnels designed for rapid growth.", icon: Target },
  { month: "Month 4", title: "Optimization", desc: "Refining targeting, reducing CPR, and qualifying leads.", icon: Activity },
  { month: "Month 5+", title: "Scale", desc: "Scaling ad spend profitably. Turning on predictable revenue.", icon: Maximize2 }
];

export default function ClientResultsTimeline() {
  return (
    <section className="bg-[#060B14] py-24 relative overflow-hidden">
       {/* Background Pattern */}
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

       <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <h2 className="text-4xl md:text-5xl font-bold mb-6">Growth Doesn't Happen Overnight.<br/><span className="text-teal-400 italic">It Happens Through Systems.</span></h2>
             <p className="text-gray-400 text-lg">We don't promise overnight success. We promise a scalable, mathematically proven system that builds momentum every single month.</p>
          </div>

          {/* Timeline */}
          <div className="relative">
             <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />

             <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {TIMELINE_STEPS.map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative flex flex-col items-center text-center group"
                  >
                     <div className="w-16 h-16 rounded-2xl bg-[#0B1329] border border-white/10 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:border-teal-500/30 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.2)] z-10">
                        <step.icon className="w-6 h-6" />
                     </div>
                     <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                     <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold mb-3">{step.month}</span>
                     <p className="text-sm text-gray-400 px-4">{step.desc}</p>
                  </motion.div>
                ))}
             </div>
          </div>
       </div>
    </section>
  );
}
