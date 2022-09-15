import React from "react";
import Footer from "../components/Footer";
import "../styles/Home.scss";
import Merch from '../assets/jacket.webp'


function Home() {
  return (
    <div className="home">
      <div className="header">
        <div className="intro">
          <div className="top">
            <h1>#1 Branding Expert in the World. 🥇</h1>
            <p>"Brand is how people talk about you behind your back. 🗣️</p>
          </div>
        </div>
      </div>

      <div className="polish">
        <h1>I make sure people talk about you behind your back exactly how you want them to. 💯</h1>
        <h2>The 3 steps to polishing your brand so it can shine:</h2>
        <p>1. Aesthetics: What's people's first impression of you? 🎨</p>
        <p>2. User Experience: Was it a pleasure working with you? 😸</p>
        <p>3. Marketing: Do people know who you are and what you do? 📣</p>
      </div>      

      <div className="merch">
        <h1>Merch 👕</h1>
        <h2>The best way to support our endeavors is by <a href="https://merch.uuu.vip/" target='_blank'>purchasing</a> and rockin' our company merch!</h2>
        <a href="https://merch.uuu.vip/" target='_blank'><img src={Merch}/></a>
      </div>

      <Footer className = "footer"/>

    </div>
  );
}

export default Home;
