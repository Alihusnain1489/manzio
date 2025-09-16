import { Smartphone, Tablet, Monitor, Zap, Shield, Users } from "lucide-react";
import Link from "next/link";

export default function AppDevelopment() {
  const platforms = [
    {
      icon: <Smartphone size={32} />,
      title: "iOS Development",
      description: "Native iOS apps built with Swift and SwiftUI for optimal performance and user experience."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Android Development",
      description: "Native Android apps using Kotlin and Jetpack Compose for modern, responsive interfaces."
    },
    {
      icon: <Monitor size={32} />,
      title: "Cross-Platform",
      description: "React Native and Flutter apps that work seamlessly across iOS and Android platforms."
    },
    {
      icon: <Tablet size={32} />,
      title: "Progressive Web Apps",
      description: "Web-based apps that provide native app-like experiences on mobile devices."
    }
  ];

  const features = [
    {
      icon: <Zap size={24} />,
      title: "High Performance",
      description: "Optimized for speed and efficiency with smooth animations and fast loading times."
    },
    {
      icon: <Shield size={24} />,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with data encryption and compliance with industry standards."
    },
    {
      icon: <Users size={24} />,
      title: "User-Centric Design",
      description: "Intuitive interfaces designed with user experience and accessibility in mind."
    }
  ];

  const technologies = [
    "React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic",
    "Firebase", "AWS Amplify", "GraphQL", "Redux", "TypeScript", "Jest"
  ];

  const appTypes = [
    {
      title: "E-Commerce Apps",
      description: "Complete shopping solutions with payment processing, inventory management, and order tracking.",
      features: ["Payment Integration", "Push Notifications", "Offline Support", "Analytics"]
    },
    {
      title: "Business Apps",
      description: "Custom business applications for internal processes, CRM, and team collaboration.",
      features: ["User Management", "Data Sync", "Real-time Updates", "Custom Workflows"]
    },
    {
      title: "Healthcare Apps",
      description: "HIPAA-compliant healthcare applications for patient management and telemedicine.",
      features: ["Secure Messaging", "Appointment Booking", "Medical Records", "Video Consultations"]
    },
    {
      title: "Social & Community",
      description: "Social networking and community platforms with real-time messaging and content sharing.",
      features: ["Real-time Chat", "Content Sharing", "User Profiles", "Moderation Tools"]
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
              Mobile App Development
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Create powerful mobile applications that engage users and drive business growth
            </p>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multi-Platform Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We develop apps for all major platforms using the latest technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-teal-600 mb-4 flex justify-center">
                  {platform.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {platform.title}
                </h3>
                <p className="text-gray-600">
                  {platform.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our App Development?
            </h2>
            <p className="text-xl text-gray-600">
              We deliver apps that users love and businesses rely on
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600">
              Modern frameworks and tools for robust mobile applications
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

      {/* App Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Apps We Build
            </h2>
            <p className="text-xl text-gray-600">
              From simple utilities to complex enterprise solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {appTypes.map((type, index) => (
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

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's turn your app idea into reality with our expert development team
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
