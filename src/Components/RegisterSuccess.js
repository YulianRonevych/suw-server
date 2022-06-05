import React from "react";
import { Link } from "react-router-dom";

export default function RegisterSuccess(){
    return(
        <div className="reg-suc-banner">
        <div className="register-success">
        <h1>Registered succesfully!</h1>
        <h2>Sign in to account now</h2>
        <Link className="reg-login" to='/login'>Login</Link>
        </div>
        </div>
    )
}