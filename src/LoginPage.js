import React, { useState, useEffect } from "react";
import { login } from './api';

// Double Check best practice:

// handleInputChange = e => {
//   this.setState({
//     [e.target.name]: e.target.value
//   });
// };

const LoginPage = ({ props }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = e => {
    if(e.target.name === 'username') {
      setUsername(e.target.value)
    } else if (e.target.name === 'password') {
      setPassword(e.target.value)
    }
  }

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
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            value={password}
            onChange={handleInputChange}
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
