import { Target, Lightbulb, Users, Award } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Target,
      title: "Problem Solver",
      description: "Strategic thinking and analytical approach to every challenge"
    },
    {
      icon: Lightbulb,
      title: "Creative Thinker",
      description: "Innovative solutions that blend design and functionality"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Excellent communication and collaboration skills"
    },
    {
      icon: Award,
      title: "Detail-Oriented",
      description: "Meticulous organization and execution of projects"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/20 text-orange-500 rounded-lg text-sm mb-6">
            Get to know me
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-300 mx-auto rounded-full"></div>
        </div>

        {/* Restructured About Text */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              I'm a versatile digital professional who bridges the gap between beautiful design 
              and powerful technology. My expertise spans{" "}
              <span className="text-orange-500 font-semibold">UI/UX design</span>,{" "}
              <span className="text-orange-500 font-semibold">full-stack development</span>, and{" "}
              <span className="text-orange-500 font-semibold">project management</span> — 
              a unique combination that allows me to see projects from every angle.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-orange-500 font-bold text-lg mb-3">Design Philosophy</h3>
                <p className="text-gray-400 leading-relaxed">
                  Every pixel matters. I create intuitive interfaces that users love, 
                  backed by research and driven by empathy.
                </p>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-orange-500 font-bold text-lg mb-3">Development Approach</h3>
                <p className="text-gray-400 leading-relaxed">
                  Clean, scalable code is my standard. I build applications that are 
                  performant, maintainable, and built to grow.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 rounded-2xl hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}