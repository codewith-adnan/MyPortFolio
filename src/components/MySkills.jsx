import React from "react";
import { motion } from "framer-motion"; // Framer Motion import kiya gaya hai

export default function MySkills() {
  const skills = [
    { name: "React Js", percentage: 85 },
    { name: "Vue Js", percentage: 45 },
    { name: "Video Editing", percentage: 70 },
    { name: "Java Script", percentage: 65 },
    { name: "Type Script", percentage: 75 },
    { name: "Dev Tools", percentage: 70 },
  ];

  return (
    // Added overflow-hidden to prevent scrollbars during animation
    <section id="skills" className="bg-white py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* --- TITLE ANIMATED --- */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl font-bold"
          >
            <span className="text-gray-600">My</span> <span className="text-[#f05228]">Skills</span>
          </motion.h2>

          {/* --- SUBTITLE ANIMATED --- */}
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-gray-400 mt-4 max-w-2xl mx-auto" // Text color changed for visibility
          >
            "I turn ideas into powerful, interactive web experiences—driven by
            creativity, code, and a passion for seamless design."
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map((skill, index) => (
            <div key={index} className="w-full">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-gray-400">
                  {skill.name}
                </span>
                <span className="text-sm font-medium text-gray-400">
                  {skill.percentage}%
                </span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2.5">
                {/* --- PROGRESS BAR ANIMATED --- */}
                <motion.div
                  className="bg-[#f05228] h-2.5 rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  transition={{ 
                    duration: 2, // Animation duration set to 10 seconds
                    ease: "linear", // Linear ease for a steady progress
                    delay: 0.5 // Small delay to start animation after view
                  }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}