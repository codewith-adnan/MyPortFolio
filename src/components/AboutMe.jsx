import React from "react";
import { motion } from "framer-motion";
import ProfileImg from "../assets/about.png";

export default function AboutMe() {
  return (
    <section id="about" className="bg-white py-20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        
        {/* --- CONTENT COLUMN ANIMATED (now on the left) --- */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="md:w-2/3 w-full text-center md:text-left" // Align text left on desktop
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gray-600">About </span><span className="text-[#f05228]">Me</span>
          </h2>
          <p className="text-gray-600 mb-6 text-justify leading-relaxed">
            I'm a creative and detail-focused Frontend Developer, passionate about crafting responsive and engaging user interfaces. I love bringing designs to life with clean code and modern web technologies.
            Results-driven React.js Developer with 1 year of experience in real-time, production-level projects, including a University Management System (UMS). Skilled in UI development, API integration, and code optimization with a strong focus on performance and scalability.
            Currently enhancing expertise in Next.js, Vue.js, and Angular to broaden front-end capabilities and deliver modern, high-quality web solutions. My portfolio includes multiple projects like a Car Rental platform, Courier Delivery services, a Real Task Admin Panel, a "We Are Together" webpage for business advertisement, RP Solutions for businesses, and numerous portfolios for local and foreign clients.
          </p>

          <p className="text-lg font-semibold mb-8">
            <span className="text-[#f05228] text-2xl font-bold">09+ </span>
            <span className="text-gray-800">Projects Completed</span>
          </p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start" // Center on mobile, left on desktop
          >
            <a
              href="/Muhhamad Adnan.pdf"
              download
              className="inline-block bg-[#f05228] text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition-all duration-300"
            >
              DOWNLOAD CV
            </a>
          </motion.div>
        </motion.div>

        {/* --- IMAGE COLUMN ANIMATED (now on the right) --- */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="md:w-1/3 w-full flex justify-center order-first md:order-last" // order-first for mobile, order-last for desktop
        >
          <img
            src={ProfileImg}
            alt="Muhammad Adnan"
            className="rounded-lg shadow-lg w-68 h-68 md:w-80 md:h-80 object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}