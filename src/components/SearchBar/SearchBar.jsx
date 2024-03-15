import { useState } from "react";
import "./SearchBar.scss";
const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = () => {};

  return (
    <div className="searchBar">
      <div className="type">
        <button onClick={() => switchType("buy")} className="">
          Buy
        </button>
        <button className="">Rent</button>
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
