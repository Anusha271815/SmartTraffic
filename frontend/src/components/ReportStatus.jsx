import React, { useState, useRef, useEffect } from "react";
import Url from "../charts/mapurl";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { motion, AnimatePresence } from "framer-motion";

// Utility: animated number counter
const AnimatedCounter = ({ value }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = value / 40; // adjust for speed
    const interval = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);
    return () => clearInterval(interval);
  }, [value]);

  return <span>{count}</span>;
};

const ReportStatus = () => {
  const [cityData, setCityData] = useState({
    Location: "Civil Line",
    totalVehicles: 1250,
    alert: "High traffic detected at Civil Lines",
    violations: {
      speedLimit: 75,
      wrongParking: 45,
      signalJump: 90
    },
    vehicleTypes: {
      Cars: 450,
      Bikes: 300,
      Trucks: 100
    }
  });

  const [center] = useState({ lat: 25.4358, lng: 81.8463 });
  const [isMapFull, setIsMapFull] = useState(false);
  const Zoom_level = 20;
  const MapRef = useRef();

 const Dropdown = ({ options = [], labelText = "", value = "", onChange }) => {
  return (
    <div>
      {labelText && <label className="block font-semibold mb-2">{labelText}</label>}
      <select
      className="rounded-lg rounded px-3 py-2 font-bold w-full 
        hover:bg-gray-100 hover:border-blue-500 
        transition-all duration-200 ease-in-out 
        border-2 border-gray-200 focus:outline-none focus:border-blue-600"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      >
      <option value="">-- Select --</option>
      {options.map((opt, i) => (
        <option key={i} value={opt}>
        {opt}
        </option>
      ))}
      </select>
    </div>
  );
};


  const location_name = [
  "Civil Line",
  "Naini",
  "Chungi",
  "Katra",
  "George Town",
  "MG Marg",
  "Lal Bahadur Shastri Marg",
  "Mall Road",
  "Dariyabad",
  "Jhunsi",
  "Phoolpur",
  "Handia",
  "Bamrauli",
  "Rambagh",
  "Ashok Nagar",
  "Sumerpur",
  "Karari",
  "Etmadpur",
  "Karchhana",
  "Soraon",
  "Karontha",
  "Robertsganj",
  "Akbarpur",
  "Rambagh Road",
  "Shastri Nagar",
  "Tagore Town",
  "Rajatalab",
  "Khusro Bagh",
  "Daraganj",
  "Sangam"
];
const [selectedlocation, setSelectedlocation] = useState("");

  return (
    <div className="p-4 md:p-6 space-y-6 w-full">
     { /* Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between md:items-center gap-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold">City Overview</h2>
            <Dropdown
              options={location_name}
              labelText={"Select Location"}
              value={selectedlocation}
              onChange={(val) => {
                setSelectedlocation(val);
                console.log("country changed ->", val);
              }}
            />
        </motion.div>

        {/* Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* Vehicles Tracked */}
        <motion.div
          whileHover={{ scale: 1.08, rotate: 1 }}
          whileTap={{ scale: 0.97 }}
          className="bg-white shadow rounded-xl p-4"
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <h3 className="text-lg font-semibold">Vehicles Tracked</h3>
          <p className="text-3xl font-bold text-blue-600">
            <AnimatedCounter value={cityData.totalVehicles} />
          </p>
        </motion.div>

        {/* Alert */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.97 }}
          className="bg-white shadow p-4 rounded-xl"
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
        >
          <h3 className="text-lg font-semibold text-red-700">ALERT</h3>
          <motion.p
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
            className="font-medium"
          >
            {cityData.alert}
          </motion.p>
        </motion.div>

        {/* Violations */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="bg-white shadow rounded-xl p-4"
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
        >
          <h3 className="text-lg font-semibold mb-3">Top Violations</h3>
          <div className="space-y-3">
            {Object.entries(cityData.violations).map(([key, value]) => {
              let colorClass = "bg-green-500";
              if (value > 80) colorClass = "bg-red-500";
              else if (value > 50) colorClass = "bg-yellow-500";

              return (
                <div key={key}>
                  <p className="capitalize">{key.replace(/([A-Z])/g, " $1")}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`${colorClass} h-2 rounded-full`}
                      initial={{ x: "-100%" }}
                      animate={{ x: 0 }}
                      transition={{ duration: 1 }}
                      style={{ width: `${value}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{value}%</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow rounded-xl p-6 lg:col-span-2 cursor-pointer"
          onClick={() => setIsMapFull(true)}
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
        >
          <h3 className="text-lg font-semibold mb-2">Traffic Density Map</h3>
          <div className="w-full h-[350px] rounded-lg overflow-hidden">
            <MapContainer
              center={center}
              zoom={Zoom_level}
              ref={MapRef}
              zoomControl={true}
              className="h-[350px] w-full"
            >
              <TileLayer
                url={Url.maptiler.url}
                attribution={Url.maptiler.attribution}
              />
            </MapContainer>
          </div>
        </motion.div>

        {/* Breakdown */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="bg-white shadow rounded-xl p-4"
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
        >
          <h3 className="text-lg font-semibold mb-3">Vehicle Breakdown</h3>
          <motion.ul
            className="space-y-2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {Object.entries(cityData.vehicleTypes).map(([type, value], i) => (
              <motion.li
                key={i}
                variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
              >
                {type}: <strong>{value}</strong>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>

      {/* Fullscreen Map */}
      <AnimatePresence>
        {isMapFull && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white rounded-xl w-[95%] h-[90%] overflow-hidden"
              initial={{ y: "100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "100vh" }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <button
                onClick={() => setIsMapFull(false)}
                className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded"
              >
                ✕
              </button>
              <MapContainer center={center} zoom={Zoom_level} className="w-full h-full">
                <TileLayer
                  url={Url.maptiler.url}
                  attribution={Url.maptiler.attribution}
                />
              </MapContainer>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ReportStatus;
