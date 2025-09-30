import React, { useState } from "react";
import { motion } from "framer-motion";
import LandingPageNavbar from "../components/LandingPageNavbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate API here or use emailjs / backend endpoint
    alert("Message sent! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      {/* Header */}
      <LandingPageNavbar/>
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-center text-[#1D3557] mb-6 mt-15"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📬 Contact Us
      </motion.h1>

      <motion.p
        className="text-center text-gray-700 mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Have questions or want to collaborate? Fill out the form below and we’ll
        get back to you as soon as possible.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <motion.form
          className="bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="mt-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-md hover:from-blue-700 hover:to-blue-800 transition-transform duration-200 hover:scale-105"
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Info / Map */}
        <motion.div
          className="flex flex-col gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2 text-[#1D3557]">
              Office Address
            </h3>
            <p className="text-gray-700">
              123 Smart Traffic Lane, New Delhi, India
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2 text-[#1D3557]">
              Contact Info
            </h3>
            <p className="text-gray-700">Email: info@trafficsaathi.com</p>
            <p className="text-gray-700">Phone: +91 98765 43210</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 h-64 flex items-center justify-center text-gray-500">
            {/* Placeholder for Map */}
            <p>Map will be integrated here</p>
          </div>
        </motion.div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Contact;
