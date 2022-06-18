import React from "react";
import Footer from "../components/Footer";
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
            <h3>Bring World Peace</h3>
            <h1> While Also Having Fun! </h1>
            <Link to="/mission">
              <button>Our Values {'>'}</button>
            </Link>
          </div>
    
        </div>
      </div>

      <div className="founder">
        <div className="profile">
          <img src = {Johnny}/>
          <h2>The Founder</h2>
        </div>
        <div className="textBlock">
          <h1>'I'm 1/1!'</h1>
          <p>"1/1 just means you grinded in one direction so long <br/>
          that everyone else around you has dropped out, <br/> so you're the only one left".
          <h2>- Johnny Wu</h2></p>
        </div>
      </div>

      <Footer className = "footer"/>

    </div>
  );
}

export default Home;
