import { useCallback, useEffect, useState } from "react";
import "./autocomplete.css";

interface Post {
  id: number;
  title: string;
}
interface Cache {
  [key: string]: Post[];
}
const Autocomplete = () => {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState<Post[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [cache, setCache] = useState<Cache>({});
  const fetchData = useCallback(async () => {
    if (cache[searchInput]) {
      console.log("Cache returns", searchInput);
      setResults(cache[searchInput]);
      return;
    }
    const data = await fetch(
      `https://dummyjson.com/posts/search?q=${searchInput}`
    );
    const dataJson = await data.json();
    console.log("API returns", searchInput);
    setResults(dataJson?.posts);
    setCache((prev) => ({ ...prev, [searchInput]: dataJson?.posts }));
  }, [searchInput]);
  useEffect(() => {
    const timer = setTimeout(fetchData, 400);
    return () => {
      clearTimeout(timer);
    };
  }, [fetchData]);
  return (
    <>
      {/* Input Box */}
      {/* Fetch Data */}
      {/* Show Data */}
      {/* Properly Show data - when clicked outside the box - the box should disappear */}
      {/* Debounced Search */}
      {/* Cache */}
      <div className="autocomplete">
        <div className="autocomplete__search-container">
          <input
            type="text"
            className="autocomplete__search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onFocus={() => {
              setShowResults(true);
            }}
            onBlur={() => {
              setShowResults(false);
            }}
          />
        </div>
        {showResults ? (
          <div className="autocomplete__results">
            {results.map((r) => {
              return (
                <span className="autocomplete__results-result" key={r.id}>
                  {r.title}
                </span>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Autocomplete;
