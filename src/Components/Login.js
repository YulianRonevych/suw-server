import React from "react";
import { Link } from "react-router-dom";

export default function Login(){
    return(
        <div className="login">
        <form className="login-form">
        <span className="login-title"><h1>Login into account</h1></span>
        <div className="fields">
        <h4>Username</h4>
        <input placeholder="username"/>
        <h4>Password</h4>
        <input placeholder="password" type='password'/>
        </div>
        <button type="button">Login</button>
        <hr/>
        <Link className="login-reg" to='/register'>Register</Link>
        </form>
        </div>
    )
}