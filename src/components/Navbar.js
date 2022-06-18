import React, { useState } from "react";
import Logo from "../images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="lgo" />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/">About</a>
        </li>
        <li className="nav-item">
          <a href="/">FAQ</a>
        </li>
        <li className="nav-item">
          <a href="/">Contact</a>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes size={40} /> : <FaBars size={40} />}
      </div>
    </div>
  );
};

export default Navbar;
