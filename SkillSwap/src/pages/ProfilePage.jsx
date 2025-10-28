import React, { useState, useEffect } from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
    // --- Existing States ---
    const [offeredSkills, setOfferedSkills] = useState([]);
    const [desiredSkills, setDesiredSkills] = useState([]);
    const [bio, setBio] = useState("");
    const [location, setLocation] = useState("");
    const [profilePic, setProfilePic] = useState(null);

    const [newDesireInput, setNewDesireInput] = useState("");

    // Notification state
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState(""); // success | error

    // --- NEW State for Complex Skill Offering Form ---
    const [skillOfferingForm, setSkillOfferingForm] = useState({
        title: "",
        category: "",
        description: "",
        prerequisites: "",
        duration: "",
        format: "",
        image: "", // New field for image URL
    });
    const [showOfferForm, setShowOfferForm] = useState(false); // To toggle the form

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
        // NOTE: Only save bio/location/pic here, complex skills are managed in offeredSkills state
        const profileData = { offeredSkills, desiredSkills, bio, location, profilePic };
        localStorage.setItem("userProfile", JSON.stringify(profileData));
        showMessage("Profile saved successfully!", "success");
    };

    // --- UPDATED: Handles submission of the complex skill form ---
    const addOfferedSkill = (e) => {
        e.preventDefault();
        const { title, category, description, duration, format, prerequisites, image } = skillOfferingForm;

        if (title.trim() === "" || description.trim() === "") {
            showMessage("Please fill in the Title and Description.", "error");
            return;
        }

        // Mimic the full skill object structure you requested
        const newSkillObject = {
            id: Date.now(), // Unique ID for demonstration
            title: title.trim(),
            category: category.trim() || 'General',
            image: image.trim() || "https://via.placeholder.com/100", // Default image
            description: description.trim(),
            prerequisites: prerequisites.trim() || 'None specified',
            duration: duration.trim() || 'Flexible',
            format: format.trim() || '1:1 Live Video',
            tags: [category.trim() || 'General'], // Simple tag creation
            // Mentor details are pulled from the current user's general profile
            mentor: { 
                name: "Current User", // Placeholder - replace with actual user name
                rating: 5.0, // New skill starts high!
                reviews: 0, 
                bio: bio, 
                swapGoal: desiredSkills.join(', ') || 'Open to proposals', 
                avatar: profilePic ? 'fas fa-user-check' : 'fas fa-user-circle',
            },
            author: "Current User", // Placeholder
            rating: 5.0
        };

        setOfferedSkills([...offeredSkills, newSkillObject]);
        setSkillOfferingForm({ // Reset form
            title: "", category: "", description: "", prerequisites: "", duration: "", format: "", image: ""
        });
        setShowOfferForm(false);
        showMessage(`${title} listed successfully!`, "success");
    };

    // --- Existing functions for Desired Skills (simple text input) ---
    const addDesiredSkill = () => {
        if (newDesireInput.trim() !== "") {
            setDesiredSkills([...desiredSkills, newDesireInput.trim()]);
            setNewDesireInput("");
            showMessage("Desired Skill Added!", "success");
        }
    };

    const removeOfferedSkill = (index) => {
        setOfferedSkills(offeredSkills.filter((_, i) => i !== index));
        showMessage("❌ Offered Skill Removed!", "error");
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

    const handleOfferFormChange = (e) => {
        const { name, value } = e.target;
        setSkillOfferingForm(prev => ({ ...prev, [name]: value }));
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
                            src={profilePic || "https://via.placeholder.com/200/4c6ef5/ffffff?text=U"}
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
                    <h3 className="section-title">Skills I Offer (Full Course Details)</h3>
                    
                    {/* Display existing offered skills */}
                    <div className="skill-list-editor offered-skills-list offer-color">
                        {offeredSkills.map((skill, index) => (
                            <div key={index} className="full-skill-tag">
                                <i className="fas fa-gem skill-tag-icon"></i>
                                <strong>{skill.title}</strong>
                                <span className="skill-tag-category">({skill.category})</span>
                                <span className="remove-btn" onClick={() => removeOfferedSkill(index)} title="Remove Skill">×</span>
                            </div>
                        ))}
                    </div>

                    {/* Button to toggle the form */}
                    {!showOfferForm && (
                        <button className="add-offer-toggle-button" onClick={() => setShowOfferForm(true)}>
                            + List a New Skill Course
                        </button>
                    )}

                    {/* NEW: Skill Offering Form */}
                    {showOfferForm && (
                        <form className="skill-offer-form" onSubmit={addOfferedSkill}>
                            <h4 className="form-sub-title"><i className="fas fa-list-alt"></i> New Skill Course Details</h4>
                            <input
                                name="title"
                                value={skillOfferingForm.title}
                                onChange={handleOfferFormChange}
                                placeholder="Skill Title (e.g., Advanced UI Design)"
                                required
                            />
                            <div className="form-row">
                                <input
                                    name="category"
                                    value={skillOfferingForm.category}
                                    onChange={handleOfferFormChange}
                                    placeholder="Category (e.g., Design)"
                                />
                                <input
                                    name="duration"
                                    value={skillOfferingForm.duration}
                                    onChange={handleOfferFormChange}
                                    placeholder="Duration (e.g., 5 sessions)"
                                />
                                <select name="format" value={skillOfferingForm.format} onChange={handleOfferFormChange}>
                                    <option value="">Select Format</option>
                                    <option value="1:1 Live Video">1:1 Live Video</option>
                                    <option value="Group Session">Group Session</option>
                                    <option value="In-person">In-person</option>
                                </select>
                            </div>
                            <input
                                name="prerequisites"
                                value={skillOfferingForm.prerequisites}
                                onChange={handleOfferFormChange}
                                placeholder="Prerequisites (e.g., Basic Photoshop knowledge)"
                            />
                            <input
                                name="image"
                                value={skillOfferingForm.image}
                                onChange={handleOfferFormChange}
                                placeholder="Skill Image URL (Optional)"
                            />
                            <textarea
                                name="description"
                                value={skillOfferingForm.description}
                                onChange={handleOfferFormChange}
                                placeholder="Detailed course description for learners..."
                                rows="3"
                                required
                            />
                            
                            <div className="form-actions">
                                <button type="button" className="cancel-button" onClick={() => setShowOfferForm(false)}>
                                    Cancel
                                </button>
                                <button type="submit" className="save-offer-button">
                                    Submit Offer
                                </button>
                            </div>
                        </form>
                    )}
                </div>

                {/* Desired Skills (Unchanged - simple text input) */}
                <div className="profile-section">
                    <h3 className="section-title">Skills I Want to Learn (My Swap Goal)</h3>
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
                    <h3 className="section-title">Personal Information (Mentor Bio)</h3>
                    <form className="info-form" onSubmit={(e) => e.preventDefault()}>
                        <label>Bio (Visible on your skill detail pages):</label>
                        <textarea rows="4" value={bio} onChange={(e) => setBio(e.target.value)} />

                        <label>Location:</label>
                        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />

                        <button className="save-button" onClick={saveProfile}>Save General Profile</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;