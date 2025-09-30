import React from "react";
import { motion } from "framer-motion";
import { TrafficCone, Brain, Map, BarChart3, ShieldCheck, Zap } from "lucide-react";
import LandingPageNavbar from "../components/LandingPageNavbar";
import Footer from "../components/Footer";

const features = [
  {
    title: "Smart Traffic Signals",
    desc: "AI-powered signals that adapt in real time to reduce congestion and waiting time.",
    icon: <TrafficCone className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Real-time Analytics",
    desc: "Live dashboards with data on vehicle counts, congestion, and violation detection.",
    icon: <BarChart3 className="w-10 h-10 text-green-600" />,
  },
  {
    title: "AI & Machine Learning",
    desc: "Predictive models optimize routes, signal timings, and traffic flow efficiency.",
    icon: <Brain className="w-10 h-10 text-purple-600" />,
  },
  {
    title: "Map Integration",
    desc: "Interactive maps show hotspots, accident zones, and real-time congestion data.",
    icon: <Map className="w-10 h-10 text-red-600" />,
  },
  {
    title: "Emergency Vehicle Priority",
    desc: "Ensures ambulances and fire trucks get green corridors for faster response times.",
    icon: <ShieldCheck className="w-10 h-10 text-indigo-600" />,
  },
  {
    title: "Energy Efficient",
    desc: "Optimized signal timings help reduce fuel consumption and carbon emissions.",
    icon: <Zap className="w-10 h-10 text-yellow-500" />,
  },
];

const Features = () => {
  return (
    <div>
        <div className="p-6 md:p-12 max-w-7xl mx-auto">
      {/* Header */}
      <LandingPageNavbar/>
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-center mt-15 mb-6 text-[#1D3557]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🚦 Key Features of Traffic Saathi
      </motion.h1>

      <motion.p
        className="text-center text-gray-700 text-lg max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Our Smart Traffic Management System combines AI, IoT, and data analytics
        to create safer, faster, and more sustainable cities. Explore the
        cutting-edge features that make it possible.
      </motion.p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start gap-4 hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
          >
            <div className="p-3 bg-gray-100 rounded-full">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-[#1D3557]">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-[#1D3557]">
          Ready for Smarter Roads?
        </h2>
        <p className="text-gray-600 mb-6">
          Join us in building a traffic system that saves time, reduces
          pollution, and improves road safety for everyone.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow hover:from-blue-700 hover:to-blue-800 transition"
        >
          Get in Touch
        </a>
      </motion.div>

    </div>
    
      <Footer/>
    </div>
    
  );
};

export default Features;
