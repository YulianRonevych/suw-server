import React from "react";
import { Link } from "react-router-dom";

export default function CreateSuccessful(){
    return(
        <div className="reg-suc-banner">
        <div className="register-success">
        <h1>Created start-up succesfully!</h1>
        <h2>Check it out now!</h2>
        <Link className="reg-login" to='/startups'>start-ups</Link>
        </div>
        </div>
    )
}