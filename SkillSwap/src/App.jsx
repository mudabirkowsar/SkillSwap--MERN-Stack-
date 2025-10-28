import React, { useState } from 'react';
// Import necessary React Router DOM components
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Import all separate page components
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

// Note: In a real-world app, you would wrap the Logged-In routes 
// with a ProtectedRoute component to enforce authentication.

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleSignup = () => {
    setIsLoggedIn(true);
  }

  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Navbar is rendered on all routes */}
        <Navbar
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
          onLogin={handleLogin}
        />
        <main className="main-content">
          <Routes>
            {/* --- Public Routes --- */}
            {/* The main landing page, needs the login handler */}
            <Route path="/" element={<HomePage onLogin={handleLogin} />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            {/* Public preview of the marketplace */}
            <Route path="/browse-skills" element={<SearchPage />} />

            <Route
              path="/skills/:skillId"
              element={<SkillDetailPage />}
            />

            {/* auth routes  */}

            <Route path='/login' element={<LoginPage onLogin={handleLogin} />} />
            <Route path='/signup' element={<SignupPage onSignup={handleSignup} />} />

            {/* --- Logged-In Routes (The actual application) --- */}
            <Route path="/find-skills" element={<SearchPage />} />
            <Route path="/my-swaps" element={<MySwapsPage />} />
            <Route path="/my-profile" element={<ProfilePage />} />
            <Route path="/settings" element={<ProfilePage />} />
            <Route path='/notifications' element={<NotificationPage />} />

            {/* Fallback/404 Route */}
            <Route path="*" element={<h1 style={{ textAlign: 'center', marginTop: '50px' }}>404 Page Not Found</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
