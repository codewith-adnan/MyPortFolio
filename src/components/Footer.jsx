import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaGithub, 
  FaFacebookF, 
  FaLinkedin,
  FaWhatsapp
} from 'react-icons/fa';

const quickLinks = [
  { name: 'Home', link: 'home' },
  { name: 'About', link: 'about' },
  { name: 'Services', link: 'services' },
  { name: 'Projects', link: 'projects' },
  { name: 'Contact', link: 'contact' },
];

const servicesLinks = [
  'Web Design',
  'Web Development',
  'UI/UX Designer',
  'MERN STACK Developer',
  'Video Editor',
];

export default function Footer() {
  const phoneNumber = '03174103743';
  const [tooltipText, setTooltipText] = useState(` Click to copy`);

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      setTooltipText('Copied!');
      setTimeout(() => {
        setTooltipText(` Click to copy`);
      }, 2000); 
    });
  };

  return (
    <footer className="bg-gray-800 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gray-400">PORT</span>
              <span className="text-[#f05228]">FOLIO</span>
            </h3>
            <div className="pr-4 text-sm leading-relaxed space-y-4">
              <p>MERN STACK Developer specializing in building fast and responsive web interfaces.</p>
              <p>A passionate Web Developer with 01+ years of experience building responsive, user-friendly websites for clients worldwide.</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#f05228] mb-4">Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.link} 
                    smooth={true} 
                    duration={800}
                    className="flex items-center hover:text-[#f05228] transition-colors cursor-pointer"
                  >
                    <span className="mr-2">&#8594;</span> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#f05228] mb-4">Services</h3>
            <ul className="space-y-3">
              {servicesLinks.map((service) => (
                <li key={service} className="flex items-center">
                  <span className="mr-2">&#8594;</span> {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#f05228] mb-4">Have a Questions?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-[#f05228] mt-1 mr-3 flex-shrink-0" />
                <span>Punjab, Pakistan</span>
              </li>
              <li className="relative flex items-center group">
                <FaPhoneAlt className="text-[#f05228] mr-3" />
                <span onClick={handleCopy} className="cursor-pointer">
                  {phoneNumber}
                </span>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2  bg-gray-600 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {tooltipText}
                </span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-[#f05228] mr-3" />
                <a href="mailto:sendtomadnan@gmail.com" className="hover:text-[#f05228] transition-colors">
                  sendtomadnan@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="https://linkedin.com/in/your-profile-url" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#f05228] transition-all duration-300 active:scale-90">
                <FaLinkedin className="text-white" />
              </a>
              <a href="https://github.com/codewith-adnan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#f05228] transition-all duration-300 active:scale-90">
                <FaGithub className="text-white" />
              </a>
              <a href="https://www.facebook.com/share/1CvChNiyFz/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#f05228] transition-all duration-300 active:scale-90">
                <FaFacebookF className="text-white" />
              </a>
              <a href="https://wa.me/923174103743" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#f05228] transition-all duration-300 active:scale-90">
                <FaWhatsapp className="text-white" />
              </a>
            </div>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} All rights reserved. Made by Adnan Saeed.</p>
        </div>

      </div>
    </footer>
  );
}