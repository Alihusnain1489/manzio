"use client";

import { Filter, ExternalLink, Github, Eye } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "ecommerce", name: "E-commerce" },
    { id: "enterprise", name: "Enterprise" },
    { id: "healthcare", name: "Healthcare" }
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "/Hero.jpg",
      category: "ecommerce",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "/portfolio/ecommerce-platform",
      github: "https://github.com/manzio/ecommerce-platform"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      description: "HIPAA-compliant patient management system with appointment booking and medical records.",
      image: "/Hero2.jpg",
      category: "healthcare",
      technologies: ["Next.js", "PostgreSQL", "AWS", "TypeScript"],
      link: "/portfolio/healthcare-system",
      github: "https://github.com/manzio/healthcare-system"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time transactions.",
      image: "/Hero.jpg",
      category: "mobile",
      technologies: ["React Native", "Node.js", "MongoDB", "AWS"],
      link: "/portfolio/banking-app",
      github: "https://github.com/manzio/banking-app"
    },
    {
      id: 4,
      title: "Corporate Website",
      description: "Modern corporate website with CMS, multi-language support, and SEO optimization.",
      image: "/Hero2.jpg",
      category: "web",
      technologies: ["React", "Contentful", "Tailwind CSS", "Vercel"],
      link: "/portfolio/corporate-website",
      github: "https://github.com/manzio/corporate-website"
    },
    {
      id: 5,
      title: "ERP System",
      description: "Comprehensive enterprise resource planning system for manufacturing companies.",
      image: "/Hero.jpg",
      category: "enterprise",
      technologies: ["Angular", "C#", "SQL Server", "Azure"],
      link: "/portfolio/erp-system",
      github: "https://github.com/manzio/erp-system"
    },
    {
      id: 6,
      title: "Food Delivery App",
      description: "Complete food delivery platform with restaurant management and real-time tracking.",
      image: "/Hero2.jpg",
      category: "mobile",
      technologies: ["Flutter", "Firebase", "Google Maps", "Stripe"],
      link: "/portfolio/food-delivery-app",
      github: "https://github.com/manzio/food-delivery-app"
    },
    {
      id: 7,
      title: "Analytics Dashboard",
      description: "Business intelligence dashboard with real-time data visualization and reporting.",
      image: "/Hero.jpg",
      category: "web",
      technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
      link: "/portfolio/analytics-dashboard",
      github: "https://github.com/manzio/analytics-dashboard"
    },
    {
      id: 8,
      title: "Telemedicine Platform",
      description: "Video consultation platform for healthcare providers with patient management.",
      image: "/Hero2.jpg",
      category: "healthcare",
      technologies: ["React", "WebRTC", "Node.js", "MongoDB"],
      link: "/portfolio/telemedicine-platform",
      github: "https://github.com/manzio/telemedicine-platform"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/Hero2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Explore our successful projects and see how we've helped businesses transform digitally
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  activeFilter === category.id
                    ? "bg-teal-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url('${project.image}')` }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href={project.link}
                      className="flex-1 bg-teal-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-teal-700 transition flex items-center justify-center gap-2"
                    >
                      <Eye size={16} />
                      View Details
                    </Link>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition flex items-center justify-center"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Success Metrics
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                500+
              </div>
              <div className="text-gray-600 text-lg">
                Projects Completed
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                200+
              </div>
              <div className="text-gray-600 text-lg">
                Happy Clients
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                50+
              </div>
              <div className="text-gray-600 text-lg">
                Team Members
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                10+
              </div>
              <div className="text-gray-600 text-lg">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's create something amazing together. Contact us to discuss your project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Start Your Project
            </Link>
            <Link 
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}