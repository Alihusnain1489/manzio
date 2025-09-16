import { Building, Shield, Users, BarChart3, Zap, Target } from "lucide-react";
import Link from "next/link";

export default function PublicSector() {
  const solutions = [
    {
      icon: <Building size={32} />,
      title: "Digital Government Services",
      description: "Citizen-centric digital services with online portals and automated workflows."
    },
    {
      icon: <Shield size={32} />,
      title: "Cybersecurity Solutions",
      description: "Advanced security solutions to protect government data and critical infrastructure."
    },
    {
      icon: <Users size={32} />,
      title: "Citizen Engagement Platforms",
      description: "Interactive platforms for citizen participation and government transparency."
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Data Analytics & Reporting",
      description: "Comprehensive analytics solutions for policy making and performance monitoring."
    }
  ];

  const services = [
    {
      title: "E-Government Platforms",
      description: "Complete digital government solutions with citizen portals and service automation.",
      features: ["Citizen Portals", "Service Automation", "Document Management", "Digital Identity"]
    },
    {
      title: "Public Safety Systems",
      description: "Emergency response and public safety management systems for law enforcement agencies.",
      features: ["Emergency Response", "Incident Management", "Resource Tracking", "Communication Systems"]
    },
    {
      title: "Financial Management",
      description: "Government financial management systems with budgeting, accounting, and reporting capabilities.",
      features: ["Budget Planning", "Financial Reporting", "Audit Management", "Compliance Tracking"]
    },
    {
      title: "Infrastructure Management",
      description: "Smart city and infrastructure management solutions for urban development and maintenance.",
      features: ["Asset Management", "Maintenance Scheduling", "Performance Monitoring", "Predictive Analytics"]
    }
  ];

  const technologies = [
    "Cloud Computing", "Blockchain", "IoT", "AI/ML", "Big Data", "Cybersecurity",
    "Mobile Apps", "APIs", "Microservices", "DevOps", "Compliance", "Accessibility"
  ];

  const benefits = [
    {
      icon: <Target size={24} />,
      title: "Improved Citizen Services",
      description: "Enhance citizen experience with efficient, accessible digital government services."
    },
    {
      icon: <Zap size={24} />,
      title: "Operational Efficiency",
      description: "Streamline government operations with automated processes and data-driven insights."
    },
    {
      icon: <Shield size={24} />,
      title: "Enhanced Security",
      description: "Protect sensitive government data with enterprise-grade security and compliance solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/Hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Public Sector
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Modernize government operations with innovative technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Government-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized technology solutions for the public sector
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-teal-600 mb-4 flex justify-center">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Public Sector Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive technology solutions for modern government operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
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
              Modern technologies for secure and efficient government solutions
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Public Sector Solutions?
            </h2>
            <p className="text-xl text-gray-600">
              Proven benefits that improve government efficiency and citizen satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-teal-600 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Modernize Government Operations?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's create technology solutions that improve citizen services and government efficiency
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
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
