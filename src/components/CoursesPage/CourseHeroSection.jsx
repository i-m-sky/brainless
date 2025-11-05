import { Users, Clock, Award, Star } from "lucide-react";

export function CourseHeroSection() {
  return (
    <div className="pt-32 pb-16 bg-gradient-to-br from-[#fbbf24]/10 via-white to-[#f59e0b]/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#fbbf24] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#f59e0b] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            🎓 Our{" "}
            <span className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent">
              Courses
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Choose Your Path to Academic Excellence
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive courses designed for{" "}
            <strong>SSC & HSC students</strong> with expert instruction and
            personalized attention
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-[#fbbf24]/20">
              <Users className="w-8 h-8 md:w-12 md:h-12 text-[#fbbf24] mx-auto mb-2 md:mb-4" />
              <h3 className="text-lg md:text-2xl font-bold text-gray-800">
                25
              </h3>
              <p className="text-sm md:text-base text-gray-600">Max Students</p>
            </div>
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-[#fbbf24]/20">
              <Clock className="w-8 h-8 md:w-12 md:h-12 text-[#fbbf24] mx-auto mb-2 md:mb-4" />
              <h3 className="text-lg md:text-2xl font-bold text-gray-800">4</h3>
              <p className="text-sm md:text-base text-gray-600">Days/Week</p>
            </div>
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-[#f59e0b]/20">
              <Award className="w-8 h-8 md:w-12 md:h-12 text-[#f59e0b] mx-auto mb-2 md:mb-4" />
              <h3 className="text-lg md:text-2xl font-bold text-[#f59e0b]">
                3
              </h3>
              <p className="text-sm md:text-base text-gray-600">Free Demo</p>
            </div>
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-green-200">
              <Star className="w-8 h-8 md:w-12 md:h-12 text-green-600 mx-auto mb-2 md:mb-4" />
              <h3 className="text-lg md:text-2xl font-bold text-green-600">
                20%
              </h3>
              <p className="text-sm md:text-base text-gray-600">Discount</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
