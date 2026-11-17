import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Printer, MapPin, Navigation, CheckCircle2, ArrowRight, ShieldCheck, 
  FileText, Layers, CreditCard, Image as ImageIcon, PhoneCall, Mail, 
  AlertTriangle, BarChart3, QrCode, Truck, Compass, HelpCircle, ExternalLink, Lock
} from 'lucide-react';
import printShowcaseImg from '../assets/images/print_distribution_showcase_1791246983219.jpg';

// Replace with your live Square Checkout link (e.g. https://square.link/u/...) once your Square account is set up
export const SQUARE_PAYMENT_URL = import.meta.env.VITE_SQUARE_PAYMENT_URL || 'https://squareup.com/au/en';

const printProducts = [
  {
    title: "Flyers & Leaflets",
    specs: "DL · A6 · A5 · A4 | 150gsm – 350gsm",
    desc: "High-impact promotional flyers printed on vibrant gloss, silk matte, or uncoated stocks—engineered for letterbox drops and local handouts.",
    features: ["Full-colour double-sided CMYK print", "High-bulk 150gsm, 170gsm & 250gsm options", "Built for high-volume letterbox campaigns"],
    icon: FileText,
    accent: "text-[#00F2FE]",
    border: "hover:border-[#00F2FE]/50"
  },
  {
    title: "Brochures & Menus",
    specs: "Bi-Fold · Tri-Fold · Z-Fold · Booklets",
    desc: "Crisp machine-creased folded brochures, takeaway menus, and corporate capability booklets that showcase your services in detail.",
    features: ["Precision score & fold finishing", "Saddle-stitched multi-page booklets", "Ideal for takeaway menus & company profiles"],
    icon: Layers,
    accent: "text-[#00F5D4]",
    border: "hover:border-[#00F5D4]/50"
  },
  {
    title: "Business Cards & Stationery",
    specs: "400gsm – 450gsm | Velvet · Spot UV · Foil",
    desc: "Executive heavy-stock business cards, letterheads, and presentation folders that leave a lasting physical impression at every quote or inspection.",
    features: ["Soft-touch matte velvet lamination", "Raised Spot UV & metallic foil finishes", " Die-cut shapes & custom corporate packs"],
    icon: CreditCard,
    accent: "text-[#2563EB]",
    border: "hover:border-[#2563EB]/50"
  },
  {
    title: "Posters, Corflutes & Signage",
    specs: "A3 · A2 · A1 · A0 | 5mm Weatherproof Corflute",
    desc: "Large-format retail posters, outdoor construction site boards, real estate corflutes, and pull-up event banners built for Australian conditions.",
    features: ["UV-resistant outdoor corflute signage", "Eyelets, A-frames & pull-up banner stands", "High-visibility trade & real estate boards"],
    icon: ImageIcon,
    accent: "text-[#F59E0B]",
    border: "hover:border-[#F59E0B]/50"
  }
];

const coverageRegions = [
  {
    region: "Melbourne Western Suburbs",
    postcodes: "3011 – 3030",
    suburbs: "Tarneit, Truganina, Werribee, Point Cook, Hoppers Crossing, Melton, Caroline Springs, Footscray",
    status: "Daily GPS Drops Active"
  },
  {
    region: "Melbourne Northern Suburbs",
    postcodes: "3040 – 3099",
    suburbs: "Craigieburn, Epping, Wollert, Kalkallo, Essendon, Reservoir,Preston, Coburg, Sunbury",
    status: "Daily GPS Drops Active"
  },
  {
    region: "Melbourne Eastern & South-East",
    postcodes: "3101 – 3199 · 3800 – 3977",
    suburbs: "Cranbourne, Berwick, Clyde, Pakenham, Dandenong, Glen Waverley, Box Hill, Frankston, Doncaster",
    status: "Daily GPS Drops Active"
  },
  {
    region: "Geelong & Bellarine Peninsula",
    postcodes: "3211 – 3228",
    suburbs: "Geelong CBD, Armstrong Creek, Lara, Torquay, Ocean Grove, Belmont, Highton, Corio",
    status: "Weekly Scheduled Runs"
  },
  {
    region: "Ballarat, Bendigo & Macedon",
    postcodes: "3350 – 3556",
    suburbs: "Ballarat Central, Wendouree, Lucas, Bendigo, Kangaroo Flat, Strathfieldsaye, Gisborne",
    status: "Weekly Scheduled Runs"
  },
  {
    region: "Mornington Peninsula, Gippsland & Shepparton",
    postcodes: "3630 – 3999",
    suburbs: "Mornington, Rosebud, Dromana, Warragul, Traralgon, Sale, Shepparton, Kialla",
    status: "Regional Victoria Network"
  }
];

const faqs = [
  {
    q: "How do you verify that our flyers are actually delivered to letterboxes?",
    a: "Every distribution walker carries a live GPS logger that records street-by-street pathing and timestamps. Upon completion of your campaign, you receive a GPS route audit map alongside supervisor spot-check reports."
  },
  {
    q: "Do you deliver across both Metro Melbourne and Regional Victoria?",
    a: "Yes. Varni Print & Distribution Co. covers all Victorian postcodes (3000–3999), including Greater Melbourne, Geelong, Ballarat, Bendigo, Mornington Peninsula, Gippsland, and Shepparton."
  },
  {
    q: "Can you handle graphic design, printing, and letterbox delivery as one package?",
    a: "Absolutely. We provide complete end-to-end campaigns: conversion-focused flyer design (with QR codes and call tracking), commercial press printing, demographic postcode mapping, and GPS-tracked letterbox delivery."
  },
  {
    q: "What is the pricing for letterbox distribution and how do I get a print quote?",
    a: "GPS-tracked letterbox distribution is $250 per 1,000 flyers (including live GPS walker tracking and route audit report). For commercial printing or bundled print quotes, email your print requirements (size, GSM stock, quantity, and finishing) to varni.pd1@gmail.com for a custom quotation."
  }
];

export default function PrintDistribution() {
  const [quantity, setQuantity] = useState(1000);
  const [productType, setProductType] = useState<'dl' | 'a5' | 'brochure'>('a5');
  const [serviceMode, setServiceMode] = useState<'drop' | 'print' | 'bundle'>('drop');
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [SuburbInput, setSuburbInput] = useState('');
  const [PhoneInput, setPhoneInput] = useState('');
  const [NameInput, setNameInput] = useState('');

  // Distribution rate: $250 per 1,000 flyers
  const distributionRatePer1000 = 250;
  const distributionTotal = (quantity / 1000) * distributionRatePer1000;

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!NameInput.trim() || !PhoneInput.trim()) return;
    setQuoteSubmitted(true);
  };

  return (
    <div className="bg-[#030712] text-[#F9FAFB] min-h-screen font-sans selection:bg-[#00F2FE]/30 selection:text-white">
      
      {/* Sticky Section Jump Bar */}
      <div className="sticky top-[72px] z-30 bg-[#030712]/90 backdrop-blur-xl border-b border-slate-800/80 py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto hide-scrollbar">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00F2FE] whitespace-nowrap shrink-0">
            Varni Print & Distribution Co.:
          </span>
          <div className="flex items-center gap-6 text-xs font-medium text-[#94A3B8]">
            <a href="#commercial-printing" className="hover:text-white transition-colors whitespace-nowrap">Commercial Printing</a>
            <a href="#gps-distribution" className="hover:text-white transition-colors whitespace-nowrap">GPS Letterbox Delivery</a>
            <a href="#print-workflow" className="hover:text-white transition-colors whitespace-nowrap">5-Step System</a>
            <a href="#victoria-coverage" className="hover:text-white transition-colors whitespace-nowrap">Victoria Coverage (3000–3999)</a>
            <a href="#quote-calculator" className="hover:text-white transition-colors whitespace-nowrap">Instant Estimator</a>
            <a href="#print-faq" className="hover:text-white transition-colors whitespace-nowrap">FAQ</a>
          </div>
        </div>
      </div>

      {/* 1. Hero Section */}
      <section id="print-hero" className="relative pt-20 pb-24 md:pt-28 md:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1e293b_0%,#030712_70%)] opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00F2FE]/30 bg-[#00F2FE]/10 text-[#00F2FE] font-bold text-xs uppercase tracking-widest mb-6"
          >
            Commercial Printing + GPS-Tracked Letterbox Delivery Victoria
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-5xl leading-[1.08]"
          >
            Dominate Local Streets With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] to-[#00F5D4]">Precision Print & GPS Distribution</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-[#94A3B8] text-lg md:text-xl max-w-3xl mb-6 leading-relaxed"
          >
            Victoria-wide custom commercial printing (flyers, brochures, business cards, posters) and GPS-verified letterbox distribution across Greater Melbourne and Regional Victoria (Postcodes 3000–3999).
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base font-medium text-[#00F5D4] max-w-2xl mb-10 bg-[#0F172A] border border-[#00F5D4]/20 px-5 py-3 rounded-xl"
          >
            Every walker carries a live GPS logger. You receive full street-by-street route audit maps and supervisor spot-check reports on every drop.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
          >
            <a 
              href="#quote-calculator" 
              className="px-8 py-4 bg-[#00F2FE] hover:bg-[#00F2FE]/90 text-slate-950 font-bold rounded-lg text-center transition-all flex items-center justify-center gap-2 group whitespace-nowrap shadow-[0_0_30px_rgba(0,242,254,0.3)]"
            >
              Calculate Print & Drop Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="tel:+61410054901" 
              className="px-8 py-4 bg-[#0F172A] hover:bg-[#1E293B] border border-slate-700 text-white font-bold rounded-lg text-center transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <PhoneCall className="w-4 h-4 text-[#00F5D4]" /> Call 0410 054 901
            </a>
          </motion.div>

          {/* Hero Visual Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-16 w-full max-w-5xl relative"
          >
            <div className="aspect-[16/9] bg-[#0F172A] rounded-2xl border border-slate-700/80 shadow-2xl overflow-hidden relative">
              <img 
                src={printShowcaseImg} 
                alt="Varni Print & Distribution Commercial Printing and GPS Route Map" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/25 to-transparent" />

              {/* Live GPS Audit Overlay Card */}
              <div className="hidden md:flex flex-col justify-between w-72 bg-[#030712]/95 backdrop-blur-md border border-[#00F5D4]/40 rounded-xl p-4 absolute bottom-6 left-6 shadow-2xl text-left">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                  <span className="text-[11px] font-bold text-[#00F5D4] uppercase tracking-wider flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5" /> GPS Route Audit Verified
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">Postcode 3029</span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Households Delivered</span>
                    <span className="font-bold text-white font-mono tabular-nums">14,820 / 15,000</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#00F2FE] to-[#00F5D4] w-[98%] h-full rounded-full" />
                  </div>
                  <div className="text-[11px] text-slate-400 pt-1">
                    Supervisor Spot-Check: <span className="text-[#00F5D4] font-semibold">Passed 100%</span>
                  </div>
                </div>
              </div>

              {/* Print Quality Spec Card */}
              <div className="hidden sm:flex flex-col justify-between w-64 bg-[#030712]/95 backdrop-blur-md border border-[#00F2FE]/40 rounded-xl p-4 absolute bottom-6 right-6 shadow-2xl text-left">
                <div className="text-[11px] font-bold text-[#00F2FE] uppercase tracking-wider mb-1">
                  Commercial Offset & Digital Press
                </div>
                <div className="text-xs font-bold text-white mb-1">
                  150gsm – 450gsm Artboard Stock
                </div>
                <div className="text-[11px] text-slate-400">
                  QR Code & Call-Tracking Ready for Digital Funnel Attribution
                </div>
              </div>
            </div>

            {/* 6 Key Trust Badges Below Hero Visual */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6">
              {[
                { label: "100% GPS Logger Tracked", icon: Navigation, color: "text-[#00F5D4]" },
                { label: "Postcodes 3000–3999", icon: MapPin, color: "text-[#00F2FE]" },
                { label: "High-GSM Commercial Stock", icon: Printer, color: "text-[#2563EB]" },
                { label: "Supervisor Spot-Checked", icon: ShieldCheck, color: "text-[#00F5D4]" },
                { label: "QR & Call Tracking Ready", icon: QrCode, color: "text-[#00F2FE]" },
                { label: "Fast Victoria Turnaround", icon: Truck, color: "text-[#F59E0B]" }
              ].map((badge, i) => (
                <div key={i} className="bg-[#0F172A] border border-slate-800 px-3.5 py-3 rounded-xl flex items-center gap-2.5 text-left">
                  <badge.icon className={`w-4 h-4 ${badge.color} shrink-0`} />
                  <span className="font-bold text-xs text-[#F9FAFB] leading-tight">{badge.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Commercial Printing Section */}
      <section id="commercial-printing" className="py-24 bg-[#0F172A] border-y border-slate-800/70">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-[#00F2FE] mb-3">
              Custom Commercial Printing
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Premium Print Collateral Built to <span className="text-[#00F2FE]">Command Attention</span>
            </h2>
            <p className="text-[#94A3B8] text-lg">
              Physical marketing cuts through digital noise. When a homeowner pulls a heavy, vibrant card or flyer from their letterbox, it stays on the kitchen bench.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {printProducts.map((prod, idx) => (
              <div 
                key={idx} 
                className={`bg-[#030712] border border-slate-800 ${prod.border} p-8 rounded-2xl transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#0F172A] border border-slate-800 flex items-center justify-center">
                      <prod.icon className={`w-6 h-6 ${prod.accent}`} />
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-[#0F172A] px-3 py-1 rounded border border-slate-800">
                      {prod.specs}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{prod.title}</h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">{prod.desc}</p>
                  <ul className="space-y-2.5 mb-6">
                    {prod.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs text-[#E2E8F0]">
                        <CheckCircle2 className="w-4 h-4 text-[#00F5D4] shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-xs text-slate-400">
                    Print Quote: Email requirements to <a href="mailto:varni.pd1@gmail.com?subject=Print%20Quotation%20Request" className="text-[#00F2FE] font-semibold hover:underline">varni.pd1@gmail.com</a>
                  </span>
                  <a href={`mailto:varni.pd1@gmail.com?subject=${encodeURIComponent(prod.title + ' Quotation Request')}`} className="text-xs font-bold text-[#00F2FE] hover:underline flex items-center gap-1 whitespace-nowrap">
                    Email for Print Quote <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. GPS-Tracked Letterbox Distribution Section */}
      <section id="gps-distribution" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="text-xs font-bold uppercase tracking-widest text-[#00F5D4] mb-3">
              Zero-Blind-Spot Accountability
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              GPS-Tracked Letterbox Delivery <span className="text-[#00F5D4]">You Can Verify</span>
            </h2>
            <p className="text-[#94A3B8] text-lg mb-8 leading-relaxed">
              Most letterbox companies hand bundles to unmonitored walkers with zero proof of delivery. At Varni Print & Distribution Co., every distribution walker carries a live GPS logger recording street-by-street pathing and timestamps.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Live GPS Street-by-Street Pathing",
                  desc: "Every street walked is logged via satellite timestamp and exported into your post-campaign route map."
                },
                {
                  title: "Supervisor Field Spot-Checks",
                  desc: "Area supervisors physically inspect active distribution zones to verify proper letterbox placement."
                },
                {
                  title: "Demographic & Suburb Precision",
                  desc: "Target specific Victorian postcodes, high-growth estates, or established homeowner catchments."
                },
                {
                  title: "Offline-to-Online Funnel Integration",
                  desc: "We embed trackable QR codes, dedicated landing pages, and SMS/call tracking so you can measure exact ROI."
                }
              ].map((item, i) => (
                <div key={i} className="bg-[#0F172A] border border-slate-800 p-4 rounded-xl flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-[#00F5D4] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Simulated GPS Audit Dashboard */}
          <div className="lg:col-span-6 bg-[#0F172A] border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00F5D4] block">
                  Sample Post-Campaign Audit Report
                </span>
                <h4 className="text-lg font-bold text-white mt-0.5">
                  Walker GPS Telemetry · Metro & Regional VIC
                </h4>
              </div>
              <span className="px-3 py-1 rounded bg-[#00F5D4]/10 border border-[#00F5D4]/30 text-[#00F5D4] text-xs font-bold">
                Verified Drop
              </span>
            </div>

            {/* Simulated Street Route Map Visualization */}
            <div className="bg-[#030712] border border-slate-800 rounded-xl p-5 mb-6 relative overflow-hidden">
              <div className="grid grid-cols-4 gap-3 opacity-20 pointer-events-none mb-2">
                {[...Array(12)].map((_, idx) => (
                  <div key={idx} className="h-10 border border-slate-600 rounded" />
                ))}
              </div>
              <svg viewBox="0 0 400 140" className="w-full h-36 relative z-10">
                <path
                  d="M 20 110 L 90 110 L 90 40 L 180 40 L 180 95 L 270 95 L 270 25 L 375 25"
                  fill="none"
                  stroke="#00F5D4"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="6 4"
                />
                <circle cx="20" cy="110" r="6" fill="#00F2FE" />
                <circle cx="90" cy="40" r="5" fill="#00F5D4" />
                <circle cx="180" cy="95" r="5" fill="#00F5D4" />
                <circle cx="270" cy="25" r="5" fill="#00F5D4" />
                <circle cx="375" cy="25" r="7" fill="#00F2FE" />
              </svg>
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800/80">
                <span>Start: 08:15 AM AEST</span>
                <span className="text-[#00F5D4]">GPS Logger #VP-104</span>
                <span>Completed: 03:40 PM AEST</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-[#030712] p-3.5 rounded-xl border border-slate-800">
                <div className="text-xs text-[#94A3B8]">Streets Covered</div>
                <div className="text-lg font-bold text-white font-mono tabular-nums mt-1">142 Streets</div>
              </div>
              <div className="bg-[#030712] p-3.5 rounded-xl border border-slate-800">
                <div className="text-xs text-[#94A3B8]">Delivery Accuracy</div>
                <div className="text-lg font-bold text-[#00F5D4] font-mono tabular-nums mt-1">99.4%</div>
              </div>
              <div className="bg-[#030712] p-3.5 rounded-xl border border-slate-800">
                <div className="text-xs text-[#94A3B8]">Audit Map</div>
                <div className="text-lg font-bold text-[#00F2FE] mt-1">Included</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 5-Step Print-to-Lead Workflow */}
      <section id="print-workflow" className="py-24 bg-[#0F172A] border-y border-slate-800/70">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-[#00F2FE] mb-3">
              End-to-End Execution
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              How Our <span className="text-[#00F2FE]">Print & Drop System Works</span>
            </h2>
            <p className="text-[#94A3B8] text-lg">
              From suburb selection and conversion design to high-speed offset printing and GPS-tracked letterbox delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { num: "01", title: "Suburb Targeting", desc: "We map out high-converting Victorian postcodes and household demographics for your offer." },
              { num: "02", title: "Conversion Design", desc: "Our designers craft bold print artwork with clear offers, QR codes, and call tracking." },
              { num: "03", title: "Commercial Print", desc: "High-speed offset and digital press production on crisp 150gsm–450gsm stocks." },
              { num: "04", title: "GPS Distribution", desc: "Supervised walkers deliver directly to residential letterboxes with live GPS loggers." },
              { num: "05", title: "Audit & Leads", desc: "You receive the full GPS route audit map while enquiries flow into your phone and website." }
            ].map((step, i) => (
              <div key={i} className="bg-[#030712] border border-slate-800 p-6 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-[#00F2FE] mb-3 tabular-nums">STEP {step.num}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">{step.desc}</p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-[#00F5D4] font-semibold">
                  <span>Verified Stage</span>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Victoria-Wide Coverage Matrix (Postcodes 3000–3999) */}
      <section id="victoria-coverage" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#00F5D4] mb-3">
            Postcodes 3000 – 3999 Covered
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Metro Melbourne & <span className="text-[#00F5D4]">Regional Victoria Coverage</span>
          </h2>
          <p className="text-[#94A3B8] text-lg">
            Whether you want to dominate a single local suburb around your workshop or roll out a 100,000-home drop across Victoria, our distribution network has you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coverageRegions.map((zone, idx) => (
            <div key={idx} className="bg-[#0F172A] border border-slate-800 hover:border-[#00F2FE]/40 p-6 rounded-2xl flex flex-col justify-between transition-all">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono font-bold text-[#00F2FE] bg-[#030712] px-3 py-1 rounded border border-slate-800 tabular-nums">
                    Postcodes: {zone.postcodes}
                  </span>
                  <Compass className="w-4 h-4 text-[#00F5D4]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{zone.region}</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                  <span className="text-slate-300 font-semibold">Key Hubs: </span>{zone.suburbs}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-[#00F5D4] font-semibold flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00F5D4]" /> {zone.status}
                </span>
                <a href="#quote-calculator" className="text-[#00F2FE] font-bold hover:underline">
                  Select Zone →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Interactive Print & Distribution Campaign Estimator & Quote Form */}
      <section id="quote-calculator" className="py-24 bg-[#0F172A] border-y border-slate-800/70">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-[#00F2FE] mb-3">
              Instant Campaign Estimator
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Plan Your <span className="text-[#00F2FE]">Print & Letterbox Campaign</span>
            </h2>
            <p className="text-[#94A3B8] text-lg">
              Configure your print format, household volume, and delivery mode below to estimate your campaign reach and request a tailored quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 bg-[#030712] border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl">
            {/* Left: Interactive Configurator */}
            <div className="lg:col-span-7 space-y-8">
              {/* Step 1: Service Mode */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  1. Select Campaign Type
                </label>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    { id: 'drop', label: 'GPS Distribution Only', sub: '$250 per 1,000 Flyers' },
                    { id: 'print', label: 'Commercial Print Quote', sub: 'Email varni.pd1@gmail.com' },
                    { id: 'bundle', label: 'Print + GPS Delivery', sub: '$250/1k Drop + Print Quote' }
                  ].map((mode) => (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => setServiceMode(mode.id as typeof serviceMode)}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                        serviceMode === mode.id
                          ? 'bg-[#00F2FE]/10 border-[#00F2FE] text-white'
                          : 'bg-[#0F172A] border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="text-xs font-bold text-white">{mode.label}</div>
                      <div className="text-[11px] text-[#00F2FE] mt-1">{mode.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Print Format */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  2. Select Material Format
                </label>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    { id: 'dl', label: 'DL Flyer (99 × 210mm)', sub: '150gsm Gloss / Matte' },
                    { id: 'a5', label: 'A5 Flyer (148 × 210mm)', sub: 'Most Popular Letterbox Size' },
                    { id: 'brochure', label: 'A4 Tri-Fold Brochure', sub: '6-Panel Folded Presentation' }
                  ].map((fmt) => (
                    <button
                      key={fmt.id}
                      type="button"
                      onClick={() => setProductType(fmt.id as typeof productType)}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                        productType === fmt.id
                          ? 'bg-[#00F5D4]/10 border-[#00F5D4] text-white'
                          : 'bg-[#0F172A] border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="text-xs font-bold text-white">{fmt.label}</div>
                      <div className="text-[11px] text-[#00F5D4] mt-1">{fmt.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Quantity Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    3. Household / Flyer Quantity ($250 per 1,000 Flyers Distribution)
                  </label>
                  <span className="text-xl font-bold text-[#00F2FE] font-mono tabular-nums">
                    {quantity.toLocaleString()} Flyers
                  </span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={100000}
                  step={1000}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  aria-label="Household or Print Quantity"
                  className="w-full accent-[#00F2FE] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1 tabular-nums">
                  <span>1,000 ($250)</span>
                  <span>10,000 ($2,500)</span>
                  <span>50,000 ($12,500)</span>
                  <span>100,000 ($25,000)</span>
                </div>
              </div>

              {/* Summary Metrics */}
              <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
                <div className="bg-[#0F172A] p-4 rounded-xl border border-slate-800">
                  <div className="text-xs text-[#94A3B8]">Distribution Rate</div>
                  <div className="text-lg font-bold text-white font-mono tabular-nums mt-1">
                    $250 / 1,000 Flyers
                  </div>
                </div>
                <div className="bg-[#0F172A] p-4 rounded-xl border border-slate-800">
                  <div className="text-xs text-[#94A3B8]">
                    {serviceMode === 'print' ? 'Print Quotation' : 'Distribution Total'}
                  </div>
                  <div className="text-lg font-bold text-[#00F5D4] font-mono tabular-nums mt-1">
                    {serviceMode === 'print' ? 'Custom Quote' : `$${distributionTotal.toLocaleString()} AUD`}
                  </div>
                </div>
                <div className="bg-[#0F172A] p-4 rounded-xl border border-slate-800">
                  <div className="text-xs text-[#94A3B8]">Print Quote Desk</div>
                  <a href="mailto:varni.pd1@gmail.com?subject=Print%20Quotation%20Requirements" className="text-sm font-bold text-[#00F2FE] font-mono mt-1.5 block hover:underline truncate">
                    varni.pd1@gmail.com
                  </a>
                </div>
              </div>

              {/* Dedicated Print Quote Email Callout */}
              <div className="bg-[#0F172A] border border-[#00F2FE]/30 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#00F2FE] mb-1">
                    Need a Commercial Print Quote?
                  </div>
                  <p className="text-xs text-[#E2E8F0] leading-relaxed">
                    Email your print requirements (item type, size, GSM stock, quantity, and artwork) for a custom quotation directly to <strong className="text-[#00F5D4]">varni.pd1@gmail.com</strong>.
                  </p>
                </div>
                <a
                  href={`mailto:varni.pd1@gmail.com?subject=${encodeURIComponent(`Print Quotation Request - ${quantity.toLocaleString()} Units`)}&body=${encodeURIComponent(`Hi Varni Print & Distribution Team,\n\nPlease provide a quotation for the following print requirements:\n- Format: ${productType.toUpperCase()}\n- Quantity: ${quantity.toLocaleString()}\n- Target Suburbs: ${SuburbInput || 'TBC'}\n\nThank you!`)}`}
                  className="px-4 py-2.5 bg-[#00F2FE] hover:bg-[#00F2FE]/90 text-slate-950 font-bold rounded-lg text-xs whitespace-nowrap shrink-0 flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" /> Email Print Requirements
                </a>
              </div>
            </div>

            {/* Right: Square Payment Gateway & Order Checkout */}
            <div className="lg:col-span-5 bg-[#0F172A] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              {quoteSubmitted ? (
                <div className="my-auto text-center py-6 space-y-5">
                  <div className="w-14 h-14 rounded-full bg-[#00F5D4]/20 border border-[#00F5D4] flex items-center justify-center mx-auto text-[#00F5D4]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Order Details Saved!</h4>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{NameInput}</span>. Complete your <span className="text-[#00F5D4] font-bold">${distributionTotal.toLocaleString()} AUD</span> payment for <span className="text-white font-semibold">{quantity.toLocaleString()} flyers</span> via our secure Square Payment Gateway below:
                  </p>

                  <a
                    href={SQUARE_PAYMENT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-5 bg-[#00F5D4] hover:bg-[#00F5D4]/90 text-slate-950 font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,245,212,0.3)]"
                  >
                    <Lock className="w-4 h-4" /> Proceed to Square Checkout (${distributionTotal.toLocaleString()} AUD) <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setQuoteSubmitted(false)}
                    className="px-6 py-2 bg-[#030712] border border-slate-700 rounded-lg text-xs font-bold text-[#00F2FE] cursor-pointer"
                  >
                    Edit Order Quantity or Suburbs
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#00F5D4] block">
                        Online Flyer Distribution Checkout
                      </span>
                      <h4 className="text-lg font-bold text-white">Order & Pay via Square</h4>
                    </div>
                    <div className="px-2.5 py-1 rounded bg-[#030712] border border-slate-700 text-[11px] font-bold text-[#00F2FE] flex items-center gap-1.5">
                      <Lock className="w-3 h-3 text-[#00F5D4]" /> Square Gateway
                    </div>
                  </div>

                  {/* Live Order Summary Box */}
                  <div className="bg-[#030712] border border-slate-800 rounded-xl p-4 space-y-2">
                    <div className="flex justify-between text-xs text-[#94A3B8]">
                      <span>Flyer Distribution Volume</span>
                      <span className="text-white font-mono font-semibold tabular-nums">{quantity.toLocaleString()} Flyers</span>
                    </div>
                    <div className="flex justify-between text-xs text-[#94A3B8]">
                      <span>Distribution Rate</span>
                      <span className="text-white font-mono tabular-nums">$250 / 1,000 Flyers</span>
                    </div>
                    <div className="flex justify-between text-xs text-[#94A3B8]">
                      <span>GPS Route Audit Report</span>
                      <span className="text-[#00F5D4] font-semibold">Included</span>
                    </div>
                    <div className="pt-2 border-t border-slate-800 flex justify-between items-baseline">
                      <span className="text-xs font-bold uppercase text-white">Total Distribution Order</span>
                      <span className="text-xl font-bold text-[#00F5D4] font-mono tabular-nums">
                        ${distributionTotal.toLocaleString()} AUD
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name / Business *</label>
                    <input
                      type="text"
                      required
                      value={NameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      placeholder="e.g. Rajesh / Sarah"
                      className="w-full bg-[#030712] border border-slate-700 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#00F2FE]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={PhoneInput}
                      onChange={(e) => setPhoneInput(e.target.value)}
                      placeholder="e.g. 0410 054 901"
                      className="w-full bg-[#030712] border border-slate-700 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#00F2FE]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Target Suburbs or Postcodes (Victoria)</label>
                    <input
                      type="text"
                      value={SuburbInput}
                      onChange={(e) => setSuburbInput(e.target.value)}
                      placeholder="e.g. Tarneit 3029, Point Cook 3030, Geelong"
                      className="w-full bg-[#030712] border border-slate-700 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#00F2FE]"
                    />
                  </div>

                  {/* Direct Square Payment Redirect Button */}
                  <div className="space-y-2.5 pt-1">
                    <a
                      href={SQUARE_PAYMENT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 bg-[#00F5D4] hover:bg-[#00F5D4]/90 text-slate-950 font-bold rounded-lg text-sm transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,245,212,0.25)]"
                    >
                      <CreditCard className="w-4 h-4" /> Pay ${distributionTotal.toLocaleString()} AUD via Square Checkout <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      type="submit"
                      className="w-full py-2.5 bg-[#030712] hover:bg-slate-900 text-[#00F2FE] border border-slate-700 font-semibold rounded-lg text-xs transition-all cursor-pointer"
                    >
                      Save Order Details & Request Invoice First
                    </button>
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex flex-col gap-1 text-[11px] text-[#94A3B8]">
                    <div className="flex items-center justify-between">
                      <span>Secure Square Payment</span>
                      <span className="text-slate-300">Visa · Mastercard · Amex · Apple Pay</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Print Quote Desk:</span>
                      <a href="mailto:varni.pd1@gmail.com" className="text-[#00F2FE] font-semibold hover:underline">varni.pd1@gmail.com</a>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section id="print-faq" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#00F5D4] mb-3">
            Verified Answers
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Print & Letterbox Distribution <span className="text-[#00F2FE]">FAQs</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="bg-[#0F172A] border border-slate-800 p-6 md:p-8 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[#00F2FE] shrink-0 mt-0.5" />
                <span>{item.q}</span>
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed pl-8">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Final CTA Section */}
      <section id="print-cta" className="py-28 px-6 relative overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#00F2FE15_0%,#030712_70%)] opacity-60 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10 bg-[#0F172A] border border-slate-800 p-10 md:p-16 rounded-3xl shadow-2xl">
          <div className="text-xs font-bold uppercase tracking-widest text-[#00F5D4] mb-3">
            Varni Print & Distribution Co. · Victoria, Australia
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
            Ready to Put Your Brand Directly Into <span className="text-[#00F2FE]">Local Letterboxes?</span>
          </h2>
          <p className="text-lg text-[#94A3B8] mb-10 max-w-2xl mx-auto leading-relaxed">
            Combine high-GSM commercial printing with GPS-verified street delivery and digital lead tracking across Melbourne and Regional Victoria.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00F2FE] hover:bg-[#00F2FE]/90 text-slate-950 font-bold rounded-lg text-base transition-transform hover:scale-105 shadow-[0_0_30px_rgba(0,242,254,0.3)]"
            >
              Book a Print & Distribution Campaign <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="https://www.google.com/search?sca_esv=7f9c4df3eb7148c2&rlz=1C1HKFL_en-GBAU1199AU1200&sxsrf=APpeQnvcmuuXKjs5OrG0PBfKZevZA-ZASg%3A1791190653154&q=Varni%20Print%20and%20Distribution%20Co&stick=H4sIAAAAAAAAAONgU1I1qDCxSLI0SEuzSEk0sbCwSEyzMqiwNLAwS7ZINbY0Tk1OTbawWMQqH5ZYlJepEFCUmVeikJiXouCSWVxSlJlUWpKZn6fgnA8AV15P1UsAAAA&mat=CdQMkVjF9LfK&ved=2ahUKEwiOqeyUwaKXAxWvn68BHY9xPTIQrMcEegQIFRAC" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#030712] hover:bg-slate-900 border border-slate-700 text-white font-bold rounded-lg text-base transition-colors"
            >
              View Google Profile <ExternalLink className="w-4 h-4 text-[#00F2FE]" />
            </a>
          </div>
          
          <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs md:text-sm text-[#E2E8F0] font-medium">
            <a href="tel:+61410054901" className="flex items-center gap-2 hover:text-[#00F2FE] transition-colors">
              <PhoneCall className="w-4 h-4 text-[#00F5D4]" /> 0410 054 901 (Print & Distribution)
            </a>
            <a href="mailto:varni.pd1@gmail.com" className="flex items-center gap-2 hover:text-[#00F2FE] transition-colors">
              <Mail className="w-4 h-4 text-[#00F2FE]" /> varni.pd1@gmail.com
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#00F5D4]" /> All Victorian Postcodes (3000–3999)
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
