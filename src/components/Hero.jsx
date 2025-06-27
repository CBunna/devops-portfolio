import React from 'react'
import {  Server, ChevronDown,  } from 'lucide-react';

const Hero = () => {

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/resume_bunna.pdf'; 
    link.download = 'Bunna-DevOps-Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
              <Server className="w-16 h-16 text-blue-400" />
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            DevOps Engineer
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Embarking on a journey to bridge development and operations.<br />
          <span className="text-blue-400">Building, Deploying, Scaling.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
           onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            View My Work
          </button>
          <button 
           onClick={handleDownloadCV}
          className="px-8 py-3 border border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-gray-900 transition-all duration-300">
            Download Resume
          </button>
        </div>
        
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-blue-400 mx-auto" />
        </div>
      </div>
    </section>
  )
}

export default Hero