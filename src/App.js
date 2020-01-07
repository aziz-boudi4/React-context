import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import { UserProvider, UserConsumer } from './UserContext';
import './index.css';

const App = () => {
  return (
    <UserProvider>
      <UserConsumer>
        {({ user }) =>
          user ? (
            <MainPage />
          ) : (
            <LoginPage />
          )
        }
      </UserConsumer>
    </UserProvider>
  )
}


export default App
