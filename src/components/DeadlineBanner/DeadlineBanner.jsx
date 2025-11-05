import { AlertCircle } from "lucide-react";

export function DeadlineBanner({ daysLeft }) {
  return (
    <div className="fixed top-[72px] sm:top-[80px] md:top-[88px] left-0 right-0 z-40 bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white shadow-lg overflow-hidden">
      <div className="animate-pulse absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>

      <div className="relative z-10 py-2 sm:py-3">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          {/* Mobile Layout - Stacked */}
          <div className="block sm:hidden text-center space-y-1">
            <div className="flex items-center justify-center gap-2">
              <AlertCircle className="w-4 h-4 animate-pulse flex-shrink-0" />
              <div className="text-xs font-black tracking-wide">
                ⚡ LAST DATE: DEC 30, 2025 ⚡
              </div>
              <AlertCircle className="w-4 h-4 animate-pulse flex-shrink-0" />
            </div>
            <div className="text-xs font-bold">
              Only {daysLeft} Days • 25 Seats • 3 FREE Demo Classes
            </div>
          </div>

          {/* Desktop Layout - Single Line */}
          <div className="hidden sm:flex items-center justify-center gap-3 md:gap-4">
            <AlertCircle className="w-5 h-5 md:w-6 md:h-6 animate-pulse flex-shrink-0" />
            <div className="text-center">
              <div className="text-sm md:text-base lg:text-lg font-black tracking-wide">
                ⚡ LAST DATE TO CONFIRM: DEC 30, 2025 ⚡
              </div>
              <div className="text-xs md:text-sm lg:text-base font-bold">
                Only {daysLeft} Days Left • 25 Seats Only • 3 FREE Demo Classes
              </div>
            </div>
            <AlertCircle className="w-5 h-5 md:w-6 md:h-6 animate-pulse flex-shrink-0" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
