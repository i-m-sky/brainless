import { InstructorCard } from "./InstructorCard";

export function InstructorsSection() {
  const instructors = [
    {
      title: "Science Courses",
      name: "Fatema Jamal",
      role: "CSE Student",
      institution: "Institute of Science & Technology",
      nameColor: "text-blue-600",
      highlightColor: "text-blue-600",
      highlights: [
        "Expert in Math, Physics & Chemistry",
        "Proven track record of student success",
      ],
    },
    {
      title: "English Course",
      name: "Md. Robin Jamal",
      role: "CEO & Lead Trainer",
      image:
        "https://ucarecdn.com/7af65915-8b99-4a13-9431-977d2fd6ad63/-/format/auto/",
      badge: "IELTS Band 7 Certified",
      nameColor: "text-green-600",
      highlightColor: "text-green-600",
      highlights: [
        "IELTS Band 7 Achievement",
        "English & Communication Expert",
      ],
    },
  ];

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
      style={{ perspective: "1000px" }}
    >
      {instructors.map((instructor, index) => (
        <InstructorCard key={index} instructor={instructor} />
      ))}
    </div>
  );
}
