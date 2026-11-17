import { motion } from 'motion/react';

const metrics = [
  { value: "$3M+", label: "Pipeline Generated" },
  { value: "500+", label: "Leads Captured" },
  { value: "120+", label: "Campaigns Launched" },
  { value: "40+", label: "Businesses Supported" },
  { value: "97%", label: "Client Retention" }
];

export default function PerformanceCounter() {
  return (
    <section className="bg-[#030712] relative z-20 pb-20">
      <div className="container mx-auto px-6">
        <div className="relative">
          {/* Border Glow Container */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-teal-500/30 to-transparent rounded-3xl opacity-50 blur-sm" />
          
          <div className="relative bg-[#0B1329]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 divide-x divide-white/5">
              {metrics.map((metric, index) => (
                <div key={index} className="flex flex-col items-center justify-center text-center px-4 first:pl-0 last:pr-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400 mb-2 block">
                      {metric.value}
                    </span>
                    <span className="text-sm uppercase tracking-widest text-teal-400 font-medium">
                      {metric.label}
                    </span>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
