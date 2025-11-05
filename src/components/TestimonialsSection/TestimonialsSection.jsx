import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Fatima Rahman",
    grade: "SSC 2024",
    image:
      "https://ucarecdn.com/b3e0775a-b084-4028-8dee-7fb801316587/-/format/auto/",
    result: "GPA 5.00",
    quote:
      "BrainEdify's personalized approach helped me understand complex Physics concepts that I used to struggle with. The small batch size meant I got individual attention whenever needed.",
    subjects: ["Math", "Physics", "Chemistry"],
  },
  {
    name: "Arman Hossain",
    grade: "HSC 2024",
    image:
      "https://ucarecdn.com/7af65915-8b99-4a13-9431-977d2fd6ad63/-/format/auto/",
    result: "GPA 4.89",
    quote:
      "The homelike environment at BrainEdify reduced my study stress significantly. Robin bhai's teaching method made Chemistry so much easier to understand.",
    subjects: ["Chemistry", "Physics"],
  },
  {
    name: "Rashida Khatun",
    grade: "SSC 2024",
    image:
      "https://ucarecdn.com/b3e0775a-b084-4028-8dee-7fb801316587/-/format/auto/",
    result: "GPA 4.95",
    quote:
      "I was weak in Math, but the regular assessments and progress tracking helped me improve step by step. Now Math is my strongest subject!",
    subjects: ["Math", "Physics"],
  },
];

export function TestimonialsSection({ onEnrollClick }) {
  return (
    <div className="py-20 bg-gradient-to-br from-[#fbbf24]/5 via-white to-[#f59e0b]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real students who trusted BrainEdify with their
            academic journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-[#fbbf24]/10 hover:border-[#fbbf24]/30 transition-all duration-300 hover:scale-105"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-3 border-[#fbbf24] shadow-lg"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 font-semibold">
                    {testimonial.grade}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold text-sm">
                      {testimonial.result}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-[#fbbf24]/30 absolute -top-2 -left-2" />
                <p className="text-gray-700 italic pl-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Subjects */}
              <div className="mb-6">
                <p className="text-sm font-bold text-gray-600 mb-2">
                  Subjects Studied:
                </p>
                <div className="flex flex-wrap gap-2">
                  {testimonial.subjects.map((subject, idx) => (
                    <span
                      key={idx}
                      className="bg-[#fbbf24]/10 text-[#f59e0b] px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#fbbf24] fill-current"
                  />
                ))}
                <span className="text-gray-600 font-semibold ml-2">5.0</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Signals */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#fbbf24]/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Join Our Success Stories
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-black text-[#fbbf24] mb-2">
                  100+
                </div>
                <div className="text-gray-600 font-semibold">
                  Successful Students
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-[#f59e0b] mb-2">
                  95%
                </div>
                <div className="text-gray-600 font-semibold">Pass Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-green-600 mb-2">
                  4.9/5
                </div>
                <div className="text-gray-600 font-semibold">
                  Student Rating
                </div>
              </div>
            </div>

            <button
              onClick={onEnrollClick}
              className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-white px-8 py-4 rounded-2xl font-black text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              🎯 Join Our Next Success Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
