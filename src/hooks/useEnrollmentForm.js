import { useState } from "react";

export function useEnrollmentForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    phone: "",
    grade: "9",
    subjects: [],
    parentName: "",
    parentPhone: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Subject options based on grade
  const getSubjectsByGrade = (grade) => {
    const allGrades = ["9", "10", "11", "12"];
    if (allGrades.includes(grade)) {
      return ["Math", "Physics", "Chemistry"];
    }
    return [];
  };

  const calculatePrice = () => {
    const selectedSubjects = formData.subjects;
    const selectedCount = selectedSubjects.length;

    if (selectedCount === 0) return 0;

    // Check if Basic English and Communication course is selected
    const hasEnglishCourse = selectedSubjects.includes(
      "Basic English and Communication",
    );
    const scienceSubjects = selectedSubjects.filter(
      (s) => s !== "Basic English and Communication",
    );
    const scienceCount = scienceSubjects.length;

    let totalPrice = 0;

    // Calculate science subjects price - same pricing for all grades 9-12
    if (scienceCount === 3) {
      // All 3 science subjects bundle - intensive care grooming batch
      totalPrice += 6000;
    } else if (scienceCount === 2) {
      // 2 science subjects bundle
      totalPrice += 3000;
    } else if (scienceCount === 1) {
      // Individual science course
      totalPrice += 1500;
    }

    // Add English course price (with 20% discount already applied)
    if (hasEnglishCourse) {
      totalPrice += 7200; // 9000 - 20% discount = 7200
    }

    return totalPrice;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      // Clear subjects if grade changes to avoid confusion
      subjects: name === "grade" ? [] : prev.subjects,
    }));
  };

  const handleSubjectChange = (subject) => {
    setFormData((prev) => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter((s) => s !== subject)
        : [...prev.subjects, subject],
    }));
  };

  const selectAllSubjects = () => {
    const gradeSubjects = getSubjectsByGrade(formData.grade);
    setFormData((prev) => ({
      ...prev,
      subjects: [...gradeSubjects],
    }));
  };

  const selectEnglishCourse = () => {
    setFormData((prev) => ({
      ...prev,
      subjects: ["Basic English and Communication"],
      grade: "english-communication", // Set specific grade for English course
    }));
  };

  const clearAllSubjects = () => {
    setFormData((prev) => ({
      ...prev,
      subjects: [],
    }));
  };

  const resetForm = () => {
    setFormData({
      studentName: "",
      email: "",
      phone: "",
      grade: "9",
      subjects: [],
      parentName: "",
      parentPhone: "",
    });
    setMessage("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    // Enhanced validation - Only require essential fields
    if (
      !formData.studentName?.trim() ||
      !formData.email?.trim() ||
      !formData.phone?.trim() ||
      !formData.grade?.trim() ||
      formData.subjects.length === 0
    ) {
      setError(
        "Please fill in all required fields: Student Name, Email, Phone, Grade, and at least one Subject",
      );
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    // Phone validation (basic)
    if (formData.phone.trim().length < 10) {
      setError("Please enter a valid phone number (at least 10 digits)");
      setLoading(false);
      return;
    }

    try {
      const totalPrice = calculatePrice();
      const hasEnglishCourse = formData.subjects.includes(
        "Basic English and Communication",
      );
      const scienceCount = formData.subjects.filter(
        (s) => s !== "Basic English and Communication",
      ).length;

      let discountPercentage = 0;
      if (hasEnglishCourse) {
        discountPercentage = 20; // English course has 20% discount
      } else if (scienceCount === 3) {
        discountPercentage = 20; // Bundle discount for 3 subjects
      }

      const submissionData = {
        studentName: formData.studentName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        grade: formData.grade,
        subjects: formData.subjects.join(", "),
        parentName: formData.parentName?.trim() || "",
        parentPhone: formData.parentPhone?.trim() || "",
        paymentMethod: "bkash",
        discountPercentage: discountPercentage,
        amountPaid: totalPrice,
      };

      console.log("Submitting enrollment with data:", submissionData);

      const response = await fetch("/api/enrollments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();
      console.log("API Response:", { status: response.status, result });

      if (!response.ok) {
        console.error("API Error:", response.status, result);
        throw new Error(
          result.error ||
            `Server error: ${response.status} - ${response.statusText}`,
        );
      }

      console.log("Enrollment successful:", result);

      // Try to send email but don't fail enrollment if email fails
      try {
        const emailResponse = await fetch("/api/send-enrollment-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email.trim(),
            studentName: formData.studentName.trim(),
            paymentMethod: "bkash",
            amount: totalPrice,
          }),
        });

        if (emailResponse.ok) {
          console.log("Email sent successfully");
        } else {
          console.warn("Email sending failed but enrollment successful");
        }
      } catch (emailError) {
        console.warn("Email sending failed:", emailError);
        // Continue anyway, don't fail the enrollment
      }

      setMessage(
        result.message ||
          `✅ Enrollment submitted successfully! 

📝 Details:
Student: ${formData.studentName}
Grade: ${formData.grade}
Subjects: ${formData.subjects.join(", ")}
Total Amount: ৳${totalPrice}

💳 Next Steps:
1. Pay ৳${totalPrice} via bKash to: 01814187905
2. Take screenshot of payment confirmation
3. Send screenshot via WhatsApp to: 01814187905
4. We'll confirm your enrollment within 24 hours!

🚀 Ready to start learning!`,
      );

      // Reset form after successful submission
      resetForm();
    } catch (err) {
      console.error("Enrollment submission error:", err);
      setError(
        err.message ||
          `Failed to submit enrollment. Please try again or contact support via WhatsApp: 01814187905`,
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    message,
    error,
    totalPrice: calculatePrice(),
    handleInputChange,
    handleSubjectChange,
    selectAllSubjects,
    selectEnglishCourse,
    clearAllSubjects,
    handleSubmit,
    resetForm,
    getSubjectsByGrade,
  };
}
