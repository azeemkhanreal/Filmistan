import React from "react";
import { useState, useEffect } from "react";
import "../layout/Navbar.css";
import logo from "../media/images/logo.png";
function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img src={logo} alt="" className="nav__logo" />
    </div>
  );
}

export default Navbar;
