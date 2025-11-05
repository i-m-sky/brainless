import { MessageCircle } from "lucide-react";

export function EnglishCourseCTA({ onEnrollClick, onWhatsApp }) {
  return (
    <div className="text-center">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 rounded-3xl shadow-2xl">
        <h3 className="text-2xl md:text-3xl font-black mb-4">
          Ready to Master English Communication?
        </h3>
        <p className="text-lg mb-6 opacity-90">
          Join our February batch and build strong English foundation with IELTS
          Band 7 trainer
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onEnrollClick}
            className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-black text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            🎯 Enroll in English Course
          </button>
          <button
            onClick={onWhatsApp}
            className="bg-green-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-600 transition flex items-center gap-2 justify-center"
          >
            <MessageCircle className="w-6 h-6" />
            Ask About English Course
          </button>
        </div>
      </div>
    </div>
  );
}
