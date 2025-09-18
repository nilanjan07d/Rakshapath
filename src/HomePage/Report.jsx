import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  BarChart3,
  Compass,
  Bot,
  FileText,
  User,
  ShieldAlert,
  UploadCloud,
  Shield,
  Bell,
} from "lucide-react";

const Report = ({ currentPath = "/report" }) => {
  const navItems = [
    { name: 'Home', path: '/home', icon: Home },
    { name: 'Dashboard', path: '/dashboard', icon: BarChart3 },
    { name: 'Discover', path: '/discover', icon: Compass },
    { name: 'Assistant', path: '/assistant', icon: Bot },
    { name: 'Report', path: '/report', icon: FileText },
    { name: 'Profile', path: '/profile', icon: User },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 overflow-hidden relative">
      {/* Header - Updated to match Dashboard */}
      <motion.header 
        className="bg-white shadow-sm sticky top-0 z-50 px-4 md:px-16 py-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-orange-400 rounded-lg flex items-center justify-center mr-3">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900">RakshaPath</div>
              <div className="text-xs text-gray-600 font-semibold">YOUR SAFE WAY</div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <motion.a
                  key={item.name}
                  href={item.path}
                  className={`text-gray-700 hover:text-orange-400 font-medium transition-colors px-3 py-2 rounded-lg flex items-center gap-2 ${
                    currentPath === item.path ? 'bg-orange-400 text-white' : ''
                  }`}
                  whileHover={{ y: -2 }}
                >
                  <IconComponent className="w-4 h-4" />
                  {item.name}
                </motion.a>
              );
            })}
          </div>

          {/* Notification Icon */}
          <motion.div
            className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bell className="w-6 h-6 text-gray-700" />
          </motion.div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="px-6 md:px-16 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-semibold mb-4 text-gray-900">Report an Incident</h1>
          <p className="text-gray-600 text-2xl max-w-3xl">
            Help keep fellow tourists safe by reporting safety concerns
          </p>
        </motion.div>
      </section>

      <main className="px-6 md:px-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <ShieldAlert className="text-orange-400" /> Incident Details
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block text-lg mb-2">Incident Title*</label>
              <input
                type="text"
                className="w-full p-3 border-2 border-orange-400 rounded-lg shadow"
              />
            </div>

            <div>
              <label className="block text-lg mb-2">Location*</label>
              <input
                type="text"
                className="w-full p-3 border-2 border-orange-400 rounded-lg shadow"
              />
            </div>

            <div>
              <label className="block text-lg mb-2">Detailed Description*</label>
              <textarea
                rows="4"
                className="w-full p-3 border-2 border-orange-400 rounded-lg shadow"
              ></textarea>
            </div>

            <div>
              <label className="block text-lg mb-2">
                Photo/Evidence (Optional)
              </label>
              <div className="border-4 border-dashed border-orange-400 rounded-xl p-10 text-center">
                <UploadCloud className="mx-auto text-orange-400 w-12 h-12" />
                <p className="text-lg font-semibold mt-2">Upload Files</p>
                <p className="text-gray-500">Drop a file here</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex-1 bg-orange-400 text-white py-3 rounded-lg font-bold shadow"
              >
                Submit Report
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex-1 border-2 border-orange-400 py-3 rounded-lg font-bold shadow"
              >
                Share with Tourists
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Recent Reports */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <FileText className="text-orange-400" /> Recent Reports
          </h2>

          {[
            { title: "Fake Taxi Overcharging", location: "New Delhi", time: "2 hours ago", priority: "Low" },
            { title: "Fake Taxi Overcharging", location: "New Delhi", time: "2 hours ago", priority: "Medium" },
            { title: "Fake Taxi Overcharging", location: "New Delhi", time: "2 hours ago", priority: "High" },
            { title: "Fake Taxi Overcharging", location: "New Delhi", time: "2 hours ago", priority: "Low" },
          ].map((report, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-orange-50 rounded-xl p-4 mb-4 shadow"
            >
              <h3 className="font-semibold text-lg">{report.title}</h3>
              <div className="flex justify-between items-center text-sm mt-2">
                <span>{report.location}</span>
                <span>{report.time}</span>
              </div>
              <span
                className={`mt-2 inline-block px-3 py-1 text-xs font-bold rounded-full ${
                  report.priority === "High"
                    ? "bg-red-500 text-white"
                    : report.priority === "Medium"
                    ? "bg-yellow-400 text-black"
                    : "bg-orange-400 text-white"
                }`}
              >
                {report.priority} Priority
              </span>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Report;