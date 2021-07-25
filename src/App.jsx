import React from 'react';
import './App.scss';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import store from './store';
import RouterComponent from './Router';
=======
import AuthPage from './pages/AuthPage'
import Error from './pages/404Error'
import TimeLinePage from "./pages/TimeLinePage";
import Welcome from "./components/sign/welcome";
import SignUp from "./components/sign/signup";
import Verify from "./components/sign/verify";
import ForgotPassword from "./components/password/forgotPassword";
import ChangePassword from "./components/password/changePassword";
import Header from "./components/header/header";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import ProfilePage from "./pages/ProfilePage";

import Messages from "./pages/MessagesPage";
>>>>>>> e4f70983cae89a6f2dbc4a3948614eca6ec2c450

const App = () => {
  // Import the page you are working on and comment the others to test

  return (
<<<<<<< HEAD
    <Provider store={store} >
      <RouterComponent />
    </Provider>
=======
    <React.Fragment>
      <Error/>
      {/* <AuthPage /> */}
      <Router>
        <Switch>
          <Route exact path="/home">
            <TimeLinePage />
          </Route>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/forgotpassword">
            <ForgotPassword />
          </Route>
          <Route exact path="/changepassword">
            <ChangePassword />
          </Route>
          <Route exact path="/Verify">
            <Verify />
          </Route>
          <Route exact path="/google-auth">
            <AuthPage />
          </Route>
          <Route exact path="/messages">
            <Messages />
          </Route>
          <Route exact path="/me">
            <ProfilePage />
          </Route>
        </Switch>
      </Router>
      {/* <Header/> */}
    </React.Fragment>
>>>>>>> e4f70983cae89a6f2dbc4a3948614eca6ec2c450
  );
};

export default App;
