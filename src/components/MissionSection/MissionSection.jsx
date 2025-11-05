export function MissionSection() {
  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmYmJmMjQiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
          Our Mission
        </h2>
        <blockquote className="text-2xl md:text-3xl text-white/90 font-bold leading-relaxed max-w-4xl mx-auto mb-8">
          "Education breaks barriers and creates endless opportunities. We
          believe every student deserves personalized attention to unlock their
          true potential."
        </blockquote>
        <div className="flex items-center justify-center gap-4">
          <div className="w-16 h-1 bg-[#fbbf24] rounded"></div>
          <span className="text-[#fbbf24] font-black text-lg">BrainEdify</span>
          <div className="w-16 h-1 bg-[#fbbf24] rounded"></div>
        </div>
      </div>
    </div>
  );
}
