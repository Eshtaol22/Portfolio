import { Target, Lightbulb, Users, Award } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface AboutProps {
  darkMode: boolean;
}

export function About({ darkMode }: AboutProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
    <section ref={sectionRef} id="about" className={`py-20 px-6 relative overflow-hidden ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl ${
          darkMode ? 'bg-orange-500/10' : 'bg-orange-500/10'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className={`inline-block px-4 py-2 rounded-lg text-sm mb-6 ${
            darkMode 
              ? 'bg-orange-500/10 border border-orange-500/20 text-orange-400' 
              : 'bg-orange-500/10 border border-orange-500/30 text-orange-600'
          }`}>
            Get to know me
          </div>
          <h2 className={`text-5xl md:text-6xl font-black mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-300 mx-auto rounded-full"></div>
        </div>

        {/* Restructured About Text */}
        <div className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className={`rounded-2xl p-8 md:p-12 backdrop-blur-sm ${
            darkMode 
              ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800' 
              : 'bg-white border border-gray-200 shadow-lg'
          }`}>
            <p className={`text-xl leading-relaxed mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              I'm a versatile digital professional who bridges the gap between beautiful design 
              and powerful technology. My expertise spans{" "}
              <span className="text-orange-500 font-semibold">UI/UX design</span>,{" "}
              <span className="text-orange-500 font-semibold">full-stack development</span>, and{" "}
              <span className="text-orange-500 font-semibold">project management</span> — 
              a unique combination that allows me to see projects from every angle.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`rounded-xl p-6 ${
                darkMode 
                  ? 'bg-gray-900/50 border border-gray-800' 
                  : 'bg-orange-50 border border-orange-100'
              }`}>
                <h3 className="text-orange-500 font-bold text-lg mb-3">Design Philosophy</h3>
                <p className={`leading-relaxed ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Every pixel matters. I create intuitive interfaces that users love, 
                  backed by research and driven by empathy.
                </p>
              </div>
              
              <div className={`rounded-xl p-6 ${
                darkMode 
                  ? 'bg-gray-900/50 border border-gray-800' 
                  : 'bg-orange-50 border border-orange-100'
              }`}>
                <h3 className="text-orange-500 font-bold text-lg mb-3">Development Approach</h3>
                <p className={`leading-relaxed ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
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
                className={`group p-6 rounded-2xl transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${
                  darkMode 
                    ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10' 
                    : 'bg-white border border-gray-200 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/20'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {highlight.title}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
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