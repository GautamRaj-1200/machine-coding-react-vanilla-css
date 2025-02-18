import Navbar from "./components/Navbar/Navbar";
import Autocomplete from "./components/Autocomplete/Autocomplete";
import "./App.css";
const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Autocomplete />
      </div>
    </>
  );
};

export default App;
