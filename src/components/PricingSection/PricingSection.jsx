import { CheckCircle } from "lucide-react";

export function PricingSection({ onEnrollClick }) {
  return (
    <div className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 mb-4">
            Affordable Pricing
          </h2>
          <p className="text-xl text-gray-600">Choose your learning path</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Single Science Subject */}
          <div className="pricing-card bg-gradient-to-br from-[#f8fafb] to-white border-2 border-[#f59e0b] border-opacity-20 rounded-2xl p-8 hover:border-[#f59e0b] transition">
            <h3 className="text-xl font-black text-gray-900 mb-2">
              Single Science Subject
            </h3>
            <p className="text-gray-600 mb-6 text-sm">
              Master one science subject
            </p>
            <div className="mb-6">
              <div className="text-4xl font-black text-[#f59e0b]">৳1,500</div>
              <p className="text-gray-600 mt-1 text-sm">One subject</p>
              <p className="text-gray-600 mt-1 text-xs">Per month</p>
            </div>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-[#f59e0b]" />
                Choose Math, Physics, or Chemistry
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-[#f59e0b]" />
                Expert instruction
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-[#f59e0b]" />
                Progress tracking
              </li>
            </ul>
            <button
              onClick={onEnrollClick}
              className="w-full bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-white py-3 rounded-xl font-bold hover:shadow-lg transition text-sm"
            >
              Enroll Now
            </button>
          </div>

          {/* Two Science Subjects */}
          <div className="pricing-card bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-8 hover:border-blue-400 transition">
            <h3 className="text-xl font-black text-gray-900 mb-2">
              Two Science Subjects
            </h3>
            <p className="text-gray-600 mb-6 text-sm">
              Perfect combination deal
            </p>
            <div className="mb-6">
              <div className="text-4xl font-black text-blue-600">৳3,000</div>
              <p className="text-gray-600 mt-1 text-sm">Two subjects</p>
              <p className="text-gray-600 mt-1 text-xs">Per month</p>
            </div>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                Choose any two sciences
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                Expert instruction
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                Priority support
              </li>
            </ul>
            <button
              onClick={onEnrollClick}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-bold hover:shadow-lg transition text-sm"
            >
              Enroll Now
            </button>
          </div>

          {/* All Science Subjects - Intensive Care */}
          <div className="pricing-card bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] rounded-2xl p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-br from-[#fff] to-[#fef3c7] opacity-10 w-32 h-32 rounded-full -mr-16 -mt-16"></div>
            <div className="pricing-badge absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              20% OFF
            </div>
            <div className="relative z-10">
              <div className="inline-block bg-white text-[#f59e0b] px-3 py-1 rounded-full text-xs font-black mb-4">
                INTENSIVE CARE
              </div>
              <h3 className="text-xl font-black text-white mb-2">
                All Science Bundle
              </h3>
              <p className="text-yellow-100 mb-6 text-sm">
                Intensive Care Grooming Batch
              </p>
              <div className="mb-6">
                <div className="text-4xl font-black text-white">৳6,000</div>
                <p className="text-yellow-100/70 mt-1 text-sm line-through">
                  ৳7,500
                </p>
                <p className="text-yellow-100 text-xs font-bold">
                  Save ৳1,500!
                </p>
                <p className="text-yellow-100 mt-1 text-sm">
                  Math + Physics + Chemistry
                </p>
                <p className="text-yellow-100 mt-1 text-xs">Per month</p>
              </div>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-4 h-4" />
                  All three science subjects
                </li>
                <li className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-4 h-4" />
                  Intensive Care Grooming
                </li>
                <li className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-4 h-4" />
                  Maximum support
                </li>
              </ul>
              <button
                onClick={onEnrollClick}
                className="w-full bg-white text-[#f59e0b] py-3 rounded-xl font-bold hover:bg-gray-100 transition text-sm"
              >
                Enroll Now
              </button>
            </div>
          </div>

          {/* Basic English and Communication */}
          <div className="pricing-card bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-2xl p-8 hover:border-green-400 transition relative">
            <div className="pricing-badge absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              20% OFF
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-2">
              English Course
            </h3>
            <p className="text-gray-600 mb-6 text-sm">
              Basic English & Communication
            </p>
            <div className="mb-6">
              <div className="text-4xl font-black text-green-600">৳7,200</div>
              <p className="text-gray-500 mt-1 text-sm line-through">৳9,000</p>
              <p className="text-green-600 text-xs font-bold">Save ৳1,800!</p>
              <p className="text-gray-600 mt-1 text-xs">
                Fixed fee (3-3.5 months)
              </p>
            </div>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-600" />
                3-3.5 months duration
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Grammar & Vocabulary
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Speaking & Writing
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-600" />
                IELTS Band 7 Trainer
              </li>
            </ul>
            <button
              onClick={onEnrollClick}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-bold hover:shadow-lg transition text-sm"
            >
              Enroll Now
            </button>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-black mb-4">
              🎁 Special Benefits for All Students
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#fbbf24] rounded-full flex items-center justify-center font-bold text-black text-xs">
                  3
                </div>
                <span>FREE Demo Classes</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#f59e0b] rounded-full flex items-center justify-center font-bold text-white text-xs">
                  4
                </div>
                <span>Days per Week Classes</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center font-bold text-white text-xs">
                  ✓
                </div>
                <span>Progress Tracking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
