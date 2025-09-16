"use client";

import { Calendar, User, ArrowRight, Search, Filter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "technology", name: "Technology" },
    { id: "development", name: "Development" },
    { id: "business", name: "Business" },
    { id: "design", name: "Design" },
    { id: "tutorials", name: "Tutorials" }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends in web development including AI integration, WebAssembly, and progressive web apps that are shaping the future of the web.",
      content: "Web development is evolving rapidly, and 2024 promises to bring exciting new technologies and methodologies...",
      image: "/Hero.jpg",
      category: "technology",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      tags: ["Web Development", "AI", "Trends", "Technology"]
    },
    {
      id: 2,
      title: "Building Scalable Mobile Applications with React Native",
      excerpt: "Learn how to create high-performance mobile applications using React Native with best practices for scalability and maintainability.",
      content: "React Native has become one of the most popular frameworks for mobile development...",
      image: "/Hero2.jpg",
      category: "development",
      author: "Michael Chen",
      date: "2024-01-12",
      readTime: "8 min read",
      tags: ["React Native", "Mobile Development", "Scalability", "Best Practices"]
    },
    {
      id: 3,
      title: "Digital Transformation: A Guide for Small Businesses",
      excerpt: "Discover how small businesses can leverage digital transformation to improve efficiency, reach new customers, and stay competitive.",
      content: "Digital transformation is no longer just for large enterprises. Small businesses can also benefit...",
      image: "/Hero.jpg",
      category: "business",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      readTime: "6 min read",
      tags: ["Digital Transformation", "Small Business", "Efficiency", "Growth"]
    },
    {
      id: 4,
      title: "UI/UX Design Principles for Better User Experience",
      excerpt: "Master the essential UI/UX design principles that create intuitive, accessible, and engaging user experiences across all platforms.",
      content: "Great user experience starts with understanding your users and their needs...",
      image: "/Hero2.jpg",
      category: "design",
      author: "David Kim",
      date: "2024-01-08",
      readTime: "7 min read",
      tags: ["UI/UX", "Design Principles", "User Experience", "Accessibility"]
    },
    {
      id: 5,
      title: "Getting Started with Cloud Computing: AWS vs Azure vs Google Cloud",
      excerpt: "Compare the top cloud platforms and learn how to choose the right one for your project needs and budget.",
      content: "Cloud computing has revolutionized how businesses deploy and manage their applications...",
      image: "/Hero.jpg",
      category: "tutorials",
      author: "Alex Thompson",
      date: "2024-01-05",
      readTime: "10 min read",
      tags: ["Cloud Computing", "AWS", "Azure", "Google Cloud", "Tutorial"]
    },
    {
      id: 6,
      title: "The Role of AI in Modern Software Development",
      excerpt: "Explore how artificial intelligence is transforming software development processes and enabling new possibilities.",
      content: "Artificial intelligence is no longer a futuristic concept but a present reality...",
      image: "/Hero2.jpg",
      category: "technology",
      author: "Lisa Wang",
      date: "2024-01-03",
      readTime: "9 min read",
      tags: ["AI", "Software Development", "Machine Learning", "Automation"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              Our Blog
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Insights, tutorials, and industry trends from our team of experts
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    selectedCategory === category.id
                      ? "bg-teal-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Article
            </h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div 
                  className="h-64 lg:h-full bg-cover bg-center"
                  style={{ backgroundImage: "url('/Hero2.jpg')" }}
                ></div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Technology
                    </span>
                    <span className="text-gray-500 text-sm">5 min read</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    The Future of Web Development: Trends to Watch in 2024
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Explore the latest trends in web development including AI integration, WebAssembly, 
                    and progressive web apps that are shaping the future of the web.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-semibold">
                        SJ
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Sarah Johnson</p>
                        <p className="text-sm text-gray-500">Jan 15, 2024</p>
                      </div>
                    </div>
                    <Link
                      href="/blog/the-future-of-web-development"
                      className="bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition flex items-center gap-2"
                    >
                      Read More
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url('${post.image}')` }}
                ></div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-teal-600 hover:text-teal-700 font-semibold flex items-center gap-1"
                    >
                      Read More
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Subscribe to our newsletter for the latest insights and industry trends
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}