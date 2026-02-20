import { ArrowRight, Download } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useState } from "react";

interface HeroProps {
  darkMode: boolean;
}

export function Hero({ darkMode }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={`relative pt-32 pb-20 px-6 overflow-hidden ${
      darkMode 
        ? 'bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950' 
        : 'bg-gradient-to-b from-orange-50 via-white to-gray-50'
    }`}>
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 -left-48 w-96 h-96 rounded-full blur-3xl animate-pulse ${
          darkMode ? 'bg-orange-500/20' : 'bg-orange-400/20'
        }`}></div>
        <div className={`absolute bottom-1/4 -right-48 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 ${
          darkMode ? 'bg-orange-600/15' : 'bg-orange-300/20'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className={`inline-block px-4 py-2 rounded-lg text-sm backdrop-blur-sm ${
              darkMode 
                ? 'bg-orange-500/10 border border-orange-500/20 text-orange-400' 
                : 'bg-orange-500/10 border border-orange-500/30 text-orange-600'
            }`}>
              ✨ Available for Freelance Projects
            </div>
            
            <div>
              <p className={`text-xl mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Hi, I'm
              </p>
              <h1 className={`text-6xl md:text-7xl font-black leading-tight mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Feben Alebachew
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">
                  UI/UX Designer & Full Stack Developer
                </span>
              </h2>
            </div>
            
            <p className={`text-xl leading-relaxed max-w-xl ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Crafting exceptional digital experiences through elegant design and powerful code. 
              I transform ideas into scalable, user-centric applications.
            </p>

            {/* Stats moved here - in front of image on mobile, beside text on desktop */}
            <div className="flex flex-wrap gap-4">
              <div className={`px-6 py-4 rounded-2xl shadow-lg ${
                darkMode 
                  ? 'bg-gray-800/90 backdrop-blur-xl border border-gray-700' 
                  : 'bg-white/90 backdrop-blur-xl border border-gray-200'
              }`}>
                <div className="text-3xl font-bold text-orange-500">5+</div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Years Experience
                </div>
              </div>
              
              <div className={`px-6 py-4 rounded-2xl shadow-lg ${
                darkMode 
                  ? 'bg-gray-800/90 backdrop-blur-xl border border-gray-700' 
                  : 'bg-white/90 backdrop-blur-xl border border-gray-200'
              }`}>
                <div className="text-3xl font-bold text-orange-500">50+</div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Projects Completed
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 flex items-center justify-center gap-2 group font-semibold"
              >
                View Projects
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`px-8 py-4 rounded-lg transition-all border-2 flex items-center justify-center gap-2 font-semibold ${
                  darkMode 
                    ? 'bg-transparent text-white border-gray-700 hover:bg-white/5 hover:border-orange-500' 
                    : 'bg-white text-gray-900 border-gray-300 hover:bg-gray-50 hover:border-orange-500'
                }`}
              >
                Contact Me
                <Download size={20} />
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-3xl blur-3xl animate-pulse ${
                darkMode 
                  ? 'bg-gradient-to-tr from-orange-500/30 to-orange-600/20' 
                  : 'bg-gradient-to-tr from-orange-500/30 to-orange-300/30'
              }`}></div>
              
              {/* Border gradient */}
              <div className={`absolute inset-0 rounded-3xl p-[2px] ${
                darkMode 
                  ? 'bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700' 
                  : 'bg-gradient-to-br from-orange-500 via-orange-400 to-orange-300'
              }`}>
                <div className={`w-full h-full rounded-3xl ${
                  darkMode ? 'bg-gray-900' : 'bg-white'
                }`}></div>
              </div>
              
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1743865318726-0c6966e0c153?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGRlc2lnbmVyJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MTQwNjAzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Feben Alebachew - Professional Profile"
                className="relative z-10 w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}