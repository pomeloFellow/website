import React from "react";
import "../styles/Navbar.css"
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar_container">
      <span onClick={() => navigate("/about")}>about</span>
      <span onClick={() => navigate("/projects")}>projects</span>
      <span onClick={() => navigate("/devlogs")}>devlogs</span>
    </div>
  )
};

export default Navbar;