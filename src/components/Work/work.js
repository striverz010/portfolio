import React from "react";
import work1 from "../../assets/portfolio-1.png"
import work2 from "../../assets/portfolio-2.png"
import work3 from "../../assets/portfolio-3.png"
import "./work.css"
import giticon from "../../assets/githubicon.png";
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
                        <p>the connects you the talented people around the world. download it from the play sttor.</p>
                        <a href="https://github.com/striverz010"><img src={giticon} alt="git-icon" className="git-img"></img></a>
                        <a href="https://github.com/striverz010"><img src={giticon} alt="git-icon" className="git-img"></img></a>
                    </div>
                </div>
                <div className="my-work">
                    <img className ="work-img"src={work2}   alt="work1"></img>
                    <div className="layer">
                        <h3>Dev Savor</h3>
                        <p>the connects you the talented people around the world. download it from the play sttor.</p>
                        <a href="https://github.com/striverz010"><img src={giticon} alt="git-icon" className="git-img"></img></a>
                        <a href="https://github.com/striverz010"><img src={giticon} alt="git-icon" className="git-img"></img></a>
                    </div>
                </div>
                <div className="my-work">
                    <img className ="work-img"src={work3}  alt="work1"></img>
                    <div className="layer">
                        <h3>Dev Savor</h3>
                        <p>the connects you the talented people around the world. download it from the play sttor.</p>

                        <a href="https://github.com/striverz010"><img src={giticon} alt="git-icon" className="git-img"></img></a>
                        <a href="https://github.com/striverz010"><img src={giticon} alt="git-icon" className="git-img"></img></a>
                    </div>
                </div>

            </div>
            <center><a target="_blank" href="https://github.com/striverz010"><button className="seemore-btn">SEE MORE</button></a></center>
            
            
        </section>
    )
}

export default Work;