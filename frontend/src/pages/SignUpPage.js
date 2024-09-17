import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signUpUser } from '../api/auth';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signUpUser({ username, password });
      localStorage.setItem('token', response.data.token);  // Save JWT token
      localStorage.setItem('userId', response.data.user.id);  // Save user ID
      history.push('/');
    } catch (err) {
      setError('Sign-up failed. Username may already exist.');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
