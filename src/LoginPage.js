import React, { useState, useEffect } from "react";
import { login } from './api';
import { UserConsumer } from './UserContext';

const LoginPage = (props) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e, onLogin) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    login(username, password)
      .then(user => {
        setLoading(false)
        onLogin(user);
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      })
    }



  return (
    <UserConsumer>
      {({ onLogin }) =>
          <div className="LoginPage">
            <form onSubmit={e => handleSubmit(e, onLogin)}>
              <label>
                Username
                <input
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <label>
                Password
                <input
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              {error && <div className="error">{error.message}</div>}
              <button type="submit" disabled={loading}>
                Sign In
              </button>
            </form>
          </div>
        }
    </UserConsumer>
  )
}

export default LoginPage;
