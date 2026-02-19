import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold text-white">
            <span className="text-orange-500">{"<"}</span>
            Portfolio
            <span className="text-orange-500">{"/>"}</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-orange-500 transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all"></span>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-300 hover:text-orange-500 transition-colors relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all"></span>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-300 hover:text-orange-500 transition-colors relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all"></span>
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-300 hover:text-orange-500 transition-colors relative group"
            >
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-orange-500 transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-300 hover:text-orange-500 transition-colors text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-300 hover:text-orange-500 transition-colors text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-300 hover:text-orange-500 transition-colors text-left"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all text-left"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}