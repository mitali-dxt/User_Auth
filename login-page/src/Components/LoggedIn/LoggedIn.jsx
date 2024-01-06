import React from "react";
import { useHistory } from "react-router-dom"; // Import useHistory
import "./LoggedIn.css";

const LoggedIn = ({ setIsLoggedIn }) => {
  const history = useHistory(); // Use useHistory for navigation

  const handleGoBack = () => {
    setIsLoggedIn(false);
    history.push("/login"); // Use history.push to navigate back to the login page
  };

  return (
    <>
      <h1 className="title">You are now logged in!</h1>
      <button className="back_button" onClick={handleGoBack}>
        Go Back
      </button>
    </>
  );
};

export default LoggedIn;
