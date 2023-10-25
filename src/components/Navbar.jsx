import React from 'react';
import { Link } from "react-router-dom"; // Fixed the case of 'Link'

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <Link to="/Signup">
          <li>Signup</li>
        </Link>
        <Link to="/Cart">
          <li>Shopping Cart</li>
        </Link>
        <Link to="/About">
          <li>About us</li>
        </Link>
        <Link to="/Contact">
          <li>Contact us</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar; // Fixed the case of 'Navbar'
