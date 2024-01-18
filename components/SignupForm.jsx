import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic form validation
    if (!name || !email || !password || !role) {
      setError('All fields are required');
      return;
    }

    try {
      const response = await axios.post('YOUR_SIGNUP_API_ENDPOINT', {
        name: name,
        email: email,
        password: password,
        role: role,
      });

      // Handle the response (e.g., redirect to login page)
      console.log('Signup successful:', response.data);

      // Reset form fields
      setName('');
      setEmail('');
      setPassword('');
      setRole('');
      setError('');
    } catch (error) {
      // Handle errors
      console.error('Error during signup:', error.message);
      setError('Error during signup. Please try again.');
    }
  };

  return (
    <div>
      <h2>Signup Form</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <label>
          Role:
          <input type="text" value={role} onChange={handleRoleChange} />
        </label>
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupForm;
