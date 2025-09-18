import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, MapPin, User, Phone, Info, ChevronRight, ChevronLeft,
  Home, BarChart3, Compass, Bot, FileText, Shield, Bell
} from 'lucide-react';

const Discover = ({ currentPath = "/discover" }) => {
  const [activeCategory, setActiveCategory] = useState('Safety Nearby');
  
  const categories = ['Safety Nearby', 'Explore Nearby', 'Stay/Dine Nearby'];
  
  const navItems = [
    { name: 'Home', path: '/home', icon: Home },
    { name: 'Dashboard', path: '/dashboard', icon: BarChart3 },
    { name: 'Discover', path: '/discover', icon: Compass },
    { name: 'Assistant', path: '/assistant', icon: Bot },
    { name: 'Report', path: '/report', icon: FileText },
    { name: 'Profile', path: '/profile', icon: User },
  ];
  
  const places = [
    {
      id: 1,
      title: 'Police Station',
      image: "https://images.unsplash.com/photo-1588268393007-068bc70a443d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: 'safety'
    },
    {
      id: 2,
      title: 'Hospital',
      image: "https://images.unsplash.com/photo-1588268393007-068bc70a443d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: 'safety'
    },
    {
      id: 3,
      title: 'Safe Zone',
      image: "https://images.unsplash.com/photo-1588268393007-068bc70a443d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: 'safety'
    },
    {
      id: 4,
      title: 'Fire Station',
      image: "https://images.unsplash.com/photo-1588268393007-068bc70a443d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: 'safety'
    },
    {
      id: 5,
      title: 'Emergency Clinic',
      image: "https://images.unsplash.com/photo-1588268393007-068bc70a443d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: 'safety'
    },
    {
      id: 6,
      title: 'Security Outpost',
      image: "https://images.unsplash.com/photo-1588268393007-068bc70a443d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: 'safety'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const PlaceCard = ({ place, index }) => (
    <motion.div
      variants={itemVariants}
      className="w-full bg-white rounded-3xl outline outline-3 outline-orange-400 outline-offset-[-3px] flex flex-col items-center gap-6 p-2 pt-2 pb-4"
    >
      <div className="w-full h-64 relative">
        <img 
          className="w-full h-64 object-cover rounded-3xl" 
          src={place.image} 
          alt={place.title} 
        />
        <div className="absolute top-3 left-3">
          <div className="w-4 h-4" />
        </div>
      </div>
      
      <div className="w-40 px-3.5 flex justify-between items-start">
        <div className="w-0 h-4" />
      </div>
      
      <div className="w-full flex justify-center items-center gap-4">
        <button className="flex-1 px-6 py-4 rounded-[50px] outline outline-2 outline-orange-400 outline-offset-[-2px] flex justify-center items-center gap-2 hover:bg-orange-50 transition-colors">
          <Phone size={16} />
          <span className="text-black text-sm font-medium">Contact</span>
        </button>
        <button className="flex-1 px-6 py-4 bg-orange-400 rounded-[50px] flex justify-center items-center gap-2 hover:bg-orange-500 transition-colors">
          <Info size={16} />
          <span className="text-white text-sm font-medium">Details</span>
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
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

      {/* Header Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="px-4 md:px-8 py-8"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-3xl md:text-5xl font-semibold text-center md:text-left text-gray-900 mb-4"
        >
          Discover Around You
        </motion.h1>
        
        <motion.div 
          variants={itemVariants}
          className="flex items-center gap-2 text-gray-600 text-xl md:text-4xl font-semibold mb-8"
        >
          <MapPin size={24} className="text-orange-400" />
          <span>Current Location: Delhi, New Delhi</span>
        </motion.div>

        {/* Search Bar */}
        <motion.div
            variants={itemVariants}
            className="w-full max-w-2xl mx-auto mb-8"
            >
            <div className="flex items-center bg-white border-2 border-orange-400 rounded-lg px-4 py-2 shadow-sm">
                <Search className="text-gray-500 mr-2" size={18} />
                <input
                type="text"
                placeholder="Search here"
                className="w-full text-sm md:text-base outline-none"
                />
            </div>
        </motion.div>

        {/* Category Selection */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-5xl mx-auto bg-black/10 rounded-2xl shadow-lg p-4 mb-12"
        >
          <div className="bg-orange-400 rounded-2xl p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-4 rounded-xl text-xl md:text-4xl font-bold transition-all ${
                    activeCategory === category
                      ? 'bg-white text-black shadow-lg'
                      : 'bg-transparent text-black hover:bg-orange-300'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Places Grid - All 6 boxes displayed together */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0"
        >
          {places.map((place, index) => (
            <motion.div
              key={place.id}
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <PlaceCard place={place} index={index} />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-4 text-center">
                {place.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Navigation */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
          <div className="grid grid-cols-4 gap-4">
            {['Home', 'Discover', 'Profile', 'More'].map((item) => (
              <button
                key={item}
                className="flex flex-col items-center text-xs text-gray-600 hover:text-orange-400 transition-colors"
              >
                <div className="w-6 h-6 mb-1 bg-gray-200 rounded-full" />
                {item}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Discover;