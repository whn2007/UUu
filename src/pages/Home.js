import React from "react";
import Footer from "../components/Footer";
import "../styles/Home.scss";
import Merch from '../assets/jacket.webp'
import Logo from '../assets/logo.webp'
import Before from '../assets/before.webp'
import After from '../assets/after.webp'
import Stats from '../assets/stats.webp'
import UX from '../assets/ux.webp'


function Home() {
  return (
    <div className="home">
      <div className="header">
        <div className="intro">
          <div className="top">
            <h1>#1 Branding Expert in the World 🥇</h1>
            <p>Brand is how people talk about you behind your back 🗣️</p>
          </div>
        </div>
      </div>

      <div className="polish">
        <h1>I make sure people talk about you behind your back exactly how you want them to 💯</h1>
        <div className="video"><iframe width="560" height="315" src="https://www.youtube.com/embed/UgoQJbq3TWo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <h2>The 3 steps to polishing your brand:</h2>
        <p>1. Aesthetics: What's people's first impression of you? 🎨</p>
        <div className="comparison">
          <div>
            <h2>Before</h2>
            <img src={Before}/>
          </div>
          <div>
            <h2>After</h2>
            <img src={After}/>
          </div>
        </div>
        <p>2. User Experience: Was it a pleasure working with you? 😸</p>
          <div className="comparison marketing">
            <div className="example">
              <h2>San Jian King Inc.</h2>
              <div className="exampleImage">
                <img src={UX}/>
              </div>
            </div>
          </div>
        <p>3. Marketing: Do people know who you are and what you do? 📣</p>
        <div className="comparison marketing">
          <div className="example">
            <h2>Hip Hop On Da Pull Up</h2>
            <div className="exampleImage"><iframe width="560" height="315" src="https://www.youtube.com/embed/dEVqDIVtROI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
          </div>
          <div className="example">
            <h2>TikTok Analytics</h2>
            <div className="exampleImage"><img src={Stats}/></div>
          </div>  
        </div>
      </div>     

      <table> 
        <tr>
          <th><img src={Logo}/></th>
          <th><h2>Chat</h2> <p>I'll listen to your goals & roadblocks and give you my blunt feedback.</p></th>
          <th><h2>Strategize</h2> <p>I'll tell you step-by-step what to do to succeed. Then it's on you.</p></th>
          <th><h2>Execute</h2> <p>I'll execute on our strategy for you, so you can focus on your craft.</p></th>
        </tr>
        <tr>
          <td><h1>Aesthetics</h1><p>(e.g. Design, Logo, UI)</p></td>
          <td><p>$100 (Individuals), $1,000 (Small Businesses), $10,000 (Large Businesses)</p></td>
          <td><p>$1,000 (Individuals), $10,000 (Small Businesses), $100,000 (Large Businesses)</p></td>
          <td><p>$10,000 (Individuals), $100,000 (Small Businesses), $1,000,000 (Large Businesses)</p></td>
        </tr>
        <tr>
          <td><h1>User Experience</h1><p>(e.g. Copy, Customer Service. Quality Control)</p></td>
          <td><p>$100 (Individuals), $1,000 (Small Businesses), $10,000 (Large Businesses)</p></td>
          <td><p>$1,000 (Individuals), $10,000 (Small Businesses), $100,000 (Large Businesses)</p></td>
          <td><p>$10,000 (Individuals), $100,000 (Small Businesses), $1,000,000 (Large Businesses)</p></td>
        </tr>
        <tr>
          <td><h1>Marketing</h1><p>(e.g. Guerilla Marketing, Influencer Marketing, Social Media Marketing)</p></td>
          <td><p>$100 (Individuals), $1,000 (Small Businesses), $10,000 (Large Businesses)</p></td>
          <td><p>$1,000 (Individuals), $10,000 (Small Businesses), $100,000 (Large Businesses)</p></td>
          <td><p>$10,000 (Individuals), $100,000 (Small Businesses), $1,000,000 (Large Businesses)</p></td>
        </tr>
      </table> 

      <div className="chat">
        <h1>Schedule a Free Chat</h1>
        <div className="buttonContainer">→<a href="https://chat.uuu.vip/" target='_blank'><div className="button"><h2>Schedule Now!</h2></div></a>←</div>
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
