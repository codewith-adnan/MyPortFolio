import React from "react";
import { motion } from "framer-motion"; // Framer Motion import kiya gaya hai
import ProfileImg from "../assets/Heroimg.jpeg";

export default function AboutMe() {
  return (
    // Background color theek hai, text colors ko neeche adjust kiya gaya hai
    <section id="about" className="bg-white py-20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        
        {/* --- IMAGE COLUMN ANIMATED --- */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="md:w-1/3 w-full flex justify-center"
        >
          <img
            src={ProfileImg}
            alt="Muhammad Adnan"
            className="rounded-lg shadow-lg w-64 h-64 md:w-80 md:h-80 object-cover"
          />
        </motion.div>

        {/* --- CONTENT COLUMN ANIMATED --- */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="md:w-2/3 w-full"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gray-600">About </span><span className="text-[#f05228]">Me</span>
          </h2>
          {/* Text color theek kiya gaya hai */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            I'm a creative and detail-focused Frontend Developer, passionate about crafting responsive and engaging user interfaces. I love bringing designs to life with clean code and modern web technologies.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
            <div>
              <strong className="block text-gray-800">Name:</strong>
              <span className="text-gray-600">Muhammad Adnan</span>
            </div>
            <div>
              <strong className="block text-gray-800">Date of birth:</strong>
              <span className="text-gray-600">January 07, 2002</span>
            </div>
            <div>
              <strong className="block text-gray-800">Address:</strong>
              <span className="text-gray-600">Rahim Yar Khan, Punjab</span>
            </div>
            <div>
              <strong className="block text-gray-800">Zip code:</strong>
              <span className="text-gray-600">64200</span>
            </div>
            <div>
              <strong className="block text-gray-800">Email:</strong>
              <span className="text-gray-600">sendtomadnan@gmail.com</span>
            </div>
            <div>
              <strong className="block text-gray-800">Phone:</strong>
              <span className="text-gray-600">03174103743</span>
            </div>
          </div>

          <p className="text-lg font-semibold mb-8">
            <span className="text-[#f05228] text-2xl font-bold">09+ </span>
            <span className="text-gray-800">Projects Completed</span>
          </p>

          {/* --- CV BUTTON ANIMATED --- */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <a
              href="/Muhhamad Adnan.pdf" // Path theek kiya gaya hai (assume file is in public folder)
              download
              className="inline-block bg-[#f05228] text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition-all duration-300"
            >
              DOWNLOAD CV
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}