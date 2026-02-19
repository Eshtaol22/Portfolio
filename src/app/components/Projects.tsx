import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Modern Web Design Platform",
      description: "A comprehensive design system and component library for building modern web applications with consistent UI/UX.",
      image: "https://images.unsplash.com/photo-1630522790858-50b4ef44944b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzcxNTAyOTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Figma", "React", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Mobile App Interface",
      description: "User-centric mobile application design focused on seamless navigation and engaging user experience.",
      image: "https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzcxNDY2OTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["UI/UX", "Mobile Design", "Prototyping"]
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization dashboard for real-time analytics with interactive charts and comprehensive reporting features.",
      image: "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcxNDgzOTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Node.js", "D3.js", "PostgreSQL"]
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with product management, shopping cart, and secure payment integration.",
      image: "https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc3MTQyNDc0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Next.js", "MongoDB", "Stripe", "REST API"]
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with task tracking, team communication, and progress monitoring.",
      image: "https://images.unsplash.com/photo-1758611972975-5b7e6568eeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMGFwcGxpY2F0aW9ufGVufDF8fHx8MTc3MTUxODAzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Vue.js", "Express", "WebSocket", "MySQL"]
    },
    {
      title: "SaaS Landing Page",
      description: "High-converting landing page design with modern aesthetics, clear value proposition, and optimized user flow.",
      image: "https://images.unsplash.com/photo-1630522790858-50b4ef44944b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzcxNTAyOTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Figma", "HTML/CSS", "JavaScript", "SEO"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/20 text-orange-500 rounded-lg text-sm mb-6">
            My Work
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-300 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A selection of my recent work showcasing design and development expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl overflow-hidden border border-gray-800 hover:border-orange-500/50 transition-all duration-500 backdrop-blur-sm"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden bg-gray-900">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 text-xs rounded-lg hover:border-orange-500/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                <button className="flex items-center gap-2 text-orange-500 hover:text-orange-400 font-semibold group/btn text-sm">
                  View Details
                  <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}