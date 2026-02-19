import { ArrowRight, Download } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-gray-900 via-gray-900 to-black overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/20 text-orange-500 rounded-lg text-sm backdrop-blur-sm">
              ✨ Available for Freelance Projects
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black text-white leading-tight">
              UI/UX Designer
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">
                Full Stack Developer
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
              Crafting exceptional digital experiences through elegant design and powerful code. 
              I transform ideas into scalable, user-centric applications.
            </p>

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
                className="px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/5 transition-all border-2 border-gray-700 hover:border-orange-500 flex items-center justify-center gap-2 font-semibold"
              >
                Contact Me
                <Download size={20} />
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
              
              {/* Border gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-transparent to-blue-500 rounded-3xl p-[2px]">
                <div className="w-full h-full bg-gray-900 rounded-3xl"></div>
              </div>
              
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1743865318726-0c6966e0c153?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGRlc2lnbmVyJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MTQwNjAzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional Profile"
                className="relative z-10 w-full h-full object-cover rounded-3xl"
              />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-gray-800/90 backdrop-blur-xl border border-gray-700 rounded-2xl p-4 shadow-xl">
              <div className="text-3xl font-bold text-orange-500">5+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-gray-800/90 backdrop-blur-xl border border-gray-700 rounded-2xl p-4 shadow-xl">
              <div className="text-3xl font-bold text-orange-500">50+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}