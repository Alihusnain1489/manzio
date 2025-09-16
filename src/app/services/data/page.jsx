import { BarChart3, Database, TrendingUp, Shield, Zap, Users } from "lucide-react";
import Link from "next/link";

export default function DataAnalytics() {
  const features = [
    {
      icon: <BarChart3 size={32} />,
      title: "Business Intelligence",
      description: "Transform raw data into actionable insights with interactive dashboards and reports."
    },
    {
      icon: <Database size={32} />,
      title: "Data Integration",
      description: "Connect and consolidate data from multiple sources for comprehensive analysis."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Predictive Analytics",
      description: "Leverage machine learning to forecast trends and make data-driven predictions."
    },
    {
      icon: <Shield size={32} />,
      title: "Data Governance",
      description: "Ensure data quality, security, and compliance with enterprise data governance frameworks."
    }
  ];

  const services = [
    {
      title: "Data Strategy & Consulting",
      description: "Develop comprehensive data strategies aligned with business objectives and goals.",
      features: ["Data Assessment", "Strategy Development", "Roadmap Planning", "Change Management"]
    },
    {
      title: "Data Warehousing",
      description: "Design and implement scalable data warehouses for centralized data management.",
      features: ["ETL/ELT Processes", "Data Modeling", "Performance Optimization", "Cloud Migration"]
    },
    {
      title: "Advanced Analytics",
      description: "Implement machine learning and AI solutions for predictive and prescriptive analytics.",
      features: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision"]
    },
    {
      title: "Real-time Analytics",
      description: "Build streaming analytics solutions for real-time data processing and insights.",
      features: ["Stream Processing", "Real-time Dashboards", "Event-driven Architecture", "IoT Analytics"]
    }
  ];

  const technologies = [
    "Python", "R", "SQL", "Apache Spark", "Hadoop", "Kafka", "Elasticsearch",
    "Tableau", "Power BI", "Looker", "AWS", "Azure", "Google Cloud", "Snowflake"
  ];

  const industries = [
    "Healthcare", "Finance", "Retail", "Manufacturing", "Telecommunications",
    "E-commerce", "Media", "Government", "Education", "Energy"
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
              Data Analytics
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Unlock the power of your data with advanced analytics and business intelligence solutions
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Analytics Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your data into strategic business insights
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

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Analytics Services
            </h2>
            <p className="text-xl text-gray-600">
              End-to-end data analytics solutions for every business need
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
              Modern tools and platforms for comprehensive data analytics
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
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
              Specialized analytics solutions for various industry verticals
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
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's transform your data into actionable insights that drive business growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Start Your Analytics Journey
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
