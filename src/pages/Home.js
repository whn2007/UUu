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
            <h1> While Also Having Fun! </h1>
            <Link to="/mission">
              <button>Our Values</button>
            </Link>
          </div>
    
        </div>
      </div>

      <div className="founder">
        <div className="profile">
          <h2>The Founder</h2>
          <img src = {Johnny}/>
        </div>
        <div className="textBlock">
          <h1>'I'm One of One'</h1>
          <p>What does it mean to be one of one?
             - Johnny Wu</p>
        </div>
      </div>

    </div>
  );
}

export default Home;
