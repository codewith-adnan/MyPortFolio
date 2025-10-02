import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { name: "Home", link: "home" },
  { name: "About", link: "about" },
  { name: "Resume", link: "resume" },
  { name: "Services", link: "services" },
  { name: "Skills", link: "skills" },
  { name: "Projects", link: "projects" },
  { name: "Contact", link: "contact" },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(navItems[0].link);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle navbar shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md" : "shadow-none"
      } bg-[#F8F7F1]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="home"
              smooth={true}
              duration={800}
              onClick={() => setActiveTab('home')} // Ensure home is active on logo click
              className="text-3xl  font-extrabold cursor-pointer"
            >
              <span className="text-gray-600">PORT</span>
              <span className="text-[#f05228]">FOLIO</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <li key={item.name} className="relative">
                  <Link
                    activeClass="nav-item-active" // Custom class for active link
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-80} 
                    duration={800}
                    onSetActive={() => setActiveTab(item.link)}
                    className="text-gray-600 hover:text-[#f05228] px-3 py-2 rounded-md text-md font-medium cursor-pointer transition-colors"
                  >
                    {item.name}
                  </Link>
                  {activeTab === item.link && (
                    <motion.div
                      className="absolute bottom-[-2px] left-0 right-0 h-[3px] bg-[#f05228]"
                      // Yahan animation change ki hai
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ originX: 0 }} // 
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-[#f05228] focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#F8F7F1] border-t border-gray-200">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={800}
                  onClick={() => {
                    setActiveTab(item.link);
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-600 hover:text-[#f05228] block px-3 py-3 rounded-md text-base font-medium cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}