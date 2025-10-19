import React from "react";
import "../styles/Navbar.css"
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar_container">
      <span className="clickable" onClick={() => navigate("/about")}>about</span>
      <span className="clickable" onClick={() => navigate("/projects")}>projects</span>
      <span className="clickable" onClick={() => navigate("/devlogs")}>devlogs</span>
    </div>
  )
};

export default Navbar;