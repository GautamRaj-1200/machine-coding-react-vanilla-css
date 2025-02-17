import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="navbar__logo">
            <h1>Brand Logo</h1>
          </div>
          <ul className="navbar__list">
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
        </nav>
      </header>
    </>
  );
};
export default Navbar;
