import React from 'react'
import Footer from "../components/Footer";
import OriginPitch from "../assets/proposal1.png"
import OriginPitch2 from "../assets/proposal2.png"
import Proposal from "../assets/proposal.pdf"
import "../styles/Johnny.scss";
import { TweetList } from '../helpers/TweetList';
import Tweet from "../components/Tweet.js"

function Johnny() {
  return (
    <div className='johnny'>
      <div className='intro'>
        <div className='title'>
          <h1>Lord Jay "Boss" UUu 😼</h1>
          <h2>"UUu's Chinese name is <span style={{color: '#238811'}}>吴绿</span>, which means <span style={{color: '#238811'}}>"green"</span>. He was born to <span style={{color: '#238811'}}>green</span> the world."</h2>
        </div>
      </div>

      <div className="originPitch">
        <h1>Letter from UUu 💌</h1>
        <a href = {Proposal} download>
          <img src={OriginPitch} className="pitch"/>
          <img src={OriginPitch2} className="pitch"/>
        </a>
      </div>
      

      <div className='achievements'>
        <h1>Achievements 🏆</h1>
        <h2>"Your life achievements will be bullet points in mine."</h2>
        <p>
        • 1M views on a TikTok video — August 3rd, 2022 <br/>  
        • Released EP, Introducing: UUu — July 31st, 2022 <br/>  
        • 10k TikTok followers within 6 days of account creation — July 25th, 2022 <br/>
        • Survived being locked up for 12 days — July 14th, 2022 <br/>
        • FBI Watchlist — July 7th, 2022 <br/>
        • Certified maniac — July 4th, 2022 <br/>
        • 10k YouTube views within 6 days of first video upload — June 17th, 2022<br/>
        • #1 expert on Handshake (HNS) — June 11th, 2022 <br/>
        • Head of Product (CEO Equivalent) at Namebase — May 11th, 2022<br/>
        • UUu LLC, CEO — March 14th, 2022<br/>
        • Membership at The MET — December 29th, 2021 <br/>
        • Advanced open water diver — April 26th, 2019<br/>
        • Master rank in 王者荣耀 (Mobile League of Legends) — November 12th, 2018 <br/>
        • Certified mediator — June 22nd, 2018<br/>
        • 4.0 final semester at UC Berkeley, Energy Engineering — May 12th, 2018<br/>
        • 1 of 2 successful internal transfers into UC Berkeley's College of Engineering — April 20th, 2016 <br/>
        • High school senior favorite — June 13th, 2014 <br/>
        • Eagle scout — October 17th, 2013<br/>
        • 1st place intermediate Wushu — September 22nd, 2012 <br/>
        • ABRSM piano grade 5 — May 18th, 2008<br/>
        • Born at Alta Bates in Berkeley, California — September 11th, 1995
        </p>
      </div>

      <div className='ongoing'>
        <h1>Pursuits 🎯</h1>
        <p>
        • #1 Hit Album<br/>
        • #1 YouTuber<br/>
        • ABRSM Grade 7<br/>
        • Ambassador to China<br/>
        • American Political Party <br/>
        • A-List Actor<br/>
        • Family Documentary<br/>
        • NBA All-Star Celebrity Basketball Game Player<br/>
        • Netflix Comedy Special<br/>
        • Nobel Prize<br/>
        • Pursuit: USA Olympic Basketball Gold Medal <br/>
        • Stanford MBA <br/>
        • <span style={{color: '#238811'}}>True Sustainability</span> <br/>
        • Winner's Ultimate <br/>
        • .uuu ICANN TLD<br/>
        </p>
      </div>

      <div className='wisdom'>
        <h1>Quotes 💭</h1>
        <div className='wise-tweets'>
          {TweetList.map((tweet, key) =>{
            return (
              <Tweet
                key = {key}
                tweet = {tweet.tweet}
                link =  {tweet.link}
              />
            )
          })}

        </div>
      </div>

      <Footer className = "footer"/>
    </div>
  )
}

export default Johnny