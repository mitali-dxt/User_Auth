import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import SignUpForm from "./Components/SignUpForm/SignUpForm";
import AdditionalInfoForm from "./Components/AdditionalInfoForm/AdditionalInfoForm"; 
import LoggedIn from "./Components/LoggedIn/LoggedIn";
import WalletInfo from "./Components/WalletInfo/WalletInfo";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/signup" exact>
          <SignUpForm setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/additional-info" exact>
          <AdditionalInfoForm setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/loggedIn" exact>
          <LoggedIn setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/wallet-info" exact>
          <WalletInfo setWalletAddress={setWalletAddress} />
        </Route>
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
