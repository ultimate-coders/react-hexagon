import AuthPage from './pages/AuthPage';
import TimeLinePage from './pages/TimeLinePage';
import React from 'react';
import Welcome from './components/sign/welcome';
import SignUp from './components/sign/signup';
import Verify from './components/sign/verify';
import ForgotPassword from './components/password/forgotPassword';
import ChangePassword from './components/password/changePassword';
import Header from './components/header/header';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import ProfilePage from './pages/ProfilePage';

import Messages from './pages/MessagesPage';

import AuthController from './components/authController';

const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <AuthController>
        {/* <Header/> */}
          <Route exact path='/signin'>
            <Welcome />
          </Route>
          <Route exact path='/signup'>
            <SignUp />
          </Route>
          <Route exact path='/forgotpassword'>
            <ForgotPassword />
          </Route>
          <Route exact path='/'>
            <TimeLinePage />
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
          <Route exact path='/messages'>
            <Messages />
          </Route>
          <Route exact path='/me'>
            <ProfilePage />
          </Route>
        </AuthController>
      </Switch>
    </Router>
  );
};

export default RouterComponent;