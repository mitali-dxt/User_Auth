// LoginForm.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Card from "../Card/Card";
import "./LoginForm.css";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { database } from "../../utils/database";

const LoginForm = ({ setIsLoggedIn }) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const history = useHistory();

  const errors = {
    walletAddress: "Invalid wallet address",
    noWalletAddress: "Please enter your wallet address",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!walletAddress) {
      setErrorMessages({ name: "noWalletAddress", message: errors.noWalletAddress });
      return;
    }

    const currentUser = database.find((user) => user.walletAddress === walletAddress);

    if (currentUser) {
      setErrorMessages({});
      setIsLoggedIn(true);
      history.push("/loggedIn");
    } else {
      setErrorMessages({ name: "walletAddress", message: errors.walletAddress });
    }
  };

  const renderErrorMsg = (name) =>
    name === errorMessages.name && (
      <p className="error_msg">{errorMessages.message}</p>
    );

  return (
    <Card>
      <h1 className="title">Log In</h1>
      <p className="subtitle">Please log in using your wallet address!</p>
      <form onSubmit={handleSubmit}>
        <div className="inputs_container">
          <input
            type="text"
            placeholder="Wallet Address"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
          {renderErrorMsg("walletAddress")}
          {renderErrorMsg("noWalletAddress")}
        </div>
        <input type="submit" value="Log In" className="login_button" />
      </form>
      <div className="link_container">
        <Link to="/signup" className="small">
          Don't have an account? Sign Up
        </Link>
      </div>
      <div className="icons">
        <GoogleIcon className="icon" />
        <FacebookIcon className="icon" />
        <TwitterIcon className="icon" />
      </div>
    </Card>
  );
};

export default LoginForm;
