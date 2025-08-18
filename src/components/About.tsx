import React from "react";
import Topbar from "./TopBar";
import profile_pic from "../assets/profile_pic.png"
import "../styles/About.css"
import linkedin_icon from "../assets/linkedin_icon.svg"
import github_icon from "../assets/github_icon.svg"


const About: React.FC = () => {
  return (
    <div className="page_container">
      <Topbar/>
      <div className="content_container">
        <span className="profile_pic_container">
          <img src={profile_pic}/>
        </span>
        <span className="description_container">
          <p>Likha Pulido is a University of California, Santa Cruz graduate. They majored in Computer Engineering (Systems Programing Focus) and minored in Computer Science. Through this experience, they realized their passion for understanding complex architectures by heart. This excitement reaches beyond the world of software design, exploring the worlds of music, film and video games. </p>
          <p>They enjoy deciphering how different aspects of these projects interact with one another to produce a final project. This knowledge allows them to contribute ideas that assists these systems, quickly troubleshooting issues along the way. They view the application of their knowledge like solving a puzzle, fun and engaging.</p>
          <div className="icons">
            <a href="https://www.linkedin.com/in/likhapulido/"
                target="_blank">
              <img src={linkedin_icon}/>
            </a>
            <a href="https://github.com/pomeloFellow"
                target="_blank">
              <img src={github_icon}/>
            </a>
          </div>
        </span>
      </div>
    </div>
  );
};

export default About;
