import React from 'react'
import { Server, Cloud, Code, Database, Shield, Monitor } from 'lucide-react';


const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: <Cloud className="w-8 h-8" />,
      skills: ["AWS (Learning)", "Azure (Basics)", "Google Cloud (Exploring)"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Containerization",
      icon: <Database className="w-8 h-8" />,
      skills: ["Docker", "Kubernetes (Learning)", "Container Registry"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "CI/CD Tools",
      icon: <Code className="w-8 h-8" />,
      skills: ["Jenkins (Basics)", "GitHub Actions", "GitLab CI"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Infrastructure",
      icon: <Server className="w-8 h-8" />,
      skills: ["Terraform (Learning)", "Ansible (Basics)", "Linux"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Monitoring",
      icon: <Monitor className="w-8 h-8" />,
      skills: ["Prometheus (Learning)", "Grafana", "ELK Stack (Exploring)"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Security",
      icon: <Shield className="w-8 h-8" />,
      skills: ["DevSecOps (Learning)", "OWASP", "Security Scanning"],
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg">Tools and technologies I'm mastering</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group hover:scale-105 transition-all duration-300">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 h-full">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-300 flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills