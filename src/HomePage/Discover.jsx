import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, User, Phone, Info, ChevronRight, ChevronLeft } from 'lucide-react';

const Discover = () => {
  const [activeCategory, setActiveCategory] = useState('Safety Nearby');
  const [currentPage, setCurrentPage] = useState(0);

  const categories = ['Safety Nearby', 'Explore Nearby', 'Stay/Dine Nearby'];
  
  const places = [
    {
      id: 1,
      title: 'Police Station',
      image: 'https://placehold.co/379x256',
      type: 'safety'
    },
    {
      id: 2,
      title: 'Hospital',
      image: 'https://placehold.co/379x256',
      type: 'safety'
    },
    {
      id: 3,
      title: 'Safe Zone',
      image: 'https://placehold.co/379x256',
      type: 'safety'
    },
    {
      id: 4,
      title: 'Police Station',
      image: 'https://placehold.co/379x256',
      type: 'safety'
    },
    {
      id: 5,
      title: 'Hospital',
      image: 'https://placehold.co/379x256',
      type: 'safety'
    },
    {
      id: 6,
      title: 'Safe Zone',
      image: 'https://placehold.co/379x256',
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
      className="w-full md:w-96 bg-white rounded-3xl outline outline-3 outline-amber-500 outline-offset-[-3px] flex flex-col items-center gap-6 p-2 pt-2 pb-4"
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
        <button className="flex-1 px-6 py-4 rounded-[50px] outline outline-2 outline-amber-500 outline-offset-[-2px] flex justify-center items-center gap-2 hover:bg-amber-50 transition-colors">
          <Phone size={16} />
          <span className="text-black text-sm font-medium">Contact</span>
        </button>
        <button className="flex-1 px-6 py-4 bg-amber-500 rounded-[50px] flex justify-center items-center gap-2 hover:bg-amber-600 transition-colors">
          <Info size={16} />
          <span className="text-white text-sm font-medium">Details</span>
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="w-full px-4 md:px-8 py-4 flex justify-between items-center relative">
        <motion.img 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-40 h-10 md:w-80 md:h-28" 
          src="https://placehold.co/333x112" 
          alt="Logo" 
        />
        
        <div className="hidden lg:flex items-center gap-8">
          {['Home', 'Dashboard', 'Discover', 'Assistant', 'Report', 'Profile', 'Admin'].map((item) => (
            <motion.a
              key={item}
              href="#"
              className="text-black text-xl font-semibold hover:text-amber-500 transition-colors"
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex items-center space-x-2 bg-amber-500 text-white px-4 py-2 rounded-lg"
        >
          <User size={20} />
          <span>Register Now</span>
        </motion.button>
        
        <img 
          className="w-8 h-8 md:w-12 md:h-12" 
          src="https://placehold.co/50x50" 
          alt="Profile" 
        />
      </nav>

      {/* Header Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="px-4 md:px-8 py-8"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-3xl md:text-5xl font-semibold text-center md:text-left text-black mb-4"
        >
          Discover Around You
        </motion.h1>
        
        <motion.div 
          variants={itemVariants}
          className="flex items-center gap-2 text-black/60 text-xl md:text-4xl font-semibold mb-8"
        >
          <MapPin size={24} className="text-amber-500" />
          <span>Current Location: Delhi, New Delhi</span>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          variants={itemVariants}
          className="relative w-full max-w-4xl mx-auto mb-12"
        >
          <div className="absolute inset-0 bg-amber-500 border rounded-lg transform rotate-1" />
          <div className="relative bg-white border border-gray-300 rounded-lg p-4">
            <div className="flex items-center">
              <Search className="text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Search here"
                className="w-full text-sm md:text-base outline-none"
              />
            </div>
          </div>
        </motion.div>

        {/* Category Selection */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-5xl mx-auto bg-black/10 rounded-2xl shadow-lg p-4 mb-12"
        >
          <div className="bg-amber-500 rounded-2xl p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-4 rounded-xl text-xl md:text-4xl font-bold transition-all ${
                    activeCategory === category
                      ? 'bg-white text-black shadow-lg'
                      : 'bg-transparent text-black hover:bg-amber-400'
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

        {/* Places Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0"
        >
          {places.slice(currentPage * 3, (currentPage + 1) * 3).map((place, index) => (
            <motion.div
              key={place.id}
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <PlaceCard place={place} index={index} />
              <h3 className="text-xl md:text-2xl font-semibold text-black mt-4 text-center">
                {place.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center gap-4 mt-12"
        >
          <button
            onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          
          <span className="text-lg font-semibold">
            Page {currentPage + 1} of {Math.ceil(places.length / 3)}
          </span>
          
          <button
            onClick={() => setCurrentPage(prev => Math.min(Math.ceil(places.length / 3) - 1, prev + 1))}
            disabled={currentPage === Math.ceil(places.length / 3) - 1}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </motion.div>
      </motion.div>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="grid grid-cols-4 gap-4">
          {['Home', 'Discover', 'Profile', 'More'].map((item) => (
            <button
              key={item}
              className="flex flex-col items-center text-xs text-gray-600 hover:text-amber-500 transition-colors"
            >
              <div className="w-6 h-6 mb-1 bg-gray-200 rounded-full" />
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;