import { Users, Target, Award, Globe, Heart, Zap } from "lucide-react";
import Link from "next/link";

export default function About() {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "200+", label: "Happy Clients" },
    { number: "50+", label: "Team Members" },
    { number: "10+", label: "Years Experience" }
  ];

  const values = [
    {
      icon: <Heart size={32} />,
      title: "Client-Centric Approach",
      description: "We prioritize our clients' success and build long-term partnerships based on trust and mutual growth."
    },
    {
      icon: <Zap size={32} />,
      title: "Innovation & Excellence",
      description: "We continuously embrace new technologies and methodologies to deliver cutting-edge solutions."
    },
    {
      icon: <Users size={32} />,
      title: "Collaborative Teamwork",
      description: "We believe in the power of collaboration and work closely with our clients throughout the development process."
    },
    {
      icon: <Award size={32} />,
      title: "Quality & Reliability",
      description: "We maintain the highest standards of quality and reliability in every project we undertake."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/Hero.jpg",
      description: "15+ years in software development and business strategy"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "/Hero2.jpg",
      description: "Expert in cloud architecture and scalable systems"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image: "/Hero.jpg",
      description: "Award-winning UI/UX designer with 10+ years experience"
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      image: "/Hero2.jpg",
      description: "Full-stack developer specializing in modern web technologies"
    }
  ];

  const timeline = [
    {
      year: "2014",
      title: "Company Founded",
      description: "Manzio was established with a vision to transform businesses through innovative technology solutions."
    },
    {
      year: "2016",
      title: "First Major Client",
      description: "Secured our first enterprise client and expanded our team to 15 members."
    },
    {
      year: "2018",
      title: "Cloud Migration Expertise",
      description: "Developed expertise in cloud migration and became a certified AWS partner."
    },
    {
      year: "2020",
      title: "Remote Work Transition",
      description: "Successfully transitioned to remote work while maintaining productivity and client satisfaction."
    },
    {
      year: "2022",
      title: "AI & ML Integration",
      description: "Expanded our capabilities to include AI and machine learning solutions."
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Opened offices in multiple countries and served clients across different continents."
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
              About Manzio
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Empowering businesses through innovative technology solutions since 2014
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and success in the digital age.
              </p>
              <p className="text-lg text-gray-600">
                We believe that technology should be an enabler, not a barrier. Our mission is to 
                make cutting-edge technology accessible and beneficial for businesses of all sizes, 
                helping them achieve their goals and stay competitive in today's fast-paced world.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Why Choose Manzio?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  Proven track record with 500+ successful projects
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  Expert team with diverse technical skills
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  Client-focused approach with long-term partnerships
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  Cutting-edge technologies and methodologies
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  Global presence with local expertise
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-teal-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The talented individuals who make Manzio successful
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url('${member.image}')` }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-teal-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our company's growth and evolution
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold">
                    {event.year}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600">
                    {event.description}
                  </p>
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
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's discuss how we can help transform your business with innovative technology solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Get In Touch
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