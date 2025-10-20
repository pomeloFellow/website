import React from "react";
import Topbar from "../TopBar";
import ProjectCard from "../ProjectCard";
import { ProjectData } from "../../types/ProjectData";
import projectdata from "../../data/projectdata.json";
import "../../styles/Projects.css"

const Projects: React.FC = () => {
  const projects: ProjectData[] = projectdata;

  return (
    <>
        <Topbar/>
        <div className="project_card_container">
            {projects.map((project) => (
            <ProjectCard 
              project_name={project.project_name}
              start_date={project.start_date}
              end_date={project.end_date}
              description={project.description}
              responsibilities={project.responsibilities}
              link={project.link}
            />
        ))}
        </div>
    </>
  )
};

export default Projects;