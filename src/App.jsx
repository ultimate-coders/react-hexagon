import React from 'react';
import './App.scss';
import AuthPage from './pages/AuthPage'
import Welcome from './components/welcome'
import SignUp from './components/signup'
import Verify from './components/verify'
import ForgotPassword from './components/forgotPassword' 
import ChangePassword from './components/changePassword' 
import Header from './components/header'


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
