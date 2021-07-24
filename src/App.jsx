import React from 'react';
import './App.scss';
import AuthPage from './pages/AuthPage'
// import Error from './pages/404Error'

const App = () => {
  // Import the page you are working on and comment the others to test

  return (
    <React.Fragment>
      {/* <Error/> */}
      <AuthPage />
    </React.Fragment>
  );
}

export default App;
