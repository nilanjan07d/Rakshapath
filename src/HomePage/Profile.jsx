import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, MapPin, Briefcase, Users, Phone, Mail, Image, Eye, EyeOff,
  Download, QrCode, CheckCircle
} from 'lucide-react';

const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'Yash',
    lastName: 'Ghori',
    email: 'yghori@asite.com',
    password: 'fakepassword123',
    phone: '',
    emergencyPhone: '',
    language: 'English',
    nationality: 'India'
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-4 md:px-16">
        <nav className="container mx-auto flex justify-between items-center">
          <a href="home.html" className="logo" aria-label="RakshaPath Homepage">
            <img 
              src="https://i.ibb.co/p338bYn/Screenshot-2025-09-17-163044.png" 
              alt="RakshaPath Logo" 
              className="h-10"
            />
          </a>
          <ul className="hidden md:flex list-none gap-6 items-center">
            <li><a href="home.html" className="text-gray-900 hover:text-amber-500 transition-colors py-2 px-4 rounded-lg">Home</a></li>
            <li><a href="#" className="text-gray-900 hover:text-amber-500 transition-colors py-2 px-4 rounded-lg">Dashboard</a></li>
            <li><a href="index.html" className="text-gray-900 hover:text-amber-500 transition-colors py-2 px-4 rounded-lg">Discover</a></li>
            <li><a href="#" className="text-gray-900 hover:text-amber-500 transition-colors py-2 px-4 rounded-lg">Assistant</a></li>
            <li><a href="#" className="text-gray-900 hover:text-amber-500 transition-colors py-2 px-4 rounded-lg">Report</a></li>
            <li><a href="profile.html" className="bg-amber-500 text-white py-2 px-4 rounded-lg">Profile</a></li>
            <li><a href="#" className="text-gray-900 hover:text-amber-500 transition-colors py-2 px-4 rounded-lg">Admin</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4">
            {/* User Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm text-center mb-8"
            >
              <img 
                src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                alt="Yash Ghori" 
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold mb-1">Yash Ghori</h2>
              <p className="text-gray-600 mb-8">Kolkata, West Bengal, India</p>
              
              <ul className="space-y-4 text-left">
                <li className="flex items-center gap-4 py-3 border-b border-gray-200 text-gray-600">
                  <User size={24} />
                  <span>Student</span>
                </li>
                <li className="flex items-center gap-4 py-3 border-b border-gray-200 text-gray-600">
                  <Users size={24} />
                  <span>on-teak</span>
                </li>
                <li className="flex items-center gap-4 py-3 border-b border-gray-200 text-gray-600">
                  <Phone size={24} />
                  <span>+91 (000) 000-0000</span>
                </li>
                <li className="flex items-center gap-4 py-3 border-b border-gray-200 text-gray-600">
                  <Mail size={24} />
                  <span>yghori@asite.com</span>
                </li>
                <li className="flex items-center gap-4 py-3 text-gray-600">
                  <Image size={24} />
                  <span>PDT-1</span>
                </li>
              </ul>
            </motion.div>

            {/* Tourist ID Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Tourist ID</h3>
                <span className="bg-green-100 text-green-700 py-1 px-3 rounded-full text-sm font-medium">
                  Verified
                </span>
              </div>
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=RakshaPath-YashGhori-PDT1" 
                alt="QR Code for Tourist ID" 
                className="w-full rounded-lg mb-6"
              />
              <div className="flex gap-4">
                <a href="#" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-amber-500 text-white font-semibold">
                  <Eye size={20} />
                  View ID
                </a>
                <a href="#" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border border-amber-500 text-amber-500 font-semibold">
                  <Download size={20} />
                  Download
                </a>
              </div>
            </motion.div>
          </aside>

          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-sm"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-8">Personal Information</h2>
              
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-600 mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="p-3 border border-gray-300 rounded-lg text-base"
                  />
                </div>
                
                <div className="flex flex-col">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-600 mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="p-3 border border-gray-300 rounded-lg text-base"
                  />
                </div>
                
                <div className="flex flex-col md:col-span-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-600 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="p-3 border border-gray-300 rounded-lg text-base"
                  />
                </div>
                
                <div className="flex flex-col md:col-span-2">
                  <label htmlFor="password" className="text-sm font-medium text-gray-600 mb-2">Password</label>
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="p-3 flex-grow outline-none"
                    />
                    <button 
                      type="button" 
                      onClick={togglePasswordVisibility}
                      className="px-4 py-3 text-gray-600"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-600 mb-2">Phone Number</label>
                  <div className="flex">
                    <select className="p-3 border border-gray-300 rounded-l-lg bg-gray-50 w-32">
                      <option value="IN">🇮🇳 +91</option>
                      <option value="US">🇺🇸 +1</option>
                      <option value="CN">🇨🇳 +86</option>
                      <option value="KR">🇰🇷 +82</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="000 000 0000"
                      className="p-3 border border-gray-300 border-l-0 rounded-r-lg flex-grow"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-600 mb-2">Emergency Phone Number</label>
                  <div className="flex">
                    <select className="p-3 border border-gray-300 rounded-l-lg bg-gray-50 w-32">
                      <option value="IN">🇮🇳 +91</option>
                      <option value="US">🇺🇸 +1</option>
                      <option value="CN">🇨🇳 +86</option>
                      <option value="KR">🇰🇷 +82</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="000 000 0000"
                      className="p-3 border border-gray-300 border-l-0 rounded-r-lg flex-grow"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <label htmlFor="language" className="text-sm font-medium text-gray-600 mb-2">Preferred Language</label>
                  <select
                    id="language"
                    value={formData.language}
                    onChange={handleInputChange}
                    className="p-3 border border-gray-300 rounded-lg"
                  >
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Bengali</option>
                  </select>
                </div>
                
                <div className="flex flex-col">
                  <label htmlFor="nationality" className="text-sm font-medium text-gray-600 mb-2">Nationality</label>
                  <select
                    id="nationality"
                    value={formData.nationality}
                    onChange={handleInputChange}
                    className="p-3 border border-gray-300 rounded-lg"
                  >
                    <option>India</option>
                    <option>United States</option>
                    <option>China</option>
                    <option>South Korea</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="bg-amber-500 text-white py-3 px-8 rounded-lg text-lg font-semibold mt-4 w-full md:w-auto"
                  >
                    Save
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;