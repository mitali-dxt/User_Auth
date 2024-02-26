import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import SignUpForm from "./Components/SignUpForm/SignUpForm";
import LoggedIn from "./Components/LoggedIn/LoggedIn";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [walletAddress, setWalletAddress] = useState(""); // Define setWalletAddress using useState

  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/signup" exact>
          {/* Pass setIsLoggedIn and setWalletAddress to SignUpForm */}
          <SignUpForm setIsLoggedIn={setIsLoggedIn} setWalletAddress={setWalletAddress} />
        </Route>
        <Route path="/loggedIn" exact>
          <LoggedIn setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
