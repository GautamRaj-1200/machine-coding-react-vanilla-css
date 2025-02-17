import { useState } from "react";
import "./navbar.css";
const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState<boolean>(false);

  const toggleNavbar = () => {
    setNavbarVisible(!navbarVisible);
  };
  console.log(navbarVisible);
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="navbar__logo">
            <h1>Brand Logo</h1>
          </div>
          <ul className={`navbar__list ${navbarVisible ? "active" : ""}`}>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                Home
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                About
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                Contact
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                Blogs
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                {" "}
                SignUp
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                {" "}
                Login
              </a>
            </li>
          </ul>
          <div className="navbar__search-container">
            <input placeholder="search" className="navbar__search" />
            <button className="navbar__search-btn">Search</button>
          </div>
          <div onClick={toggleNavbar} className="navbar__hamburger">
            <div
              className={`navbar__hamburger-bar navbar__hamburger-bar1 ${
                navbarVisible ? "active" : ""
              }`}
            ></div>
            <div
              className={`navbar__hamburger-bar navbar__hamburger-bar2 ${
                navbarVisible ? "active" : ""
              }`}
            ></div>
            <div
              className={`navbar__hamburger-bar navbar__hamburger-bar3 ${
                navbarVisible ? "active" : ""
              }`}
            ></div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
