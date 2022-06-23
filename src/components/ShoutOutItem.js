import React from "react";

function ShoutOutItem({ image, stars, name, description, link }) {
  return (
    <div className="aboutItem">
        <div className="profileBackground"/>
        <div className="profilePic">
            <img src={image} alt={name}></img>
        </div>
        <div className="starsContainer">
            <img src={stars} className= 'stars'/>
        </div>
        <a className="description" href= {link} target= '_blank'>
            <h1>{name}</h1>
            <p>{description}</p>
        </a>
    </div>
  );
}

export default ShoutOutItem;
