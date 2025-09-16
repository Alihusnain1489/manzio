import { Wifi, Phone, BarChart3, Shield, Zap, Users } from "lucide-react";
import Link from "next/link";

export default function Telecommunications() {
  const solutions = [
    {
      icon: <Wifi size={32} />,
      title: "Network Management Systems",
      description: "Comprehensive network monitoring, optimization, and management solutions for telecom operators."
    },
    {
      icon: <Phone size={32} />,
      title: "Customer Service Platforms",
      description: "Advanced customer service solutions with omnichannel support and self-service capabilities."
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Billing & Revenue Management",
      description: "Sophisticated billing systems with real-time charging and revenue optimization capabilities."
    },
    {
      icon: <Shield size={32} />,
      title: "Security & Compliance",
      description: "Enterprise-grade security solutions with compliance management for telecom regulations."
    }
  ];

  const services = [
    {
      title: "OSS/BSS Solutions",
      description: "Operations and Business Support Systems for comprehensive telecom operations management.",
      features: ["Network Inventory", "Service Provisioning", "Fault Management", "Performance Monitoring"]
    },
    {
      title: "5G & IoT Solutions",
      description: "Next-generation network solutions and IoT platform development for telecom operators.",
      features: ["5G Network Planning", "IoT Platform Development", "Edge Computing", "Network Slicing"]
    },
    {
      title: "Customer Experience Management",
      description: "End-to-end customer experience solutions with analytics and personalization capabilities.",
      features: ["Customer Analytics", "Personalization", "Churn Prediction", "Loyalty Programs"]
    },
    {
      title: "Digital Transformation",
      description: "Complete digital transformation solutions for traditional telecom operators.",
      features: ["Legacy Modernization", "Cloud Migration", "API Development", "Microservices Architecture"]
    }
  ];

  const technologies = [
    "Java", "Python", "Kubernetes", "Docker", "AWS", "Azure", "5G", "IoT",
    "Machine Learning", "Big Data", "Blockchain", "Edge Computing"
  ];

  const benefits = [
    {
      icon: <Zap size={24} />,
      title: "Operational Efficiency",
      description: "Streamline operations with automated processes and real-time monitoring."
    },
    {
      icon: <Users size={24} />,
      title: "Enhanced Customer Experience",
      description: "Deliver superior customer service with personalized experiences and self-service options."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Revenue Growth",
      description: "Increase revenue through better service offerings and customer retention strategies."
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
              Telecommunications
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Drive innovation in telecommunications with cutting-edge technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Telecom-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized technology solutions for the telecommunications industry
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
              Our Telecom Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive technology solutions for modern telecommunications
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
              Advanced technologies for next-generation telecom solutions
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
              Why Choose Our Solutions?
            </h2>
            <p className="text-xl text-gray-600">
              Proven benefits that drive success in the telecommunications industry
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
            Ready to Transform Your Telecom Operations?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's implement cutting-edge solutions that drive innovation and growth
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
