import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Only import signInWithEmailAndPassword
import { auth } from './firebase'; // Import Firebase authentication instance
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Use signInWithEmailAndPassword with the auth instance
      await signInWithEmailAndPassword(auth, email, password);
      setError(''); // Clear any previous error messages
    } catch (err) {
      setError(err.message); // Display any errors from Firebase
    }
  };

  return (
    <div>
      <h2>Educator Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: 'block', marginBottom: '10px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ display: 'block', marginBottom: '10px' }}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SignIn;