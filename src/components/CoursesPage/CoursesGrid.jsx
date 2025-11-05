import { CourseCard } from "./CourseCard";

export function CoursesGrid({ courses, onEnroll }) {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
            📚 Available Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the perfect course for your academic journey
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          style={{ perspective: "1500px" }}
        >
          {courses.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              onEnroll={() => onEnroll(course.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
