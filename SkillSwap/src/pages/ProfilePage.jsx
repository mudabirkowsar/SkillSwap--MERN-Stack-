import React, { useState, useEffect } from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
    const [offeredSkills, setOfferedSkills] = useState([]);
    const [desiredSkills, setDesiredSkills] = useState([]);
    const [bio, setBio] = useState("");
    const [location, setLocation] = useState("");
    const [profilePic, setProfilePic] = useState(null);

    const [newSkillInput, setNewSkillInput] = useState("");
    const [newDesireInput, setNewDesireInput] = useState("");

    // Notification state
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState(""); // success | error

    const showMessage = (msg, type) => {
        setMessage(msg);
        setMessageType(type);
        setTimeout(() => {
            setMessage("");
            setMessageType("");
        }, 2500);
    };

    // Load saved profile from localStorage
    useEffect(() => {
        const savedProfile = JSON.parse(localStorage.getItem("userProfile"));
        if (savedProfile) {
            setOfferedSkills(savedProfile.offeredSkills || []);
            setDesiredSkills(savedProfile.desiredSkills || []);
            setBio(savedProfile.bio || "");
            setLocation(savedProfile.location || "");
            setProfilePic(savedProfile.profilePic || null);
        }
    }, []);

    const saveProfile = () => {
        const profileData = { offeredSkills, desiredSkills, bio, location, profilePic };
        localStorage.setItem("userProfile", JSON.stringify(profileData));
        showMessage("Profile saved successfully!", "success");
    };

    const addOfferedSkill = () => {
        if (newSkillInput.trim() !== "") {
            setOfferedSkills([...offeredSkills, newSkillInput.trim()]);
            setNewSkillInput("");
            showMessage("Skill Added!", "success");
        }
    };

    const addDesiredSkill = () => {
        if (newDesireInput.trim() !== "") {
            setDesiredSkills([...desiredSkills, newDesireInput.trim()]);
            setNewDesireInput("");
            showMessage("Desired Skill Added!", "success");
        }
    };

    const removeOfferedSkill = (index) => {
        setOfferedSkills(offeredSkills.filter((_, i) => i !== index));
        showMessage("❌ Skill Removed!", "error");
    };

    const removeDesiredSkill = (index) => {
        setDesiredSkills(desiredSkills.filter((_, i) => i !== index));
        showMessage("❌ Desired Skill Removed!", "error");
    };

    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result);
                showMessage("Profile Picture Updated!", "success");
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="page-wrapper">

            {/* Notification Popup */}
            {message && (
                <div className={`notification-box ${messageType}`}>
                    <i className={`fas ${messageType === "success" ? "fa-check-circle" : "fa-exclamation-triangle"}`}></i>
                    <span>{message}</span>
                </div>
            )}

            <div className="profile-container">
                <div className="photo-section">
                    <div className="photo-wrapper">
                        <img
                            src={profilePic || "https://via.placeholder.com/200"}
                            alt="Profile"
                            className="profile-photo"
                        />
                        <label className="camera-btn">
                            <i className="fas fa-camera"></i>
                            <input type="file" accept="image/*" onChange={handleProfilePicChange} hidden />
                        </label>
                    </div>
                </div>

                <h2 className="page-title">👤 Manage My Skills & Profile</h2>

                {/* Offered Skills */}
                <div className="profile-section">
                    <h3 className="section-title">Skills I Offer</h3>
                    <div className="skill-list-editor offer-color">
                        {offeredSkills.map((skill, index) => (
                            <span key={index} className="skill-tag">
                                {skill}
                                <span className="remove-btn" onClick={() => removeOfferedSkill(index)}>×</span>
                            </span>
                        ))}

                        <input
                            className="skill-input"
                            value={newSkillInput}
                            onChange={(e) => setNewSkillInput(e.target.value)}
                            placeholder="Add new skill..."
                        />
                        <button className="add-skill-button" onClick={addOfferedSkill}>+ Add Skill</button>
                    </div>
                </div>

                {/* Desired Skills */}
                <div className="profile-section">
                    <h3 className="section-title">Skills I Want to Learn</h3>
                    <div className="skill-list-editor desire-color">
                        {desiredSkills.map((skill, index) => (
                            <span key={index} className="skill-tag">
                                {skill}
                                <span className="remove-btn" onClick={() => removeDesiredSkill(index)}>×</span>
                            </span>
                        ))}

                        <input
                            className="skill-input"
                            value={newDesireInput}
                            onChange={(e) => setNewDesireInput(e.target.value)}
                            placeholder="Add new skill to learn..."
                        />
                        <button className="add-skill-button" onClick={addDesiredSkill}>+ Add Desire</button>
                    </div>
                </div>

                {/* Bio & Location */}
                <div className="profile-section">
                    <h3 className="section-title">Personal Information</h3>
                    <form className="info-form" onSubmit={(e) => e.preventDefault()}>
                        <label>Bio:</label>
                        <textarea rows="4" value={bio} onChange={(e) => setBio(e.target.value)} />

                        <label>Location:</label>
                        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />

                        <button className="save-button" onClick={saveProfile}>Save Profile</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
