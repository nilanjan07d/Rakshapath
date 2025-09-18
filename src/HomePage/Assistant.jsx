import React from "react";
import { motion } from "framer-motion";
import { 
  User, Send, Plus, Home, BarChart3, Compass, Bot, 
  FileText, Shield, Bell 
} from "lucide-react";

const Assistant = ({ currentPath = "/assistant" }) => {
  // Navigation items
  const navItems = [
    { name: 'Home', path: '/home', icon: Home },
    { name: 'Dashboard', path: '/dashboard', icon: BarChart3 },
    { name: 'Discover', path: '/discover', icon: Compass },
    { name: 'Assistant', path: '/assistant', icon: Bot },
    { name: 'Report', path: '/report', icon: FileText },
    { name: 'Profile', path: '/profile', icon: User },
  ];

  return (
    <div className="relative w-full min-h-screen bg-gray-50 overflow-hidden">
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

      {/* Side Panel */}
      <aside className="absolute top-[88px] left-0 w-80 h-full bg-orange-400/20 p-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 bg-orange-400 border-2 border-gray-700 rounded-full px-6 py-3 text-white text-xl font-medium"
        >
          <Plus size={22} className="text-white" /> New Chat
        </motion.button>

        <div className="mt-10 space-y-8">
          <div>
            <p className="uppercase text-xs font-medium mb-2 text-gray-600">Yesterday</p>
            <ul className="space-y-2 text-base">
              <li className="flex items-center gap-2 text-gray-700"><div className="w-3 h-3 bg-gray-400 rounded-full" /> Platform Marketplace 101</li>
              <li className="flex items-center gap-2 text-gray-700"><div className="w-3 h-3 bg-gray-400 rounded-full" /> Give me a proposal for company name</li>
              <li className="flex items-center gap-2 text-gray-700"><div className="w-3 h-3 bg-gray-400 rounded-full" /> Can you write a short paragraph for</li>
              <li className="flex items-center gap-2 text-gray-700"><div className="w-3 h-3 bg-gray-400 rounded-full" /> Research about ui ux</li>
            </ul>
          </div>

          <div>
            <p className="uppercase text-xs font-medium mb-2 text-gray-600">Last Week</p>
            <ul className="space-y-2 text-base">
              <li className="flex items-center gap-2 text-gray-700"><div className="w-3 h-3 bg-gray-400 rounded-full" /> Platform Marketplace 101</li>
              <li className="flex items-center gap-2 text-gray-700"><div className="w-3 h-3 bg-gray-400 rounded-full" /> Give me a proposal for company name</li>
            </ul>
          </div>

          <div>
            <p className="uppercase text-xs font-medium mb-2 text-gray-600">Last Month</p>
            <ul className="space-y-2 text-base">
              <li className="flex items-center gap-2 text-gray-700"><div className="w-3 h-3 bg-gray-400 rounded-full" /> Platform Marketplace 101</li>
            </ul>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-80 pt-12 px-6">
        <motion.h1 
          className="text-5xl font-semibold mb-8 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Ask Chatbot
        </motion.h1>

        {/* Suggestions Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-lg border border-orange-400 bg-white shadow-sm"
          >
            <p className="text-gray-700 font-semibold">Come up with concepts</p>
            <p className="text-gray-500 text-sm">for a retro style arcade game</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-lg border border-orange-400 bg-white shadow-sm"
          >
            <p className="text-gray-700 font-semibold">Give me ideas</p>
            <p className="text-gray-500 text-sm">for what to do with my kid's art</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-lg border border-orange-400 bg-white shadow-sm"
          >
            <p className="text-gray-700 font-semibold">Explain why popcorn pops</p>
            <p className="text-gray-500 text-sm">to a kid who loves to watch in the microwave</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-lg border border-orange-400 bg-white shadow-sm"
          >
            <p className="text-gray-700 font-semibold">Plan a trip</p>
            <p className="text-gray-500 text-sm">to see the northern lights in Norway</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-lg border border-orange-400 bg-white shadow-sm"
          >
            <p className="text-gray-700 font-semibold">Help with safety tips</p>
            <p className="text-gray-500 text-sm">for traveling in new destinations</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-lg border border-orange-400 bg-white shadow-sm"
          >
            <p className="text-gray-700 font-semibold">Emergency preparedness</p>
            <p className="text-gray-500 text-sm">checklist for tourists</p>
          </motion.div>
        </motion.div>
      </main>

      {/* Chat Input */}
      <footer className="fixed bottom-0 left-80 right-0 bg-orange-50 flex items-center px-6 py-3 border-t border-orange-200">
        <input
          type="text"
          placeholder="Send a message..."
          className="flex-1 bg-transparent text-orange-500 font-medium placeholder-orange-400 focus:outline-none"
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="ml-4 bg-orange-400 p-3 rounded-md hover:bg-orange-500 transition-colors"
        >
          <Send className="text-white" size={20} />
        </motion.button>
      </footer>
    </div>
  );
};

export default Assistant;