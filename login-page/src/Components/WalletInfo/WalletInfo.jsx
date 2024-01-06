// WalletInfo.jsx

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "../Card/Card";
import "./WalletInfo.css"; // Create a CSS file for styling if needed

const WalletInfo = ({ setWalletAddress }) => {
  const [walletAddressInput, setWalletAddressInput] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation - you may want to add more sophisticated validation
    if (walletAddressInput.trim() === "") {
      alert("Please enter your wallet address.");
      return;
    }

    // Save the wallet address to state (or send it to your server/blockchain)
    setWalletAddress(walletAddressInput);

    // Redirect to another page or perform other actions as needed
    history.push("/dashboard");
  };

  return (
    <Card>
      <h1 className="title">Wallet Information</h1>
      <p className="subtitle">Provide your wallet address for authorization!</p>
      <form onSubmit={handleSubmit}>
        <div className="inputs_container">
          <label>
            Wallet Address:
            <input
              type="text"
              placeholder="Enter your wallet address"
              value={walletAddressInput}
              onChange={(e) => setWalletAddressInput(e.target.value)}
            />
          </label>
        </div>
        <input type="submit" value="Submit" className="login_button" />
      </form>
    </Card>
  );
};

export default WalletInfo;
