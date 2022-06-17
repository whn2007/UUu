import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/Mission.scss"

function Mission() {
  return (
    <div className="mission">
      <div className="header">
        <h1>Our Values</h1>
        <p>At UUu, we hold every employee to a few key principles. </p>
      </div>

      <div className="value">
        <div className="left integrity">
          <h1>Integrity</h1>
        </div>
        <div className="right">
          <h2>Act With Integrity.</h2>
          <p>There is too much hate and evil in this world. The <br/>
            Earth is dying, and it needs honest people to save it.
          </p>
        </div>
      </div>

      <div className="value">
        <div className="left">
          <h2>Keep It Simple Stoopid!</h2>
          <p>Keeping it simple gets rid of hesitation and doubts. <br/>
          Goals are accomplished faster, so keep it simple!
          </p>
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
          <p>Life is too short. Have fun with everything.</p>
        </div>
      </div>

      <div className="value">
        <div className="left">
          <h2>Be Unique</h2>
          <p>Be the best at what you do, and get sh#t done.
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
