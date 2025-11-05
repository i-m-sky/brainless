import { MessageCircle } from "lucide-react";

export function MidPageCTA({ daysLeft, onEnrollClick, onWhatsApp }) {
  return (
    <div className="py-16 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
          Ready to Excel in Science?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Don't miss out! Only {daysLeft} days left to secure your spot.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onEnrollClick}
            className="bg-white text-[#f59e0b] px-8 py-4 rounded-2xl font-black text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            🎯 Enroll Now
          </button>
          <button
            onClick={onWhatsApp}
            className="bg-green-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-600 transition flex items-center gap-2 justify-center"
          >
            <MessageCircle className="w-6 h-6" />
            Quick Chat
          </button>
        </div>
      </div>
    </div>
  );
}
