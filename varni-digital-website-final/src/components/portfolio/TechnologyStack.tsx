import { motion } from 'motion/react';

const TECHNOLOGIES = [
  "Google Ads", "Meta", "Google Analytics", "Google Business Profile", "OpenAI"
];

export default function TechnologyStack() {
  return (
    <section className="bg-[#060B14] py-20 border-t border-b border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-sm uppercase tracking-[0.2em] text-gray-500 font-bold mb-12">
          Powered By Industry-Leading Platforms
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 max-w-5xl mx-auto">
          {TECHNOLOGIES.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="text-xl md:text-2xl font-bold font-sans tracking-tight text-white/20 hover:text-white transition-colors duration-300 cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
