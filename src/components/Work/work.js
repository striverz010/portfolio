import React from "react";
import work1 from "../../assets/portfolio-1.png"
import work2 from "../../assets/portfolio-2.png"
import work3 from "../../assets/portfolio-3.png"
import "./work.css"
import giticon from "../../assets/githubicon.png";
import viewicon from "../../assets/view.png"
import { Link } from "react-scroll";
const Work=()=>{
    return(
        <section className="work">

            <h1 align="center" className="work-tag">My Creative <span className="portfolio-span">Portfolio</span> Section</h1>

            <div className="my-works">

                <div className="my-work">
                    <img className ="work-img" src={work1} alt="work1"></img>
                    <div className="layer">
                        <h3>Dev Savor</h3>
                        <p> Developed FoodBuddy web application, enabling seamless browsing,searching, and online ordering of food items.</p>
                        <div className="viewicons">
                        <a href="https://github.com/striverz010"><img src={viewicon} alt="git-icon" className="git-img"></img></a>
                        <a href="https://github.com/striverz010"><img src={giticon} alt="git-icon" className="git-img"></img></a>
                        </div>
                       
                    </div>
                </div>
                <div className="my-work">
                    <img className ="work-img"src={work2}   alt="work1"></img>
                    <div className="layer">
                        <h3>I TUBE</h3>
                        <p> Developed a video streaming app, similar to YouTube, enabling users to seamlessly browse, search, and enjoy high-quality
                            videos on various devices.</p>
                        <div className="viewicons">
                        <a href="https://github.com/striverz010/ITube"><img src={viewicon} alt="git-icon" className="git-img"></img></a>
                        <a href="https://github.com/striverz010/ITube"><img src={giticon} alt="git-icon" className="git-img"></img></a>
                        </div>
                    </div>
                </div>
                <div className="my-work">
                    <img className ="work-img"src={work3}  alt="work1"></img>
                    <div className="layer">
                        <h3>PortfoliO</h3>
                        <p>Created a dynamic personal portfolio website using React, offering visitors a visually appealing and user-friendly platform to explore my professional journey, skills, and projects.</p>

                        <div className="viewicons">
                        <a href="https://github.com/striverz010/portfolio"><img src={viewicon} alt="git-icon" className="git-img"></img></a>
                        <a href="https://github.com/striverz010/portfolio"><img src={giticon} alt="git-icon" className="git-img"></img></a>
                        </div>
                    </div>
                </div>

            </div>
            <center><a target="_blank" href="https://github.com/striverz010"><button className="seemore-btn">SEE MORE</button></a></center>
            
            
        </section>
    )
}

export default Work;