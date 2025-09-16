import Link from "next/link";
import { BarChart3, Code2, MonitorSmartphone, ShieldCheck, Users, Award, Globe, TrendingUp, CheckCircle, ArrowRight, Star, Quote } from "lucide-react";

export default function Home() {
  const services = [
    { title: "DATA ANALYTICS", href: "/services/data", icon: <BarChart3 size={28} /> },
    { title: "WEB DEVELOPMENT", href: "/services/web", icon: <Code2 size={28} /> },
    { title: "UI/UX DESIGN", href: "/services/ui-ux", icon: <MonitorSmartphone size={28} /> },
    { title: "QA & TESTING", href: "/services/qa", icon: <ShieldCheck size={28} /> },
    { title: "DEDICATED TEAM", href: "/services/team", icon: <Users size={28} /> },
  ];

  const features = [
    {
      icon: <Code2 size={32} />,
      title: "Custom Development",
      description: "Tailored software solutions built from scratch to meet your specific business requirements."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Enterprise Security",
      description: "Bank-level security with compliance standards and data protection protocols."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Scalable Solutions",
      description: "Future-proof applications that grow with your business and handle increasing demands."
    },
    {
      icon: <Globe size={32} />,
      title: "Global Reach",
      description: "Serving clients worldwide with 24/7 support and local expertise in multiple regions."
    }
  ];

  const achievements = [
    { number: "500+", label: "Successful Projects" },
    { number: "200+", label: "Happy Clients" },
    { number: "50+", label: "Team Members" },
    { number: "10+", label: "Years Experience" }
  ];

  const leaders = [
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

  const blogPosts = [
    {
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends in web development including AI integration, WebAssembly, and progressive web apps.",
      image: "/Hero.jpg",
      category: "Technology",
      date: "Jan 15, 2024",
      readTime: "5 min read"
    },
    {
      title: "Building Scalable Mobile Applications with React Native",
      excerpt: "Learn how to create high-performance mobile applications using React Native with best practices.",
      image: "/Hero2.jpg",
      category: "Development",
      date: "Jan 12, 2024",
      readTime: "8 min read"
    },
    {
      title: "Digital Transformation: A Guide for Small Businesses",
      excerpt: "Discover how small businesses can leverage digital transformation to improve efficiency and growth.",
      image: "/Hero.jpg",
      category: "Business",
      date: "Jan 10, 2024",
      readTime: "6 min read"
    }
  ];

  const testimonials = [
    {
      quote: "Manzio transformed our business with their innovative solutions. The team's expertise and dedication exceeded our expectations.",
      author: "John Smith",
      company: "TechCorp Inc.",
      rating: 5
    },
    {
      quote: "Outstanding service and support. They delivered our project on time and within budget, exceeding all our requirements.",
      author: "Maria Garcia",
      company: "HealthTech Solutions",
      rating: 5
    },
    {
      quote: "Professional team with deep technical knowledge. They helped us scale our platform to handle millions of users.",
      author: "Alex Thompson",
      company: "FinTech Startup",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center opacity-80"
        style={{
          backgroundImage: "url('/Hero2.jpg')",
        }}
      > 
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <p className="text-gray-200 text-lg mb-3">
            Expertise in web, mobile, and AI development services.
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-4xl">
            INNOVATIVE SOFTWARE SOLUTIONS FOR YOUR BUSINESS
          </h1>

          {/* Services Links */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 w-full max-w-5xl">
            {services.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="flex flex-col items-center justify-center p-6 bg-black/40 border border-gray-500 rounded-md text-white hover:bg-teal-600/80 transition"
              >
                {service.icon}
                <span className="mt-3 font-semibold">{service.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Manzio?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional results through innovation, expertise, and commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
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

      {/* Trust & Innovation Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pioneering Trust and Innovation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We take pride in empowering businesses worldwide with innovative solutions. 
              Manzio brings an unwavering commitment to excellence, backed by a global presence.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 text-lg">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="text-teal-600 mb-4" size={24} />
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaders Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Global Leadership
            </h2>
            <p className="text-xl text-gray-600">
              Meet the visionary leaders driving innovation and excellence at Manzio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-32 h-32 mx-auto mb-4 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${leader.image}')` }}
                ></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {leader.name}
                </h3>
                <p className="text-teal-600 font-medium mb-2">
                  {leader.role}
                </p>
                <p className="text-sm text-gray-600">
                  {leader.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Insights
            </h2>
            <p className="text-xl text-gray-600">
              Stories of our transformations across services and industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url('${post.image}')` }}
                ></div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link
                      href="/blog"
                      className="text-teal-600 hover:text-teal-700 font-semibold flex items-center gap-1"
                    >
                      Read More
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition inline-flex items-center gap-2"
            >
              View All Articles
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Connect with us to explore how we can deliver exceptional IT solutions tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Get in Touch
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
