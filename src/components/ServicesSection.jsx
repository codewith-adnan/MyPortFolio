import React from "react";
import {
  FaCrown,
  FaDatabase,
  FaCode,
  FaProjectDiagram,
  FaUsers,
  FaVideo,
} from "react-icons/fa";

export default function ServicesSection() {
  const services = [
    { icon: <FaCrown className="text-4xl text-[#f05228]" />, title: "Web Design" },
    { icon: <FaDatabase className="text-4xl text-[#f05228]" />, title: "Database Management" },
    { icon: <FaCode className="text-4xl text-[#f05228]" />, title: "Web Developer" },
    { icon: <FaProjectDiagram className="text-4xl text-[#f05228]" />, title: "Codebase Structuring" },
    { icon: <FaUsers className="text-4xl text-[#f05228]" />, title: "Team Collaborator" },
    { icon: <FaVideo className="text-4xl text-[#f05228]" />, title: "Video Editing" },
  ];

  return (
    <section id="services" className="bg-[#F8F7F1] text-center py-20 px-6">
      {/* Title */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold font-figtree text-[#032737]">
              <span className="text-gray-400">My</span>{' '}

          <span className="text-[#f05228]">Services</span>
        </h2>
        <p className="text-gray-400 font-figtree mt-4 max-w-2xl mx-auto text-[18px]">
          "I turn ideas into powerful, interactive web experiences—driven by
          creativity, code, and a passion for seamless design"
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-8 shadow-lg flex flex-col items-center 
                       hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-figtree font-semibold text-[#032737]">
              {service.title}
            </h3>
            <span className="block w-10 h-[3px] bg-[#f05228] mt-3 rounded-md"></span>
          </div>
        ))}
      </div>
    </section>
  );
}
