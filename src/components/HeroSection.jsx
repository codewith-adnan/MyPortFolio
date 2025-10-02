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
import HeroImg from "../assets/Heroimg.jpeg";

export default function HeroSection() {
  const phoneNumber = '03174103743'; 
  const [tooltipText, setTooltipText] = useState('Click to copy');

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      setTooltipText('Copied!');
      setTimeout(() => {
        setTooltipText('Click to copy');
      }, 2000); 
    });
  };

  return (
    <div className="bg-[#F8F7F1] min-h-screen flex flex-col items-center justify-center px-4 py-12 mt-8 overflow-x-hidden"> {/* Added overflow-x-hidden */}
      <div className="max-w-7xl w-full flex flex-col lg:grid lg:grid-cols-2 gap-12">
        
        {/* --- LEFT COLUMN ANIMATED --- */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-4xl font-figtree font-bold text-[#032737] mb-4">
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
            <button className="bg-[#f05228] font-figtree text-white text-[20px] font-semibold px-6 py-3 rounded shadow-md border-2 border-transparent hover:bg-gray-800 transition duration-300 mt-[-10px]">
              Contact Me
            </button>
          </a>

          <div className="flex space-x-6 mt-6">
            <div className="relative group">
              <button
                onClick={handleCopy}
                className="w-14 h-14 bg-white rounded-full shadow-md border-2 border-transparent hover:bg-[#f05228] transition duration-300 flex items-center justify-center group"
              >
                <FaPhoneAlt className="text-2xl text-gray-700 group-hover:text-white transition duration-300" />
              </button>
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-700 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {tooltipText}
              </span>
            </div>
            <a href="https://www.linkedin.com/in/muhammad-adnan-19ba34378" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white rounded-full shadow-md border-2 border-transparent hover:bg-[#f05228] transition duration-300 flex items-center justify-center group">
              <FaLinkedin className="text-2xl text-gray-700 group-hover:text-white transition duration-300" />
            </a>
            <a href="https://wa.me/923174103743" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white rounded-full shadow-md border-2 border-transparent hover:bg-green-500 transition duration-300 flex items-center justify-center group">
              <FaWhatsapp className="text-2xl text-gray-700 group-hover:text-white transition duration-300" />
            </a>
          </div>
        </motion.div>

        {/* --- RIGHT COLUMN ANIMATED --- */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-6"
        >
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex justify-center">
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