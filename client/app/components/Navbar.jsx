"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX, HiChevronDown } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    subLinks: [
      { name: "Qur’an Classes", href: "/classes", desc: "Learn Tajweed & Hifz" },
      { name: "Web Development", href: "/webdev", desc: "Modern Digital Solutions" },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappNumber = "+447303179101"; 
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello! I'm interested in your services.`;

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md border-b border-violet-100 py-3 shadow-sm shadow-violet-200/20" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* LOGO SECTION */}
          <Link href="/" className="flex items-center gap-3 group relative z-[110]">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/img/logo.jpeg" // Path to your logo
                alt="IQL Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900">
              IQL<span className="text-violet-600">.</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.subLinks ? (
                  <div className="flex items-center space-x-1 py-2">
                    <Link
                      href={link.href}
                      className={`relative z-[110] text-sm font-semibold transition-colors ${
                        pathname === link.href ? "text-violet-600" : "text-slate-600 hover:text-violet-600"
                      }`}
                    >
                      {link.name}
                    </Link>
                    <HiChevronDown className="group-hover:rotate-180 transition-transform duration-300 text-slate-400 group-hover:text-violet-600 pointer-events-none" />
                    <div className="absolute top-full left-0 pt-4 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[105]">
                      <div className="bg-white border border-violet-50 shadow-xl shadow-violet-500/10 rounded-2xl p-4 w-64">
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block p-3 rounded-xl hover:bg-violet-50 transition-colors group/sub"
                          >
                            <p className="text-sm font-bold text-slate-800 group-hover/sub:text-violet-600">{sub.name}</p>
                            <p className="text-xs text-slate-500">{sub.desc}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`relative text-sm font-semibold transition-colors py-2 group ${
                      pathname === link.href ? "text-violet-600" : "text-slate-600 hover:text-violet-600"
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className={`absolute bottom-0 left-0 h-[2px] bg-violet-500 transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="flex items-center space-x-4 relative z-[110]">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center space-x-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-green-200 transition-all active:scale-95 group"
            >
              <FaWhatsapp className="text-xl group-hover:rotate-12 transition-transform" />
              <span>Contact Us</span>
            </a>
            
            <button className="lg:hidden text-3xl text-slate-900" onClick={() => setMobileMenuOpen(true)}>
              <HiMenuAlt3 />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[200] flex flex-col p-8 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8">
                   <Image src="/img/logo.png" alt="Logo" fill className="object-contain" />
                </div>
                <span className="text-2xl font-black tracking-tighter">IQL<span className="text-violet-600">.</span></span>
              </div>
              <button className="text-4xl" onClick={() => setMobileMenuOpen(false)}><HiX /></button>
            </div>

            <div className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col space-y-4">
                  {link.subLinks ? (
                    <>
                      <Link 
                        href={link.href} 
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-sm font-black uppercase tracking-widest text-violet-600"
                      >
                        {link.name} →
                      </Link>
                      {link.subLinks.map((sub) => (
                        <Link 
                          key={sub.name} 
                          href={sub.href} 
                          onClick={() => setMobileMenuOpen(false)} 
                          className="text-3xl font-bold text-slate-800 active:text-violet-600"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link 
                      href={link.href} 
                      onClick={() => setMobileMenuOpen(false)} 
                      className={`text-4xl font-black ${pathname === link.href ? "text-violet-600" : "text-slate-900"}`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-auto pt-12">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white py-4 rounded-2xl text-lg font-bold shadow-xl shadow-green-100 flex items-center justify-center space-x-3"
              >
                <FaWhatsapp className="text-2xl" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}