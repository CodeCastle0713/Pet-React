import "./style.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  window.onscroll = () => {
    scrollHeader();
  };
  const [navbar, setNavbar] = useState("");
  const scrollHeader = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      setNavbar("toggle-header-middle");
    } else {
      setNavbar("");
    }
  };

  const [disNone, setDisNone] = useState("d-none");

  const displayNone = () => {
    if (disNone === "d-none") {
      setDisNone("d-block");
    } else setDisNone("d-none");
  };

  return (
    <nav className="menu">
      <div id="toggle-header" className={`header ${navbar}`}>
        <div className="container d-flex justify-content-between">
          <div className="d-flex align-items-center text-white gap-1">
            <img src="./asset/img/logo.png" alt="none" />
            <span>PAWTASTIC</span>
          </div>
          <div className="navbar">
            <img
              className="menu-img"
              onClick={displayNone}
              src="./asset/img/asset1.png"
              alt="none"
            />
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#review">Review</a>
              </li>
              <li>
                <a href="#service">Service</a>
              </li>
              <li>
                <Link to="/signup">Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ul className={`mobile-menu ${disNone}`}>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#review">Review</a>
        </li>
        <li>
          <a href="#service">Service</a>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
