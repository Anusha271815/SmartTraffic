import { motion } from "framer-motion";
import { FaChartLine, FaChartBar, FaChartPie, FaArrowUp, FaDownload } from "react-icons/fa";
import { TrafficChart } from "../../charts/TrafficChart";
import { AccidentChart } from "../../charts/AccidentChart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { NewsUpdate } from "../Dashboard/ui/newsUpdate";

const Analytics = () => {
  const analyticsCards = [
    {
      title: "Peak Hours Analysis",
      value: "8AM - 10AM",
      subtitle: "Highest traffic volume",
      icon: FaChartLine,
      color: "text-blue-500"
    },
    {
      title: "Average Speed",
      value: "45.2 km/h",
      subtitle: "+5.4% from last month",
      icon: FaArrowUp,
      color: "text-green-500"
    },
    {
      title: "Traffic Efficiency",
      value: "78%",
      subtitle: "Improved by 12%",
      icon: FaChartBar,
      color: "text-purple-500"
    },
    {
      title: "Violation Rate",
      value: "2.3%",
      subtitle: "Decreased by 0.8%",
      icon: FaChartPie,
      color: "text-orange-500"
    }
  ];

  const timeRanges = [
    "Last 24 Hours",
    "Last 7 Days", 
    "Last 30 Days",
    "Last 3 Months",
    "Last Year"
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Traffic Analytics
              </h1>
              <p className="text-muted-foreground">
                Advanced traffic data analysis and insights
              </p>
            </div>

            {/* Filters & Export */}
            <div className="flex gap-3">
              <div className="w-52 rounded-xl shadow-md bg-white/90 backdrop-blur">
                <Select defaultValue="Last 7 Days">
                  <SelectTrigger
                    className="w-full rounded-xl bg-gray-50 px-4 py-2 text-sm font-medium shadow-sm 
                               border-0 focus:ring-0 focus:ring-offset-0 focus:outline-none 
                               hover:bg-gray-100 transition"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl shadow-lg border-0 bg-white">
                    {timeRanges.map((range) => (
                      <SelectItem
                        key={range}
                        value={range}
                        className="relative cursor-pointer pl-8 pr-3 py-2 text-sm rounded-lg hover:bg-gray-100 focus:bg-gray-100 data-[state=checked]:bg-gray-50">
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="shadow-md bg-white/90 backdrop-blur rounded-xl">
                <button className="flex items-center gap-2 w-full h-full px-4 py-2 rounded-lg 
                                    bg-gradient-to-r from-blue-600 to-blue-700 text-white 
                                    text-sm font-medium shadow-md hover:from-blue-700 hover:to-blue-800 
                                    active:scale-95 transition-all duration-200">
                  <FaDownload className="text-xs" />
                  Export Data
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Analytics Cards */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {analyticsCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="p-6 bg-white/90 backdrop-blur-sm shadow-sm rounded-xl hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <card.icon className={`text-2xl ${card.color}`} />
                  <FaChartLine size={14} className="text-gray-400" />
                </div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">
                  {card.title}
                </h3>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {card.value}
                </div>
                <p className="text-sm text-muted-foreground">
                  {card.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/90 backdrop-blur-sm shadow-sm rounded-xl hover:shadow-lg transition-all h-max">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <TrafficChart />
            </motion.div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm shadow-sm rounded-xl hover:shadow-lg transition-all h-max">
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <AccidentChart />
            </motion.div>
          </div>
        </div>

        {/* Detailed Analytics */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Traffic Flow */}
          <div className="p-6 bg-white/90 backdrop-blur-sm shadow-sm rounded-xl">
            <h3 className="text-lg font-semibold mb-4">Traffic Flow Analysis</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Inbound Traffic</span>
                <span className="font-medium">65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "65%" }}></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Outbound Traffic</span>
                <span className="font-medium">35%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-400 h-2 rounded-full" style={{ width: "35%" }}></div>
              </div>
            </div>
          </div>

          {/* Route Efficiency */}
          <div className="p-6 bg-white/90 backdrop-blur-sm shadow-sm rounded-xl">
            <h3 className="text-lg font-semibold mb-4">Route Efficiency</h3>
            <div className="space-y-3">
              {["Main Street", "Highway 101", "Downtown Ave", "Airport Road"].map((route, index) => (
                <div key={route} className="flex justify-between items-center">
                  <span className="text-sm">{route}</span>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      index === 0 ? "bg-green-500" : 
                      index === 1 ? "bg-yellow-500" : 
                      index === 2 ? "bg-orange-500" : "bg-red-500"
                    }`}></div>
                    <span className="text-sm font-medium">
                      {index === 0 ? "90%" : index === 1 ? "75%" : index === 2 ? "60%" : "45%"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Predictions */}
          <div className="p-6 bg-white/90 backdrop-blur-sm shadow-sm rounded-xl">
            <h3 className="text-lg font-semibold mb-4">Traffic Predictions</h3>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-blue-50 hover:scale-[1.02] transition-transform">
                <div className="text-sm font-medium text-blue-700">Next Hour</div>
                <div className="text-xs">Expected increase: <span className="font-semibold text-blue-600">+15%</span></div>
              </div>
              <div className="p-3 rounded-lg bg-yellow-50 hover:scale-[1.02] transition-transform">
                <div className="text-sm font-medium text-yellow-700">Evening Rush</div>
                <div className="text-xs">Peak at <span className="font-semibold text-yellow-600">5:30 PM</span></div>
              </div>
              <div className="p-3 rounded-lg bg-green-50 hover:scale-[1.02] transition-transform">
                <div className="text-sm font-medium text-green-700">Weekend</div>
                <div className="text-xs">Traffic <span className="font-semibold text-green-600">25% lower</span></div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* News Section */}
      <div className="mt-12">
        <NewsUpdate />
      </div>
    </div>
  );
};

export default Analytics;
