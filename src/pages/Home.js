import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.scss";
import Johnny from '../assets/profilepics/jaywuzer.png'

function Home() {
  return (
    <div className="home">

      <div className="header">
        <div className="intro">
          <div className="top">
            <h2>Our Goal: <br/></h2>
            <h3>To Change the World</h3>
            <h4> While Also Having Fun! </h4>
            <Link to="/mission">
              <button>Learn More</button>
            </Link>
          </div>
    
        </div>
      </div>

      <div className="founder">
        <h2>Meet the founder</h2>
        <img src = {Johnny}/>
      </div>

    </div>
  );
}

export default Home;
