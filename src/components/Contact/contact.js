import React from "react";
import "./contact.css"
import linkedin from "../../assets/linkedin.png"
import github from "../../assets/github.png"
import twitter from "../../assets/twitter.png"
import leetcode from "../../assets/code.png"
import email from "../../assets/mail.png"
import phone from "../../assets/phone-call.png";

const Contact=()=>{
    return(
        <section className="cont">
            <div className="contact">
                <div className="contact-left">
                    <h1>Contact Me</h1>
                    <div className="contact-icons">
                        <div className="contact-icon">
                            <img src={email} className="contact-img" alt="contact-icon"></img>
                            <p>striveredu010@gmail.com</p>
                        </div>
                        <div className="contact-icon">
                            <img src={phone} className="contact-img" alt="contact-icon"></img>
                            <p>(+91) 9492014400</p>
                        </div>
                    </div>
                    <div className="socialmedia-icons">
                      <a href="#"><img src={linkedin} alt="social-icons" className="social-icons"></img></a>
                      <a href="#"><img src={github} alt="social-icons" className="social-icons"></img></a>
                      <a href="#"><img src={twitter} alt="social-icons" className="social-icons"></img></a>
                      <a href="#"><img src={leetcode} alt="social-icons" className="social-icons"></img></a>
                     
                    </div>
                    <a href="../../assets/mani.pdf" download className="download-cv-btn">
                 Download CV
                </a>

                </div>
               

                <div className="contact-right">
                    <form>
                        <input type="name" placeholder="type your name" className="namecls" required></input>
                        <input type="email" placeholder="type your name" className="emailcls" required></input>
                        <textarea name="message" rows="6" placeholder="your message"></textarea>
                        <button type="submit" className="form-btn">Submit</button>
                    </form>
                   

                </div>

            </div>
            <div className="copyright">
                <p>@K M K ALL RIGHTS RESERVED</p>
            </div>

        </section>
    )
}
export default Contact;