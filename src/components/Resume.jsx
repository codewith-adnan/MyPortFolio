import React from "react";

const educationData = [
  {
    date: "2020-2024",
    title: "Bachelor in Cyber Security",
    institution: "KFUEIT",
    description: "I hold a Bachelor’s degree in Cyber Security from The Khawaja Fareed University Of Engineering & Information Technology, where I gained strong expertise in modern web technologies and software development.",
  },
  {
    date: "2018-2020",
    title: "Intermediate in ICS",
    institution: "Superior Group Of Colleges",
    description: "I completed my Intermediate in Computer Science (ICS) from Superior Group Of College, where I built a solid foundation in programming and computer fundamentals.",
  },
  {
    date: "2020-2021",
    title: "Course in Microsoft Office Applications",
    institution: "Vocational Training Institute",
    description: "Successfully completed a Course in Microsoft Office Applications, gaining hands-on experience with MS Word, Excel, PowerPoint, and Outlook.",
  },
];

const experienceData = [
  {
    date: "April,2025-June,2025",
    title: "React Js FrontEnd",
    institution: "Devcastle Institute",
    description: "Successfully completed a Website Development course, gaining proficiency in Java Script,Type Script,Styled Components,Taillwind CSS,SCSS & API Integration",
  },
  {
    date: "2025",
    title: "Frontend Developer",
    institution: "Builtinsoft",
    description: "A React JS developer with hands-on experience in building responsive, scalable web applications using Java Script,Type Script,Styled Components,Taillwind CSS,SCSS , API Integration ,Redux & working in real time production level project UMS(University Management System). ",
  },
  {
    date: null,
    title: "Dev Tools",
    institution: "Proficient In",
    description: "Redux, Git, GitHub, Swagger, Postman, Netlify,Docker , Vercel,GitLab",
  },
];

const ResumeCard = ({ date, title, institution, description }) => (
  <div className="bg-white rounded-xl p-8 shadow-lg text-left 
                  hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
    <div className="mb-4">
      {date ? (
        <span className="bg-[#f05228] text-white text-xs font-bold px-3 py-1 rounded-md">
          {date}
        </span>
      ) : (
        <span className="block w-3 h-3 bg-[#f05228] rounded-full"></span>
      )}
    </div>
    <h3 className="text-xl font-figtree font-bold uppercase mb-2 text-[#032737]">{title}</h3>
    <h4 className="text-sm font-figtree font-semibold uppercase text-gray-500 mb-3">{institution}</h4>
    <p className="text-gray-600 font-figtree">{description}</p>
  </div>
);

export default function Resume() {
  return (
    <section id="resume" className="bg-[#F8F7F1] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-figtree">
            <span className="text-gray-600">My </span>
            <span className="text-[#f05228]">Resume</span>
          </h2>
          <p className="text-gray-600 font-figtree mt-4 max-w-3xl mx-auto">
            "I believe in continuous growth—every challenge is an opportunity to learn, improve, and move one step closer to success."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Column */}
          <div className="space-y-8">
            {educationData.map((item, index) => (
              <ResumeCard key={`edu-${index}`} {...item} />
            ))}
          </div>
          {/* Experience Column */}
          <div className="space-y-8">
            {experienceData.map((item, index) => (
              <ResumeCard key={`exp-${index}`} {...item} />
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="/src/assets/Muhhamad Adnan.pdf"
            download
            className="bg-[#f05228] text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition-all duration-300"
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </section>
  );
}