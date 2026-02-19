import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold text-white mb-4">
              <span className="text-orange-500">{"<"}</span>
              Portfolio
              <span className="text-orange-500">{"/>"}</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Creating exceptional digital experiences through design, development, and strategic support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
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
            <h4 className="font-semibold text-white mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-orange-500 transition-colors">hello@example.com</li>
              <li>Available for freelance projects</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-orange-500 fill-current" /> © 2026 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}