import { motion } from 'motion/react';
import { MousePointerClick, RefreshCw, Zap, Users } from 'lucide-react';

const PILLARS = [
  {
    icon: MousePointerClick,
    title: "Traffic",
    items: ["Google Ads", "SEO", "Social Media"]
  },
  {
    icon: RefreshCw,
    title: "Conversion",
    items: ["Websites", "Landing Pages", "Funnels"]
  },
  {
    icon: Zap,
    title: "Automation",
    items: ["CRM", "SMS / Email", "AI Follow-Up"]
  },
  {
    icon: Users,
    title: "Retention",
    items: ["Reviews", "Remarketing", "Customer Nurture"]
  }
];

export default function HowWeHelp() {
  return (
    <section className="bg-[#030712] py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl font-bold mb-6 font-sans">More Than Marketing.</h2>
          <p className="text-3xl text-gray-400 font-light">We Build <span className="text-white font-medium">Growth Infrastructure.</span></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PILLARS.map((pillar, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0B1329] p-8 rounded-3xl border border-white/5 hover:border-teal-500/30 transition-colors group"
            >
               <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-teal-500/10 transition-colors">
                  <pillar.icon className="w-6 h-6 text-teal-400" />
               </div>
               <h3 className="text-2xl font-bold mb-6 text-white">{pillar.title}</h3>
               <ul className="space-y-4">
                 {pillar.items.map((item, i) => (
                   <li key={i} className="text-gray-400 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                      {item}
                   </li>
                 ))}
               </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
