import Navbar from "./components/Navbar/Navbar";
import Autocomplete from "./components/Autocomplete/Autocomplete";
import "./App.css";
import Pagination from "./components/Pagination/Pagination";
const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Autocomplete />
        <Pagination />
      </div>
    </>
  );
};

export default App;
