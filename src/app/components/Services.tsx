import { Palette, Code, Headphones } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive, user-centered designs that enhance user experience and drive engagement. From wireframes to high-fidelity prototypes, I craft interfaces that are both beautiful and functional.",
      features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Usability Testing"]
    },
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Building robust, scalable web applications using modern technologies. End-to-end development from database design to responsive front-end interfaces that bring your vision to life.",
      features: ["React & Node.js", "API Development", "Database Design", "Responsive Web Apps"]
    },
    {
      icon: Headphones,
      title: "Virtual & Executive Assistance",
      description: "Streamlining your operations with professional administrative support. From calendar management to project coordination, I help you stay organized and focused on what matters most.",
      features: ["Calendar Management", "Email Organization", "Project Coordination", "Research & Documentation"]
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/20 text-orange-500 rounded-lg text-sm mb-6">
            What I Offer
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-300 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-8 rounded-3xl border border-gray-800 hover:border-orange-500/50 transition-all duration-500 backdrop-blur-sm overflow-hidden"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-transparent transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-orange-500/20">
                    <Icon className="text-white" size={28} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full group-hover:scale-150 transition-transform"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}