import React from 'react'
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Personal Website with CI/CD Pipeline",
      description: "Automated deployment pipeline for this portfolio website using GitHub Actions and AWS S3.",
      tech: ["GitHub Actions", "AWS S3"],
      status: "Completed",
      link: "https://github.com/CBunna/devops-portfolio"
    },
    {
      title: "Infrastructure as Code (IaC) Project",
      description: "Create reusable modules for different environments (dev/staging/prod)",
      tech: ["Terraform", "Docker Compose", "NGINX"],
      status: "Planning",
      link: "#"
    },
    {
      title: "Infrastructure as Code",
      description: "Learning Terraform by provisioning AWS resources and managing infrastructure declaratively.",
      tech: ["Terraform", "AWS", "Infrastructure as Code"],
      status: "Planning",
      link: "#"
    },
    {
      title: "Monitoring Dashboard",
      description: "Setting up monitoring for containerized applications using Prometheus and Grafana.",
      tech: ["Prometheus", "Grafana", "Docker"],
      status: "Planning",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Learning Projects
          </h2>
          <p className="text-gray-400 text-lg">Hands-on projects that showcase my DevOps journey</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group hover:scale-105 transition-all duration-300">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 h-full">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                    project.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-sm border border-blue-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a href={project.link} className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                  View Project <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects