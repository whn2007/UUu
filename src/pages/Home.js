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

      <table> 
        <tr>
          <th><h1>The UUu Experience</h1></th>
          <th><h2>Chat</h2> <p>I'll listen to you and give you my blunt feedback.</p></th>
          <th><h2>Strategize</h2> <p>I'll listen to your goals and roadblocks, and then step-by-step what I think you need to do to succeed. Then it's on you.</p></th>
          <th><h2>Execute</h2> <p>My team will ensure our strategy is executed all the way through. You are welcome to be as hands-free or involved as you'd like, but we can take it from here.</p></th>
        </tr>
        <tr>
          <td><h2>Aesthetics</h2><p>(e.g. Design, Logo, UI)</p></td>
          <td><p>$100 (Individuals), $1,000 (Small Businesses), $10,000 (Large Businesses)</p></td>
          <td><p>$1,000 (Individuals), $10,000 (Small Businesses), $100,000 (Large Businesses)</p></td>
          <td><p>$10,000 (Individuals), $100,000 (Small Businesses), $1,000,000 (Large Businesses)</p></td>
        </tr>
        <tr>
          <td><h2>User Experience</h2><p>(e.g. Copy, Customer Service. Quality Control)</p></td>
          <td><p>$100 (Individuals), $1,000 (Small Businesses), $10,000 (Large Businesses)</p></td>
          <td><p>$1,000 (Individuals), $10,000 (Small Businesses), $100,000 (Large Businesses)</p></td>
          <td><p>$10,000 (Individuals), $100,000 (Small Businesses), $1,000,000 (Large Businesses)</p></td>
        </tr>
        <tr>
          <td><h2>Marketing</h2><p>(e.g. Guerilla Marketing, Influencer Marketing, Social Media Marketing)</p></td>
          <td><p>$100 (Individuals), $1,000 (Small Businesses), $10,000 (Large Businesses)</p></td>
          <td><p>$1,000 (Individuals), $10,000 (Small Businesses), $100,000 (Large Businesses)</p></td>
          <td><p>$10,000 (Individuals), $100,000 (Small Businesses), $1,000,000 (Large Businesses)</p></td>
        </tr>
      </table> 

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
