import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calculator } from 'lucide-react';

export default function ROICalculator() {
  const [revenue, setRevenue] = useState(50000);
  const [saleValue, setSaleValue] = useState(2500);
  const [leads, setLeads] = useState(100);
  const [conversion, setConversion] = useState(10);
  
  // Calculations
  const currentSales = Math.floor(leads * (conversion / 100));
  const currentRevenue = currentSales * saleValue;
  
  // Projected with Varni system (e.g. increase leads by 50%, conversion by 20% relative)
  const projectedLeads = Math.floor(leads * 1.5);
  const projectedConversion = conversion * 1.2;
  const projectedSales = Math.floor(projectedLeads * (projectedConversion / 100));
  const projectedRevenue = projectedSales * saleValue;
  
  const additionalRevenue = projectedRevenue - currentRevenue;
  const roi = currentRevenue > 0 ? ((additionalRevenue) / (currentRevenue * 0.1)) * 100 : 0; // Assuming 10% marketing spend of rev

  return (
    <section className="py-24 relative overflow-hidden bg-navy">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-green-500/10 rounded-2xl mb-6">
            <Calculator className="w-8 h-8 text-green-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Calculate Your Hidden Revenue</h2>
          <p className="text-xl text-gray-400">See exactly how much revenue you are leaving on the table without an optimized growth system.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Controls - Left Side */}
          <div className="lg:col-span-7 glass-panel-heavy p-8 md:p-10 rounded-3xl">
            <h3 className="text-xl font-bold mb-8 flex items-center">Current Metrics <span className="ml-3 h-px flex-1 bg-white/10 block"></span></h3>
            
            <div className="space-y-8">
              {/* Range 1 */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-300">Average Sale Value / LTV</label>
                  <span className="text-teal-400 font-mono font-bold">${saleValue.toLocaleString()}</span>
                </div>
                <input 
                  type="range" min="100" max="25000" step="100" 
                  value={saleValue} 
                  onChange={(e) => setSaleValue(Number(e.target.value))}
                  className="w-full accent-teal-500 bg-white/10 h-2 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Range 2 */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-300">Current Monthly Leads</label>
                  <span className="text-teal-400 font-mono font-bold">{leads}</span>
                </div>
                <input 
                  type="range" min="10" max="1000" step="10" 
                  value={leads} 
                  onChange={(e) => setLeads(Number(e.target.value))}
                  className="w-full accent-teal-500 bg-white/10 h-2 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Range 3 */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-300">Lead-to-Sale Conversion Rate</label>
                  <span className="text-teal-400 font-mono font-bold">{conversion}%</span>
                </div>
                <input 
                  type="range" min="1" max="50" step="1" 
                  value={conversion} 
                  onChange={(e) => setConversion(Number(e.target.value))}
                  className="w-full accent-teal-500 bg-white/10 h-2 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
            <p className="mt-8 text-xs text-gray-500 leading-relaxed">
              *Projections are based on average client results (50% increase in lead volume, 20% relative increase in conversion rate via automated nurturing). Actual results may vary.
            </p>
          </div>

          {/* Results dashboard - Right side */}
          <div className="lg:col-span-5 relative">
            <motion.div 
               className="sticky top-24 bg-[#0a1510] border border-green-500/20 p-8 md:p-10 rounded-3xl shadow-[0_0_50px_rgba(34,197,94,0.1)] h-full flex flex-col justify-center"
               animate={{ y: [0, -5, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <h3 className="text-sm uppercase tracking-widest text-green-500/70 font-semibold mb-6">Potential Output</h3>
              
              <div className="mb-8">
                <p className="text-gray-400 mb-1 text-sm">Monthly Revenue Increase</p>
                <div className="text-5xl md:text-6xl font-display font-bold text-green-400 tracking-tighter">
                  +${additionalRevenue.toLocaleString()}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                  <p className="text-[10px] uppercase text-gray-500 mb-1 font-semibold">New Monthly Leads</p>
                  <p className="text-2xl font-bold text-white">{projectedLeads}</p>
                  <p className="text-xs text-green-500 mt-1">+{projectedLeads - leads} extra</p>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                  <p className="text-[10px] uppercase text-gray-500 mb-1 font-semibold">New Monthly Sales</p>
                  <p className="text-2xl font-bold text-white">{projectedSales}</p>
                  <p className="text-xs text-green-500 mt-1">+{projectedSales - currentSales} extra</p>
                </div>
              </div>

              <button className="w-full py-4 rounded-xl bg-green-500 hover:bg-green-400 text-[#0a1510] font-bold text-lg transition-colors shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                Claim This Revenue
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
