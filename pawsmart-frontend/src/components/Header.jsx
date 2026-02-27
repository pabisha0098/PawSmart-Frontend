import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';

  return (
    <header className="main-header">
      <div className="header-content">
        <div className="header-left">
          <div className="logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8C16 8 12 4 8 4C4 4 2 6 2 10C2 14 6 18 10 20C12 21 14 22 16 22C18 22 20 21 22 20C26 18 30 14 30 10C30 6 28 4 24 4C20 4 16 8 16 8Z" fill="#9B59B6"/>
              <circle cx="12" cy="12" r="2" fill="white"/>
              <circle cx="20" cy="12" r="2" fill="white"/>
              <path d="M10 18Q16 20 22 18" stroke="white" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <Link to="/" className="brand-name">PawSmart Shop</Link>
        </div>
        
        <nav className="header-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/about" className="nav-link">About</Link>
        </nav>
        
        <div className="header-right">
          {!isLoginPage && !isRegisterPage && (
            <>
              <Link to="/login" className="header-login-btn">Login</Link>
              <Link to="/register" className="header-signup-btn">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
