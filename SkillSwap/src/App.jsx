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

            {/* --- Logged-In Routes (The actual application) --- */}
            <Route path="/find-skills" element={<SearchPage />} />
            <Route path="/my-swaps" element={<MySwapsPage />} />
            <Route path="/my-profile" element={<ProfilePage />} />
            <Route path="/settings" element={<ProfilePage />} />

            {/* Fallback/404 Route */}
            <Route path="*" element={<h1 style={{ textAlign: 'center', marginTop: '50px' }}>404 Page Not Found</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
