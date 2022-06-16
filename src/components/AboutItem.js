import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";

function AboutItem({ image, name, description, link }) {
  return (
    <div className="aboutItem">
      <div className="profileBackground"/>
      <div className="profilePic">
        <img src={image} alt={name}></img>
      </div>
      <div className="description">
        <h1>{name}</h1>
        <p>{description}</p>
        <a  href={link} target="_blank" rel="noreferrer"><TwitterIcon /></a>
      </div>
    </div>
  );
}

export default AboutItem;
