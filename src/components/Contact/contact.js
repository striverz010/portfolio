import React from "react";
import "./contact.css";
import email from "../../assets/email.png"
import call from "../../assets/call.png"
import linkedin from "../../assets/linkedin.png"
import discord from "../../assets/discord.png"
import twitter from "../../assets/twitter.png"
import code from "../../assets/code.png"
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact=()=>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_u19zdbu', 'template_15ij288', form.current, {
            publicKey: 'tC9i9klPp1-inSBjz',
          })
          .then(
            (result) => {
              console.log(result.text);
              e.target.reset();
              alert("Email sent Successfully !");
            },
            (error) => {
              console.log(error.text);
            },
          );
      };
   
    return(
        <div className="cnt">
            
          <section className="contact">
            <div className="left-contact">
                <h1>Contact Me</h1>
                <div className="contact-ways">
                    <div className="contact-way">
                        <img src={email} alt="contct" className="contact-img"></img>
                       <a href="mailto:striveredu010@gmail.com"> <p>striveredu010@gmail.com</p></a>
                    </div>
                    <div className="contact-way">
                        <img src={call} alt="contct" className="contact-img"></img>
                        <a href="tel:+91 (949) 201-4400"><p>+(91) 9492014400</p></a>
                    </div>

                </div>
               <div className="social-media">
                  <a href="https://www.linkedin.com/in/manikanta-korimilli-04a22324b/"><img src={linkedin} alt="socialmedia" className="social-media-icon"></img></a>
                  <a href="https://discordapp.com/users/striver_010"><img src={discord} alt="socialmedia" className="social-media-icon"></img></a>
                  <a href="https://twitter.com/striver_010"><img src={twitter} alt="socialmedia" className="social-media-icon"></img></a>
                  <a href="https://leetcode.com/striver_010/"><img src={code} alt="socialmedia" className="social-media-icon"></img></a>
               </div>
               <a href="#" className="download-cv">Download Cv</a>

            </div>
            <div className="right-contact">
                <form className="contact-form" ref={form} onSubmit={sendEmail} >
                    <input type="text" placeholder="type your name" className="input-name" required name="user_name"></input>
                    <input type="email" placeholder="type your email" className="input-name" required name="user_email" ></input>
                    <textarea rows="7" placeholder="your message" name="message"></textarea>
                    <button className ="formsubmit-btn" value="Send" type="submit" >Submit</button>
                </form>

            </div>
           
           </section>
          
        </div>
       
    )
}
export default Contact;