import React from "react";
import Footer from "../components/Footer";
import "../styles/Mission.scss"
import Diamond from '../assets/diamond.webp'
import Zero from '../assets/knowdogap.webp'
import STier from '../assets/s-tier.webp'
import OneOfOne from '../assets/1@2x.webp'


function Mission() {
  return (
    <div className="mission">
      <div className="header">
        <h1>Values 📜</h1>
        <p>We solve problems, have fun, figure shit out, and get things done. </p>
      </div>

      <div className="value">
        <div className="left integrity">
          <h1>Integrity</h1>
        </div>
        <div className="right">
          <h2>Act With Integrity 😇</h2>
          <p>Working for the net-positive sake of <span style={{color: '#238811'}}>True Sustainability</span> is paramount, and above all else, no matter our personal differences, we will not encroach on the integrity of <span style={{color: '#238811'}}>True Sustainability</span>.</p>
        </div>
      </div>

      <div className="value">
        <div className="left">
          <h2>Keep It Simple, Stoopid! 🙄</h2>
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
          <h2>Enjoy Life 😝</h2>
          <p>Follow your passion!</p>
        </div>
      </div>

      <div className="value">
        <div className="left">
          <h2>Become Unique 😎</h2>
          <p>We will help you eliminate your know-do gap and turn you into someone who is S-Tier, which will make you 1/1.
          </p>
        </div>
        <div className="right unique">
          <h1>Be 1/1</h1>
        </div>
      </div>


      <div className="top">
        <div className="diamonds">
          <h1>Diamonds, will shine.</h1>
          <img src={Diamond}/>
        </div>
        <p>If you <i>know</i> you are a Diamond in the rough, join UUu LLC and you will be polished to shine.</p>
      </div>

      <div className="founder">
        <div className="profile">
          <img src = {Zero}/>
        </div>
        <div className="textBlock">
          <h1>Zero know-do gap 🧑‍🚀</h1>
          <p>
            <b>Join UUu LLC to eliminate your know-do gap.</b><br/>
            <br/> 
            The deepest chasm in the world is the gap between what you know and what you do — most people's know-do gaps are miles long. <br/>
          </p>
        </div>
      </div>
      <div className="founder">
        <div className="textBlock">
          <h1>S-Tier 🦸</h1>
          <p>
            <b>Join UUu LLC to become S-Tier.</b><br/>
            <br/> 
            • S-Tier: You love your job and have hobbies. <br/>
            • A-Tier: You love your job but don't have hobbies. <br/>
            • B-Tier: You don't care about your job but have hobbies. <br/>
            • C-Tier: You don't care about your job and don't have hobbies. <br/>
            • D-Tier: You hate your job but have hobbies. <br/>
            • F-Tier: You hate. <br/>
          </p>
        </div>
        <div className="profile">
          <img src = {STier}/>
        </div>
      </div>
      <div className="founder">
        <div className="profile">
          <img src = {OneOfOne}/>
        </div>
        <div className="textBlock">
          <h1>1/1 🤴</h1>
          <p>
          <b>Join UUu LLC to become 1/1.</b><br/> 
          <br/> 
          1/1 just means you've grinded in one direction so long that everyone else around you has dropped out, so you're the only one left. If you love what you do, then you will naturally become 1/1. <br/> Anyone can become 1/1!
          </p>
        </div>
    </div>
      
    </div>
  );
}

export default Mission;
