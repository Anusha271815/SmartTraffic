// import React from "react";
// import { motion } from "framer-motion";
// import { Brain, Map, BarChart3, TrafficCone } from "lucide-react";

// const About = () => {
//   return (
//     <div className="p-6 md:p-10 max-w-5xl mx-auto">
//       {/* Header */}
//       <motion.h1
//         className="text-3xl font-bold mb-6"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         ℹ️ About Traffic Saathi
//       </motion.h1>

//       {/* Intro */}
//       <motion.p
//         className="text-gray-700 text-lg leading-relaxed mb-8"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3, duration: 0.6 }}
//       >
//         Our AI-powered traffic management system is designed to optimize traffic
//         signal timings, reduce congestion, and improve urban mobility. By
//         leveraging real-time data from IoT sensors and traffic cameras, the
//         system predicts bottlenecks and adjusts signals intelligently.
//       </motion.p>

//       {/* Features Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
//         {[
//           {
//             title: "🚦 Smart Signals",
//             desc: "AI adjusts signal timings dynamically to reduce waiting time and keep traffic flowing smoothly.",
//             icon: <TrafficCone className="w-8 h-8 text-blue-500" />,
//           },
//           {
//             title: "📊 Real-time Analytics",
//             desc: "Live monitoring dashboard with metrics like vehicle counts, congestion, and violation stats.",
//             icon: <BarChart3 className="w-8 h-8 text-green-500" />,
//           },
//           {
//             title: "🧠 Machine Learning",
//             desc: "Reinforcement learning models predict traffic patterns and continuously improve efficiency.",
//             icon: <Brain className="w-8 h-8 text-purple-500" />,
//           },
//           {
//             title: "🌍 Map Integration",
//             desc: "Interactive maps visualize congestion hotspots, accident zones, and vehicle density.",
//             icon: <Map className="w-8 h-8 text-red-500" />,
//           },
//         ].map((feature, i) => (
//           <motion.div
//             key={i}
//             className="bg-white shadow rounded-xl p-6 hover:shadow-lg hover:scale-[1.02] transition transform duration-300"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.2, duration: 0.5 }}
//           >
//             <div className="flex items-center gap-3 mb-3">
//               {feature.icon}
//               <h3 className="text-xl font-semibold">{feature.title}</h3>
//             </div>
//             <p className="text-gray-600">{feature.desc}</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* FAQ Section */}
//       <motion.div
//         className="bg-gray-100 border-l-4 border-blue-500 rounded p-6"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 0.6 }}
//       >
//         <h2 className="text-lg font-semibold mb-4">❓ Frequently Asked Questions</h2>
//         <details className="mb-3">
//           <summary className="cursor-pointer font-medium">
//             How does AI optimize signals?
//           </summary>
//           <p className="mt-2 text-gray-700">
//             It analyzes live traffic data and dynamically adjusts light
//             durations to minimize waiting time at intersections.
//           </p>
//         </details>
//         <details className="mb-3">
//           <summary className="cursor-pointer font-medium">
//             What data sources are used?
//           </summary>
//           <p className="mt-2 text-gray-700">
//             IoT sensors, traffic cameras, GPS data, and historical traffic
//             trends.
//           </p>
//         </details>
//         <details>
//           <summary className="cursor-pointer font-medium">
//             Is this scalable for smart cities?
//           </summary>
//           <p className="mt-2 text-gray-700">
//             Yes, the system is designed to integrate with existing city
//             infrastructure and expand as needed.
//           </p>
//         </details>
//       </motion.div>
//     </div>
//   );
// };

// export default About;
import React from "react";
import { motion } from "framer-motion";
import { Brain, Map, BarChart3, TrafficCone } from "lucide-react";
import LandingPageNavbar from "../components/LandingPageNavbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen">
      <LandingPageNavbar/>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-16 mt-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ℹ️ About Traffic Saathi
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
           Our AI-powered traffic management system is designed to optimize traffic signal timings, reduce congestion, and improve urban mobility. By leveraging real-time data from IoT sensors and traffic cameras, the system predicts bottlenecks and adjusts signals intelligently.
          </motion.p>
        </div>
      </section>

      <div className="p-6 md:p-10 max-w-6xl mx-auto">
        {/* Who We Are */}
        <section className="mb-16 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Who We Are
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
            We are a team of innovators, engineers, and policymakers working
            towards building <strong>smarter cities</strong>. Our mission is to
            transform how traffic is managed across India by leveraging{" "}
            <strong>AI, IoT sensors, and predictive analytics</strong> to create
            safer, greener, and more efficient roads.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 text-center text-gray-900">
            Core Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "🚦 Smart Signals",
                desc: "AI adjusts signal timings dynamically to reduce waiting time and keep traffic flowing smoothly.",
                icon: <TrafficCone className="w-8 h-8 text-blue-500" />,
              },
              {
                title: "📊 Real-time Analytics",
                desc: "Live monitoring dashboard with metrics like vehicle counts, congestion, and violation stats.",
                icon: <BarChart3 className="w-8 h-8 text-green-500" />,
              },
              {
                title: "🧠 Machine Learning",
                desc: "Reinforcement learning models predict traffic patterns and continuously improve efficiency.",
                icon: <Brain className="w-8 h-8 text-purple-500" />,
              },
              {
                title: "🌍 Map Integration",
                desc: "Interactive maps visualize congestion hotspots, accident zones, and vehicle density.",
                icon: <Map className="w-8 h-8 text-red-500" />,
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="bg-white shadow rounded-xl p-6 hover:shadow-lg hover:scale-[1.02] transition transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            className="p-6 bg-blue-50 border border-blue-100 rounded-xl shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-700">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To revolutionize urban mobility by creating a sustainable,
              intelligent traffic ecosystem that enhances safety and reduces
              congestion nationwide.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-green-50 border border-green-100 rounded-xl shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-3 text-green-700">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To empower India’s cities with smart traffic systems that ensure
              faster emergency response, minimal congestion, and safer roads for
              every citizen.
            </p>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <motion.div
          className="bg-gray-100 border-l-4 border-blue-500 rounded p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="text-lg font-semibold mb-4">
            ❓ Frequently Asked Questions
          </h2>
          <details className="mb-3">
            <summary className="cursor-pointer font-medium">
              How does AI optimize signals?
            </summary>
            <p className="mt-2 text-gray-700">
              It analyzes live traffic data and dynamically adjusts light
              durations to minimize waiting time at intersections.
            </p>
          </details>
          <details className="mb-3">
            <summary className="cursor-pointer font-medium">
              What data sources are used?
            </summary>
            <p className="mt-2 text-gray-700">
              IoT sensors, traffic cameras, GPS data, and historical traffic
              trends.
            </p>
          </details>
          <details>
            <summary className="cursor-pointer font-medium">
              Is this scalable for smart cities?
            </summary>
            <p className="mt-2 text-gray-700">
              Yes, the system is designed to integrate with existing city
              infrastructure and expand as needed.
            </p>
          </details>
        </motion.div>
      </div>

      <Footer/>
    </div>
  );
};

export default About;
