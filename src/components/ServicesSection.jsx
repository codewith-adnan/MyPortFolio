import React from "react";
import { motion } from "framer-motion"; // Framer Motion import kiya gaya hai
import {
  FaCrown,
  FaDatabase,
  FaCode,
  FaProjectDiagram,
  FaUsers,
  FaVideo,
} from "react-icons/fa";

const services = [
  { icon: <FaCrown className="text-4xl text-[#f05228]" />, title: "Web Design" },
  { icon: <FaDatabase className="text-4xl text-[#f05228]" />, title: "Database Management" },
  { icon: <FaCode className="text-4xl text-[#f05228]" />, title: "Web Developer" },
  { icon: <FaProjectDiagram className="text-4xl text-[#f05228]" />, title: "Codebase Structuring" },
  { icon: <FaUsers className="text-4xl text-[#f05228]" />, title: "Team Collaborator" },
  { icon: <FaVideo className="text-4xl text-[#f05228]" />, title: "Video Editing" },
];

// Animation variants for the container to orchestrate staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Har card ke beech ka delay
    },
  },
};

// Animation variants for each card (item)
const itemVariants = {
  hidden: { opacity: 0, x: 100 }, // Right se start hoga
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#F8F7F1] text-center py-20 px-6 overflow-hidden">
      {/* Title */}
      <div className="mb-12">
        {/* --- TITLE ANIMATED --- */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl font-bold font-figtree text-[#032737]"
        >
          <span className="text-gray-400">My</span>{' '}
          <span className="text-[#f05228]">Services</span>
        </motion.h2>

        {/* --- SUBTITLE ANIMATED --- */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gray-400 font-figtree mt-4 max-w-2xl mx-auto text-[18px]"
        >
          "I turn ideas into powerful, interactive web experiences—driven by
          creativity, code, and a passion for seamless design"
        </motion.p>
      </div>

      {/* --- SERVICES GRID ANIMATED --- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white rounded-xl p-8 shadow-lg flex flex-col items-center 
                       hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-figtree font-semibold text-[#032737]">
              {service.title}
            </h3>
            <span className="block w-10 h-[3px] bg-[#f05228] mt-3 rounded-md"></span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}