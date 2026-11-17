import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, TrendingUp, Search, Map, BarChart } from 'lucide-react';
import ecoSolarImage from '../../assets/images/eco_solar_gutter_cleaning_1781057552898.png';
import scrubNCleanImage from '../../assets/images/scrub_n_clean_no_logo_1781057900636.png';
import destinyHomesImage from '../../assets/images/destiny_homes_case_study_1781058144997.png';

import luxuryHomeImage from '../../assets/images/modern_luxury_home_exterior_1781058401082.png';
import shaktiAutomotiveImage from '../../assets/images/busy_mechanic_workshop_1781058813437.png';

const TABS = ["ALL", "AUTOMOTIVE", "CONSTRUCTION", "CLEANING", "TRADES"];

const CASE_STUDIES = [
  {
    id: 1,
    title: "Shakti Automotive",
    category: "AUTOMOTIVE",
    image: shaktiAutomotiveImage,
    metrics: [
      { label: "Booking Increase", value: "+54%" },
      { label: "Local Search Visibility", value: "+78%" },
      { label: "Repeat Customer Rate", value: "+32%" }
    ],
    technologies: ["Google Ads", "Meta Ads", "CRM Automation", "Google Business Profile", "Review Generation"],
    description: "🚗 Car Service from $140. 🔧 Premium Oil + Full Vehicle Check. 🛠 Battery • Tyres • Brakes. 📍 Geelong. 👇 Book Your Service."
  },
  {
    id: 2,
    title: "Wondrous Construction",
    category: "CONSTRUCTION",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    metrics: [
      { label: "Pipeline", value: "$1.2M" },
      { label: "Qualified Enquiries", value: "27" },
      { label: "Tender Invitations", value: "18" }
    ],
    technologies: ["Google Search", "LinkedIn Targeting", "Project SEO", "Retargeting"],
    description: "Shifted positioning from price-competing contractor to premium builder."
  },
  {
    id: 3,
    title: "Destiny Homes",
    category: "CONSTRUCTION",
    image: luxuryHomeImage,
    metrics: [
      { label: "Qualified Leads", value: "+84%" },
      { label: "Engagement", value: "+65%" },
      { label: "Consultation Requests", value: "+41%" }
    ],
    technologies: ["Meta Lead Forms", "Email Nurture", "Visualization Tools", "CRM Automation", "Audience Targeting", "Retargeting Campaigns"],
    description: "Luxury Buyers Don't Start With Builders. They Start With Visibility. We helped Destiny Homes attract premium home buyers earlier in the decision-making journey, creating stronger engagement and more qualified enquiries."
  },
  {
    id: 4,
    title: "Scrub N Clean",
    category: "CLEANING",
    image: scrubNCleanImage,
    metrics: [
      { label: "Recurring Contract Value", value: "$210k" },
      { label: "Commercial Leads", value: "45/mo" },
      { label: "Repeat Client Growth", value: "+88%" }
    ],
    technologies: ["Google Ads", "LinkedIn Outreach", "Automated Quoting", "CRM"],
    description: "Sparkle Without The Stress! Residential, Commercial, Builders & Industrial Cleaning. Your Perfect Cleaners, Every Time."
  },
  {
    id: 5,
    title: "Eco-Solar and Gutter clean",
    category: "CLEANING",
    image: ecoSolarImage,
    metrics: [
      { label: "ROAS", value: "4.2x" },
      { label: "Jobs Booked", value: "310+" },
      { label: "Lead Conversion", value: "89%" }
    ],
    technologies: ["Google Local Services", "Landing Page CRO", "Sales CRM"],
    description: "Eco-friendly Solar & Gutter Cleaning. Solar | Gutter | Pressure | Bird Proofing. Keeping homes efficient & protected. 📞 +61 470 453 784"
  }
];

export default function CaseStudyShowcase() {
  const [activeTab, setActiveTab] = useState("ALL");

  const filteredStudies = activeTab === "ALL" 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(study => study.category === activeTab);

  return (
    <section className="bg-[#030712] py-20 relative z-10 text-white">
      <div className="container mx-auto px-6">
        
        {/* Filter System */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-8 py-4 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 ${
                activeTab === tab 
                  ? "text-teal-400" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {/* Premium Segmented Background */}
              {activeTab === tab && (
                <motion.div 
                  layoutId="activeTabBadge"
                  className="absolute inset-0 bg-teal-500/10 border border-teal-500/30 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-white/5 rounded-full opacity-0 hover:opacity-100 transition-opacity scale-95 hover:scale-100" />
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        {/* Case Studies Grid & Layouts */}
        <div className="space-y-32">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study, idx) => (
              <motion.div
                key={study.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="w-full"
              >
                {/* 70/30 Split Layout for Cards */}
                <div className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                  
                  {/* Left: Image (70%) */}
                  <div className="w-full lg:w-[65%] relative group rounded-2xl overflow-hidden border border-white/10">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-[500px] object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Floating Element specific to Eco-Solar or Om Automotive style request */}
                    {study.title === 'Eco-Solar and Gutter clean' && (
                       <div className="absolute bottom-6 right-6 z-20 bg-[#0B1329]/90 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-3">
                         <Map className="w-5 h-5 text-teal-400" />
                         <div>
                           <p className="text-xs text-gray-400 uppercase tracking-widest">Service Areas</p>
                           <p className="text-sm font-semibold">Brisbane & Surrounds</p>
                         </div>
                       </div>
                    )}
                    {study.title === 'Shakti Automotive' && (
                       <div className="absolute top-6 left-6 z-20 bg-[#0B1329]/90 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-3">
                         <div className="flex flex-col items-center">
                            <span className="text-xs text-gray-400">Google Search</span>
                            <div className="h-4 w-px bg-white/20 my-1" />
                            <span className="text-xs text-gray-400">Landing Page</span>
                            <div className="h-4 w-px bg-white/20 my-1" />
                            <span className="text-xs text-teal-400 font-bold">Workshop Visit</span>
                         </div>
                       </div>
                    )}
                  </div>

                  {/* Right: Metrics Dashboard (30%) */}
                  <div className="w-full lg:w-[35%] flex flex-col justify-center">
                    <h3 className="text-3xl lg:text-4xl font-bold mb-6">{study.title}</h3>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                      {study.description}
                    </p>

                    {/* Results Dashboard */}
                    <div className="bg-[#0B1329] border border-white/5 rounded-2xl p-6 mb-8">
                       <h4 className="text-xs uppercase tracking-widest text-teal-400 font-semibold mb-6 flex items-center gap-2">
                         <BarChart className="w-4 h-4" /> Results Achieved
                       </h4>
                       <div className="space-y-6">
                         {study.metrics.map((metric, i) => (
                           <div key={i} className="flex justify-between items-end border-b border-white/5 pb-3">
                             <span className="text-gray-400 text-sm">{metric.label}</span>
                             <span className="text-2xl font-bold text-white">{metric.value}</span>
                           </div>
                         ))}
                       </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-8">
                      <h4 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map(tech => (
                          <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors uppercase tracking-widest text-sm font-semibold group cursor-pointer w-fit">
                      View Full Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </button>

                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
