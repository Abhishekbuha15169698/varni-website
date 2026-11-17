import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "How long until we see tangible results?",
    a: "While advertising traffic is immediate, true scalable results from the Varni Growth Engine typically build over 30-60 days. This allows time for our algorithms to optimize, lead warming automations to trigger, and sales cycles to close."
  },
  {
    q: "Do I need a new website?",
    a: "Not necessarily, but we evaluate your current site's conversion rate. If your current website is a 'leaky bucket', sending paid traffic to it will waste money. We often build dedicated, high-speed landing pages for campaigns even if we don't rebuild your main site."
  },
  {
    q: "Do you work Australia-wide?",
    a: "Yes. While we are headquartered in Melbourne, Victoria, we successfully manage and scale campaigns for clients across all Australian states and territories."
  },
  {
    q: "Do you lock clients into long-term contracts?",
    a: "No. We believe in earning your business every single month through performance. While we recommend a 3-month commitment to see the full flywheel effect, we operate on flexible terms."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-navy-deep relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-300 opacity-60">Everything you need to know about working with Varni Digital.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`glass-panel border rounded-xl overflow-hidden transition-all duration-300 ${openIdx === idx ? 'border-teal-500/30 bg-white/5' : 'border-white/5 hover:border-white/10'}`}
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-sans font-[600] text-white pr-8">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-teal-500 transition-transform duration-300 shrink-0 ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
