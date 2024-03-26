import React from "react"
import "./navbar.css";
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contact.png";
import { Link } from "react-scroll";


const Navbar=()=>{
    return(
        <nav className="navbar">
         <a href="/"><img src={logo} alt="logo" className="logo"></img></a>
         <div className="nav-items">
            <Link className="nav-item">HOME</Link>
            <Link className="nav-item">ABOUT</Link>
            <Link className="nav-item">WORK</Link>
            <Link className="nav-item">SKILL</Link>
         </div>
         <button className="contact-btn"><img src={contactImg} alt="contactImg" className="contact-img"></img>CONTACT</button>
        </nav>
    )
}

export default Navbar;