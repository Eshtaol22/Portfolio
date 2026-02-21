import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import churchImage from "../../../public/assets/port.png";
import doctorImage from "../../../public/assets/port 2.png";
import { useState, useRef } from "react";

interface ProjectsProps {
  darkMode: boolean;
}

export function Projects({ darkMode }: ProjectsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Doctor Assistant Mobile App Design",
      description: "An intuitive mobile app design that supports doctors in managing patient interactions, symptom tracking, and medical documentation with clarity and efficiency.",
      image: doctorImage,
      tags: ["UI/UX", "Mobile Design", "Prototyping"],
      link: "https://www.figma.com/design/STnongsEihn5mI1jBMff7h/AI-doctor-clinical-asssistant?node-id=0-1&p=f&t=4vcSurrptOGUNYdn-0"
    },
    {
      title: "Church Website Design & Development",
      description: "A fully responsive church website designed and developed to enhance online presence, community engagement, and seamless access to events, sermons, and contact information.",
      image: churchImage,
      tags: ["UI/UX", "React", "Node.js", "MongsoDB"],
      link: "https://kabodemmanuel-adama.vercel.app/"
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization dashboard for real-time analytics with interactive charts and comprehensive reporting features.",
      image: churchImage,
      tags: ["React", "Node.js", "D3.js", "PostgreSQL"],
      link: "https://kabodemmanuel-adama.vercel.app/"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with product management, shopping cart, and secure payment integration.",
      image: churchImage,
      tags: ["Next.js", "MongoDB", "Stripe", "REST API"],
      link: "https://kabodemmanuel-adama.vercel.app/"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with task tracking, team communication, and progress monitoring.",
      image: churchImage,
      tags: ["Vue.js", "Express", "WebSocket", "MySQL"],
      link: "https://kabodemmanuel-adama.vercel.app/"
    },
    {
      title: "SaaS Landing Page",
      description: "High-converting landing page design with modern aesthetics, clear value proposition, and optimized user flow.",
      image: churchImage,
      tags: ["Figma", "HTML/CSS", "JavaScript", "SEO"],
      link: "https://kabodemmanuel-adama.vercel.app/"
    }
  ];

   const scrollByProjects = (direction: 'prev' | 'next') => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = container.offsetWidth; // Scroll by the full container width (shows 3 cards)
      const newScrollLeft = direction === 'next' 
        ? container.scrollLeft + scrollAmount 
        : container.scrollLeft - scrollAmount;
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth"
      });
      
      // Calculate approximate new index
      const cardWidth = container.scrollWidth / projects.length;
      const newIndex = Math.round(newScrollLeft / cardWidth);
      setCurrentIndex(Math.max(0, Math.min(newIndex, projects.length - 1)));
    }
  };

  const handlePrevious = () => {
    scrollByProjects('prev');
  };

  const handleNext = () => {
    scrollByProjects('next');
  };

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const cardWidth = container.scrollWidth / projects.length;
      container.scrollTo({
        left: cardWidth * index,
        behavior: "smooth"
      });
      setCurrentIndex(index);
    }
  };

  return (
    <section id="projects" className={`py-20 px-6 relative overflow-hidden ${
      darkMode ? 'bg-gray-950' : 'bg-white'
    }`}>
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className={`absolute top-1/3 left-0 w-96 h-96 rounded-full blur-3xl ${
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
            My Work
          </div>
          <h2 className={`text-5xl md:text-6xl font-black mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-300 mx-auto rounded-full mb-6"></div>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            A selection of my recent work showcasing design and development expertise
          </p>
        </div>

        {/* Horizontal Slider */}
        <div className="relative">
          {/* Projects Container */}
          <div
            ref={containerRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-4 px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center"
              >
                <div
                  className={`group relative rounded-2xl overflow-hidden transition-all duration-500 backdrop-blur-sm h-full ${
                    darkMode 
                      ? 'bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-800 hover:border-orange-500/50' 
                      : 'bg-white border border-gray-200 hover:border-orange-500/50 shadow-sm hover:shadow-xl'
                  }`}
                >
                  {/* Project Image */}
                  <div className={`relative h-56 overflow-hidden ${
                    darkMode ? 'bg-gray-900' : 'bg-gray-100'
                  }`}>
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity ${
                      darkMode 
                        ? 'bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent' 
                        : 'bg-gradient-to-t from-white via-white/50 to-transparent'
                    }`}></div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 relative">
                    <h3 className={`text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {project.title}
                    </h3>
                    
                    <p className={`mb-4 leading-relaxed text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-3 py-1 text-xs rounded-lg hover:border-orange-500/50 transition-colors ${
                            darkMode 
                              ? 'bg-gray-800 border border-gray-700 text-gray-300' 
                              : 'bg-gray-100 border border-gray-200 text-gray-700'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Details Button */}
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-orange-500 hover:text-orange-400 font-semibold group/btn text-sm"
                    >
                      View Details
                      <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                  </div>

                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 transition-all duration-500 pointer-events-none ${
                    darkMode 
                      ? 'bg-gradient-to-t from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-transparent' 
                      : 'bg-gradient-to-t from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-transparent'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons - Below the projects */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrevious}
              className={`group relative p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 overflow-hidden ${
                darkMode 
                  ? 'bg-gray-800 border-2 border-gray-700 text-white hover:border-orange-500' 
                  : 'bg-white border-2 border-gray-200 text-gray-900 hover:border-orange-500'
              }`}
              aria-label="Previous projects"
            >
              <div className={`absolute inset-0 bg-orange-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300`}></div>
              <ChevronLeft size={24} className="relative z-10 group-hover:text-white transition-colors" />
            </button>
            
            {/* Dot Indicators */}
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-orange-500 w-8' 
                      : darkMode ? 'bg-gray-700 w-2 hover:bg-gray-600' : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className={`group relative p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 overflow-hidden ${
                darkMode 
                  ? 'bg-gray-800 border-2 border-gray-700 text-white hover:border-orange-500' 
                  : 'bg-white border-2 border-gray-200 text-gray-900 hover:border-orange-500'
              }`}
              aria-label="Next projects"
            >
              <div className={`absolute inset-0 bg-orange-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300`}></div>
              <ChevronRight size={24} className="relative z-10 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}