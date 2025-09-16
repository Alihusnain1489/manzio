import { Cloud, Users, BarChart3, Shield, Zap, Target } from "lucide-react";
import Link from "next/link";

export default function Salesforce() {
  const features = [
    {
      icon: <Cloud size={32} />,
      title: "Cloud-First Platform",
      description: "Scalable cloud infrastructure with automatic updates and global accessibility."
    },
    {
      icon: <Users size={32} />,
      title: "Customer 360",
      description: "Unified view of customers across all touchpoints and business processes."
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Advanced Analytics",
      description: "AI-powered insights with Einstein Analytics and predictive intelligence."
    },
    {
      icon: <Shield size={32} />,
      title: "Enterprise Security",
      description: "Industry-leading security with compliance certifications and data protection."
    }
  ];

  const clouds = [
    {
      title: "Sales Cloud",
      description: "Complete sales management solution with lead tracking, opportunity management, and forecasting.",
      features: ["Lead Management", "Opportunity Tracking", "Sales Forecasting", "Territory Management", "Sales Analytics"]
    },
    {
      title: "Service Cloud",
      description: "Customer service platform with case management, knowledge base, and omnichannel support.",
      features: ["Case Management", "Knowledge Base", "Live Chat", "Field Service", "Service Analytics"]
    },
    {
      title: "Marketing Cloud",
      description: "Comprehensive marketing automation with email, social, and advertising management.",
      features: ["Email Marketing", "Social Media", "Journey Builder", "Advertising Studio", "Marketing Analytics"]
    },
    {
      title: "Commerce Cloud",
      description: "E-commerce platform for B2B and B2C commerce with personalized shopping experiences.",
      features: ["Online Store", "Mobile Commerce", "Personalization", "Order Management", "Commerce Analytics"]
    }
  ];

  const benefits = [
    {
      icon: <Target size={24} />,
      title: "Increased Revenue",
      description: "Boost sales productivity and customer satisfaction with integrated CRM solutions."
    },
    {
      icon: <Zap size={24} />,
      title: "Faster Implementation",
      description: "Rapid deployment with pre-built solutions and extensive customization options."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Data-Driven Insights",
      description: "Make informed decisions with comprehensive analytics and AI-powered recommendations."
    }
  ];

  const industries = [
    "Financial Services", "Healthcare", "Manufacturing", "Retail", "Technology",
    "Education", "Non-Profit", "Government", "Media", "Real Estate"
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
              Salesforce Solutions
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Transform your business with the world's #1 CRM platform
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive CRM Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unify your business processes with Salesforce's integrated cloud solutions
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

      {/* Salesforce Clouds Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Salesforce Cloud Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Complete suite of cloud-based business applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clouds.map((cloud, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {cloud.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {cloud.description}
                </p>
                <div className="space-y-2">
                  {cloud.features.map((feature, featureIndex) => (
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
              Why Choose Salesforce?
            </h2>
            <p className="text-xl text-gray-600">
              Proven benefits that drive business growth and customer success
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

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Tailored Salesforce solutions for various industry verticals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg text-center font-semibold text-gray-700 hover:bg-teal-100 transition">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business with Salesforce?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's implement Salesforce to drive growth and improve customer relationships
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
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
