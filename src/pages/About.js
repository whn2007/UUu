import React from "react";
import { AboutList } from "../helpers/AboutList";
import Footer from "../components/Footer";
import AboutItem from "../components/AboutItem";
import "../styles/About.scss";
import Fundraising from "../assets/c-suite.jpg"
import ShoutOutItem from '../components/ShoutOutItem';
import { DiamondsList } from "../helpers/DiamondsList";

function About() {
  return (
    <div className="about">
      <div className="aboutHeader">
        <div className="aboutTitle">
          <h1>Lineup 👥</h1>
          <p>We will enable <span style={{color: '#238811'}}>True Sustainability</span>, together.</p>
        </div>
      </div>

      <div className="fundraising">
        <img src={Fundraising}/>
        <h2>William "Boss Jr." Nguyen & Lord Jay "Boss" UUu, CTO & CEO of UUu LLC</h2>
      </div> 

      <div className="title">
        <h1>Squad 🎖️</h1>
      </div>

      <div className="aboutList">
        {AboutList.map((aboutItem, key) => {
          return (
            <AboutItem
              key={key}
              image={aboutItem.image}
              name={aboutItem.name}
              stars = {aboutItem.stars}
              description={aboutItem.description}
              link={aboutItem.link}
            />
          );
        })}
      </div>

      <div className="title">
        <h1>Diamonds 💎</h1>
      </div>

      <div className="diamondList">
          {DiamondsList.map((aboutItem, key) => {
            return (
              <ShoutOutItem
                key={key}
                image={aboutItem.image}
                name={aboutItem.name}
                description = {aboutItem.description}
                link={aboutItem.link}
              />
            );
        })}
      </div>

      <div className="title">
        <h1>Patrons 💰</h1>
      </div>
      
    </div>
  );
}

export default About;
