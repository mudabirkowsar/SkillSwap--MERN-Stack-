import React from 'react';
import './HowItWorksPage.css';

const HowItWorksPage = () => (
    <div className="page-wrapper">
        <div className="hiw-container">
            <h2 className="page-title">How SkillSwap Works</h2>
            <p className="page-description">Our simple 4-step process to start trading knowledge immediately.</p>

            <div className="hiw-steps">
                <div className="step-card">
                    <span className="step-number">1</span>
                    <h3 className="step-title">List Your Skills</h3>
                    <p>Go to your profile and define the skills you **offer** (e.g., Python) and the skills you **desire** (e.g., Spanish).</p>
                </div>
                <div className="step-card">
                    <span className="step-number">2</span>
                    <h3 className="step-title">Find a Match</h3>
                    <p>Use the "Find Skills" page to search for someone offering a skill you want and who desires a skill you offer.</p>
                </div>
                <div className="step-card">
                    <span className="step-number">3</span>
                    <h3 className="step-title">Initiate the Swap</h3>
                    <p>Send a swap request. Once accepted, coordinate your learning sessions directly via our integrated messaging.</p>
                </div>
                <div className="step-card">
                    <span className="step-number">4</span>
                    <h3 className="step-title">Review and Rate</h3>
                    <p>After your swap is complete, leave an honest rating and review for your partner to maintain community trust.</p>
                </div>
            </div>
        </div>
    </div>
);

export default HowItWorksPage;
