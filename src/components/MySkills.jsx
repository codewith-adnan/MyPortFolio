import React from "react";

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
    <section id="skills" className="bg-white text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            <span className="text-gray-400">My</span> <span className="text-[#f05228]">Skills</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            "I turn ideas into powerful, interactive web experiences—driven by
            creativity, code, and a passion for seamless design."
          </p>
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
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-[#f05228] h-2.5 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}