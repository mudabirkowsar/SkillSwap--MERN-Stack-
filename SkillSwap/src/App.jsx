import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import SearchPage from './pages/SearchPage';
import MySwapsPage from './pages/MySwapsPage';
import ProfilePage from './pages/ProfilePage';
import './index.css';
import Footer from './pages/Footer';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import NotificationPage from './pages/notification/NotificationPage';
import SkillDetailPage from './pages/skillDetail/SkillDetailPage';
import CollaborationPage from './pages/collaboration/CollaborationPage';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Automatically check login status from localStorage when the app loads
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  // ✅ Optionally: listen to changes in localStorage (e.g., user logs out from another tab)
  useEffect(() => {
    const handleStorageChange = () => {
      const userInfo = localStorage.getItem("userInfo");
      setIsLoggedIn(!!userInfo);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    setIsLoggedIn(false);
  };

  const handleSignup = () => {
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Navbar visible on all routes */}
        <Navbar
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
          onLogin={handleLogin}
        />
        <main className="main-content">
          <Routes>
            {/* --- Public Routes --- */}
            <Route path="/" element={<HomePage onLogin={handleLogin} />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/browse-skills" element={<SearchPage />} />
            <Route path="/skills/:skillId" element={<SkillDetailPage />} />

            {/* --- Auth Routes --- */}
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/signup" element={<SignupPage onSignup={handleSignup} />} />

            {/* --- Protected Routes (optional to restrict later) --- */}
            <Route path="/find-skills" element={<SearchPage />} />
            <Route path="/my-swaps" element={<MySwapsPage />} />
            <Route path="/my-profile" element={<ProfilePage />} />
            <Route path="/settings" element={<ProfilePage />} />
            <Route path="/notifications" element={<NotificationPage />} />
            <Route path="/collaborations" element={<CollaborationPage />} />

            {/* --- 404 Fallback --- */}
            <Route
              path="*"
              element={
                <h1 style={{ textAlign: 'center', marginTop: '50px' }}>
                  404 Page Not Found
                </h1>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
