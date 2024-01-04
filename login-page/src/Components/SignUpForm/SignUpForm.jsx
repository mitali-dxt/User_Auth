import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Card from "../Card/Card";
import AdditionalInfoForm from "../AdditionalInfoForm/AdditionalInfoForm";
import "./SignUpForm.css";

const SignUpForm = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form submission logic (add your registration logic here)
    setIsLoggedIn(true);

    // Redirect to AdditionalInfoForm
    history.push("/additional-info");
  };

  return (
    <Card>
      <h1 className="title">Sign Up</h1>
      <p className="subtitle">Create a new account!</p>
      <form onSubmit={handleSubmit}>
        <div className="inputs_container">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="Sign Up" className="signup_button" />
      </form>
      <div className="link_container">
        <Link to="/login" className="small">
          Already have an account? Login
        </Link>
      </div>
    </Card>
  );
};

export default SignUpForm;
