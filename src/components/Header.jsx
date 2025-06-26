
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Server, Cloud, Code, Database, Shield, Monitor, ChevronDown, ExternalLink, Download } from 'lucide-react';

// Header Component
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            DevOps.dev
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header