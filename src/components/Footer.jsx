import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/yourusername" className="text-gray-400 hover:text-blue-400 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" className="text-gray-400 hover:text-blue-400 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-blue-400 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <p className="text-gray-400">
          © 2025 DevOps Portfolio. Built with React, Tailwind, and passion for learning.
        </p>
      </div>
    </footer>
  );
};

export default Footer