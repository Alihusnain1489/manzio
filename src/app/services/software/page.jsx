import { Code2, Database, Cloud, Shield, Settings, Users } from "lucide-react";
import Link from "next/link";

export default function CustomSoftwareDevelopment() {
  const services = [
    {
      icon: <Code2 size={32} />,
      title: "Custom Web Applications",
      description: "Tailored web solutions built from scratch to meet your specific business requirements."
    },
    {
      icon: <Database size={32} />,
      title: "Database Solutions",
      description: "Custom database design and implementation for efficient data management and analytics."
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud Applications",
      description: "Scalable cloud-based applications with microservices architecture and containerization."
    },
    {
      icon: <Settings size={32} />,
      title: "System Integration",
      description: "Seamless integration of existing systems with new custom software solutions."
    }
  ];

  const technologies = [
    "Python", "Java", "C#", "Node.js", "React", "Angular", "Vue.js",
    "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes", "AWS",
    "Azure", "Google Cloud", "Microservices", "REST APIs", "GraphQL"
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project roadmap with timelines and milestones."
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Our architects design the system architecture and create wireframes and technical specifications."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development process with continuous testing and regular client feedback sessions."
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Smooth deployment with comprehensive documentation and ongoing maintenance and support."
    }
  ];

  const industries = [
    {
      title: "Healthcare",
      description: "HIPAA-compliant software solutions for patient management, telemedicine, and medical records.",
      features: ["Patient Portals", "Appointment Scheduling", "Medical Billing", "Telemedicine Platforms"]
    },
    {
      title: "Finance",
      description: "Secure financial software with compliance features for banking, insurance, and fintech applications.",
      features: ["Payment Processing", "Risk Management", "Compliance Tools", "Financial Analytics"]
    },
    {
      title: "E-commerce",
      description: "Complete e-commerce solutions with inventory management, order processing, and customer analytics.",
      features: ["Online Stores", "Inventory Management", "Payment Gateways", "Customer Analytics"]
    },
    {
      title: "Manufacturing",
      description: "ERP and MES solutions for production planning, quality control, and supply chain management.",
      features: ["Production Planning", "Quality Control", "Supply Chain", "Asset Management"]
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
              Custom Software Development
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Build unique software solutions tailored to your business needs and processes
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Custom Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, we create software that perfectly fits your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-teal-600 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600">
              Modern, scalable technologies for robust software solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center font-semibold text-gray-700 hover:bg-teal-100 transition shadow-sm">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Specialized solutions for various industries and business verticals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {industry.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {industry.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {industry.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
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
            Ready to Build Custom Software?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's discuss your requirements and create a solution that transforms your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Start Your Project
            </Link>
            <Link 
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
