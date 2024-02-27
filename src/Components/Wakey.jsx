import ReactFlipCard from "reactjs-flip-card";
import "./Wakey.css";
const Wakey = () => {
  const styles = {
    card: {
      background: "yellow",
      color: "yellow",
      borderRadius: 20,
    },
  };
  return (
    <div id="createcv-container">
      <h1 id="createcv-header">Wakey</h1>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://wakeyapp.netlify.app//"
      >
        <ReactFlipCard
          frontStyle={styles.card}
          backStyle={styles.card}
          containerCss="wakey-container"
          frontComponent={
            <img
              id="createcv-picture"
              src="https://i.ibb.co/bg8fwZN/image.png"
              alt="Create CV"
            />
          }
          backComponent={
            <div id="wakey-container-back">
              <h3 className="wakey-description-header">{`Wakey is a webapp designed to wake up users before they arrive to their destination.`}</h3>
              <h3 className="wakey-description-header">{`In Wakey, Users can choose their transportation endpoint and wakeup-time, Wakey will wake them up accordingly using real time bus and location data.`}</h3>
              <h3 className="wakey-description-header">{`Each user has his own preferences, like preffered Wake-Up Call Style.`}</h3>
              <h3 className="wakey-description-header">{`This webapp is an example integration of my front & back end skills, resulting a useful product for all users.`}</h3>
            </div>
          }
        />
      </a>
    </div>
  );
};

export default Wakey;
