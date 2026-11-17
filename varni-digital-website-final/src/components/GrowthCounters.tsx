import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const counters = [
  { value: 2.4, prefix: '$', suffix: 'M+', label: 'Revenue Generated', decimal: true },
  { value: 15000, prefix: '', suffix: '+', label: 'Leads Captured', duration: 2.5 },
  { value: 320, prefix: '', suffix: '+', label: 'Campaigns Launched', duration: 2 },
  { value: 97, prefix: '', suffix: '%', label: 'Client Retention', duration: 1.5 },
];

function Counter({ target, prefix, suffix, label, decimal, duration = 2 }: any) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Easing function for smoother counter
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(target * easeOutQuart);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isInView, target, duration]);

  const displayValue = decimal ? count.toFixed(1) : Math.floor(count).toLocaleString();

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 text-center">
      <div className="text-4xl md:text-5xl lg:text-5xl font-[800] text-teal-400 mb-2 truncate">
        {prefix}{displayValue}{suffix}
      </div>
      <div className="stat-label">
        {label}
      </div>
    </div>
  );
}

export default function GrowthCounters() {
  return (
    <section className="relative py-16 border-t border-white/5 bg-black/40 backdrop-blur-sm z-10">
      {/* Animated graph line bg */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg preserveAspectRatio="none" viewBox="0 0 1200 120" className="w-full h-full">
          <motion.path 
            d="M0,120 L100,80 L250,90 L400,40 L600,60 L800,20 L1000,50 L1200,10" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className="text-teal-500"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {counters.map((counter, idx) => (
            <Counter 
              key={idx}
              target={counter.value}
              prefix={counter.prefix}
              suffix={counter.suffix}
              label={counter.label}
              decimal={counter.decimal}
              duration={counter.duration}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
