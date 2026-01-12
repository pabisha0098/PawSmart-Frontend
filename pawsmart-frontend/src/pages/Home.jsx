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
            <h1 className="hero-headline">Professional Care for Your Pet</h1>
            <p className="hero-description">
              Whatever your pet's grooming needs, we've got you covered. Schedule your appointment with us and give your pet the service it needs.
            </p>
            <ul className="hero-services-list">
              <li>Bath</li>
              <li>Grooming</li>
              <li>Veterinary Care</li>
              <li>Treats</li>
            </ul>
            <Link to="/services" className="btn-hero-cta">Check our Services</Link>
          </div>
          
          <div className="hero-image">
            <div className="hero-image-placeholder">
              <div className="hero-image-content">
                <div className="vet-hands">👨‍⚕️</div>
                <div className="pets-held">
                  <span className="kitten">🐱</span>
                  <span className="puppy">🐶</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Professional Services Section */}
      <section className="services-section">
        <div className="services-container">
          <h2 className="section-subtitle">Best Pet Care Services</h2>
          <h1 className="section-title">Our Professional Services</h1>
          
          <div className="services-grid">
            <div className="service-card">
              <h3 className="service-card-title">Preventative & Routine Care</h3>
              <p className="service-card-description">
                Protecting dogs, cats, and rabbits from common diseases while ensuring their well-being through professional grooming services, including bathing, haircuts, and nail trimming.
              </p>
            </div>
            
            <div className="service-card">
              <h3 className="service-card-title">Book a Vet Appointment</h3>
              <p className="service-card-description">
                Access full healthcare services for your pets, from vaccinations and regular checkups to specialized care.
              </p>
            </div>
            
            <div className="service-card">
              <h3 className="service-card-title">Pet Recommendation</h3>
              <p className="service-card-description">
                Discover the best pet breeds with expert help, customized to your lifestyle, home space, nutrition, and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why PawSmart Shop Section */}
      <section className="why-section">
        <div className="why-container">
          <div className="why-image">
            <div className="dog-illustration">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="80" fill="#FFD700"/>
                <ellipse cx="60" cy="60" rx="20" ry="30" fill="#9B59B6"/>
                <ellipse cx="140" cy="60" rx="20" ry="30" fill="#9B59B6"/>
                <circle cx="80" cy="95" r="8" fill="#000"/>
                <circle cx="120" cy="95" r="8" fill="#000"/>
                <ellipse cx="100" cy="115" rx="8" ry="5" fill="#000"/>
                <path d="M 85 130 Q 100 140 115 130" stroke="#000" strokeWidth="4" fill="none"/>
                <rect x="60" y="140" width="80" height="12" rx="6" fill="#9B59B6"/>
              </svg>
            </div>
          </div>
          
          <div className="why-content">
            <h2 className="why-title">Why PawSmart Shop?</h2>
            <p className="why-description">
              We are dedicated experts in pet grooming, committed to providing a service that prioritizes your pet's happiness and comfort.
            </p>
            
            <div className="features-grid">
              <div className="feature-block">
                <h4 className="feature-title">LOCAL SOLUTION</h4>
                <p className="feature-text">Convenient pet care services in your neighborhood</p>
              </div>
              
              <div className="feature-block">
                <h4 className="feature-title">VET APPOINTMENT</h4>
                <p className="feature-text">Easy booking for veterinary consultations</p>
              </div>
              
              <div className="feature-block">
                <h4 className="feature-title">PROFESSIONAL TEAM</h4>
                <p className="feature-text">Experienced and certified pet care specialists</p>
              </div>
              
              <div className="feature-block">
                <h4 className="feature-title">Hygiene & Safety</h4>
                <p className="feature-text">Maintaining the highest standards of cleanliness</p>
              </div>
            </div>
            
            <Link to="/about" className="btn-learn-more">Learn More</Link>
          </div>
        </div>
      </section>
      
      {/* Our Professional Members Section */}
      <section className="team-section">
        <div className="team-container">
          <h2 className="section-subtitle">Our Team Members</h2>
          <h1 className="section-title">Our Professional Members</h1>
          <p className="team-placeholder">Meet our expert team of veterinarians and groomers dedicated to your pet's well-being.</p>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="section-subtitle">Our Happy Clients</h2>
          <h1 className="section-title">Testimonials</h1>
          
          <div className="testimonial-content">
            <div className="testimonial-quote">
              <p className="testimonial-text">
                "Excellent pet food and quick delivery! The quality of products is outstanding. My pets love everything I've ordered from PawSmart Shop."
              </p>
              <p className="testimonial-author">— Happy Customer</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default Home;
