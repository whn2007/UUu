import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";

function AboutItem({ image, stars, name, description, link }) {
  return (
    <div className="aboutItem">
      <div className="profileBackground"/>
      <div className="profilePic">
        <img src={image} alt={name}></img>
      </div>
      <div className="description">
        <h1>{name}</h1>
        <div className="starsContainer">
          <img src={stars} className= 'stars'/>
        </div>
        <p>{description}</p>
        <a  href={link} target="_blank" rel="noreferrer"><TwitterIcon /></a>
      </div>
    </div>
  );
}

export default AboutItem;
