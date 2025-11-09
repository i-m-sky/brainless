"use client"
import { useState } from "react";
import { useEnrollmentForm } from "@/hooks/useEnrollmentForm";
import { Navigation } from "@/components/Navigation/Navigation";
import { EnrollmentModal } from "@/components/EnrollmentModal/EnrollmentModal";
import { Footer } from "@/components/Footer/Footer";
import {
  Phone,
  MessageCircle,
  Calendar,
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
} from "lucide-react";

export default function TeamsPage() {
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
    clearAllSubjects,
    onSelectEnglishCourse,
    getSubjectsByGrade,
    handleSubmit,
    resetForm,
  } = useEnrollmentForm();


  const openForm = () => {
    setShowForm(true);
    resetForm();
  };

  const closeForm = () => {
    setShowForm(false);
    resetForm();
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/+8801814187905", "_blank");
  };

  

  const handleCall = () => {
    window.open("tel:+8801814187905", "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation onEnrollClick={openForm} />

      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-gradient-to-br from-[#fbbf24]/5 via-white to-[#f59e0b]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            🌟 Welcome to{" "}
            <span className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent">
              BrainEdify
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Empowering Students With Smarter Learning
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Helping SSC & HSC Science students{" "}
            <strong>master Math, Physics & Chemistry</strong> through
            personalized learning and smart study techniques.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#fbbf24]/20">
              <Users className="w-12 h-12 text-[#fbbf24] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800">25</h3>
              <p className="text-gray-600">Limited Students</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#fbbf24]/20">
              <Calendar className="w-12 h-12 text-[#fbbf24] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800">Jan 15</h3>
              <p className="text-gray-600">Start Date</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#f59e0b]/20">
              <Star className="w-12 h-12 text-[#f59e0b] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#f59e0b]">20%</h3>
              <p className="text-gray-600">Early Bird Discount</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={openForm}
              className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              🎯 Enroll Now
            </button>
            <button
              onClick={handleWhatsApp}
              className="bg-green-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-600 transition flex items-center gap-2 justify-center"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp Chat
            </button>
            <button
              onClick={handleCall}
              className="bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-600 transition flex items-center gap-2 justify-center"
            >
              <Phone className="w-6 h-6" />📞 Call Now
            </button>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
              👨‍🏫 Meet the Founder
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#fbbf24]/5 to-[#f59e0b]/5 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src="https://ucarecdn.com/7af65915-8b99-4a13-9431-977d2fd6ad63/-/format/auto/"
                  alt="Md. Robin Jamal"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#fbbf24] shadow-xl"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  Md. Robin Jamal
                </h3>
                <p className="text-lg text-gray-600 mb-3">
                  CEO & Lead Trainer — BrainEdify
                </p>
                <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold mb-4">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  IELTS: Overall Band Score 7
                </div>

                <blockquote className="text-lg text-gray-700 italic mb-6 border-l-4 border-[#fbbf24] pl-4">
                  "Education should empower students to think, solve, and grow —
                  not fear their books."
                </blockquote>

                <div className="space-y-3">
                  <h4 className="font-bold text-gray-800 mb-2">
                    Robin brings strong command in:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#fbbf24]" />
                      <span className="text-gray-700">
                        Project & Operations Management
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#fbbf24]" />
                      <span className="text-gray-700">
                        English & Communication Training
                      </span>
                    </div>
                    <div className="flex items-center gap-2 md:col-span-2">
                      <CheckCircle className="w-5 h-5 text-[#fbbf24]" />
                      <span className="text-gray-700">
                        Student academic success guidance
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why BrainEdify Works */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
              ✅ Why BrainEdify Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We don't just teach — <strong>We shape achievers.</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "✨",
                title: "All Core Science Subjects in One Place",
                description:
                  "Math, Physics, and Chemistry under one comprehensive program",
              },
              {
                icon: "👥",
                title: "Individual care in small intensive batch",
                description:
                  "Limited to 25 students for personalized attention",
              },
              {
                icon: "📈",
                title: "Motivation + Progress Monitoring",
                description: "Regular assessments and concept mastery tracking",
              },
              {
                icon: "💰",
                title: "Affordable & Flexible",
                description:
                  "Quality education at accessible pricing with flexible payment options",
              },
              {
                icon: "🏠",
                title: "Stress-free homelike environment",
                description:
                  "Comfortable learning atmosphere that reduces academic anxiety",
              },
              {
                icon: "🎯",
                title: "Results-Oriented Approach",
                description:
                  "Focus on understanding concepts rather than rote memorization",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subjects Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
              🧪 Subjects We Teach
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#fbbf24]/5 to-[#f59e0b]/5 rounded-3xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Mathematics
                  </h3>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-4xl mb-4">⚛️</div>
                  <h3 className="text-xl font-bold text-gray-800">Physics</h3>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-4xl mb-4">🧪</div>
                  <h3 className="text-xl font-bold text-gray-800">Chemistry</h3>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="w-6 h-6 text-[#fbbf24]" />
                <span className="text-lg font-semibold text-gray-800">
                  4 Days / Week
                </span>
              </div>
              <p className="text-gray-700 mb-4">
                Regular Assessments + Concept Mastery
              </p>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-gray-800 mb-2">
                  Course Instructor
                </h4>
                <p className="text-lg font-semibold text-[#f59e0b]">
                  Fatema Jamal
                </p>
                <p className="text-gray-600">CSE Student</p>
                <p className="text-gray-500">
                  Institute of Science & Technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Admission Process */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
              📝 Simple Admission Process
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1️⃣",
                  title: "Fill up the Online Admission Form",
                  description:
                    "Complete our simple enrollment form with your details",
                },
                {
                  step: "2️⃣",
                  title: "Confirm your seat with registration fee",
                  description:
                    "Secure your spot with a small registration payment",
                },
                {
                  step: "3️⃣",
                  title: "Attend an orientation session",
                  description:
                    "Meet the team and learn about our teaching methodology",
                },
                {
                  step: "4️⃣",
                  title: "Begin your journey with BrainEdify!",
                  description: "Start your path to academic excellence",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg text-center"
                >
                  <div className="text-4xl mb-4">{step.step}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Important Dates & Info */}
      <div className="py-16 bg-gradient-to-br from-[#fbbf24]/10 via-white to-[#f59e0b]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-black text-center text-gray-800 mb-8">
              📌 Important Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-gradient-to-br from-[#fbbf24]/5 to-[#f59e0b]/5 rounded-2xl">
                <Users className="w-12 h-12 text-[#fbbf24] mx-auto mb-3" />
                <h3 className="font-bold text-gray-800 mb-2">Batch Size</h3>
                <p className="text-lg font-semibold text-gray-700">
                  Limited to <strong>25 Students</strong>
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-[#fbbf24]/5 to-[#f59e0b]/5 rounded-2xl">
                <Calendar className="w-12 h-12 text-[#fbbf24] mx-auto mb-3" />
                <h3 className="font-bold text-gray-800 mb-2">Start Date</h3>
                <p className="text-lg font-semibold text-gray-700">
                  <strong>January 15</strong>
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-[#fbbf24]/5 to-[#f59e0b]/5 rounded-2xl">
                <Clock className="w-12 h-12 text-[#fbbf24] mx-auto mb-3" />
                <h3 className="font-bold text-gray-800 mb-2">
                  Last Date of Admission
                </h3>
                <p className="text-lg font-semibold text-gray-700">
                  <strong>December 30</strong>
                </p>
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-to-r from-[#f59e0b]/10 to-red-100 rounded-2xl border-2 border-[#f59e0b]/20">
              <Star className="w-16 h-16 text-[#f59e0b] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#f59e0b] mb-2">
                🎉 Special Offer!
              </h3>
              <p className="text-xl font-bold text-gray-800">
                20% Early Bird Discount
              </p>
              <p className="text-gray-600 mt-2">
                Available for limited time only!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-16 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to Transform Your Academic Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join BrainEdify today and experience the difference personalized
            learning can make!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openForm}
              className="bg-white text-[#f59e0b] px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              🎯 Enroll Now - Limited Seats!
            </button>
            <button
              onClick={handleWhatsApp}
              className="bg-green-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-600 transition flex items-center gap-2 justify-center"
            >
              <MessageCircle className="w-6 h-6" />
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>

      <Footer onEnrollClick={openForm} />

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
        onClearAllSubjects={clearAllSubjects}
        onSelectEnglishCourse={onSelectEnglishCourse}   // ✅ Add this
        getSubjectsByGrade={getSubjectsByGrade}     
        onSubmit={handleSubmit}
      />
    </div>
  );
}
