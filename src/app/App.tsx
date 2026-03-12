import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "sonner";

export default function App() {
  // Initialize dark mode from localStorage or default to false (light mode)
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved !== null ? JSON.parse(saved) : false;
  });

  // Save theme preference to localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Set document title and favicon
  useEffect(() => {
    document.title = "Feben Alebachew | UI/UX Designer & Full Stack Developer";
    
    // Create and set favicon
    const setFavicon = () => {
      // Remove existing favicons
      const existingFavicons = document.querySelectorAll("link[rel*='icon']");
      existingFavicons.forEach(favicon => favicon.remove());
      
      // Create new favicon (using emoji as favicon)
      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👩‍💻</text></svg>`;
      document.head.appendChild(link);
    };
    
    setFavicon();
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-950' : 'bg-white'
    }`}>
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Services darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Testimonials darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
      <Toaster 
        position="top-right"
        theme={darkMode ? 'dark' : 'light'}
        toastOptions={{
          style: {
            background: darkMode ? '#1f2937' : '#ffffff',
            color: darkMode ? '#f3f4f6' : '#111827',
            border: darkMode ? '1px solid #374151' : '1px solid #e5e7eb',
          },
        }}
      />
    </div>
  );
}