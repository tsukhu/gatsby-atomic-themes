import React from 'react';

const defaultState = {
  user: false, // user has not logged in
  logoutUser: () => {}, // get the publish ID from the Campaign ID
  validateUser: () => {}, // get the publish ID from the Campaign ID
};

const AuthContext = React.createContext(defaultState);

export default AuthContext;
