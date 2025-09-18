import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield, User, MapPin, AlertTriangle, Phone, MessageCircle,
  Settings, Sun, Wind, CloudRain, Eye, Thermometer, 
  Navigation, Home, BarChart3, Compass, Bot, FileText, 
  UserCheck, Bell
} from 'lucide-react';

const Dashboard = ({ currentPath = "/dashboard" }) => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/home', icon: Home },
    { name: 'Dashboard', path: '/dashboard', icon: BarChart3 },
    { name: 'Discover', path: '/discover', icon: Compass },
    { name: 'Assistant', path: '/assistant', icon: Bot },
    { name: 'Report', path: '/report', icon: FileText },
    { name: 'Profile', path: '/profile', icon: User },
  ];

  // Feature cards data
  const featureCards = [
    { icon: AlertTriangle, title: 'SOS Activation', color: 'bg-red-500' },
    { icon: Phone, title: 'Emergency Contacts', color: 'bg-white' },
    { icon: Shield, title: 'Safe Zone', color: 'bg-white' },
    { icon: MessageCircle, title: 'Ask Chatbot', color: 'bg-white' },
    { icon: Settings, title: 'Alert Settings', color: 'bg-white' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Header */}
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

      <div className="px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          {/* Left Column - Main Dashboard */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Dashboard Title */}
            <motion.div {...fadeInUp}>
              <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4">
                Safety Dashboard
              </h1>
              <div className="flex items-center gap-3 text-xl md:text-4xl text-gray-600 font-semibold">
                <MapPin className="w-6 h-6 md:w-8 md:h-8" />
                Current Location: Delhi, New Delhi
              </div>
            </motion.div>

            {/* Live Location Section */}
            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Navigation className="w-8 h-8 text-green-500" />
                <h2 className="text-2xl md:text-3xl font-bold">Live Location Active</h2>
              </div>
              
              {/* Map Container */}
              <div className="relative h-64 md:h-96 bg-gray-200 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100"></div>
                
                {/* Map Controls */}
                <div className="absolute top-3 left-3">
                  <motion.button 
                    className="bg-white px-3 py-1 rounded text-blue-600 text-sm font-medium shadow-md hover:shadow-lg transition-shadow"
                    whileHover={{ scale: 1.05 }}
                  >
                    View larger map
                  </motion.button>
                </div>
                
                {/* Location Marker */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <div className="w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
                
                {/* Zoom Controls */}
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <button className="block w-10 h-10 flex items-center justify-center hover:bg-gray-50 border-b border-gray-200">
                      +
                    </button>
                    <button className="block w-10 h-10 flex items-center justify-center hover:bg-gray-50">
                      −
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Weather & Alerts */}
          <div className="space-y-6">
            
            {/* Live Alerts */}
            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-red-500" />
                <h2 className="text-2xl md:text-3xl font-bold">Live Alerts</h2>
              </div>
              
              {/* UV & AQI Alert */}
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 flex flex-col sm:flex-row gap-4 text-white">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full"></div>
                  <div>
                    <span className="text-lg">UV: </span>
                    <span className="text-red-400 font-bold text-lg">12 (Severe)</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-6 h-6" />
                  <div>
                    <span className="text-lg">AQI: </span>
                    <span className="font-bold text-lg">150 (Good)</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Weather Cards */}
            <div className="space-y-4">
              
              {/* Temperature Card */}
              <motion.div 
                className="bg-gradient-to-r from-amber-100 to-amber-200 rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                      <Sun className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-light text-gray-800">Temperature</div>
                    <div className="text-4xl font-medium text-gray-900">
                      45<span className="text-4xl font-semibold">°C</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Wind Card */}
              <motion.div 
                className="bg-gradient-to-r from-sky-100 to-sky-200 rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-sky-500 rounded-full flex items-center justify-center">
                      <Wind className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-light text-gray-800">Wind</div>
                    <div className="text-4xl font-medium text-gray-900">22km/hr</div>
                  </div>
                </div>
              </motion.div>

              {/* Rainfall Card */}
              <motion.div 
                className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl p-6 shadow-lg text-white"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center">
                      <CloudRain className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-light">Rainfall</div>
                    <div className="text-4xl font-medium">12mm/hr</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {featureCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={index}
                className={`${card.color} ${card.color === 'bg-red-500' ? 'text-white' : 'text-gray-900'} 
                  rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    card.color === 'bg-red-500' 
                      ? 'bg-white/20' 
                      : 'bg-gray-100'
                  }`}>
                    <IconComponent className={`w-8 h-8 ${
                      card.color === 'bg-red-500' 
                        ? 'text-white' 
                        : 'text-gray-700'
                    }`} />
                  </div>
                  <h3 className="text-xl font-bold leading-tight">{card.title}</h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;