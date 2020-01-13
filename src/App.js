import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import { UserProvider, UserConsumer } from './UserContext';
import { EmailProvider } from './EmailContext';
import './index.css';

const App = () => {
  return (
    <UserProvider>
      <EmailProvider>
        <UserConsumer>
          {({ user }) =>
            user ? (
              <MainPage />
            ) : (
              <LoginPage />
            )
          }
        </UserConsumer>
      </EmailProvider>
    </UserProvider>
  )
}


export default App
