import { useState } from "react";
import {
  Phone,
  MessageCircle,
  Calendar,
  Mail,
  Menu,
  X,
  Facebook,
} from "lucide-react";

export function Navigation({ onEnrollClick }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleWhatsApp = () => {
    window.open("https://wa.me/+8801538309105", "_blank");
  };

  const handleWhatsApp2 = () => {
    window.open("https://wa.me/+8801814187905", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+8801538309105", "_blank");
  };

  const handleFacebook = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=61583204907706",
      "_blank",
    );
  };

  const handleConsultation = () => {
    onEnrollClick();
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-orange-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 sm:py-3">
        <div className="flex justify-between items-center">
          {/* Logo - Optimized for mobile */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0 hover:scale-105 transition-transform duration-300">
            <div className="relative">
              <img
                src="https://ucarecdn.com/09b2c08b-6123-48d3-a7a6-24e8fba297b8/-/format/auto/"
                alt="BrainEdify"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain rounded-full border-2 border-[#fbbf24] shadow-md hover:rotate-6 transition-transform duration-300"
              />
            </div>
            <span className="text-base sm:text-xl md:text-2xl font-black bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent whitespace-nowrap animate-pulse">
              BrainEdify
            </span>
          </div>

          {/* Desktop Navigation - Enhanced with animations */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a
              href="/"
              className="text-gray-700 hover:text-[#fbbf24] transition-all duration-300 text-base font-semibold hover:scale-110 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fbbf24] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/teams"
              className="text-gray-700 hover:text-[#fbbf24] transition-all duration-300 text-base font-semibold hover:scale-110 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fbbf24] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/courses"
              className="text-gray-700 hover:text-[#fbbf24] transition-all duration-300 text-base font-semibold hover:scale-110 relative group"
            >
              Courses
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fbbf24] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-[#fbbf24] transition-all duration-300 text-base font-semibold hover:scale-110 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fbbf24] transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* Enhanced Trainer Profile - Better mobile optimization */}
            <div className="flex items-center gap-3 px-3 py-2 bg-gradient-to-r from-[#fbbf24]/10 to-[#f59e0b]/10 rounded-full border border-[#fbbf24]/20 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="relative">
                <img
                  src="https://ucarecdn.com/7af65915-8b99-4a13-9431-977d2fd6ad63/-/format/auto/"
                  alt="Md. Robin Jamal"
                  className="w-10 h-10 md:w-12 md:h-12 object-cover object-top rounded-full border-2 border-[#fbbf24] shadow-md hover:rotate-3 transition-transform duration-300"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div className="text-left hidden xl:block">
                <span className="block text-sm font-bold text-gray-800">
                  Md. Robin Jamal
                </span>
                <span className="block text-xs text-gray-600">
                  IELTS Band 7 • Certified
                </span>
              </div>
            </div>

            <button
              onClick={onEnrollClick}
              className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-white px-4 xl:px-6 py-3 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm xl:text-base btn-animate relative overflow-hidden group"
            >
              <span className="relative z-10">🎯 Enroll Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Navigation - Enhanced */}
          <div className="lg:hidden flex items-center gap-1 sm:gap-2">
            {/* Mobile Menu Button with animation */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-white p-2 sm:p-3 rounded-full shadow-lg flex-shrink-0 hover:scale-110 transition-all duration-300"
            >
              <div
                className={`transition-transform duration-300 ${showMobileMenu ? "rotate-180" : "rotate-0"}`}
              >
                {showMobileMenu ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu with slide animation */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-2xl border-t border-gray-200 z-40 transform transition-all duration-300 ${
          showMobileMenu
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-4 opacity-0 invisible"
        }`}
      >
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-4">
            {[
              { name: "Courses", href: "/courses" },
              { name: "About", href: "/teams" },
              { name: "Contact", href: "#contact" },
            ].map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setShowMobileMenu(false)}
                className="block text-gray-700 hover:text-[#fbbf24] transition-all duration-300 text-xl font-semibold py-3 border-b border-gray-100 hover:border-[#fbbf24] hover:translate-x-2 transform"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Action Buttons - Enhanced with better spacing */}
          <div className="space-y-4 pt-6">
            <button
              onClick={() => {
                onEnrollClick();
                setShowMobileMenu(false);
              }}
              className="w-full bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-white px-6 py-5 rounded-xl font-bold text-xl shadow-lg hover:scale-105 transition-all duration-300 btn-animate"
            >
              🎯 Enroll Now
            </button>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => {
                  handleWhatsApp();
                  setShowMobileMenu(false);
                }}
                className="bg-green-500 text-white px-4 py-4 rounded-xl font-bold hover:bg-green-600 hover:scale-105 transition-all duration-300 text-base flex items-center gap-2 justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp 1
              </button>
              <button
                onClick={() => {
                  handleWhatsApp2();
                  setShowMobileMenu(false);
                }}
                className="bg-green-600 text-white px-4 py-4 rounded-xl font-bold hover:bg-green-700 hover:scale-105 transition-all duration-300 text-base flex items-center gap-2 justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp 2
              </button>
            </div>

            <button
              onClick={() => {
                handleCall();
                setShowMobileMenu(false);
              }}
              className="w-full bg-blue-500 text-white px-4 py-4 rounded-xl font-bold hover:bg-blue-600 hover:scale-105 transition-all duration-300 text-base flex items-center gap-2 justify-center"
            >
              <Phone className="w-5 h-5" />📞 Call
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu Overlay */}
      {showMobileMenu && (
        <div
          className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-30 transition-opacity duration-300"
          onClick={() => {
            setShowMobileMenu(false);
          }}
        ></div>
      )}
    </nav>
  );
}
