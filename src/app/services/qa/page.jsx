import { ShieldCheck, Bug, Zap, Users, Target, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function QATesting() {
  const services = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Functional Testing",
      description: "Comprehensive testing of all application features to ensure they work as intended."
    },
    {
      icon: <Bug size={32} />,
      title: "Bug Testing & Reporting",
      description: "Systematic identification, documentation, and tracking of software defects."
    },
    {
      icon: <Zap size={32} />,
      title: "Performance Testing",
      description: "Load, stress, and scalability testing to ensure optimal application performance."
    },
    {
      icon: <Users size={32} />,
      title: "User Acceptance Testing",
      description: "End-to-end testing from user perspective to validate business requirements."
    }
  ];

  const testingTypes = [
    {
      title: "Manual Testing",
      description: "Human-driven testing processes for comprehensive quality assurance.",
      features: ["Test Case Design", "Exploratory Testing", "Usability Testing", "Accessibility Testing"]
    },
    {
      title: "Automated Testing",
      description: "Automated test execution for faster, more reliable testing cycles.",
      features: ["Unit Testing", "Integration Testing", "Regression Testing", "API Testing"]
    },
    {
      title: "Security Testing",
      description: "Comprehensive security assessment to identify vulnerabilities and threats.",
      features: ["Penetration Testing", "Vulnerability Assessment", "Security Code Review", "Compliance Testing"]
    },
    {
      title: "Mobile Testing",
      description: "Specialized testing for mobile applications across different devices and platforms.",
      features: ["Device Testing", "Cross-platform Testing", "Performance Testing", "Usability Testing"]
    }
  ];

  const benefits = [
    {
      icon: <Target size={24} />,
      title: "Improved Quality",
      description: "Ensure high-quality software delivery with comprehensive testing processes."
    },
    {
      icon: <Zap size={24} />,
      title: "Faster Delivery",
      description: "Accelerate development cycles with automated testing and efficient QA processes."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Cost Reduction",
      description: "Reduce development costs by catching issues early in the development lifecycle."
    }
  ];

  const tools = [
    "Selenium", "Cypress", "Jest", "TestNG", "JUnit", "Postman", "JMeter",
    "Appium", "BrowserStack", "Sauce Labs", "GitLab CI", "Jenkins", "Docker"
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
              QA & Testing
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Ensure software quality and reliability with comprehensive testing solutions
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Testing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deliver high-quality software with our expert QA and testing solutions
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

      {/* Testing Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Testing We Provide
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive testing solutions for all software development needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testingTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {type.description}
                </p>
                <div className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our QA Services?
            </h2>
            <p className="text-xl text-gray-600">
              Proven benefits that ensure software quality and reliability
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

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Testing Tools & Technologies
            </h2>
            <p className="text-xl text-gray-600">
              Industry-standard tools for comprehensive testing solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {tools.map((tool, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg text-center font-semibold text-gray-700 hover:bg-teal-100 transition">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Ensure Software Quality?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's implement comprehensive testing solutions to deliver reliable software
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Start Testing
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
