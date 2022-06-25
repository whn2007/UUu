import React from 'react'
import Footer from "../components/Footer";
import "../styles/Johnny.scss";
import Origin from "../assets/origin.png"
import LifeMission from "../assets/lifemission.png"
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitchIcon from "../assets/twitch.png"
import RedditIcon from '@material-ui/icons/Reddit';
import { TweetList } from '../helpers/TweetList';
import Tweet from "../components/Tweet.js"

function Johnny() {
  return (
    <div className='johnny'>
      <div className='intro'>
        <div className='title'>
          <h1>Lord Johnny Wu</h1>
        </div>
      </div>
      
      <div className='links'>
        <div className='story'>
          <div className='origin'>
            <h2>Origin Story</h2>
            <a href='https://twitter.com/JayWuzer/status/1537534817302028288' target='_blank'>
              <img className='origin-story' src = {Origin}/>
            </a>
          </div>

          <div className='origin'>
            <h2>Life Mission</h2>
            <a href='https://twitter.com/JayWuzer/status/1537575282583818240' target='_blank'>
              <img className='life-mission' src = {LifeMission}/>
            </a>
          </div>
        </div>
      </div>

      <div className='achievements'>
        <h1>Achievements</h1>
        <p>
        • #1 expert in the world on Handshake (HNS) - present<br/>
        • Reached 10k organic views on YouTube within 6 days of first video upload - June 17th, 2022<br/>
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
        <h1>Ongoing Pursuits</h1>
        <p>
        • #1 YouTuber<br/>
        • #1 hit album<br/>
        • ABRSM Grade 8<br/>
        • A-List Celebrity Actor<br/>
        • Family documentary<br/>
        • NBA All-Star Celebrity Basketball Game player<br/>
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


      <div className='socials'>
        <h1>Socials</h1>
        <h2>Learn More About the Founder</h2>
        <div className='icons'>
          <a href='https://twitter.com/JayWuzer' target='_blank'> <TwitterIcon/> </a>
          <a href='https://instagram.com/jaywuzer?igshid=YmMyMTA2M2Y=' target='_blank'> <InstagramIcon/> </a>
          <a href='https://www.linkedin.com/in/jaywuzer/' target='_blank'> <LinkedInIcon/> </a>
          <a href='https://www.twitch.tv/jaywuzer' target='_blank'> <img src={TwitchIcon}/> </a>
          <a href='https://www.linkedin.com/in/jaywuzer/' target='_blank'> <RedditIcon/> </a>
          <a href='https://www.youtube.com/channel/UCYmsa4XVlPT7WCoA09YjP0g' target='_blank'> <YouTubeIcon/> </a>
        </div>
      </div>

      <Footer className = "footer"/>
    </div>
  )
}

export default Johnny