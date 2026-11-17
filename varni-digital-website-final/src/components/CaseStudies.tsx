import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const cases = [
  {
    client: "SHAKTI AUTOMOTIVE",
    industry: "Auto Repair",
    before: { metric: "2", label: "enquiries/month" },
    after: { metric: "18", label: "enquiries/month" },
    result: { value: "800%", label: "Increase in Lead Volume" },
    color: "from-blue-500/20 to-teal-500/20",
    accent: "text-teal-400"
  },
  {
    client: "WONDROUS CONSTRUCTION",
    industry: "Home Building",
    before: { metric: "None", label: "online presence" },
    after: { metric: "Dominated", label: "local search rankings" },
    result: { value: "Authority", label: "Established in Region" },
    color: "from-orange-500/20 to-red-500/20",
    accent: "text-orange-400"
  },
  {
    client: "SCRUB N CLEAN",
    industry: "Commercial Cleaning",
    before: { metric: "$100", label: "CPA (Cost per Acquisition)" },
    after: { metric: "$28", label: "CPA via Meta + Automation" },
    result: { value: "72%", label: "Reduction in Acq. Cost" },
    color: "from-purple-500/20 to-pink-500/20",
    accent: "text-purple-400"
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-navy-deep relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">Real Results For <br className="hidden md:block"/>Australian Businesses</h2>
            <p className="text-gray-300 opacity-60 text-lg">We let the numbers speak. Actual client transformations from our proprietary growth engine.</p>
          </div>
          <Link to="/portfolio" className="btn-secondary whitespace-nowrap inline-flex items-center">
            View All Portfolio <ArrowUpRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-panel rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              
              <div className="p-8 relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="font-sans font-[800] text-xl text-white tracking-widest">{study.client}</h3>
                    <p className="text-[11px] text-gray-400 uppercase tracking-widest mt-1 font-[600]">{study.industry}</p>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-white/5 ${study.accent}`}>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-6 relative">
                  {/* Vertical rule connecting before/after */}
                  <div className="absolute left-2.5 top-5 bottom-5 w-px bg-white/10"></div>

                  {/* Before */}
                  <div className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center shrink-0 mt-1 z-10 relative">
                       <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Before</p>
                      <p className="text-white text-lg"><span className="font-bold text-red-100">{study.before.metric}</span> <span className="text-gray-400 text-sm">{study.before.label}</span></p>
                    </div>
                  </div>

                  {/* After */}
                  <div className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-teal-500/20 border border-teal-500/50 flex items-center justify-center shrink-0 mt-1 z-10 relative">
                       <div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div>
                    </div>
                    <div>
                      <p className="text-xs text-teal-400 uppercase tracking-widest font-semibold mb-1">After</p>
                      <p className="text-white text-lg"><span className="font-bold">{study.after.metric}</span> <span className="text-gray-400 text-sm">{study.after.label}</span></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Big Result Bottom Bar */}
              <div className="bg-white/5 border-t border-white/10 p-6 relative z-10 overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 blur-[40px] pointer-events-none rounded-full" />
                 <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-2 font-[600]">Net Result</p>
                 <p className="text-3xl font-sans font-[800] text-white flex items-baseline gap-2">
                   {study.result.value}
                   <span className="text-sm font-sans font-normal text-gray-300">{study.result.label}</span>
                 </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
