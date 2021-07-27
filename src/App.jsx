import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from './store';
import RouterComponent from './Router';
import SocketService from './SocketService';

const App = () => {
  // Import the page you are working on and comment the others to test

  return (
    <Provider store={store} >
      <SocketService />
      <RouterComponent />
    </Provider>
  );
};

export default App;
