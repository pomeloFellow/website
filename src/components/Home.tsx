import React from "react";
import '../styles/Home.css'
import Navbar from "./Navbar";

const Home: React.FC = () => {
  return (
    <>
      <div className="page_container">
        <div className="title_container">
          <div className="top_inner_container">
            <h1 className="Likha">Likha</h1>
            <div className="navbar_div">
              <Navbar/>
            </div>
          </div>
          <div className="bottom_inner_container">
            <h1 className="Pulido">Pulido</h1>
          </div>
        </div>
      </div>
    </>
  )
};

export default Home;
