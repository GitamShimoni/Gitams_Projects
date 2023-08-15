import ReactFlipCard from "reactjs-flip-card";
import "./Homepage.css";
import ShiftManagerPro from "./ShiftManagerPro";
import RealEstate from "./RealEstate";
const Homepage = () => {
  return (
    <div id="homepage-container">
      <h1 id="main-homepage-header">A couple of Gitam's Projects:</h1>
      <div id="homepage-main-container">
        <ShiftManagerPro />
        <RealEstate />
      </div>
    </div>
  );
};

export default Homepage;
