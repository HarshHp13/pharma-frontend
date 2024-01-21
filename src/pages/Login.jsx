import React, { useState } from 'react';
import axios from 'axios'
import Cookies from 'js-cookie';
import profile2 from "../assets/images/profile_2.png"
import "./Login.css"

import {useNavigate } from 'react-router-dom';


function Login() {

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
    <div className='login__container'>
        <div className="main">
    <div className="content">
      <div>
        <h1>Welcome to</h1>
        <h1>Company Name</h1>
      </div>
    </div>
    <div className="login">
      <div className="head">
        <div className="arrow"></div>
        <div>LOGIN WITH USERNAME</div>
      </div>
      <form method="post" action="" onSubmit={handleSubmit}>
        <img src={profile2} alt="" />
        <div className="form-group">
            <input type="text" name="username" id="username" className="form-control" required placeholder="USERNAME" onChange={handleEmailChange} />
        </div>
        <div className="form-group">
            <input type="password" name="password" id="password" className="form-control" required placeholder="PASSWORD" onChange={handlePasswordChange} />
        </div>
        <button type="submit">LOGIN</button>
    </form>
    </div>
  </div>
    </div>
  )
}

export default Login