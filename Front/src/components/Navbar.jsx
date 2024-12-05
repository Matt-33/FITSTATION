import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/components/navbar.scss';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menu) => setActiveDropdown(menu);
  const handleMouseLeave = () => setActiveDropdown(null);

  return (
    <header className="navbar">
      <div className="navbar-top">
        <div className="navbar-logo">
          <Link to="/">FITSTATION</Link>
        </div>

        <div className="navbar-search">
          <input type="text" placeholder="Recherche..." />
        </div>

        <div className="navbar-right">
          <Link to="/login" className="profile-icon">
            <span className="material-icons">👤</span>
          </Link>

          <div className="cart-icon">
            <span className="material-icons">🛒</span>
          </div>
        </div>
      </div>

      <nav className="navbar-nav">
        <ul>
          <li
            onMouseEnter={() => handleMouseEnter("produits")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/products">Produits</Link>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter("vetements")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/apparel">Vêtements</Link>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter("programmes")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/programs">Nos Programmes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
