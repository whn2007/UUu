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
          <h1>Lord Johnny "Boss" Wu</h1>
          <h2>"Lord UUu's Chinese name is 吴绿, which means “green”. He was born to green the world."</h2>
        </div>
      </div>

      <div className="originPitch">
        <h1>Letter from Lord Johnny "Boss" Wu</h1>
        <a href = {Proposal} download>
          <img src={OriginPitch} className="pitch"/>
          <img src={OriginPitch2} className="pitch"/>
        </a>
      </div>
      

      <div className='achievements'>
        <h1>Achievements</h1>
        <p>
        "Your life achievements will be bullet points in mine." <br/>
        • #1 expert in the world on Handshake (HNS) — present<br/>
        • Reached 10k organic views on YouTube within 6 days of first video upload — June 17th, 2022<br/>
        • Promoted to Head of Product (equivalent to CEO) at Namebase — May 11th, 2022 <br/>
        • UUu LLC, CEO — March 14th, 2022<br/>
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
        <h1>Pursuits</h1>
        <p>
        • #1 Hit Album<br/>
        • #1 YouTuber<br/>
        • ABRSM Grade 8<br/>
        • Ambassador to China<br/>
        • A-List Actor<br/>
        • Family Documentary<br/>
        • NBA All-Star Celebrity Basketball Game Player<br/>
        • Netflix Comedy Special<br/>
        • Nobel Prize<br/>
        • World Peace<br/>
        • .uuu ICANN TLD<br/>
        </p>
      </div>

      <div className='wisdom'>
        <h1>Quotes</h1>
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