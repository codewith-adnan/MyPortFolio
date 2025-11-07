import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa"; // Only FaTimes is needed now for the close icon

// Placeholder for HEADER_SCROLLED_BG_STYLE.
// You should define this object with your desired dark gradient for the mobile menu overlay.
const HEADER_SCROLLED_BG_STYLE = {
  background: 'linear-gradient(to bottom, #1A202C, #2D3748)', // Example dark gradient
  // Add other styles like opacity, etc., if needed
};

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Renamed for clarity
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed left-1/2 -translate-x-1/2 w-[90%] md:w-[85%] lg:w-[90%] top-2 z-50 transition-all duration-300 rounded-full
          ${isScrolled ? "shadow-md bg-white/80 backdrop-blur-sm" : "shadow-none"}
        `}
        style={{ 
          background: 'linear-gradient(to right, #faf7f7, #c1bcb5)', // Your gradient color
          backdropFilter: 'brightness(1.1) saturate(1.2)', // Added for glass shining effect
          // border: '1px solid rgba(255, 255, 255, 0.2)' // Optional: subtle border for glass effect
        }}
      >
        <div className="max-w-full mx-auto px-2 sm:px-4 lg:px-6"> 
          <div className="flex items-center justify-between h-14 md:h-16"> 
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                to="home"
                smooth={true}
                duration={800}
                onClick={() => setActiveTab('home')} 
                className="text-2xl md:text-3xl font-extrabold cursor-pointer" 
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
                      activeClass="nav-item-active" 
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-80} 
                      duration={800}
                      onSetActive={() => setActiveTab(item.link)}
                      className="text-gray-700 hover:text-[#f05228] px-3 py-2 rounded-md text-sm md:text-md font-medium cursor-pointer transition-colors" 
                    >
                      {item.name}
                    </Link>
                    {activeTab === item.link && (
                      <motion.div
                        className="absolute bottom-[-2px] left-0 right-0 h-[3px] bg-[#f05228]"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ originX: 0 }} 
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Hamburger Icon (Visible on small screens) */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMobileMenu} className="focus:outline-none">
                <svg
                  width="39"
                  height="24"
                  viewBox="0 0 39 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon h-4 w-auto"
                >
                  <path
                    d="M2 0.25C1.0335 0.25 0.25 1.0335 0.25 2C0.25 2.9665 1.0335 3.75 2 3.75V0.25ZM37 3.75C37.9665 3.75 38.75 2.9665 38.75 2C38.75 1.0335 37.9665 0.25 37 0.25V3.75ZM2 10.25C1.0335 10.25 0.25 11.0335 0.25 12C0.25 12.9665 1.0335 13.75 2 13.75V10.25ZM32 13.75C32.9665 13.75 33.75 12.9665 33.75 12C33.75 11.0335 32.9665 10.25 32 10.25V13.75ZM2 20.25C1.0335 20.25 0.25 21.0335 0.25 22C0.25 22.9665 1.0335 23.75 2 23.75V20.25ZM19.5 23.75C20.4665 23.75 21.25 22.9665 21.25 22C21.25 21.0335 20.4665 20.25 19.5 20.25V23.75Z"
                    fill={isMobileMenuOpen ? "#ff9633" : "#9CA3AF"} // First line: gray-400, on open: orange
                  ></path>
                  <path
                    d="M2 13.75H32V10.25H2V13.75Z"
                    fill="#ff9633" // Second line: orange
                  ></path>
                  <path
                    d="M2 23.75H19.5V20.25H2V23.75Z"
                    fill={isMobileMenuOpen ? "#ff9633" : "#9CA3AF"} // Third line: gray-400, on open: orange
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-[9999]                           /* Very high z-index */
          h-screen w-screen                               /* Explicitly full viewport */
          transform transition-transform duration-500 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        style={HEADER_SCROLLED_BG_STYLE} // Applying the dark gradient background
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMobileMenu} className="focus:outline-none text-white">
            <FaTimes size={30} />
          </button>
        </div>
        <ul className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
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
                  setIsMobileMenuOpen(false); // Close menu on link click
                }}
                className="text-white hover:text-[#f05228] block px-3 py-3 rounded-md text-base font-medium cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}