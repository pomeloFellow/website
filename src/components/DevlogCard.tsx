import React from "react";
import "../styles/DevlogCard.css"

type DevlogCardProps = {
  devlog_name: string;
  update_date: string;
  description: string;
};

const DevlogCard: React.FC<DevlogCardProps> = ({ devlog_name, update_date, description }) => {
  return (
    <div className="card_container">
      <div className="inner_card_container">
        <div className="header">
          <span className="devlog_name">{devlog_name}</span>
          <span className="last_updated_label">Last Updated: {update_date}</span>
        </div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default DevlogCard;
