import Link from "next/link";
import { BarChart3, Code2, MonitorSmartphone, ShieldCheck, Users } from "lucide-react";

export default function Home() {
  const services = [
    { title: "DATA ANALYTICS", href: "/services/data", icon: <BarChart3 size={28} /> },
    { title: "WEB DEVELOPMENT", href: "/services/web", icon: <Code2 size={28} /> },
    { title: "UI/UX DESIGN", href: "/services/ui-ux", icon: <MonitorSmartphone size={28} /> },
    { title: "QA & TESTING", href: "/services/qa", icon: <ShieldCheck size={28} /> },
    { title: "DEDICATED TEAM", href: "/services/team", icon: <Users size={28} /> },
  ];

  return (
    <section
      className="relative h-screen bg-cover bg-center opacity-80"
      style={{
        backgroundImage: "url('/Hero2.jpg')", // make sure Hero.jpg is in /public/
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
  );
}
