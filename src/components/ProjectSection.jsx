// src/components/ProjectSection.jsx
import React from "react";
import { motion } from "framer-motion"; // Framer Motion import kiya gaya hai
import { FaCheckCircle, FaClock, FaBolt, FaSync } from "react-icons/fa";
import Img1 from "../assets/carrent.PNG";
import Img2 from "../assets/giftcarsite.PNG";
import Img3 from "../assets/delivery.PNG";
import Img4 from "../assets/realtask.PNG";
import Img5 from "../assets/Capture.PNG"; 

const projects = [
  {
    id: 1,
    title: "Car Rental System",
    description: "Complete car rental booking platform built with React & Styled Components.",
    image: Img1,
    link: "https://carrental5.netlify.app/",
    status: { text: "Completed", icon: <FaCheckCircle className="text-green-500" /> },
  },
  {
    id: 2,
    title: "Gift Card Website",
    description: "Modern landing page for digital gift cards using React & Styled Components.",
    image: Img2,
    link: "https://giftcard17.netlify.app/",
    status: { text: "Completed", icon: <FaCheckCircle className="text-green-500" /> },
  },
  {
    id: 3,
    title: "Courier Management",
    description: "Courier and logistics management web app using Vue Js & SCSS.",
    image: Img3,
    link: "https://devgodeliveryservices.netlify.app/",
    status: { text: "In Progress", icon: <FaClock className="text-orange-500" /> },
  },
  {
    id: 4,
    title: "RealTasker Project",
    description: "Task management and productivity app built with React + Styled Components.",
    image: Img4,
    link: "https://realtasker.vercel.app/",
    status: { text: "Working (Short Time)", icon: <FaBolt className="text-blue-500" /> },
  },
  {
    id: 5,
    title: "Real-Time Ad Landing Page",
    description: "A dynamic landing page with real-time functionality for advertisement purposes, built with React and Tailwind CSS to meet customer requirements.",
    image: Img5,
    link: "https://wearethogether.vercel.app/",
    status: { text: "Live Project", icon: <FaSync className="text-teal-500 animate-spin" /> },
  },
];

// Animation variants for each card based on its position
const cardAnimationVariants = [
  { initial: { opacity: 0, x: 100 }, whileInView: { opacity: 1, x: 0 } }, // From Right
  { initial: { opacity: 0, y: 100 }, whileInView: { opacity: 1, y: 0 } }, // From Bottom
  { initial: { opacity: 0, x: -100 }, whileInView: { opacity: 1, x: 0 } }, // From Left
];

export default function ProjectSection() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto overflow-hidden" id="projects">
      {/* Section Heading */}
      <div className="text-center mb-10">
        {/* --- TITLE ANIMATED --- */}
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl font-bold mt-2"
        >
          <span className="text-gray-400">Explore</span>{' '}
          <span className="text-[#f05228]">My Work</span>
        </motion.h1>

        {/* --- SUBTITLE ANIMATED --- */}
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gray-400 mt-4 max-w-2xl mx-auto"
        >
          Here's a selection of some of my recent projects. Each project was a unique challenge that I enjoyed bringing to life, focusing on clean code and great user experiences.
        </motion.p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          // --- CARD ANIMATED ---
          <motion.div
            key={project.id}
            // Selects the animation variant based on index (0, 1, or 2)
            initial={cardAnimationVariants[index % 3].initial}
            whileInView={cardAnimationVariants[index % 3].whileInView}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white rounded-xl shadow-md overflow-hidden relative transition transform hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="w-full h-56 flex items-center justify-center bg-white">
              <img
                src={project.image}
                alt={project.title}
                className="h-full object-contain"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
              <p className="text-sm text-gray-600 mt-1 mb-4">{project.description}</p>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm font-medium text-gray-600">
                  {project.status.icon} {project.status.text}
                </span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200 text-sm"
                >
                  View Project
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}