import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/Mission.scss"

function Mission() {
  return (
    <div className="mission">
      <div className="header">
        <h1>Our Values</h1>
        <p>At UUu, we hold every person to a few key principles. </p>
      </div>

      <div className="value">
        <div className="left integrity">
          <h1>Integrity</h1>
        </div>
        <div className="right">
          <h2>Act With Integrity.</h2>
          <p>Working for the net-positive sake of World Peace is paramount, and above all else, no matter our personal differences, we will not encroach on the integrity of World Peace.</p>
        </div>
      </div>

      <div className="value">
        <div className="left">
          <h2>Keep It Simple Stoopid!</h2>
          <p>It is commitment to forward progress that counts!</p>
        </div>
        <div className="right simple">
          <h1>K.I.S.S.</h1>
        </div>
      </div>

      <div className="value">
        <div className="left fun">
          <h1>Have Fun</h1>
        </div>
        <div className="right">
          <h2>Enjoy Life.</h2>
          <p>Big Tymin'!</p>
        </div>
      </div>

      <div className="value">
        <div className="left">
          <h2>Be Unique</h2>
          <p>With that said, let’s work together so we can enable World Peace already :{')'}
          </p>
        </div>
        <div className="right unique">
          <h1>Be 1/1</h1>
        </div>
      </div>

      <Footer className = "footer"/>
    </div>
  );
}

export default Mission;
