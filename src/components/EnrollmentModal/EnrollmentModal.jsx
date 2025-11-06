import { X, CheckCircle, Phone, MessageCircle } from "lucide-react";
import { useRef } from "react";

export function EnrollmentModal({
  showForm,
  onClose,
  formData,
  loading,
  message,
  error,
  totalPrice,
  onInputChange,
  onSubjectChange,
  onSelectAllSubjects,
  onSelectEnglishCourse,
  onClearAllSubjects,
  onSubmit,
  getSubjectsByGrade,
}) {
  const formRef = useRef(null);

  if (!showForm) return null;

  // Success state detection
  const isSuccessState = message && message.includes("✅") && !error;

  // Calculate pricing details for display
  const selectedSubjects = formData.subjects;
  const hasEnglishCourse = selectedSubjects.includes(
    "Basic English and Communication",
  );
  const scienceSubjects = selectedSubjects.filter(
    (s) => s !== "Basic English and Communication",
  );
  const scienceCount = scienceSubjects.length;

  // Get available subjects for current grade
  const gradeSubjects = getSubjectsByGrade(formData.grade);
  const isEnglishGrade = formData.grade === "english-communication";

  // Success Screen
  if (isSuccessState) {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
        <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-hidden shadow-2xl transform animate-scaleIn">
          {/* Success Header */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-2xl font-black text-white mb-2">
                🎉 Enrollment Successful!
              </h2>
              <p className="text-green-100 text-sm">
                Your application has been submitted successfully
              </p>
            </div>
          </div>

          {/* Success Content */}
          <div className="p-6 space-y-6">
            {/* Next Steps */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-200">
              <h3 className="text-lg font-bold text-blue-800 mb-4 flex items-center gap-2">
                🚀 Next Steps to Complete Your Enrollment
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="text-blue-900 font-semibold">
                      Check Your Email
                    </p>
                    <p className="text-blue-700 text-sm">
                      Confirmation email with payment details sent to your inbox
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="text-blue-900 font-semibold">Make Payment</p>
                    <p className="text-blue-700 text-sm">
                      Send ৳{totalPrice} via bKash to:{" "}
                      <strong>01538309105</strong>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="text-blue-900 font-semibold">
                      Take Screenshot
                    </p>
                    <p className="text-blue-700 text-sm">
                      Capture payment confirmation from bKash
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <p className="text-blue-900 font-semibold">
                      Send Confirmation
                    </p>
                    <p className="text-blue-700 text-sm">
                      WhatsApp screenshot to: <strong>01538309105</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/8801538309105"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-bold text-center transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Send via WhatsApp
              </a>

              <a
                href="tel:01538309105"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-bold text-center transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            {/* Payment Details */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-xl border-2 border-orange-200">
              <h4 className="font-bold text-orange-800 mb-2">
                💳 Payment Details
              </h4>
              <div className="text-sm text-orange-700 space-y-1">
                <p>
                  <strong>Amount:</strong> ৳{totalPrice}
                </p>
                <p>
                  <strong>Method:</strong> bKash Send Money
                </p>
                <p>
                  <strong>Number:</strong> 01538309105
                </p>
                <p>
                  <strong>Reference:</strong> {formData.studentName} -{" "}
                  {formData.grade}
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <h4 className="font-bold text-gray-800 mb-2">
                ⏱️ What Happens Next?
              </h4>
              <div className="text-sm text-gray-700 space-y-1">
                <p>• We'll verify your payment within 24 hours</p>
                <p>• You'll receive enrollment confirmation via WhatsApp</p>
                <p>• Classes start details will be shared</p>
                <p>• Access to learning materials and schedules</p>
              </div>
            </div>

            {/* Close Button */}
            <div className="flex gap-4">
              <button
                onClick={onClose}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Close
              </button>

              <button
                onClick={() => {
                  onClose();
                  // Scroll to top of page
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex-1 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-start justify-center p-2 sm:p-4 py-4 sm:py-8 overflow-y-auto animate-fadeIn">
      <div
        className="bg-white rounded-2xl w-full max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col shadow-2xl transform animate-slideInUp"
        ref={formRef}
      >
        {/* Enhanced Header with better gradients */}
        <div className="bg-gradient-to-r from-[#ff6b35] via-[#ff8c42] to-[#f7931e] px-4 sm:px-6 py-4 flex justify-between items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
          <div className="relative z-10">
            <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
              🎓 Enroll Today
            </h2>
            <p className="text-orange-100 text-xs sm:text-sm font-medium">
              Secure your seat - Limited time offer!
            </p>
          </div>
          <button
            onClick={onClose}
            className="relative z-10 text-white hover:bg-white/20 p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-90"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Scrollable Form Content with better mobile spacing */}
        <div className="flex-1 overflow-y-auto">
          <form
            onSubmit={onSubmit}
            className="p-4 sm:p-6 space-y-4 sm:space-y-6"
          >
            {/* Enhanced Pricing Info */}
            {formData.subjects.length > 0 && (
              <div className="bg-gradient-to-r from-[#ff6b35] to-[#f7931e] p-4 sm:p-6 rounded-xl text-center text-white mb-4 sm:mb-6 hover:scale-105 transition-transform duration-300">
                <div className="animate-pulse">
                  <p className="text-orange-100 mb-2 text-xs sm:text-sm">
                    📋 Selected: {formData.subjects.join(", ")}
                  </p>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-2xl sm:text-4xl font-black">
                      ৳{totalPrice}
                    </span>
                    <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-bounce">
                      SAVE!
                    </div>
                  </div>
                </div>
                {scienceCount === 3 && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 mt-3">
                    <p className="text-orange-100 text-xs sm:text-sm font-semibold">
                      🎯 Intensive Care Grooming Batch - All 3 Science Subjects
                      Bundle!
                    </p>
                  </div>
                )}
                {scienceCount === 2 && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 mt-3">
                    <p className="text-orange-100 text-xs sm:text-sm font-semibold">
                      📚 Two Science Subjects Bundle - ৳3,000
                    </p>
                  </div>
                )}
                {scienceCount === 1 && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 mt-3">
                    <p className="text-orange-100 text-xs sm:text-sm font-semibold">
                      📖 Individual Science Subject - ৳1,500
                    </p>
                  </div>
                )}
                {hasEnglishCourse && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 mt-3">
                    <p className="text-orange-100 text-xs sm:text-sm font-semibold">
                      📘 Basic English & Communication (20% Discount Applied) -
                      ৳7,200
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Student Name - Enhanced mobile responsiveness */}
            <div className="animate-fadeInUp animation-delay-100">
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Student Name *
              </label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={onInputChange}
                required
                className="w-full px-3 sm:px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#ff6b35] focus:ring-2 focus:ring-orange-100 font-medium transition-all duration-300 hover:border-gray-400"
                placeholder="Enter student's full name"
              />
            </div>

            {/* Email - Enhanced */}
            <div className="animate-fadeInUp animation-delay-200">
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={onInputChange}
                required
                className="w-full px-3 sm:px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#ff6b35] focus:ring-2 focus:ring-orange-100 font-medium transition-all duration-300 hover:border-gray-400"
                placeholder="Enter your email address"
              />
            </div>

            {/* Phone - Enhanced */}
            <div className="animate-fadeInUp animation-delay-300">
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={onInputChange}
                required
                className="w-full px-3 sm:px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#ff6b35] focus:ring-2 focus:ring-orange-100 font-medium transition-all duration-300 hover:border-gray-400"
                placeholder="Enter phone number (e.g., 01712345678)"
              />
            </div>

            {/* Grade - Enhanced with all options */}
            <div className="animate-fadeInUp animation-delay-400">
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Grade / Course Level *
              </label>
              <select
                name="grade"
                value={formData.grade}
                onChange={onInputChange}
                required
                className="w-full px-3 sm:px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#ff6b35] focus:ring-2 focus:ring-orange-100 font-medium transition-all duration-300 hover:border-gray-400"
              >
                <option value="9">Grade 9 (SSC)</option>
                <option value="10">Grade 10 (SSC)</option>
                <option value="11">Grade 11 (HSC)</option>
                <option value="12">Grade 12 (HSC)</option>
                <option value="english-communication">
                  Basic English and Communication Course
                </option>
              </select>
            </div>

            {/* Subjects Selection with Grouping - Updated for all grades */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-3">
                Choose Your Learning Path * (Select at least one)
              </label>

              {/* Quick Selection Buttons - Only show for science grades */}
              {!isEnglishGrade && (
                <div className="grid grid-cols-1 gap-3 mb-4">
                  <button
                    type="button"
                    onClick={onSelectAllSubjects}
                    disabled={gradeSubjects.length === 0}
                    className="bg-gradient-to-r from-[#1e40af] to-[#2563eb] text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition text-center disabled:opacity-50"
                  >
                    🎯 All 3 Science Subjects (Grade {formData.grade})
                    <div className="text-sm opacity-90">
                      Intensive Care Grooming Batch - ৳6,000
                    </div>
                  </button>
                </div>
              )}

              {/* English Course Button */}
              <div className="grid grid-cols-1 gap-3 mb-4">
                <button
                  type="button"
                  onClick={onSelectEnglishCourse}
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition text-center"
                >
                  📘 English & Communication Course
                  <div className="text-sm opacity-90">
                    20% Discount - ৳7,200 (Original: ৳9,000)
                  </div>
                </button>
              </div>

              {!isEnglishGrade && (
                <div className="grid grid-cols-1 gap-3 mb-4">
                  <button
                    type="button"
                    onClick={onClearAllSubjects}
                    className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition"
                  >
                    Clear All Selections
                  </button>
                </div>
              )}

              {/* Subject Selection Sections */}
              <div className="space-y-4">
                {/* Science Subjects Section - Show only for science grades */}
                {!isEnglishGrade && gradeSubjects.length > 0 && (
                  <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                    <h4 className="text-sm font-bold text-blue-800 mb-3">
                      🔬 Science Subjects (Grade {formData.grade})
                    </h4>
                    <div className="text-xs text-blue-600 mb-3">
                      💡 Pricing: 1 Subject = ৳1,500 | 2 Subjects = ৳3,000 | 3
                      Subjects = ৳6,000 (Intensive Care)
                    </div>
                    <div className="space-y-2">
                      {gradeSubjects.map((subject) => (
                        <label
                          key={subject}
                          className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-white transition"
                        >
                          <input
                            type="checkbox"
                            checked={formData.subjects.includes(subject)}
                            onChange={() => onSubjectChange(subject)}
                            className="w-5 h-5 text-[#1e40af] border-2 border-gray-300 rounded accent-[#1e40af]"
                          />
                          <span className="text-gray-900 font-semibold">
                            {subject}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* English Course Section - Always show */}
                <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                  <h4 className="text-sm font-bold text-green-800 mb-3">
                    📘 Language Course
                  </h4>
                  <div className="text-xs text-green-600 mb-3">
                    💡 Original: ৳9,000 | After 20% Discount: ৳7,200
                  </div>
                  <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-white transition">
                    <input
                      type="checkbox"
                      checked={formData.subjects.includes(
                        "Basic English and Communication",
                      )}
                      onChange={() =>
                        onSubjectChange("Basic English and Communication")
                      }
                      className="w-5 h-5 text-green-600 border-2 border-gray-300 rounded accent-green-600"
                    />
                    <div>
                      <span className="text-gray-900 font-semibold">
                        Basic English and Communication
                      </span>
                      <div className="text-xs text-gray-600">
                        3-3.5 months | Grammar, Vocabulary, Writing & Speaking
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Parent Name - Now Optional but Recommended */}
            <div className="animate-fadeInUp animation-delay-700">
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Parent/Guardian Name (Recommended)
                <span className="text-xs text-gray-500 font-normal ml-2">
                  - Helps us contact your family
                </span>
              </label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={onInputChange}
                className="w-full px-3 sm:px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#ff6b35] focus:ring-2 focus:ring-orange-100 font-medium transition-all duration-300 hover:border-gray-400"
                placeholder="Enter parent/guardian name (optional but recommended)"
              />
            </div>

            {/* Parent Phone - Now Optional but Recommended */}
            <div className="animate-fadeInUp animation-delay-800">
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Parent/Guardian Phone (Recommended)
                <span className="text-xs text-gray-500 font-normal ml-2">
                  - For enrollment confirmations
                </span>
              </label>
              <input
                type="tel"
                name="parentPhone"
                value={formData.parentPhone}
                onChange={onInputChange}
                className="w-full px-3 sm:px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#ff6b35] focus:ring-2 focus:ring-orange-100 font-medium transition-all duration-300 hover:border-gray-400"
                placeholder="Enter parent/guardian phone (optional but recommended)"
              />
            </div>

            {/* Payment Instructions */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-3">
                Payment Instructions
              </label>
              <div className="bg-gradient-to-r from-pink-50 to-red-50 p-6 rounded-lg border-2 border-pink-200">
                <div className="text-center mb-4">
                  <div className="bg-pink-600 text-white px-4 py-2 rounded-full inline-block font-bold text-lg mb-3">
                    📱 bKash Personal Account
                  </div>
                  <div className="text-3xl font-black text-pink-800 mb-2">
                    01814187905
                  </div>
                  <div className="text-sm text-pink-700 font-semibold">
                    Send Money to this number
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-pink-200 mb-4">
                  <h4 className="font-bold text-pink-800 mb-3 text-center">
                    📋 Payment Steps:
                  </h4>
                  <ol className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="bg-pink-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        1
                      </span>
                      <span>
                        <strong>Fill this form</strong> and submit your
                        enrollment
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-pink-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        2
                      </span>
                      <span>
                        <strong>Check your email</strong> for confirmation and
                        payment details
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-pink-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        3
                      </span>
                      <span>
                        <strong>Send ৳{totalPrice}</strong> via bKash to{" "}
                        <strong>01814187905</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-pink-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        4
                      </span>
                      <span>
                        <strong>Take screenshot</strong> of payment confirmation
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-pink-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        5
                      </span>
                      <span>
                        <strong>Send screenshot</strong> via WhatsApp to{" "}
                        <strong>01538309105</strong>
                      </span>
                    </li>
                  </ol>
                </div>

                <div className="text-center">
                  <div className="bg-green-100 text-green-800 p-3 rounded-lg text-sm font-semibold mb-4">
                    ✅ We'll confirm your enrollment within 24 hours after
                    payment verification
                  </div>

                  {/* WhatsApp Quick Link */}
                  <a
                    href="https://wa.me/8801538309105"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
                  >
                    💬 Open WhatsApp to Send Screenshot
                  </a>
                </div>
              </div>
            </div>

            {/* Messages - Error only, success is handled separately */}
            {error && (
              <div className="p-4 bg-red-50 border-2 border-red-400 text-red-700 rounded-lg font-medium animate-shake">
                <div className="flex items-center gap-2">
                  <span className="text-red-500">⚠️</span>
                  <span>{error}</span>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || formData.subjects.length === 0}
              className="w-full bg-gradient-to-r from-[#ff6b35] to-[#f7931e] text-white py-4 rounded-lg font-black text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing Enrollment...
                </>
              ) : formData.subjects.length > 0 ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Confirm Enrollment - ৳{totalPrice}
                </>
              ) : (
                "Select Subjects to Continue"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
