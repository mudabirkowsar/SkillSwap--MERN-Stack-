import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserDropdown.css';

const UserDropdown = ({ onLogout }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleAction = (path) => {
        if (path === 'Logout') {
            onLogout();
        } else {
            navigate(path); // Navigate to the specified route
        }
        setIsOpen(false);
    };

    return (
        <div className="user-dropdown-container">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="dropdown-button"
            >
                {/* User Icon SVG */}
                <svg className="user-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span className="user-name">Alice J.</span>
                {/* Dropdown Arrow SVG */}
                <svg className="dropdown-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>

            {isOpen && (
                <div className="dropdown-menu">
                    <a href="#" onClick={() => handleAction('/my-profile')} className="dropdown-item">
                        My Profile/Skills
                    </a>
                    <a href="#" onClick={() => handleAction('/settings')} className="dropdown-item">
                        Settings
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#" onClick={() => handleAction('Logout')} className="dropdown-item logout-item">
                        Logout
                    </a>
                </div>
            )}
        </div>
    );
};

export default UserDropdown;
