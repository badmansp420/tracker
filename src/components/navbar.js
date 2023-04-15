import React from "react";
import logo from '../images/troll-face.png';
import '../css/navbar.css'
export default function navbar(){
    return (
        <header className="header-section">
            <div className="header-main">
            <img className="nav-logo" src={logo} alt="logo" />
            <h2>iTrack</h2>
            </div>
            <h4 className="header-project"></h4>
            <div className="logout">Logout</div>
        </header>
    )
}