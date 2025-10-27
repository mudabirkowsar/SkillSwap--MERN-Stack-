import React from 'react';
import './SearchPage.css';

const skillData = [
    {
        id: 1,
        title: "React Native Development",
        image: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
        description: "Build cross-platform mobile apps with JavaScript & React.",
        author: "Amit Kumar",
        rating: 4.8
    },
    {
        id: 2,
        title: "Spanish Language Basics",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
        description: "Learn to speak everyday Spanish confidently.",
        author: "Maria Garcia",
        rating: 4.6
    },
    {
        id: 3,
        title: "Graphic Design Essentials",
        image: "https://cdn-icons-png.flaticon.com/512/906/906312.png",
        description: "Learn composition, color theory and typography.",
        author: "Rahul Mehta",
        rating: 4.7
    },
    {
        id: 4,
        title: "React Native Development",
        image: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
        description: "Build cross-platform mobile apps with JavaScript & React.",
        author: "Amit Kumar",
        rating: 4.8
    },
    {
        id: 5,
        title: "Spanish Language Basics",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
        description: "Learn to speak everyday Spanish confidently.",
        author: "Maria Garcia",
        rating: 4.6
    },
    {
        id: 6,
        title: "Graphic Design Essentials",
        image: "https://cdn-icons-png.flaticon.com/512/906/906312.png",
        description: "Learn composition, color theory and typography.",
        author: "Rahul Mehta",
        rating: 4.7
    }
];

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
                        <button className="learn-button">Learn This Skill</button>
                    </div>
                ))}
            </div>

        </div>
    </div>
);

export default SearchPage;
