import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronRight, Target, Users, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const filterTabs = ['ALL', 'CONSTRUCTION', 'AUTOMOTIVE', 'CLEANING', 'HEALTHCARE', 'TRADES'];

const industryData = [
  {
    id: 'CONSTRUCTION',
    category: 'Construction',
    name: 'Construction & Builders',
    revenue: '$100k+ Project Acquisition',
    desc: 'We help builders secure premium renovation, extension, and custom home projects through Google Ads, local SEO, and authority positioning.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    floats: ['32 Leads This Month', '$1.2M Pipeline', '7 Active Projects'],
    glow: 'group-hover:border-orange-500/50 group-hover:shadow-[0_0_40px_rgba(249,115,22,0.15)]',
    textGlow: 'text-orange-400',
    bgGlow: 'from-orange-500/80',
    channels: ['Google Ads', 'SEO', 'Retargeting', 'Funnel Automation', 'CRM']
  },
  {
    id: 'AUTOMOTIVE',
    category: 'Automotive',
    name: 'Automotive & Mechanics',
    revenue: 'High-Value Servicing & Repairs',
    desc: 'We drive consistent bookings for specialized repairs, logbook servicing, and high-margin automotive work.',
    image: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&q=80&w=800',
    floats: ['18 Bookings This Week', '97% Review Score', '3.2x ROAS'],
    glow: 'group-hover:border-cyan-500/50 group-hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]',
    textGlow: 'text-cyan-400',
    bgGlow: 'from-cyan-500/80',
    channels: ['Google Ads', 'Local SEO', 'Offer Funnels', 'Review Automation', 'Retargeting']
  },
  {
    id: 'CLEANING',
    category: 'Cleaning',
    name: 'Commercial Cleaning',
    revenue: '$28k Monthly Retainers',
    desc: 'We target procurement managers and business owners to secure long-term, high-value commercial cleaning contracts.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800',
    floats: ['12 New Contracts', '5 Commercial Sites', '$28k Monthly Retainers'],
    glow: 'group-hover:border-green-500/50 group-hover:shadow-[0_0_40px_rgba(34,197,94,0.15)]',
    textGlow: 'text-green-400',
    bgGlow: 'from-green-500/80',
    channels: ['LinkedIn Outreach', 'Google Ads', 'B2B Funnels', 'SEO', 'Email Sequences']
  },
  {
    id: 'HEALTHCARE',
    category: 'Healthcare',
    name: 'Healthcare & Clinics',
    revenue: 'Consistent Patient Bookings',
    desc: 'We help medical practices, dentists, and allied health professionals build local authority and fill their appointment books.',
    image: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&q=80&w=800',
    floats: ['86 Appointments', '95% Booking Rate', 'AHPRA Compliant'],
    glow: 'group-hover:border-blue-500/50 group-hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]',
    textGlow: 'text-blue-400',
    bgGlow: 'from-blue-600/80',
    channels: ['Local SEO', 'Google Ads', 'Patient Nurture', 'Review Gen', 'Reactivation']
  },
  {
    id: 'TRADES',
    category: 'Trades',
    name: 'Local Tradeservices',
    revenue: 'Dominate Local Service Areas',
    desc: 'We capture emergency and planned service searches, putting your trades business first when customers need help.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800',
    floats: ['47 Calls This Week', '24/7 Lead Capture', '15 Suburbs Covered'],
    glow: 'group-hover:border-yellow-500/50 group-hover:shadow-[0_0_40px_rgba(234,179,8,0.15)]',
    textGlow: 'text-yellow-400',
    bgGlow: 'from-yellow-500/80',
    channels: ['Google LSA', 'Search Ads', 'GMB SEO', 'Missed Call Text Back', 'Systems']
  }
];

const miniCaseStudies = [
  {
    client: "SHAKTI AUTOMOTIVE",
    stats: [
      { val: "+187%", label: "Reach" },
      { val: "+42", label: "Leads" },
      { val: "+89%", label: "Engagement" }
    ],
    borderColor: "border-cyan-500/20"
  },
  {
    client: "WONDROUS CONSTRUCTION",
    stats: [
      { val: "+300%", label: "Visibility" },
      { val: "Project", label: "Enquiries" },
      { val: "Brand", label: "Authority" }
    ],
    borderColor: "border-orange-500/20"
  },
  {
    client: "SCRUB N CLEAN",
    stats: [
      { val: "Local", label: "Search Growth" },
      { val: "Commercial", label: "Leads" },
      { val: "Repeat", label: "Clients" }
    ],
    borderColor: "border-green-500/20"
  }
];

const clients = [
  "SHAKTI AUTOMOTIVE",
  "WONDROUS CONSTRUCTION",
  "DESTINY HOMES & CONSTRUCTION",
  "SCRUB N CLEAN",
  "ECO-SOLAR & GUTTER CLEANING",
  "OM AUTOMOTIVE",
  "WEISER'S CONTINENTAL BAKEHOUSE"
];

export default function Industries() {
  const [activeTab, setActiveTab] = useState('ALL');

  const filteredIndustries = activeTab === 'ALL' 
    ? industryData 
    : industryData.filter(i => i.id === activeTab);

  return (
    <section id="industries" className="min-h-[1400px] bg-[#060B14] relative z-20 py-32 overflow-hidden flex flex-col justify-center text-white">
      {/* Background Layers */}
      {/* Layer 2: Blueprint Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      
      {/* Layer 3: Glow Orbs */}
      <div className="absolute top-[10%] -left-[10%] w-[600px] h-[600px] bg-[#00D2FF]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] -right-[10%] w-[800px] h-[800px] bg-[#2DD4BF]/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Layer 4: Animated Data Lines (SVG fallback) */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" preserveAspectRatio="none">
         <motion.path 
            d="M 0 500 Q 200 400 400 600 T 800 300 T 1500 500" 
            fill="none" stroke="#2DD4BF" strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
         />
      </svg>

      <div className="container mx-auto px-6 max-w-[2800px] relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-8">
            <span className="text-[11px] font-[600] tracking-widest text-[#00F2FE] uppercase">🚀 INDUSTRY-SPECIFIC GROWTH SYSTEMS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-semibold mb-6 leading-tight font-sans">
            Built For <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-[#00F2FE]">Australian Businesses</span> That Want <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-[#00F2FE]">More Than Just Marketing.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 opacity-80 font-sans max-w-[800px] mx-auto leading-relaxed">
            We create tailored growth systems designed to generate enquiries, automate follow-up, and increase revenue for Australia's most competitive industries.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {filterTabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-xs font-[700] tracking-widest uppercase transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-teal-500 text-[#060B14] shadow-[0_0_20px_rgba(45,212,191,0.4)]' 
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="w-full">
          <motion.div layout className="grid lg:grid-cols-2 lg:gap-[48px] gap-8 auto-rows-fr">
            <AnimatePresence mode='popLayout'>
              {filteredIndustries.map((item, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.35, delay: idx * 0.1 }}
                  key={item.id}
                  className={`group relative flex flex-col bg-[#0A1120]/80 rounded-[24px] border border-white/[0.08] backdrop-blur-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-2 ${item.glow}`}
                >
                  {/* Top Area (55%) */}
                  <div className="relative h-[280px] sm:h-[340px] w-full overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1120] via-[#0A1120]/40 to-transparent" />
                    
                    {/* Overlay Badge */}
                    <div className="absolute top-6 left-6 px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-widest uppercase text-white shadow-xl z-20">
                      {item.category}
                    </div>

                    {/* Floating Data Widgets */}
                    <div className="absolute bottom-6 right-6 flex flex-col gap-2 items-end z-20">
                      {item.floats.map((float, i) => (
                        <motion.div 
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + (i * 0.1) }}
                          viewport={{ once: true }}
                          key={i} 
                          className="px-3 py-1.5 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white whitespace-nowrap shadow-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                        >
                          {float}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Hidden Layer (Appears on Hover) - Overlays Image */}
                  <div className="absolute top-0 left-0 right-0 h-[280px] sm:h-[340px] bg-[#060B14]/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-8 z-10 border-b border-white/5">
                     <h4 className="text-sm font-semibold text-gray-300 mb-4 tracking-wider uppercase">Primary Channels</h4>
                     <ul className="space-y-3">
                       {item.channels.map((channel, i) => (
                         <li key={i} className="flex items-center gap-3 text-sm text-white font-medium">
                           <CheckCircle2 className={`w-4 h-4 ${item.textGlow}`} />
                           {channel}
                         </li>
                       ))}
                     </ul>
                  </div>

                  {/* Content Area */}
                  <div className="p-8 flex flex-col flex-1 relative z-20 bg-[#0A1120]">
                    {/* Middle Area */}
                    <h3 className="text-2xl font-semibold mb-2 text-white font-sans">{item.name}</h3>
                    
                    {/* Revenue Opportunity Line */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-b ${item.bgGlow}`} />
                      <span className={`text-sm font-bold tracking-wide ${item.textGlow}`}>{item.revenue}</span>
                    </div>
                    
                    {/* Small Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                      {item.desc}
                    </p>

                    {/* Bottom Area - Metrics */}
                    <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-auto">
                      <div className="flex flex-col gap-1">
                        <Users className="w-4 h-4 text-gray-500 mb-1" />
                        <span className="text-[10px] text-gray-500 uppercase font-semibold">Lead Volume</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <Target className="w-4 h-4 text-gray-500 mb-1" />
                        <span className="text-[10px] text-gray-500 uppercase font-semibold">Conversion Rate</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <MapPin className="w-4 h-4 text-gray-500 mb-1" />
                        <span className="text-[10px] text-gray-500 uppercase font-semibold">Geographic Reach</span>
                      </div>
                    </div>
                    
                    {/* CTA Button Slides In */}
                    <div className="absolute inset-x-8 bottom-0 translate-y-full opacity-0 group-hover:-translate-y-6 group-hover:opacity-100 transition-all duration-300 z-30">
                       <Link to="/portfolio" className="w-full py-4 rounded-xl bg-white text-navy-deep font-bold text-sm shadow-xl flex items-center justify-center hover:bg-teal-400 transition-colors">
                         View Case Studies <ChevronRight className="w-4 h-4 ml-1" />
                       </Link>
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Social Proof Strip */}
        <div className="w-full mt-32 mb-20">
          <h4 className="text-center text-[10px] font-bold uppercase tracking-[3px] text-gray-500 mb-10">Businesses We Help Grow</h4>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 max-w-5xl mx-auto">
            {clients.map(client => (
              <span key={client} className="text-sm font-[800] tracking-widest text-white/30 grayscale hover:grayscale-0 hover:text-white transition-all duration-300 font-sans cursor-pointer whitespace-nowrap">
                {client}
              </span>
            ))}
          </div>
        </div>

        {/* Case Study Preview */}
        <div className="w-full max-w-5xl mb-32">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold">Results That Matter</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {miniCaseStudies.map((study, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className={`bg-white/[0.02] border ${study.borderColor} p-6 rounded-2xl backdrop-blur-sm`}
              >
                <div className="text-xs font-bold uppercase tracking-widest text-white mb-6 bg-white/5 py-1.5 px-3 rounded inline-block">{study.client}</div>
                <div className="space-y-4">
                  {study.stats.map((stat, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
                      <span className="text-lg font-bold text-teal-400">{stat.val}</span>
                      <span className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industry Match Quiz */}
        <div className="w-full max-w-3xl mb-32 glass-panel-heavy p-8 md:p-12 rounded-[24px] border-white/10 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00F2FE]/5 to-transparent pointer-events-none" />
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 relative z-10">Find The Best Growth Strategy For Your Business</h3>
          
          <div className="space-y-6 relative z-10 text-left">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs text-gray-400 uppercase tracking-wider font-semibold ml-1">What industry are you in?</label>
                <select className="w-full bg-[#060B14] border border-white/10 rounded-xl px-4 py-4 text-sm text-white focus:outline-none focus:border-teal-400 transition-colors appearance-none cursor-pointer">
                  <option value="">Select Industry...</option>
                  <option value="construction">Construction & Building</option>
                  <option value="automotive">Automotive</option>
                  <option value="cleaning">Commercial Cleaning</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="trades">Local Trades</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs text-gray-400 uppercase tracking-wider font-semibold ml-1">How many leads per month?</label>
                <select className="w-full bg-[#060B14] border border-white/10 rounded-xl px-4 py-4 text-sm text-white focus:outline-none focus:border-teal-400 transition-colors appearance-none cursor-pointer">
                  <option value="">Select Volume...</option>
                  <option value="0-10">0 - 10 Leads</option>
                  <option value="11-50">11 - 50 Leads</option>
                  <option value="51-100">51 - 100 Leads</option>
                  <option value="100+">100+ Leads</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-3">
               <label className="text-xs text-gray-400 uppercase tracking-wider font-semibold ml-1">What is your biggest challenge?</label>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                 {['More Leads', 'More Sales', 'More Reviews', 'More Visibility'].map(challenge => (
                   <div key={challenge} className="bg-white/5 border border-white/10 rounded-lg p-3 text-center text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer font-medium">
                     {challenge}
                   </div>
                 ))}
               </div>
            </div>

            <div className="pt-6">
               <button className="w-full btn-primary !py-5 !text-base shadow-[0_0_30px_rgba(45,212,191,0.2)]">
                 Generate My Growth Plan
               </button>
            </div>
          </div>
        </div>

        {/* Section Closer / Premium CTA Panel */}
        <div className="w-full max-w-5xl rounded-[32px] bg-gradient-to-br from-[#060B14] to-[#0A1120] border border-white/10 p-10 md:p-16 flex flex-col items-center text-center relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
           <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 blur-[80px]" />
           
           <h3 className="text-3xl md:text-5xl font-semibold mb-6 relative z-10 max-w-2xl leading-tight">
             Ready To See What's Possible In Your Industry?
           </h3>
           <p className="text-lg text-gray-300 opacity-80 mb-10 relative z-10 max-w-2xl font-sans">
             Book a free strategy session and discover how Varni Digital can build a customised growth system for your business.
           </p>

           <div className="flex flex-col sm:flex-row gap-6 relative z-10 w-full sm:w-auto justify-center">
              <a href="/contact" className="btn-primary !px-10 flex text-center justify-center">BOOK A FREE STRATEGY CALL</a>
              <Link to="/portfolio" className="px-10 py-4 inline-flex items-center justify-center bg-transparent border border-white/20 hover:border-white/40 text-white font-[800] text-sm uppercase tracking-widest rounded transition-all">VIEW INDUSTRY CASE STUDIES</Link>
           </div>

           <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-12 relative z-10">
              {['Australia Wide', 'No Lock-In Contracts', 'Transparent Reporting', 'Strategy-First Approach'].map(trust => (
                 <div key={trust} className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-teal-400" />
                    {trust}
                 </div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
}
