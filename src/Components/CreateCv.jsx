import ReactFlipCard from "reactjs-flip-card";
import "./CreateCv.css";
const CreateCv = () => {
  const styles = {
    card: {
      background: "blue",
      color: "white",
      borderRadius: 20,
    },
  };
  return (
    <div id="createcv-container">
      <h1 id="createcv-header">CreateCv</h1>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://create-acv.netlify.app/"
      >
        <ReactFlipCard
          frontStyle={styles.card}
          backStyle={styles.card}
          containerCss="findmynest-container"
          frontComponent={
            <img
              id="createcv-picture"
              src="https://i.ibb.co/xYnSyJh/3.png"
              alt="Create CV"
            />
          }
          backComponent={
            <div id="createcv-container-back">
              <h3 className="createcv-description-header">{`CreateCv is a project using both front and back-end`}</h3>
              <h3 className="createcv-description-header">{`In CreateCv, a user can create a CV easily, save it, download it as a pdf and edit it.`}</h3>
              <h3 className="createcv-description-header">{`All CV's are stored in a database, and each user can only access it's own.`}</h3>
              <h3 className="createcv-description-header">{`This site is an example of my ability to integrate both front-end and back-end together to create a full user experience.`}</h3>
            </div>
          }
        />
      </a>
    </div>
  );
};

export default CreateCv;
