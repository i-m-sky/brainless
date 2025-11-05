import { Calendar } from "lucide-react";
import { CourseOverview } from "./CourseOverview";
import { CourseModules } from "./CourseModules";
import { EnglishCourseCTA } from "./EnglishCourseCTA";

export function EnglishCourseSection({ onEnrollClick, onWhatsApp }) {
  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full mb-6 shadow-xl">
            <Calendar className="w-5 h-5" />
            <span className="font-bold text-sm">
              NEW COURSE STARTING FEBRUARY!
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Basic English Communication Course
          </h2>
          <p className="text-xl text-gray-700 font-semibold max-w-3xl mx-auto">
            Build strong foundation in English grammar, vocabulary &
            communication for academic and daily life needs
          </p>
        </div>

        <CourseOverview />
        <CourseModules />
        <EnglishCourseCTA
          onEnrollClick={onEnrollClick}
          onWhatsApp={onWhatsApp}
        />
      </div>
    </div>
  );
}
