import { useState } from "react";
import "./SearchBar.scss";
const types = ["buy", "rent"];
const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType("buy")}
            className={query.type === type ? "active" : ""}
          >
            Buy
          </button>
        ))}
      </div>
      <form action="">
        <input type="text" name="location" placeholder="City Locaion" />
        <input
          type="text"
          name="miniPrice"
          min={0}
          max={1000000}
          placeholder="Mini Price"
        />
        <input
          type="text"
          name="location"
          min={0}
          max={1000000}
          placeholder="City Locaion"
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
