import React from "react";
import ab1 from "../../assets/ab1.png";
import ab2 from "../../assets/ab2.png"
import ab3 from "../../assets/ab3.png"
import "./about.css"
const About=()=>{
    return(
        <section className="about">

            <h1 align="center" className="about-tag"><span className="mark" > Creativity</span> Meets <span className="mark">Code</span> for<br/> Real-world Challenges</h1>

            <div className="about-bars">

                <div className="about-bar">
                    <img src={ab1} alt="about-img" className="ab-img"></img>
                    <h2>Problem-Solving</h2>
                    <p>I am a good problem solver and love to solve real world problems.</p>
                </div>

                <div className="about-bar">
                    <img src={ab2}  alt="about-img" className="ab-img"></img>
                    <h2>Developer</h2>
                    <p>I am a developer with passion for developing neat and functional projects.</p>
                </div>

                <div className="about-bar">
                    <img src={ab3}  alt="about-img" className="ab-img"></img>
                    <h2>Coder</h2>
                    <p>I am enthusiastic coder and love to apply my skills in development.</p>
                </div>

            </div>
        </section>
    )
}

export default About;