export function TrainerCard({ daysLeft }) {
  return (
    <div className="relative">
      <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-[#fbbf24]/20 transform hover:scale-105 transition-transform duration-500">
        {/* Clean Trainer Photo - Optimized for Desktop/Mobile */}
        <div className="relative">
          <img
            src="https://ucarecdn.com/7af65915-8b99-4a13-9431-977d2fd6ad63/-/format/auto/"
            alt="Md. Robin Jamal - BrainEdify Founder"
            className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover object-top rounded-2xl mb-6 shadow-lg"
          />
        </div>

        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
            Md. Robin Jamal
          </h3>
          <p className="text-[#f59e0b] font-semibold mb-4 text-base sm:text-lg">
            CEO & Lead Trainer
          </p>

          {/* Professional Certifications - Mobile Friendly */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full font-bold text-xs sm:text-sm">
              ✅ CERTIFIED
            </div>
            <div className="bg-green-100 text-green-800 px-3 py-2 rounded-full font-bold text-xs sm:text-sm">
              🎯 IELTS Band 7
            </div>
          </div>

          <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold text-xs sm:text-sm inline-block">
            ✨ 3 FREE Demo Classes
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="absolute -top-6 -right-6 bg-[#fbbf24] text-white p-4 rounded-2xl shadow-xl animate-bounce">
        <div className="text-center">
          <div className="text-2xl font-black">
            {25 - Math.floor(Math.random() * 8)}
          </div>
          <div className="text-xs font-semibold">Seats Left</div>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-6 bg-[#f59e0b] text-white p-4 rounded-2xl shadow-xl">
        <div className="text-center">
          <div className="text-2xl font-black">{daysLeft}</div>
          <div className="text-xs font-semibold">Days Left</div>
        </div>
      </div>
    </div>
  );
}
