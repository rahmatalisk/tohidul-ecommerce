import React from "react";

import "./Navbar.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const navItems = [
    {
      name: "Home",
      href: "/",
      active: true,
    },
    {
      name: "Service",
      href: "/",
      active: false,
    },
    {
      name: "About",
      href: "/",
      active: false,
    },
    {
      name: "Contact",
      href: "/",
      active: false,
    },
  ];
  return (
    <header>
      <div className="shape"></div>
      <div id="navbar">
        
        <div className="container">
          <div className="nav">
            <div className="logo">
              <h2>Logo</h2>
            </div>
            <div className="nav-item">
              <div className="nav-links">
                {navItems.map((item, i) => (
                  <Link
                    className={item.active ? "active" : ""}
                    key={i}
                    to={item.href}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <button className="login-btn">Login</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
