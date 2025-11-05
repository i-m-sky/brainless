import { Calculator, BookOpen, Target, MessageSquare } from "lucide-react";
import { PricingCard } from "./PricingCard";

export function PricingSection() {
  const pricingOptions = [
    {
      icon: <Calculator className="w-8 h-8 text-[#f59e0b] mx-auto mb-2" />,
      title: "Individual Subjects",
      price: "1,500",
      duration: "per month",
      iconColor: "text-[#f59e0b]",
      priceColor: "text-[#f59e0b]",
      checkColor: "text-[#f59e0b]",
      borderColor: "border-[#f59e0b]/20",
      hoverColor: "group-hover:text-[#f59e0b]",
      features: [
        "Math OR Physics OR Chemistry",
        "Individual attention",
        "Progress tracking",
      ],
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />,
      title: "Dual Package",
      price: "3,000",
      duration: "per month",
      iconColor: "text-blue-600",
      priceColor: "text-blue-600",
      checkColor: "text-blue-600",
      borderColor: "border-blue-200",
      hoverColor: "group-hover:text-blue-600",
      features: [
        "Any 2 science subjects",
        "Priority support",
        "Integrated learning",
      ],
    },
    {
      icon: <Target className="w-8 h-8 text-white mx-auto mb-2" />,
      title: "Intensive Care Bundle",
      price: "6,000",
      originalPrice: "7,500",
      savings: "1,500",
      duration: "per month",
      badge: "BEST VALUE",
      isHighlighted: true,
      bgGradient: "from-[#fbbf24] to-[#f59e0b]",
      iconColor: "text-white",
      priceColor: "text-white",
      checkColor: "text-white",
      borderColor: "",
      hoverColor: "hover:text-yellow-200",
      features: [
        "All 3 subjects (Math + Physics + Chemistry)",
        "Intensive Care personal attention",
        "Maximum support & tracking",
      ],
    },
  ];

  const englishCourse = {
    icon: <MessageSquare className="w-12 h-12 mx-auto mb-4" />,
    title: "English & Communication Course",
    price: "7,200",
    originalPrice: "9,000",
    savings: "1,800",
    duration: "Fixed fee for complete 3-3.5 months course",
    badge: "20% OFF",
    isHighlighted: true,
    bgGradient: "from-green-600 to-green-700",
    iconColor: "text-white",
    priceColor: "text-white",
    checkColor: "text-white",
    borderColor: "",
    hoverColor: "hover:text-green-200",
    features: [
      "Complete Grammar & Vocabulary",
      "Speaking & Pronunciation",
      "Writing Skills Development",
      "IELTS Band 7 Trainer",
    ],
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
            💰 Course Pricing Overview
          </h2>
          <p className="text-lg text-gray-600">
            Choose the package that fits your needs and budget
          </p>
        </div>

        {/* Mobile-First Pricing Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          style={{ perspective: "1200px" }}
        >
          {pricingOptions.map((pricing, index) => (
            <PricingCard key={index} pricing={pricing} />
          ))}
        </div>

        {/* Special English Course Card */}
        <div
          className="mt-8 max-w-2xl mx-auto"
          style={{ perspective: "1000px" }}
        >
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 shadow-xl text-white relative pricing-card-3d group">
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold pulse-animation">
              {englishCourse.badge}
            </div>
            <div className="text-center mb-6">
              <div className="pricing-icon-3d group-hover:rotate-y-12 group-hover:scale-110 transition-all duration-500">
                {englishCourse.icon}
              </div>
              <h3 className="text-2xl font-bold transition-all duration-300 group-hover:text-green-200">
                {englishCourse.title}
              </h3>
              <div className="text-3xl font-black mt-3 transition-all duration-300 group-hover:scale-110">
                ৳{englishCourse.price}
              </div>
              <p className="text-sm opacity-90 line-through">
                ৳{englishCourse.originalPrice}
              </p>
              <p className="text-xs font-bold">
                Save ৳{englishCourse.savings}!
              </p>
              <p className="text-sm opacity-90">{englishCourse.duration}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              {englishCourse.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 transition-all duration-200 hover:translate-x-2 hover:text-green-200"
                >
                  <div className="w-4 h-4 transition-all duration-300 hover:rotate-180">
                    ✓
                  </div>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
