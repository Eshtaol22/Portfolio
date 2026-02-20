import { Heart } from "lucide-react";

interface FooterProps {
  darkMode: boolean;
}

export function Footer({ darkMode }: FooterProps) {
  return (
    <footer className={`py-12 px-6 border-t ${
      darkMode ? 'bg-gray-950 border-gray-800' : 'bg-gray-50 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className={`text-xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="text-orange-500">{"<"}</span>
              Feben Alebachew
              <span className="text-orange-500">{"/>"}</span>
            </div>
            <p className={`leading-relaxed ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Creating exceptional digital experiences through design, development, and strategic support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>Quick Links</h4>
            <ul className={`space-y-2 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <li>
                <button
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-orange-500 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-orange-500 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-orange-500 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-orange-500 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>Get in Touch</h4>
            <ul className={`space-y-2 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <li className="hover:text-orange-500 transition-colors">feben.alebe@gmail.com</li>
              <li>Available for freelance projects</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 border-t text-center ${
          darkMode ? 'border-gray-800 text-gray-400' : 'border-gray-200 text-gray-600'
        }`}>
          <p className="flex items-center justify-center gap-2">
            Designed & Built by <span className="text-orange-500 font-semibold">Feben Alebachew</span> © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}