import { Heart, Shield, Users, BarChart3, Zap, Target } from "lucide-react";
import Link from "next/link";

export default function Healthcare() {
  const solutions = [
    {
      icon: <Heart size={32} />,
      title: "Electronic Health Records",
      description: "Comprehensive EHR systems with patient data management and clinical decision support."
    },
    {
      icon: <Shield size={32} />,
      title: "HIPAA Compliance Solutions",
      description: "Secure, compliant healthcare applications with advanced data protection and privacy controls."
    },
    {
      icon: <Users size={32} />,
      title: "Telemedicine Platforms",
      description: "Complete telemedicine solutions with video consultations and remote patient monitoring."
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Healthcare Analytics",
      description: "Advanced analytics and reporting solutions for population health and clinical outcomes."
    }
  ];

  const services = [
    {
      title: "Patient Management Systems",
      description: "Comprehensive patient management with appointment scheduling, medical records, and billing integration.",
      features: ["Patient Portals", "Appointment Scheduling", "Medical Records", "Billing Integration"]
    },
    {
      title: "Clinical Decision Support",
      description: "AI-powered clinical decision support systems to improve diagnosis and treatment outcomes.",
      features: ["Clinical Guidelines", "Drug Interaction Checks", "Diagnostic Support", "Treatment Recommendations"]
    },
    {
      title: "Remote Patient Monitoring",
      description: "IoT-based remote monitoring solutions for chronic disease management and preventive care.",
      features: ["Vital Signs Monitoring", "Medication Adherence", "Alert Systems", "Data Analytics"]
    },
    {
      title: "Healthcare Mobile Apps",
      description: "Patient and provider mobile applications for improved healthcare delivery and engagement.",
      features: ["Patient Apps", "Provider Apps", "Wearable Integration", "Push Notifications"]
    }
  ];

  const technologies = [
    "HL7 FHIR", "DICOM", "HIPAA", "AWS", "Azure", "Docker", "Kubernetes",
    "Machine Learning", "IoT", "Blockchain", "API Integration"
  ];

  const benefits = [
    {
      icon: <Target size={24} />,
      title: "Improved Patient Outcomes",
      description: "Enhance patient care with data-driven insights and clinical decision support."
    },
    {
      icon: <Zap size={24} />,
      title: "Operational Efficiency",
      description: "Streamline healthcare operations with automated processes and integrated workflows."
    },
    {
      icon: <Shield size={24} />,
      title: "Compliance & Security",
      description: "Ensure HIPAA compliance and data security with enterprise-grade solutions."
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
              Healthcare
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Transform healthcare delivery with innovative technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Healthcare-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized technology solutions for the healthcare industry
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
              Our Healthcare Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive technology solutions for modern healthcare delivery
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
              Healthcare Technologies
            </h2>
            <p className="text-xl text-gray-600">
              Specialized technologies for healthcare applications
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Healthcare Solutions?
            </h2>
            <p className="text-xl text-gray-600">
              Proven benefits that improve healthcare delivery and patient outcomes
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
            Ready to Transform Healthcare Delivery?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's create technology solutions that improve patient care and operational efficiency
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
