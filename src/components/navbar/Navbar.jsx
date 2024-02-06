
import React from 'react';
import { Link } from 'react-router-dom'; 
import './navbar.css'; 
function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">IT FIRM</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          
        </ul>
      </div>
    </nav>
      
  );
}

export default Navbar;
