import React from "react";
import projectsData from "../data/projectdata.json";
import { ProjectData } from "../types/ProjectData";
import "../styles/ProjectDesciptions.css";

const ProjectDescriptions: React.FC = () => {
  const projects: ProjectData[] = projectsData;

  return (
    <div className="projects_container">
      {projects.map((proj, index) => (

        <div key={index} className="project_card">
          
          <div className="name_time_container">
            <div className="name"><h2>{proj.project_name}</h2></div>
            <div className="time">{proj.start_date} – {proj.end_date}</div>
          </div>
          
          <p className="description">{proj.description}</p>
          <ul>
            {proj.responsibilities.map((res, i) => (
              <li key={i}>{res}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
};

export default ProjectDescriptions;