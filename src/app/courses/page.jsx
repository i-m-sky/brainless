"use client"
import { useState } from "react";
import { useEnrollmentForm } from "@/hooks/useEnrollmentForm";
import { Navigation } from "@/components/Navigation/Navigation";
import { Footer } from "@/components/Footer/Footer";
import { EnrollmentModal } from "@/components/EnrollmentModal/EnrollmentModal";
import { CourseHeroSection } from "@/components/CoursesPage/CourseHeroSection";
import { CoursesGrid } from "@/components/CoursesPage/CoursesGrid";
import { WhyChooseSection } from "@/components/CoursesPage/WhyChooseSection";
import { InstructorsSection } from "@/components/CoursesPage/InstructorsSection";
import { PricingSection } from "@/components/CoursesPage/PricingSection";
import { CTASection } from "@/components/CoursesPage/CTASection";
import { Chatbot } from "@/components/Chatbot/Chatbot";
import { courses } from "@/data/coursesData";

export default function CoursesPage() {
  const [showForm, setShowForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
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
  } = useEnrollmentForm();

  const openForm = (courseType = null) => {
    setSelectedCourse(courseType);
    setShowForm(true);
    resetForm();

    // Pre-select course based on courseType
    if (courseType === "english") {
      setTimeout(() => selectEnglishCourse(), 100);
    } else if (courseType === "intensive") {
      setTimeout(() => selectAllSubjects(), 100);
    }
  };

  const closeForm = () => {
    setShowForm(false);
    setSelectedCourse(null);
    resetForm();
  };

  const handleCourseEnroll = (courseId) => {
    if (courseId === "english") {
      openForm("english");
    } else if (courseId === "intensive") {
      openForm("intensive");
    } else {
      openForm(null);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation onEnrollClick={() => openForm()} />

      <CourseHeroSection />

      <CoursesGrid courses={courses} onEnroll={handleCourseEnroll} />

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WhyChooseSection />
          <InstructorsSection />
        </div>
      </div>

      <PricingSection />

      <CTASection onEnroll={() => openForm()} />

      <Footer onEnrollClick={() => openForm()} />

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
      />

      {/* AI Chatbot */}
      <Chatbot />
    </div>
  );
}
