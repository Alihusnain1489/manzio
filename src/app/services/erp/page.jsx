import { Database, Users, BarChart3, Settings, Shield, Zap } from "lucide-react";
import Link from "next/link";

export default function Dynamics365ERP() {
  const features = [
    {
      icon: <Database size={32} />,
      title: "Financial Management",
      description: "Complete financial control with automated processes, reporting, and compliance management."
    },
    {
      icon: <Users size={32} />,
      title: "Human Resources",
      description: "Streamlined HR processes including payroll, benefits, and employee self-service portals."
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Supply Chain Management",
      description: "End-to-end supply chain visibility with inventory optimization and demand forecasting."
    },
    {
      icon: <Settings size={32} />,
      title: "Manufacturing",
      description: "Production planning, quality control, and shop floor management for manufacturing operations."
    }
  ];

  const modules = [
    {
      title: "Finance & Accounting",
      features: ["General Ledger", "Accounts Payable", "Accounts Receivable", "Fixed Assets", "Budget Management"]
    },
    {
      title: "Supply Chain",
      features: ["Procurement", "Inventory Management", "Warehouse Management", "Vendor Management", "Purchase Orders"]
    },
    {
      title: "Manufacturing",
      features: ["Production Planning", "Shop Floor Control", "Quality Management", "Bill of Materials", "Work Orders"]
    },
    {
      title: "Human Resources",
      features: ["Payroll Processing", "Benefits Administration", "Time & Attendance", "Performance Management", "Recruitment"]
    }
  ];

  const benefits = [
    {
      icon: <Zap size={24} />,
      title: "Improved Efficiency",
      description: "Automate routine tasks and streamline business processes for maximum productivity."
    },
    {
      icon: <Shield size={24} />,
      title: "Enhanced Security",
      description: "Enterprise-grade security with role-based access control and data encryption."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Better Insights",
      description: "Real-time analytics and reporting for data-driven decision making."
    }
  ];

  const industries = [
    "Manufacturing", "Distribution", "Retail", "Healthcare", "Professional Services",
    "Construction", "Food & Beverage", "Automotive", "Aerospace", "Pharmaceuticals"
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
              Dynamics 365 ERP
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Transform your business operations with Microsoft Dynamics 365 ERP solutions
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive ERP Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline your business processes with integrated ERP modules
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
              ERP Modules & Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive modules to manage every aspect of your business
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
              Why Choose Dynamics 365 ERP?
            </h2>
            <p className="text-xl text-gray-600">
              Proven benefits that drive business growth and operational excellence
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
              Tailored ERP solutions for various industry verticals
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
            Ready to Transform Your Business Operations?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's implement Dynamics 365 ERP to streamline your processes and drive growth
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
