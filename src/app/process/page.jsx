import { Search, Lightbulb, Code2, Rocket, CheckCircle, Users } from "lucide-react";
import Link from "next/link";

export default function Process() {
  const processSteps = [
    {
      step: "01",
      icon: <Search size={32} />,
      title: "Discovery & Research",
      description: "We begin by understanding your business goals, target audience, and technical requirements through comprehensive research and stakeholder interviews.",
      details: [
        "Business requirements analysis",
        "Technical feasibility assessment",
        "Market research and competitive analysis",
        "Stakeholder interviews and workshops"
      ]
    },
    {
      step: "02",
      icon: <Lightbulb size={32} />,
      title: "Strategy & Planning",
      description: "Our team develops a comprehensive project strategy, including architecture design, technology stack selection, and detailed project roadmap.",
      details: [
        "Project architecture design",
        "Technology stack selection",
        "Resource allocation and timeline",
        "Risk assessment and mitigation"
      ]
    },
    {
      step: "03",
      icon: <Code2 size={32} />,
      title: "Development & Implementation",
      description: "We follow agile development methodologies with regular sprints, continuous integration, and frequent client feedback sessions.",
      details: [
        "Agile development sprints",
        "Continuous integration and deployment",
        "Regular client demos and feedback",
        "Quality assurance and testing"
      ]
    },
    {
      step: "04",
      icon: <Rocket size={32} />,
      title: "Deployment & Launch",
      description: "We ensure smooth deployment with comprehensive testing, documentation, and knowledge transfer to your team.",
      details: [
        "Production deployment",
        "Performance optimization",
        "User training and documentation",
        "Go-live support and monitoring"
      ]
    },
    {
      step: "05",
      icon: <CheckCircle size={32} />,
      title: "Support & Maintenance",
      description: "We provide ongoing support, maintenance, and optimization to ensure your solution continues to meet your evolving business needs.",
      details: [
        "24/7 technical support",
        "Regular maintenance and updates",
        "Performance monitoring and optimization",
        "Feature enhancements and scaling"
      ]
    }
  ];

  const methodologies = [
    {
      title: "Agile Development",
      description: "We follow Agile methodologies with 2-week sprints, daily standups, and regular retrospectives to ensure continuous improvement.",
      features: ["Sprint Planning", "Daily Standups", "Sprint Reviews", "Retrospectives"]
    },
    {
      title: "DevOps Practices",
      description: "We implement DevOps practices for continuous integration, automated testing, and seamless deployment.",
      features: ["CI/CD Pipelines", "Automated Testing", "Infrastructure as Code", "Monitoring & Logging"]
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive testing at every stage ensures high-quality deliverables and optimal user experience.",
      features: ["Unit Testing", "Integration Testing", "User Acceptance Testing", "Performance Testing"]
    }
  ];

  const tools = [
    "Jira", "Confluence", "Git", "GitHub", "Docker", "Kubernetes", "Jenkins",
    "AWS", "Azure", "Google Cloud", "Slack", "Figma", "Postman", "Selenium"
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
              How We Deliver
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Our proven process ensures successful project delivery and client satisfaction
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach that ensures quality, transparency, and successful project delivery
            </p>
          </div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="bg-teal-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                      {step.step}
                    </div>
                    <div className="text-teal-600 mb-4 flex justify-center md:justify-start">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      {step.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Methodologies
            </h2>
            <p className="text-xl text-gray-600">
              Proven methodologies that ensure efficient and high-quality delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methodologies.map((methodology, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {methodology.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {methodology.description}
                </p>
                <div className="space-y-2">
                  {methodology.features.map((feature, featureIndex) => (
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

      {/* Tools Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tools & Technologies
            </h2>
            <p className="text-xl text-gray-600">
              Industry-standard tools and technologies for efficient project management and development
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center font-semibold text-gray-700 hover:bg-teal-100 transition shadow-sm">
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
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's discuss your requirements and create a solution that exceeds your expectations
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
