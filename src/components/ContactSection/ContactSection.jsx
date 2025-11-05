import { Phone, Mail, MessageCircle, Facebook } from "lucide-react";

export function ContactSection() {
  const phoneNumber = "+880 1538-309105";
  const whatsappNumber1 = "8801538309105";
  const whatsappNumber2 = "8801814187905";
  const email = "brainedify.contact@gmail.com";
  const facebookPage = "https://www.facebook.com/profile.php?id=61583204907706";

  return (
    <div
      id="contact"
      className="py-24 px-6 bg-gradient-to-br from-[#f8fafb] to-[#eff4ff]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600">Reach out with any questions</p>
        </div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          style={{ perspective: "1200px" }}
        >
          {/* Phone */}
          <div className="bg-white rounded-2xl p-8 border-2 border-[#1e40af] border-opacity-10 hover:border-[#1e40af] transition-all duration-500 text-center contact-card-3d group cursor-pointer relative overflow-hidden">
            <div className="w-16 h-16 bg-gradient-to-br from-[#1e40af] to-[#2563eb] rounded-lg flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 contact-icon-3d">
              <Phone className="w-8 h-8 text-white transition-all duration-500 group-hover:scale-125" />
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-2 transition-all duration-300 group-hover:text-[#1e40af]">
              Call Us
            </h3>
            <a
              href={`tel:${phoneNumber}`}
              className="text-[#1e40af] hover:text-[#1e3a8a] font-black transition-all duration-300 group-hover:scale-105 inline-block"
            >
              {phoneNumber}
            </a>
            <div className="absolute inset-0 rounded-2xl bg-[#1e40af]/0 group-hover:bg-[#1e40af]/5 transition-all duration-500 pointer-events-none contact-glow"></div>
          </div>

          {/* WhatsApp 1 */}
          <div className="bg-white rounded-2xl p-8 border-2 border-green-500 border-opacity-10 hover:border-green-500 transition-all duration-500 text-center contact-card-3d group cursor-pointer relative overflow-hidden">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 contact-icon-3d">
              <MessageCircle className="w-8 h-8 text-white transition-all duration-500 group-hover:scale-125" />
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-2 transition-all duration-300 group-hover:text-green-600">
              WhatsApp 1
            </h3>
            <a
              href={`https://wa.me/${whatsappNumber1}?text=Hello%20BrainEdify%21%20I%20want%20to%20know%20more%20about%20your%20courses.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 font-black transition-all duration-300 group-hover:scale-105 inline-block"
            >
              Chat Now
            </a>
            <div className="absolute inset-0 rounded-2xl bg-green-500/0 group-hover:bg-green-500/5 transition-all duration-500 pointer-events-none contact-glow"></div>
          </div>

          {/* WhatsApp 2 */}
          <div className="bg-white rounded-2xl p-8 border-2 border-green-600 border-opacity-10 hover:border-green-600 transition-all duration-500 text-center contact-card-3d group cursor-pointer relative overflow-hidden">
            <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 contact-icon-3d">
              <MessageCircle className="w-8 h-8 text-white transition-all duration-500 group-hover:scale-125" />
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-2 transition-all duration-300 group-hover:text-green-700">
              WhatsApp 2
            </h3>
            <a
              href={`https://wa.me/${whatsappNumber2}?text=Hello%20BrainEdify%21%20I%20want%20to%20know%20more%20about%20your%20courses.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 font-black transition-all duration-300 group-hover:scale-105 inline-block"
            >
              Chat Now
            </a>
            <div className="absolute inset-0 rounded-2xl bg-green-600/0 group-hover:bg-green-600/5 transition-all duration-500 pointer-events-none contact-glow"></div>
          </div>

          {/* Facebook */}
          <div className="bg-white rounded-2xl p-8 border-2 border-blue-600 border-opacity-10 hover:border-blue-600 transition-all duration-500 text-center contact-card-3d group cursor-pointer relative overflow-hidden">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 contact-icon-3d">
              <Facebook className="w-8 h-8 text-white transition-all duration-500 group-hover:scale-125" />
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-2 transition-all duration-300 group-hover:text-blue-600">
              Facebook
            </h3>
            <a
              href={facebookPage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-black transition-all duration-300 group-hover:scale-105 inline-block"
            >
              Follow Us
            </a>
            <div className="absolute inset-0 rounded-2xl bg-blue-600/0 group-hover:bg-blue-600/5 transition-all duration-500 pointer-events-none contact-glow"></div>
          </div>
        </div>

        {/* Email Section */}
        <div className="mt-12 text-center" style={{ perspective: "1200px" }}>
          <div className="bg-white rounded-2xl p-8 border-2 border-[#1e40af] border-opacity-10 hover:border-[#1e40af] transition-all duration-500 inline-block contact-card-3d group cursor-pointer relative overflow-hidden">
            <div className="w-16 h-16 bg-gradient-to-br from-[#1e40af] to-[#2563eb] rounded-lg flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 contact-icon-3d">
              <Mail className="w-8 h-8 text-white transition-all duration-500 group-hover:scale-125" />
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-2 transition-all duration-300 group-hover:text-[#1e40af]">
              Email Us
            </h3>
            <a
              href={`mailto:${email}`}
              className="text-[#1e40af] hover:text-[#1e3a8a] font-black transition-all duration-300 group-hover:scale-105 inline-block"
            >
              {email}
            </a>
            <div className="absolute inset-0 rounded-2xl bg-[#1e40af]/0 group-hover:bg-[#1e40af]/5 transition-all duration-500 pointer-events-none contact-glow"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-card-3d {
          transform: translateZ(0) rotateX(0deg) rotateY(0deg);
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
        }
        
        .contact-card-3d:hover {
          transform: translateZ(25px) rotateX(8deg) rotateY(-8deg) scale(1.05);
          box-shadow: 
            0 35px 70px rgba(0,0,0,0.15),
            0 0 0 1px rgba(255,255,255,0.5),
            inset 0 1px 0 rgba(255,255,255,0.3);
        }
        
        .contact-icon-3d {
          transform: translateZ(0) rotateZ(0deg);
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
        }
        
        .contact-card-3d:hover .contact-icon-3d {
          transform: translateZ(15px) rotateZ(12deg) scale(1.1);
          filter: drop-shadow(0 8px 25px rgba(0,0,0,0.25));
        }
        
        .contact-glow {
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        
        .contact-card-3d:hover .contact-glow {
          opacity: 1;
          box-shadow: inset 0 0 30px rgba(255,255,255,0.1);
        }
        
        /* Individual card color glows */
        .contact-card-3d:nth-child(1):hover {
          box-shadow: 
            0 35px 70px rgba(30, 64, 175, 0.25),
            0 0 50px rgba(30, 64, 175, 0.15),
            inset 0 1px 0 rgba(255,255,255,0.3);
        }
        
        .contact-card-3d:nth-child(2):hover {
          box-shadow: 
            0 35px 70px rgba(34, 197, 94, 0.25),
            0 0 50px rgba(34, 197, 94, 0.15),
            inset 0 1px 0 rgba(255,255,255,0.3);
        }
        
        .contact-card-3d:nth-child(3):hover {
          box-shadow: 
            0 35px 70px rgba(22, 163, 74, 0.25),
            0 0 50px rgba(22, 163, 74, 0.15),
            inset 0 1px 0 rgba(255,255,255,0.3);
        }
        
        .contact-card-3d:nth-child(4):hover {
          box-shadow: 
            0 35px 70px rgba(37, 99, 235, 0.25),
            0 0 50px rgba(37, 99, 235, 0.15),
            inset 0 1px 0 rgba(255,255,255,0.3);
        }
        
        /* Email card specific styling */
        .contact-card-3d:has(.contact-icon-3d [class*="mail"]):hover {
          box-shadow: 
            0 35px 70px rgba(30, 64, 175, 0.25),
            0 0 50px rgba(30, 64, 175, 0.15),
            inset 0 1px 0 rgba(255,255,255,0.3);
        }
        
        /* Pulse animation for icons */
        .contact-card-3d:hover .contact-icon-3d {
          animation: iconPulse 2s infinite ease-in-out;
        }
        
        @keyframes iconPulse {
          0%, 100% { 
            transform: translateZ(15px) rotateZ(12deg) scale(1.1);
          }
          50% { 
            transform: translateZ(20px) rotateZ(12deg) scale(1.15);
          }
        }
        
        /* Hover effects for text elements */
        .contact-card-3d:hover h3 {
          transform: translateY(-2px);
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .contact-card-3d:hover a {
          transform: translateY(-1px);
          text-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }
        
        /* Staggered animation delays for grid items */
        .contact-card-3d:nth-child(1) { animation-delay: 0ms; }
        .contact-card-3d:nth-child(2) { animation-delay: 100ms; }
        .contact-card-3d:nth-child(3) { animation-delay: 200ms; }
        .contact-card-3d:nth-child(4) { animation-delay: 300ms; }
      `}</style>
    </div>
  );
}
