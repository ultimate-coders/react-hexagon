import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Import Reducers
import { userDetailReducer } from './userDetails';
import { chatReducer } from './chat';

const reducers = combineReducers({
  userDetail: userDetailReducer,
  chat: chatReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();
