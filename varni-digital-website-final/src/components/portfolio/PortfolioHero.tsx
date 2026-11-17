import { motion } from 'motion/react';
import { TrendingUp, Bell, Star, Calendar, MessageSquare } from 'lucide-react';

export default function PortfolioHero() {
  return (
    <section className="relative overflow-hidden bg-[#030712] py-20 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern z-0 opacity-30" />
      <div className="absolute top-1/4 -left-1/4 w-[50vw] h-[50vw] bg-teal-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 -right-1/4 w-[60vw] h-[60vw] bg-blue-600/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 font-sans">
                Proof Over Promises.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Real Growth Across Australian Industries.</span>
              </h1>
              
              <div className="space-y-6 text-gray-400 text-lg lg:text-xl font-light leading-relaxed">
                <p>
                  Every strategy, campaign, website, and automation system we build is designed around one objective:
                </p>
                <p className="font-medium text-white/90 text-2xl">
                  Generating measurable business growth.
                </p>
                <p>
                  No vanity metrics. No fluff. Just performance.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Animated Graphic Container */}
          <div className="relative h-[500px] w-full hidden lg:block">
            {/* Widget 1: Revenue */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[10%] left-[10%] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl flex items-center gap-4 w-64"
            >
              <div className="bg-emerald-500/20 p-3 rounded-xl border border-emerald-500/30">
                <TrendingUp className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Revenue</p>
                <p className="text-white font-bold text-xl">+42%</p>
              </div>
            </motion.div>

            {/* Widget 2: Lead Captured */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, 15, 0] }}
              transition={{ duration: 5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[40%] right-[5%] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl flex items-center gap-4 w-72"
            >
              <div className="bg-blue-500/20 p-3 rounded-xl border border-blue-500/30">
                <Bell className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-white font-bold mb-1">New Lead Captured</p>
                <p className="text-gray-400 text-sm">Target area: Melbourne</p>
              </div>
            </motion.div>

            {/* Widget 3: Google Review */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
              transition={{ duration: 4.5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[20%] left-[25%] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl flex items-center gap-4 w-64"
            >
              <div className="bg-yellow-500/20 p-3 rounded-xl border border-yellow-500/30 flex px-2">
                {[...Array(1)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
              </div>
              <div>
                <p className="text-white font-bold text-sm">New 5-Star Review</p>
                <p className="text-gray-400 text-xs">"Highly recommended..."</p>
              </div>
            </motion.div>

            {/* Widget 4: Appointment */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, 10, 0] }}
              transition={{ duration: 5.5, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[5%] right-[20%] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl flex items-center gap-4 w-72"
            >
              <div className="bg-purple-500/20 p-3 rounded-xl border border-purple-500/30">
                <Calendar className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Appointment Booked</p>
                <p className="text-gray-400 text-xs">Consultation locked</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
