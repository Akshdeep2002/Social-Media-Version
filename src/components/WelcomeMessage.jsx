import "../routes/App.css";

const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <center className="welcome-message">
      <h1>No Posts Yet</h1>
      {/* <button type="button" onClick={onGetPostsClick} className="btn btn-primary">
        Get posts from server
      </button> */}
    </center>
  );
};

export default WelcomeMessage;
