import React from "react";
import { motion } from "framer-motion";

export default function DevTools() {
  const tools = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Vue", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "Axios", logo: "https://axios-http.com/assets/logo.svg" },
    { name: ".env", logo: "https://cdn-icons-png.flaticon.com/512/136/136443.png" },
    { name: "Sass", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
    { name: "Styled Components", logo: "https://avatars.githubusercontent.com/u/20658825?s=200&v=4" },
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Material UI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
    { name: "Swagger", logo: "https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg" },
  ];

  const radius = 200; 
  const logoSize = 60; 

  return (
    <section
      id="devtools"
      style={{ background: "linear-gradient(to right, #faf7f7, #c1bcb5)" }}
      className="py-20 overflow-hidden flex justify-center"
    >
      <div className="relative w-[300px] h-[300px] sm:w-[550px] sm:h-[550px]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full"
        >
          {tools.map((tool, index) => {
            const angle = (index / tools.length) * 2 * Math.PI;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.img
                key={index}
                src={tool.logo}
                alt={tool.name}
                className="rounded-full p-2  shadow-lg absolute"
                style={{
                  width: `${logoSize}px`,
                  height: `${logoSize}px`,
                  top: `calc(50% + ${y}px - ${logoSize / 2}px)`,
                  left: `calc(50% + ${x}px - ${logoSize / 2}px)`,
                }}
                title={tool.name}
              />
            );
          })}
        </motion.div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-gray-600">Dev</span>{" "}
            <span className="text-[#f05228]">Tools</span>
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-[220px]">
            Tools I use daily for modern & scalable development
          </p>
        </div>
      </div>
    </section>
  );
}
