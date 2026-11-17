import { motion } from 'motion/react';
import { 
  MonitorSmartphone, Zap, ShieldCheck, Database, Globe, Server, 
  PenTool, ArrowRight, CheckCircle2, RefreshCw, LayoutTemplate, Search
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import webDesignImage from '../assets/images/web_design_showcase_1781059898651.png';

const quickSolutions = [
  {
    title: "Custom Web & App Development",
    desc: "Custom web apps, portals, and scalable systems built with React, Node.js, Laravel, PHP, Vue.js, and MySQL/MongoDB.",
    icon: Server,
    accent: "text-[#00F2FE]",
    border: "hover:border-[#00F2FE]/40",
    targetHash: "#tech-stack"
  },
  {
    title: "CMS, E-Commerce & API Systems",
    desc: "High-converting WordPress, Shopify, and Wix stores integrated with payment gateways, CRMs, and booking tools.",
    icon: Globe,
    accent: "text-[#00F5D4]",
    border: "hover:border-[#00F5D4]/40",
    targetHash: "#tech-stack"
  },
  {
    title: "UI/UX & Conversion Architecture",
    desc: "Mobile-first interfaces crafted in Figma, Adobe Suite, and Tailwind CSS with sticky CTAs and local SEO structure.",
    icon: PenTool,
    accent: "text-[#2563EB]",
    border: "hover:border-[#2563EB]/40",
    targetHash: "#responsive-preview"
  },
  {
    title: "Ongoing Maintenance & DevOps",
    desc: "Monthly updates, security checks, backups, speed optimisation, database care, and long-term technical support.",
    icon: ShieldCheck,
    accent: "text-[#F59E0B]",
    border: "hover:border-[#F59E0B]/40",
    targetHash: "#management-plans"
  }
];

const frameworkPills = [
  { num: "01", label: "Strategy", icon: Search },
  { num: "02", label: "UX/UI Design", icon: LayoutTemplate },
  { num: "03", label: "Development", icon: Globe },
  { num: "04", label: "CRM & Automation", icon: Zap },
  { num: "05", label: "Maintenance", icon: RefreshCw }
];

export default function WebsiteFrontSection() {
  const navigate = useNavigate();

  const handleRedirect = (hash: string = '') => {
    navigate(`/website${hash}`);
  };

  return (
    <section id="website-solutions" className="py-24 bg-[#030712] relative overflow-hidden border-t border-white/5">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#00F2FE]/10 via-[#2563EB]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Top Positioning Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00F2FE]/30 bg-[#00F2FE]/10 text-[#00F2FE] text-xs font-bold uppercase tracking-widest mb-6">
            Websites + Funnels + CRM + Automation + Maintenance
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F9FAFB] tracking-tight mb-6 leading-[1.1]">
            Websites Built to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] to-[#2563EB]">Convert, Scale, and Perform</span>
          </h2>
          <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed max-w-3xl mx-auto">
            We don't just design websites. We build digital infrastructure that brings leads, tracks performance, and supports long-term growth for Australian businesses.
          </p>
        </div>

        {/* Main Split Showcase: Visual Mockup + Key Highlights */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left: Layered Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => handleRedirect('')}
            className="lg:col-span-6 relative group cursor-pointer"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#0F172A] shadow-2xl aspect-[16/10]">
              <img 
                src={webDesignImage} 
                alt="High-Converting Website Infrastructure" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/30 to-transparent" />

              {/* Floating Performance Metrics */}
              <div className="absolute top-4 left-4 bg-[#030712]/90 backdrop-blur-md border border-[#00F5D4]/40 px-3.5 py-2 rounded-lg flex items-center gap-2 shadow-lg">
                <Zap className="w-4 h-4 text-[#00F5D4]" />
                <span className="text-xs font-bold text-[#F9FAFB] tabular-nums">98/100 PageSpeed</span>
              </div>

              <div className="absolute top-4 right-4 bg-[#030712]/90 backdrop-blur-md border border-[#00F2FE]/40 px-3.5 py-2 rounded-lg flex items-center gap-2 shadow-lg">
                <Database className="w-4 h-4 text-[#00F2FE]" />
                <span className="text-xs font-bold text-[#F9FAFB]">CRM & Lead Tracking Active</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 bg-[#0F172A]/95 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <MonitorSmartphone className="w-6 h-6 text-[#00F2FE] shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-white">Mobile-First & SEO-Ready Architecture</p>
                    <p className="text-xs text-[#94A3B8]">Desktop · Laptop · Tablet · Mobile</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#00F2FE] flex items-center gap-1 group-hover:translate-x-1 transition-transform whitespace-nowrap">
                  View Full System <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Core Value Proposition & Quick Service Triggers */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-3">
                From Static Website to Lead-Generating System
              </h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                Most business websites look good on the surface, but suffer from slow speeds, weak calls-to-action, no CRM connection, and poor mobile UX. We replace static brochures with complete conversion systems.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Business & Service Websites",
                  "High-Converting Landing Pages",
                  "Shopify & WooCommerce Stores",
                  "CRM-Connected Lead Forms",
                  "Local SEO & Core Web Vitals",
                  "Monthly Maintenance & Security"
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleRedirect('#website-services')}
                    className="flex items-center gap-2.5 text-left text-sm text-[#E2E8F0] hover:text-[#00F2FE] transition-colors py-1 group"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00F5D4] shrink-0" />
                    <span className="truncate">{item}</span>
                  </button>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleRedirect('')}
                  className="px-6 py-3.5 bg-[#00F2FE] hover:bg-[#00F2FE]/90 text-slate-950 font-bold rounded-lg text-sm transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shadow-[0_0_25px_rgba(0,242,254,0.25)]"
                >
                  Explore Website Creation & Management <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleRedirect('#tech-stack')}
                  className="px-6 py-3.5 bg-[#030712] hover:bg-slate-900 text-white border border-slate-700 font-semibold rounded-lg text-sm transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  View Tech Stack
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 5-Part Infrastructure Bar (Interactive -> redirects to #infrastructure on /website) */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-white">The 5-Part Varni Website Infrastructure</h3>
              <p className="text-xs text-[#94A3B8]">Click any stage to see how we strategy, design, build, automate, and maintain your digital presence.</p>
            </div>
            <button
              onClick={() => handleRedirect('#infrastructure')}
              className="text-xs font-bold text-[#00F2FE] hover:underline flex items-center gap-1 whitespace-nowrap cursor-pointer"
            >
              See Full 5-Part System <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {frameworkPills.map((step, i) => (
              <button
                key={i}
                onClick={() => handleRedirect('#infrastructure')}
                className="bg-[#0F172A] hover:bg-[#1E293B] border border-slate-800 hover:border-[#00F2FE]/40 p-4 rounded-xl text-left transition-all group cursor-pointer flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-[#030712] border border-slate-800 flex items-center justify-center text-[#00F2FE] shrink-0 group-hover:scale-105 transition-transform">
                  <step.icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-[#94A3B8] tabular-nums">{step.num}. Stage</div>
                  <div className="text-sm font-bold text-white group-hover:text-[#00F2FE] transition-colors truncate">{step.label}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 4 Solution Cards (Each redirects to its dedicated section on /website) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickSolutions.map((sol, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => handleRedirect(sol.targetHash)}
              className={`bg-[#0F172A] border border-slate-800 ${sol.border} p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1`}
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#030712] border border-slate-800 flex items-center justify-center mb-5">
                  <sol.icon className={`w-5 h-5 ${sol.accent}`} />
                </div>
                <h4 className="text-lg font-bold text-[#F9FAFB] mb-2 group-hover:text-[#00F2FE] transition-colors">
                  {sol.title}
                </h4>
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                  {sol.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-[#00F2FE]">
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
