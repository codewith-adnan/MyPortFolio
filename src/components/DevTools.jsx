import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


import tailwindLogo from '../assets/tailwind css.jpg'; 
import vercelLogo from '../assets/123.png';
import netlifyLogo from '../assets/12345.png'; 
import hostingerLogo from '../assets/hostinger.png';
import namecheapLogo from '../assets/namecheap.svg';
import awsLogo from '../assets/download.png';

const tools = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "frontend" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "language" },
  { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", category: "frontend" },
  { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", category: "testing" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "version_control" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", category: "version_control" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "devops" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "frontend" },
  { name: "Vue", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", category: "frontend" },
  { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", category: "frontend" },
  { name: "Axios", logo: "https://axios-http.com/assets/logo.svg", category: "frontend" },
  { name: ".env", logo: "https://cdn-icons-png.flaticon.com/512/136/136443.png", category: "config" },
  { name: "Sass", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg", category: "styling" },
  { name: "Styled Components", logo: "https://avatars.githubusercontent.com/u/20658825?s=200&v=4", category: "styling" },
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "language" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "language" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "language" },
  { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", category: "ide" },
  { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", category: "styling" },
  { name: "Material UI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg", category: "styling" },
  { name: "Swagger", logo: "https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg", category: "api_dev" },
  { name: "Tailwind CSS", logo: tailwindLogo, category: "styling" },
  { name: "Vercel", logo: vercelLogo, category: "hosting" },
  { name: "Netlify", logo: netlifyLogo, category: "hosting" },
  { name: "Hostinger", logo: hostingerLogo, category: "hosting" },
  { name: "Namecheap", logo: namecheapLogo, category: "domain" },
  { name: "AWS", logo: awsLogo, category: "cloud" },
];

export default function DevTools() {
  const [currentRadius1, setCurrentRadius1] = useState(80); 
  const [currentRadius2, setCurrentRadius2] = useState(150); 
  const [currentRadius3, setCurrentRadius3] = useState(220); 
  const [currentLogoSize, setCurrentLogoSize] = useState(40);

  const orbit1Tools = tools.slice(0, Math.floor(tools.length / 3));
  const orbit2Tools = tools.slice(Math.floor(tools.length / 3), Math.floor(2 * tools.length / 3));
  const orbit3Tools = tools.slice(Math.floor(2 * tools.length / 3));

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 640) { // Small screens
          setCurrentRadius1(60);
          setCurrentRadius2(110);
          setCurrentRadius3(160);
          setCurrentLogoSize(32);
        } else { // Large screens
          setCurrentRadius1(100);
          setCurrentRadius2(180);
          setCurrentRadius3(260);
          setCurrentLogoSize(48);
        }
      }
    };

    handleResize();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  // Function to render an orbit of tools
  const renderOrbit = (orbitTools, radius, duration, direction) => {
    return (
      <motion.div
        animate={{ rotate: 360 * direction }}
        transition={{
          repeat: Infinity,
          duration: duration,
          ease: "linear",
        }}
        className="absolute inset-0 rounded-full"
      >
        {orbitTools.map((tool, index) => {
          const angle = (index / orbitTools.length) * 2 * Math.PI;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={tool.name}
              className="absolute group cursor-pointer flex items-center justify-center"
              style={{
                top: `calc(50% + ${y}px - ${currentLogoSize / 2}px)`,
                left: `calc(50% + ${x}px - ${currentLogoSize / 2}px)`,
                width: `${currentLogoSize}px`,
                height: `${currentLogoSize}px`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.2, zIndex: 10 }} // Hover effect
            >
              <img
                src={tool.logo} // This will now correctly use the imported image URL
                alt={tool.name}
                width={currentLogoSize}
                height={currentLogoSize}
                className="rounded-full p-2 bg-gradient-to-br from-gray-200 to-gray-300 shadow-lg border border-gray-400
                           group-hover:from-orange-500 group-hover:to-orange-400 group-hover:border-white transition-all duration-300"
                title={tool.name}
              />
              <span className="absolute -bottom-6 text-xs text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                {tool.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    );
  };

  return (
    <section
      id="devtools"
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-10 sm:py-20"
      style={{ background: 'linear-gradient(to top, #faf7f7, #c1bcb5)' }}
    >
      {Array.from({ length: 150 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-orange-300 opacity-20"
          style={{
            width: Math.random() * 3 + 1, 
            height: Math.random() * 3 + 1,
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{
            x: Math.random() * 200 - 100, 
            y: Math.random() * 200 - 100,
            opacity: [0, 0.2, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: Math.random() * 10 + 5, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}

      
      <div className="relative z-10 w-full max-w-7xl px-4 flex flex-col items-center justify-center">
        
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl sm:text-3xl font-bold mb-4 drop-shadow-lg text-center"
        >
          <span className="text-gray-800">My</span>{" "}
          <span style={{ color: '#f05228' }}>Dev Tools</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-gray-700 text-lg sm:text-xl mb-12 text-center max-w-md"
        >
          Crafting modern & scalable solutions with these technologies.
        </motion.p>

        
        <div className="relative w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] flex items-center justify-center">
         
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute rounded-full blur-2xl opacity-30 w-16 h-16 sm:w-32 sm:h-32"
            style={{ backgroundColor: '#f05228' }}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="absolute rounded-full bg-cyan-500 blur-2xl opacity-30 w-16 h-16 sm:w-32 sm:h-32"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute text-gray-900 font-bold text-xl sm:text-2xl z-10"
          >
            Stack
          </motion.div>

          {renderOrbit(orbit1Tools, currentRadius1, 25, 1)}      
          {renderOrbit(orbit2Tools, currentRadius2, 40, -1)}     
          {renderOrbit(orbit3Tools, currentRadius3, 60, 1)}      

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute rounded-full border border-dashed border-gray-500 opacity-50"
            style={{
              width: currentRadius3 * 2 + currentLogoSize,
              height: currentRadius3 * 2 + currentLogoSize,
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
}