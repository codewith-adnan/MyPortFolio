import React from "react";
import ProfileImg from "../assets/Heroimg.jpeg"; // Make sure to add your image to the assets folder

export default function AboutMe() {
  return (
    <section id="about" className="bg-white text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Image Column */}
        <div className="md:w-1/3 w-full flex justify-center">
          <img
            src={ProfileImg}
            alt="Muhammad Adnan"
            className="rounded-lg shadow-lg w-64 h-64 md:w-80 md:h-80 object-cover"
          />
        </div>

        {/* Content Column */}
        <div className="md:w-2/3 w-full">
          <h2 className="text-4xl font-bold mb-4">
  <span className="text-gray-400">About </span><span className="text-[#f05228]">Me</span>
</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            I'm a creative and detail-focused Frontend Developer, passionate about crafting responsive and engaging user interfaces. I love bringing designs to life with clean code and modern web technologies.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
            <div>
              <strong className="block text-gray-400">Name:</strong>
              <span className="text-gray-600">Muhammad Adnan</span>
            </div>
            <div>
              <strong className="block text-gray-400">Date of birth:</strong>
              <span className="text-gray-600">Janaury 07, 2002</span>
            </div>
            <div>
              <strong className="block text-gray-400">Address:</strong>
              <span className="text-gray-600">Rahim Yar Khan, Punjab</span>
            </div>
            <div>
              <strong className="block text-gray-400">Zip code:</strong>
              <span className="text-gray-600">64200</span>
            </div>
            <div>
              <strong className="block text-gray-400">Email:</strong>
              <span className="text-gray-600">sendtomadnan@gmail.com</span>
            </div>
            <div>
              <strong className="block text-gray-400">Phone:</strong>
              <span className="text-gray-600">03174103743</span>
            </div>
          </div>

          <p className="text-lg text-white font-semibold mb-8">
            <span className="text-[#f05228] text-2xl font-bold">05+</span><span className="text-gray-400" >Project complete</span>
          </p>

          <a
            href="/src/assets/Muhhamad Adnan.pdf" 
            download
            className="bg-[#f05228] text-white font-bold py-3 px-8 rounded-full hover:bg-gray-400 transition-all duration-300"
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </section>
  );
}