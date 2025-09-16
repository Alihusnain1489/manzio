import { Smartphone, Database, Zap, Shield, Users, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function PowerApps() {
  const features = [
    {
      icon: <Smartphone size={32} />,
      title: "No-Code Development",
      description: "Build powerful business apps without writing code using drag-and-drop interface."
    },
    {
      icon: <Database size={32} />,
      title: "Data Integration",
      description: "Connect to 200+ data sources including SharePoint, Excel, SQL Server, and more."
    },
    {
      icon: <Zap size={32} />,
      title: "Rapid Deployment",
      description: "Deploy apps quickly across your organization with built-in security and governance."
    },
    {
      icon: <Shield size={32} />,
      title: "Enterprise Security",
      description: "Built-in security features with Azure Active Directory integration and compliance controls."
    }
  ];

  const appTypes = [
    {
      title: "Canvas Apps",
      description: "Custom apps with pixel-perfect control over layout and user experience.",
      features: ["Drag & Drop Interface", "Custom UI Design", "Offline Capability", "Mobile Responsive"]
    },
    {
      title: "Model-Driven Apps",
      description: "Data-centric apps built on the Common Data Service with powerful business logic.",
      features: ["Data Model Driven", "Business Process Flows", "Advanced Security", "Scalable Architecture"]
    },
    {
      title: "Portal Apps",
      description: "External-facing websites for customers, partners, and employees.",
      features: ["Public Access", "Custom Branding", "Multi-language Support", "SEO Optimized"]
    }
  ];

  const benefits = [
    {
      icon: <Users size={24} />,
      title: "Empower Citizen Developers",
      description: "Enable business users to create their own solutions without IT dependency."
    },
    {
      icon: <Zap size={24} />,
      title: "Faster Time to Market",
      description: "Reduce development time from months to days with rapid app development."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Cost Effective",
      description: "Lower total cost of ownership compared to traditional custom development."
    }
  ];

  const useCases = [
    "Employee Onboarding", "Expense Management", "Inventory Tracking", "Customer Service Portal",
    "Field Service App", "Quality Control", "Project Management", "Asset Management",
    "Survey & Feedback", "Workflow Automation", "Reporting Dashboard", "Mobile Forms"
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
              Microsoft Power Apps
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Build custom business applications without code using Microsoft Power Platform
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful No-Code Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create professional business apps with drag-and-drop simplicity
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

      {/* App Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Power Apps
            </h2>
            <p className="text-xl text-gray-600">
              Choose the right app type for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {appTypes.map((type, index) => (
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
              Why Choose Power Apps?
            </h2>
            <p className="text-xl text-gray-600">
              Transform your business processes with rapid app development
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

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Use Cases
            </h2>
            <p className="text-xl text-gray-600">
              Power Apps can solve a wide variety of business challenges
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg text-center font-semibold text-gray-700 hover:bg-teal-100 transition">
                {useCase}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your First Power App?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's create custom business applications that solve your unique challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Start Building
            </Link>
            <Link 
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition"
            >
              View Examples
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
