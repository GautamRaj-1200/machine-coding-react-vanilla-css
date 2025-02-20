import { useEffect, useRef, useState } from "react";
import "./navbar.css";
const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState<boolean>(false);
  const navbarRef = useRef<HTMLUListElement | null>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  const toggleNavbar = () => {
    setNavbarVisible(!navbarVisible);
  };
  console.log(navbarVisible);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target as Node) &&
      hamburgerRef.current &&
      !hamburgerRef.current.contains(event.target as Node)
    ) {
      setNavbarVisible(false);
    }
  };
  const handleLinkClick = () => {
    setNavbarVisible(false);
  };

  useEffect(() => {
    if (navbarVisible)
      document.addEventListener("mousedown", handleClickOutside);
  }, [navbarVisible]);

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="navbar__logo">
            <h1>Brand Logo</h1>
          </div>
          <ul
            ref={navbarRef}
            className={`navbar__list ${navbarVisible ? "active" : ""}`}
          >
            <li className="navbar__item">
              <a href="#" className="navbar__link" onClick={handleLinkClick}>
                Home
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link" onClick={handleLinkClick}>
                About
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link" onClick={handleLinkClick}>
                Contact
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link" onClick={handleLinkClick}>
                Blogs
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link" onClick={handleLinkClick}>
                {" "}
                SignUp
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link" onClick={handleLinkClick}>
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
