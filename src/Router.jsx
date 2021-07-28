import AuthPage from "./pages/AuthPage";
import TimeLinePage from "./pages/TimeLinePage";
import React from "react";
import Welcome from "./components/sign/welcome";
import SignUp from "./components/sign/signup";
import Verify from "./components/sign/verify";
import ForgotPassword from "./components/password/forgotPassword";
import ChangePassword from "./components/password/changePassword";
import Header from "./components/header/header";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Error from "./pages/404Error";
import AboutUs from "./pages/aboutus";
import ProfilePage from "./pages/ProfilePage";
import Messages from "./pages/MessagesPage";
import AuthController from "./components/authController";
const RouterComponent = () => {
  return (
    <Router>
      <Switch>
          <Route exact path='/signin'>
            <Welcome />
          </Route>
          <Route exact path='/signup'>
            <SignUp />
          </Route>
          <Route exact path='/forgotpassword'>
            <ForgotPassword />
          </Route>
          <Route exact path='/verify'>
            <Verify />
          </Route>
          <Route exact path="/Verify">
            <Verify />
          </Route>
        <AuthController>
        <Switch>
        {/* <Header/> */}
          <Route exact path='/'>
            <TimeLinePage />
          </Route>
          <Route exact path='/changepassword'>
            <ChangePassword />
          </Route>
          <Route exact path='/google-auth'>
            <AuthPage />
          </Route>
          <Route exact path='/messages'>
            <Messages />
          </Route>
          <Route exact path="/profile/:username">
            <ProfilePage />
          </Route>
          <Route exact path="/aboutus">
            <AboutUs />
          </Route>
          <Route  path="*">
            <Error />
          </Route> 
        </Switch>
        </AuthController>
      </Switch>
    </Router>
    // <Router>
    //   <Switch>
    //     <Route exact path="/">
    //       <Welcome />
    //     </Route>
    //     <Route exact path="/signup">
    //       <SignUp />
    //     </Route>
    //       <Route exact path="/forgotpassword">
    //         <ForgotPassword />
    //       </Route>
    //       <Route exact path="/google-auth">
    //         <AuthPage />
    //       </Route>
    //       <Route exact path="/Verify">
    //         <Verify />
    //       </Route>
    //     <AuthController>
    //       <Route exact path="/home">
    //         <TimeLinePage />
    //       </Route>
    //       <Route exact path="/changepassword">
    //         <ChangePassword />
    //       </Route>
    //       <Route exact path="/messages">
    //         <Messages />
    //       </Route>
    //       <Route exact path="/me">
    //         <ProfilePage />
    //       </Route>
    //     </AuthController>
    //   </Switch>
    // </Router>
  );
};
export default RouterComponent;