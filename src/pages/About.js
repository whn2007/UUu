import React from "react";
import { AboutList } from "../helpers/AboutList";
import Footer from "../components/Footer";
import AboutItem from "../components/AboutItem";
import OriginPitch from "../assets/originpost.png"
import "../styles/About.scss";

function About() {
  return (
    <div className="about">
      <div className="aboutHeader">
        <div className="aboutTitle">
          <h1>Founders</h1>
          <h2>Join us if you want to eliminate your know-do-gap, which will make you 1/1. <br/>
          We will enable World Peace.</h2>
        </div>
      </div>

      <div className="aboutList">
        {AboutList.map((aboutItem, key) => {
          return (
            <AboutItem
              key={key}
              image={aboutItem.image}
              name={aboutItem.name}
              description={aboutItem.description}
              link={aboutItem.link}
            />
          );
        })}
      </div>

      <div className="originPitch">
        <h1>Origin Pitch</h1>
        <a href="https://www.linkedin.com/feed/update/urn:li:activity:6945087402625388544/" 
        target="_blank">
          <img src={OriginPitch} className="pitch"/>
          <button>Learn More {'>'}</button>
        </a>
      </div>

      <Footer className = "footer"/>
    </div>
  );
}

export default About;
