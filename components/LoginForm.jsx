import React, { useState } from 'react';
import axios from 'axios'
import Cookies from 'js-cookie';
import './LoginForm.css';

import {useNavigate } from 'react-router-dom';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    console.log('Email:', email);
    let loginResponse;
    try {
      loginResponse = await axios.post('http://localhost:3000/users/login',{
        email: email,
        password: password,
      })


      //console.log(accessToken);
      const {accessToken,refreshToken} = loginResponse.data;
       
      Cookies.set('access_token', accessToken);
      Cookies.set('refresh_token', refreshToken);
      //Send access token in Authorization header in each request
      
      navigate('/');
      
    } catch (axiosError) {
      
      const error = axiosError.response.data.error;
      console.log("data:",axiosError.response.data);
      console.log("error:", error);

      if(error){
        setError(error);
        return;
      }
      
      console.log(axiosError);
    }


  };

  return (
    <div>
    <div className='form-wrapper'>
      <div>
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit} className='login-form'>
          <label className='form-field'>
            Email:
            <input className='form-field-input' type="text" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label className='form-field'>
            Password:
            <input className='form-field-input' type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
        <p>{error}</p>

      </div>
      
    </div>
    </div>
  );
};

export default LoginForm;