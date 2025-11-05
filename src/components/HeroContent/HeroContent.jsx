import { Clock, MessageCircle } from "lucide-react";

export function HeroContent({ onEnrollClick, onWhatsApp, onWhatsApp2 }) {
  return (
    <div className="text-center lg:text-left">
      {/* Urgency Badge */}
      <div className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-full mb-6 animate-pulse shadow-xl">
        <Clock className="w-5 h-5" />
        <span className="font-bold text-sm">ADMISSION CLOSING SOON!</span>
      </div>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
        Master
        <span className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent">
          {" "}
          Science
        </span>
        <br />
        with Excellence
      </h1>

      <p className="text-xl md:text-2xl text-gray-700 mb-8 font-semibold">
        Next Batch Starts{" "}
        <span className="text-[#f59e0b] font-black">Jan 15</span> • Last Date{" "}
        <span className="text-red-600 font-black">Dec 30</span> • Only{" "}
        <span className="text-[#fbbf24] font-black">25 Seats</span>
      </p>

      {/* 3 Free Demo Classes Highlight */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl mb-6 shadow-xl">
        <h3 className="text-2xl font-black mb-2">🎁 SPECIAL OFFER!</h3>
        <p className="text-lg font-bold">
          Get 3 FREE Demo Classes Before You Enroll!
        </p>
        <p className="text-sm font-medium opacity-90">
          Experience our teaching quality with zero commitment
        </p>
      </div>

      {/* Value Proposition */}
      <div className="bg-white rounded-2xl p-6 shadow-xl mb-8 border-2 border-[#fbbf24]/20">
        <h3 className="text-2xl font-black text-gray-800 mb-4">
          What You Get:
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#fbbf24] rounded-full"></div>
            <span className="font-semibold text-gray-700">
              4 Days/Week Classes
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#f59e0b] rounded-full"></div>
            <span className="font-semibold text-gray-700">3 Core Subjects</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="font-semibold text-gray-700">
              3 FREE Demo Classes
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#f59e0b] rounded-full"></div>
            <span className="font-semibold text-gray-700">
              Progress Tracking
            </span>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <button
          onClick={onEnrollClick}
          className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-white px-8 py-4 rounded-2xl font-black text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center"
        >
          🎯 Secure Your Seat + 3 FREE Classes
        </button>
        <div className="flex gap-2">
          <button
            onClick={onWhatsApp}
            className="bg-green-500 text-white px-6 py-4 rounded-2xl font-bold text-lg hover:bg-green-600 transition flex items-center gap-2 justify-center flex-1"
          >
            <MessageCircle className="w-6 h-6" />
            WhatsApp 1
          </button>
          <button
            onClick={onWhatsApp2}
            className="bg-green-600 text-white px-6 py-4 rounded-2xl font-bold text-lg hover:bg-green-700 transition flex items-center gap-2 justify-center flex-1"
          >
            <MessageCircle className="w-6 h-6" />
            WhatsApp 2
          </button>
        </div>
      </div>

      {/* Social Proof */}
      <p className="text-gray-600 font-medium">
        ⭐ Join 100+ successful students • 🏆 IELTS Band 7 Trainer • 🎁 3 FREE
        Demo Classes
      </p>
    </div>
  );
}
