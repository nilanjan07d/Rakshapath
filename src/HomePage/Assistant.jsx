import React from "react";
import { motion } from "framer-motion";
import { User, Send, Plus } from "lucide-react";

const Assistant = () => {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-stone-700">
        {/* Logo */}
        <img
          src="https://placehold.co/333x112"
          alt="Logo"
          className="h-16 w-auto"
        />

        {/* Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-xl font-semibold text-black">
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">Dashboard</span>
          <span className="cursor-pointer">Discover</span>
          <div className="px-4 py-1 rounded-lg bg-amber-500/90 cursor-pointer">
            Assistant
          </div>
          <span className="cursor-pointer">Report</span>
          <span className="cursor-pointer">Profile</span>
          <span className="cursor-pointer">Admin</span>
        </nav>

        {/* Register Button + User */}
        <div className="flex items-center space-x-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-500 text-white font-semibold text-lg px-6 py-2 rounded-xl"
          >
            Register Now
          </motion.button>
          <img
            src="https://placehold.co/50x50"
            alt="User"
            className="h-12 w-12 rounded-full"
          />
        </div>
      </header>

      {/* Side Panel */}
      <aside className="absolute top-[118px] left-0 w-80 h-full bg-amber-500/50 opacity-50 p-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 bg-amber-500 border-2 border-black rounded-full px-6 py-3 text-white text-xl font-moul"
        >
          <Plus size={22} className="text-white" /> New Chat
        </motion.button>

        <div className="mt-10 space-y-8">
          <div>
            <p className="uppercase text-xs font-poppins mb-2">Yesterday</p>
            <ul className="space-y-2 text-base font-poppins">
              <li className="flex items-center gap-2"><div className="w-5 h-5 bg-black" /> Platform Marketplace 101</li>
              <li className="flex items-center gap-2"><div className="w-5 h-5 bg-black" /> Give me a proposal for company name</li>
              <li className="flex items-center gap-2"><div className="w-5 h-5 bg-black" /> Can you write a short paragraph for</li>
              <li className="flex items-center gap-2"><div className="w-5 h-5 bg-black" /> Reasearch about ui ux</li>
            </ul>
          </div>

          <div>
            <p className="uppercase text-xs font-poppins mb-2">Last Week</p>
            <ul className="space-y-2 text-base font-poppins">
              <li className="flex items-center gap-2"><div className="w-5 h-5 bg-black" /> Platform Marketplace 101</li>
              <li className="flex items-center gap-2"><div className="w-5 h-5 bg-black" /> Give me a proposal for company name</li>
            </ul>
          </div>

          <div>
            <p className="uppercase text-xs font-poppins mb-2">Last Month</p>
            <ul className="space-y-2 text-base font-poppins">
              <li className="flex items-center gap-2"><div className="w-5 h-5 bg-black" /> Platform Marketplace 101</li>
            </ul>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-80 pt-24 px-6">
        <h1 className="text-5xl font-semibold mb-8">Ask Chatbot</h1>

        {/* Suggestions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-lg border border-orange-400"
          >
            <p className="text-stone-700 font-semibold">Come up with concepts</p>
            <p className="text-neutral-500 text-sm">for a retro style arcade game</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-lg border border-orange-400"
          >
            <p className="text-stone-700 font-semibold">Give me ideas</p>
            <p className="text-neutral-500 text-sm">for what to do with my kid’s art</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-lg border border-orange-400"
          >
            <p className="text-stone-700 font-semibold">Explain why popcorn pops</p>
            <p className="text-neutral-500 text-sm">to a kid who loves to watch in the microwave</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-lg border border-orange-400"
          >
            <p className="text-stone-700 font-semibold">Plan a trip</p>
            <p className="text-neutral-500 text-sm">to see the northern lights in Norway</p>
          </motion.div>
        </div>
      </main>

      {/* Chat Input */}
      <footer className="fixed bottom-0 left-80 right-0 bg-orange-100 flex items-center px-6 py-3 border-t border-red-300">
        <input
          type="text"
          placeholder="Send a message..."
          className="flex-1 bg-transparent text-orange-400 font-semibold placeholder-orange-400 focus:outline-none"
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="ml-4 bg-amber-500 p-3 rounded-md"
        >
          <Send className="text-white" size={20} />
        </motion.button>
      </footer>
    </div>
  );
};

export default Assistant;
