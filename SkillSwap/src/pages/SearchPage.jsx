import React from 'react';
import './SearchPage.css';

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
        </div>
    </div>
);

export default SearchPage;
