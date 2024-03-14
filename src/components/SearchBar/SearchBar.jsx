import "./SearchBar.scss";
const SearchBar = () => {
  return (
    <div className="searchBar">
      <div className="type">
        <button className="">Buy</button>
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
