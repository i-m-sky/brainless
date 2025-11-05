import { ArrowRight } from "lucide-react";

const subjects = [
  {
    subject: "Mathematics",
    description: "Algebra, Geometry, Calculus, Statistics & more",
    icon: "📐",
  },
  {
    subject: "Physics",
    description: "Mechanics, Thermodynamics, Electromagnetism & Optics",
    icon: "⚛️",
  },
  {
    subject: "Chemistry",
    description: "Organic, Inorganic, Physical Chemistry & Reactions",
    icon: "🧪",
  },
];

export function SubjectsSection({ onEnrollClick }) {
  return (
    <div className="py-24 px-6 bg-gradient-to-br from-[#dc7700] via-[#b45309] to-[#92400e] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-2xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full mb-8 animate-bounce border-2 border-white shadow-2xl">
            <span className="text-[#fbbf24]">✨</span>
            <span className="font-bold text-sm tracking-wide">
              PREMIUM SSC & HSC COACHING
            </span>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative animate-pulse">
              <img
                src="https://ucarecdn.com/09b2c08b-6123-48d3-a7a6-24e8fba297b8/-/format/auto/"
                alt="BrainEdify"
                className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-full border-4 border-white shadow-2xl"
                style={{ filter: "brightness(1.3) contrast(1.3)" }}
              />
              <div className="absolute inset-0 bg-white bg-opacity-30 rounded-full animate-ping"></div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-4 border-white rounded-3xl p-10 mb-10 inline-block transform hover:scale-105 transition-transform duration-300 shadow-2xl">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-3 drop-shadow-2xl">
              Master
            </h2>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-3 drop-shadow-2xl">
              Science
            </h2>
            <h2 className="text-5xl md:text-7xl font-black text-[#fbbf24] drop-shadow-2xl">
              with Excellence
            </h2>
          </div>

          <p
            className="text-2xl md:text-3xl text-white font-bold max-w-4xl mx-auto leading-relaxed"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
          >
            Complete SSC & HSC Science coaching covering Math, Physics, and
            Chemistry with personalized attention from experienced instructors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {subjects.map((subject, idx) => (
            <div
              key={idx}
              className="subject-card bg-white rounded-3xl p-10 border-4 border-white hover:border-slate-800 transition-all duration-500 shadow-2xl hover:shadow-3xl group"
              style={{
                animationDelay: `${idx * 0.2}s`,
              }}
            >
              <div className="subject-icon text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                {subject.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-[#dc7700] transition-colors">
                {subject.subject}
              </h3>
              <p className="text-slate-600 mb-6 group-hover:text-slate-800 transition-colors font-medium">
                {subject.description}
              </p>
              <button
                onClick={onEnrollClick}
                className="text-[#dc7700] font-black flex items-center gap-2 hover:gap-3 transition-all duration-300 group-hover:text-[#92400e]"
              >
                Learn More{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
