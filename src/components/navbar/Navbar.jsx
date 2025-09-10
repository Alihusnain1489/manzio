"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const links = [
  {
    id: 1,
    title: "What We Do",
    href: "#",
    dropdown: [
      {
        heading: "Digital Transformation",
        items: [
          { title: "Web Development", href: "/services/web" },
          { title: "App Development", href: "/services/app" },
          { title: "Custom Software Development", href: "/services/software" },
          { title: "UX/UI Design", href: "/services/ui-ux" },
        ],
      },
      {
        heading: "Business Applications",
        items: [
          { title: "Dynamics 365 ERP", href: "/services/erp" },
          { title: "Dynamics 365 CRM", href: "/services/crm" },
          { title: "Power Apps", href: "/services/powerapps" },
          { title: "Salesforce", href: "/services/salesforce" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Who We Help",
    href: "#",
    dropdown: [
      {
        heading: "Industries",
        items: [
          { title: "Travel & Hospitality", href: "/industry/travel" },
          { title: "Telecommunication", href: "/industry/telecom" },
          { title: "Healthcare", href: "/industry/healthcare" },
          { title: "Public Sector", href: "/industry/public" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Who We Are",
    href: "#",
    dropdown: [
      {
        heading: "Company",
        items: [
          { title: "Portfolio", href: "/portfolio" },
          { title: "Blog", href: "/blog" },
          { title: "Contact", href: "/contact" },
          { title: "Dashboard", href: "/dashboard" },
          { title: "About", href: "/about" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "How We Deliver",
    href: "/process",
  },
  {
    id: 5,
    title: "Join Manzio",
    href: "#",
    dropdown: [
      {
        heading: "Careers",
        items: [
          { title: "Explore Careers", href: "/careers" },
          { title: "Internships", href: "/careers/internships" },
        ],
      },
    ],
  },
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white shadow-md">
      <div
        ref={navRef}
        className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center text-2xl font-bold text-teal-600 space-x-2"
        >
          <img src="/Group.svg" alt="Logo Icon" className="h-8 w-8" />
          <span>Manzio</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 relative">
          {links.map((link) => (
            <div
              key={link.id}
              className="relative"
              onMouseEnter={() => setActiveDropdown(link.id)}
            >
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-teal-600 transition"
                onClick={() =>
                  setActiveDropdown(activeDropdown === link.id ? null : link.id)
                }
              >
                {link.title}
                {link.dropdown && <ChevronDown size={16} />}
              </button>

              {/* Dropdown */}
              {link.dropdown && activeDropdown === link.id && (
                <div className="absolute top-full left-0 mt-3 bg-white shadow-lg rounded-lg p-6 grid grid-cols-2 gap-8 w-[600px] z-20">
                  {link.dropdown.map((section, i) => (
                    <div key={i}>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        {section.heading}
                      </h4>
                      <ul className="space-y-2">
                        {section.items.map((item, j) => (
                          <li key={j}>
                            <Link
                              href={item.href}
                              className="text-gray-600 hover:text-teal-600 transition"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4">
          {links.map((link) => (
            <div key={link.id}>
              <button
                className="w-full flex justify-between items-center text-gray-700 font-medium"
                onClick={() =>
                  setActiveDropdown(activeDropdown === link.id ? null : link.id)
                }
              >
                {link.title}
                {link.dropdown && <ChevronDown size={16} />}
              </button>

              {/* Mobile Dropdown */}
              {link.dropdown && activeDropdown === link.id && (
                <div className="mt-2 pl-4 space-y-2">
                  {link.dropdown.map((section, i) => (
                    <div key={i}>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {section.heading}
                      </h4>
                      <ul className="space-y-2">
                        {section.items.map((item, j) => (
                          <li key={j}>
                            <Link
                              href={item.href}
                              className="block text-gray-600 hover:text-teal-600 transition"
                              onClick={() => {
                                setMobileOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
