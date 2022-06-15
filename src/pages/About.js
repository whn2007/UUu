import React from "react";
import { AboutList } from "../helpers/AboutList";
import AboutItem from "../components/AboutItem";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div className="aboutHeader">
        <h1>THE FOUNDERS</h1>
        <h2>
          Meet the team spearheading this project.
        </h2>
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

      <div className="supporters">
        <h1>THE SUPPORTERS</h1>
        <h2>
          A big thanks to the people <br/> supporting this project.
        </h2>
      </div>
    </div>
  );
}

export default About;
