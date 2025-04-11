import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-bold">SPR</span>
        <span className="logo-sub">GLOBAL</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutus">About</Link></li>
        <li><Link to="/brands">Brands</Link></li>
        <li><Link to="/opportunities">Opportunities</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-button">
        <Link to="/inquire"><button>Inquire Now</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
