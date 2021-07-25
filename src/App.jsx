import React from 'react';
import './App.scss';
// import AuthPage from './pages/AuthPage'
import Messages from './pages/MessagesPage'

const App = () => {
  // Import the page you are working on and comment the others to test

  return (
    <React.Fragment>
      {/* <AuthPage /> */}
      <Messages/>
    </React.Fragment>
  );
}

export default App;
