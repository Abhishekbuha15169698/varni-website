import { motion } from 'motion/react';
import { CheckCircle2, Instagram, Facebook, Linkedin, Play, Bell, Calendar, TrendingUp, Users, MessageSquare } from 'lucide-react';

const inclusions = [
  { title: "Content Strategy & Planning", desc: "Customised content plan designed around your business goals, target audience, and industry." },
  { title: "Professional Content Creation", desc: "High-quality graphics, carousel posts, reels, and video content to capture attention." },
  { title: "Social Media Management", desc: "Complete management of your Facebook, Instagram, LinkedIn, and other platforms." },
  { title: "Captions & SEO Optimisation", desc: "Compelling captions, strategic hashtags, and local SEO-focused content for visibility." },
  { title: "Reels & Short-Form Video Marketing", desc: "Engaging short-form videos designed to increase reach and showcase your business." },
  { title: "Brand Positioning", desc: "Build authority with content highlighting your expertise, projects, and success stories." },
  { title: "Community Engagement", desc: "Responding to comments, messages, and interactions to strengthen relationships." },
  { title: "Monthly Performance Reporting", desc: "Track growth, engagement, reach, enquiries, and overall performance with clear reporting." }
];

const benefits = [
  "Increase brand awareness",
  "Build trust with potential customers",
  "Stay visible in your local market",
  "Generate consistent enquiries",
  "Showcase your work and results",
  "Strengthen customer relationships",
  "Support your Google and SEO efforts",
  "Create long-term business growth"
];

const industries = [
  "Construction Companies",
  "Automotive Workshops",
  "Cleaning Businesses",
  "Trades & Contractors",
  "Healthcare Providers",
  "Restaurants & Cafes",
  "Real Estate Professionals",
  "Local Service Businesses"
];

const processSteps = [
  { num: "01", title: "Strategy", desc: "We analyse your business, competitors, and audience." },
  { num: "02", title: "Content Creation", desc: "We create engaging content tailored to your brand." },
  { num: "03", title: "Publishing & Management", desc: "Content is scheduled and managed consistently." },
  { num: "04", title: "Optimisation", desc: "Performance is reviewed and refined to improve results." },
  { num: "05", title: "Growth", desc: "We focus on building trust, visibility, and lead generation over time." }
];

export default function SocialMediaMarketing() {
  return (
    <section className="py-24 bg-navy-light/40 relative z-10 border-t border-white/5 overflow-hidden">
      {/* Ambient backgrounds */}
      <div className="absolute top-0 right-0 w-full h-[800px] bg-gradient-to-b from-teal-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 -left-[20%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Background Icons */}
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }} 
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-[15%] left-[5%] text-teal-500/20"
      >
        <Instagram className="w-32 h-32" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 30, 0], opacity: [0.1, 0.2, 0.1] }} 
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
        className="absolute top-[40%] right-[5%] text-blue-500/20"
      >
        <Facebook className="w-48 h-48" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="badge-primary mb-6">Organic Growth Ecosystem</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
            Social Media Marketing That Builds <span className="italic text-teal-400">Trust and Generates Leads</span>
          </h2>
          <p className="text-xl text-gray-300 opacity-80 mb-6 font-sans">
            Grow Your Business With Strategic Social Media Marketing
          </p>
          <p className="text-lg text-gray-400 leading-relaxed font-sans">
            Posting content is easy. Building a social media presence that attracts customers, generates enquiries, and strengthens your brand requires a strategy. At Varni Digital & Marketing Solutions, we help Australian businesses create consistent, professional, and engaging social media content that keeps them visible, builds trust, and turns followers into customers.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Side: Visuals & Mockups (Sticky) */}
          <div className="lg:col-span-5 relative lg:sticky lg:top-32 h-auto lg:h-[800px] flex items-center justify-center perspective-1000">
            {/* Mockups Container */}
            <div className="relative w-full max-w-md aspect-[3/4]">
              {/* LinkedIn Page Mockup */}
              <motion.div 
                initial={{ opacity: 0, x: -50, y: 50, rotateY: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 top-[20%] left-[-10%] glass-panel rounded-2xl border-white/10 shadow-2xl overflow-hidden bg-[#0a1120]"
              >
                <div className="h-16 bg-[#0077b5]/20 flex items-center px-4 border-b border-[#0077b5]/30">
                  <Linkedin className="w-6 h-6 text-[#0077b5]" />
                  <div className="ml-3 h-3 w-24 rounded bg-white/20" />
                </div>
                <div className="p-4 space-y-4">
                  <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 rounded bg-white/10" />
                    <div className="space-y-2 flex-1">
                      <div className="h-2 w-1/2 rounded bg-white/20" />
                      <div className="h-2 w-1/3 rounded bg-white/10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full rounded bg-white/10" />
                    <div className="h-2 w-5/6 rounded bg-white/10" />
                    <div className="h-2 w-4/6 rounded bg-white/10" />
                  </div>
                  <div className="h-32 rounded bg-white/5 border border-white/5" />
                </div>
              </motion.div>

              {/* Facebook Page Mockup */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute inset-0 top-[10%] right-[-5%] glass-panel rounded-2xl border-white/10 shadow-2xl overflow-hidden bg-[#0A1120] z-10"
              >
                <div className="h-20 bg-gradient-to-b from-blue-600/30 to-[#0A1120] border-b border-white/5 relative">
                  <div className="absolute -bottom-6 left-4 w-16 h-16 rounded-full border-4 border-[#0A1120] bg-blue-500/20 flex items-center justify-center">
                    <Facebook className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <div className="p-4 pt-8 space-y-4">
                  <div className="space-y-2 mt-2">
                    <div className="h-3 w-1/2 rounded bg-white/20" />
                    <div className="h-2 w-1/3 rounded bg-gray-500" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-8 flex-1 rounded bg-blue-500/20 border border-blue-500/30" />
                    <div className="h-8 flex-1 rounded bg-white/5" />
                  </div>
                  <div className="h-24 rounded bg-white/5 border border-white/5" />
                </div>
              </motion.div>

              {/* Instagram Profile Mockup */}
              <motion.div 
                initial={{ opacity: 0, x: 50, y: -20, rotateY: -10 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute inset-0 bottom-[10%] left-[5%] glass-panel-heavy rounded-3xl border-white/20 shadow-3xl overflow-hidden bg-navy-deep z-20"
              >
                <div className="flex items-center justify-center py-4 border-b border-white/10">
                  <div className="h-3 w-24 rounded bg-white/20" />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 p-0.5">
                    <div className="w-full h-full rounded-full bg-navy-deep border-2 border-navy-deep flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-center"><div className="text-sm font-bold text-white">412</div><div className="text-[10px] text-gray-500">Posts</div></div>
                    <div className="text-center"><div className="text-sm font-bold text-white">18.5k</div><div className="text-[10px] text-gray-500">Followers</div></div>
                    <div className="text-center"><div className="text-sm font-bold text-white">24</div><div className="text-[10px] text-gray-500">Following</div></div>
                  </div>
                </div>
                <div className="px-5 space-y-1 mt-1">
                  <div className="h-2 w-1/3 rounded bg-white/20" />
                  <div className="h-2 w-2/3 rounded bg-gray-500" />
                  <div className="h-2 w-1/2 rounded bg-gray-500" />
                </div>
                <div className="grid grid-cols-3 gap-1 mt-6 p-1">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="aspect-square bg-white/5 rounded-sm relative group overflow-hidden">
                      {i % 2 === 0 && <Play className="w-4 h-4 absolute top-1 right-1 text-white/50" />}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Floating Cards (Right Side & Around) */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[0%] -right-[20%] glass-panel p-3 rounded-xl z-30 flex items-center gap-3 backdrop-blur-xl border-teal-500/20"
              >
                <div className="bg-teal-500/20 p-2 rounded text-teal-400"><TrendingUp className="w-4 h-4" /></div>
                <div>
                  <div className="text-lg font-bold text-white">+124% Reach</div>
                  <div className="text-[10px] text-gray-400">This Month</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[35%] -left-[30%] glass-panel p-3 rounded-xl z-30 flex items-center gap-3 backdrop-blur-xl border-blue-500/20"
              >
                <div className="bg-blue-500/20 p-2 rounded text-blue-400"><MessageSquare className="w-4 h-4" /></div>
                <div>
                  <div className="text-lg font-bold text-white">42 New Leads</div>
                  <div className="text-[10px] text-gray-400">From DMs & Forms</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[20%] -right-[25%] glass-panel p-3 rounded-xl z-30 flex items-center gap-3 backdrop-blur-xl border-purple-500/20"
              >
                <div className="bg-purple-500/20 p-2 rounded text-purple-400"><Users className="w-4 h-4" /></div>
                <div>
                  <div className="text-lg font-bold text-white">+67% Engagement</div>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[35%] left-[10%] bg-red-500 border border-red-400 text-white p-2 rounded-lg z-40 flex items-center gap-2 shadow-[0_0_20px_rgba(239,68,68,0.4)]"
              >
                <Bell className="w-4 h-4 fill-white" />
                <span className="text-xs font-bold">5-Star Review Added</span>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Content Sections */}
          <div className="lg:col-span-7 space-y-24">
            
            {/* What's Included */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 border-b border-white/10 pb-4">What's Included</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {inclusions.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="glass-panel p-6 rounded-2xl hover:border-teal-500/30 transition-colors"
                  >
                    <h4 className="text-base font-bold text-white mb-2 tracking-wide">{item.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed font-sans">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Why It Matters */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 border-b border-white/10 pb-4">Why Social Media Marketing Matters</h3>
              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
                {benefits.map((benefit, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="shrink-0 w-6 h-6 rounded-full bg-teal-500/10 flex items-center justify-center border border-teal-500/30">
                      <CheckCircle2 className="w-4 h-4 text-teal-400" />
                    </div>
                    <span className="text-sm font-medium text-gray-300 font-sans">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 border-b border-white/10 pb-4">Industries We Work With</h3>
              <div className="flex flex-wrap gap-3">
                {industries.map((ind, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-full glass-panel text-xs font-semibold text-teal-300 border-teal-500/20 tracking-wide uppercase">
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            {/* Our Process */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 border-b border-white/10 pb-4">Our Process</h3>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-white/10 before:via-teal-500/50 before:to-transparent">
                {processSteps.map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-navy-deep bg-teal-500/20 text-teal-400 font-bold text-xs shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(20,184,166,0.2)]">
                      {step.num}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-5 rounded-2xl hover:border-teal-500/30 transition-colors">
                      <h4 className="text-base font-bold text-white mb-1">{step.title}</h4>
                      <p className="text-sm text-gray-400 font-sans">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Results Focused Conclusion */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-panel-heavy p-8 md:p-10 rounded-2xl border-teal-500/20 relative overflow-hidden text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-teal-500/10 to-transparent" />
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 relative z-10">Results-Focused Social Media Marketing</h3>
              <p className="text-gray-300 font-sans mb-6 relative z-10 leading-relaxed">
                We don't just post content. We build a social media presence that helps your business attract attention, build credibility, and generate real opportunities.
              </p>
              <p className="text-lg font-bold text-teal-400 relative z-10">
                Let Varni Digital help turn your social media into a powerful marketing asset.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
