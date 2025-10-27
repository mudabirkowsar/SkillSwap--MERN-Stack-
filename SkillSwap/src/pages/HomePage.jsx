import React from 'react';
import './HomePage.css'; 

const HomePage = () => {
    return (
        <div className="app-container">

            <main>
                {/* HERO SECTION */}
                <section className="hero">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Swap Skills, <span className="hero-highlight">Not Cash</span>
                        </h1>
                        <p className="hero-text">
                            Join SkillSwap, the thriving community where passionate individuals exchange knowledge and mentor each other, all for free.
                        </p>
                        <button className="hero-btn">
                            Get Started — It's Free
                            <i className="fas fa-arrow-circle-right ml-3"></i>
                        </button>
                    </div>
                </section>

                {/* HOW IT WORKS */}
                <section id="how-it-works" className="section section-how">
                    <h2 className="section-title">Your Path to Growth</h2>
                    <div className="steps-container">

                        {/* Step 1 */}
                        <div className="step-card step-indigo">
                            <span className="step-number bg-indigo">1</span>
                            <h3 className="step-title">List Your Expertise</h3>
                            <p className="step-description">Create a profile detailing the skills you can confidently teach, from coding to cooking.</p>
                        </div>

                        {/* Step 2 */}
                        <div className="step-card step-emerald">
                            <span className="step-number bg-emerald">2</span>
                            <h3 className="step-title">Find Your Match</h3>
                            <p className="step-description">Browse members offering the skills you want to learn. Our smart matcher connects compatible learners.</p>
                        </div>

                        {/* Step 3 */}
                        <div className="step-card step-blue">
                            <span className="step-number bg-blue">3</span>
                            <h3 className="step-title">Swap & Connect</h3>
                            <p className="step-description">Initiate the swap! Begin mentoring each other and forge valuable, lasting human connections.</p>
                        </div>

                    </div>
                </section>

                {/* IN-DEMAND SKILLS */}
                <section id="skills" className="section section-skills">
                    <h2 className="section-title">Learn Anything, Teach Everything</h2>
                    <div className="skills-grid">

                        {/* Skill Card 1: Code */}
                        <div className="skill-card border-purple">
                            <i className="fas fa-code skill-icon text-purple"></i>
                            <h4 className="skill-title">Web Development</h4>
                            <p className="skill-description">HTML, CSS, React, Python, Full-stack Architecture.</p>
                        </div>

                        {/* Skill Card 2: Globe */}
                        <div className="skill-card border-green">
                            <i className="fas fa-globe-americas skill-icon text-green"></i>
                            <h4 className="skill-title">Language Exchange</h4>
                            <p className="skill-description">Spanish, Mandarin, English conversation, grammar tutoring.</p>
                        </div>

                        {/* Skill Card 3: Palette */}
                        <div className="skill-card border-amber">
                            <i className="fas fa-palette skill-icon text-amber"></i>
                            <h4 className="skill-title">Creative Arts</h4>
                            <p className="skill-description">Digital painting, video editing, guitar lessons, creative writing.</p>
                        </div>

                        {/* Skill Card 4: Heartbeat */}
                        <div className="skill-card border-sky">
                            <i className="fas fa-heartbeat skill-icon text-sky"></i>
                            <h4 className="skill-title">Health & Wellness</h4>
                            <p className="skill-description">Yoga flows, mindful meditation, nutrition basics, fitness planning.</p>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        
                    </div>
                </section>


                {/* FEATURES SECTION */}
                <section className="section section-features">
                    <h2 className="section-title">Why SkillSwap Works</h2>
                    <div className="features-grid">

                        {/* Feature 1: Money/Dollar Sign */}
                        <div className="feature-item border-indigo">
                            <i className="fas fa-dollar-sign feature-icon text-indigo"></i>
                            <div>
                                <h3 className="feature-title">Zero Cost Barrier</h3>
                                <p className="feature-description">Eliminate expensive course fees. Your existing knowledge is the only currency you need to gain new skills.</p>
                            </div>
                        </div>

                        {/* Feature 2: Comment/Chat */}
                        <div className="feature-item border-emerald">
                            <i className="fas fa-comments feature-icon text-emerald"></i>
                            <div>
                                <h3 className="feature-title">Authentic Mentorship</h3>
                                <p className="feature-description">Learn directly from real people who are passionate about their craft. Get personalized, real-time feedback.</p>
                            </div>
                        </div>

                        {/* Feature 3: World/Map */}
                        <div className="feature-item border-blue">
                            <i className="fas fa-map feature-icon text-blue"></i>
                            <div>
                                <h3 className="feature-title">Global Network</h3>
                                <p className="feature-description">Connect with partners across the globe, opening up new perspectives and cultural learning opportunities.</p>
                            </div>
                        </div>

                        {/* Feature 4: Calendar/Book */}
                        <div className="feature-item border-rose">
                            <i className="fas fa-book feature-icon text-rose"></i>
                            <div>
                                <h3 className="feature-title">Structured Swapping</h3>
                                <p className="feature-description">Use our built-in scheduling and progress tracking tools to keep your learning journey organized and on track.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <section id="testimonials" className="section section-testimonials">
                    <h2 className="section-title">Voices from Our Community</h2>
                    <div className="testimonials-grid">

                        {/* Testimonial 1 */}
                        <div className="testimonial-card">
                            <p className="quote-mark">“</p>
                            <p className="testimonial-text">
                                "I learned UI Design while teaching guitar — it felt like the most authentic and effective learning experience I've ever had."
                            </p>
                            <p className="testimonial-author">— Priya, India</p>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="testimonial-card">
                            <p className="quote-mark">“</p>
                            <p className="testimonial-text">
                                "SkillSwap helped me improve my English fluency dramatically, and in exchange, I proudly taught traditional Spanish cooking!"
                            </p>
                            <p className="testimonial-author">— Ayaan, Spain</p>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="testimonial-card">
                            <p className="quote-mark">“</p>
                            <p className="testimonial-text">
                                "I made two real friends while simultaneously growing my skillset in video editing. It’s mentorship, not just a transaction."
                            </p>
                            <p className="testimonial-author">— Sarah, USA</p>
                        </div>

                    </div>
                </section>

                {/* CTA FOOTER */}
                <section className="cta-section">
                    <h2 className="cta-title">Ready to Start Your Skill Journey?</h2>
                    <p className="cta-text">
                        Your expertise has value. Exchange it for the knowledge you crave and become part of a global, mutually supportive network.
                    </p>
                    <button className="cta-btn">
                        Join SkillSwap Today →
                    </button>
                </section>
            </main>

        </div>
    );
};

export default HomePage;