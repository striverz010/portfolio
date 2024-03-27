import React from "react";
import "./skill.css";
import cpp from "../../assets/c++.png";
import java from "../../assets/java.png"
import python from "../../assets/python.png"
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import javascript from "../../assets/js.png"
import git from "../../assets/git.png"
import react from "../../assets/react.png"
import sql from "../../assets/sql.png"
import linux from "../../assets/linux.png"



const Skill=()=>{
    return(
        <section className="skill-top">
            <h2 align="center" className="skill-tag">Skills and <span className="experience-span">Experience</span></h2>
        <section className="skills">

            
            
         <div className="skills-section">

            <div className="each-skill">


                <div className="each-img">

                <img src={cpp}  alt ="each-skill"className="skill-img"></img>

                </div>

                <p>CPP</p>
            </div>



            <div className="each-skill">
            <div className="each-img">
                <img src={java}  alt ="each-skill"className="skill-img"></img></div>
                <p>JAVA</p>
            </div>
            <div className="each-skill">
            <div className="each-img">
                <img src={python} alt ="each-skill"className="skill-img"></img></div>
                <p>PYTHON</p>
            </div>
            <div className="each-skill">
            <div className="each-img">
                <img src={sql}  alt ="each-skill"className="skill-img"></img></div>
                <p>SQL</p>
            </div>
            <div className="each-skill">
            <div className="each-img">
                <img src={html}  alt ="each-skill"className="skill-img"></img></div>
                <p>HTML</p>
            </div>
            <div className="each-skill">
            <div className="each-img">
                <img src={css}  alt ="each-skill"className="skill-img"></img></div>
                
                <p>CSS</p>
            </div>
            <div className="each-skill">
            <div className="each-img">
                <img src={react}  alt ="each-skill"className="skill-img"></img></div>
                <p>REACT</p>
            </div>
            <div className="each-skill">
            <div className="each-img">
                <img src={javascript} alt ="each-skill" className="skill-img"></img></div>
                <p>JAVASCRIPT</p>
            </div>
           
            
           
            <div className="each-skill">
                
                <div className="each-img">
                    <img src={linux}  alt ="each-skill" className="skill-img"></img>
                    </div>
                    <p>LINUX</p>
                </div>
            <div className="each-skill">
                
            <div className="each-img">
                <img src={git}  alt ="each-skill" className="skill-img"></img>
                </div>
                <p>GIT</p>
            </div>
            

         </div>


         <div className="experience-section">

           <div className="each-experiences">
            <h1>2022</h1>
            <div className="each-experience">
                <h1>Competitive Coding Intern.</h1>
                <p>Technical Hub,   Surampalem</p>
            </div>

           </div>

           <div className="each-experiences">
            <h1>2023</h1>
            <div className="each-experience">
                <h1>RedHat and  Devnet Intern.</h1>
                <p>Technical Hub</p>
            </div>

           </div>

           
           
         </div>
        </section>
        </section>
    )
}
export default Skill;