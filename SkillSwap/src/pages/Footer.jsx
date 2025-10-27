import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section brand">
          <h2 className="footer-logo">SkillSwap 🤝</h2>
          <p className="footer-text">
            Exchange knowledge. Empower each other. Learn without limits.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Explore</h3>
          <ul>
            <li><a href="/find-skills">Find Skills</a></li>
            <li><a href="/offer-skills">Offer Skills</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Support</h3>
          <ul>
            <li><a href="/help">Help Center</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3 className="footer-heading">Connect</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} SkillSwap. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
