import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
const layOut = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        {" "}
        <Outlet />
      </div>
    </div>
  );
};

export default layOut;
