// src/pages/skillDetail/SkillDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { skillData } from '../../data/data'; // ⬅️ IMPORTED DATA
import './SkillDetailPage.css';

// ❌ The local allSkillsData array is removed, and skillData is imported

const SkillDetailPage = () => {
    // 1. Get the dynamic parameter from the URL
    const { skillId } = useParams();

    // Ensure skillId is treated as a number for comparison
    const idToFind = parseInt(skillId); 

    // 2. Look up the skill using the imported data
    const skill = skillData.find(s => s.id === idToFind); 

    // Handle case where skill is not found (404-like behavior)
    if (!skill) {
        return (
            <div className="skill-detail-page-wrapper">
                <div className="skill-detail-container" style={{ textAlign: 'center' }}>
                    <h1 className="skill-title" style={{color: '#ef4444'}}>Skill Not Found 😥</h1>
                    <p style={{fontSize: '18px', color: '#6b7280'}}>The skill you are looking for does not exist (ID: {skillId}). Please check the URL.</p>
                    <Link to="/" style={{display: 'inline-block', marginTop: '20px', color: '#4f46e5', textDecoration: 'none', fontWeight: 600}}>← Back to Search</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="skill-detail-page-wrapper">
            <div className="skill-detail-container">

                {/* --- Header Section --- */}
                <div className="skill-header">
                    <h1 className="skill-title">{skill.title}</h1>
                    <span className="skill-category">{skill.category}</span>
                </div>

                <div className="main-content-grid">
                    
                    {/* --- Left Column: Skill Content --- */}
                    <div className="skill-content-area">
                        <section className="detail-section">
                            <h2 className="section-heading">Skill Overview</h2>
                            <p>{skill.description}</p>
                        </section>

                        <section className="detail-section">
                            <h2 className="section-heading">Format & Requirements</h2>
                            <ul className="info-list">
                                <li>
                                    <i className="fas fa-clock list-icon"></i>
                                    <strong>Duration:</strong> {skill.duration}
                                </li>
                                <li>
                                    <i className="fas fa-video list-icon"></i>
                                    <strong>Format:</strong> {skill.format}
                                </li>
                                <li>
                                    <i className="fas fa-book-open list-icon"></i>
                                    <strong>Prerequisites:</strong> {skill.prerequisites}
                                </li>
                            </ul>
                        </section>
                        
                        <section className="detail-section">
                            <h2 className="section-heading">Tags</h2>
                            <div className="skill-tags">
                                {skill.tags.map(tag => (
                                    <span key={tag} className="skill-tag">{tag}</span>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* --- Right Column: Mentor Card & CTA --- */}
                    <aside className="mentor-sidebar">
                        
                        {/* Mentor Card */}
                        <div className="mentor-card">
                            <div className="mentor-avatar-wrapper">
                                {/* Use a default icon if avatar property is missing */}
                                <i className={`mentor-avatar ${skill.mentor?.avatar || 'fas fa-user-circle'}`}></i>
                            </div>
                            <h3 className="mentor-name">{skill.mentor.name}</h3>
                            <div className="mentor-rating">
                                <i className="fas fa-star rating-icon"></i>
                                {skill.mentor.rating} ({skill.mentor.reviews} reviews)
                            </div>
                            
                            <section className="mentor-detail-section">
                                <h4>My Swap Goal</h4>
                                <p className="mentor-goal">
                                    <i className="fas fa-bullseye goal-icon"></i>
                                    {skill.mentor.swapGoal}
                                </p>
                            </section>

                            <section className="mentor-detail-section">
                                <h4>About the Mentor</h4>
                                <p className="mentor-bio">{skill.mentor.bio}</p>
                            </section>
                            
                            {/* CTA Button */}
                            <button className="initiate-swap-btn">
                                <i className="fas fa-exchange-alt"></i> Initiate Swap Request
                            </button>

                            <button className="message-mentor-btn">
                                <i className="fas fa-comments"></i> Message Mentor
                            </button>
                        </div>

                    </aside>
                </div>
                
                {/* --- Optional: Community Reviews Section would go here --- */}

            </div>
        </div>
    );
};

export default SkillDetailPage;