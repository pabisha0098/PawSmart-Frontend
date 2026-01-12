import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length === 0) {
      // Here you would typically make an API call
      console.log('Login submitted:', formData);
      alert('Login successful! (This is a UI demo)');
    } else {
      setErrors(newErrors);
    }
  };

  const handleGoogleLogin = () => {
    // Placeholder for Google login functionality
    console.log('Google login clicked');
    alert('Google login functionality will be implemented');
  };

  return (
    <div className="login-page">
      <Header />
      
      <div className="login-main-content">
        {/* Left Section - Image */}
        <div className="login-image-section">
          <div className="login-image-container">
            {/* Placeholder for the image - you can replace this with an actual image */}
            <div className="login-image-placeholder">
              <div className="image-content">
                <div className="vet-image-container">
                  <div className="vet-icon">👨‍⚕️</div>
                  <div className="pets-holding">
                    <span className="pet-kitten">🐱</span>
                    <span className="pet-puppy">🐶</span>
                  </div>
                </div>
                <p>Professional Pet Care</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Section - Login Form */}
        <div className="login-form-section">
          <div className="login-form-container">
            {/* Dog Icon */}
            <div className="dog-icon">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Yellow dog body */}
                <circle cx="40" cy="40" r="30" fill="#FFD700"/>
                {/* Purple ears */}
                <ellipse cx="25" cy="25" rx="8" ry="12" fill="#9B59B6"/>
                <ellipse cx="55" cy="25" rx="8" ry="12" fill="#9B59B6"/>
                {/* Eyes */}
                <circle cx="32" cy="38" r="3" fill="#000"/>
                <circle cx="48" cy="38" r="3" fill="#000"/>
                {/* Nose */}
                <ellipse cx="40" cy="45" rx="3" ry="2" fill="#000"/>
                {/* Mouth */}
                <path d="M 35 50 Q 40 55 45 50" stroke="#000" strokeWidth="2" fill="none"/>
                {/* Purple collar */}
                <rect x="25" y="55" width="30" height="6" rx="3" fill="#9B59B6"/>
                {/* Wagging paw */}
                <circle cx="65" cy="50" r="8" fill="#FFD700"/>
                <circle cx="68" cy="47" r="3" fill="#000"/>
              </svg>
            </div>
            
            <h1 className="login-title">Sign In To Continue</h1>
            
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'input-error' : ''}
                  placeholder="Enter your email"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? 'input-error' : ''}
                  placeholder="Enter your password"
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>
              
              <div className="form-links">
                <Link to="/register" className="signup-link">Don't have an account? Sign Up</Link>
                <Link to="/forgot-password" className="forgot-link">Forgot password?</Link>
              </div>
              
              <button type="submit" className="btn-login">Login</button>
              <button type="button" onClick={handleGoogleLogin} className="btn-google">
                Continue with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
