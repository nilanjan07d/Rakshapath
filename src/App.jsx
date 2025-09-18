import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./auth/SignIn"; 
import SignUp from "./auth/SignUp";
import Launch from "./Launch/Launch";
import Home from "./HomePage/Home";
import Dashboard from "./HomePage/Dashboard";
import Discover from "./HomePage/Discover";
import Assistant from "./HomePage/Assistant";
import Report from "./HomePage/Report";
import Profile from "./HomePage/Profile";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default landing page */}
        <Route path="/" element={<Launch />} />

        {/* Auth pages */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Main app pages */}
        <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/report" element={<Report />} />
          <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
