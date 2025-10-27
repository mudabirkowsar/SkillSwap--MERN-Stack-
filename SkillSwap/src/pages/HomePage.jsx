import React from "react";
import "./HomePage.css";

const HomePage = () => {
    return (
        <div className="homepage">

            {/* HERO SECTION */}
            <section className="hero">
                <h1 className="hero-title">🤝 SkillSwap</h1>
                <p className="hero-text">
                    A community where people exchange skills and help each other grow —
                    without spending money on expensive courses.
                </p>
                <button className="hero-btn">Get Started — It's Free</button>
            </section>

            {/* HOW IT WORKS */}
            <section className="how-it-works">
                <h2 className="section-title">How It Works</h2>
                <div className="steps">
                    <div className="step">
                        <span className="step-number">1</span>
                        <h3>Share Your Skills</h3>
                        <p>Tell others what you can teach — any skill counts.</p>
                    </div>
                    <div className="step">
                        <span className="step-number">2</span>
                        <h3>Find What You Want to Learn</h3>
                        <p>Browse the community and find your next learning partner.</p>
                    </div>
                    <div className="step">
                        <span className="step-number">3</span>
                        <h3>Swap & Grow Together</h3>
                        <p>Teach each other, collaborate & build meaningful connections.</p>
                    </div>
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="features">
                <h2 className="section-title">Why SkillSwap?</h2>
                <div className="features-grid">
                    <div className="feature-card">🌍 Global Community</div>
                    <div className="feature-card">💬 Real Conversations</div>
                    <div className="feature-card">🎯 Skill-Based Matching</div>
                    <div className="feature-card">🤝 Human Connections</div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="testimonials">
                <h2 className="section-title">What People Are Saying</h2>
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        “I learned UI Design while teaching guitar — best experience ever!”
                        <span>— Priya</span>
                    </div>

                    <div className="testimonial-card">
                        “SkillSwap helped me improve my English and in exchange I taught cooking!”
                        <span>— Ayaan</span>
                    </div>

                    <div className="testimonial-card">
                        “Made real friends while growing my skillset. Loved it!”
                        <span>— Sarah</span>
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="cta-section">
                <h2>Ready to Start Your Skill Journey?</h2>
                <button className="cta-btn">Join SkillSwap Today →</button>
            </section>

        </div>
    );
};

export default HomePage;
