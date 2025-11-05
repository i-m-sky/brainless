import { useState } from "react";
import { Phone, MessageCircle, Calendar } from "lucide-react";

export function FloatingCTA({
  onEnrollClick,
  onCall,
  onWhatsApp,
  onWhatsApp2,
}) {
  const [showFloatingMenu, setShowFloatingMenu] = useState(false);

  return (
    <>
      {/* Sticky Floating CTA Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        {/* Main CTA Button */}
        <div className="relative">
          <button
            onClick={() => setShowFloatingMenu(!showFloatingMenu)}
            className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center font-black text-lg hover:scale-110 transition-all duration-300 animate-pulse"
          >
            🎯
          </button>

          {/* Floating Menu Options */}
          {showFloatingMenu && (
            <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 w-48">
              <div className="space-y-3">
                <button
                  onClick={() => {
                    onEnrollClick();
                    setShowFloatingMenu(false);
                  }}
                  className="w-full bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-white px-4 py-3 rounded-xl font-bold hover:shadow-lg transition text-sm"
                >
                  🎯 Enroll Now
                </button>
                <button
                  onClick={() => {
                    onCall();
                    setShowFloatingMenu(false);
                  }}
                  className="w-full bg-[#f59e0b] text-white px-4 py-3 rounded-xl font-bold hover:bg-[#d97706] transition text-sm flex items-center gap-2 justify-center"
                >
                  <Phone className="w-4 h-4" />📞 Call Now
                </button>
                <div className="grid grid-cols-1 gap-2">
                  <button
                    onClick={() => {
                      onWhatsApp();
                      setShowFloatingMenu(false);
                    }}
                    className="w-full bg-green-500 text-white px-4 py-3 rounded-xl font-bold hover:bg-green-600 transition text-sm flex items-center gap-2 justify-center"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp 1
                  </button>
                  <button
                    onClick={() => {
                      onWhatsApp2();
                      setShowFloatingMenu(false);
                    }}
                    className="w-full bg-green-600 text-white px-4 py-3 rounded-xl font-bold hover:bg-green-700 transition text-sm flex items-center gap-2 justify-center"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp 2
                  </button>
                </div>
                <button
                  onClick={() => {
                    onEnrollClick();
                    setShowFloatingMenu(false);
                  }}
                  className="w-full border-2 border-[#fbbf24] text-[#fbbf24] px-4 py-3 rounded-xl font-bold hover:bg-[#fbbf24] hover:text-white transition text-sm flex items-center gap-2 justify-center"
                >
                  <Calendar className="w-4 h-4" />
                  Free Consultation
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Urgency Badge */}
        <div className="absolute -top-3 -left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
          25 Seats Only!
        </div>
      </div>

      {/* Overlay to close floating menu */}
      {showFloatingMenu && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setShowFloatingMenu(false)}
        ></div>
      )}
    </>
  );
}
