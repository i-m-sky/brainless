import { CheckCircle, ArrowRight } from "lucide-react";

export function CourseCard({ course, onEnroll }) {
  return (
    <div
      className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden course-card-3d group"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Course Header */}
      <div
        className={`bg-gradient-to-r ${course.color} p-6 text-center relative overflow-hidden`}
      >
        {course.discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            {course.discount}% OFF
          </div>
        )}
        <div className={`${course.textColor} mb-4`}>{course.icon}</div>
        <h3 className={`text-xl font-black ${course.textColor} mb-2`}>
          {course.title}
        </h3>
        <p className={`${course.textColor} opacity-90 text-sm mb-4`}>
          {course.subtitle}
        </p>

        <div className="mb-4">
          <div className={`text-3xl font-black ${course.textColor}`}>
            ৳{course.price.toLocaleString()}
          </div>
          {course.originalPrice && (
            <div>
              <p
                className={`${course.textColor} opacity-70 text-sm line-through`}
              >
                ৳{course.originalPrice.toLocaleString()}
              </p>
              <p className={`${course.textColor} text-xs font-bold`}>
                Save ৳{(course.originalPrice - course.price).toLocaleString()}!
              </p>
            </div>
          )}
          <p className={`${course.textColor} opacity-90 text-sm mt-1`}>
            {course.duration}
          </p>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        <div className="mb-4">
          <h4 className="font-bold text-gray-800 mb-2">Subjects:</h4>
          <div className="flex flex-wrap gap-2">
            {course.subjects.map((subject, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs font-semibold"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4">{course.description}</p>

        <div className="mb-6">
          <h4 className="font-bold text-gray-800 mb-3">What You'll Learn:</h4>
          <div className="space-y-2">
            {course.features.slice(0, 4).map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
            {course.features.length > 4 && (
              <div className="text-xs text-gray-500 mt-2">
                +{course.features.length - 4} more features...
              </div>
            )}
          </div>
        </div>

        <button
          onClick={onEnroll}
          className={`w-full bg-gradient-to-r ${course.color} text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2`}
        >
          Enroll Now <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* 3D Animation Styles */}
      <style jsx>{`
        .course-card-3d {
          transform: translateZ(0) rotateX(0deg) rotateY(0deg) scale(1);
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
        
        .course-card-3d:hover {
          transform: translateZ(30px) rotateX(8deg) rotateY(-8deg) scale(1.02);
          box-shadow: 
            0 40px 80px rgba(0,0,0,0.25),
            0 0 0 1px rgba(255,255,255,0.1),
            inset 0 1px 0 rgba(255,255,255,0.15);
        }

        /* Enhanced course header animations */
        .course-card-3d .bg-gradient-to-r {
          position: relative;
          overflow: hidden;
        }

        .course-card-3d .bg-gradient-to-r::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.6s ease;
        }

        .course-card-3d:hover .bg-gradient-to-r::before {
          left: 100%;
        }

        /* Icon animations */
        .course-card-3d .text-xl.font-black ~ div {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .course-card-3d:hover .text-xl.font-black ~ div {
          transform: translateZ(10px) rotateY(5deg) scale(1.05);
        }

        /* Feature list animations */
        .course-card-3d .space-y-2 > div {
          transition: all 0.3s ease;
        }

        .course-card-3d:hover .space-y-2 > div {
          transform: translateX(4px) translateZ(2px);
        }

        .course-card-3d .space-y-2 > div:hover {
          transform: translateX(8px) translateZ(4px) scale(1.02) !important;
          color: #059669 !important;
        }

        /* Button enhanced animation */
        .course-card-3d button {
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .course-card-3d button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
          transition: all 0.6s ease;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .course-card-3d button:hover::before {
          width: 300px;
          height: 300px;
        }

        .course-card-3d:hover button {
          transform: translateZ(5px) scale(1.02);
          box-shadow: 0 15px 30px rgba(0,0,0,0.2);
        }

        /* Discount badge animation */
        .course-card-3d .absolute.top-2.right-2 {
          animation: pulseGlow 2s infinite ease-in-out;
        }

        @keyframes pulseGlow {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);
          }
        }

        /* Subject tags animation */
        .course-card-3d .bg-gray-100 {
          transition: all 0.3s ease;
        }

        .course-card-3d:hover .bg-gray-100 {
          transform: translateY(-1px);
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .course-card-3d .bg-gray-100:hover {
          background-color: #f3f4f6;
          transform: translateY(-2px) scale(1.05) !important;
          color: #374151;
        }
      `}</style>
    </div>
  );
}
