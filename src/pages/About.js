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

      <div className="chat">
        <h2>Are you a Diamond in the rough who needs polishing? Here's how we'll make you shine:</h2>
        <p>
          <b>1.</b> Schedule a call with UUu at <a href="https://calendly.com/uuullc" target='_blank'><b>chat.UUu.vip</b></a> — if you can prove that you're truly a Diamond in the rough, we will immediately get you set up so you can begin working full-time on your passion. <br/>
          <b>2.</b> For our support, we ask for 1% equity in your endeavors. There are no contracts — passing the call means we have full faith in you and we simply ask you to reciprocate with faith in us.<br/>
          <b>3.</b> We will help you set up an LLC and handle everything you need to operate a business — from fundraising to recruiting — so you can just focus on what you do best: your passion. <br/>
         </p>
      </div>
      
    </div>
  );
}

export default About;
