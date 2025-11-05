import { Calendar, Users, MessageCircle } from "lucide-react";

export function CourseOverview() {
  return (
    <div className="bg-white rounded-3xl shadow-2xl border-4 border-blue-100 p-8 mb-12 transform hover:scale-105 transition-transform duration-300">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Course Details */}
        <div>
          <h3 className="text-3xl font-black text-gray-800 mb-6">
            Course Overview
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Duration</h4>
                <p className="text-gray-600">3 – 3.5 Months</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Target Group</h4>
                <p className="text-gray-600">
                  SSC/HSC students & beginners in English
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#fbbf24] rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Mode</h4>
                <p className="text-gray-600">
                  Offline / Interactive Batch (20–25 students)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Trainer</h4>
                <p className="text-gray-600">
                  Md. Robin Jamal — IELTS Overall Band Score 7
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Clean Trainer Photo - Optimized */}
        <div className="text-center">
          <div className="relative inline-block">
            <img
              src="https://ucarecdn.com/7af65915-8b99-4a13-9431-977d2fd6ad63/-/format/auto/"
              alt="Md. Robin Jamal - English Course Trainer"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover object-top rounded-2xl shadow-xl"
            />
          </div>

          {/* Professional Labels Below Photo */}
          <div className="mt-4 space-y-2">
            <div className="flex flex-wrap justify-center gap-2">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-bold text-xs">
                ✅ CERTIFIED
              </div>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold text-xs">
                🎯 IELTS Band 7
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
