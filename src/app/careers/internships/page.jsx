import { GraduationCap, Users, Clock, ArrowRight, CheckCircle, BookOpen } from "lucide-react";
import Link from "next/link";

export default function Internships() {
  const internshipPrograms = [
    {
      title: "Software Development Internship",
      duration: "3-6 months",
      type: "Full-time / Part-time",
      description: "Work on real projects with our development team and gain hands-on experience with modern technologies.",
      skills: ["React", "Node.js", "JavaScript", "Git", "Agile"],
      requirements: [
        "Currently pursuing Computer Science or related degree",
        "Basic programming knowledge",
        "Eagerness to learn and grow",
        "Good communication skills"
      ]
    },
    {
      title: "UI/UX Design Internship",
      duration: "3-4 months",
      type: "Full-time",
      description: "Collaborate with our design team to create user-centered designs and learn industry best practices.",
      skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping", "Design Systems"],
      requirements: [
        "Currently pursuing Design or related degree",
        "Portfolio showcasing design work",
        "Understanding of design principles",
        "Creative problem-solving skills"
      ]
    },
    {
      title: "Data Science Internship",
      duration: "4-6 months",
      type: "Full-time",
      description: "Work with our data team to analyze data, build models, and create insights for our clients.",
      skills: ["Python", "R", "SQL", "Machine Learning", "Data Visualization"],
      requirements: [
        "Currently pursuing Data Science or related degree",
        "Basic knowledge of statistics and programming",
        "Analytical thinking skills",
        "Interest in data-driven decision making"
      ]
    },
    {
      title: "Marketing Internship",
      duration: "3-5 months",
      type: "Part-time",
      description: "Support our marketing team with content creation, social media management, and campaign execution.",
      skills: ["Content Writing", "Social Media", "SEO", "Analytics", "Campaign Management"],
      requirements: [
        "Currently pursuing Marketing or related degree",
        "Strong writing and communication skills",
        "Social media savvy",
        "Creative and analytical mindset"
      ]
    }
  ];

  const benefits = [
    {
      icon: <BookOpen size={24} />,
      title: "Mentorship Program",
      description: "Work closely with experienced professionals who will guide your learning and career development."
    },
    {
      icon: <Users size={24} />,
      title: "Real Project Experience",
      description: "Contribute to actual client projects and build a portfolio of real-world work."
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Career Development",
      description: "Access to training resources, workshops, and networking opportunities within the company."
    }
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Former Software Development Intern",
      current: "Full-Stack Developer at Manzio",
      quote: "My internship at Manzio was transformative. I worked on real projects, learned from amazing mentors, and got hired full-time. The experience was invaluable for my career growth.",
      image: "/Hero.jpg"
    },
    {
      name: "Maria Garcia",
      role: "Former UI/UX Design Intern",
      current: "Product Designer at Tech Startup",
      quote: "The design internship gave me hands-on experience with real clients and helped me build a strong portfolio. The mentorship and feedback I received were exceptional.",
      image: "/Hero2.jpg"
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
              Internship Programs
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Launch your career with hands-on experience and mentorship from industry experts
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Internship Program?
            </h2>
            <p className="text-xl text-gray-600">
              Gain valuable experience while working on real projects with industry professionals
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

      {/* Internship Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Internship Programs
            </h2>
            <p className="text-xl text-gray-600">
              Choose the program that aligns with your interests and career goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {internshipPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="text-teal-600" size={24} />
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {program.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    {program.duration}
                  </span>
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full">
                    {program.type}
                  </span>
                </div>

                <p className="text-gray-600 mb-6">
                  {program.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Skills You'll Learn:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {program.requirements.map((req, reqIndex) => (
                      <li key={reqIndex}>{req}</li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/careers/internships/${program.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-700 transition flex items-center justify-center gap-2"
                >
                  Apply Now
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Interns Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from former interns about their experience at Manzio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  <div 
                    className="w-16 h-16 rounded-full bg-cover bg-center mr-4"
                    style={{ backgroundImage: `url('${testimonial.image}')` }}
                  ></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-teal-600">{testimonial.current}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Apply
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to start your internship journey with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Choose Program</h3>
              <p className="text-gray-600">Select the internship program that matches your interests and career goals.</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Submit Application</h3>
              <p className="text-gray-600">Fill out our application form and upload your resume and portfolio.</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Interview Process</h3>
              <p className="text-gray-600">Participate in a friendly interview to discuss your goals and interests.</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Start Your Journey</h3>
              <p className="text-gray-600">Begin your internship and start building your career with us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Internship?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Join our team of talented interns and gain valuable experience in the tech industry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Apply Now
            </Link>
            <Link 
              href="/careers"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition"
            >
              View Full-Time Positions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
