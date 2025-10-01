// src/components/HeroSection.jsx
import React from "react";
import { FaInstagram, FaTiktok, FaLinkedin, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaRegClock, FaTasks, FaCheckCircle, FaUsers, FaStar, FaBusinessTime } from "react-icons/fa";
import { motion } from "framer-motion";
import HeroImg from "../assets/Heroimg.jpeg";

export default function HeroSection() {
  return (
    <div className="bg-[#F8F7F1] min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-7xl w-full flex flex-col lg:grid lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <div>
          <h1 className="text-3xl md:text-4xl font-figtree font-bold text-[#032737] mb-4">
            Hey There,
          </h1>

          {/* Name + Web Developer with animation */}
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

          {/* Top Rated / Success / Availability */}
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

          {/* Contact Button */}
          <a href="#contact">
            <button className="bg-[#f05228] font-figtree text-white text-[20px] font-semibold px-6 py-3 rounded shadow-md border-2 border-transparent hover:bg-gray-400   transition duration-300 mb-6">
              Contact Me
            </button>
          </a>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-6">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/salal.zahid"
              target="_blank"
              rel="noreferrer"
              className="bg-white p-4 rounded-full shadow-md border-2 border-transparent hover:bg-[#f05228] transition duration-300"
            >
              <FaFacebookF className="text-3xl text-gray-700 hover:text-white transition duration-300" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/muhammad-adnan-19ba34378"
              target="_blank"
              rel="noreferrer"
              className="bg-white p-4 rounded-full shadow-md border-2 border-transparent hover:bg-[#f05228] transition duration-300"
            >
              <FaLinkedin className="text-3xl text-gray-700 hover:text-white transition duration-300" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/923174103743"
              target="_blank"
              rel="noreferrer"
              className="bg-white p-4 rounded-full shadow-md border-2 border-transparent hover:bg-green-500 transition duration-300"
            >
              <FaWhatsapp className="text-3xl text-gray-700 hover:text-white transition duration-300" />
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex justify-center">
            <img
              src={HeroImg}
              alt="Muhammad Adnan"
              className="w-[280px] md:w-[350px] lg:w-[400px] object-cover transform scale-110"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-20">
        {/* Experience */}
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

        {/* Success Rate */}
        <div className="bg-white rounded-xl px-6 py-6 shadow-lg flex items-center gap-4">
          <FaCheckCircle className="text-[#032737] text-4xl mb-5" />
          <div>
            <h3 className="font-figtree text-[#032737] text-3xl font-bold">100%</h3>
            <p className="font-figtree text-[#032737] text-sm font-semibold">
              Job Success Rate
            </p>
          </div>
        </div>

        {/* Clients */}
        <div className="bg-white rounded-xl px-6 py-6 shadow-lg flex items-center  gap-4">
          <FaUsers className="text-[#032737] text-4xl mb-5" />
          <div>
            <h3 className="font-figtree text-[#032737] text-3xl font-bold">10+</h3>
            <p className="font-figtree text-[#032737] text-sm font-semibold">
              Happy Clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
