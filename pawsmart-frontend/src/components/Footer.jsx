import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3 className="footer-title">Home</h3>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3 className="footer-title">Services</h3>
          <ul className="footer-links">
            <li><Link to="/help">Help Center</Link></li>
            <li><Link to="/health-plan">Pet Health care Plan</Link></li>
            <li><Link to="/vet-appointment">Vet Appointment</Link></li>
            <li><Link to="/grooming">Grooming Services</Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3 className="footer-title">Opening Hours</h3>
          <ul className="footer-hours">
            <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
            <li>Saturday: 10:00 AM - 4:00 PM</li>
            <li>Sunday: 10:00 AM - 2:00 PM</li>
            <li className="footer-note">Closed on bank holidays</li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3 className="footer-title">Get In Touch</h3>
          <ul className="footer-contact">
            <li>Phone: <a href="tel:+9779000000000">+977-9000000000</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
