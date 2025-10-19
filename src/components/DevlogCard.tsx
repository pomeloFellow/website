import React from "react";
import "../styles/DevlogCard.css"
import { useNavigate } from "react-router-dom";

type DevlogCardProps = {
  devlog_name: string;
  update_date: string;
  description: string;
  link:string;
};

const DevlogCard: React.FC<DevlogCardProps> = ({ devlog_name, update_date, description, link }) => {
  const navigate = useNavigate();

  return (
    <div className="card_container" onClick={() => navigate(link)}>
      <div className="inner_card_container clickable">
        <div className="header">
          <h2 className="devlog_name">{devlog_name}</h2>
          <span className="last_updated_label">Last Updated: {update_date}</span>
        </div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default DevlogCard;
