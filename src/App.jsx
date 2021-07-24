import React from 'react';
import './App.scss';
import AuthPage from './pages/AuthPage'
import Welcome from './components/sign/welcome'
import SignUp from './components/sign/signup'
import Verify from './components/sign/verify'
import ForgotPassword from './components/password/forgotPassword' 
import ChangePassword from './components/password/changePassword' 
import Header from './components/header/header'


const App = () => {
  // Import the page you are working on and comment the others to test

  return (
    <React.Fragment>
      {/* <ForgotPassword/> */}
      {/* <ChangePassword/> */}
      {/* <Verify/> */}
      {/* <SignUp/> */}
      {/* <Header/> */}
      <Welcome/>
      {/* <AuthPage /> */}
    </React.Fragment>
  );
}

export default App;
