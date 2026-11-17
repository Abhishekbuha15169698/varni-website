import { motion } from 'motion/react';
import { Target, MonitorSmartphone, Share2, Search, ArrowRight, CheckCircle2, Instagram, Printer } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import googleAdsImage from '../assets/images/google_ads_intent_campaigns_1781059135949.png';
import webDesignImage from '../assets/images/web_design_showcase_1781059898651.png';
import seoImage from '../assets/images/seo_content_showcase_1781061312719.png';
import printShowcaseImg from '../assets/images/print_distribution_showcase_1791246983219.jpg';

const services = [
  {
    title: "Website Creation & Management",
    desc: "We don't just design websites. We build digital infrastructure—websites, funnels, CRM, automation, and ongoing maintenance built to convert and scale.",
    highlights: ["98/100 PageSpeed & Mobile-First", "CRM-Connected Lead Forms & Booking", "Custom Web, Shopify, WordPress & API"],
    icon: MonitorSmartphone,
    ctaLabel: "Explore Website Infrastructure",
    link: "/website",
    isRoute: true,
    graphic: (
      <div className="w-full h-full rounded-xl overflow-hidden shadow-lg border border-white/5 bg-[#030712]">
        <img src={webDesignImage} alt="Website Creation & Management" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>
    )
  },
  {
    title: "Social Media Marketing",
    desc: "Strategic content creation, reels, community management, and organic brand positioning that builds local authority and turns followers into enquiries.",
    highlights: ["Content Strategy & Reels Production", "Full Multi-Platform Management", "Organic Lead Generation System"],
    icon: Instagram,
    ctaLabel: "Explore Social Media System",
    link: "/social-media",
    isRoute: true,
    graphic: (
      <div className="w-full h-full rounded-xl overflow-hidden shadow-lg border border-white/5 bg-[#030712]">
        <img src="/funnel-activation.png.png" alt="Social Media Marketing" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>
    )
  },
  {
    title: "Print & Letterbox Distribution",
    desc: "Victoria-wide custom commercial printing (flyers, brochures, business cards, posters) paired with GPS-tracked letterbox delivery across postcodes 3000–3999.",
    highlights: ["Distribution Only: $250 per 1,000 Flyers", "Print Quote: Email varni.pd1@gmail.com", "100% GPS Logger Route Audit Maps"],
    icon: Printer,
    ctaLabel: "Explore Print & Distribution",
    link: "/print-distribution",
    isRoute: true,
    graphic: (
      <div className="w-full h-full rounded-xl overflow-hidden shadow-lg border border-white/5 bg-[#030712]">
        <img src={printShowcaseImg} alt="Print & Letterbox Distribution Victoria" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>
    )
  },
  {
    title: "Google Ads",
    desc: "Intent-based search campaigns that capture high-converting local traffic at the exact moment Australian buyers are searching for your service.",
    highlights: ["High-Intent Local Search Capture", "Conversion & Call Tracking", "Live $AUD ROI Attribution"],
    icon: Target,
    ctaLabel: "See Funnel Architecture",
    link: "#framework",
    isRoute: false,
    graphic: (
      <div className="w-full h-full rounded-xl overflow-hidden shadow-lg border border-white/5 bg-[#030712]">
        <img src={googleAdsImage} alt="Google Ads Targeting" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>
    )
  },
  {
    title: "Meta Ads System",
    desc: "Scroll-stopping creatives and retargeting funnels on Facebook & Instagram engineered to generate predictable local demand and booked quotes.",
    highlights: ["Scroll-Stopping Ad Creatives", "90-Second SMS Lead Follow-Up", "Retargeting & Pipeline Automation"],
    icon: Share2,
    ctaLabel: "Explore Growth Engine",
    link: "#growth-engine",
    isRoute: false,
    graphic: (
      <div className="w-full h-full rounded-xl overflow-hidden shadow-lg border border-white/5 bg-[#030712]">
        <img src="/funnel-activation.png.png" alt="Meta Ads System Funnel" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>
    )
  },
  {
    title: "SEO & Content",
    desc: "Dominate local search rankings and establish long-term authority with technical SEO structure, local suburb pages, and high-ranking content.",
    highlights: ["Technical & Local SEO Setup", "Schema, Metadata & Speed", "Compounding Organic Traffic"],
    icon: Search,
    ctaLabel: "View SEO Website Structure",
    link: "/website#website-services",
    isRoute: true,
    graphic: (
      <div className="w-full h-full rounded-xl overflow-hidden shadow-lg border border-white/5 bg-[#030712]">
        <img src={seoImage} alt="SEO & Content Strategy" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>
    )
  }
];

export default function Services() {
  const navigate = useNavigate();

  const handleAction = (service: typeof services[0]) => {
    if (service.isRoute) {
      navigate(service.link);
    } else {
      const id = service.link.replace('#', '');
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Built Like SaaS. <br className="hidden sm:block"/>Delivered Like A Partner.</h2>
          <p className="text-xl text-gray-400">We don't just 'run ads' or 'build websites'. We deploy fully integrated systems architected for maximum ROI. Select any solution below to explore the full system.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => handleAction(service)}
              className="group glass-panel rounded-2xl border border-white/5 hover:border-teal-500/40 transition-all duration-300 overflow-hidden flex flex-col h-full bg-gradient-to-b from-white/[0.02] to-transparent hover:shadow-[0_0_30px_rgba(20,184,166,0.12)] relative cursor-pointer"
            >
              {/* Graphic Area */}
              <div className="h-48 md:h-52 p-6 flex items-center justify-center border-b border-white/5 relative bg-navy/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-full h-full relative z-10 transform group-hover:scale-[1.02] transition-transform duration-500 ease-out">
                  {service.graphic}
                </div>
              </div>

              {/* Text Area */}
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">{service.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {service.desc}
                </p>

                <ul className="space-y-2 mb-6 flex-1">
                  {service.highlights.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-teal-400 group-hover:text-teal-300 transition-colors">
                  <span>{service.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
