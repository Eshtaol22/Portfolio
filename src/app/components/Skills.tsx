export function Skills() {
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
        { name: "Slack", level: 90 },
        { name: "Zoom", level: 90 },
        { name: "Asana/Trello", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/20 text-orange-500 rounded-lg text-sm mb-6">
            Technical Expertise
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Skills & Tools
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-300 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for delivering exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-8 rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all duration-500 backdrop-blur-sm group"
            >
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-orange-500 transition-colors">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-orange-500 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
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