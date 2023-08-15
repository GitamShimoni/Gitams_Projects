import ReactFlipCard from "reactjs-flip-card";
import "./ShiftManagerPro.css";
const ShiftManagerPro = () => {
  const styles = {
    card: {
      background: "blue",
      color: "white",
      borderRadius: 20,
    },
  };
  return (
    <div id="shiftmanagerpro-container">
      <h1 id="shiftmanagerpro-header">Shift Manager Pro</h1>
      <a href="https://shiftmanagerpro.netlify.app/">
        <ReactFlipCard
          frontStyle={styles.card}
          backStyle={styles.card}
          containerCss="shift-manager-pro-container"
          frontComponent={
            <img
              id="shift-manager-pro-picture"
              src="https://i.ibb.co/2cDZKzt/2.png"
              alt="Shift Manager Pro Image"
            />
          }
          backComponent={
            <div id="shift-manager-pro-container-back">
              <h3 className="shift-manager-pro-description-header">{`Shift Manager Pro is a mid-course project encompassing two distinct sides.`}</h3>
              <h3 className="shift-manager-pro-description-header">{`On the User side: individuals can select shifts based on their preferences, communicate with their manager, and access a dashboard to view shifts and messages.`}</h3>
              <h3 className="shift-manager-pro-description-header">{`On the Admin side: A list of worker requests, a weekly shift calendar, and a messages hub.`}</h3>
            </div>
          }
        />
      </a>
    </div>
  );
};

export default ShiftManagerPro;
