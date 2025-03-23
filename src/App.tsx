import Navbar from "./components/Navbar/Navbar";
import Autocomplete from "./components/Autocomplete/Autocomplete";
import Pagination from "./components/Pagination/Pagination";
import ThreeColumnGrid from "./components/ThreeColumnGridSimple/ThreeColumnGrid";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
const App = () => {
  return (
    <>
      <div className="app-wrapper">
        <div className="content-container">
          <h3>
            <Link to="/">Home</Link>
          </h3>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/autocomplete" element={<Autocomplete />} />
            <Route path="/pagination" element={<Pagination />} />
            <Route path="/three-column-grid" element={<ThreeColumnGrid />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
