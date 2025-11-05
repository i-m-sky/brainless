import { ArrowRight, Phone, MessageCircle, Calendar, Mail } from "lucide-react";

export function CTASection({ onEnrollClick }) {
  const handleWhatsApp = () => {
    window.open("https://wa.me/+8801XXXXXXXXX", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+8801XXXXXXXXX", "_blank");
  };

  const handleConsultation = () => {
    onEnrollClick();
  };

  const handleEmail = () => {
    window.open("mailto:contact@brainedify.com", "_blank");
  };

  return (
    <div className="py-20 px-6 bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#d97706]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-black text-white mb-6 drop-shadow-lg">
          Ready to Excel?
        </h2>
        <p className="text-xl text-white drop-shadow-md mb-10 opacity-90">
          Join hundreds of students who have transformed their grades with
          BrainEdify
        </p>

        {/* Primary CTA */}
        <div className="mb-8">
          <button
            onClick={onEnrollClick}
            className="bg-gradient-to-r from-[#1f2937] to-[#374151] text-white px-10 py-4 rounded-full font-black text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            🎯 Enroll Now — Secure Your Seat!
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Secondary CTAs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <button
            onClick={handleConsultation}
            className="border-3 border-white bg-white bg-opacity-20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-bold hover:bg-opacity-30 hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center"
          >
            <Calendar className="w-4 h-4" />
            Free Consultation
          </button>
          <button
            onClick={handleWhatsApp}
            className="bg-green-500 bg-opacity-90 text-white px-6 py-3 rounded-full font-bold hover:bg-opacity-100 hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </button>
          <button
            onClick={handleCall}
            className="bg-blue-500 bg-opacity-90 text-white px-6 py-3 rounded-full font-bold hover:bg-opacity-100 hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center"
          >
            <Phone className="w-4 h-4" />📞 Call Now
          </button>
          <button
            onClick={handleEmail}
            className="bg-red-500 bg-opacity-90 text-white px-6 py-3 rounded-full font-bold hover:bg-opacity-100 hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center"
          >
            <Mail className="w-4 h-4" />
            Email Us
          </button>
        </div>

        {/* Urgency Banner */}
        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 mt-10 max-w-2xl mx-auto">
          <p className="text-white text-lg font-bold mb-2">
            ⏰ Limited Time Offer
          </p>
          <div className="grid grid-cols-2 gap-4 text-white text-sm">
            <p>
              <strong>📌 Only 25 Seats Available</strong>
            </p>
            <p>
              <strong>📌 Admission Closes: Dec 30</strong>
            </p>
            <p>
              <strong>📌 Classes Start: Jan 15</strong>
            </p>
            <p className="text-yellow-200 font-bold">
              <strong>📌 20% Early Bird Discount</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
