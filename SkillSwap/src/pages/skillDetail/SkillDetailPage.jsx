import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { skillData } from '../../data/data';
import './SkillDetailPage.css';

const SkillDetailPage = () => {
    const { skillId } = useParams();
    const idToFind = parseInt(skillId);
    const skill = skillData.find(s => s.id === idToFind);

    const [showChatBox, setShowChatBox] = useState(false);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    if (!skill) {
        return (
            <div className="skill-detail-page-wrapper">
                <div className="skill-detail-container" style={{ textAlign: 'center' }}>
                    <h1 className="skill-title" style={{ color: '#ef4444' }}>Skill Not Found 😥</h1>
                    <p style={{ fontSize: '18px', color: '#6b7280' }}>
                        The skill you are looking for does not exist (ID: {skillId}). Please check the URL.
                    </p>
                    <Link to="/" style={{
                        display: 'inline-block',
                        marginTop: '20px',
                        color: '#4f46e5',
                        textDecoration: 'none',
                        fontWeight: 600
                    }}>← Back to Search</Link>
                </div>
            </div>
        );
    }

    const handleSendMessage = () => {
        if (newMessage.trim() === '') return;
        const newMsg = { text: newMessage, sender: 'You', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
        setMessages(prev => [...prev, newMsg]);
        setNewMessage('');
    };

    const handleCall = () => {
        alert(`📞 Starting voice call with ${skill.mentor.name}...`);
    };

    const handleVideoChat = () => {
        alert(`🎥 Starting video chat with ${skill.mentor.name}...`);
    };

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
                        <div className="mentor-card">
                            <div className="mentor-avatar-wrapper">
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

                            <button className="initiate-swap-btn">
                                <i className="fas fa-exchange-alt"></i> Initiate Swap Request
                            </button>

                            <button
                                className="message-mentor-btn"
                                onClick={() => setShowChatBox(!showChatBox)}
                            >
                                <i className="fas fa-comments"></i> Message Mentor
                            </button>
                        </div>
                    </aside>
                </div>

                {/* --- Chat Box (Toggle) --- */}
                {showChatBox && (
                    <div className="chatbox-container">
                        <div className="chatbox-header">
                            <span><i className="fas fa-user-circle"></i> {skill.mentor.name}</span>
                            <div className="chatbox-options">
                                <button onClick={handleCall} title="Voice Call"><i className="fas fa-phone"></i></button>
                                <button onClick={handleVideoChat} title="Video Chat"><i className="fas fa-video"></i></button>
                                <button onClick={() => setShowChatBox(false)} title="Close"><i className="fas fa-times"></i></button>
                            </div>
                        </div>
                        <div className="chatbox-messages">
                            {messages.length === 0 ? (
                                <p className="no-messages">Start your conversation with {skill.mentor.name}!</p>
                            ) : (
                                messages.map((msg, index) => (
                                    <div key={index} className={`chat-message ${msg.sender === 'You' ? 'sent' : 'received'}`}>
                                        <div className="message-text">{msg.text}</div>
                                        <div className="message-time">{msg.time}</div>
                                    </div>
                                ))
                            )}
                        </div>
                        <div className="chatbox-input">
                            <input
                                type="text"
                                placeholder="Type your message..."
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                            />
                            <button onClick={handleSendMessage}><i className="fas fa-paper-plane"></i></button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default SkillDetailPage;
