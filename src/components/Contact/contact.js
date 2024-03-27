import React from "react";
import "./contact.css";
import spike from "../../assets/spike.png"
import cal from "../../assets/cal.png"
import linkedin from "../../assets/linkedin.png"
import github from "../../assets/github.png"
import twitter from "../../assets/twitter.png"
import code from "../../assets/code.png"
const Contact=()=>{
    return(
        <div className="cnt">
            
          <section className="contact">
            <div className="left-contact">
                <h1>Contact Me</h1>
                <div className="contact-ways">
                    <div className="contact-way">
                        <img src={spike} alt="contct" className="contact-img"></img>
                        <p>striveredu010@gmail.com</p>
                    </div>
                    <div className="contact-way">
                        <img src={cal} alt="contct" className="contact-img"></img>
                        <p>+(91) 9492014400</p>
                    </div>

                </div>
               <div className="social-media">
                  <a href="#"><img src={linkedin} alt="socialmedia" className="social-media-icon"></img></a>
                  <a href="#"><img src={github} alt="socialmedia" className="social-media-icon"></img></a>
                  <a href="#"><img src={twitter} alt="socialmedia" className="social-media-icon"></img></a>
                  <a href="#"><img src={code} alt="socialmedia" className="social-media-icon"></img></a>
               </div>
               <a href="#" className="download-cv">Download Cv</a>

            </div>
            <div className="right-contact">
                <form>
                    <input type="text" placeholder="type your name" className="input-name" required></input>
                    <input type="email" placeholder="type your email" className="input-name" required></input>
                    <textarea rows="7" placeholder="your message"></textarea>
                    <button className ="formsubmit-btn" type="submit">Submit</button>
                </form>

            </div>
           
           </section>
          
        </div>
       
    )
}
export default Contact;