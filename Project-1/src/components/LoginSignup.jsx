import React from 'react';
import { useState } from 'react';
import '../assets/css/LoginSignup.css';
import user_icon from '../assets/images/person.jpeg';
import email_icon from '../assets/images/email.jpeg';
import password_icon from '../assets/images/password.jpeg';


const LoginSignup = () => {
    const [action,setAction]=useState("Sign Up");
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        
        <div className="inputs">
        {
                action==="Login"?<div></div>:
                
                <div className="input"> 
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Username' required />
                
      </div>
         }
        <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email Id' pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}" required/>
        </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password' pattern="{10}" required/>
            </div>
             
            {
                action==="Login"?<div></div>:
                
                <div className="input"> 
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Confirm Password' required/>
                
      </div>
         }

        </div>
        {action==="Sign Up"?<div></div>:
        <div className="forgot-password">Forgot password <span onClick={()=>{setAction("Sign Up")}}>Click Here!</span></div>
        }
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
      
    </div>
  )
}

export default LoginSignup