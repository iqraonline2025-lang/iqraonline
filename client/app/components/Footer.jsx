"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaWhatsapp 
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  // ✅ Add your real social links here
  const socialLinks = [
    {
      icon: FaFacebookF,
      url: "https://facebook.com/yourusername"
    },
    {
      icon: FaTwitter,
      url: "https://twitter.com/yourusername"
    },
    {
      icon: FaInstagram,
      url: "https://instagram.com/yourusername"
    },
    {
      icon: FaLinkedinIn,
      url: "https://linkedin.com/in/yourusername"
    }
  ];

  return (
    <footer className="bg-[#fcfaff] dark:bg-zinc-950 pt-16 pb-8 border-t border-purple-100 dark:border-zinc-800">
      <motion.div 
        className="max-w-7xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* 1. Logo + Description */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-black tracking-tighter text-zinc-900 dark:text-white">
              LOGO<span className="text-purple-600">.</span>
            </Link>
            <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
              Empowering your journey through sacred knowledge and modern technology. 
              Master the Qur'an and build the future of the web with us.
            </p>
            
            {/* ✅ Social Icons with real links */}
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, backgroundColor: "#7c3aed", color: "#fff" }}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-zinc-900 shadow-sm text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-zinc-800 transition-all"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-zinc-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-gray-400">
              <li><Link href="/" className="hover:text-purple-600 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-purple-600 transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-purple-600 transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-purple-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* 3. Services Links */}
          <div>
            <h4 className="font-bold mb-6 text-zinc-900 dark:text-white">Services</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-gray-400">
              <li><Link href="/classes" className="hover:text-purple-600 transition-colors">Qur’an Classes</Link></li>
              <li><Link href="/webdev" className="hover:text-purple-600 transition-colors">Web Development</Link></li>
              <li><Link href="#" className="hover:text-purple-600 transition-colors">UI/UX Design</Link></li>
              <li><Link href="#" className="hover:text-purple-600 transition-colors">SEO Optimization</Link></li>
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h4 className="font-bold mb-6 text-zinc-900 dark:text-white">Contact Info</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <span className="text-purple-600">Email:</span> iqraonline2025@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-600">Phone:</span> +44 7303 179101
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-600">Location:</span> 123 Tech Street
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-100 dark:border-zinc-800 text-center text-sm text-slate-500">
          <p>© {currentYear} <span className="text-purple-600 font-semibold">YourBrand</span>. All rights reserved.</p>
        </div>
      </motion.div>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/447303179101"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 bg-purple-600 text-white p-4 rounded-full shadow-[0_10px_25px_-5px_rgba(124,58,237,0.4)] flex items-center justify-center group"
      >
        <FaWhatsapp size={28} />
        <span className="absolute right-full mr-3 bg-zinc-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us!
        </span>
      </motion.a>
    </footer>
  );
};

export default Footer;