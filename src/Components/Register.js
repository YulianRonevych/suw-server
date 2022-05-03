import React from "react";
import { Link } from "react-router-dom";

export default function Register(){
    return(
        <div className="register">
        <form className="register-form">
         <span className="reg-form-title"><h1>Register new account</h1></span>
         <div className="name-surname">
         <h4>Name</h4>
         <h4>Surname</h4>
         </div>
         <div className="name-surname-input">
         <input placeholder="name"/>
         <input placeholder="surname"/>
         </div>
         <div className="country-city">
         <h4>Country</h4>
         <h4>City</h4>
         </div>
         <div className="country-city-input">
         <input placeholder="country"/>
         <input placeholder="city"/>
         </div>
         <div className="login-password">
         <h4>Username</h4>
         <h4>Password</h4>
         </div>
         <div className="login-password-input">
         <input placeholder="username"/>
         <input placeholder="password" type='password'/>
         </div>
         <h4>Email</h4>
         <input className="email-input" placeholder="email"/>
         <button type="button">Register</button>
         <hr/>
         <Link className="reg-login" to='/login'>Login</Link>
        </form>
        </div>
    )
}