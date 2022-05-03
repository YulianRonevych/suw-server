import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
            <nav>
                <img src={require("../Resources/Logo.jpg")} id="logo" alt="failed"/>
                <ul id="nav-list">
                    <Link to='/'>
                    <li>Home</li>
                    </Link>
                    <Link to='/startups'>
                    <li>Start-ups</li>
                    </Link>
                    <Link to='/about'>
                    <li>About us</li>
                    </Link>
                    <Link to='/help'>
                    <li>Help</li>
                    </Link>
                </ul>
                {/* <button id="create-button">Create start-up</button> */}
                <Link  className="sign-in-button" to='/login'>
                Sign in
                </Link>
                <Link  id="sign-up-button" to='/register'>
                Sign up
                </Link>
            </nav>
        </header>
    )
}