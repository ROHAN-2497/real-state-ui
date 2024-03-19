import { listData } from "../../lib/dummydata";
import Filter from "../../components/filter/filter";
import "./listPage.scss";
const listPage = () => {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
        </div>
      </div>
      <div className="mapContainer">Map</div>
    </div>
  );
};

export default listPage;
