import React from 'react';
import './HowItWorksPage.css';

const HowItWorksPage = () => (
    <div className="hiw-page-wrapper">
        <div className="hiw-container">
            <h2 className="page-title"><i className="fas fa-random"></i> How SkillSwap Works</h2>
            <p className="page-description">A simple, community-driven process that allows users to teach and learn from each other.</p>

            <div className="hiw-steps">
                <div className="step-card">
                    <span className="step-icon"><i className="fas fa-user-edit"></i></span>
                    <h3 className="step-title">List Your Skills</h3>
                    <p>You specify what skills you can teach and what skills you want to learn.</p>
                </div>

                <div className="step-card">
                    <span className="step-icon"><i className="fas fa-search"></i></span>
                    <h3 className="step-title">Find a Match</h3>
                    <p>Search the SkillSwap network to find someone who matches your skill interests.</p>
                </div>

                <div className="step-card">
                    <span className="step-icon"><i className="fas fa-handshake"></i></span>
                    <h3 className="step-title">Initiate the Swap</h3>
                    <p>Send a request and agree on time, pace, and communication channel.</p>
                </div>

                <div className="step-card">
                    <span className="step-icon"><i className="fas fa-comments"></i></span>
                    <h3 className="step-title">Learn Together</h3>
                    <p>Share resources, schedule learning sessions, and grow your skills together.</p>
                </div>

                <div className="step-card">
                    <span className="step-icon"><i className="fas fa-star-half-alt"></i></span>
                    <h3 className="step-title">Review & Improve</h3>
                    <p>Leave feedback to help maintain quality and encourage great teaching.</p>
                </div>
            </div>

            <p className="closing-text"><i className="fas fa-globe"></i> SkillSwap is not just learning — it's building connections, communities, and opportunities.</p>

        </div>
    </div>
);

export default HowItWorksPage;
