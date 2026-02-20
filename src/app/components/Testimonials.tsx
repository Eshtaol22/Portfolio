import { Quote } from "lucide-react";

interface TestimonialsProps {
  darkMode: boolean;
}

export function Testimonials({ darkMode }: TestimonialsProps) {
  const testimonials = [
    {
      name: "feben",
      role: "CEO, TechStart Inc.",
      content: "Working with this professional was an absolute pleasure. The combination of design expertise and technical skills resulted in a product that exceeded our expectations.",
      avatar: "SJ"
    },
    {
      name: "Mr. a",
      role: "Product Manager, Digital Solutions",
      content: "The attention to detail and organizational skills demonstrated throughout our project were exceptional. Highly recommend for both development and project management needs.",
      avatar: "MC"
    },
    {
      name: "blabla",
      role: "Founder, Creative Agency",
      content: "A rare find who can seamlessly handle design, development, and project coordination. The efficiency and quality of work delivered were outstanding.",
      avatar: "ER"
    }
  ];

  return (
    <section className={`py-20 px-6 relative overflow-hidden ${
      darkMode ? 'bg-gray-950' : 'bg-gray-50'
    }`}>
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className={`absolute bottom-0 left-1/3 w-96 h-96 rounded-full blur-3xl ${
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
            Client Feedback
          </div>
          <h2 className={`text-5xl md:text-6xl font-black mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Testimonials
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-300 mx-auto rounded-full mb-6"></div>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            What clients say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl transition-all duration-500 backdrop-blur-sm ${
                darkMode 
                  ? 'bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-800 hover:border-orange-500/50' 
                  : 'bg-white border border-gray-200 hover:border-orange-500/50 shadow-sm hover:shadow-lg'
              }`}
            >
              <Quote className="text-orange-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
              
              <p className={`mb-6 leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-orange-500/20">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className={`font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {testimonial.name}
                  </div>
                  <div className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Hover glow */}
              <div className={`absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500 ${
                darkMode 
                  ? 'bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-transparent' 
                  : 'bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-transparent'
              }`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}