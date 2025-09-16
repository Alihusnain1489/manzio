import { Users, Phone, Mail, BarChart3, Calendar, Target } from "lucide-react";
import Link from "next/link";

export default function Dynamics365CRM() {
  const features = [
    {
      icon: <Users size={32} />,
      title: "Customer Management",
      description: "Complete customer profiles with interaction history, preferences, and relationship insights."
    },
    {
      icon: <Phone size={32} />,
      title: "Sales Automation",
      description: "Streamline sales processes with automated workflows, lead scoring, and opportunity management."
    },
    {
      icon: <Mail size={32} />,
      title: "Marketing Automation",
      description: "Create targeted campaigns, track engagement, and nurture leads through automated marketing workflows."
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Analytics & Reporting",
      description: "Real-time insights and comprehensive reporting to track performance and optimize strategies."
    }
  ];

  const modules = [
    {
      title: "Sales Management",
      features: ["Lead Management", "Opportunity Tracking", "Sales Forecasting", "Quote Management", "Pipeline Analytics"]
    },
    {
      title: "Marketing",
      features: ["Campaign Management", "Email Marketing", "Lead Scoring", "Marketing Analytics", "Event Management"]
    },
    {
      title: "Customer Service",
      features: ["Case Management", "Knowledge Base", "Service Level Agreements", "Customer Portal", "Multi-channel Support"]
    },
    {
      title: "Field Service",
      features: ["Work Order Management", "Scheduling", "Resource Management", "Mobile Access", "IoT Integration"]
    }
  ];

  const benefits = [
    {
      icon: <Target size={24} />,
      title: "Increased Sales",
      description: "Boost sales productivity with automated processes and better lead management."
    },
    {
      icon: <Users size={24} />,
      title: "Better Customer Experience",
      description: "Deliver personalized experiences that build lasting customer relationships."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Data-Driven Decisions",
      description: "Make informed decisions with comprehensive analytics and reporting capabilities."
    }
  ];

  const industries = [
    "Financial Services", "Healthcare", "Manufacturing", "Retail", "Professional Services",
    "Real Estate", "Education", "Non-Profit", "Technology", "Government"
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
              Dynamics 365 CRM
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Build stronger customer relationships with Microsoft Dynamics 365 CRM
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive CRM Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Manage every aspect of your customer relationships in one unified platform
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

      {/* Modules Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              CRM Modules & Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Complete customer relationship management across all touchpoints
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {module.title}
                </h3>
                <div className="space-y-2">
                  {module.features.map((feature, featureIndex) => (
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
              Why Choose Dynamics 365 CRM?
            </h2>
            <p className="text-xl text-gray-600">
              Proven benefits that drive customer satisfaction and business growth
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
              Tailored CRM solutions for various industry verticals
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
            Ready to Transform Your Customer Relationships?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's implement Dynamics 365 CRM to boost sales and improve customer satisfaction
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
