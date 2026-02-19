import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/20 text-orange-500 rounded-lg text-sm mb-6">
            Let's Talk
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-300 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Let's discuss how I can help bring your project to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none text-white placeholder-gray-500"
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
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision. Feel free to reach out through the form or connect 
                with me on social media.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <a
                href="mailto:feben.alebe@gmail.com"
                className="group flex items-center gap-4 p-4 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-lg border border-gray-800 hover:border-orange-500/50 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-lg flex items-center justify-center group-hover:from-orange-500 group-hover:to-orange-600 group-hover:border-transparent transition-all duration-300 group-hover:scale-110">
                  <Mail className="text-orange-500 group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <div className="font-medium text-white">Email</div>
                  <div className="text-gray-400 text-sm">feben.alebe@gmail.com</div>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-lg border border-gray-800 hover:border-orange-500/50 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-lg flex items-center justify-center group-hover:from-orange-500 group-hover:to-orange-600 group-hover:border-transparent transition-all duration-300 group-hover:scale-110">
                  <Linkedin className="text-orange-500 group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <div className="font-medium text-white">LinkedIn</div>
                  <div className="text-gray-400 text-sm">Connect with me</div>
                </div>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-lg border border-gray-800 hover:border-orange-500/50 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-lg flex items-center justify-center group-hover:from-orange-500 group-hover:to-orange-600 group-hover:border-transparent transition-all duration-300 group-hover:scale-110">
                  <Github className="text-orange-500 group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <div className="font-medium text-white">GitHub</div>
                  <div className="text-gray-400 text-sm">View my code</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}