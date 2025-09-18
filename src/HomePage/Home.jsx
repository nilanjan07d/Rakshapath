import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Bell, User, MapPin, MessageCircle, Navigation, 
  Shield, Download, CheckCircle, Facebook, 
  Instagram, Twitter, Mail, UserPlus, 
  CheckCircle2, Bot, AlertTriangle
} from 'lucide-react';

const RakshaPathHome = () => {
  const [activeFilter, setActiveFilter] = useState('Coastal');

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

  // Data arrays
  const navLinks = ['Home', 'Dashboard', 'Discover', 'Assistant', 'Report', 'Profile'];
  
  const features = [
    {
      icon: "https://cdn-icons-png.freepik.com/256/17956/17956448.png",
      title: "Get Your Tourist ID",
      description: "Start your verification process in minutes and get your secure Digital Tourist Card."
    },
    {
      icon: "https://mbm-book.com/wp-content/uploads/elementor/thumbs/compass-1-pn18zgkbj9ovcfds2yn9li2c1p9xdanjd117bltcv0.png",
      title: "Discover Nearby Services",
      description: "Find hospitals, police stations, ATMs, and safe tourist zones instantly."
    },
    {
      icon: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRryHsVnf7FAC_LRTSjpHbos7QCYytKs2ylK8b01Qg9eVoYnW5T",
      title: "Ask SafarBot (AI Assistant)",
      description: "Need help anytime? Chat with our AI for safety tips, local info, emergency contacts, or travel guidance."
    },
    {
      icon: "https://images.squarespace-cdn.com/content/v1/61153a53a79dc8150463b9d0/1632596441151-1N9LC16N4ZBX9TU0W5D2/HomeRun-services-reports.png",
      title: "Report an Incident",
      description: "Faced a problem? Report theft, fraud, or safety concerns through the app and get instant support."
    }
  ];

  const safetyUpdates = [
    {
      image: "https://static.india.com/wp-content/uploads/2022/08/bengaluru-rain-4.jpg",
      date: "September 16, 2025 - Tips & Tricks",
      title: "Heavy rainfall has caused waterlogging in several parts of the city.",
      location: "Bangalore",
      comments: 25
    },
    {
      image: "https://arunachalobserver.org/wp-content/uploads/2022/05/cyclone-Fani-and-Amphen.jpg",
      date: "March 10, 2025 - Tips & Tricks",
      title: "Cyclone warning issued along the east coast. Tourists are advised to stay indoors.",
      location: "Odisha",
      comments: 15
    },
    {
      image: "https://sarasotamits.com/wp-content/uploads/2021/01/istockphoto-862073406-170667a.jpg",
      date: "July 16, 2025 - Tips & Tricks",
      title: "Heatwave alert with temperatures crossing 45°C. Stay hydrated!",
      location: "Rajasthan",
      comments: 13
    },
    {
      image: "https://www.hindustantimes.com/ht-img/img/2025/05/31/1600x900/The-India-Meteorological-Department--IMD--issued-a_1748691683221.jpg",
      date: "September 06, 2025 - Tips & Tricks",
      title: "10 killed in landslides, flash floods; families hit in Upper Subansiri",
      location: "Arunachal Pradesh",
      comments: 25
    },
    {
      image: "https://english.cdn.zeenews.com/sites/default/files/styles/zm_500x286/public/2017/06/21/604157-dengue.jpg",
      date: "September 16, 2018 - Tips & Tricks",
      title: "Health advisory issued due to rising dengue cases. Use mosquito repellent.",
      location: "Kerala",
      comments: 15
    },
    {
      image: "https://nomadicweekends.com/blog/wp-content/uploads/2019/03/Darjeeling-Weather-And-Temperature-Everything-That-You-Ever-Wanted-To-Know.jpg",
      date: "September 16, 2025 - Tips & Tricks",
      title: "Darjeeling calls for a fog/mist in the morning.",
      location: "Darjeeling",
      comments: 10
    }
  ];

  const places = [
    {
      image: "https://images.unsplash.com/photo-1615894566342-c4187d2779c0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
      description: "From peaceful sunsets at Palolem to lively parties at Baga, Goa offers something for every traveler.",
      location: "Goa"
    },
    {
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "Kerala's coastline is dotted famous for its lighthouse views, stunning cliffs and Ayurvedic retreats.",
      location: "Kerala"
    },
    {
      image: "https://www.alphonsostories.com/AlphonSoStoriesImages/BlogImage/Pondicherry--The-Yellow-City-lg-cov.jpg",
      description: "Offers a unique vibe with its architecture, clean beaches, and calm seaside promenades.",
      location: "Pondicherry"
    }
  ];

  const steps = [
    {
      icon: User,
      title: "Register",
      description: "Sign up with your basic details (name, nationality, passport/ID number, contact info).",
      bgColor: "bg-yellow-400"
    },
    {
      icon: CheckCircle2,
      title: "Verify", 
      description: "Upload your valid identity document and let our system verify it securely.",
      bgColor: "bg-orange-500"
    },
    {
      icon: Download,
      title: "Get Your Tourist ID",
      description: "Download your digital Tourist Verification Card with a unique QR code.",
      bgColor: "bg-cyan-700"
    }
  ];

  const filters = ['Coastal', 'Mountains', 'Heritage', 'Wildlife', 'Spiritual', 'More'];

  return (
    <div className="min-h-screen bg-white font-sans">
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
            {navLinks.map((link, index) => (
              <motion.a
                key={link}
                href={link === 'Home' ? '#' : `#${link.toLowerCase()}`}
                className={`text-gray-700 hover:text-orange-400 font-medium transition-colors px-3 py-2 rounded-lg ${
                  link === 'Home' ? 'bg-orange-400 text-white' : ''
                }`}
                whileHover={{ y: -2 }}
              >
                {link}
              </motion.a>
            ))}
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

      <main>
        {/* Hero Section */}
        <section className="bg-white py-16 px-4 md:px-16 relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10 bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://i.ibb.co/k3V2w2B/Screenshot-2025-09-17-115839.png')"
            }}
          />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <motion.div 
                className="flex-1 text-left"
                {...fadeInUp}
              >
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                  Your Travel Safety Companion<br/>
                  <span className="text-orange-400">Anywhere, Anytime</span>
                </h1>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="#"
                    className="bg-orange-400 text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-orange-500 transition-colors"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Start Your Journey
                  </motion.a>
                  <motion.a
                    href="#"
                    className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-gray-800 transition-colors"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Your Tourist ID
                  </motion.a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex-1 max-w-md"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img
                  src="https://portoalegre.pl/wp-content/uploads/2025/04/kursy-wakacyjne-w-porto-alegre-startuja.webp"
                  alt="Happy female tourist pointing"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Explore Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-16"
              {...fadeInUp}
            >
              Explore our Features
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300"
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                >
                  <div className="w-20 h-20 mb-6 flex items-center justify-center">
                    <img 
                      src={feature.icon} 
                      alt={feature.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Safety Updates Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-16"
              {...fadeInUp}
            >
              Current Safety Updates Near You
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {safetyUpdates.map((update, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <img 
                    src={update.image} 
                    alt={update.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <div className="text-orange-400 font-medium text-sm mb-2">{update.date}</div>
                    <h3 className="text-lg font-semibold mb-4 min-h-[75px] leading-tight">{update.title}</h3>
                    <div className="flex justify-between items-center text-gray-600 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{update.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        <span>Comment ({update.comments})</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Best Places Section */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-50 bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://tse3.mm.bing.net/th/id/OIP.HJqh49J-B-1iCZhYyE_6WQHaDr?pid=Api&P=0&h=180')"
            }}
          />
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12"
              {...fadeInUp}
            >
              Best Places For You
            </motion.h2>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {filters.map((filter) => (
                <motion.button
                  key={filter}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                    activeFilter === filter 
                      ? 'bg-orange-400 text-white' 
                      : 'bg-gray-300 text-gray-700 hover:bg-orange-400 hover:text-white'
                  }`}
                  onClick={() => setActiveFilter(filter)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
            
            {/* Places Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {places.map((place, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-t-orange-400"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <img 
                    src={place.image} 
                    alt={place.location}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 min-h-[70px]">{place.description}</p>
                    <div className="flex justify-between items-center font-semibold">
                      <div className="flex items-center gap-2 text-gray-700">
                        <MapPin className="w-5 h-5" />
                        <span>{place.location}</span>
                      </div>
                      <a href="#" className="text-gray-700 hover:text-orange-400 transition-colors">
                        Know More
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* CTA Button */}
            <div className="text-center">
              <motion.a
                href="#"
                className="inline-block bg-orange-400 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-500 transition-colors"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Discover More
              </motion.a>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-orange-400 font-semibold mb-4 text-2xl">Easy and Fast</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Tourist ID generation in 3 easy steps</h2>
                
                <div className="space-y-8">
                  {steps.map((step, index) => {
                    const IconComponent = step.icon;
                    return (
                      <motion.div 
                        key={index}
                        className="flex items-start gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className={`${step.bgColor} p-4 rounded-xl flex-shrink-0`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-gray-700">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
              
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src="https://www.pintuna.com/wp-content/uploads/2023/09/scan-me@1x.png" 
                  alt="QR Code Scanning"
                  className="w-full max-w-md mx-auto rounded-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-16"
              {...fadeInUp}
            >
              What People Say About Us
            </motion.h2>
            
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img 
                  src="https://chalohoppo.com/wp-content/uploads/2023/03/Web-Banner.jpg" 
                  alt="Testimonial background"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-full max-w-2xl">
                  <div className="bg-white p-8 rounded-2xl shadow-xl relative">
                    <img 
                      src="https://j5u8f2v8.delivery.rocketcdn.me/wp-content/uploads/images/professional-hispanic-woman-headshot-Mna.jpeg" 
                      alt="Jeo Stanlee"
                      className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full border-4 border-gray-50 object-cover"
                    />
                    <div className="pt-20 text-center">
                      <p className="text-xl italic mb-4 text-gray-700">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
                      </p>
                      <p className="text-xl font-semibold">- Jeo Stanlee</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="py-20 mt-24 mx-4 md:mx-16 bg-cyan-50 rounded-2xl">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-8 text-gray-700 leading-tight"
              {...fadeInUp}
            >
              Subscribe to get information, latest news and other<br/>
              interesting offers about RakshaPath
            </motion.h2>
            
            <motion.div 
            className="flex flex-col md:flex-row justify-center gap-4 max-w-2xl mx-auto bg-white rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            >
            <div className="relative flex-1">
                <Mail className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input 
                type="email" 
                placeholder="Your email"
                className="w-full pl-16 pr-6 py-4 text-lg border-none focus:ring-2 focus:ring-orange-400"
                />
            </div>
            <motion.button 
                className="bg-orange-400 text-white font-semibold px-8 py-4 hover:bg-orange-500 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
            >
                Subscribe
            </motion.button>
            </motion.div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
            {/* Logo Column */}
            <div className="lg:w-1/4">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-400 rounded-lg flex items-center justify-center mr-3">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">RakshaPath</div>
                  <div className="text-xs text-gray-600 font-semibold">YOUR SAFE WAY</div>
                </div>
              </div>
            </div>
            
            {/* Links */}
            <div className="flex flex-wrap gap-12 lg:gap-20 lg:w-2/4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">Company</h3>
                <ul className="space-y-3 text-gray-600">
                  <li><a href="#" className="hover:text-orange-400 transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Mobile</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">Contact</h3>
                <ul className="space-y-3 text-gray-600">
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Help/FAQ</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Press</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Affiliates</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">More</h3>
                <ul className="space-y-3 text-gray-600">
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Airline Fees</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Airline</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Low Fare Tips</a></li>
                </ul>
              </div>
            </div>
            
            {/* Social & Apps */}
            <div className="lg:w-1/4">
              <div className="flex gap-4 mb-6">
                <motion.a 
                  href="#" 
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Facebook className="w-6 h-6 text-gray-700" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <Instagram className="w-6 h-6 text-white" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Twitter className="w-6 h-6 text-gray-700" />
                </motion.a>
              </div>
              
              <h3 className="text-lg font-medium text-gray-600 mb-4">Discover our app</h3>
              <div className="flex gap-3">
                <a href="#" className="block">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Google_Play_2022_logo.svg/768px-Google_Play_2022_logo.svg.png?20220726170516" 
                    alt="Get it on Google Play"
                    className="h-12 w-auto"
                  />
                </a>
                <a href="#" className="block">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/4/40/Apple_Store.png" 
                    alt="Download on the App Store"
                    className="h-12 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-gray-600">&copy; 2025 RakshaPath. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RakshaPathHome;