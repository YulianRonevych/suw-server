import React from "react";

export default function Header(){
    return(
        <header>
            <nav>
                <img src={require("../Resources/Logo.jpg")} id="logo" alt="failed"/>
                <ul id="nav-list">
                    <li>Home</li>
                    <li>Start-ups</li>
                    <li>About us</li>
                    <li>Help</li>
                </ul>
                <button id="create-button">Create start-up</button>
                <button id="sign-in-button">Sign in</button>
                <button id="sign-up-button">Sign up</button>
            </nav>
        </header>
    )
}