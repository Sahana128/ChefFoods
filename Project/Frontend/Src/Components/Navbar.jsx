import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Make sure you have styling for the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">🍽️ ChefFoods</div>
      <ul className="nav-links">
        <li><Link to="/">🏠 Home</Link></li>
        <li><Link to="/menu">🍕 Menu</Link></li>
        <li><Link to="/about">ℹ️ About</Link></li>
        <li><Link to="/contact">📞 Contact</Link></li>
        <li><Link to="/login" className="auth-link">🔑 Login</Link></li>
        <li><Link to="/register" className="auth-link">📝 Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
