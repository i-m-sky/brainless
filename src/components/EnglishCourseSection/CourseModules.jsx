const modules = [
  {
    id: 1,
    title: "Foundation Grammar",
    duration: "Strong Basics (4 Weeks)",
    color: "blue",
    items: [
      "Parts of Speech",
      "Sentence Structure",
      "Subject–Verb Agreement",
      "Tenses (Present, Past, Future)",
      "Articles, Prepositions",
      "Active vs. Passive Voice",
      "Question Formation Rules",
    ],
    note: "📌 Daily Workbook Exercises",
  },
  {
    id: 2,
    title: "Vocabulary & Usage",
    duration: "Practical Application (Ongoing)",
    color: "green",
    items: [
      "15–20 New Words Each Class",
      "Synonyms & Antonyms",
      "Collocations & Idioms",
      "Word Formation: Prefix + Suffix",
      "Common Slangs & Daily English",
    ],
    note: "📌 Weekly Vocabulary Quiz",
  },
  {
    id: 3,
    title: "Reading & Comprehension",
    duration: "Strategy & Practice (3 Weeks)",
    color: "purple",
    items: [
      "Reading Strategies (Scanning, Skimming)",
      "Paragraph Comprehension",
      "Finding Main Ideas & Details",
      "Inference & Contextual Meaning",
    ],
    note: "📌 Newspaper & Story-based Practice",
  },
  {
    id: 4,
    title: "Writing Skills",
    duration: "Practical Writing (3 Weeks)",
    color: "orange",
    items: [
      "Paragraph Writing",
      "Email Writing (Formal + Informal)",
      "Short Narratives",
      "Descriptive Writing",
      "Grammar Accuracy in Writing",
    ],
    note: "📌 Weekly Writing Assignments with Review",
  },
  {
    id: 5,
    title: "Speaking & Listening",
    duration: "Continuous Practice (Throughout)",
    color: "red",
    items: [
      "Daily Conversation Practice",
      "Public Speaking Basics",
      "Pronunciation & Fluency",
      "Role Plays & Group Discussions",
      "Listening Practice",
    ],
    note: "📌 Confidence-building speaking activities",
  },
];

export function CourseModules() {
  const handleDownloadPDF = () => {
    alert(
      "Course PDF will be available for enrolled students. Contact us for more details!",
    );
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 text-white mb-12">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-black mb-4">
          📘 Course Modules Breakdown
        </h3>
        <p className="text-xl text-gray-300">
          Comprehensive curriculum designed for practical English mastery
        </p>

        {/* PDF Download Button */}
        <div className="mt-6">
          <button
            onClick={handleDownloadPDF}
            className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center mx-auto"
          >
            📄 Download Course Modules PDF
          </button>
        </div>
      </div>

      {/* Module Cards */}
      <div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        style={{ perspective: "1000px" }}
      >
        {modules.map((module) => (
          <div
            key={module.id}
            className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 transition-all duration-500 ease-out cursor-pointer module-card-3d group relative overflow-hidden ${
              module.id === 5 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <div className="flex items-center gap-3 mb-4 transition-all duration-300 group-hover:translate-z-4">
              <div
                className={`w-10 h-10 bg-${module.color}-500 rounded-full flex items-center justify-center text-white font-black transition-all duration-500 group-hover:rotate-y-180 group-hover:scale-110 module-icon-3d`}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <span className="transition-all duration-500 group-hover:rotate-y-180">
                  {module.id}
                </span>
              </div>
              <h4 className="text-xl font-bold transition-all duration-300 group-hover:translate-x-1">
                {module.title}
              </h4>
            </div>
            <p className="text-sm text-gray-300 mb-3 transition-all duration-300 group-hover:text-gray-200">
              {module.duration}
            </p>
            <ul className="text-sm space-y-1 text-gray-300 transition-all duration-300 group-hover:text-gray-100">
              {module.items.map((item, index) => (
                <li
                  key={index}
                  className="transition-all duration-300 hover:translate-x-2 hover:text-white"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  • {item}
                </li>
              ))}
            </ul>
            <div
              className={`mt-4 text-xs bg-${module.color}-500/20 text-${module.color}-200 px-3 py-2 rounded-lg transition-all duration-500 group-hover:bg-${module.color}-500/40 group-hover:scale-105 group-hover:translate-z-2`}
            >
              {module.note}
            </div>

            {/* 3D Glow Effect */}
            <div
              className={`absolute inset-0 rounded-2xl bg-${module.color}-500/0 group-hover:bg-${module.color}-500/10 transition-all duration-500 pointer-events-none glow-effect`}
            ></div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .module-card-3d {
          transform: translateZ(0) rotateX(0deg) rotateY(0deg);
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        
        .module-card-3d:hover {
          transform: translateZ(20px) rotateX(5deg) rotateY(-5deg) scale(1.02);
          box-shadow: 
            0 30px 60px rgba(0,0,0,0.3),
            0 0 0 1px rgba(255,255,255,0.1),
            inset 0 1px 0 rgba(255,255,255,0.2);
        }
        
        .module-icon-3d {
          transform: translateZ(0) rotateY(0deg);
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .module-card-3d:hover .module-icon-3d {
          transform: translateZ(10px) rotateY(180deg) scale(1.1);
          filter: drop-shadow(0 0 20px rgba(255,255,255,0.5));
        }
        
        .glow-effect {
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        
        .module-card-3d:hover .glow-effect {
          opacity: 1;
          box-shadow: inset 0 0 20px rgba(255,255,255,0.1);
        }
        
        /* Individual module color glows */
        .module-card-3d:nth-child(1):hover {
          box-shadow: 
            0 30px 60px rgba(59, 130, 246, 0.3),
            0 0 40px rgba(59, 130, 246, 0.2),
            inset 0 1px 0 rgba(255,255,255,0.2);
        }
        
        .module-card-3d:nth-child(2):hover {
          box-shadow: 
            0 30px 60px rgba(34, 197, 94, 0.3),
            0 0 40px rgba(34, 197, 94, 0.2),
            inset 0 1px 0 rgba(255,255,255,0.2);
        }
        
        .module-card-3d:nth-child(3):hover {
          box-shadow: 
            0 30px 60px rgba(147, 51, 234, 0.3),
            0 0 40px rgba(147, 51, 234, 0.2),
            inset 0 1px 0 rgba(255,255,255,0.2);
        }
        
        .module-card-3d:nth-child(4):hover {
          box-shadow: 
            0 30px 60px rgba(249, 115, 22, 0.3),
            0 0 40px rgba(249, 115, 22, 0.2),
            inset 0 1px 0 rgba(255,255,255,0.2);
        }
        
        .module-card-3d:nth-child(5):hover {
          box-shadow: 
            0 30px 60px rgba(239, 68, 68, 0.3),
            0 0 40px rgba(239, 68, 68, 0.2),
            inset 0 1px 0 rgba(255,255,255,0.2);
        }
        
        /* Smooth animations for list items */
        .module-card-3d li {
          transition: all 0.2s ease;
        }
        
        .module-card-3d:hover li {
          transform: translateX(4px) translateZ(2px);
        }
        
        .module-card-3d li:hover {
          transform: translateX(8px) translateZ(4px) scale(1.05) !important;
          color: white !important;
          text-shadow: 0 0 10px rgba(255,255,255,0.5);
        }
      `}</style>
    </div>
  );
}
