import React, { useEffect, useState } from "react";
import { FaCar, FaAmbulance, FaChartLine, FaUsers, FaRoad } from "react-icons/fa";
import { motion } from "framer-motion";
import WhySmartTraffic from "../components/SmartTraffic";
import traffic from "../assets/traffic1.jpeg";
import f1 from "../assets/feature1.png";
import f2 from "../assets/feature2.jpg";
import f3 from "../assets/feature3.jpg";
import f4 from "../assets/feature4.jpeg";
import f5 from "../assets/feature5.jpeg";
import f6 from "../assets/feature6.png";

// import React, { useEffect, useState } from "react";
// import { FaCar, FaAmbulance, FaChartLine, FaRoad } from "react-icons/fa";
// import { motion } from "framer-motion";
// import traffic from "../assets/traffic1.jpeg";

// Simple counter hook
const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

// animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.8 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 12, duration: 0.8 }
  }
};

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 10,
    transition: { type: "spring", stiffness: 400, damping: 17 }
  }
};

const HomePage = () => {
  // counters (✅ inside component)
  const vehiclesCount = useCounter(235000, 2500);
  const emergencyCount = useCounter(1200, 2000);
  const citiesCount = useCounter(45, 1500);
  const co2Count = useCounter(8500, 2200);

  // stats array (✅ also inside component so it sees counters)
  const stats = [
    {
      id: 1,
      value: vehiclesCount,
      suffix: '+',
      label: 'Vehicles Managed Today',
      icon: FaCar,
      color: 'from-blue-500 to-blue-700',
      textColor: 'text-blue-700',
      bgColor: 'bg-blue-50',
      shadowColor: 'shadow-blue-200'
    },
    {
      id: 2,
      value: emergencyCount,
      suffix: '+',
      label: 'Emergencies Cleared',
      icon: FaAmbulance,
      color: 'from-red-500 to-red-700',
      textColor: 'text-red-700',
      bgColor: 'bg-red-50',
      shadowColor: 'shadow-red-200'
    },
    {
      id: 3,
      value: citiesCount,
      suffix: '',
      label: 'Cities Covered',
      icon: FaRoad,
      color: 'from-green-500 to-green-700',
      textColor: 'text-green-700',
      bgColor: 'bg-green-50',
      shadowColor: 'shadow-green-200'
    },
    {
      id: 4,
      value: co2Count,
      suffix: 'kg',
      label: 'CO₂ Reduced',
      icon: FaChartLine,
      color: 'from-purple-500 to-purple-700',
      textColor: 'text-purple-700',
      bgColor: 'bg-purple-50',
      shadowColor: 'shadow-purple-200'
    }
  ];
  const features=
    [
      {
        image: f5,
        icon: <FaAmbulance className="text-red-500 text-3xl" />,
        title: "Emergency Vehicle Priority",
        desc: "Ensures ambulances and fire trucks get green signals quickly, saving lives.",
      },
      {
        image:f6,
        icon: <FaCar className="text-blue-500 text-3xl" />,
        title: "Real-time Traffic Updates",
        desc: "Live congestion tracking and smart rerouting for smoother journeys.",
      },
      {
        image: f1,
        icon: <FaChartLine className="text-green-600 text-3xl" />,
        title: "Data & Analytics",
        desc: "Interactive dashboards with traffic trends, accident hotspots, and AI predictions.",
      },
      {
        image:f3,
        icon: <FaUsers className="text-purple-600 text-3xl" />,
        title: "Citizen-Friendly Access",
        desc: "Simple interface designed for all users, including those less tech-savvy.",
      },
      {
        image: f2,
        icon: <FaRoad className="text-yellow-500 text-3xl" />,
        title: "Smart Route Planning",
        desc: "Helps public transport and daily commuters with optimized travel paths.",
      },
      {
        image: f4,
        icon: <FaChartLine className="text-indigo-600 text-3xl" />,
        title: "Authority Control",
        desc: "Authorities can monitor, analyze, and respond to incidents instantly.",
      },
    ]


  return (
    <div className="overflow-x-hidden bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Hero Section */}
 <section 
  className="relative text-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-white min-h-[60vh] sm:min-h-[70vh] lg:h-[85vh] overflow-hidden flex items-center justify-center"
  style={{
    backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3), rgba(64, 67, 75, 0.7)), url(${traffic})`
  }}
>
  <div className="relative z-10 max-w-7xl mx-auto w-full">
    <motion.h1
  initial={{ y: 30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
>
   Traffic Saathi 🚦
</motion.h1>
    
    <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16 leading-relaxed px-2">
      Making Indian roads safer, faster, and smarter with real-time monitoring,
      emergency vehicle prioritization, and AI-driven insights.
    </p>
    <a 
      href="/dashboard" 
      className="inline-block px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-white text-blue-700 font-semibold text-sm sm:text-base md:text-lg rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
    >
      Explore Dashboard
    </a>
  </div>
</section>

       <section className="relative py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-200 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-200 rounded-full opacity-10 animate-pulse delay-500"></div>
        <div className="absolute bottom-32 right-10 w-28 h-28 bg-red-200 rounded-full opacity-10 animate-pulse delay-700"></div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Impact So Far 🚀
        </motion.h2>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Real-time results from our intelligent traffic management system
        </motion.p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto relative z-10"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className={`relative group ${stat.bgColor} rounded-2xl p-8 text-center ${stat.shadowColor} shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 backdrop-blur-sm`}
          >
            {/* Gradient border effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            
            {/* Icon */}
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full mb-6 shadow-lg`}
            >
              <stat.icon className="w-8 h-8 text-white" />
            </motion.div>

            {/* Number */}
            <motion.div className="mb-4">
              <span className={`text-4xl md:text-5xl font-bold ${stat.textColor} block leading-none`}>
                {stat.value.toLocaleString()}{stat.suffix}
              </span>
            </motion.div>

            {/* Label */}
            <p className="text-gray-600 font-medium text-sm md:text-base leading-tight">
              {stat.label}
            </p>

            {/* Hover effect line */}
            <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${stat.color} group-hover:w-full transition-all duration-500 rounded-full`}></div>
          </motion.div>
        ))}
      </motion.div>

      </section>

      {/* Features Section */}
<section className="py-20 px-6 w-full max-w-[350px] sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1100px] mx-auto">

  <motion.h2
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-4xl md:text-5xl font-bold text-center mb-14 text-blue-800"
  >
    Key Features ✨
  </motion.h2>

  <div className="grid gap-20 sm:grid-cols-2 lg:grid-cols-3">
  {features.map((feature, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ duration: 0.6, delay: i * 0.2, type: "spring" }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden border border-gray-100 group"
    >
      {/* Image with overlay + title */}
   <div className="relative h-60 md:h-48 w-full overflow-hidden group">
  {/* Image */}
  <img
    src={feature.image}
    alt={feature.title}
    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
  />

  {/* Overlay */}
  <div className="absolute inset-0  hover:bg-gray-800/25 transition duration-500 flex items-center justify-center">
    <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition duration-500">
      {feature.title}
    </span>
  </div>

  {/* Icon at bottom-left */}
  <div className="absolute bottom-3 left-3 bg-white rounded-full p-2 shadow-md">
    {feature.icon}
  </div>



        {/* Icon on bottom-left */}
        <div className="absolute bottom-3 left-3 bg-white rounded-full p-2 shadow-md">
          {feature.icon}
        </div>
      </div>

      {/* Content below image */}
      <div className="p-6">
        <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
      </div>
    </motion.div>

    ))}
  </div>
</section>


      {/* Why Smart Traffic Matters (Road UI) */}
          <WhySmartTraffic/>

      {/* Call to Action */}
      <section className="py-20 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s Build Smarter Roads Together
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Join us in revolutionizing India’s traffic management with real-time technology,
          AI insights, and citizen-first design.
        </p>
        <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-gray-300 py-8 px-6 mt-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-2">Smart Traffic System</h3>
            <p className="text-sm">
              An innovative solution to make Indian roads safer, efficient, and
              eco-friendly using smart technologies.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="/dashboard" className="hover:text-white">Dashboard</a></li>
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Contact</h3>
            <p className="text-sm">📧 info@smarttraffic.in</p>
            <p className="text-sm">📍 New Delhi, India</p>
          </div>
        </div>
        <p className="text-center text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} Smart Traffic System. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
