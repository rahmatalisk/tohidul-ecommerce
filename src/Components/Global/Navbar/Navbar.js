import React from "react";

import "./Navbar.scss";

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
      <div id="navbar">
        <div className="shape"></div>
        <div className="container">
          <div className="nav">
            <div className="logo">
              <h2>Logo</h2>
            </div>
            <div className="nav-item">
              {navItems.map((it, i) => (
                <a className={`${it?.active && "active"}`} key={i} href="/">
                 {it?.name}
                </a>
              ))}

              <button className="login-btn">Login</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
