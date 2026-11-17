import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MonitorSmartphone, Zap, ShieldCheck, PenTool, Database, 
  BarChart3, Server, Globe, Search, RefreshCw,
  LayoutTemplate, CheckCircle2, AlertTriangle, ArrowRight,
  Monitor, Laptop, Tablet, Smartphone, PhoneCall, Calendar,
  MessageSquare, Star, MapPin, Activity, FileCheck, Tag
} from 'lucide-react';
import { Link } from 'react-router-dom';
import webDesignImage from '../assets/images/web_design_showcase_1781059898651.png';

export default function WebsiteCreation() {
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'laptop' | 'tablet' | 'mobile'>('desktop');
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="bg-[#030712] text-[#F9FAFB] min-h-screen font-sans selection:bg-[#00F2FE]/30 selection:text-white">
      
      {/* Quick Section Jump Bar */}
      <div className="sticky top-[72px] z-30 bg-[#030712]/90 backdrop-blur-xl border-b border-slate-800/80 py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto hide-scrollbar">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00F2FE] whitespace-nowrap shrink-0">
            Website Infrastructure:
          </span>
          <div className="flex items-center gap-6 text-xs font-medium text-[#94A3B8]">
            <a href="#problems" className="hover:text-white transition-colors whitespace-nowrap">Why Websites Fail</a>
            <a href="#infrastructure" className="hover:text-white transition-colors whitespace-nowrap">5-Part System</a>
            <a href="#tech-stack" className="hover:text-white transition-colors whitespace-nowrap">Tech Stack</a>
            <a href="#website-services" className="hover:text-white transition-colors whitespace-nowrap">Services</a>
            <a href="#responsive-preview" className="hover:text-white transition-colors whitespace-nowrap">Responsive Preview</a>
            <a href="#management-plans" className="hover:text-white transition-colors whitespace-nowrap">Management Plans</a>
            <a href="#conversion-features" className="hover:text-white transition-colors whitespace-nowrap">Conversion Features</a>
            <a href="#before-after" className="hover:text-white transition-colors whitespace-nowrap">Before / After</a>
          </div>
        </div>
      </div>

      {/* 1. Hero Section */}
      <section id="hero" className="relative pt-20 pb-24 md:pt-28 md:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1e293b_0%,#030712_70%)] opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00F2FE]/30 bg-[#00F2FE]/10 text-[#00F2FE] font-bold text-xs uppercase tracking-widest mb-6"
          >
            Websites + Funnels + CRM + Automation + Maintenance
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-5xl leading-[1.08]"
          >
            Websites Built to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] to-[#2563EB]">Convert, Scale, and Perform</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-[#94A3B8] text-lg md:text-xl max-w-3xl mb-6 leading-relaxed"
          >
            High-performance websites, landing pages, funnels, and digital systems built for Australian businesses that need more enquiries, stronger credibility, and measurable growth.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base font-medium text-[#00F5D4] max-w-2xl mb-10 bg-[#0F172A] border border-[#00F5D4]/20 px-5 py-3 rounded-xl"
          >
            We don't just design websites. We build digital infrastructure that brings leads, tracks performance, and supports long-term growth.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a 
              href="/contact" 
              className="px-8 py-4 bg-[#00F2FE] hover:bg-[#00F2FE]/90 text-slate-950 font-bold rounded-lg text-center transition-all flex items-center justify-center gap-2 group whitespace-nowrap shadow-[0_0_30px_rgba(0,242,254,0.3)]"
            >
              Book a Website Strategy Call <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link 
              to="/portfolio" 
              className="px-8 py-4 bg-[#0F172A] hover:bg-[#1E293B] border border-slate-700 text-white font-bold rounded-lg text-center transition-all whitespace-nowrap"
            >
              View Website Portfolio
            </Link>
          </motion.div>

          {/* Hero Visual: Desktop Mockup + Layered Tablet & Mobile + 6 Floating Cards */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-20 w-full max-w-5xl relative"
          >
            {/* Main Desktop Screen */}
            <div className="aspect-[16/9] bg-[#0F172A] rounded-2xl border border-slate-700/80 shadow-2xl overflow-hidden relative">
              <div className="h-8 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[11px] font-mono text-slate-400 bg-slate-950 px-4 py-0.5 rounded border border-slate-800">
                  https://varnidigital.com.au/growth-infrastructure
                </div>
                <div className="w-12" />
              </div>
              <img 
                src={webDesignImage} 
                alt="Desktop Website Mockup" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/20 to-transparent" />

              {/* Layered Tablet Mockup (Bottom Left inside frame) */}
              <div className="hidden md:flex flex-col justify-between w-64 h-44 bg-[#030712]/95 backdrop-blur-md border-2 border-slate-700 rounded-xl p-4 absolute bottom-6 left-8 shadow-2xl text-left">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-[10px] font-bold text-[#00F2FE] uppercase tracking-wider">Tablet View · CRM Pipeline</span>
                  <Tablet className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <div className="space-y-2 my-auto">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">New Website Enquiries</span>
                    <span className="font-bold text-[#00F5D4] tabular-nums">+38 this week</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#00F2FE] to-[#00F5D4] w-4/5 h-full rounded-full" />
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-400 pt-1">
                    <span>Auto-SMS Sent: 100%</span>
                    <span className="text-white font-semibold">4.9★ Trust</span>
                  </div>
                </div>
                <div className="text-[10px] text-slate-400 flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00F5D4]" /> Synced with CRM & Calendar
                </div>
              </div>

              {/* Layered Mobile Mockup (Bottom Right inside frame) */}
              <div className="hidden sm:flex flex-col justify-between w-44 h-60 bg-[#030712]/95 backdrop-blur-md border-2 border-slate-700 rounded-2xl p-3.5 absolute bottom-6 right-8 shadow-2xl text-left">
                <div className="w-8 h-1 bg-slate-700 rounded-full mx-auto mb-1" />
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-[#00F5D4] uppercase">Mobile First UX</span>
                  <div className="text-xs font-bold text-white leading-tight">Instant Quote & Click-to-Call</div>
                  <div className="p-2 rounded bg-[#0F172A] border border-slate-800 text-[10px] text-slate-300">
                    Name, Phone & Service Selected ✓
                  </div>
                </div>
                <div className="w-full py-2 bg-[#00F5D4] text-slate-950 font-bold text-[11px] rounded-lg text-center">
                  Tap to Call Now
                </div>
              </div>
            </div>

            {/* 6 Floating Cards Around Hero Mockup */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6">
              {[
                { label: "98/100 PageSpeed Score", icon: Zap, color: "text-[#00F5D4]", border: "border-[#00F5D4]/30" },
                { label: "Mobile Responsive", icon: MonitorSmartphone, color: "text-[#00F2FE]", border: "border-[#00F2FE]/30" },
                { label: "SEO Ready", icon: Search, color: "text-[#2563EB]", border: "border-[#2563EB]/40" },
                { label: "CRM Connected", icon: Database, color: "text-[#00F5D4]", border: "border-[#00F5D4]/30" },
                { label: "Lead Form Active", icon: FileCheck, color: "text-[#00F2FE]", border: "border-[#00F2FE]/30" },
                { label: "Secure Hosting", icon: ShieldCheck, color: "text-[#00F5D4]", border: "border-[#00F5D4]/30" }
              ].map((card, idx) => (
                <div 
                  key={idx} 
                  className={`bg-[#0F172A] border ${card.border} px-3.5 py-3 rounded-xl shadow-lg flex items-center gap-2.5 text-left`}
                >
                  <card.icon className={`w-4 h-4 ${card.color} shrink-0`} />
                  <span className="font-bold text-xs text-[#F9FAFB] leading-tight">{card.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Problem Section */}
      <section id="problems" className="py-24 bg-[#0F172A] relative border-y border-slate-800/70">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-3">
              The Silent Revenue Leak
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Most Business Websites Look Good, But <span className="text-[#F59E0B]">Don't Generate Leads</span>
            </h2>
            <p className="text-[#94A3B8] text-lg mb-8 leading-relaxed">
              A pretty digital brochure isn't enough anymore. If your website is suffering from these critical bottlenecks, you are losing paying customers to local competitors every single day.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Slow loading speed",
                "Poor mobile experience", 
                "Weak calls-to-action",
                "No enquiry tracking",
                "No CRM connection",
                "Outdated design",
                "No SEO structure",
                "No ongoing maintenance"
              ].map((pain, i) => (
                <div key={i} className="flex items-center gap-3 bg-[#030712]/60 border border-slate-800 p-3.5 rounded-lg">
                  <AlertTriangle className="w-4 h-4 text-[#F59E0B] shrink-0" />
                  <span className="text-sm font-medium text-[#E2E8F0]">{pain}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Broken Website Dashboard Visual with Warning Labels */}
          <div className="bg-[#030712] rounded-2xl border border-slate-800 p-6 md:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <span className="text-xs font-mono text-slate-400">audit://typical-business-website.com.au</span>
              </div>
              <div className="bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/30 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" /> 4 Critical Warnings
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Warning 1: Slow Speed */}
              <div className="p-4 bg-[#0F172A] border border-red-500/30 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase text-red-400">Slow Speed</span>
                  <span className="text-xs font-mono font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded tabular-nums">8.4s Load</span>
                </div>
                <p className="text-xs text-[#94A3B8]">53% of mobile visitors bounce before the hero image finishes loading.</p>
              </div>

              {/* Warning 2: No Tracking */}
              <div className="p-4 bg-[#0F172A] border border-[#F59E0B]/30 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase text-[#F59E0B]">No Tracking</span>
                  <span className="text-xs font-mono font-bold text-[#F59E0B] bg-[#F59E0B]/10 px-2 py-0.5 rounded">0 Pixels</span>
                </div>
                <p className="text-xs text-[#94A3B8]">No GA4, Tag Manager, or call attribution—zero visibility on ad spend ROI.</p>
              </div>

              {/* Warning 3: Low Conversion */}
              <div className="p-4 bg-[#0F172A] border border-[#F59E0B]/30 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase text-[#F59E0B]">Low Conversion</span>
                  <span className="text-xs font-mono font-bold text-[#F59E0B] bg-[#F59E0B]/10 px-2 py-0.5 rounded tabular-nums">0.4% CVR</span>
                </div>
                <p className="text-xs text-[#94A3B8]">Hidden contact forms and generic copy fail to turn visitors into enquiries.</p>
              </div>

              {/* Warning 4: Poor Mobile UX */}
              <div className="p-4 bg-[#0F172A] border border-red-500/30 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase text-red-400">Poor Mobile UX</span>
                  <span className="text-xs font-mono font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded">Broken Layout</span>
                </div>
                <p className="text-xs text-[#94A3B8]">Unclickable phone numbers and cramped forms frustrate mobile prospects.</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-red-500/5 border border-red-500/20 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-red-400 shrink-0" />
                <span className="text-xs md:text-sm text-slate-300 font-medium">Result: Paid and organic traffic leaves without enquiring.</span>
              </div>
              <a href="#infrastructure" className="text-xs font-bold text-[#00F2FE] hover:underline whitespace-nowrap ml-4">
                See The Fix →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Varni Website Infrastructure System */}
      <section id="infrastructure" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#00F2FE] mb-3">
            5-Part Execution Framework
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The Varni Website <span className="text-[#00F2FE]">Infrastructure System</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-3xl mx-auto">
            A connected, end-to-end ecosystem engineered to take visitors from first impression to booked appointment and long-term retention.
          </p>
        </div>

        {/* Connected Ecosystem Flow Bar: Strategy → Design → Build → Automate → Maintain */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-12 bg-[#0F172A] border border-slate-800 p-4 rounded-2xl max-w-4xl mx-auto">
          {["Strategy", "Design", "Build", "Automate", "Maintain"].map((stage, idx) => (
            <div key={stage} className="flex items-center gap-3 md:gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#030712] border border-[#00F2FE]/30">
                <span className="text-xs font-mono font-bold text-[#00F2FE] tabular-nums">0{idx + 1}</span>
                <span className="text-sm font-bold text-white">{stage}</span>
              </div>
              {idx < 4 && <ArrowRight className="w-4 h-4 text-[#00F2FE] shrink-0" />}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {[
            { tag: "01", title: "Strategy", icon: Search, desc: "Audience research, competitor review, industry positioning, content structure." },
            { tag: "02", title: "UX/UI Design", icon: LayoutTemplate, desc: "Wireframes, design system, brand styling, conversion-focused page layouts." },
            { tag: "03", title: "Development", icon: Globe, desc: "Fast, responsive, secure websites using modern development standards." },
            { tag: "04", title: "CRM & Automation", icon: Zap, desc: "Lead forms, enquiry tracking, SMS/email follow-up, calendar booking, reporting." },
            { tag: "05", title: "Maintenance", icon: RefreshCw, desc: "Updates, backups, security checks, performance monitoring, ongoing improvements." },
          ].map((step, i) => (
            <div key={i} className="bg-[#0F172A] border border-slate-800 hover:border-[#00F2FE]/50 p-6 rounded-2xl relative group transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#030712] border border-slate-800 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-[#00F2FE]" />
                  </div>
                  <span className="text-sm font-mono font-bold text-[#00F2FE] tabular-nums">{step.tag}.</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">{step.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs font-semibold text-slate-400 group-hover:text-[#00F2FE] transition-colors">
                Phase {step.tag} Verified
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Technology Capability Matrix */}
      <section id="tech-stack" className="py-24 bg-[#0F172A] border-y border-slate-800/70">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-[#2563EB] mb-3">
              Technical Authority Matrix
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              The Tech Stack Behind <span className="text-[#00F2FE]">High-Converting Websites</span>
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-3xl mx-auto">
              Enterprise-grade development, e-commerce integration, design systems, and long-term DevOps engineered for reliability and scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pillar 1 */}
            <div className="bg-[#030712] p-8 rounded-2xl border border-slate-800 hover:border-[#2563EB]/60 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/30 text-[#2563EB]">
                    <Server className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Pillar 01 · Custom Engineering</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Custom Web & App Development</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                  Custom-built web applications, dashboards, portals, and scalable systems for businesses that need more than a template website.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-xs font-semibold text-slate-400 mb-2">Core Technologies & Languages:</div>
                <p className="text-xs text-[#E2E8F0] leading-relaxed">
                  Laravel · CodeIgniter · PHP · Node.js · Vue.js · React · JavaScript · jQuery · Nuxt.js · MySQL · MongoDB
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#030712] p-8 rounded-2xl border border-slate-800 hover:border-[#00F5D4]/60 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-[#00F5D4]/10 border border-[#00F5D4]/30 text-[#00F5D4]">
                    <Globe className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Pillar 02 · Connected Commerce</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">CMS, E-Commerce & API Integration</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                  Websites and online stores connected with payment systems, CRM platforms, booking tools, inventory systems, and automation workflows.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-xs font-semibold text-slate-400 mb-2">Platforms & Integrations:</div>
                <p className="text-xs text-[#E2E8F0] leading-relaxed">
                  WordPress · Wix · Shopify · RESTful API · Third-Party API · Payment Gateway Integration
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#030712] p-8 rounded-2xl border border-slate-800 hover:border-[#00F2FE]/60 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-[#00F2FE]/10 border border-[#00F2FE]/30 text-[#00F2FE]">
                    <PenTool className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Pillar 03 · Interface & Brand</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">UI/UX, Branding & Front-End Design</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                  Premium interface design, mobile-first layouts, responsive front-end systems, visual branding, and conversion-focused user journeys.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-xs font-semibold text-slate-400 mb-2">Design & Front-End Stack:</div>
                <p className="text-xs text-[#E2E8F0] leading-relaxed">
                  Figma · Adobe Photoshop · Adobe Illustrator · Adobe XD · CorelDRAW · Canva · HTML5 · CSS3 · Bootstrap · Tailwind CSS
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-[#030712] p-8 rounded-2xl border border-slate-800 hover:border-[#F59E0B]/60 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B]">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Pillar 04 · Lifecycle & DevOps</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Maintenance, DevOps & Long-Term Support</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                  Ongoing website support, bug fixing, backups, content updates, version control, database care, and long-term technical management.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-xs font-semibold text-slate-400 mb-2">Operations & Version Control:</div>
                <p className="text-xs text-[#E2E8F0] leading-relaxed">
                  Sales & Service · Existing Product Handling · Long-Term Project Maintenance · Database Maintenance · GitHub · GitLab
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Website Services Section */}
      <section id="website-services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#00F2FE] mb-3">
            End-to-End Capabilities
          </div>
          <h2 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto">
            Complete Website Creation & <span className="text-[#00F2FE]">Management Services</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Business Website Design", desc: "Professional websites for local service businesses." },
            { title: "Landing Page Development", desc: "Campaign-specific pages designed to convert paid traffic." },
            { title: "E-Commerce Websites", desc: "Shopify, WooCommerce, and payment-ready online stores." },
            { title: "Website Redesign", desc: "Modern rebuilds for outdated or underperforming websites." },
            { title: "CRM-Connected Websites", desc: "Lead forms connected to pipelines, SMS, email, and reporting." },
            { title: "Website Maintenance", desc: "Updates, backups, speed checks, bug fixes, and content management." },
            { title: "SEO Website Structure", desc: "Metadata, headings, schema basics, internal linking, and local SEO setup." },
            { title: "Performance Optimisation", desc: "Speed, mobile responsiveness, image compression, and Core Web Vitals improvements." }
          ].map((srv, i) => (
            <div key={i} className="bg-[#0F172A] border border-slate-800 p-6 rounded-2xl hover:border-[#00F2FE]/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#030712] border border-slate-800 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5 text-[#00F2FE]" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-[#F9FAFB]">{srv.title}</h4>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{srv.desc}</p>
              </div>
              <a 
                href="/contact"
                className="mt-6 pt-3 border-t border-slate-800/80 text-xs font-bold text-[#00F2FE] flex items-center justify-between hover:underline"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Interactive Website Preview Section */}
      <section id="responsive-preview" className="py-24 bg-[#0F172A] border-y border-slate-800/70 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-widest text-[#00F5D4] mb-3">
              Multi-Device Engineering
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Designed for <span className="text-[#00F5D4]">Every Screen</span>
            </h2>
            <p className="text-[#94A3B8] text-lg">
              Australian service businesses get a high percentage of enquiries from mobile users. Every layout we build adapts seamlessly across Desktop, Laptop, Tablet, and Mobile.
            </p>
          </div>

          {/* Interactive Device Switcher */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-[#030712] p-1.5 rounded-xl border border-slate-800 gap-1">
              {[
                { id: 'desktop', label: 'Desktop', icon: Monitor, width: 'max-w-4xl', ratio: 'aspect-[16/9]' },
                { id: 'laptop', label: 'Laptop', icon: Laptop, width: 'max-w-3xl', ratio: 'aspect-[16/10]' },
                { id: 'tablet', label: 'Tablet', icon: Tablet, width: 'max-w-xl', ratio: 'aspect-[4/3]' },
                { id: 'mobile', label: 'Mobile', icon: Smartphone, width: 'max-w-xs', ratio: 'aspect-[9/16]' }
              ].map((dev) => (
                <button
                  key={dev.id}
                  onClick={() => setActiveDevice(dev.id as typeof activeDevice)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    activeDevice === dev.id 
                      ? 'bg-[#00F2FE] text-slate-950 shadow-sm' 
                      : 'text-[#94A3B8] hover:text-white'
                  }`}
                >
                  <dev.icon className="w-4 h-4" />
                  <span>{dev.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: 6 Key Responsive Labels */}
            <div className="lg:col-span-5 space-y-3">
              {[
                { title: "Mobile-first layout", desc: "Thumb-friendly navigation and zero horizontal scrolling on smartphones." },
                { title: "Fast loading pages", desc: "Compressed next-gen assets and clean code for sub-2-second loads." },
                { title: "Clear enquiry forms", desc: "High-contrast quote forms above the fold that feed straight into your CRM." },
                { title: "Sticky call buttons", desc: "Persistent tap-to-call bar on mobile screens for immediate phone enquiries." },
                { title: "Local SEO structure", desc: "Suburb-targeted headings and schema markup built into every template." },
                { title: "Conversion-focused CTA blocks", desc: "Strategic trust badges, reviews, and action buttons after every scroll." }
              ].map((item, i) => (
                <div key={i} className="bg-[#030712] border border-slate-800 p-4 rounded-xl flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-[#00F5D4] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-[#94A3B8] mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Interactive Viewport Frame */}
            <div className="lg:col-span-7 flex justify-center items-center min-h-[420px] bg-[#030712] border border-slate-800 rounded-2xl p-6">
              <div 
                className={`w-full transition-all duration-300 bg-[#0F172A] border-2 border-slate-700 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between ${
                  activeDevice === 'desktop' ? 'max-w-2xl aspect-[16/10]' :
                  activeDevice === 'laptop' ? 'max-w-xl aspect-[16/10]' :
                  activeDevice === 'tablet' ? 'max-w-md aspect-[4/3]' :
                  'max-w-[260px] aspect-[9/16]'
                }`}
              >
                {/* Mock Browser Top Bar */}
                <div className="bg-slate-900 px-3 py-2 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">{activeDevice} Viewport · 98/100 Speed</span>
                  <PhoneCall className="w-3 h-3 text-[#00F5D4]" />
                </div>

                {/* Mock Responsive Content */}
                <div className="p-5 flex-1 flex flex-col justify-between relative overflow-hidden">
                  <div>
                    <div className="inline-block px-2.5 py-0.5 rounded bg-[#00F2FE]/10 text-[#00F2FE] text-[10px] font-bold mb-2">
                      Australian Local Service Leader
                    </div>
                    <h4 className={`font-bold text-white leading-tight mb-2 ${activeDevice === 'mobile' ? 'text-base' : 'text-xl'}`}>
                      Get Your Free Quote in Under 60 Seconds
                    </h4>
                    <p className="text-xs text-[#94A3B8] mb-4">
                      5-Star Rated Local Team · Fast Response · Fully Insured
                    </p>
                  </div>

                  <div className={`grid gap-2 my-auto ${activeDevice === 'mobile' ? 'grid-cols-1' : 'grid-cols-2'}`}>
                    <div className="bg-[#030712] border border-slate-800 p-2.5 rounded-lg text-xs text-slate-300">
                      Full Name & Suburb
                    </div>
                    <div className="bg-[#030712] border border-slate-800 p-2.5 rounded-lg text-xs text-slate-300">
                      Phone Number (SMS Active)
                    </div>
                  </div>

                  {/* Sticky Call / Quote Bar */}
                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                    <div className="flex-1 py-2 px-3 bg-[#00F2FE] text-slate-950 font-bold text-xs rounded-lg text-center">
                      Request Instant Quote
                    </div>
                    <div className="py-2 px-3 bg-[#00F5D4]/20 border border-[#00F5D4]/40 text-[#00F5D4] font-bold text-xs rounded-lg flex items-center gap-1.5 whitespace-nowrap">
                      <PhoneCall className="w-3.5 h-3.5" /> Call Now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Website Management Plans Section */}
      <section id="management-plans" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="text-xs font-bold uppercase tracking-widest text-[#2563EB] mb-3">
              Proactive Website Care
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Launch Is Only the <span className="text-[#00F2FE]">Beginning</span>
            </h2>
            <div className="p-5 rounded-xl border border-[#00F2FE]/30 bg-[#00F2FE]/10 text-[#F9FAFB] font-semibold text-base mb-6 leading-relaxed">
              We don't disappear after launch. We keep your website updated, secure, and performing.
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-8">
              Websites without active management degrade over time—plugins break, page speed drops, and security vulnerabilities appear. Our ongoing management plans handle every technical detail monthly.
            </p>

            {/* Server & Hosting Monitoring Panel Visual */}
            <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#00F5D4]" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Live Infrastructure Monitor</span>
                </div>
                <span className="text-xs font-mono text-[#00F5D4] tabular-nums">99.98% Uptime</span>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-[#030712] p-3 rounded-lg border border-slate-800">
                  <div className="text-xs text-[#94A3B8]">Daily Backups</div>
                  <div className="text-sm font-bold text-[#00F5D4] mt-1">Active</div>
                </div>
                <div className="bg-[#030712] p-3 rounded-lg border border-slate-800">
                  <div className="text-xs text-[#94A3B8]">SSL & Firewall</div>
                  <div className="text-sm font-bold text-[#00F2FE] mt-1">Protected</div>
                </div>
                <div className="bg-[#030712] p-3 rounded-lg border border-slate-800">
                  <div className="text-xs text-[#94A3B8]">Core Web Vitals</div>
                  <div className="text-sm font-bold text-white mt-1 tabular-nums">98 / 100</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {[
              "Monthly website updates",
              "Plugin and theme monitoring",
              "Security checks",
              "Backup management",
              "Speed optimisation",
              "Landing page changes",
              "Blog/content uploads",
              "Technical issue support",
              "Conversion improvement suggestions",
              "Analytics review"
            ].map((feat, i) => (
              <div key={i} className="flex items-center gap-3.5 bg-[#0F172A] p-4.5 rounded-xl border border-slate-800 hover:border-[#2563EB]/50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#2563EB]/10 border border-[#2563EB]/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#00F2FE]" />
                </div>
                <span className="text-[#E2E8F0] text-sm font-medium">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Conversion Features Section */}
      <section id="conversion-features" className="py-24 bg-[#0F172A] border-y border-slate-800/70">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-[#00F5D4] mb-3">
              Lead Capture Architecture
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Built to Turn Visitors <span className="text-[#00F5D4]">Into Enquiries</span>
            </h2>
            <p className="text-[#94A3B8] text-lg">
              Every website we launch is equipped with the exact conversion triggers, tracking pixels, and instant response tools needed to maximize lead flow.
            </p>
          </div>

          {/* 12 Conversion Features Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {[
              { name: "Sticky call button", icon: PhoneCall },
              { name: "Quote request form", icon: FileCheck },
              { name: "Booking calendar", icon: Calendar },
              { name: "Click-to-call mobile CTA", icon: Smartphone },
              { name: "WhatsApp enquiry button", icon: MessageSquare },
              { name: "Review section", icon: Star },
              { name: "Service area pages", icon: MapPin },
              { name: "Lead tracking", icon: Activity },
              { name: "Thank-you page", icon: CheckCircle2 },
              { name: "Retargeting pixel setup", icon: Tag },
              { name: "Google Analytics setup", icon: BarChart3 },
              { name: "Google Tag Manager setup", icon: Database }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#030712] border border-slate-800 hover:border-[#00F5D4]/40 p-4 rounded-xl flex items-center gap-3 transition-colors">
                <item.icon className="w-5 h-5 text-[#00F5D4] shrink-0" />
                <span className="text-sm font-semibold text-[#F9FAFB]">{item.name}</span>
              </div>
            ))}
          </div>

          {/* 3 Live Conversion Widgets Showcase */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#030712] border border-slate-800 p-6 rounded-2xl">
              <div className="text-xs font-bold text-[#00F2FE] uppercase tracking-wider mb-3">Form Submission Alert</div>
              <div className="p-3.5 rounded-xl bg-[#0F172A] border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-white">New Quote Request</span>
                  <span className="text-[#00F5D4] font-mono">Just Now</span>
                </div>
                <p className="text-xs text-[#94A3B8]">Service: Full Roof Restoration · Suburb: Tarneit VIC</p>
                <div className="text-[11px] text-[#00F2FE] font-semibold">✓ Auto-SMS & CRM Pipeline Triggered</div>
              </div>
            </div>

            <div className="bg-[#030712] border border-slate-800 p-6 rounded-2xl">
              <div className="text-xs font-bold text-[#00F5D4] uppercase tracking-wider mb-3">Calendar Booking Pop-Up</div>
              <div className="p-3.5 rounded-xl bg-[#0F172A] border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-white">Strategy / Site Inspection</span>
                  <span className="text-[#00F5D4] font-mono">Confirmed</span>
                </div>
                <p className="text-xs text-[#94A3B8]">Synced with Google Calendar & automated reminder SMS.</p>
                <div className="text-[11px] text-[#00F5D4] font-semibold">✓ Zero manual back-and-forth</div>
              </div>
            </div>

            <div className="bg-[#030712] border border-slate-800 p-6 rounded-2xl">
              <div className="text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-3">Analytics & Tag Manager</div>
              <div className="p-3.5 rounded-xl bg-[#0F172A] border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-white">Conversion Attribution</span>
                  <span className="text-[#00F2FE] font-mono tabular-nums">+184% Leads</span>
                </div>
                <p className="text-xs text-[#94A3B8]">Every phone click, form submit, and WhatsApp chat tracked.</p>
                <div className="text-[11px] text-[#00F2FE] font-semibold">✓ GA4 + Meta Pixel + GTM Active</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Before / After Section */}
      <section id="before-after" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#00F2FE] mb-3">
            Measurable Transformation
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            From Static Website to <span className="text-[#00F2FE]">Lead-Generating System</span>
          </h2>
          <p className="text-[#94A3B8] text-lg">
            Compare how a standard brochure website performs against a Varni Digital Website Infrastructure System.
          </p>
        </div>

        {/* Interactive Comparison Slider Bar */}
        <div className="max-w-4xl mx-auto mb-12 bg-[#0F172A] border border-slate-800 p-6 rounded-2xl">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider mb-3">
            <span className="text-red-400">Before: Static Brochure ({100 - sliderPos}% Impact)</span>
            <span className="text-[#00F2FE]">After: Varni Lead System ({sliderPos}% Conversion Power)</span>
          </div>
          <input
            type="range"
            min={10}
            max={95}
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            aria-label="Before and After System Comparison"
            className="w-full accent-[#00F2FE] cursor-pointer"
          />
          <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-slate-800 text-center">
            <div>
              <div className="text-xs text-[#94A3B8]">Page Load Speed</div>
              <div className="text-sm font-bold text-white mt-1 tabular-nums">
                {sliderPos > 50 ? '1.2s (98/100 Score)' : '8.4s (High Bounce)'}
              </div>
            </div>
            <div>
              <div className="text-xs text-[#94A3B8]">Lead Response Time</div>
              <div className="text-sm font-bold text-[#00F5D4] mt-1 tabular-nums">
                {sliderPos > 50 ? 'Under 90 Seconds (Auto-SMS)' : '24–48 Hours (Manual)'}
              </div>
            </div>
            <div>
              <div className="text-xs text-[#94A3B8]">Enquiry Tracking</div>
              <div className="text-sm font-bold text-[#00F2FE] mt-1">
                {sliderPos > 50 ? '100% CRM + Call Attribution' : 'Untracked'}
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          <div className="bg-red-500/5 border border-red-500/20 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> Before (Static Website)
            </h3>
            <ul className="space-y-4">
              {[
                "Outdated design",
                "No clear CTA",
                "Poor mobile layout",
                "No tracking",
                "Slow loading speed",
                "No automation"
              ].map((t, i) => (
                <li key={i} className="text-slate-300 flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-red-500/70 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#00F2FE]/5 border border-[#00F2FE]/30 p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#00F2FE] text-slate-950 px-4 py-1 text-xs font-bold rounded-bl-lg">
              THE VARNI SYSTEM
            </div>
            <h3 className="text-xl font-bold text-[#00F2FE] mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> After (Lead-Generating System)
            </h3>
            <ul className="space-y-4">
              {[
                "Premium brand presentation",
                "Strong CTA flow",
                "Mobile-first experience",
                "CRM-connected forms",
                "Fast performance",
                "Automated follow-up"
              ].map((t, i) => (
                <li key={i} className="text-white flex items-center gap-3 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#00F5D4] shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 10. Final CTA Section */}
      <section id="website-cta" className="py-28 px-6 relative overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#00F2FE15_0%,#030712_70%)] opacity-60 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10 bg-[#0F172A] border border-slate-800 p-10 md:p-16 rounded-3xl shadow-2xl">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Need a Website That Actually <span className="text-[#00F2FE]">Works for Your Business?</span>
          </h2>
          <p className="text-lg md:text-xl text-[#94A3B8] mb-10 max-w-2xl mx-auto leading-relaxed">
            Let Varni Digital build and manage a website system designed to generate enquiries, build trust, and support long-term growth.
          </p>
          
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#00F2FE] hover:bg-[#00F2FE]/90 text-slate-950 font-bold rounded-lg text-base md:text-lg transition-transform hover:scale-105 shadow-[0_0_30px_rgba(0,242,254,0.3)]"
          >
            Schedule a Website Strategy Call <ArrowRight className="w-5 h-5" />
          </a>
          
          <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs md:text-sm text-[#E2E8F0] font-medium">
            {[
              "Australian business focus",
              "Mobile-first design",
              "SEO-ready structure",
              "CRM and automation available",
              "Ongoing management available"
            ].map((point, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00F5D4] shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
