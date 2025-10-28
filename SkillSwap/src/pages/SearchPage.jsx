// src/pages/SearchPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { skillData } from '../data/data'; // ⬅️ IMPORTED DATA
import './SearchPage.css';

// ❌ The local skillData array is removed, and imported from '../data'

const SearchPage = () => (
    <div className="page-wrapper">
        <div className="search-container">
            <h2 className="page-title">🔍 Find Skills to Learn</h2>
            <p className="page-description">Browse or search hundreds of skills offered by our community members.</p>

            <div className="search-form-group">
                <input type="text" placeholder="Search for skills: React, Spanish, Photography..." className="search-input" />
                <button className="search-button">Search</button>
            </div>

            <div className="search-results-placeholder">
                <p>Results for "All Skills" will appear here.</p>
                <div className="skill-grid">
                    <div className="skill-card">Development</div>
                    <div className="skill-card">Design</div>
                    <div className="skill-card">Language</div>
                    <div className="skill-card">Finance</div>
                </div>
            </div>

            {/* ✅ NEW SECTION: Skill Cards */}
            <h3 className="featured-title">✨ Featured Skills</h3>
            <div className="featured-skills-grid">
                {skillData.map(skill => (
                    <div className="featured-card" key={skill.id}>
                        <img src={skill.image} alt={skill.title} className="featured-image" />
                        <h4 className="featured-name">{skill.title}</h4>
                        <p className="featured-description">{skill.description}</p>
                        <p className="featured-author">👤 {skill.author}</p>
                        <p className="featured-rating">⭐ {skill.rating}</p>
                        <Link to={`/skills/${skill.id}`}>
                            <button className="learn-button">Learn This Skill</button>
                        </Link>
                    </div>
                ))}
            </div>

        </div>
    </div>
);

export default SearchPage;