import { Phone, CheckCircle, Star, Users, BookOpen } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Complete Curriculum",
    desc: "Full SSC & HSC Science coverage with all topics thoroughly explained",
  },
  {
    icon: Users,
    title: "Small Batches",
    desc: "Limited students per class ensures individual attention and mentoring",
  },
  {
    icon: Star,
    title: "Expert Teachers",
    desc: "Learn from experienced educators with proven teaching track records",
  },
  {
    icon: CheckCircle,
    title: "Proven Results",
    desc: "95% pass rate with students consistently improving their grades",
  },
  {
    icon: Phone,
    title: "24/7 Support",
    desc: "Get help whenever needed through multiple communication channels",
  },
  {
    icon: BookOpen,
    title: "Flexible Learning",
    desc: "Study materials tailored to your learning pace and style",
  },
];

export function FeaturesSection() {
  return (
    <div
      id="features"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
            ✨ Why Choose <span className="text-[#fbbf24]">BrainEdify</span>?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Excellence in education through proven teaching methods and
            personalized attention for every student
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="feature-card bg-gradient-to-br from-[#f8fafb] to-white border-2 border-[#1e40af] border-opacity-10 rounded-2xl p-6 sm:p-8 hover:border-[#fbbf24] hover:border-opacity-50 transition-all duration-500 group cursor-pointer relative overflow-hidden"
              >
                {/* Card Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#fbbf24]/5 to-[#f59e0b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                {/* Icon Container */}
                <div className="feature-icon relative z-10 w-14 h-14 bg-gradient-to-br from-[#1e40af] to-[#2563eb] rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-gradient-to-br group-hover:from-[#fbbf24] group-hover:to-[#f59e0b] transition-all duration-500 shadow-lg group-hover:shadow-2xl">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-2 sm:mb-3 group-hover:text-[#1e40af] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>

                {/* Floating Particles Effect */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#fbbf24] rounded-full animate-ping"></div>
                  <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#f59e0b] rounded-full animate-ping animation-delay-200"></div>
                  <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-blue-400 rounded-full animate-ping animation-delay-400"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 sm:mt-20 text-center">
          <p className="text-lg sm:text-xl font-semibold text-gray-800 mb-6">
            🏆 Trusted by Students & Parents Across Bangladesh
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm sm:text-base text-gray-600">
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm border border-gray-100">
              <span className="text-green-600 font-bold">✓</span>
              <span>500+ Happy Students</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm border border-gray-100">
              <span className="text-blue-600 font-bold">★</span>
              <span>4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm border border-gray-100">
              <span className="text-orange-600 font-bold">🎓</span>
              <span>95% Success Rate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS for Feature Card Animations */}
      <style jsx>{`
        .feature-card-enhanced {
          transform: translateY(0) scale(1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .feature-card-enhanced:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
        }
        
        .feature-card-enhanced:hover:before {
          opacity: 1;
        }
        
        /* Animation delays for staggered effects */
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        /* Pulse animation for particles */
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        /* Mobile hover states - reduce effects */
        @media (max-width: 768px) {
          .feature-card-enhanced:hover {
            transform: translateY(-6px) scale(1.01);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
          }
        }
        
        /* Focus states for accessibility */
        .feature-card-enhanced:focus {
          outline: 3px solid #fbbf24;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
}
