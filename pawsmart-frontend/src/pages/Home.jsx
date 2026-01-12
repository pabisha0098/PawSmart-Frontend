import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <div className="pet-icons">
            <span className="pet-icon">🐾</span>
            <span className="pet-icon">🐕</span>
            <span className="pet-icon">🐈</span>
          </div>
          <h1 className="hero-headline">Smart Care for Your Pets</h1>
          <p className="hero-description">
            Book veterinary appointments and grooming services for your beloved pets. 
            We make pet care simple, convenient, and stress-free.
          </p>
          <div className="cta-buttons">
            <Link to="/login" className="btn btn-primary">Login</Link>
            <Link to="/register" className="btn btn-secondary">Register</Link>
          </div>
        </div>
      </div>
      
      <div className="features-section">
        <div className="feature-card">
          <div className="feature-icon">🏥</div>
          <h3>Veterinary Care</h3>
          <p>Expert medical care for your pets</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">✂️</div>
          <h3>Grooming Services</h3>
          <p>Professional grooming and styling</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📅</div>
          <h3>Easy Booking</h3>
          <p>Schedule appointments in minutes</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

