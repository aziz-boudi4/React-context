import React, { useState } from "react";
import { FAKE_USER } from "./api";

const { Provider, Consumer } = React.createContext();
// Context.Consumer and Context.Provider

const UserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(FAKE_USER)

  const handleLogin = (user) => {
    setCurrentUser(user)
  }

  const handleLogout = () => {
    setCurrentUser(null)
  }

  return (
    <Provider
      value={{
        user: currentUser,
        onLogin: handleLogin,
        onLogout: handleLogout
      }}>
        {props.children}
    </Provider>
  )
}


export { UserProvider, Consumer as UserConsumer };
