import React, { useState } from "react";
import { Link, useHistory} from "react-router-dom";
import "./LoginForm.css";
import Card from "../Card/Card";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { database } from "../../utils/database";

const LoginForm = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const history = useHistory();

  const errors = {
    email: "Invalid email",
    password: "Invalid password",
    noEmail: "Please enter your email",
    noPassword: "Please enter your password",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setErrorMessages({ name: "noEmail", message: errors.noEmail });
      return;
    }

    if (!password) {
      setErrorMessages({ name: "noPassword", message: errors.noPassword });
      return;
    }

    const currentUser = database.find((user) => user.email === email);

    if (currentUser) {
      console.log("User found:", currentUser);
      if (currentUser.password !== password) {
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        console.log("Correct password, logging in...");
        setErrorMessages({});
        setIsLoggedIn(true);
        console.log("After successful login, redirecting to /loggedIn");
        history.push("/loggedIn");
      }
    } else {
      setErrorMessages({ name: "email", message: errors.email });
    }
  };

  const renderErrorMsg = (name) =>
    name === errorMessages.name && (
      <p className="error_msg">{errorMessages.message}</p>
    );

  return (
    <Card>
      <h1 className="title">Log In</h1>
      <p className="subtitle">Please log in using your email and password!</p>
      <form onSubmit={handleSubmit}>
        <div className="inputs_container">
          <input
            type="email" // Use type="email" for email input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {renderErrorMsg("email")}
          {renderErrorMsg("noEmail")}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {renderErrorMsg("password")}
          {renderErrorMsg("noPassword")}
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
