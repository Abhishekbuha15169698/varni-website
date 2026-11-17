import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, BarChart3, Calendar, MessageSquare, PhoneCall, Star, TrendingUp } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-24 pb-16 main-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern z-0" />
      <div className="absolute top-1/4 -left-1/4 w-[50vw] h-[50vw] bg-teal-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 -right-1/4 w-[60vw] h-[60vw] bg-blue-600/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="badge-primary mb-8">
              Predictable Revenue Systems for Australian Businesses
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight mb-6 leading-[1.05]">
              We Don't Sell Marketing.<br />
              We Build <span className="text-teal-400 italic">Growth Engines.</span>
            </h1>
            
            <p className="text-lg text-gray-300 opacity-60 mb-10 leading-[1.6] max-w-xl">
              Stop paying for empty clicks and vanity metrics. Varni Digital transforms scaling businesses with end-to-end client acquisition systems that predictably turn strangers into booked appointments and closed revenue.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12 items-start sm:items-center">
              <a href="/contact" className="btn-primary">
                Book Free Strategy Call
              </a>
              <button 
                onClick={(e) => { e.preventDefault(); document.getElementById('framework')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-secondary"
              >
                See Our Framework
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Floating Ecosystem */}
        <div className="relative h-[600px] hidden lg:block perspective-1000">
          <motion.div style={{ y: y1 }} className="absolute inset-0">
            {/* Revenue Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute top-[10%] left-0 glass-panel p-5 rounded-2xl w-64 z-20"
            >
              <div className="stat-label mb-1">MRR Growth</div>
              <div className="stat-val">+42.8%</div>
              <div className="text-[#4ADE80] text-xs font-bold mt-1">↑ 42% this quarter</div>
            </motion.div>

            {/* Lead Captured Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute top-[45%] right-0 glass-panel p-5 rounded-2xl w-48 z-30"
              style={{ y: y2 }}
            >
              <div className="stat-label mb-1">ROAS Performance</div>
              <div className="stat-val">6.8x</div>
              <div className="text-[#4ADE80] text-xs font-bold mt-1">Google & Meta Ads</div>
            </motion.div>

            {/* Appointment Booked */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute bottom-[5%] left-[15%] glass-panel p-5 rounded-2xl w-56 z-10"
            >
              <div className="stat-label mb-1">Leads Captured</div>
              <div className="stat-val">1,240</div>
              <div className="stat-label mt-2">Automated SMS: 98% Sent</div>
            </motion.div>

            {/* Connecting lines SVG background */}
            <svg className="absolute inset-0 w-full h-full text-white/5 pointer-events-none z-0" style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.1))' }}>
              <path d="M 150 200 Q 250 150 350 250 T 450 400" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_20s_linear_infinite]" />
              <path d="M 300 450 Q 200 400 150 300" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Trust Bar Bottom */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-navy/80 backdrop-blur-md py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <span className="text-sm font-medium text-white">Trusted by Australian Businesses</span>
            </div>
            
            <div className="flex gap-6 text-sm text-gray-500 font-medium overflow-x-auto whitespace-nowrap w-full md:w-auto hide-scrollbar pb-2 md:pb-0">
              <span className="hover:text-gray-300 transition-colors">Construction</span>
              <span className="text-white/20">•</span>
              <span className="hover:text-gray-300 transition-colors">Automotive</span>
              <span className="text-white/20">•</span>
              <span className="hover:text-gray-300 transition-colors">Cleaning</span>
              <span className="text-white/20">•</span>
              <span className="hover:text-gray-300 transition-colors">Healthcare</span>
              <span className="text-white/20">•</span>
              <span className="hover:text-gray-300 transition-colors">Trades</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
