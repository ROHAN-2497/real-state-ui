import Navber from "./components/navbar/Navber";
import HomePage from "./routes/homePage/homePage";
import "./layout.scss";
function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navber />
      </div>
      <div className="content">
        {" "}
        <HomePage />
      </div>
    </div>
  );
}

export default App;
