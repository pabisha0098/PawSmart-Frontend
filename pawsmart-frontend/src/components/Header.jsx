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
          <div className="logo-placeholder">Logo</div>
          <Link to="/" className="brand-name">PawSmart Shop</Link>
        </div>
        
        <nav className="header-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About us</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/contact" className="nav-link">Contact us</Link>
          <Link to="/gallery" className="nav-link">Gallery</Link>
        </nav>
        
        <div className="header-right">
          {isLoginPage && (
            <Link to="/register" className="header-signup-btn">Sign Up</Link>
          )}
          {!isLoginPage && !isRegisterPage && (
            <Link to="/register" className="header-signup-btn">Sign Up</Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

