import React, { useState, useEffect } from "react";
import { login } from './api';

const LoginPage = (props) => {
  console.log('props in LoginPage', props);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = e => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    login(username, password)
      .then(user => {
        setLoading(false)
        props.onLogin(user);
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      })
    }



  return (
    <div className="LoginPage">
      <form onSubmit={handleSubmit}>
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
  )
}

export default LoginPage;
