import { Plane, Hotel, Car, MapPin, Users, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function TravelHospitality() {
  const solutions = [
    {
      icon: <Plane size={32} />,
      title: "Airline Management Systems",
      description: "Complete airline operations management with booking, scheduling, and customer service solutions."
    },
    {
      icon: <Hotel size={32} />,
      title: "Hotel Management Systems",
      description: "Comprehensive hotel operations including reservations, housekeeping, and guest services."
    },
    {
      icon: <Car size={32} />,
      title: "Transportation Solutions",
      description: "Fleet management, route optimization, and booking systems for ground transportation."
    },
    {
      icon: <MapPin size={32} />,
      title: "Travel Booking Platforms",
      description: "End-to-end travel booking solutions with multi-vendor integration and payment processing."
    }
  ];

  const services = [
    {
      title: "Booking & Reservation Systems",
      description: "Custom booking platforms with real-time inventory management and payment integration.",
      features: ["Online Booking", "Payment Processing", "Inventory Management", "Multi-language Support"]
    },
    {
      title: "Customer Relationship Management",
      description: "Specialized CRM solutions for travel companies to manage customer relationships and loyalty programs.",
      features: ["Customer Profiles", "Loyalty Programs", "Communication Tools", "Analytics Dashboard"]
    },
    {
      title: "Mobile Applications",
      description: "Native mobile apps for travelers with booking, check-in, and travel management features.",
      features: ["Mobile Booking", "Digital Check-in", "Travel Itineraries", "Push Notifications"]
    },
    {
      title: "Analytics & Reporting",
      description: "Business intelligence solutions for revenue management and operational optimization.",
      features: ["Revenue Analytics", "Performance Metrics", "Predictive Analytics", "Custom Reports"]
    }
  ];

  const technologies = [
    "React", "Node.js", "MongoDB", "AWS", "Docker", "Kubernetes",
    "Payment Gateways", "APIs", "Microservices", "Cloud Computing"
  ];

  const benefits = [
    {
      icon: <Users size={24} />,
      title: "Enhanced Customer Experience",
      description: "Improve guest satisfaction with seamless booking and service experiences."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Increased Revenue",
      description: "Optimize pricing and inventory management to maximize revenue potential."
    },
    {
      icon: <MapPin size={24} />,
      title: "Operational Efficiency",
      description: "Streamline operations with automated processes and real-time data management."
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
              Travel & Hospitality
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Transform your travel business with innovative technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored technology solutions for the travel and hospitality industry
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
              Our Travel & Hospitality Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive technology solutions for every aspect of your business
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
              Modern technologies for robust travel and hospitality solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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
              Proven benefits that drive success in the travel and hospitality industry
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
            Ready to Transform Your Travel Business?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's create technology solutions that enhance your guest experience and drive growth
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
