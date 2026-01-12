import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
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
      console.log('Registration submitted:', formData);
      alert('Registration successful! (This is a UI demo)');
    } else {
      setErrors(newErrors);
    }
  };

  const handleFacebookLogin = () => {
    console.log('Facebook login clicked');
    alert('Facebook login functionality will be implemented');
  };

  const handleTwitterLogin = () => {
    console.log('Twitter login clicked');
    alert('Twitter login functionality will be implemented');
  };

  return (
    <div className="register-page">
      <Header />
      
      <div className="register-main-content">
        {/* Left Section - Dark Purple Background */}
        <div className="register-left-section">
          <div className="register-left-content">
            <h1 className="register-headline">Your Modern<br />Paw Shop</h1>
            <div className="dogs-illustration">
              <div className="dogs-strip">
                <div className="dog-item">
                  <span className="dog-emoji">🐕</span>
                  <p>German Shepherd</p>
                </div>
                <div className="dog-item">
                  <span className="dog-emoji">🐶</span>
                  <p>Fluffy Friend</p>
                </div>
                <div className="dog-item">
                  <span className="dog-emoji">🐕</span>
                  <p>Collie</p>
                </div>
                <div className="dog-item">
                  <span className="dog-emoji">🐩</span>
                  <p>Poodle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Section - Registration Form */}
        <div className="register-form-section">
          <div className="register-form-container">
            <h1 className="register-title">Create Account</h1>
            
            <form onSubmit={handleSubmit} className="register-form">
              {/* First Name and Last Name side by side */}
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={errors.firstName ? 'input-error' : ''}
                    placeholder="First Name"
                  />
                  {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                </div>
                
                <div className="form-group">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={errors.lastName ? 'input-error' : ''}
                    placeholder="Last Name"
                  />
                  {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                </div>
              </div>
              
              {/* Email */}
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'input-error' : ''}
                  placeholder="Email"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              {/* Password */}
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? 'input-error' : ''}
                  placeholder="Password"
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>
              
              {/* Create Account Button */}
              <button type="submit" className="btn-create-account">Create Account</button>
              
              {/* Login Link */}
              <div className="login-link-container">
                <p>Already have an account? <Link to="/login" className="login-link">Login</Link></p>
              </div>
              
              {/* Divider */}
              <div className="divider">
                <span className="divider-line"></span>
                <span className="divider-text">or</span>
                <span className="divider-line"></span>
              </div>
              
              {/* Social Login Buttons */}
              <div className="social-buttons">
                <button type="button" onClick={handleFacebookLogin} className="btn-facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Sign up with Facebook
                </button>
                
                <button type="button" onClick={handleTwitterLogin} className="btn-twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  Sign up with Twitter
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
