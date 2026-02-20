import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

interface ContactProps {
  darkMode: boolean;
}

export function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:feben.alebe@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className={`py-20 px-6 relative overflow-hidden ${
      darkMode 
        ? 'bg-gradient-to-b from-gray-950 to-gray-900' 
        : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className={`absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl ${
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
            Let's Talk
          </div>
          <h2 className={`text-5xl md:text-6xl font-black mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-300 mx-auto rounded-full mb-6"></div>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Let's discuss how I can help bring your project to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className={`p-8 rounded-2xl backdrop-blur-sm ${
            darkMode 
              ? 'bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-800' 
              : 'bg-white border border-gray-200 shadow-lg'
          }`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all ${
                    darkMode 
                      ? 'bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500' 
                      : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all ${
                    darkMode 
                      ? 'bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500' 
                      : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none ${
                    darkMode 
                      ? 'bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500' 
                      : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 flex items-center justify-center gap-2 group font-semibold"
              >
                Send Message
                <Send className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Let's Connect
              </h3>
              <p className={`leading-relaxed mb-8 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision. Feel free to reach out through the form or connect 
                with me on social media.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <a
                href="mailto:feben.alebe@gmail.com"
                className={`group flex items-center gap-4 p-4 rounded-lg transition-all duration-300 backdrop-blur-sm ${
                  darkMode 
                    ? 'bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-800 hover:border-orange-500/50' 
                    : 'bg-white border border-gray-200 hover:border-orange-500/50 shadow-sm hover:shadow-lg'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                  darkMode 
                    ? 'bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 group-hover:from-orange-500 group-hover:to-orange-600 group-hover:border-transparent' 
                    : 'bg-orange-100 border border-orange-200 group-hover:bg-orange-500'
                }`}>
                  <Mail className={`transition-colors ${
                    darkMode 
                      ? 'text-orange-500 group-hover:text-white' 
                      : 'text-orange-600 group-hover:text-white'
                  }`} size={24} />
                </div>
                <div>
                  <div className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Email
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    feben.alebe@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/feben-alebe/"
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 p-4 rounded-lg transition-all duration-300 backdrop-blur-sm ${
                  darkMode 
                    ? 'bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-800 hover:border-orange-500/50' 
                    : 'bg-white border border-gray-200 hover:border-orange-500/50 shadow-sm hover:shadow-lg'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                  darkMode 
                    ? 'bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 group-hover:from-orange-500 group-hover:to-orange-600 group-hover:border-transparent' 
                    : 'bg-orange-100 border border-orange-200 group-hover:bg-orange-500'
                }`}>
                  <Linkedin className={`transition-colors ${
                    darkMode 
                      ? 'text-orange-500 group-hover:text-white' 
                      : 'text-orange-600 group-hover:text-white'
                  }`} size={24} />
                </div>
                <div>
                  <div className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    LinkedIn
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Connect with me
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/Eshtaol22"
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 p-4 rounded-lg transition-all duration-300 backdrop-blur-sm ${
                  darkMode 
                    ? 'bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-800 hover:border-orange-500/50' 
                    : 'bg-white border border-gray-200 hover:border-orange-500/50 shadow-sm hover:shadow-lg'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                  darkMode 
                    ? 'bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 group-hover:from-orange-500 group-hover:to-orange-600 group-hover:border-transparent' 
                    : 'bg-orange-100 border border-orange-200 group-hover:bg-orange-500'
                }`}>
                  <Github className={`transition-colors ${
                    darkMode 
                      ? 'text-orange-500 group-hover:text-white' 
                      : 'text-orange-600 group-hover:text-white'
                  }`} size={24} />
                </div>
                <div>
                  <div className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    GitHub
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    View my code
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}