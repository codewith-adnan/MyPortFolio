import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaGlobe,
  FaDownload,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import ContactImg from "../assets/Heroimg.jpeg";
import CV from "../assets/Muhhamad Adnan.pdf";

const contactDetails = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    detail: "Punjab, Pakistan",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Contact Number",
    detail: "03174103743",
  },
  {
    icon: <FaPaperPlane />,
    title: "Email Address",
    detail: "sendtomadnan@gmail.com",
  },
  {
    icon: <FaGlobe />,
    title: "Website",
    detail: "www.comingsoon.com",
  },
];

export default function ContactMe() {
  const form = useRef();
  const [toast, setToast] = useState({ show: false, type: "", message: "" });

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast({ show: false, type: "", message: "" }), 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // 1️⃣ Send auto-reply to user
    emailjs
      .sendForm(
        "service_g6bo8ne",
        "template_autoReply",
        form.current,
        "DNCRjbjp8-L4_pUPa"
      )
      .then(() => {
        console.log("✅ Auto-reply sent to user");
      })
      .catch((error) => {
        console.error("Auto-reply error:", error.text);
      });

    
    emailjs
      .sendForm(
        "service_g6bo8ne",
        "template_a6f4sjj",
        form.current,
        "DNCRjbjp8-L4_pUPa"
      )
      .then(() => {
        showToast("success", "Message Sent Successfully!");
        e.target.reset();
      })
      .catch((error) => {
        console.error("Admin notify error:", error.text);
        showToast("error", "Something went wrong. Please try again.");
      });
  };

  return (
    <section id="contact" className="bg-[#F8F7F1] text-white py-20">
      
      {toast.show && (
        <div
          className={`fixed top-5 right-5 flex items-center gap-3 border rounded-lg shadow-md px-4 py-2 
          bg-gray-600 border-gray-400 text-gray-200 transition-all duration-600 z-50`}
        >
          {toast.type === "success" ? (
            <FaCheckCircle className="text-[#f05228] text-xl" />
          ) : (
            <FaTimesCircle className="text-[#f05228] text-xl" />
          )}
          <span>{toast.message}</span>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-figtree">
            <span className="text-gray-400">Contact</span>{" "}
            <span className="text-[#f05228]">Me</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            "Have a project or idea in mind? Feel free to contact me—let's build
            something amazing together"
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {contactDetails.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div
                className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4
                           border-2 border-transparent hover:border-orange-500 transition-all duration-300"
              >
                <div className="text-4xl text-[#f05228]">{item.icon}</div>
              </div>
              <h3 className="text-lg font-bold uppercase text-gray-600 mb-2 font-figtree">
                {item.title}
              </h3>
              <p className="text-gray-400 font-figtree">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={ContactImg}
              alt="Contact"
              className="w-full h-full max-h-[500px] object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-600 mb-6 font-figtree">
              Send Me a Message
            </h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-[#F8F7F1] text-gray-400 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-[#F8F7F1] text-gray-400 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 outline-none"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full bg-[#F8F7F1] text-gray-400 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#f05228] text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-16 max-w-2xl mx-auto">
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-800 text-white py-3 rounded-lg font-semibold text-center hover:bg-[#f05228] transition"
          >
            <FaDownload className="inline mr-2" />
            View CV
          </a>
          <a
            href={CV}
            download
            className="flex-1 bg-[#f05228] text-white py-3 rounded-lg font-semibold text-center hover:bg-gray-800 transition"
          >
            <FaDownload className="inline mr-2" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
