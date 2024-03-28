import React from "react"
import "./navbar.css";
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contact.png";
import { Link } from "react-scroll";
import menu from "../../assets/bogermenu.png";
import { useState } from "react";


const Navbar=()=>{

    const [showMenu,setShowMenu]=useState(false);
    return(
        <nav className="navbar">
         <a href="/"><img src={logo} alt="logo" className="logo"></img></a>
         <div className="nav-items">
            <Link activeClass="active" to="intro" spy={true} smooth={true} duration={500} offset={-100} className="nav-item">HOME</Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}  offset={-40}className="nav-item">ABOUT</Link>
            <Link activeClass="active" to="work" spy={true} smooth={true} duration={500}  offset={-30}className="nav-item">WORK</Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500}  offset={-155}className="nav-item">SKILL</Link>
         </div>
         <button onClick={()=>{
            // Get the first element with class 'contact' and scroll it into view
        const contactElement = document.querySelector(".contact");
        if (contactElement) {
            
          contactElement.scrollIntoView({ behavior: "smooth"});
        }
      }}
          className="contact-btn"><img src={contactImg} alt="contactImg" className="contact-imgg"></img>CONTACT</button>
        

        <img src={menu} alt="menu" className="mobmenu" onClick={()=>setShowMenu(!showMenu)}></img>
         <div className="nav-menu" style={{display:showMenu?'flex':'none'}}>
            <Link activeClass="active" to="intro" spy={true} smooth={true} duration={500} offset={-100} className="listt-item" onClick={()=>setShowMenu(false)}>HOME</Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}  offset={-40}className="listt-item"  onClick={()=>setShowMenu(false)}>ABOUT</Link>
            <Link activeClass="active" to="work" spy={true} smooth={true} duration={500}  offset={-30}className="listt-item"  onClick={()=>setShowMenu(false)}>WORK</Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500}  offset={-155}className="listt-item"  onClick={()=>setShowMenu(false)}>SKILL</Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}  offset={-50}className="listt-item"  onClick={()=>setShowMenu(false)}>CONTACT</Link>
         </div>

        </nav>
    )
}

export default Navbar;