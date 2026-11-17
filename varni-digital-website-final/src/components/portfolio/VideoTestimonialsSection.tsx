import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import shaktiImg from '../../assets/images/Shakti automotive image.png';
import wondrousImg from '../../assets/images/wondrous construction.png';
import scrubImg from '../../assets/images/scrub_n_clean_1781057739839.png';

const TESTIMONIALS = [
  {
    name: "Yashdeepsinh",
    business: "Shakti Automotive",
    quote: "Through strategic social media management and high-quality content creation, Varni Digital helped Shakti Automotive increase bookings by over 50% month-on-month—resulting in the hiring of two additional mechanics to meet growing demand.",
    image: shaktiImg,
    service: "Social media marketing with organic strategies"
  },
  {
    name: "Rajesh",
    business: "Wondrous Construction",
    quote: "They transformed our online presence into a consistent lead generation system. Through strategic social media management, website optimization, and organic lead generation, we're now attracting qualified enquiries regularly and building long-term growth without relying solely on paid advertising.",
    image: wondrousImg,
    service: "Social Media Management, Website Management & Organic Lead Generation"
  },
  {
    name: "Hitanshu",
    business: "Scrub N Clean",
    quote: "By managing Scrub N Clean's social media presence and executing local on-site marketing strategies, we created multiple customer touchpoints that increased trust, improved brand recall, and generated high-quality leads without relying heavily on paid advertising.",
    image: scrubImg,
    service: "Organic Growth Through Digital & Local Marketing."
  }
];

function ImageCarousel({ images, alt }: { images: string[], alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <>
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          className={`absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 ${
            index === currentIndex ? 'opacity-60 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}
    </>
  );
}

export default function VideoTestimonialsSection() {
  return (
    <section className="bg-[#030712] py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Real Australian Business Owners. <br/>Real Results.</h2>
          <p className="text-gray-400 text-lg">Don't just take our word for it. Hear from partners who have scaled their revenue with our growth infrastructure.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0B1329] border border-white/5 rounded-2xl overflow-hidden group cursor-pointer hover:border-white/20 transition-colors"
            >
              {/* Video Thumbnail Area */}
              <div className="relative h-64 overflow-hidden">
                {testimonial.images ? (
                  <ImageCarousel images={testimonial.images} alt={testimonial.name} />
                ) : (
                  <img src={testimonial.image} alt={testimonial.name} referrerPolicy="no-referrer" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 z-10 relative" />
                )}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                


                <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2">
                   <div>
                     <p className="text-white font-bold text-lg">{testimonial.name}</p>
                     <p className="text-gray-300 text-sm font-medium">{testimonial.business}</p>
                   </div>
                   <div className="bg-black/50 backdrop-blur-md px-3 py-1.5 rounded text-[10px] sm:text-[11px] uppercase font-bold tracking-wider text-teal-400 inline-block w-fit border border-teal-400/30">
                     {testimonial.service}
                   </div>
                </div>
              </div>

              {/* Review Content */}
              <div className="p-6">
                <div className="flex mb-4 gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-teal-400 fill-teal-400" />)}
                </div>
                <p className="text-gray-400 text-sm italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
