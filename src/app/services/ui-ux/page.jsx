import { Palette, Smartphone, Monitor, Users, Zap, Shield } from "lucide-react";
import Link from "next/link";

export default function UIUXDesign() {
  const services = [
    {
      icon: <Palette size={32} />,
      title: "UI Design",
      description: "Beautiful, intuitive user interfaces that engage users and enhance their experience."
    },
    {
      icon: <Users size={32} />,
      title: "UX Research",
      description: "User research and testing to understand user needs and create optimal experiences."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile Design",
      description: "Responsive mobile designs that work seamlessly across all devices and screen sizes."
    },
    {
      icon: <Monitor size={32} />,
      title: "Web Design",
      description: "Modern web designs that are both visually appealing and highly functional."
    }
  ];

  const designProcess = [
    {
      step: "01",
      title: "Research & Discovery",
      description: "Understanding your users, business goals, and market landscape through comprehensive research."
    },
    {
      step: "02",
      title: "Wireframing & Prototyping",
      description: "Creating low-fidelity wireframes and interactive prototypes to test concepts early."
    },
    {
      step: "03",
      title: "Visual Design",
      description: "Crafting beautiful, on-brand visual designs with attention to detail and consistency."
    },
    {
      step: "04",
      title: "Testing & Iteration",
      description: "User testing and continuous iteration to ensure the design meets user needs and business goals."
    }
  ];

  const tools = [
    "Figma", "Sketch", "Adobe XD", "InVision", "Principle", "Framer",
    "Maze", "Hotjar", "Google Analytics", "Zeplin", "Abstract", "Notion"
  ];

  const designTypes = [
    {
      title: "Web Applications",
      description: "Complete UI/UX design for web applications with focus on usability and conversion.",
      features: ["Responsive Design", "User Flow Optimization", "Accessibility", "Performance"]
    },
    {
      title: "Mobile Apps",
      description: "Native mobile app designs that follow platform guidelines and best practices.",
      features: ["iOS/Android Guidelines", "Touch Interactions", "Navigation Patterns", "App Store Optimization"]
    },
    {
      title: "E-commerce",
      description: "E-commerce designs that drive conversions and provide seamless shopping experiences.",
      features: ["Product Showcases", "Checkout Optimization", "Trust Elements", "Mobile Commerce"]
    },
    {
      title: "Dashboards",
      description: "Complex dashboard designs for data visualization and business intelligence tools.",
      features: ["Data Visualization", "Information Architecture", "Custom Controls", "Real-time Updates"]
    }
  ];

  const portfolioItems = [
    {
      title: "Healthcare Portal",
      description: "Patient management system with intuitive appointment booking and medical records access.",
      image: "/Hero.jpg",
      category: "Web Application"
    },
    {
      title: "E-commerce Mobile App",
      description: "Shopping app with smooth checkout flow and personalized product recommendations.",
      image: "/Hero2.jpg",
      category: "Mobile App"
    },
    {
      title: "Analytics Dashboard",
      description: "Business intelligence dashboard with interactive charts and real-time data visualization.",
      image: "/Hero.jpg",
      category: "Dashboard"
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
              UI/UX Design
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Create exceptional user experiences that drive engagement and business growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Design Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From research to implementation, we create designs that users love
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

      {/* Design Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Design Process
            </h2>
            <p className="text-xl text-gray-600">
              A user-centered approach that ensures successful design outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designProcess.map((process, index) => (
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

      {/* Tools Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Design Tools We Use
            </h2>
            <p className="text-xl text-gray-600">
              Industry-standard tools for professional design and collaboration
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center font-semibold text-gray-700 hover:bg-teal-100 transition shadow-sm">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Designs We Create
            </h2>
            <p className="text-xl text-gray-600">
              Specialized design solutions for different platforms and use cases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {type.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {type.features.map((feature, featureIndex) => (
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

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Design Work
            </h2>
            <p className="text-xl text-gray-600">
              See how we've transformed user experiences across different industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url('${item.image}')` }}
                ></div>
                <div className="p-6">
                  <div className="text-sm text-teal-600 font-semibold mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
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
            Ready to Transform Your User Experience?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's create designs that delight users and drive business success
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
