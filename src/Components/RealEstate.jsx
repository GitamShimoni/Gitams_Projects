import ReactFlipCard from "reactjs-flip-card";
import "./RealEstate.css";
const RealEstate = () => {
  const styles = {
    card: {
      background: "blue",
      color: "white",
      borderRadius: 20,
    },
  };
  return (
    <div id="realestate-container">
      <h1 id="realestate-header">FindMyNest</h1>
      <a href="https://findmynest.netlify.app/">
        <ReactFlipCard
          frontStyle={styles.card}
          backStyle={styles.card}
          containerCss="findmynest-container"
          frontComponent={
            <img
              id="findmynest-picture"
              src="https://i.ibb.co/0nQVZfg/3.png"
              alt="Shift Manager Pro Image"
            />
          }
          backComponent={
            <div id="findmynest-container-back">
              <h3 className="findmynest-description-header">{`FindMyNest is a project demonstrating a real-estate agency.`}</h3>
              <h3 className="findmynest-description-header">{`In FindMyNest there is a listing of estates, with many ways to filter the results.`}</h3>
              <h3 className="findmynest-description-header">{`Each property has it's own page, with it's specific description.`}</h3>
              <h3 className="findmynest-description-header">{`This site offers a different design approach, and an example usage of complex queries in javascript.`}</h3>
            </div>
          }
        />
      </a>
    </div>
  );
};

export default RealEstate;
