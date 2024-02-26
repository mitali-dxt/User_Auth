import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "../Card/Card";
import "./SignUpForm.css";

const SignUpForm = ({ setIsLoggedIn, setWalletAddress }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userType, setUserType] = useState(""); // "freelancer" or "client"
  const [walletAddressInput, setWalletAddressInput] = useState("");
  const history = useHistory();

  const handleSignUp = (e) => {
    e.preventDefault();

    // Validate the form fields
    if (!firstName || !lastName || !userType || !walletAddressInput) {
      alert("Please fill out all fields.");
      return;
    }

    // Perform sign up logic here
    history.push("/loggedIn");
    // For simplicity, assuming sign up is successful
    setIsLoggedIn(true);
    setWalletAddress(walletAddressInput);

    // Redirect to dashboard or another page
    history.push("/loggedIn");
  };

  return (
    <Card>
      <h1 className="title">Sign Up</h1>
      <p className="subtitle">Create a new account!</p>
      <form onSubmit={handleSignUp}>
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
          <input
            type="text"
            placeholder="Wallet Address"
            value={walletAddressInput}
            onChange={(e) => setWalletAddressInput(e.target.value)}
          />
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
        </div>
        <input type="submit" value="Create My Account" className="signup_button" />
      </form>
    </Card>
  );
};

export default SignUpForm;
