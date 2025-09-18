import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  ChevronRight, 
  LogIn,
  UserPlus,
  Key,
  X,
  Facebook,
  AlertCircle,
  CheckCircle,
  Loader
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import i1 from "../assets/i1.png";

export default function SignIn() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isPanelVisible, setIsPanelVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    return newErrors;
  };

  // Enhanced input validation with real-time feedback
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Enhanced form submission with loading states
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setErrors({});
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate success
      setSuccess("Login successful! Redirecting...");
      
      // Reset form after success
      setTimeout(() => {
        setFormData({ email: "", password: "", rememberMe: false });
        setSuccess('');
        setIsLoading(false);
        // Navigate to dashboard or home page after successful login
        navigate("/home");
      }, 1500);
      
    } catch (error) {
      setErrors({ submit: "Login failed. Please try again." });
      setIsLoading(false);
    }
  };

  // Social login handlers
  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Implement social login logic
  };

  // Handle register navigation
  const handleRegister = () => {
    navigate("/");
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isPanelVisible) {
        setIsPanelVisible(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isPanelVisible]);

  // Password strength indicator
  const getPasswordStrength = (password) => {
    if (!password) return 0;
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;
    return strength;
  };

  const passwordStrength = getPasswordStrength(formData.password);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 }
  };

  const panelVariants = {
    open: { 
      x: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
    closed: { 
      x: 100, 
      opacity: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  // Error message component
  const ErrorMessage = ({ message }) => (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex items-center gap-2 text-red-300 text-xs mt-1"
    >
      <AlertCircle size={14} />
      {message}
    </motion.div>
  );

  // Success message component
  const SuccessMessage = ({ message }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="flex items-center gap-2 text-green-300 text-sm mb-4 bg-green-500/20 p-3 rounded-lg"
    >
      <CheckCircle size={16} />
      {message}
    </motion.div>
  );

  return (
    <div
      className="w-screen h-screen relative bg-white overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url(${i1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Toggle panel button when closed */}
      {!isPanelVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsPanelVisible(true)}
          className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg z-10"
          aria-label="Open login panel"
        >
          <LogIn size={24} className="text-black" />
        </motion.button>
      )}

      <AnimatePresence>
        {isPanelVisible && (
          /* Right panel (frosted glass effect) */
          <motion.div 
            variants={panelVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="w-full max-w-md h-full bg-black/30 backdrop-blur-lg shadow-xl flex flex-col justify-center px-10 ml-auto relative"
          >
            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsPanelVisible(false)}
              className="absolute top-6 right-6 text-white bg-black/30 rounded-full p-1 backdrop-blur-sm"
              aria-label="Close login panel"
            >
              <X size={24} />
            </motion.button>

            <motion.form 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              onSubmit={handleSubmit}
              className="flex flex-col"
              noValidate
            >
              {/* Heading */}
              <motion.div variants={itemVariants} className="mb-10 text-white">
                <h2 className="text-2xl font-bold uppercase font-montserrat flex items-center gap-2">
                  <LogIn size={28} />
                  Existing Member
                </h2>
                <p className="text-2xl font-normal font-montserrat">
                  Welcome Back!
                </p>
              </motion.div>

              {/* Success Message */}
              <AnimatePresence>
                {success && <SuccessMessage message={success} />}
              </AnimatePresence>

              {/* Submit Error */}
              <AnimatePresence>
                {errors.submit && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-red-300 text-sm mb-4 bg-red-500/20 p-3 rounded-lg"
                  >
                    <AlertCircle size={16} />
                    {errors.submit}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Email input */}
              <motion.div variants={itemVariants} className="mb-6">
                <label className="text-white text-sm font-medium block mb-2 flex items-center gap-2">
                  <Mail size={16} />
                  Email
                </label>
                <div className="relative">
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Jamesthomas@mail.com"
                    className={`w-full bg-transparent border-b ${
                      errors.email ? 'border-red-400' : 'border-white'
                    } text-white placeholder-white/70 focus:outline-none py-2 pl-8 pr-4 transition-colors`}
                    required
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  <Mail size={18} className="absolute left-0 bottom-3 text-white/70" />
                </div>
                <AnimatePresence>
                  {errors.email && <ErrorMessage message={errors.email} />}
                </AnimatePresence>
              </motion.div>

              {/* Password input */}
              <motion.div variants={itemVariants} className="mb-4">
                <label className="text-white text-sm font-medium block mb-2 flex items-center gap-2">
                  <Lock size={16} />
                  Password
                </label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter Password"
                    className={`w-full bg-transparent border-b ${
                      errors.password ? 'border-red-400' : 'border-white'
                    } text-white placeholder-white/70 focus:outline-none py-2 pl-8 pr-10 transition-colors`}
                    required
                    aria-invalid={errors.password ? 'true' : 'false'}
                    aria-describedby={errors.password ? 'password-error' : undefined}
                  />
                  <Lock size={18} className="absolute left-0 bottom-3 text-white/70" />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 bottom-3 text-white/70 hover:text-white transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                
                {/* Password strength indicator */}
                {formData.password && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-2"
                  >
                    <div className="flex gap-1 mb-1">
                      {[25, 50, 75, 100].map((threshold, index) => (
                        <div
                          key={index}
                          className={`h-1 flex-1 rounded ${
                            passwordStrength >= threshold
                              ? passwordStrength === 100
                                ? 'bg-green-400'
                                : passwordStrength >= 75
                                ? 'bg-yellow-400'
                                : 'bg-orange-400'
                              : 'bg-white/30'
                          } transition-colors`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-white/70">
                      Password strength: {
                        passwordStrength === 100 ? 'Strong' :
                        passwordStrength >= 75 ? 'Good' :
                        passwordStrength >= 50 ? 'Fair' : 'Weak'
                      }
                    </span>
                  </motion.div>
                )}
                
                <AnimatePresence>
                  {errors.password && <ErrorMessage message={errors.password} />}
                </AnimatePresence>
              </motion.div>

              {/* Remember me + Forgot password */}
              <motion.div variants={itemVariants} className="flex items-center justify-between text-white text-xs mb-8">
                <label className="flex items-center gap-2 cursor-pointer hover:text-white/80 transition-colors">
                  <input
                    name="rememberMe"
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="accent-white w-3 h-3"
                  />
                  Remember me
                </label>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hover:underline flex items-center gap-1 hover:text-white/80 transition-colors"
                  type="button"
                  onClick={() => console.log('Forgot password clicked')}
                >
                  <Key size={14} />
                  Forgot Password
                </motion.button>
              </motion.div>

              {/* Continue button */}
              <motion.button
                variants={buttonVariants}
                initial="rest"
                whileHover={!isLoading ? "hover" : "rest"}
                whileTap={!isLoading ? "tap" : "rest"}
                type="submit"
                disabled={isLoading}
                className={`w-full bg-white text-black font-bold rounded-2xl py-4 shadow-lg transition flex items-center justify-center gap-2 ${
                  isLoading 
                    ? 'opacity-80 cursor-not-allowed' 
                    : 'hover:bg-gray-100'
                }`}
              >
                {isLoading ? (
                  <>
                    <Loader size={20} className="animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Continue
                    <ChevronRight size={20} />
                  </>
                )}
              </motion.button>

              {/* OR separator */}
              <motion.div variants={itemVariants} className="flex items-center gap-4 my-8">
                <div className="flex-1 border-t border-white/50"></div>
                <span className="text-white text-sm font-medium">OR</span>
                <div className="flex-1 border-t border-white/50"></div>
              </motion.div>

              {/* Social login buttons */}
              <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-8">
                <motion.button 
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-16 h-16 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  type="button"
                  onClick={() => handleSocialLogin('Google')}
                  aria-label="Sign in with Google"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-16 h-16 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  type="button"
                  onClick={() => handleSocialLogin('Facebook')}
                  aria-label="Sign in with Facebook"
                >
                  <Facebook size={32} />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-16 h-16 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  type="button"
                  onClick={() => handleSocialLogin('LinkedIn')}
                  aria-label="Sign in with LinkedIn"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </motion.button>
              </motion.div>

              {/* Register link */}
              <motion.p variants={itemVariants} className="text-white text-lg text-center flex items-center justify-center gap-2">
                Don't have an account?
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="font-bold underline cursor-pointer flex items-center gap-1 hover:text-white/80 transition-colors"
                  onClick={handleRegister}
                  type="button"
                >
                  <UserPlus size={18} />
                  Register Now
                </motion.button>
              </motion.p>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}