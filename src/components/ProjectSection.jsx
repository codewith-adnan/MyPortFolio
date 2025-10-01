// src/components/ProjectSection.jsx
import React from "react";
import { FaCheckCircle, FaClock, FaBolt, FaSync } from "react-icons/fa"; // Added FaSync for the new project
import Img1 from "../assets/carrent.PNG";
import Img2 from "../assets/giftcarsite.PNG";
import Img3 from "../assets/delivery.PNG";
import Img4 from "../assets/realtask.PNG";
import Img5 from "../assets/Capture.PNG"; 

const projects = [
  {
    id: 1,
    title: "Car Rental System",
    price: "$200",
    description: "Complete car rental booking platform built with React & Styled Components.",
    image: Img1,
    link: "https://carrental5.netlify.app/",
    status: { text: "Completed", icon: <FaCheckCircle className="text-green-500" /> },
  },
  {
    id: 2,
    title: "Gift Card Website",
    price: "$150",
    description: "Modern landing page for digital gift cards using React & Styled Components.",
    image: Img2,
    link: "https://giftcard17.netlify.app/",
    status: { text: "Completed", icon: <FaCheckCircle className="text-green-500" /> },
  },
  {
    id: 3,
    title: "Courier Management",
    price: "$180",
    description: "Courier and logistics management web app using Vue Js & SCSS.",
    image: Img3,
    link: "https://devgodeliveryservices.netlify.app/",
    status: { text: "In Progress", icon: <FaClock className="text-orange-500" /> },
  },
  {
    id: 4,
    title: "RealTasker Project",
    price: "$250",
    description: "Task management and productivity app built with React + Styled Components.",
    image: Img4,
    link: "https://realtasker.vercel.app/",
    status: { text: "Working (Short Time)", icon: <FaBolt className="text-blue-500" /> },
  },
  {
    id: 5, // New project ID
    title: "Real-Time Ad Landing Page",
    price: "$220",
    description: "A dynamic landing page with real-time functionality for advertisement purposes, built with React and Tailwind CSS to meet customer requirements.",
    image: Img5, // Using a new image placeholder
    link: "https://wearethogether.vercel.app/",
    status: { text: "Live Project", icon: <FaSync className="text-teal-500 animate-spin" /> }, // New status for a real-time project
  },
];

export default function ProjectSection() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto" id="projects">
      {/* Section Heading */}
      <div className="text-center mb-10">
  <h1 className="text-4xl font-bold mt-2">
    <span className="text-gray-400">Explore</span>{' '}
    <span className="text-[#f05228]">My Work</span>
  </h1>
  <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
    Here's a selection of some of my recent projects. Each project was a unique challenge that I enjoyed bringing to life, focusing on clean code and great user experiences.
  </p>
</div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-md overflow-hidden relative transition transform hover:-translate-y-2 hover:shadow-lg"
          >
            {/* Price Badge */}
            <div className="absolute top-[18px] -left-[0px] bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full z-10">
              Start at {project.price}
            </div>

            {/* Image */}
            <div className="w-full h-56 flex items-center justify-center bg-white">
              <img
                src={project.image}
                alt={project.title}
                className="h-full object-contain"
              />
            </div>

            {/* Content */}
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
          </div>
        ))}
      </div>
    </section>
  );
}