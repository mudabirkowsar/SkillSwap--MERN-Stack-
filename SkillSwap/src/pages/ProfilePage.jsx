import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => (
    <div className="page-wrapper">
        <div className="profile-container">
            <h2 className="page-title">👤 Manage My Skills & Profile</h2>
            <p className="page-description">Update your offerings, desired skills, and personal information.</p>

            <div className="profile-section">
                <h3 className="section-title">Skills I Offer</h3>
                <div className="skill-list-editor offer-color">
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">Node.js</span>
                    <span className="skill-tag">Advanced CSS</span>
                    <button className="add-skill-button">+ Add Skill</button>
                </div>
            </div>

            <div className="profile-section">
                <h3 className="section-title">Skills I Desire (What I Want to Learn)</h3>
                <div className="skill-list-editor desire-color">
                    <span className="skill-tag">Figma Design</span>
                    <span className="skill-tag">Spanish (B2)</span>
                    <span className="skill-tag">MongoDB</span>
                    <button className="add-skill-button">+ Add Desire</button>
                </div>
            </div>

            <div className="profile-section">
                <h3 className="section-title">Personal Information</h3>
                <form className="info-form">
                    <label>Bio/Summary:</label>
                    <textarea rows="4" placeholder="Briefly describe your experience and teaching style..."></textarea>
                    <label>Location (City, Country):</label>
                    <input type="text" placeholder="London, UK" />
                    <button className="save-button">Save Profile Updates</button>
                </form>
            </div>
        </div>
    </div>
);

export default ProfilePage;
