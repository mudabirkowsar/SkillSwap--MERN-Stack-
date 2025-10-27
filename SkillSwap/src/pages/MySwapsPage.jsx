import React from 'react';
import './MySwapsPage.css';

const MySwapsPage = () => (
    <div className="page-wrapper">
        <div className="swaps-container">
            <h2 className="page-title">🔄 My Active Swaps & Transactions</h2>
            <p className="page-description">Manage all incoming requests, pending swaps, and review completed sessions.</p>

            <div className="swap-section">
                <h3 className="section-title incoming">Incoming Requests (1)</h3>
                <div className="swap-item incoming-item">
                    <p>**Request:** Jane D. wants to learn **React** from you, offering **Figma Design**.</p>
                    <div className="swap-actions">
                        <button className="action-button accept">Accept</button>
                        <button className="action-button decline">Decline</button>
                    </div>
                </div>
            </div>

            <div className="swap-section">
                <h3 className="section-title pending">Pending Swaps (2)</h3>
                <div className="swap-item pending-item">
                    <p>**Pending:** You are waiting for John S. to confirm your request for **Node.js**.</p>
                </div>
            </div>

            <div className="swap-section">
                <h3 className="section-title completed">Completed Swaps (5)</h3>
                <div className="swap-item completed-item">
                    <p>**Completed:** Your swap of **Python** for **Spanish** with Maria L. is complete. <span className="highlight-text">Leave a Review!</span></p>
                </div>
            </div>
        </div>
    </div>
);

export default MySwapsPage;
