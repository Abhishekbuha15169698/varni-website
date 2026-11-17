import { Check } from 'lucide-react';
import EnquiryForm from './EnquiryForm';

export default function FinalCTA() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-navy-deep">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto glass-panel-heavy p-8 md:p-16 rounded-[1rem] border border-teal-500/30 relative overflow-hidden">
          {/* Subtle sheen effect */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-300 to-transparent opacity-50" />
          
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight">
            Ready To Build A Predictable <span className="text-teal-400 italic">Growth System?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 opacity-80 mb-8 font-sans">
            More leads. More appointments. More revenue.
          </p>
          <div className="mt-2 pt-8 border-t border-white/10">
            <EnquiryForm compact />
          </div>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-gray-400">
            {[
              "No obligation",
              "15-minute consultation",
              "Australia-wide",
              "Actionable recommendations"
            ].map(item => (
              <div key={item} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
