"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = [
  {
    heading: "What We Do",
    items: [
      { title: "Web Development", href: "/services/web" },
      { title: "App Development", href: "/services/app" },
      { title: "Custom Software", href: "/services/software" },
      { title: "UI/UX Design", href: "/services/ui-ux" },
    ],
  },
  {
    heading: "Who We Help",
    items: [
      { title: "Travel & Hospitality", href: "/industry/travel" },
      { title: "Telecommunication", href: "/industry/telecom" },
      { title: "Healthcare", href: "/industry/healthcare" },
      { title: "Retail & CPG", href: "/industry/retail" },
    ],
  },
  {
    heading: "Company",
    items: [
      { title: "About Us", href: "/about" },
      { title: "Process", href: "/process" },
      { title: "Careers", href: "/careers" },
      { title: "Contact", href: "/contact" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="text-gray-500 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Logo + About */}
        <div>
          <Link href="/" className="text-2xl font-bold text-teal-500">
            manzio
          </Link>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Empowering businesses with digital transformation, emerging
            technologies, and innovative solutions.
          </p>
        </div>

        {/* Footer Links */}
        {footerLinks.map((section, i) => (
          <div key={i}>
            <h4 className="font-semibold text-white mb-4">
              {section.heading}
            </h4>
            <ul className="space-y-2">
              {section.items.map((item, j) => (
                <li key={j}>
                  <Link
                    href={item.href}
                    className="hover:text-teal-400 transition"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} manzio. All rights reserved.</p>

          {/* Socials */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-teal-400">
              <Facebook size={18} />
            </Link>
            <Link href="#" className="hover:text-teal-400">
              <Twitter size={18} />
            </Link>
            <Link href="#" className="hover:text-teal-400">
              <Linkedin size={18} />
            </Link>
            <Link href="#" className="hover:text-teal-400">
              <Instagram size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
