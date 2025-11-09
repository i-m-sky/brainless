import { ArrowRight, Phone, MessageCircle, Calendar, Mail } from "lucide-react";

export function HeroSection({ onEnrollClick }) {
  const handleWhatsApp = () => {
    window.open("https://wa.me/+8801814187905", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+8801814187905", "_blank");
  };

  const handleConsultation = () => {
    // You can implement booking logic here
    onEnrollClick();
  };

  const handleEmail = () => {
    window.open("mailto:contact@brainedify.com", "_blank");
  };

  return (
    <div className="pt-40 pb-32 px-6 bg-gradient-to-br from-[#fbbf24] via-[#f59e0b] to-[#d97706]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-[#1f2937] to-[#374151] text-white text-xs font-black px-4 py-2 rounded-full shadow-lg">
                🎓 PREMIUM SSC & HSC COACHING
              </span>
            </div>
            <h1 className="text-7xl font-black text-white leading-tight tracking-tight drop-shadow-lg">
              Master
              <span className="block bg-gradient-to-r from-[#1f2937] to-[#374151] bg-clip-text text-transparent">
                Science Excellence
              </span>
            </h1>
            <p className="text-xl text-white leading-relaxed max-w-lg drop-shadow-md">
              Complete SSC & HSC Science coaching covering Math, Physics, and
              Chemistry with personalized attention from experienced
              instructors.
            </p>

            {/* Enhanced CTA Buttons Grid */}
            <div className="pt-8 space-y-4">
              {/* Primary CTAs */}
              <div className="flex gap-4">
                <button
                  onClick={onEnrollClick}
                  className="bg-gradient-to-r from-[#1f2937] to-[#374151] text-white px-8 py-4 rounded-full font-black hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 text-lg"
                >
                  🎯 Enroll Now — Secure Your Seat!
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Secondary CTAs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button
                  onClick={handleConsultation}
                  className="border-3 border-white bg-white bg-opacity-20 backdrop-blur-sm text-white px-4 py-3 rounded-full font-bold hover:bg-opacity-30 hover:scale-105 transition-all duration-300 text-sm flex items-center gap-2 justify-center"
                >
                  <Calendar className="w-4 h-4" />
                  Free Consultation
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="bg-green-500 bg-opacity-90 text-white px-4 py-3 rounded-full font-bold hover:bg-opacity-100 hover:scale-105 transition-all duration-300 text-sm flex items-center gap-2 justify-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </button>
                <button
                  onClick={handleCall}
                  className="bg-blue-500 bg-opacity-90 text-white px-4 py-3 rounded-full font-bold hover:bg-opacity-100 hover:scale-105 transition-all duration-300 text-sm flex items-center gap-2 justify-center"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </button>
                <button
                  onClick={handleEmail}
                  className="bg-red-500 bg-opacity-90 text-white px-4 py-3 rounded-full font-bold hover:bg-opacity-100 hover:scale-105 transition-all duration-300 text-sm flex items-center gap-2 justify-center"
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </button>
              </div>

              {/* Key Info Banner */}
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-4 mt-6">
                <div className="grid grid-cols-2 gap-4 text-white text-sm">
                  <p>
                    <strong>📌 Batch Size:</strong> 25 Students Only
                  </p>
                  <p>
                    <strong>📌 Start:</strong> January 15
                  </p>
                  <p>
                    <strong>📌 Last Date:</strong> December 30
                  </p>
                  <p className="text-yellow-200 font-bold">
                    <strong>📌 20% Early Bird Discount</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Perfect Round Logo */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white via-[#fbbf24] to-[#f59e0b] opacity-40 blur-2xl scale-110 animate-pulse"></div>

              {/* Main perfectly circular container */}
              <div className="relative bg-white rounded-full p-8 shadow-2xl border-4 border-white w-80 h-80 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#f59e0b] shadow-xl">
                  <img
                    src="https://ucarecdn.com/d7f97673-b744-4192-8e5c-c3c40fa7fe43/-/format/auto/"
                    alt="BrainEdify"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#f59e0b] to-[#d97706] rounded-full animate-bounce shadow-lg"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] rounded-full animate-bounce delay-500 shadow-lg"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-[#d97706] to-[#b45309] rounded-full animate-bounce delay-1000 shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
