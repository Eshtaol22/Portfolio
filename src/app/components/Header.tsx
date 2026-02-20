import { Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

export function Header({ darkMode, toggleTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b ${
      darkMode 
        ? 'bg-gray-950/90 border-gray-800' 
        : 'bg-white/80 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <span className="text-orange-500">{"<"}</span>
            Feben Alebachew
            <span className="text-orange-500">{"/>"}</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className={`relative group ${
                darkMode ? 'text-gray-300 hover:text-orange-500' : 'text-gray-600 hover:text-orange-500'
              } transition-colors`}
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all"></span>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`relative group ${
                darkMode ? 'text-gray-300 hover:text-orange-500' : 'text-gray-600 hover:text-orange-500'
              } transition-colors`}
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all"></span>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`relative group ${
                darkMode ? 'text-gray-300 hover:text-orange-500' : 'text-gray-600 hover:text-orange-500'
              } transition-colors`}
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all"></span>
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className={`relative group ${
                darkMode ? 'text-gray-300 hover:text-orange-500' : 'text-gray-600 hover:text-orange-500'
              } transition-colors`}
            >
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all"></span>
            </button>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all ${
                darkMode 
                  ? 'bg-gray-800 text-orange-500 hover:bg-gray-700' 
                  : 'bg-gray-100 text-orange-500 hover:bg-gray-200'
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
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
            className={`md:hidden ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("about")}
              className={`text-left ${
                darkMode ? 'text-gray-300 hover:text-orange-500' : 'text-gray-600 hover:text-orange-500'
              } transition-colors`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`text-left ${
                darkMode ? 'text-gray-300 hover:text-orange-500' : 'text-gray-600 hover:text-orange-500'
              } transition-colors`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`text-left ${
                darkMode ? 'text-gray-300 hover:text-orange-500' : 'text-gray-600 hover:text-orange-500'
              } transition-colors`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className={`text-left ${
                darkMode ? 'text-gray-300 hover:text-orange-500' : 'text-gray-600 hover:text-orange-500'
              } transition-colors`}
            >
              Skills
            </button>
            
            <button
              onClick={toggleTheme}
              className={`px-6 py-2 rounded-lg transition-all text-left flex items-center gap-2 ${
                darkMode 
                  ? 'bg-gray-800 text-orange-500 hover:bg-gray-700' 
                  : 'bg-gray-100 text-orange-500 hover:bg-gray-200'
              }`}
            >
              {darkMode ? <><Sun size={20} /> Light Mode</> : <><Moon size={20} /> Dark Mode</>}
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