import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User, AlertTriangle, Shield, MessageSquare, Smartphone,
  CheckCircle, MapPin, Mail, Facebook, Instagram, Twitter,
  Download, ArrowRight, ChevronLeft, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(1);
  const [activeFilter, setActiveFilter] = useState('Coastal');

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Jeo Stanlee",
      text: "RakshaPath made my trip to India so much safer and enjoyable. The emergency SOS feature gave me peace of mind throughout my journey.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      bgImage: "https://chalohoppo.com/wp-content/uploads/2023/03/Web-Banner.jpg"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      text: "The safety alerts and real-time updates were incredibly helpful during my solo travel. I felt protected every step of the way.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
      bgImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"
    },
    {
      id: 3,
      name: "Michael Chen",
      text: "As a frequent traveler, I appreciate the digital ID feature. It streamlined my verification process at hotels and tourist attractions.",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=798&q=80",
      bgImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  // Features data
  const features = [
    { icon: AlertTriangle, title: "Emergency SOS\nButton" },
    { icon: Shield, title: "Safety\nAlerts" },
    { icon: MessageSquare, title: "24/7 Chatbot\nSupport" },
    { icon: Smartphone, title: "Travel\nAssistance" },
    { icon: User, title: "Digital\nIdentification" }
  ];

  // Destinations data
  const destinations = [
    { name: "Odisha", image: "https://tse4.mm.bing.net/th/id/OIP.qjPQvhN1lPNuIlxVE4RiUwHaE8?pid=Api&P=0&h=180" },
    { name: "Mumbai", image: "https://static.vecteezy.com/system/resources/previews/039/218/994/non_2x/ai-generated-panoramic-window-showing-a-view-of-a-night-time-city-lit-up-with-lights-and-rainy-professionalgraphy-photo.jpg" },
    { name: "Rajasthan", image: "https://www.tusktravel.com/blog/wp-content/uploads/2022/02/Rajasthan-in-March.jpg" },
    { name: "Darjeeling", image: "https://tse4.mm.bing.net/th/id/OIP.HmoJ4jWx7wXDo7HcOn4bDQHaEK?pid=Api&P=0&h=180" },
    { name: "Kerala", image: "https://tse4.mm.bing.net/th/id/OIP.HmVXAOA6xQxqbU_fKQ737QHaEK?pid=Api&P=0&h=180" },
    { name: "Meghalaya", image: "https://tse4.mm.bing.net/th/id/OIP.4v2hshdvBsPewkEtQrdH_QHaEj?pid=Api&P=0&h=180" }
  ];

  // Places data
  const places = [
    {
      name: "Goa",
      image: "https://images.unsplash.com/photo-1615894566342-c4187d2779c0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
      description: "From peaceful sunsets at Palolem to lively parties at Baga, Goa offers something for every traveler."
    },
    {
      name: "Kerala",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "Kerala's coastline is dotted famous for its lighthouse views, stunning cliffs and Ayurvedic retreats."
    },
    {
      name: "Pondicherry",
      image: "https://www.alphonsostories.com/AlphonSoStoriesImages/BlogImage/Pondicherry--The-Yellow-City-lg-cov.jpg",
      description: "Offers a unique vibe with its architecture, clean beaches, and calm seaside promenades."
    }
  ];

  // Steps data
  const steps = [
    {
      icon: User,
      title: "Register",
      description: "Sign up with your basic details (name, nationality, passport/ID number, contact info).",
      color: "bg-amber-400"
    },
    {
      icon: CheckCircle,
      title: "Verify",
      description: "Upload your valid identity document and let our system verify it securely.",
      color: "bg-orange-500"
    },
    {
      icon: Download,
      title: "Get Your Tourist ID",
      description: "Download your digital Tourist Verification Card with a unique QR code.",
      color: "bg-cyan-700"
    }
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section 
        className="min-h-screen bg-cover bg-center flex flex-col relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80')`
        }}
      >
        <nav className="flex justify-between items-center p-8 md:px-16 z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white font-bold text-2xl"
          >
            RakshaPath
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'About Us', 'Community', 'Blog'].map((item, index) => (
              <motion.a 
                key={index}
                href={item === 'Home' ? '#' : `#${item.toLowerCase().replace(' ', '-')}`}
                className="text-white font-semibold hover:text-amber-400 transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          
          <Link to="/signup">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-amber-500 text-white px-4 py-2 rounded-lg cursor-pointer"
            >
              <User size={20} />
              <span>Register Now</span>
            </motion.div>
          </Link>
        </nav>
        
        <div className="flex-grow flex flex-col justify-center items-center text-center text-white px-4 z-10">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Your Imagination Is <br />Your Only Limit
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-8"
          >
            <motion.a 
              href="#discover"
              className="text-2xl font-cursive italic border-b-2 border-amber-400 pb-1"
              whileHover={{ scale: 1.05 }}
            >
              Discover more
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-16 bg-gradient-to-r from-amber-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ABOUT US
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl font-semibold text-center max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            At RakshaPath we believe that travel should be a journey of joy, discovery, and peace of mind. Our mission is to create a world where every tourist feels safe, welcomed, and confident while exploring new places.
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.03 }}
                >
                  <div className="bg-amber-100 p-4 rounded-full mb-4">
                    <IconComponent size={32} className="text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-lg whitespace-pre-line">{feature.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16 bg-gradient-to-b from-gray-100 to-amber-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Top Destinations
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination, index) => (
              <motion.div 
                key={index}
                className="flex bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-32 h-32 object-cover"
                />
                <div className="p-4 flex items-center">
                  <h3 className="text-xl font-semibold">{destination.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Places Section */}
      <section id="discover" className="py-16 bg-gradient-to-r from-cyan-50 to-amber-50 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-50 z-0"
          style={{
            backgroundImage: `url('https://tse3.mm.bing.net/th/id/OIP.HJqh49J-B-1iCZhYyE_6WQHaDr?pid=Api&P=0&h=180')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Best Places For You
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Coastal', 'Mountains', 'Heritage', 'Wildlife', 'Spiritual', 'More'].map((filter, index) => (
              <motion.button
                key={index}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  activeFilter === filter 
                    ? 'bg-amber-500 text-white' 
                    : 'bg-gray-300 text-gray-800 hover:bg-amber-400 hover:text-white'
                }`}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {places.map((place, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <img 
                  src={place.image} 
                  alt={place.name} 
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{place.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-gray-700">
                      <MapPin size={18} className="mr-1" />
                      <span>{place.name}</span>
                    </div>
                    <a href="#" className="font-semibold text-gray-700 hover:text-amber-600 flex items-center">
                      Know More <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <motion.button
              className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-amber-600 transition-colors"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Discover More
            </motion.button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-b from-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-amber-500 font-semibold mb-2">Easy and Fast</p>
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
                      <div className={`${step.color} p-3 rounded-lg flex-shrink-0`}>
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://www.pintuna.com/wp-content/uploads/2023/09/scan-me@1x.png" 
                alt="QR code scanning" 
                className="rounded-2xl w-full max-w-md mx-auto shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What People Say About Us
          </motion.h2>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="flex overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={testimonial.id}
                  className={`min-w-full flex-shrink-0 px-4 md:px-12 ${
                    activeTestimonial === testimonial.id ? 'block' : 'hidden'
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeTestimonial === testimonial.id ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                    <div 
                      className="h-64 bg-cover bg-center"
                      style={{ backgroundImage: `url(${testimonial.bgImage})` }}
                    />
                    <div className="relative px-8 pb-8">
                      <div className="flex justify-center -mt-16 mb-6">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-32 h-32 rounded-full border-4 border-white object-cover"
                        />
                      </div>
                      <p className="text-gray-600 text-center italic mb-6">"{testimonial.text}"</p>
                      <p className="font-semibold text-center">- {testimonial.name}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <button 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-amber-50 transition-colors"
              onClick={() => setActiveTestimonial(activeTestimonial === 1 ? 3 : activeTestimonial - 1)}
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-amber-50 transition-colors"
              onClick={() => setActiveTestimonial(activeTestimonial === 3 ? 1 : activeTestimonial + 1)}
            >
              <ChevronRight size={24} />
            </button>
            
            <div className="flex justify-center mt-6 space-x-2">
              {[1, 2, 3].map((dot) => (
                <button 
                  key={dot}
                  className={`w-3 h-3 rounded-full ${
                    activeTestimonial === dot ? 'bg-amber-500' : 'bg-gray-300'
                  }`}
                  onClick={() => setActiveTestimonial(dot)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-100 to-amber-100">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Subscribe to get information, latest news and other<br />
              interesting offers about RakshaPath
            </h2>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
              <div className="relative w-full">
                <Mail size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="w-full pl-12 pr-4 py-4 rounded-lg border-none focus:ring-2 focus:ring-amber-400 shadow-sm"
                />
              </div>
              <button className="bg-amber-500 text-white font-semibold px-6 py-4 rounded-lg whitespace-nowrap w-full md:w-auto hover:bg-amber-600 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
            <div className="md:w-1/4">
              <div className="font-bold text-2xl mb-4">RakshaPath</div>
              <p className="text-gray-600">YOUR SAFE WAY</p>
            </div>
            
            <div className="flex flex-wrap gap-8 md:gap-16">
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-amber-500 transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-amber-500 transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-amber-500 transition-colors">Mobile</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-amber-500 transition-colors">Help/FAQ</a></li>
                  <li><a href="#" className="hover:text-amber-500 transition-colors">Press</a></li>
                  <li><a href="#" className="hover:text-amber-500 transition-colors">Affiliates</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">More</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-amber-500 transition-colors">Airline Fees</a></li>
                  <li><a href="#" className="hover:text-amber-500 transition-colors">Airline</a></li>
                  <li><a href="#" className="hover:text-amber-500 transition-colors">Low Fare Tips</a></li>
                </ul>
              </div>
            </div>
            
            <div className="md:w-1/4">
              <div className="flex gap-4 mb-6">
                <a href="#" className="bg-white p-3 rounded-full shadow-md hover:bg-amber-50 transition-colors">
                  <Facebook size={20} className="text-gray-700" />
                </a>
                <a href="#" className="bg-gradient-to-r from-purple-400 to-pink-500 p-3 rounded-full shadow-md hover:opacity-90 transition-opacity">
                  <Instagram size={20} className="text-white" />
                </a>
                <a href="#" className="bg-white p-3 rounded-full shadow-md hover:bg-amber-50 transition-colors">
                  <Twitter size={20} className="text-gray-700" />
                </a>
              </div>
              
              <h3 className="font-semibold mb-4">Discover our app</h3>
              <div className="flex gap-2">
                <a href="#" className="flex-1">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Google_Play_2022_logo.svg/768px-Google_Play_2022_logo.svg.png?20220726170516" 
                    alt="Google Play" 
                    className="h-10 object-contain"
                  />
                </a>
                <a href="#" className="flex-1">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/4/40/Apple_Store.png" 
                    alt="App Store" 
                    className="h-10 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center text-gray-600 pt-8 border-t border-gray-300">
            <p>All rights reserved@rakshapath.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;