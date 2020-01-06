import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import UserContext from './UserContext';
import './index.css';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)

  const handleLogin = (user) => {
    setCurrentUser(user)
  }

  const handleLogout = () => {
    setCurrentUser(null)
  }

  return currentUser ? (
      <UserContext.Provider value={currentUser}>
        <MainPage onLogout={handleLogout}/>
      </UserContext.Provider>
      ) : (
        <LoginPage onLogin={handleLogin} />
      );
}


export default App
