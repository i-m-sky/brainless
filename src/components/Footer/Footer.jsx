import { Phone, Mail, MessageCircle, Calendar, Facebook } from "lucide-react";

export function Footer({ onEnrollClick }) {
  const phoneNumber = "+880 1538-309105";
  const email = "brainedify.contact@gmail.com";

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

  const handleEmail = () => {
    window.open("mailto:brainedify.contact@gmail.com", "_blank");
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* CTA Section at top of footer */}
        <div className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-3xl font-black text-white mb-4">
            Don't Miss Your Chance!
          </h3>
          <p className="text-white mb-6">
            Limited seats available. Secure your spot today!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            <button
              onClick={onEnrollClick}
              className="bg-gradient-to-r from-[#1f2937] to-[#374151] text-white px-4 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300 text-sm"
            >
              🎯 Enroll Now
            </button>
            <button
              onClick={handleConsultation}
              className="border-2 border-white text-white px-4 py-3 rounded-full font-bold hover:bg-white hover:text-[#f59e0b] transition-all duration-300 text-sm"
            >
              📅 Free Consultation
            </button>
            <button
              onClick={handleWhatsApp}
              className="bg-green-500 text-white px-4 py-3 rounded-full font-bold hover:bg-green-600 transition-all duration-300 text-sm flex items-center gap-1 justify-center"
            >
              <MessageCircle className="w-3 h-3" />
              WhatsApp 1
            </button>
            <button
              onClick={handleWhatsApp2}
              className="bg-green-600 text-white px-4 py-3 rounded-full font-bold hover:bg-green-700 transition-all duration-300 text-sm flex items-center gap-1 justify-center"
            >
              <MessageCircle className="w-3 h-3" />
              WhatsApp 2
            </button>
            <button
              onClick={handleCall}
              className="bg-blue-500 text-white px-4 py-3 rounded-full font-bold hover:bg-blue-600 transition-all duration-300 text-sm flex items-center gap-1 justify-center"
            >
              <Phone className="w-3 h-3" />
              Call Now
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://ucarecdn.com/d7f97673-b744-4192-8e5c-c3c40fa7fe43/-/format/auto/"
                alt="BrainEdify"
                className="w-8 h-8 rounded-full"
              />
              <span className="font-black bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent">
                BrainEdify
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Excellence in science education through expert guidance and
              personalized learning.
            </p>
            <div className="mt-4">
              <p className="text-xs text-gray-500 mb-2">
                <strong>Admission Details:</strong>
              </p>
              <p className="text-xs text-gray-400">📌 25 Students Only</p>
              <p className="text-xs text-gray-400">📌 Start: Jan 15</p>
              <p className="text-xs text-orange-400 font-bold">
                📌 20% Early Bird Discount
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-black text-white mb-4">Subjects</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={onEnrollClick}
                  className="hover:text-[#fbbf24] transition"
                >
                  Mathematics
                </button>
              </li>
              <li>
                <button
                  onClick={onEnrollClick}
                  className="hover:text-[#fbbf24] transition"
                >
                  Physics
                </button>
              </li>
              <li>
                <button
                  onClick={onEnrollClick}
                  className="hover:text-[#fbbf24] transition"
                >
                  Chemistry
                </button>
              </li>
              <li>
                <button
                  onClick={onEnrollClick}
                  className="hover:text-[#fbbf24] transition"
                >
                  English Communication
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-[#fbbf24] transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#fbbf24] transition">
                  Contact
                </a>
              </li>
              <li>
                <button
                  onClick={onEnrollClick}
                  className="hover:text-[#fbbf24] transition"
                >
                  Enroll Now
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a
                  href={`tel:${phoneNumber}`}
                  className="hover:text-[#fbbf24] transition"
                >
                  {phoneNumber}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href={`mailto:${email}`}
                  className="hover:text-[#fbbf24] transition"
                >
                  {email}
                </a>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="mt-6">
              <h5 className="font-bold text-white mb-3 text-sm">Follow Us</h5>
              <div className="flex gap-3">
                <button
                  onClick={handleFacebook}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-300"
                  title="Follow us on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-colors duration-300"
                  title="WhatsApp 1"
                >
                  <MessageCircle className="w-4 h-4" />
                </button>
                <button
                  onClick={handleWhatsApp2}
                  className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-colors duration-300"
                  title="WhatsApp 2"
                >
                  <MessageCircle className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>
            © 2025 BrainEdify. All rights reserved. | Empowering Students
            Through Excellence 🧠✨
          </p>
          <p className="text-gray-500 mt-2">
            Home • About • Courses • Contact | WhatsApp • Phone • Facebook
          </p>
        </div>
      </div>
    </footer>
  );
}
