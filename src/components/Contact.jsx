import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-gray-400 text-lg mb-12">
          I'm always open to discussing DevOps, learning opportunities, and potential collaborations
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a href="mailto:your.email@example.com" className="group">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-400">your.email@example.com</p>
            </div>
          </a>
          
          <a href="https://linkedin.com/in/yourprofile" className="group">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <Linkedin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400">Connect with me</p>
            </div>
          </a>
          
          <a href="https://github.com/yourusername" className="group">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <Github className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400">View my code</p>
            </div>
          </a>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-8 border border-gray-700">
          <h3 className="text-2xl font-semibold text-white mb-4">Ready to Start a Conversation?</h3>
          <p className="text-gray-300 mb-6">
            Whether you're a fellow DevOps enthusiast, a potential mentor, or looking for someone passionate about learning, I'd love to hear from you!
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact