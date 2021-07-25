<<<<<<< HEAD
import React from "react";
import "./App.scss";
import AuthPage from "./pages/AuthPage";
import Welcome from "./components/sign/welcome";
import SignUp from "./components/sign/signup";
import Verify from "./components/sign/verify";
import ForgotPassword from "./components/password/forgotPassword";
import ChangePassword from "./components/password/changePassword";
import Header from "./components/header/header";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
=======
import React from 'react';
import './App.scss';
// import AuthPage from './pages/AuthPage'
import Messages from './pages/MessagesPage'
>>>>>>> messages-component

const App = () => {
  // Import the page you are working on and comment the others to test

  return (
    <React.Fragment>
<<<<<<< HEAD
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path='/forgotpassword'>
            <ForgotPassword />
          </Route>
          <Route exact path='/changepassword'>
            <ChangePassword />
          </Route>
          <Route exact path='/Verify'>
            <Verify />
          </Route>
          <Route exact path='/google-auth'>
            <AuthPage />
          </Route>
        </Switch>
      </Router>
      {/* <Header/> */}
=======
      {/* <AuthPage /> */}
      <Messages/>
>>>>>>> messages-component
    </React.Fragment>
  );
};

export default App;
