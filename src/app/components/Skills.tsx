interface SkillsProps {
  darkMode: boolean;
}

export function Skills({ darkMode }: SkillsProps) {
  const skillCategories = [
    {
      title: "Design",
      skills: [
        { name: "Figma", level: 95 },
        { name: "Adobe XD", level: 90 },
        { name: "Sketch", level: 85 },
        { name: "InVision", level: 80 }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 85 }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Google Workspace", level: 95 },
        { name: "Slack", level: 95 },
        { name: "Zoom", level: 100 },
        { name: "Asana/Trello", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className={`py-20 px-6 relative overflow-hidden ${
      darkMode ? 'bg-gradient-to-b from-gray-900 to-gray-950' : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl ${
          darkMode ? 'bg-orange-500/10' : 'bg-orange-500/10'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className={`inline-block px-4 py-2 rounded-lg text-sm mb-6 ${
            darkMode 
              ? 'bg-orange-500/10 border border-orange-500/20 text-orange-400' 
              : 'bg-orange-500/10 border border-orange-500/30 text-orange-600'
          }`}>
            Technical Expertise
          </div>
          <h2 className={`text-5xl md:text-6xl font-black mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Skills & Tools
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-300 mx-auto rounded-full mb-6"></div>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            A comprehensive toolkit for delivering exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl transition-all duration-500 backdrop-blur-sm group ${
                darkMode 
                  ? 'bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-800 hover:border-orange-500/50' 
                  : 'bg-white border border-gray-200 hover:border-orange-500/50 shadow-sm hover:shadow-lg'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-6 group-hover:text-orange-500 transition-colors ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`font-medium ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {skill.name}
                      </span>
                      <span className="text-orange-500 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${
                      darkMode ? 'bg-gray-800' : 'bg-gray-200'
                    }`}>
                      <div
                        className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transition-all duration-1000 shadow-lg shadow-orange-500/20"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}