import React from "react";
import Navbar from "./Navbar";
import "../styles/Topbar.css"
import { useNavigate } from "react-router-dom";

const Topbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="topbar_container">
      <div className="inner_topbar_container">
        <span className="homelink" onClick={() => navigate("/")}>Likha Pulido</span>
        <span className="outer_navbar_container">
          <span className="navbar_container">
            <Navbar/>
          </span>
        </span>
      </div>
    </div>
  )
}

export default Topbar;
