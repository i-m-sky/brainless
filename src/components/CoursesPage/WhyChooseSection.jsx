import {
  Users,
  Award,
  Clock,
  TrendingUp,
  Sparkles,
  Target,
  CheckCircle,
  BookOpen,
} from "lucide-react";
import { FeatureCard } from "./FeatureCard";

export function WhyChooseSection() {
  const features = [
    {
      icon: <Users className="w-12 h-12 text-[#fbbf24] mx-auto mb-4" />,
      title: "Limited Batch Size",
      description: "Maximum 25 students for personalized attention",
      features: [
        "Individual focus",
        "Better interaction",
        "Quality over quantity",
      ],
      color: "text-[#fbbf24]",
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
      title: "Expert Instructors",
      description: "Certified teachers with proven track records",
      features: [
        "Subject specialists",
        "Experience & expertise",
        "Student success stories",
      ],
      color: "text-blue-600",
    },
    {
      icon: <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />,
      title: "Flexible Learning",
      description: "4 days per week with comfortable environment",
      features: [
        "Balanced schedule",
        "Home-like setting",
        "Stress-free learning",
      ],
      color: "text-green-600",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />,
      title: "Progress Tracking",
      description: "Regular assessments and detailed feedback",
      features: [
        "Weekly assessments",
        "Performance analysis",
        "Improvement plans",
      ],
      color: "text-purple-600",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-red-600 mx-auto mb-4" />,
      title: "3 FREE Demo Classes",
      description: "Experience our teaching before enrolling",
      features: [
        "No commitment needed",
        "Full class experience",
        "Meet your instructor",
      ],
      color: "text-red-600",
    },
    {
      icon: <Target className="w-12 h-12 text-indigo-600 mx-auto mb-4" />,
      title: "Concept-Focused",
      description: "Deep understanding over memorization",
      features: [
        "Clear explanations",
        "Practical examples",
        "Long-term retention",
      ],
      color: "text-indigo-600",
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-teal-600 mx-auto mb-4" />,
      title: "Flexible Payment",
      description: "Multiple payment options available",
      features: ["Monthly payments", "Discount packages", "Easy installments"],
      color: "text-teal-600",
    },
    {
      icon: <BookOpen className="w-12 h-12 text-orange-600 mx-auto mb-4" />,
      title: "Comfortable Environment",
      description: "Home-like atmosphere for effective learning",
      features: [
        "Relaxed atmosphere",
        "Interactive sessions",
        "Student-friendly",
      ],
      color: "text-orange-600",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
            🎯 Why Choose BrainEdify Courses?
          </h2>
          <p className="text-xl text-gray-600">
            Experience the difference with our proven teaching methodology
          </p>
        </div>

        {/* Feature Cards Grid with 3D Animation */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          style={{ perspective: "1200px" }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}
