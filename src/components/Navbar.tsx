"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-golden-charcoal/95 backdrop-blur-sm shadow-md py-3" : "bg-golden-charcoal py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50">
          <span className="font-heading text-2xl font-bold text-golden-gold tracking-wider">
            GOLDEN
          </span>
          <span className="text-golden-sand font-medium hidden sm:inline-block">
            Interior Decors
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm tracking-wide transition-colors hover:text-golden-gold ${
                pathname === link.path ? "text-golden-gold font-semibold" : "text-golden-sand"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/917010788702"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-golden-gold text-golden-charcoal px-5 py-2 rounded-full font-medium hover:bg-yellow-500 transition-colors shadow-lg"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-golden-sand z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-golden-charcoal flex flex-col items-center justify-center gap-8 -z-10"
            >
              {links.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-2xl font-heading transition-colors ${
                    pathname === link.path ? "text-golden-gold" : "text-golden-sand"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://wa.me/917010788702"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-golden-gold text-golden-charcoal px-8 py-3 rounded-full font-medium text-lg shadow-lg"
              >
                Get a Quote
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
