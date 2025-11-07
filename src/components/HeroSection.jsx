// src/components/HeroSection.jsx
import React, { useState } from "react";
import { 
  FaLinkedin, 
  FaWhatsapp, 
  FaPhoneAlt 
} from "react-icons/fa";
import { 
  FaRegClock, 
  FaTasks, 
  FaCheckCircle, 
  FaUsers, 
  FaStar, 
  FaBusinessTime 
} from "react-icons/fa";
import { motion } from "framer-motion";
import HeroImg from "../assets/main.png";

export default function HeroSection() {
  const phoneNumber = '03174103743'; 
  // No longer need tooltipText or handleCopy if direct call is preferred,
  // but keeping them for now in case you want to revert or use for other icons.
  const [tooltipText, setTooltipText] = useState('Click to copy'); 

  // Removed handleCopy function as we're now directly calling

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12  overflow-x-hidden"
         style={{ background: 'linear-gradient(to right, #faf7f7, #c1bcb5)' }}> 
      <div className="max-w-7xl w-full flex flex-col lg:grid lg:grid-cols-2 gap-12">
        
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-4xl mt-8 font-figtree font-bold text-[#032737] mb-4">
            Hey There,
          </h1>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-figtree text-[#032737] font-bold mb-6 flex flex-wrap items-center gap-3">
            I'm Muhammad Adnan
            <motion.span
              className="text-[#f05228]"
              animate={{ x: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              | Web Developer
            </motion.span>
          </h2>

          <p className="font-figtree text-[#032737] text-[18px] leading-relaxed mb-6 text-left">
            <span className="block">A passionate Web Developer with 01+ years</span>
            <span className="block">of experience building responsive, user-friendly websites</span>
            <span className="block">for clients worldwide.</span>
          </p>

          <p className="font-figtree text-[#032737] text-[20px] font-medium mb-6 flex flex-wrap gap-2 items-center">
            <span className="flex items-center gap-2">
              <FaStar className="text-yellow-500" /> Top Rated
            </span>
            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500 " /> 100% Job Success
            </span>
            <span className="flex items-center gap-2">
              <FaBusinessTime className="text-blue-500" /> Available 24/7
            </span>
          </p>

          <a href="#contact">
            <button className="bg-[#f05228] font-figtree text-white text-[20px] font-semibold px-4 py-2 rounded shadow-md border-2 border-transparent hover:bg-gray-800 transition duration-300 mt-[-10px]">
              Contact Me
            </button>
          </a>

          <div className="flex space-x-6 mt-4">
            {/* --- MODIFIED PHONE ICON LINK --- */}
            <a 
              href={`tel:${phoneNumber}`} // Changed to an <a> tag with tel:
              className="w-14 h-14 bg-white rounded-full shadow-md border-2 border-transparent hover:bg-[#f05228] transition duration-300 flex items-center justify-center group"
              // The tooltip functionality will no longer be relevant for direct call,
              // but you can keep the group class for hover effects.
            >
              <FaPhoneAlt className="text-2xl text-gray-700 group-hover:text-white transition duration-300" />
            </a>
            {/* --- TOOLTIP REMOVED (as it's a direct call now) --- */}
            {/* Keeping LinkedIn and WhatsApp as they were */}
            <a href="https://www.linkedin.com/in/muhammad-adnan-19ba34378" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white rounded-full shadow-md border-2 border-transparent hover:bg-[#f05228] transition duration-300 flex items-center justify-center group">
              <FaLinkedin className="text-2xl text-gray-700 group-hover:text-white transition duration-300" />
            </a>
            <a href="https://wa.me/923174103743" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white rounded-full shadow-md border-2 border-transparent hover:bg-green-500 transition duration-300 flex items-center justify-center group">
              <FaWhatsapp className="text-2xl text-gray-700 group-hover:text-white transition duration-300" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-6"
        >
          <div className="relative h-[300px] mt-10 md:h-[400px] lg:h-[600px] flex justify-center">
            <img
              src={HeroImg}
              alt="Muhammad Adnan"
              className="w-[280px] md:w-[350px] lg:w-[400px] object-cover transform scale-110"
            />
          </div>
        </motion.div>
      </div>

      {/* --- STATS SECTION ANIMATED --- */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-20"
      >
        <div className="bg-white rounded-xl px-6 py-6 shadow-lg flex items-center gap-4">
          <FaRegClock className="text-[#032737] text-4xl mb-5" />
          <div>
            <h3 className="font-figtree text-[#032737] text-3xl font-bold">01+</h3>
            <p className="font-figtree text-[#032737] text-sm font-semibold">
              Years of Experience
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl px-6 py-6 shadow-lg flex items-center gap-4">
          <FaTasks className="text-[#032737] text-4xl mb-5" />
          <div>
            <h3 className="font-figtree text-[#032737] text-3xl font-bold">09+</h3>
            <p className="font-figtree text-[#032737] text-sm font-semibold">
              Projects Completed
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl px-6 py-6 shadow-lg flex items-center gap-4">
          <FaCheckCircle className="text-[#032737] text-4xl mb-5" />
          <div>
            <h3 className="font-figtree text-[#032737] text-3xl font-bold">100%</h3>
            <p className="font-figtree text-[#032737] text-sm font-semibold">
              Job Success Rate
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl px-6 py-6 shadow-lg flex items-center  gap-4">
          <FaUsers className="text-[#032737] text-4xl mb-5" />
          <div>
            <h3 className="font-figtree text-[#032737] text-3xl font-bold">10+</h3>
            <p className="font-figtree text-[#032737] text-sm font-semibold">
              Happy Clients
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}