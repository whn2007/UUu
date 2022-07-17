import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/Home.scss";
import Johnny from '../assets/profilepics/jaywuzer.png'
import TextBubble from '../assets/textbubble.png'
import Merch from '../assets/jacket.png'

function Home() {
  return (
    <div className="home">

      <div className="header">
        <div className="intro">
          <div className="top">
            <h3>Diamonds Will Shine.</h3>
            <h2>If you know you are a diamond in the rough, join UUu and we will polish you to shine.</h2>
            <div>
              <Link to="/values/">
                <button>Our Values</button>
              </Link>
            </div>
          </div>
    
        </div>
      </div>

      <div className="founder">
        <div className="profile">
          <img src = {Johnny}/>
          <h2>Boss</h2>
        </div>
        <div className="textBlock">
          <h1>"Eliminate your know-do gap"</h1>
          <h2>Join UUu and you will become S-Tier.</h2>
          <br/>
          <p>
            S-Tier: You love your job and have hobbies. <br/>
            A-Tier: You love your job but don't have hobbies. <br/>
            B-Tier: You don't care about your job but have hobbies. <br/>
            C-Tier: You don't care about your job and don't have hobbies. <br/>
            D-Tier: You hate your job but have hobbies. <br/>
            F-Tier: You hate. <br/>
          <h2>- Lord Johnny "Boss" Wu</h2></p>
        </div>
      </div>

      <div className="merch">
        <h1>UUu Merch</h1>
        <h2>If you believe in our mission and strategy for enabling World Peace by 2035 and True Sustainability by 2045, the best way to support our activities is by purchasing and publicly rocking our company merch!</h2>
        <a href="https://merch.uuu.vip/" target='_blank'><img src={Merch}/></a>
        <a href="https://merch.uuu.vip/" target='_blank'><button>Store</button></a>
      </div>

      <div className="becomeUnique"> 
        <h1>Become Unique.</h1>
        <h2>We will help you eliminate your know-do gap and turn you into someone who is S-Tier, which will make you 1/1.</h2>
      </div>

      <Footer className = "footer"/>

    </div>
  );
}

export default Home;
