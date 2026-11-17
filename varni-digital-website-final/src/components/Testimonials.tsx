import { motion } from 'motion/react';
import { Play, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Shakti Automotive",
    duration: "2:13",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&q=80&w=400&h=500",
    quote: "Our phones went from ringing twice a week to three times a day."
  },
  {
    name: "Wondrous Construction",
    duration: "1:45",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=500",
    quote: "Varni completely rebuilt our lead pipeline. Highly recommended."
  },
  {
    name: "Scrub N Clean",
    duration: "3:05",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500",
    quote: "The new automation system alone saved me 10 hours a week in follow-ups."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-navy relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
             <h2 className="text-4xl md:text-5xl font-bold mb-4">Don't Take Our Word For It</h2>
             <p className="text-xl text-gray-400">Hear directly from Australian business owners who scaled with the Varni Growth Engine.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img src={t.image} alt={t.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/90 pointer-events-none" />

              {/* Play Button - Center */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-teal-500/90 group-hover:border-teal-400 transition-all duration-300 group-hover:scale-110">
                  <Play className="w-6 h-6 text-white ml-1 fill-white" />
                </div>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{t.name}</h3>
                <p className="text-sm text-gray-300 font-medium line-clamp-2">"{t.quote}"</p>
                
                <div className="absolute top-6 right-6 px-2 py-1 rounded bg-black/50 backdrop-blur text-xs font-semibold text-white border border-white/10">
                  {t.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
