import React from "react";
import "../styles/ProjectCard.css"

type ProjectCardProps = {
  project_name: string;
  start_date: string;
  end_date: string;
  description: string;
  responsibilities: string[];
  link?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({project_name, start_date, end_date, description, responsibilities, link}) => {
  return(
    <div className="card_container">
      <div className="inner_card_container">
        <div className="header">
          <h2 className="project_name">{project_name}</h2>
          <span className="duration_container">
            <span className="start_date">{start_date}</span>
            <span> - </span>
            <span className="end_date">{end_date}</span>
          </span>
        </div>
        {link && <a href={link} target="_blank"><div className="link clickable">{link}</div></a> }
        <div className="description" style={{ whiteSpace: "pre-line" }}>{description}</div>
        <div className="responsibility_container">
          <ul>
          {responsibilities.map((res,i) => (
            <li key={i}>{res}</li>
          ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;