import React from "react";
import Topbar from "./TopBar";
import "../styles/Devlogs.css";
import DevlogCard from "./DevlogCard";

const Devlogs: React.FC = () => {
  return(
    <div>
      <Topbar/>
      <div className="card_container">
        <DevlogCard devlog_name="AutoSlate" update_date="October 18, 2025" description="Test random words :p"/>
      </div>
    </div>
  )
};

export default Devlogs;