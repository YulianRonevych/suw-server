import React from "react";
import { Link } from "react-router-dom";

export default function SomethingWentWrong(){
    return(
        <div className="reg-suc-banner">
        <div className="register-success">
        <h1>Oops! Something went wrong</h1>
        <h2>Try again later</h2>
        <Link className="reg-login" to='/register'>Register</Link>
        </div>
        </div>
    )
}