import { Code2, Globe, Smartphone, Database, Shield, Zap } from "lucide-react";
import Link from "next/link";

export default function WebDevelopment() {
  const features = [
    {
      icon: <Globe size={32} />,
      title: "Responsive Web Design",
      description: "Mobile-first, responsive websites that work perfectly across all devices and screen sizes."
    },
    {
      icon: <Zap size={32} />,
      title: "Performance Optimization",
      description: "Lightning-fast loading times with optimized code and modern web technologies."
    },
    {
      icon: <Database size={32} />,
      title: "Database Integration",
      description: "Seamless database connectivity with secure data management and real-time updates."
    },
    {
      icon: <Shield size={32} />,
      title: "Security & Compliance",
      description: "Enterprise-grade security with SSL certificates, data encryption, and compliance standards."
    }
  ];

  const technologies = [
    "React.js", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", 
    "AWS", "Docker", "Kubernetes", "GraphQL", "REST APIs", "Microservices"
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and inventory management.",
      image: "/Hero.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      title: "Healthcare Portal",
      description: "Patient management system with appointment booking and medical records.",
      image: "/Hero2.jpg",
      technologies: ["Next.js", "PostgreSQL", "AWS", "TypeScript"]
    },
    {
      title: "Corporate Website",
      description: "Modern corporate website with CMS and multi-language support.",
      image: "/Hero.jpg",
      technologies: ["React", "Contentful", "Tailwind CSS", "Vercel"]
    }
  ];

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
              Web Development
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Transform your business with custom web applications built using cutting-edge technologies
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Web Development Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver high-performance, scalable web solutions that drive business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-teal-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600">
              Modern, proven technologies for robust web applications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg text-center font-semibold text-gray-700 hover:bg-teal-100 transition">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Web Development Projects
            </h2>
            <p className="text-xl text-gray-600">
              See how we've helped businesses transform their digital presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
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
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your Next Web Application?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's discuss your project and create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Get Started
            </Link>
            <Link 
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
