// app/blog/[id]/page.js
import { notFound } from "next/navigation";

const posts = [
  {
    id: "1",
    title: "Building Modern Web Apps with Next.js",
    description:
      "Learn how Next.js simplifies web development with server-side rendering, static site generation, and powerful APIs.",
    image: "/Hero.jpg",
    author: "Ali Khan",
    date: "Sep 1, 2025",
    content: `
      Next.js is a powerful React framework that provides features like server-side rendering (SSR), static site generation (SSG), API routes, and more.
      It helps developers build modern, scalable, and SEO-friendly web applications faster.
      In this post, we explore the key features and why it’s becoming the go-to choice for web development.
    `,
  },
  {
    id: "2",
    title: "Why Tailwind CSS is a Game Changer",
    description:
      "Discover how Tailwind CSS helps developers build beautiful, responsive designs quickly without leaving HTML.",
    image: "/Hero2.jpg",
    author: "Sara Ahmed",
    date: "Aug 25, 2025",
    content: `
      Tailwind CSS offers a utility-first approach to styling that makes it easy to create custom designs without writing much CSS.
      It promotes consistency, responsiveness, and faster development workflows.
      In this article, we’ll cover why Tailwind is gaining so much popularity.
    `,
  },
  {
    id: "3",
    title: "JavaScript Best Practices in 2025",
    description:
      "From ESNext features to clean coding standards, explore the essential JavaScript practices you need this year.",
    image: "/Hero.jpg",
    author: "John Doe",
    date: "Aug 10, 2025",
    content: `
      JavaScript continues to evolve with new features and best practices every year.
      Writing clean, maintainable, and efficient code is essential for modern web development.
      This post covers the must-know practices for developers in 2025.
    `,
  },
];

export default function BlogPost({ params }) {
  const post = posts.find((p) => p.id === params.id);

  if (!post) {
    return notFound();
  }

  return (
    <article className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Hero Image */}
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-80 object-cover rounded-2xl shadow-md mb-8"
        />

        {/* Post Info */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-6">
          {post.date} • {post.author}
        </p>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-6">{post.description}</p>

        {/* Full Content */}
        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
          {post.content}
        </div>
      </div>
    </article>
  );
}
