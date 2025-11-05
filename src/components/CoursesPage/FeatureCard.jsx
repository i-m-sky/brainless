export function FeatureCard({ icon, title, description, features, color }) {
  return (
    <div className="feature-card-3d group">
      <div className="feature-icon-3d group-hover:rotate-y-12 group-hover:scale-110 transition-all duration-500">
        <div className={`w-12 h-12 ${color} mx-auto mb-4`}>{icon}</div>
      </div>
      <h3
        className={`text-lg font-bold text-gray-800 mb-2 group-hover:${color} transition-all duration-300`}
      >
        {title}
      </h3>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <ul className="text-xs text-gray-500 space-y-1">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`transition-all duration-200 hover:translate-x-2 hover:${color}`}
          >
            • {feature}
          </li>
        ))}
      </ul>

      {/* 3D Animation Styles */}
      <style jsx>{`
        .feature-card-3d {
          background: white;
          border-radius: 1.5rem;
          padding: 2rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          transform: translateZ(0) rotateX(0deg) rotateY(0deg) scale(1);
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transformStyle: preserve-3d;
          position: relative;
          overflow: hidden;
        }
        
        .feature-card-3d:hover {
          transform: translateZ(30px) rotateX(10deg) rotateY(-8deg) scale(1.05);
          box-shadow: 
            0 40px 80px rgba(0,0,0,0.25),
            0 0 0 1px rgba(255,255,255,0.15),
            inset 0 1px 0 rgba(255,255,255,0.2);
        }

        /* Icon 3D animation */
        .feature-icon-3d {
          transform: translateZ(0) rotateY(0deg) scale(1);
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .feature-card-3d:hover .feature-icon-3d {
          transform: translateZ(20px) rotateY(12deg) scale(1.2);
          filter: drop-shadow(0 0 25px rgba(255,255,255,0.4));
        }

        /* Icon glow effects based on color */
        .feature-card-3d:hover .text-\\[\\#fbbf24\\] {
          filter: drop-shadow(0 0 20px rgba(251, 191, 36, 0.5));
        }

        .feature-card-3d:hover .text-blue-600 {
          filter: drop-shadow(0 0 20px rgba(37, 99, 235, 0.5));
        }

        .feature-card-3d:hover .text-green-600 {
          filter: drop-shadow(0 0 20px rgba(22, 163, 74, 0.5));
        }

        .feature-card-3d:hover .text-purple-600 {
          filter: drop-shadow(0 0 20px rgba(147, 51, 234, 0.5));
        }

        .feature-card-3d:hover .text-red-600 {
          filter: drop-shadow(0 0 20px rgba(220, 38, 38, 0.5));
        }

        .feature-card-3d:hover .text-indigo-600 {
          filter: drop-shadow(0 0 20px rgba(79, 70, 229, 0.5));
        }

        .feature-card-3d:hover .text-teal-600 {
          filter: drop-shadow(0 0 20px rgba(13, 148, 136, 0.5));
        }

        .feature-card-3d:hover .text-orange-600 {
          filter: drop-shadow(0 0 20px rgba(234, 88, 12, 0.5));
        }

        /* Title animations */
        .feature-card-3d h3 {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .feature-card-3d:hover h3 {
          transform: translateZ(8px) scale(1.05);
          text-shadow: 0 4px 8px rgba(0,0,0,0.15);
        }

        /* Description animation */
        .feature-card-3d p {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .feature-card-3d:hover p {
          transform: translateZ(4px);
          color: #374151;
        }

        /* Feature list animations */
        .feature-card-3d ul {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .feature-card-3d:hover ul {
          transform: translateZ(2px);
        }

        .feature-card-3d ul li {
          transition: all 0.3s ease;
        }

        .feature-card-3d:hover ul li {
          transform: translateX(4px) translateZ(1px);
        }

        .feature-card-3d ul li:hover {
          transform: translateX(8px) translateZ(3px) scale(1.05) !important;
          font-weight: 600;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        /* Shimmer effect */
        .feature-card-3d::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transition: left 0.7s ease;
          pointer-events: none;
          z-index: 1;
        }

        .feature-card-3d:hover::before {
          left: 100%;
        }

        /* Color-specific hover effects */
        .feature-card-3d:nth-child(1):hover {
          box-shadow: 
            0 40px 80px rgba(251, 191, 36, 0.2),
            0 0 40px rgba(251, 191, 36, 0.1),
            inset 0 1px 0 rgba(255,255,255,0.2);
        }

        .feature-card-3d:nth-child(2):hover {
          box-shadow: 
            0 40px 80px rgba(37, 99, 235, 0.2),
            0 0 40px rgba(37, 99, 235, 0.1),
            inset 0 1px 0 rgba(255,255,255,0.2);
        }

        .feature-card-3d:nth-child(3):hover {
          box-shadow: 
            0 40px 80px rgba(22, 163, 74, 0.2),
            0 0 40px rgba(22, 163, 74, 0.1),
            inset 0 1px 0 rgba(255,255,255,0.2);
        }

        .feature-card-3d:nth-child(4):hover {
          box-shadow: 
            0 40px 80px rgba(147, 51, 234, 0.2),
            0 0 40px rgba(147, 51, 234, 0.1),
            inset 0 1px 0 rgba(255,255,255,0.2);
        }

        .feature-card-3d:nth-child(5):hover {
          box-shadow: 
            0 40px 80px rgba(220, 38, 38, 0.2),
            0 0 40px rgba(220, 38, 38, 0.1),
            inset 0 1px 0 rgba(255,255,255,0.2);
        }

        .feature-card-3d:nth-child(6):hover {
          box-shadow: 
            0 40px 80px rgba(79, 70, 229, 0.2),
            0 0 40px rgba(79, 70, 229, 0.1),
            inset 0 1px 0 rgba(255,255,255,0.2);
        }

        .feature-card-3d:nth-child(7):hover {
          box-shadow: 
            0 40px 80px rgba(13, 148, 136, 0.2),
            0 0 40px rgba(13, 148, 136, 0.1),
            inset 0 1px 0 rgba(255,255,255,0.2);
        }

        .feature-card-3d:nth-child(8):hover {
          box-shadow: 
            0 40px 80px rgba(234, 88, 12, 0.2),
            0 0 40px rgba(234, 88, 12, 0.1),
            inset 0 1px 0 rgba(255,255,255,0.2);
        }

        /* Interactive bounce animation */
        .feature-card-3d:active {
          transform: translateZ(15px) rotateX(5deg) rotateY(-4deg) scale(0.98);
          transition: all 0.1s ease;
        }

        /* Staggered animation delays */
        .feature-card-3d:nth-child(1) { animation-delay: 0.1s; }
        .feature-card-3d:nth-child(2) { animation-delay: 0.2s; }
        .feature-card-3d:nth-child(3) { animation-delay: 0.3s; }
        .feature-card-3d:nth-child(4) { animation-delay: 0.4s; }
        .feature-card-3d:nth-child(5) { animation-delay: 0.5s; }
        .feature-card-3d:nth-child(6) { animation-delay: 0.6s; }
        .feature-card-3d:nth-child(7) { animation-delay: 0.7s; }
        .feature-card-3d:nth-child(8) { animation-delay: 0.8s; }
      `}</style>
    </div>
  );
}
