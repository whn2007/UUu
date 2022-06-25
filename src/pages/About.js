import React from "react";
import { AboutList } from "../helpers/AboutList";
import Footer from "../components/Footer";
import AboutItem from "../components/AboutItem";
import OriginPitch from "../assets/proposal1.png"
import OriginPitch2 from "../assets/proposal2.png"
import OriginPitch3 from "../assets/proposal3.png"
import Proposal from "../assets/proposal.pdf"
import "../styles/About.scss";
import Fundraising from "../assets/fundraising.jpeg"

function About() {
  return (
    <div className="about">
      <div className="aboutHeader">
        <div className="aboutTitle">
          <h1>Founders</h1>
          <p>We will enable World Peace, together.</p>
        </div>
      </div>

      <div className="fundraising">
        <img src={Fundraising}/>
        <h2>William Nguyen & Lord Johnny Wu, CEO & CTO of UUu LLC</h2>
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

      <div className="originPitch">
        <h1>Letter from Lord Johnny Wu</h1>
        <a href = {Proposal} download>
          <img src={OriginPitch} className="pitch"/>
          <img src={OriginPitch2} className="pitch"/>
          <img src={OriginPitch3} className="pitch"/>
        </a>
      </div>

      <Footer className = "footer"/>
    </div>
  );
}

export default About;
