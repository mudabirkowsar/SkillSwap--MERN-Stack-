import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserDropdown.css';

const UserDropdown = ({ onLogout }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const [profilePic, setProfilePic] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const savedProfile = JSON.parse(localStorage.getItem("userProfile"));
        if (savedProfile?.profilePic) setProfilePic(savedProfile.profilePic);

        const userData = JSON.parse(localStorage.getItem("userAuth"));
        if (userData?.password) setStoredPassword(userData.password);
    }, []);

    const handleAction = (path) => {
        if (path === 'Logout') {
            setShowLogoutModal(true);
        } else {
            navigate(path);
        }
        setIsOpen(false);
    };

    return (
        <>
            <div className="user-dropdown-container">
                <button onClick={() => setIsOpen(!isOpen)} className="dropdown-button">
                    <img
                        src={profilePic || "https://via.placeholder.com/40"}
                        alt="User"
                        className="dropdown-profile-pic"
                    />
                    <span className="user-name">My Profile</span>
                    <svg className="dropdown-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>

                {isOpen && (
                    <div className="dropdown-menu">
                        <a onClick={() => handleAction('/my-profile')} className="dropdown-item">My Profile / Skills</a>
                        <a onClick={() => handleAction('/settings')} className="dropdown-item">Settings</a>
                        <div className="dropdown-divider"></div>
                        <a onClick={() => handleAction('Logout')} className="dropdown-item logout-item">Logout</a>
                    </div>
                )}
            </div>

            {/* Logout Confirmation Modal */}
            {showLogoutModal && (
                <div className="logout-modal-overlay">
                    <div className="logout-modal">
                        <h3>Confirm Logout</h3>
                        <p>Are you sure you want to logout?</p>

                        <div className="logout-modal-actions">
                            <button
                                className="cancel-btn"
                                onClick={() => setShowLogoutModal(false)}
                            >
                                Stay
                            </button>

                            <button
                                className="confirm-btn"
                                onClick={() => { onLogout(); navigate("/"); }}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
};

export default UserDropdown;
