import React from 'react'
import {  Cloud, Code, Database, Monitor} from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About My Journey
          </h2>
          <p className="text-gray-400 text-lg">From curiosity to career transformation</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">Hello, I'm a DevOps Enthusiast!</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm at the beginning of an exciting journey into the world of DevOps. Coming from a 
              background in [Your Previous Field], I've discovered my passion for automating processes, 
              improving deployment pipelines, and bridging the gap between development and operations.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently diving deep into cloud technologies, containerization, and CI/CD practices. 
              Every day brings new challenges and learning opportunities that fuel my enthusiasm 
              for this dynamic field.
            </p>
            <div className="flex space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">6+</div>
                <div className="text-sm text-gray-400">Months Learning</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">15+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">3+</div>
                <div className="text-sm text-gray-400">Certifications Pursued</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-8 backdrop-blur-sm border border-gray-700">
              <h4 className="text-xl font-semibold text-white mb-4">Current Focus Areas</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <Cloud className="w-5 h-5 text-blue-400 mr-3" />
                  Cloud Platforms (AWS, Azure)
                </li>
                <li className="flex items-center text-gray-300">
                  <Code className="w-5 h-5 text-green-400 mr-3" />
                  Infrastructure as Code
                </li>
                <li className="flex items-center text-gray-300">
                  <Database className="w-5 h-5 text-yellow-400 mr-3" />
                  Containerization & Orchestration
                </li>
                <li className="flex items-center text-gray-300">
                  <Monitor className="w-5 h-5 text-purple-400 mr-3" />
                  Monitoring & Observability
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About