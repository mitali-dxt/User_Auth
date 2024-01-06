// AdditionalInfoForm.jsx
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "../Card/Card";
import "./AdditionalInfoForm.css";


const AdditionalInfoForm = ({ setIsLoggedIn }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userType, setUserType] = useState(""); // "freelancer" or "client"
  const [agree, setAgree] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    // Handle the submission of additional information
    e.preventDefault();

    // Validate the form fields and perform necessary actions
    if (firstName && lastName && userType && agree) {
      // Process the user's additional information
      // For example, you can send the data to the server or update state
      // Set isLoggedIn to true once the user is successfully signed up
      setIsLoggedIn(true);
      history.push("/wallet-info");
    } else {
      // Handle form validation errors
      console.log("Please fill out all fields and agree to the terms.");
    }
  };

  return (
    <Card>
      <h1 className="title">Additional Information</h1>
      <p className="subtitle">Provide additional details to complete your signup.</p>
      <form onSubmit={handleSubmit}>
        <div className="inputs_container">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <h2 className="radio_heading">I am a :</h2>
          <div className="radio_container">
        <div className="radio_option">
          <input
            type="radio"
            value="freelancer"
            checked={userType === "freelancer"}
            onChange={() => setUserType("freelancer")}
          />
          <label>Freelancer</label>
        </div>
        <div className="radio_option">
          <input
            type="radio"
            value="client"
            checked={userType === "client"}
            onChange={() => setUserType("client")}
          />
          <label>Client</label>
        </div>
      </div>
          <label>
            <input
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
            />
            <span>I agree to the terms and conditions</span>
          </label>
        </div>
        <input type="submit" value="Create My Account" className="signup_button" />
      </form>
    </Card>
  );
};

export default AdditionalInfoForm;
