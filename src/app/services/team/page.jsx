import { Users, Code2, BarChart3, Shield, Zap, Target } from "lucide-react";
import Link from "next/link";

export default function DedicatedTeam() {
  const teamTypes = [
    {
      icon: <Code2 size={32} />,
      title: "Development Teams",
      description: "Dedicated developers, architects, and technical leads for your projects."
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Data & Analytics Teams",
      description: "Data scientists, analysts, and engineers for your analytics initiatives."
    },
    {
      icon: <Shield size={32} />,
      title: "QA & Testing Teams",
      description: "Quality assurance engineers and testing specialists for software validation."
    },
    {
      icon: <Users size={32} />,
      title: "DevOps Teams",
      description: "DevOps engineers and cloud specialists for infrastructure and deployment."
    }
  ];

  const benefits = [
    {
      icon: <Target size={24} />,
      title: "Focused Expertise",
      description: "Dedicated teams with deep expertise in specific technologies and domains."
    },
    {
      icon: <Zap size={24} />,
      title: "Faster Delivery",
      description: "Accelerated development with dedicated resources and streamlined communication."
    },
    {
      icon: <Shield size={24} />,
      title: "Cost Effective",
      description: "Reduce overhead costs while maintaining high-quality development standards."
    }
  ];

  const roles = [
    "Project Manager", "Technical Lead", "Senior Developer", "Frontend Developer", "Backend Developer",
    "Full-Stack Developer", "DevOps Engineer", "QA Engineer", "UI/UX Designer", "Data Scientist",
    "Business Analyst", "Solution Architect", "Scrum Master", "Product Owner"
  ];

  const engagementModels = [
    {
      title: "Dedicated Team",
      description: "Exclusive team working solely on your projects with full-time commitment.",
      features: ["Full-time Dedication", "Long-term Partnership", "Scalable Team Size", "Direct Communication"]
    },
    {
      title: "Extended Team",
      description: "Augment your existing team with additional resources and expertise.",
      features: ["Team Augmentation", "Knowledge Transfer", "Flexible Duration", "Seamless Integration"]
    },
    {
      title: "Project-based Team",
      description: "Specialized team for specific projects with defined scope and timeline.",
      features: ["Project Focus", "Fixed Timeline", "Clear Deliverables", "Milestone-based Payment"]
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
              Dedicated Team
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Scale your development capacity with dedicated teams of expert professionals
            </p>
          </div>
        </div>
      </section>

      {/* Team Types Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Dedicated Teams
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized teams tailored to your specific project needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-teal-600 mb-4 flex justify-center">
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Engagement Models
            </h2>
            <p className="text-xl text-gray-600">
              Flexible engagement models to suit your business requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {model.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {model.description}
                </p>
                <div className="space-y-2">
                  {model.features.map((feature, featureIndex) => (
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
              Why Choose Our Dedicated Teams?
            </h2>
            <p className="text-xl text-gray-600">
              Proven benefits that accelerate your development and reduce costs
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

      {/* Roles Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Roles
            </h2>
            <p className="text-xl text-gray-600">
              Expert professionals across all development disciplines
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {roles.map((role, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg text-center font-semibold text-gray-700 hover:bg-teal-100 transition">
                {role}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Scale Your Development Team?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's build a dedicated team that accelerates your project delivery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Build Your Team
            </Link>
            <Link 
              href="/careers"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
