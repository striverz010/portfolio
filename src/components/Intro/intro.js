import React from "react";
import "./intro.css";
import bg from "../../assets/profile.png";
import { Link } from "react-scroll";
import hireme from "../../assets/job.png";

const Intro=()=>{
    return(
        <section className="intro">
            <div className="intro-content">
                <span className="hello">Hello,</span>
                <span className="content">I'm <span className="manikanta">Manikanta</span><br/>Competitive Programmer</span>
                <p className="content-para">Passionate frontend developer and competitive programmer, combining a passion <br/>for innovation with a strong technical skill set.</p>
                <Link> <button 
                onClick={()=>{
                    // Get the first element with class 'contact' and scroll it into view
                const contactElement = document.querySelector(".contact");
                if (contactElement) {
                    
                  contactElement.scrollIntoView({ behavior: "smooth"});
                }
              }}
                
                className="hireme-btn"><img src={hireme} alt="hireme" className="hireme-img"/>HIREME</button></Link>

            </div>
            <img src={bg} alt="profile-bg" className="background-img"></img>
        
        </section>
    )
}

export default Intro;