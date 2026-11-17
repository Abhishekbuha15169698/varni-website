import { motion } from 'motion/react';
import { MapPin, Star, Database } from 'lucide-react';

export default function BlueprintGrid() {
  return (
    <section id="framework" className="bg-[#030712] py-24 lg:py-32 2xl:py-48 relative overflow-hidden text-[#F9FAFB]">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[2800px] relative z-10">
        {/* Header */}
        <div className="max-w-5xl mx-auto text-center mb-20 2xl:mb-32">
          <div className="text-[#00F5D4] tracking-[0.2em] font-medium text-sm md:text-base 2xl:text-xl uppercase mb-6 flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-[#00F5D4]/50" />
            SYSTEM ARCHITECTURE // REVENUE INFRASTRUCTURE
            <span className="w-12 h-px bg-[#00F5D4]/50" />
          </div>
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl 2xl:text-[80px] leading-[1.1] mb-8 font-sans">
            The Anatomy of an Australian Growth Engine.
          </h2>
          <p className="text-[#9CA3AF] text-lg md:text-xl 2xl:text-[28px] max-w-[1400px] mx-auto leading-[1.65] font-light">
            Most agencies throw money at ads and hope something sticks. We deploy an interconnected, data-backed conversion ecosystem that systematically funnels high-intent local traffic into confirmed revenue.
          </p>
        </div>

        {/* 4 Core Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 2xl:gap-16">
          {/* Block 1 */}
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}} className="bg-[#0B1329] p-8 2xl:p-12 rounded-2xl flex flex-col items-start border border-white/5 hover:border-white/10 transition-colors">
            <div className="w-full flex justify-end mb-8 h-24 items-end relative">
              {/* Micro Visual */}
              <div className="absolute top-0 right-0 p-3 bg-white/5 rounded-xl border border-white/10 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00D2FF]" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-[#00D2FF] fill-[#00D2FF]" />)}
                </div>
              </div>
            </div>
            <h3 className="font-semibold text-xl 2xl:text-3xl mb-4 text-[#FFFFFF] leading-tight flex flex-col gap-2">
              <span className="text-[#00D2FF] text-sm md:text-base tracking-widest">01 /</span> High-Intent Funnel Activation
            </h3>
            <p className="text-[#F9FAFB] opacity-80 text-sm 2xl:text-xl leading-[1.6]">
              We sync Google Local Services Ads (LSAs), precision Google Search campaigns, and hyper-targeted Meta retargeting into a single pipeline. This captures buyers exactly when they are searching for service providers in their local Australian suburb.
            </p>
          </motion.div>

          {/* Block 2 */}
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.1}} className="bg-[#0B1329] p-8 2xl:p-12 rounded-2xl flex flex-col items-start border border-white/5 hover:border-white/10 transition-colors">
            <div className="w-full flex justify-end mb-8 h-24 items-end relative">
              {/* Micro Visual */}
              <div className="absolute top-0 right-0 p-4 bg-white/5 rounded-2xl border border-white/10 flex flex-col gap-2 w-32 border-b-0 rounded-b-none overflow-hidden">
                 <div className="w-3/4 h-6 bg-[#FF5A5F]/20 rounded-xl rounded-bl-none self-start" />
                 <div className="w-5/6 h-6 bg-white/20 rounded-xl rounded-br-none self-end" />
              </div>
            </div>
            <h3 className="font-semibold text-xl 2xl:text-3xl mb-4 text-[#FFFFFF] leading-tight flex flex-col gap-2">
              <span className="text-[#FF5A5F] text-sm md:text-base tracking-widest">02 /</span> The 90-Second Lead Capture
            </h3>
            <p className="text-[#F9FAFB] opacity-80 text-sm 2xl:text-xl leading-[1.6]">
              Moving at lightning-fast speed is critical. When an Australian prospect submits a form, our automated system engages them via a friendly, two-way conversational SMS within 90 seconds. This instantly books them onto your team's live calendar before they move on to call a competitor.
            </p>
          </motion.div>

          {/* Block 3 */}
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.2}} className="bg-[#0B1329] p-8 2xl:p-12 rounded-2xl flex flex-col items-start border border-white/5 hover:border-white/10 transition-colors">
            <div className="w-full flex justify-end mb-8 h-24 items-end relative">
              {/* Micro Visual */}
              <div className="absolute top-0 right-0 pt-4 px-4 bg-white/5 rounded-2xl border border-white/10 w-full h-full text-[#10B981] flex items-end overflow-hidden justify-between">
                 <span className="text-sm font-bold mb-2 ml-2">$AUD</span>
                 <svg className="w-24 h-16 self-end" viewBox="0 0 100 50" preserveAspectRatio="none">
                   <path d="M0,50 Q20,40 40,30 T80,10 L100,5" fill="none" stroke="currentColor" strokeWidth="3" />
                   <path d="M0,50 Q20,40 40,30 T80,10 L100,5 L100,50 Z" fill="currentColor" opacity="0.1" stroke="none" />
                 </svg>
              </div>
            </div>
            <h3 className="font-semibold text-xl 2xl:text-3xl mb-4 text-[#FFFFFF] leading-tight flex flex-col gap-2">
              <span className="text-[#10B981] text-sm md:text-base tracking-widest">03 /</span> Live $AUD Revenue Attribution
            </h3>
            <p className="text-[#F9FAFB] opacity-80 text-sm 2xl:text-xl leading-[1.6]">
              Say goodbye to confusing, automated monthly PDF reports filled with useless vanity metrics like "impressions" and "reach." You receive a dedicated, real-time ROI dashboard that matches every single dollar of ad spend directly to signed contracts, client bookings, and pipeline value.
            </p>
          </motion.div>

          {/* Block 4 */}
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.3}} className="bg-[#0B1329] p-8 2xl:p-12 rounded-2xl flex flex-col items-start border border-white/5 hover:border-white/10 transition-colors">
            <div className="w-full flex justify-end mb-8 h-24 items-end relative">
              {/* Micro Visual */}
              <div className="absolute top-0 right-0 w-32 h-20 flex items-center justify-between">
                 <Database className="w-10 h-10 text-white/40" />
                 <div className="h-0.5 w-6 bg-white/10 border border-white/5 border-dashed" />
                 <div className="w-10 h-10 rounded-full bg-[#A855F7]/20 border border-[#A855F7] flex flex-col items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                    <span className="text-[#A855F7] font-bold text-[10px]">DEAL</span>
                 </div>
              </div>
            </div>
            <h3 className="font-semibold text-xl 2xl:text-3xl mb-4 text-[#FFFFFF] leading-tight flex flex-col gap-2">
              <span className="text-[#A855F7] text-sm md:text-base tracking-widest">04 /</span> Database Reactivation Engines
            </h3>
            <p className="text-[#F9FAFB] opacity-80 text-sm 2xl:text-xl leading-[1.6]">
              Your most valuable asset is your existing list of past clients and old leads. We build targeted, automated reactivation campaigns that regularly re-engage your old database with seasonal offers or updates, generating consistent injections of revenue without spending an extra cent on new ads.
            </p>
          </motion.div>
        </div>

        {/* Bottom Closer */}
        <div className="mt-32 2xl:mt-48 text-center relative flex flex-col items-center">
           <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00F2FE] to-transparent opacity-40 mb-16" />
           <p className="text-[#F9FAFB] text-lg md:text-xl 2xl:text-2xl font-light italic opacity-80 mb-8 max-w-3xl">
             Every engine is custom-calibrated for your specific target market and geographic territory.
           </p>
           <a href="/contact" className="bg-[#00F5D4] text-[#030712] font-bold tracking-widest uppercase py-5 px-10 rounded text-sm 2xl:text-lg shadow-[0_0_20px_rgba(0,245,212,0.2)] hover:shadow-[0_0_40px_rgba(0,245,212,0.5)] transition-shadow duration-300 inline-block cursor-pointer">
             Lock In Your Territory Blueprint
           </a>
        </div>

      </div>
    </section>
  )
}
