import React from "react";
import Footer from "../components/Footer";
import "../styles/Home.scss";
import Merch from '../assets/jacket.png'
import Zero from '../assets/knowdogap.png'
import STier from '../assets/s-tier.png'
import OneOfOne from '../assets/1@2x.png'

function Home() {
  return (
    <div className="home">
      <div className="header">
        <div className="intro">
          <div className="top">
            <h3>Diamonds, will shine</h3>
            <h2>If you <i>know</i> you are a Diamond in the rough, join UUu LLC and you will be polished to shine.</h2>
          </div>
        </div>
      </div>

      <div className="founder">
        <div className="profile">
          <img src = {Zero}/>
        </div>
        <div className="textBlock">
          <h1>"Zero know-do gap"</h1>
          <p>
            <b>Join UUu LLC to eliminate your know-do gap.</b> <br/>
            The deepest chasm in the world is the gap between what you know <br/> and what you do — most people's know-do gaps are miles long. <br/> Join UUu LLC to eliminate your know-do gap.
          </p>
        </div>
      </div>
      <div className="founder">
        <div className="textBlock">
          <h1>"S-Tier"</h1>
          <p>
            <b>Join UUu LLC to become S-Tier.</b><br/>
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
          <h1>"1/1"</h1>
          <p>
          <b>Join UUu LLC to become 1/1.</b><br/>
          1/1 just means you grinded in one direction so long <br/> that everyone else around you has dropped out, <br/> so you're the only one left. If you love what you do, <br/> then you will naturally become 1/1. Anyone can become 1/1!.
          </p>
        </div>
      </div>
      

      <div className="merch">
        <h1>Merch</h1>
        <h2>The best way to support our endeavors is by <a href="merch.uuu.vip" target='_blank'>purchasing</a> and rockin' our company merch!</h2>
        <a href="https://merch.uuu.vip/" target='_blank'><img src={Merch}/></a>
      </div>

      <Footer className = "footer"/>

    </div>
  );
}

export default Home;
