import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import UserDropdown from './UserDropdown';

const Navbar = ({ isLoggedIn, onLogout, onLogin }) => {
    const location = useLocation(); 
    const navigate = useNavigate();

    // Function to apply active class based on the current path
    const linkClasses = (path) =>
        `nav-link ${location.pathname === path ? 'nav-link-active' : ''}`;

    // Handler for Login/Signup buttons that also changes state
    const handleAuthAction = (path) => {
        // onLogin(); // Simulate login state change
        navigate(path); // Navigate to the correct logged-in route
    }

    return (
        <nav className="navbar-container">
            <div className="navbar-content">
                {/* Logo/Brand always links to the appropriate default page */}
                <Link
                    to={isLoggedIn ? '/find-skills' : '/'}
                    className="navbar-logo"
                >
                    Skill<span className="logo-swap">Swap</span>
                </Link>

                {/* Navigation Links */}
                <div className="navbar-links-group">
                    {isLoggedIn ? (
                        // --- Logged IN Navigation ---
                        <>
                            <Link to="/find-skills" className={linkClasses('/find-skills')}>
                                Find Skills
                            </Link>
                            <Link to="/my-swaps" className={linkClasses('/my-swaps')}>
                                My Swaps
                            </Link>
                            <Link to="/collaborations" className={linkClasses('/collaborations')}>
                                Collaborations
                            </Link>
                            {/* Notifications Icon (functional placeholder) */}
                            <Link to="/notifications">
                            <div className="notifications-icon-container">
                                <button className="notifications-button">
                                    <svg className="notifications-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                                </button>
                                <span className="notification-badge">2</span>
                            </div>
                            </Link>
                            <UserDropdown onLogout={onLogout} />
                        </>
                    ) : (
                        // --- Logged OUT Navigation ---
                        <>
                            <Link to="/" className={linkClasses('/')}>
                                Home
                            </Link>
                            <Link to="/how-it-works" className={linkClasses('/how-it-works')}>
                                How It Works
                            </Link>
                            <Link to="/browse-skills" className={linkClasses('/browse-skills')}>
                                Browse Skills
                            </Link>

                            {/* Log In and Sign Up buttons simulate login/navigation */}
                            <button
                                onClick={() => handleAuthAction('/login')}
                                className="auth-button auth-login"
                            >
                                Log In
                            </button>
                            <button
                                onClick={() => handleAuthAction('/signup')}
                                className="auth-button auth-signup"
                            >
                                Sign Up
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
