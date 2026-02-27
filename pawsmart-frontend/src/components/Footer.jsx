import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8C16 8 12 4 8 4C4 4 2 6 2 10C2 14 6 18 10 20C12 21 14 22 16 22C18 22 20 21 22 20C26 18 30 14 30 10C30 6 28 4 24 4C20 4 16 8 16 8Z" fill="#9B59B6"/>
              <circle cx="12" cy="12" r="2" fill="white"/>
              <circle cx="20" cy="12" r="2" fill="white"/>
              <path d="M10 18Q16 20 22 18" stroke="white" strokeWidth="2" fill="none"/>
            </svg>
            <span className="footer-brand">PawSmart</span>
          </div>
          <p className="footer-tagline">
            Making pet care management simpler, smarter, and more personal for every pet parent.
          </p>
        </div>
        
        <div className="footer-column">
          <h3 className="footer-title">Company</h3>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/press">Press</Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3 className="footer-title">Support</h3>
          <ul className="footer-links">
            <li><Link to="/help">Help Center</Link></li>
            <li><Link to="/safety">Safety</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3 className="footer-title">Newsletter</h3>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Email address" 
              className="newsletter-input"
            />
            <button type="button" className="newsletter-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="footer-copyright">© 2024 PawSmart Shop Inc. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/cookies">Cookie Settings</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
