const clients = [
  "VARNI DIGITAL",
  "SHAKTI AUTOMOTIVE",
  "WONDROUS CONSTRUCTION",
  "DESTINY HOMES & CONSTRUCTION",
  "SCRUB N CLEAN",
  "OM AUTOMOTIVE",
  "ECO-SOLAR & GUTTER CLEANING",
  "WEISER'S CONTINENTAL BAKEHOUSE"
];

export default function ClientBrandWall() {
  return (
    <div className="py-8 border-t border-white/5 bg-navy-deep overflow-hidden flex relative z-10">
      <div className="absolute top-0 left-6 text-[11px] uppercase opacity-40 tracking-[2px] font-semibold flex items-center h-full z-30">
        Trusted by Australian Leaders
      </div>
      {/* Fade Edges */}
      <div className="absolute top-0 bottom-0 left-0 w-64 bg-gradient-to-r from-navy-deep to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-navy-deep to-transparent z-20 pointer-events-none" />

      {/* Marquee Content */}
      <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap opacity-40 grayscale font-bold text-sm ml-64">
        {[...clients, ...clients].map((client, idx) => (
          <div key={idx} className="mx-8 font-sans font-[700] tracking-wide flex items-center gap-16">
            {client}
          </div>
        ))}
      </div>
      
      {/* Duplicate for seamless looping if needed for wider screens */}
      <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap opacity-40 grayscale font-bold text-sm lg:hidden ml-64" aria-hidden="true">
        {[...clients, ...clients].map((client, idx) => (
          <div key={`${idx}-dup`} className="mx-8 font-sans font-[700] tracking-wide flex items-center gap-16">
            {client}
          </div>
        ))}
      </div>

    </div>
  );
}
