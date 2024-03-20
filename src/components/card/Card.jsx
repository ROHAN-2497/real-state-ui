/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./card.scss";

// eslint-disable-next-line react/prop-types
const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt="" />
      </Link>
      <div className="textContainer">
        <h2>
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
      </div>
    </div>
  );
};

export default Card;
