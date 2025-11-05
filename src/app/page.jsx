"use client";
import { useState } from "react";
import { useEnrollmentForm } from "@/hooks/useEnrollmentForm";
import { Navigation } from "@/components/Navigation/Navigation";
import { DeadlineBanner } from "@/components/DeadlineBanner/DeadlineBanner";
import { HeroContent } from "@/components/HeroContent/HeroContent";
import { TrainerCard } from "@/components/TrainerCard/TrainerCard";
import { MissionSection } from "@/components/MissionSection/MissionSection";
import { FeaturesSection } from "@/components/FeaturesSection/FeaturesSection";
import { SubjectsSection } from "@/components/SubjectsSection/SubjectsSection";
import { EnglishCourseSection } from "@/components/EnglishCourseSection/EnglishCourseSection";
import { MidPageCTA } from "@/components/MidPageCTA/MidPageCTA";
import { PricingSection } from "@/components/PricingSection/PricingSection";
import { ContactSection } from "@/components/ContactSection/ContactSection";
import { CTASection } from "@/components/CTASection/CTASection";
import { Footer } from "@/components/Footer/Footer";
import { EnrollmentModal } from "@/components/EnrollmentModal/EnrollmentModal";
import { FloatingCTA } from "@/components/FloatingCTA/FloatingCTA";
import { Chatbot } from "@/components/Chatbot/Chatbot";
import { calculateDaysLeft } from "@/utils/dateCalculations";
import {
  handleWhatsApp,
  handleWhatsApp2,
  handleCall,
} from "@/utils/contactHandlers";

export default function BrainEdifyLanding() {
  const [showForm, setShowForm] = useState(false);
  const {
    formData,
    loading,
    message,
    error,
    totalPrice,
    handleInputChange,
    handleSubjectChange,
    selectAllSubjects,
    selectEnglishCourse,
    clearAllSubjects,
    handleSubmit,
    resetForm,
    getSubjectsByGrade,
  } = useEnrollmentForm();

  const daysLeft = calculateDaysLeft();

  const openForm = () => {
    setShowForm(true);
    resetForm();
  };

  const closeForm = () => {
    setShowForm(false);
    resetForm();
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navigation onEnrollClick={openForm} />

      {/* Enhanced Deadline Banner - More Prominent */}
      <div className="fixed w-full top-16 sm:top-20 z-40 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <span className="text-lg sm:text-xl font-bold animate-pulse">
                ⏰ LAST CHANCE!
              </span>
              <span className="text-sm sm:text-base">
                Enrollment closes December 30, 2025
              </span>
              <span className="text-lg sm:text-xl font-bold text-yellow-200">
                Only {daysLeft} days left!
              </span>
            </div>
            <div className="text-xs sm:text-sm mt-1 opacity-90">
              🎁 Register today and save up to 20% on all courses
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Hero Section - Better Mobile Spacing */}
      <div className="pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-[#fbbf24]/10 via-white to-[#f59e0b]/10 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#fbbf24] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#f59e0b] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-orange-300 rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Trust Indicators - Added Early */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm sm:text-base text-gray-600 mb-6">
              <div className="flex items-center gap-2 bg-white/80 px-3 py-2 rounded-full shadow-sm">
                <span className="text-green-600 font-bold">✓</span>
                <span>500+ Successful Students</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-3 py-2 rounded-full shadow-sm">
                <span className="text-blue-600 font-bold">★</span>
                <span>5.0 Rating • 200+ Reviews</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-3 py-2 rounded-full shadow-sm">
                <span className="text-orange-600 font-bold">🎓</span>
                <span>5+ Years Experience</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="transform hover:scale-105 transition-all duration-700 ease-in-out animate-slideInLeft">
              <HeroContent
                onEnrollClick={openForm}
                onWhatsApp={handleWhatsApp}
                onWhatsApp2={handleWhatsApp2}
              />
            </div>
            <div className="transform hover:scale-105 transition-all duration-700 ease-in-out animate-slideInRight">
              <TrainerCard daysLeft={daysLeft} />
            </div>
          </div>

          {/* Enhanced CTA Section - Better Mobile */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-2xl max-w-4xl mx-auto border border-orange-200">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                🚀 Ready to Excel in Your Studies?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Join our proven system that has helped hundreds of students
                achieve their academic dreams
              </p>

              {/* Primary CTA - More Prominent */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <button
                  onClick={openForm}
                  className="w-full sm:w-auto bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 btn-animate relative overflow-hidden group"
                >
                  <span className="relative z-10">🎯 Reserve My Seat Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

              {/* Secondary Actions - Simplified */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center text-sm sm:text-base">
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 hover:scale-105 transition-all duration-300"
                >
                  💬 WhatsApp Us Now
                </button>
                <button
                  onClick={handleCall}
                  className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:scale-105 transition-all duration-300"
                >
                  📞 Call: 01538309105
                </button>
              </div>

              <div className="mt-6 text-sm text-gray-500">
                🔒 Secure enrollment • 💯 100% satisfaction guarantee • 📱 24/7
                support
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Student Testimonial Section - Added for Social Proof */}
      <div className="py-12 sm:py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              💬 What Our Students Say
            </h2>
            <p className="text-lg text-gray-600">
              Real success stories from our amazing students
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 testimonial-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Sakib Rahman</h4>
                  <p className="text-sm text-gray-600">Grade 10, GPA 5.00</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                "BrainEdify helped me improve from GPA 3.5 to 5.00! The teachers
                explain everything so clearly. My Physics and Math scores
                improved dramatically!"
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 testimonial-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                  T
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Tasnim Akter</h4>
                  <p className="text-sm text-gray-600">
                    Grade 12, University Admit
                  </p>
                </div>
              </div>
              <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                "The English course was amazing! I went from struggling with
                grammar to confidently writing essays. Got admission to DU!"
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 testimonial-card md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Rafiq Ahmed</h4>
                  <p className="text-sm text-gray-600">
                    Grade 11, Chemistry Expert
                  </p>
                </div>
              </div>
              <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Chemistry was my worst subject. Now it's my favorite! The
                systematic approach and personal attention made all the
                difference."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Animated Sections with Better Spacing */}
      <div className="animate-fadeInUp animation-delay-100 py-8 sm:py-12">
        <MissionSection />
      </div>

      <div className="animate-fadeInUp animation-delay-200 py-8 sm:py-12 bg-gray-50">
        <FeaturesSection />
      </div>

      <div className="animate-fadeInUp animation-delay-300 py-8 sm:py-12">
        <SubjectsSection onEnrollClick={openForm} />
      </div>

      <div className="animate-fadeInUp animation-delay-400 py-8 sm:py-12 bg-gray-50">
        <EnglishCourseSection
          onEnrollClick={openForm}
          onWhatsApp={handleWhatsApp}
        />
      </div>

      <div className="animate-fadeInUp animation-delay-500 py-8 sm:py-12">
        <MidPageCTA
          daysLeft={daysLeft}
          onEnrollClick={openForm}
          onWhatsApp={handleWhatsApp}
        />
      </div>

      <div className="animate-fadeInUp animation-delay-600 py-8 sm:py-12 bg-gray-50">
        <PricingSection onEnrollClick={openForm} />
      </div>

      <div className="animate-fadeInUp animation-delay-700 py-8 sm:py-12">
        <ContactSection />
      </div>

      <div className="animate-fadeInUp animation-delay-800 py-8 sm:py-12">
        <CTASection onEnrollClick={openForm} />
      </div>

      <div className="animate-fadeInUp animation-delay-900">
        <Footer onEnrollClick={openForm} />
      </div>

      <EnrollmentModal
        showForm={showForm}
        onClose={closeForm}
        formData={formData}
        loading={loading}
        message={message}
        error={error}
        totalPrice={totalPrice}
        onInputChange={handleInputChange}
        onSubjectChange={handleSubjectChange}
        onSelectAllSubjects={selectAllSubjects}
        onSelectEnglishCourse={selectEnglishCourse}
        onClearAllSubjects={clearAllSubjects}
        onSubmit={handleSubmit}
        getSubjectsByGrade={getSubjectsByGrade}
      />

      {/* Simplified Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <button
          onClick={handleWhatsApp}
          className="w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center hover:bg-green-600 floating-action"
          aria-label="WhatsApp"
        >
          💬
        </button>
        <button
          onClick={handleCall}
          className="w-14 h-14 bg-blue-500 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center hover:bg-blue-600 floating-action"
          aria-label="Call"
        >
          📞
        </button>
        <button
          onClick={openForm}
          className="w-14 h-14 bg-orange-500 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center hover:bg-orange-600 floating-action text-sm"
          aria-label="Enroll"
        >
          🎓
        </button>
      </div>

      {/* AI Chatbot */}
      <Chatbot />

      {/* Enhanced Global Animation Styles */}
      <style jsx global>{`
        /* Improved Mobile Typography */
        @media (max-width: 640px) {
          h1 { font-size: 2rem !important; line-height: 1.2; }
          h2 { font-size: 1.75rem !important; line-height: 1.3; }
          h3 { font-size: 1.5rem !important; line-height: 1.4; }
          p { font-size: 1rem !important; line-height: 1.6; margin-bottom: 1rem; }
        }
        
        /* Enhanced Card Hover Effects */
        .testimonial-card {
          transform: translateY(0);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        /* Feature Card Hover Effects */
        .feature-card {
          transform: translateY(0) scale(1);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }
        
        .feature-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.3);
        }

        .feature-card:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transition: left 0.6s;
        }
        
        .feature-card:hover:before {
          left: 100%;
        }

        /* Enhanced Feature Icon Animations */
        .feature-icon {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform: rotate(0deg) scale(1);
        }

        .feature-card:hover .feature-icon {
          transform: rotate(10deg) scale(1.1);
          color: #ff6b35;
        }

        /* Subject Card Animations */
        .subject-card {
          transform: translateY(0) rotateX(0deg);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .subject-card:hover {
          transform: translateY(-15px) rotateX(10deg);
          box-shadow: 0 35px 70px -15px rgba(0, 0, 0, 0.3);
        }

        .subject-card:hover .subject-icon {
          animation: floatRotate 2s infinite ease-in-out;
        }

        @keyframes floatRotate {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-10px) rotate(5deg); 
          }
        }

        /* Pricing Card Effects */
        .pricing-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }

        .pricing-card:hover {
          transform: translateY(-20px) scale(1.05);
          box-shadow: 0 40px 80px -20px rgba(255, 107, 53, 0.4);
        }

        .pricing-card:hover .pricing-badge {
          animation: pulse 2s infinite;
        }

        /* CTA Button Enhanced Effects */
        .cta-button {
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .cta-button:before {
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

        .cta-button:hover:before {
          width: 300px;
          height: 300px;
        }

        .cta-button:active {
          transform: scale(0.95);
        }
        
        /* Floating Action Animations */
        .floating-action {
          animation: floatingPulse 2s infinite ease-in-out;
        }
        
        @keyframes floatingPulse {
          0%, 100% { 
            transform: translateY(0px) scale(1);
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          }
          50% { 
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 15px 35px rgba(0,0,0,0.3);
          }
        }

        /* Error Shake Animation */
        .animate-shake {
          animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        }

        @keyframes shake {
          10%, 90% {
            transform: translateX(-1px);
          }
          
          20%, 80% {
            transform: translateX(2px);
          }
          
          30%, 50%, 70% {
            transform: translateX(-4px);
          }
          
          40%, 60% {
            transform: translateX(4px);
          }
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Enhanced Custom animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes slideInLeft {
          0% { 
            opacity: 0; 
            transform: translateX(-100px); 
          }
          100% { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes slideInRight {
          0% { 
            opacity: 0; 
            transform: translateX(100px); 
          }
          100% { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes fadeInUp {
          0% { 
            opacity: 0; 
            transform: translateY(40px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes scaleIn {
          0% { 
            opacity: 0; 
            transform: scale(0.8); 
          }
          100% { 
            opacity: 1; 
            transform: scale(1); 
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes slideInUp {
          0% {
            opacity: 0;
            transform: translateY(100px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        /* Animation classes */
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-shimmer::before {
          animation: shimmer 2s infinite;
        }

        .animate-slideInUp {
          animation: slideInUp 0.5s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        /* Animation delays */
        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-700 { animation-delay: 0.7s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-900 { animation-delay: 0.9s; }

        /* Enhanced Hover effects for interactive elements */
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        /* Enhanced Button animations */
        .btn-animate {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .btn-animate:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        
        .btn-animate:hover:before {
          left: 100%;
        }

        /* Improved focus states for accessibility */
        input:focus, select:focus, textarea:focus, button:focus {
          outline: 3px solid #fbbf24;
          outline-offset: 2px;
        }

        /* Loading animation for buttons */
        .loading-spinner {
          display: inline-block;
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255,255,255,.3);
          border-radius: 50%;
          border-top-color: #fff;
          animation: spin 1s ease-in-out infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Enhanced scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #fbbf24, #f59e0b);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #f59e0b, #d97706);
        }

        /* Better spacing for mobile */
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .grid {
            gap: 1rem;
          }
          
          .text-center {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
