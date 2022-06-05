import React from "react";
import { Link } from "react-router-dom";

export default function AlreadyLogedIn(props){
    
    function LogOut(){
      props.setCurrentUser(null);
      localStorage.setItem("currentUser", null)
    }

    return(
        <div className="reg-suc-banner">
        <div className="register-success">
        <h1>You are already loged in!</h1>
        <h2>Do you want to log out?</h2>
        <Link className="reg-login" to='/login' onClick={LogOut}>Log out</Link>
        </div>
        </div>
    )
}