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
            <h3>We will enable World Peace by 2035.</h3>
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
          <h1>"1/1"</h1>
          <p>"1/1 just means you grinded in one direction so long <br/>
            that everyone else around you has dropped out, <br/>
            so you're the only one left. If you love what you do, <br/>
            then you will naturally become 1/1. <br/>
            <br/>
            Anyone can become 1/1!"
          <h2>- Lord Johnny "Boss" Wu</h2></p>
        </div>
      </div>

      <div className="merch">
        <h1>Check Out Our Merch</h1>
        <a href="https://merch.uuu.vip/" target='_blank'><img src={Merch}/></a>
        <a href="https://merch.uuu.vip/" target='_blank'><button>Store</button></a>
      </div>

      <Footer className = "footer"/>

    </div>
  );
}

export default Home;
