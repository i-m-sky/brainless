import { CheckCircle } from "lucide-react";

export function PricingCard({ pricing }) {
  return (
    <div
      className={`${pricing.isHighlighted ? `bg-gradient-to-br ${pricing.bgGradient}` : "bg-white"} rounded-2xl p-6 shadow-lg border-2 ${pricing.borderColor} pricing-card-3d group relative`}
    >
      {pricing.badge && (
        <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold pulse-animation">
          {pricing.badge}
        </div>
      )}
      <div className="text-center mb-4">
        <div className="pricing-icon-3d group-hover:rotate-y-12 group-hover:scale-110 transition-all duration-500">
          <div className={`w-8 h-8 ${pricing.iconColor} mx-auto mb-2`}>
            {pricing.icon}
          </div>
        </div>
        <h3
          className={`text-lg font-bold ${pricing.isHighlighted ? "text-white" : "text-gray-800"} transition-all duration-300 ${pricing.hoverColor}`}
        >
          {pricing.title}
        </h3>
        <div
          className={`text-2xl font-black ${pricing.priceColor} mt-2 transition-all duration-300 group-hover:scale-110`}
        >
          ৳{pricing.price}
        </div>
        {pricing.originalPrice && (
          <>
            <p
              className={`text-sm ${pricing.isHighlighted ? "opacity-90" : ""} line-through`}
            >
              ৳{pricing.originalPrice}
            </p>
            <p className="text-xs font-bold">Save ৳{pricing.savings}!</p>
          </>
        )}
        <p
          className={`text-sm ${pricing.isHighlighted ? "opacity-90" : "text-gray-600"}`}
        >
          {pricing.duration}
        </p>
      </div>
      <ul className="space-y-2 text-sm">
        {pricing.features.map((feature, index) => (
          <li
            key={index}
            className={`flex items-center gap-2 ${pricing.isHighlighted ? "text-white" : "text-gray-700"} transition-all duration-200 hover:translate-x-2 ${pricing.hoverColor}`}
          >
            <CheckCircle
              className={`w-4 h-4 ${pricing.checkColor} transition-all duration-300 hover:rotate-180`}
            />
            {feature}
          </li>
        ))}
      </ul>

      {/* 3D Animation Styles */}
      <style jsx>{`
        .pricing-card-3d {
          transform: translateZ(0) rotateX(0deg) rotateY(0deg) scale(1);
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 8px 25px rgba(0,0,0,0.12);
          transformStyle: preserve-3d;
        }
        
        .pricing-card-3d:hover {
          transform: translateZ(25px) rotateX(6deg) rotateY(-6deg) scale(1.03);
          box-shadow: 
            0 35px 70px rgba(0,0,0,0.2),
            0 0 0 1px rgba(255,255,255,0.1),
            inset 0 1px 0 rgba(255,255,255,0.15);
        }

        /* Icon 3D animation */
        .pricing-icon-3d {
          transform: translateZ(0) rotateY(0deg) scale(1);
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .pricing-card-3d:hover .pricing-icon-3d {
          transform: translateZ(15px) rotateY(12deg) scale(1.15);
          filter: drop-shadow(0 0 20px rgba(255,255,255,0.3));
        }

        /* Price animation */
        .pricing-card-3d .text-2xl.font-black {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .pricing-card-3d:hover .text-2xl.font-black {
          transform: translateZ(8px) scale(1.1);
          text-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }

        /* Feature list animations */
        .pricing-card-3d ul li {
          transition: all 0.3s ease;
        }

        .pricing-card-3d:hover ul li {
          transform: translateX(4px) translateZ(3px);
        }

        .pricing-card-3d ul li:hover {
          transform: translateX(8px) translateZ(6px) scale(1.02) !important;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        /* Check icon rotation */
        .pricing-card-3d .w-4.h-4 {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .pricing-card-3d ul li:hover .w-4.h-4 {
          transform: rotate(180deg) scale(1.1);
        }

        /* Badge pulse animation */
        .pulse-animation {
          animation: pricingPulse 2s infinite ease-in-out;
        }

        @keyframes pricingPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 0 8px rgba(239, 68, 68, 0);
          }
        }

        /* Highlighted card special effects */
        .pricing-card-3d.bg-gradient-to-br:hover {
          box-shadow: 
            0 40px 80px rgba(251, 191, 36, 0.25),
            0 0 40px rgba(245, 158, 11, 0.15),
            inset 0 1px 0 rgba(255,255,255,0.2);
        }

        /* Card shimmer effect */
        .pricing-card-3d::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.8s ease;
          pointer-events: none;
          z-index: 1;
        }

        .pricing-card-3d:hover::after {
          left: 100%;
        }

        /* Text animations */
        .pricing-card-3d h3 {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .pricing-card-3d:hover h3 {
          transform: translateZ(5px);
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        /* Enhanced depth perception */
        .pricing-card-3d .text-center {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .pricing-card-3d:hover .text-center {
          transform: translateZ(5px);
        }
      `}</style>
    </div>
  );
}
