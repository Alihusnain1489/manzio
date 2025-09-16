import { MapPin, Clock, Users, ArrowRight, CheckCircle, Heart } from "lucide-react";
import Link from "next/link";

export default function Careers() {
  const benefits = [
    {
      icon: <Heart size={24} />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs."
    },
    {
      icon: <Users size={24} />,
      title: "Work-Life Balance",
      description: "Flexible working hours, remote work options, and generous vacation time."
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Professional Development",
      description: "Learning budget, conference attendance, and career growth opportunities."
    }
  ];

  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      location: "Remote / New York",
      type: "Full-time",
      department: "Engineering",
      description: "We're looking for an experienced full-stack developer to join our growing team and work on exciting projects.",
      requirements: [
        "5+ years of experience in full-stack development",
        "Proficiency in React, Node.js, and modern JavaScript",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Strong problem-solving and communication skills"
      ],
      posted: "2 days ago"
    },
    {
      title: "UI/UX Designer",
      location: "San Francisco",
      type: "Full-time",
      department: "Design",
      description: "Join our design team to create beautiful, user-centered experiences for our clients.",
      requirements: [
        "3+ years of UI/UX design experience",
        "Proficiency in Figma, Sketch, and Adobe Creative Suite",
        "Strong portfolio showcasing user-centered design",
        "Experience with design systems and prototyping"
      ],
      posted: "1 week ago"
    },
    {
      title: "DevOps Engineer",
      location: "Remote / London",
      type: "Full-time",
      department: "Engineering",
      description: "Help us build and maintain our cloud infrastructure and deployment pipelines.",
      requirements: [
        "4+ years of DevOps experience",
        "Experience with Docker, Kubernetes, and CI/CD",
        "Knowledge of cloud platforms and infrastructure as code",
        "Strong scripting skills (Python, Bash, or similar)"
      ],
      posted: "3 days ago"
    },
    {
      title: "Project Manager",
      location: "New York",
      type: "Full-time",
      department: "Project Management",
      description: "Lead cross-functional teams to deliver successful software projects for our clients.",
      requirements: [
        "5+ years of project management experience",
        "Experience in software development projects",
        "Strong leadership and communication skills",
        "PMP or Agile certification preferred"
      ],
      posted: "5 days ago"
    },
    {
      title: "Data Scientist",
      location: "Remote / Singapore",
      type: "Full-time",
      department: "Data & Analytics",
      description: "Work with our data team to build machine learning models and analytics solutions.",
      requirements: [
        "3+ years of data science experience",
        "Proficiency in Python, R, and SQL",
        "Experience with machine learning frameworks",
        "Strong statistical and analytical skills"
      ],
      posted: "1 week ago"
    },
    {
      title: "Sales Engineer",
      location: "San Francisco",
      type: "Full-time",
      department: "Sales",
      description: "Help our sales team by providing technical expertise during client presentations and proposals.",
      requirements: [
        "3+ years of technical sales experience",
        "Strong technical background in software development",
        "Excellent presentation and communication skills",
        "Experience with enterprise software solutions"
      ],
      posted: "4 days ago"
    }
  ];

  const culture = [
    {
      title: "Innovation First",
      description: "We encourage experimentation and innovation. Every team member has the freedom to propose new ideas and technologies."
    },
    {
      title: "Collaborative Environment",
      description: "We believe in the power of teamwork. Our open culture promotes knowledge sharing and mutual support."
    },
    {
      title: "Continuous Learning",
      description: "We invest in our team's growth with learning budgets, conferences, and internal training programs."
    },
    {
      title: "Work-Life Balance",
      description: "We understand the importance of balance. Flexible hours and remote work options help our team thrive."
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
              Join Our Team
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Build the future of technology with a team that values innovation, collaboration, and growth
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600">
              We offer more than just a job - we offer a career with purpose and growth
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

      {/* Culture Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Culture
            </h2>
            <p className="text-xl text-gray-600">
              The values and principles that make Manzio a great place to work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {culture.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600">
              Find your next career opportunity with us
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={16} />
                        {position.type}
                      </span>
                      <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded-full text-xs">
                        {position.department}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="text-sm text-gray-500">Posted {position.posted}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">
                  {position.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {position.requirements.slice(0, 3).map((req, reqIndex) => (
                      <li key={reqIndex}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/careers/${position.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition flex items-center justify-center gap-2"
                  >
                    Apply Now
                    <ArrowRight size={16} />
                  </Link>
                  <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition">
                    View Details
                  </button>
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
            Don't See Your Perfect Role?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Send Your Resume
            </Link>
            <Link 
              href="/careers/internships"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition"
            >
              View Internships
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
