import { motion } from 'motion/react';
import { 
  Printer, Navigation, MapPin, ShieldCheck, ArrowRight, CheckCircle2, 
  FileText, Layers, CreditCard, Image as ImageIcon, PhoneCall, Calculator
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import printShowcaseImg from '../assets/images/print_distribution_showcase_1791246983219.jpg';

const printHighlights = [
  {
    title: "Flyers, Leaflets & Brochures",
    desc: "DL, A6, A5, A4 flyers and tri-fold brochures. Email requirements for quotation to varni.pd1@gmail.com.",
    icon: FileText,
    accent: "text-[#00F2FE]",
    border: "hover:border-[#00F2FE]/40",
    targetHash: "#commercial-printing"
  },
  {
    title: "GPS-Tracked Letterbox Delivery",
    desc: "$250 per 1,000 flyers for distribution—includes live GPS logger tracking, street route audit maps & supervisor checks.",
    icon: Navigation,
    accent: "text-[#00F5D4]",
    border: "hover:border-[#00F5D4]/40",
    targetHash: "#gps-distribution"
  },
  {
    title: "Business Cards & Signage",
    desc: "400gsm–450gsm velvet/Spot UV business cards, outdoor real estate corflutes, posters, and banners.",
    icon: CreditCard,
    accent: "text-[#2563EB]",
    border: "hover:border-[#2563EB]/40",
    targetHash: "#commercial-printing"
  },
  {
    title: "Victoria-Wide Coverage (3000–3999)",
    desc: "Targeted postcode drops across Greater Melbourne, Geelong, Ballarat, Bendigo, Gippsland & Shepparton.",
    icon: MapPin,
    accent: "text-[#F59E0B]",
    border: "hover:border-[#F59E0B]/40",
    targetHash: "#victoria-coverage"
  }
];

export default function PrintDistributionFrontSection() {
  const navigate = useNavigate();

  const handleRedirect = (hash: string = '') => {
    navigate(`/print-distribution${hash}`);
  };

  return (
    <section id="print-distribution-solutions" className="py-24 bg-navy-deep relative overflow-hidden border-t border-white/5">
      {/* Subtle Ambient Glow */}
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[400px] bg-gradient-to-tr from-[#00F5D4]/10 via-[#00F2FE]/5 to-transparent rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00F5D4]/30 bg-[#00F5D4]/10 text-[#00F5D4] text-xs font-bold uppercase tracking-widest mb-6">
            Varni Print & Distribution Co. · Commercial Print + GPS Letterbox Delivery
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F9FAFB] tracking-tight mb-6 leading-[1.1]">
            Commercial Printing & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#00F2FE]">GPS-Verified Letterbox Drops</span>
          </h2>
          <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed max-w-3xl mx-auto">
            Put your brand directly into the hands of local homeowners across Melbourne and Regional Victoria (Postcodes 3000–3999) with custom commercial printing and street-by-street GPS-tracked letterbox distribution.
          </p>
        </div>

        {/* Main Split Feature */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left: Details & Direct Redirect Triggers */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-6 md:p-8">
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00F5D4]">
                  Offline + Online Local Dominance
                </span>
                <span className="text-xs font-mono text-slate-400 bg-[#030712] px-3 py-1 rounded border border-slate-800">
                  VIC 3000–3999
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Every Flyer Printed Crisp. Every Street GPS-Verified.
              </h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                Every distribution walker carries a live GPS logger that records street-by-street pathing and timestamps. Upon completion of your campaign, you receive a full GPS route audit map alongside supervisor spot-check reports.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Flyers (DL, A6, A5, A4)",
                  "Tri-Fold Brochures & Menus",
                  "450gsm Velvet Business Cards",
                  "Posters & Outdoor Corflutes",
                  "Live Walker GPS Route Audits",
                  "QR Code & Call Attribution"
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleRedirect('#commercial-printing')}
                    className="flex items-center gap-2.5 text-left text-sm text-[#E2E8F0] hover:text-[#00F5D4] transition-colors py-1 cursor-pointer"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00F5D4] shrink-0" />
                    <span className="truncate">{item}</span>
                  </button>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleRedirect('#quote-calculator')}
                  className="px-6 py-3.5 bg-[#00F5D4] hover:bg-[#00F5D4]/90 text-slate-950 font-bold rounded-lg text-sm transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shadow-[0_0_25px_rgba(0,245,212,0.25)]"
                >
                  <CreditCard className="w-4 h-4" /> Order Distribution ($250/1k · Square Checkout)
                </button>
                <button
                  onClick={() => handleRedirect('')}
                  className="px-6 py-3.5 bg-[#030712] hover:bg-slate-900 text-white border border-slate-700 font-semibold rounded-lg text-sm transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  Explore Print & Distribution <ArrowRight className="w-4 h-4 text-[#00F2FE]" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual Showcase Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => handleRedirect('')}
            className="lg:col-span-6 relative group cursor-pointer"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#0F172A] shadow-2xl aspect-[16/10]">
              <img 
                src={printShowcaseImg} 
                alt="Varni Print & Distribution Commercial Printing and GPS Delivery" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/30 to-transparent" />

              <div className="absolute top-4 left-4 bg-[#030712]/90 backdrop-blur-md border border-[#00F5D4]/40 px-3.5 py-2 rounded-lg flex items-center gap-2 shadow-lg">
                <Navigation className="w-4 h-4 text-[#00F5D4]" />
                <span className="text-xs font-bold text-[#F9FAFB]">100% GPS Route Audited</span>
              </div>

              <div className="absolute top-4 right-4 bg-[#030712]/90 backdrop-blur-md border border-[#00F2FE]/40 px-3.5 py-2 rounded-lg flex items-center gap-2 shadow-lg">
                <PhoneCall className="w-4 h-4 text-[#00F2FE]" />
                <span className="text-xs font-bold text-[#F9FAFB] tabular-nums">0410 054 901</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 bg-[#0F172A]/95 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <Printer className="w-6 h-6 text-[#00F5D4] shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-white">Design · Commercial Print · GPS Letterbox Drop</p>
                    <p className="text-xs text-[#94A3B8]">Metro Melbourne · Geelong · Ballarat · Bendigo · Regional VIC</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#00F5D4] flex items-center gap-1 group-hover:translate-x-1 transition-transform whitespace-nowrap">
                  View Full Solution <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Solution Cards (Each redirects to its dedicated section on /print-distribution) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {printHighlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => handleRedirect(item.targetHash)}
              className={`bg-[#0F172A] border border-slate-800 ${item.border} p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1`}
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#030712] border border-slate-800 flex items-center justify-center mb-5">
                  <item.icon className={`w-5 h-5 ${item.accent}`} />
                </div>
                <h4 className="text-lg font-bold text-[#F9FAFB] mb-2 group-hover:text-[#00F5D4] transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-[#00F5D4]">
                <span>Explore Solution</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
