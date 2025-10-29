import React, { useState } from 'react';
import './SwapRequestModal.css';

const SwapRequestModal = ({ mentorName, onClose, onSubmit }) => {
    const [proposedSkill, setProposedSkill] = useState('');
    const [requestMessage, setRequestMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (proposedSkill.trim() === '' || requestMessage.trim() === '') {
            setNotification({
                type: 'error',
                message: '⚠️ Please fill out both the Proposed Skill and the Message.',
            });
            return;
        }

        setIsSubmitting(true);

        setTimeout(() => {
            const success = Math.random() > 0.2; // 80% success simulation

            if (success) {
                const requestData = {
                    mentor: mentorName,
                    skillOffered: proposedSkill,
                    message: requestMessage,
                    timestamp: new Date().toISOString(),
                };
                onSubmit(requestData);
                setNotification({
                    type: 'success',
                    message: `Swap request sent successfully to ${mentorName}!`,
                });
                setProposedSkill('');
                setRequestMessage('');
            } else {
                setNotification({
                    type: 'error',
                    message: 'Failed to send swap request. Please try again later.',
                });
            }

            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <div className="modal-backdrop">
            <div className="swap-request-modal">
                <div className="modal-header">
                    <h3>Initiate Swap with {mentorName}</h3>
                    <button className="close-btn" onClick={onClose}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <div className="modal-body">
                    <p className="modal-intro">
                        What skill are you offering in return for <strong>{mentorName}'s</strong> expertise?
                    </p>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="proposedSkill">Your Proposed Skill/Service:</label>
                            <input
                                id="proposedSkill"
                                type="text"
                                value={proposedSkill}
                                onChange={(e) => setProposedSkill(e.target.value)}
                                placeholder="E.g., 3 hours of SEO Consulting"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="requestMessage">Introduction Message:</label>
                            <textarea
                                id="requestMessage"
                                rows="4"
                                value={requestMessage}
                                onChange={(e) => setRequestMessage(e.target.value)}
                                placeholder={`Hi ${mentorName}, I'd love to swap skills! I can offer...`}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-swap-btn" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <i className="fas fa-spinner fa-spin"></i> Sending Request...
                                </>
                            ) : (
                                <>
                                    <i className="fas fa-paper-plane"></i> Send Swap Request
                                </>
                            )}
                        </button>
                    </form>

                    {notification && (
                        <div className={`notification-modal ${notification.type}`}>
                            <p>{notification.message}</p>
                            <button
                                className="close-notification"
                                onClick={() => setNotification(null)}
                            >
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SwapRequestModal;
