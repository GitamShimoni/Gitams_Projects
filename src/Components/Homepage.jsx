import ReactFlipCard from "reactjs-flip-card";
import "./Homepage.css";
import ShiftManagerPro from "./ShiftManagerPro";
import RealEstate from "./RealEstate";
import CreateCv from "./CreateCv";
const Homepage = () => {
  return (
    <div id="homepage-container">
      <h1 id="main-homepage-header">A couple of Gitam's Projects:</h1>
      <div id="homepage-main-container">
        <ShiftManagerPro />
        <RealEstate />
        <CreateCv />
      </div>
    </div>
  );
};

export default Homepage;
