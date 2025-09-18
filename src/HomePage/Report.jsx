import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  LayoutDashboard,
  Compass,
  MessageSquare,
  FileText,
  User,
  ShieldAlert,
  UploadCloud,
} from "lucide-react";

const Report = () => {
  return (
    <div className="w-full min-h-screen bg-white overflow-hidden relative">
      {/* Navbar */}
      <header className="w-full flex items-center justify-between px-6 py-4 border-b border-gray-300">
        <img
          src="https://placehold.co/333x112"
          alt="Logo"
          className="w-40 h-20 object-contain"
        />
        <nav className="hidden md:flex items-center gap-8 font-semibold text-black text-lg">
          <a href="#" className="flex items-center gap-2 hover:text-amber-600">
            <Home size={20} /> Home
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-amber-600">
            <LayoutDashboard size={20} /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-amber-600">
            <Compass size={20} /> Discover
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-amber-600">
            <MessageSquare size={20} /> Assistant
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-amber-600">
            <FileText size={20} /> Report
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-amber-600">
            <User size={20} /> Profile
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-amber-600">
            <ShieldAlert size={20} /> Admin
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="bg-amber-500 px-4 py-2 rounded-lg font-semibold text-white shadow">
            P
          </button>
          <img
            src="https://placehold.co/50x50"
            alt="avatar"
            className="w-12 h-12 rounded-full"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 md:px-16 py-10">
        <h1 className="text-5xl font-semibold mb-4">Report an Incident</h1>
        <p className="text-gray-600 text-2xl max-w-3xl">
          Help keep fellow tourists safe by reporting safety concerns
        </p>
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
            <ShieldAlert className="text-amber-500" /> Incident Details
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block text-lg mb-2">Incident Title*</label>
              <input
                type="text"
                className="w-full p-3 border-2 border-amber-500 rounded-lg shadow"
              />
            </div>

            <div>
              <label className="block text-lg mb-2">Location*</label>
              <input
                type="text"
                className="w-full p-3 border-2 border-amber-500 rounded-lg shadow"
              />
            </div>

            <div>
              <label className="block text-lg mb-2">Detailed Description*</label>
              <textarea
                rows="4"
                className="w-full p-3 border-2 border-amber-500 rounded-lg shadow"
              ></textarea>
            </div>

            <div>
              <label className="block text-lg mb-2">
                Photo/Evidence (Optional)
              </label>
              <div className="border-4 border-dashed border-amber-500 rounded-xl p-10 text-center">
                <UploadCloud className="mx-auto text-amber-500 w-12 h-12" />
                <p className="text-lg font-semibold mt-2">Upload Files</p>
                <p className="text-gray-500">Drop a file here</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex-1 bg-amber-500 text-white py-3 rounded-lg font-bold shadow"
              >
                Submit Report
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex-1 border-2 border-amber-500 py-3 rounded-lg font-bold shadow"
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
            <FileText className="text-amber-500" /> Recent Reports
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
              className="bg-amber-100/50 rounded-xl p-4 mb-4 shadow"
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
                    : "bg-amber-500 text-white"
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
