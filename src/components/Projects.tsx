import React from "react";
import Topbar from "./TopBar";
import ProjectDescriptions from "./ProjectDescriptions";
import "../styles/Projects.css"

const Projects: React.FC = () => {
  return (
    <>
        <Topbar/>
        <ProjectDescriptions/>
    </>
  )
};

export default Projects;