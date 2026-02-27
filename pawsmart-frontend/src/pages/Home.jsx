import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="trusted-badge">
              <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8C16 8 12 4 8 4C4 4 2 6 2 10C2 14 6 18 10 20C12 21 14 22 16 22C18 22 20 21 22 20C26 18 30 14 30 10C30 6 28 4 24 4C20 4 16 8 16 8Z" fill="#9B59B6"/>
                <circle cx="12" cy="12" r="2" fill="white"/>
                <circle cx="20" cy="12" r="2" fill="white"/>
                <path d="M10 18Q16 20 22 18" stroke="white" strokeWidth="2" fill="none"/>
              </svg>
              <span>TRUSTED BY 10,000+ PET PARENTS</span>
            </div>
            
            <h1 className="hero-headline">
              Gentle Care for Your<br />
              <span className="hero-headline-accent">Best Friend</span>
            </h1>
            
            <p className="hero-description">
              The calmest way to manage medical records, book grooming sessions, and schedule vet visits. A smart place for happy tails.
            </p>
            
            <div className="hero-buttons">
              <Link to="/register" className="btn-join-now">Join Now</Link>
              <Link to="/how-it-works" className="btn-how-it-works">How it works</Link>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="hero-image-container">
              <div className="hero-image-placeholder">
                <div className="pets-image">
                  <span className="dog-emoji">🐕</span>
                  <span className="cat-emoji">🐱</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Services Section */}
      <section className="services-section">
        <div className="services-container">
          <h1 className="services-title">Our Services</h1>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="10" width="32" height="32" rx="4" stroke="#9B59B6" strokeWidth="2" fill="none"/>
                  <line x1="16" y1="18" x2="32" y2="18" stroke="#9B59B6" strokeWidth="2"/>
                  <line x1="16" y1="26" x2="28" y2="26" stroke="#9B59B6" strokeWidth="2"/>
                  <line x1="36" y1="12" x2="36" y2="8" stroke="#9B59B6" strokeWidth="2"/>
                  <line x1="32" y1="8" x2="40" y2="8" stroke="#9B59B6" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="service-card-title">Vet Booking</h3>
              <p className="service-card-description">
                Skip the wait and book top-rated vets instantly. Get automated reminders for your appointments.
              </p>
              <Link to="/services/vet-booking" className="service-link">Learn More →</Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 24L20 16L28 24" stroke="#9B59B6" strokeWidth="2" fill="none"/>
                  <path d="M20 16V36" stroke="#9B59B6" strokeWidth="2"/>
                  <path d="M36 20L28 28L20 20" stroke="#9B59B6" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="service-card-title">Grooming</h3>
              <p className="service-card-description">
                Professional pampering for your pets at your convenience. From baths to full style makeovers.
              </p>
              <Link to="/services/grooming" className="service-link">Learn More →</Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="8" width="28" height="32" rx="2" stroke="#9B59B6" strokeWidth="2" fill="none"/>
                  <line x1="16" y1="16" x2="32" y2="16" stroke="#9B59B6" strokeWidth="2"/>
                  <line x1="16" y1="24" x2="28" y2="24" stroke="#9B59B6" strokeWidth="2"/>
                  <line x1="16" y1="32" x2="32" y2="32" stroke="#9B59B6" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="service-card-title">Medical Records</h3>
              <p className="service-card-description">
                Securely store and share health history on the go. Always have vaccination records ready.
              </p>
              <Link to="/services/medical-records" className="service-link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose PawSmart Section */}
      <section className="why-section">
        <div className="why-container">
          <h1 className="why-title">Why Choose PawSmart?</h1>
          <p className="why-intro">
            We provide the gentlest tools for modern pet parents to ensure their companions live healthy, happy lives.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" stroke="#9B59B6" strokeWidth="2" fill="none"/>
                  <line x1="20" y1="8" x2="20" y2="20" stroke="#9B59B6" strokeWidth="2"/>
                  <line x1="20" y1="20" x2="28" y2="20" stroke="#9B59B6" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="feature-title">24/7 Access</h3>
              <p className="feature-description">Access your pet's records anytime, anywhere in the world.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="16" stroke="#9B59B6" strokeWidth="2" fill="none"/>
                  <path d="M12 20L18 26L28 14" stroke="#9B59B6" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="feature-title">Expert Care</h3>
              <p className="feature-description">Direct connections to certified veterinarians and groomers.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 8L24 16L32 17L26 23L28 32L20 28L12 32L14 23L8 17L16 16L20 8Z" stroke="#9B59B6" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="feature-title">Trusted Security</h3>
              <p className="feature-description">Your pet's data is encrypted and safe with banking-level security.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default Home;
