import React from 'react';
import { CheckCircle, Coffee, Calendar, Wrench, Shield } from 'lucide-react';

export default function ShaktiFlyer() {
  return (
    <div className="w-full h-full flex bg-white font-sans text-[8px] sm:text-xs">
      {/* Panel 1 */}
      <div className="w-[33.33%] h-full bg-[#111111] text-white p-3 sm:p-5 flex flex-col justify-between border-r border-gray-800">
        <div>
           <h2 className="text-[#FBBF24] font-black text-2xl sm:text-4xl leading-[1.1] uppercase">Service<br/>Your Car</h2>
           <p className="text-white font-bold leading-tight mt-2 text-[10px] sm:text-sm">Cold Weather Can<br/>Damage Your Vehicle</p>
           <div className="bg-[#FBBF24] text-black font-bold text-[8px] sm:text-[10px] px-1.5 py-0.5 mt-2 inline-block">
             Don't wait for a breakdown.
           </div>
           
           <div className="mt-4 space-y-2">
             <div className="flex items-center gap-1.5 sm:gap-2">
               <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#FBBF24] shrink-0" />
               <p className="text-white font-bold text-[8px] sm:text-[11px]">FREE Vehicle Check</p>
             </div>
             <div className="flex items-center gap-1.5 sm:gap-2">
               <Coffee className="w-3 h-3 sm:w-4 sm:h-4 text-[#FBBF24] shrink-0" />
               <p className="text-white font-bold text-[8px] sm:text-[11px]">FREE Tea & Coffee</p>
             </div>
           </div>
        </div>
        
        <div className="mt-2 bg-black/60 p-2 sm:p-3 rounded-md border border-gray-700 w-full relative z-20">
           <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 sm:w-7 sm:h-7 text-[#FBBF24]" />
              <div>
                <p className="text-[#FBBF24] font-black text-[10px] sm:text-sm tracking-wide">2ND MAY 2026</p>
                <p className="text-white text-[6px] sm:text-[9px] font-semibold mt-0.5">FROM 9.00 AM ONWARDS</p>
              </div>
           </div>
        </div>
      </div>

      {/* Panel 2 */}
      <div className="w-[33.33%] h-full bg-white text-black p-2 sm:p-4 flex flex-col items-center border-r border-gray-200 justify-between">
         <div className="flex flex-col items-center pt-2">
           <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#111111] flex items-center justify-center mb-2 shadow-lg">
              <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-[#EA580C]" />
           </div>
           <p className="text-[6px] sm:text-[8px] font-bold tracking-widest text-center text-gray-800 uppercase">The Premium Dealer Alternative</p>
         </div>
         
         <div className="flex-1 w-full flex items-center justify-center py-2">
            <div className="w-4/5 h-20 sm:h-28 bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl border-b-4 border-gray-400 shadow-inner flex flex-col items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-black/5 flex items-center justify-center transition-all group-hover:scale-105 duration-500">
                    <span className="text-gray-500 text-[10px] sm:text-xs font-bold tracking-widest">BMW X7</span>
                </div>
            </div>
         </div>
         
         <div className="w-full flex-col items-center pb-2">
            <h3 className="text-[#EA580C] font-black text-lg sm:text-2xl pt-2 leading-[1.1] text-center tracking-tight">SAME QUALITY.<br/>MORE VALUE.</h3>
            <p className="text-center text-[7px] sm:text-[9px] mt-1.5 text-gray-600 font-semibold leading-tight">Keep your factory warranty without dealer prices.</p>
         </div>
      </div>

      {/* Panel 3 */}
      <div className="w-[33.33%] h-full bg-[#F8F9FA] text-black p-3 sm:p-5 flex flex-col relative overflow-hidden">
         <div className="mb-2">
            <h3 className="font-black text-xs sm:text-base leading-none text-[#111111] uppercase whitespace-nowrap">Shakti Automotive</h3>
            <p className="text-[6px] sm:text-[8px] tracking-[0.2em] text-[#EA580C] mt-1 font-bold">WORKSHOP SERVICES</p>
         </div>
         
         <div className="flex-1 flex flex-col justify-end relative z-10">
             <h2 className="font-black text-xl sm:text-[1.75rem] leading-[1.1] text-[#111111] mb-1">QUALITY<br/>CAR SERVICE.</h2>
             <p className="text-[7px] sm:text-[9px] text-gray-700 font-medium leading-tight mt-1 mb-3 pr-2">Dealer-level precision shouldn't carry a dealer price tag.</p>
             
             <div className="space-y-1.5 mb-3">
                 <div className="flex items-center gap-1.5">
                     <Shield className="w-3 h-3 text-[#111111]" />
                     <p className="text-[6px] sm:text-[8px] font-bold text-gray-800">GUARANTEED QUALITY</p>
                 </div>
                 <div className="flex items-center gap-1.5">
                     <CheckCircle className="w-3 h-3 text-[#111111]" />
                     <p className="text-[6px] sm:text-[8px] font-bold text-gray-800">INDEPENDENT PRICING</p>
                 </div>
             </div>
             
             <div className="bg-[#111111] text-white p-2 sm:p-2.5 rounded text-center mr-6">
                <p className="text-[#EA580C] font-black text-[8px] sm:text-[10px] tracking-wide">SECURE SLOT</p>
                <p className="text-[5px] sm:text-[7px] font-semibold tracking-widest mt-0.5 uppercase text-gray-300">Book Online</p>
             </div>
         </div>
         
         {/* Starts from Badge */}
         <div className="absolute right-2 top-1/2 -translate-y-[40%] w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full border-[3px] sm:border-[4px] border-[#EA580C] shadow-xl flex flex-col justify-center items-center z-20 hover:scale-110 transition-transform">
            <p className="text-[5px] sm:text-[6px] font-black text-gray-800 uppercase tracking-wider">From</p>
            <p className="text-[#EA580C] font-black text-sm sm:text-xl leading-none mt-0.5">$140</p>
         </div>
         
         {/* Aesthetic background accent */}
         <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-gray-200 rounded-full blur-2xl opacity-50 z-0 pointer-events-none"></div>
      </div>
    </div>
  );
}
