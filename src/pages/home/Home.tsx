import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <section className="home">
      <div className="home__container">
        <nav>
          <ul>
            <li>
              <Link to="/navbar">Navbar</Link>
            </li>
            <li>
              <Link to="/autocomplete">Autocomplete</Link>
            </li>
            <li>
              <Link to="/pagination">Pagination</Link>
            </li>
            <li>
              <Link to="/three-column-grid">Three Column Grid</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Home;
