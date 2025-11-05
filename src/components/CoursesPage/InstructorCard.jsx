import { CheckCircle } from "lucide-react";

export function InstructorCard({ instructor }) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#fbbf24]/20">
      <div className="text-center mb-4">
        {instructor.image && (
          <img
            src={instructor.image}
            alt={instructor.name}
            className="w-16 h-16 rounded-full object-cover object-top mx-auto mb-3 border-2 border-green-500"
          />
        )}
        <h4 className="text-lg font-bold text-gray-800">{instructor.title}</h4>
        <p className={`${instructor.nameColor} font-semibold`}>
          {instructor.name}
        </p>
        <p className="text-gray-600 text-sm">{instructor.role}</p>
        {instructor.institution && (
          <p className="text-gray-500 text-sm">{instructor.institution}</p>
        )}
        {instructor.badge && (
          <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold text-xs mt-2">
            <CheckCircle className="w-4 h-4 mr-1" />
            {instructor.badge}
          </div>
        )}
      </div>
      <div className="space-y-2 text-sm">
        {instructor.highlights.map((highlight, index) => (
          <div key={index} className="flex items-center gap-2 text-gray-700">
            <CheckCircle className={`w-4 h-4 ${instructor.highlightColor}`} />
            <span>{highlight}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
