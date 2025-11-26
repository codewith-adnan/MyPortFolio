import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import {
  FaMapMarkerAlt, // Keeping these imports in case you want to reintroduce icons later
  FaPhoneAlt,
  FaPaperPlane,
  FaGlobe,
  FaDownload,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import CV from "../assets/Muhammad Adnan.pdf"; // Assuming CV path is correct

// contactDetails is not actively used in the JSX to match the image,
// but kept here as it was in your original code.
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

const ContactMe = () => {
  const form = useRef();
  const [toast, setToast] = useState({ show: false, type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fade = {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  };

  const verticalLeft = {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
    },
  };

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast({ show: false, type: "", message: "" }), 3000);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
    };

    try {
      const response = await fetch(
        "https://porfolioapisetting.vercel.app/api/send-message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        showToast("success", result.message || "Message Sent Successfully!");
        e.target.reset();
      } else {
        showToast(
          "error",
          result.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error("Fetch error:", error);
      showToast("error", "Failed to send message. Check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-10 text-gray-300 min-h-screen relative"
 style={{ background: 'linear-gradient(to right, #faf7f7, #c1bcb5)' }}
>
      

      {toast.show && (
        <div
          className={`fixed top-5 right-5 flex flex-col gap-2 border rounded-lg shadow-md px-4 py-2
          bg-gray-700 text-gray-200 transition-all duration-600 z-50 w-[280px]
          ${
            toast.type === "success" ? "border-green-400" : "border-[#f05228]"
          }`}
        >
          <div className="flex items-center gap-3">
            {toast.type === "success" ? (
              <FaCheckCircle className="text-green-400 text-xl" />
            ) : (
              <FaTimesCircle className="text-[#f05228] text-xl" />
            )}
            <span>{toast.message}</span>
          </div>

          <div className="relative w-full h-[3px] bg-gray-600 overflow-hidden rounded-full">
            <div
              className={`absolute top-0 left-0 h-full ${
                toast.type === "success" ? "bg-green-400" : "bg-[#f05228]"
              } animate-toastLoader`}
            ></div>
          </div>
        </div>
      )}

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 pt-16" 
          initial={{ opacity: 0 }}
          whileInView={fade}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-4xl font-bold font-['Poppins'] mt-[-3rem] ">
            Get in <span className="text-[#f05228]">Touch</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1  md:grid-cols-2 gap-10 lg:gap-20 items-start">

          
          <motion.div
            className="left-section"
            initial={{ opacity: 0, y: "-50px" }}
            whileInView={verticalLeft}
            viewport={{ once: true }}
          >
            <motion.p
        className=" text-gray-400 text-2xl mb-2 font-medium" 
        initial={{ opacity: 0 }}
        whileInView={fade}
        viewport={{ once: true }}
      >
        Hire Me
      </motion.p>
            <div className="mb-8">
              <p className="text-gray-500 text-base text-justify  leading-relaxed">
                I’m interested in freelance opportunities – especially ambitious
                or large projects. However, if you have other request or
                question, don’t hesitate to use the form.
              </p>
            </div>
            <div className="say-hello">
              <p className="text-gray-400 text-xl font-semibold mb-4 uppercase tracking-wider">
                Say Hello
              </p>
              <a
                className="text-gray-500 hover:text-[#f05228] transition-colors duration-300 block mb-2"
                href="//wa.me/03048008316"
                target="_blank"
                rel="noreferrer"
              >
                wa.me/adnan
              </a>
              <a
                className="text-gray-500 hover:text-[#f05228] transition-colors duration-300 block mb-2"
                href="mailto:sendtomadnan@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                sendtomadnan@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            className="right-section  p-8 rounded-lg mt-[-2rem]" 
            initial={{ opacity: 0, y: "50px" }}
            whileInView={verticalLeft}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-500 mb-6 font-['Poppins']">
              Send Me a Message
            </h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    required
                    className="w-full bg-transparent text-gray-400 border-b border-gray-600 focus:border-[#f05228] outline-none px-0 py-2 placeholder-gray-500 transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-400 text-sm font-medium mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email address"
                    required
                    className="w-full bg-transparent text-gray-400 border-b border-gray-600 focus:border-[#f05228] outline-none px-0 py-2 placeholder-gray-500 transition-colors duration-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 text-sm font-medium ">
                  Your message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  placeholder="Hi, I think I need you to work on this particular product.Reach out as soon as you can"
                  required
                  className="w-full bg-transparent text-gray-400 border-b border-gray-600 focus:border-[#f05228] outline-none px-0 py-2 resize-none placeholder-gray-500 transition-colors duration-300"
                ></textarea>
              </div>

              <div className="text-center md:text-left">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-transparent text-[#f05228] border border-[#f05228] py-3 px-10 rounded-full font-semibold hover:bg-[#f05228] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-16 max-w-2xl mx-auto">
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-700 text-white py-3 rounded-full font-semibold text-center hover:bg-[#f05228] transition-all duration-300 flex items-center justify-center"
          >
            <FaDownload className="inline mr-2" />
            View CV
          </a>
          <a
            href={CV}
            download
            className="flex-1 bg-[#f05228] text-white py-3 rounded-full font-semibold text-center hover:bg-gray-700 transition-all duration-300 flex items-center justify-center"
          >
            <FaDownload className="inline mr-2" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;