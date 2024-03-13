import SearchBar from "../../components/SearchBar/SearchBar";
import "./homePage.scss";
const homePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Lorem ipsum dolor sit amet</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Laborum, mollitia!
            Illum aut repellat alias debitis aperiam inventore iusto incidunt
            provident mollitia minima magnam earum optio, natus nobis distinctio
            neque cumque!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        {" "}
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default homePage;
