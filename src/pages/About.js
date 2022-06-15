import React from "react";
import { AboutList } from "../helpers/AboutList";
import Footer from "../components/Footer";
import AboutItem from "../components/AboutItem";
import "../styles/About.scss";

function About() {
  return (
    <div className="about">
      <div className="aboutHeader">
        <div className="aboutTitle">
          <h1>The Team</h1>
          <h2>Meet the people who are going to change the world.</h2>
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
      <Footer className = "footer"/>
    </div>
  );
}

export default About;
