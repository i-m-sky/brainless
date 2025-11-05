export function CTASection({ onEnroll }) {
  return (
    <div className="py-16 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
          Ready to Start Your Academic Journey?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join BrainEdify today and experience personalized learning like never
          before!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onEnroll}
            className="bg-white text-[#f59e0b] px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            🎯 Enroll Now - Get 3 FREE Demo Classes!
          </button>
        </div>

        <div className="mt-8 text-white/90 text-sm">
          <p>💎 Limited to 25 students only • 📅 Classes start January 15th</p>
        </div>
      </div>
    </div>
  );
}
