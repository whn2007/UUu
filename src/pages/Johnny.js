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

function Johnny() {
  return (
    <div className='johnny'>
      <div className='intro'>
        <div className='title'>
          <h2>Meet the Founder</h2>
          <h1>Lord Jaywuzer</h1>
        </div>
      </div>
      
      <div className='links'>
        <div className='links-intro'>
          <h1>The Brilliance Behind the Madness</h1>
          <h2>Peer into the mind of a genius.</h2>
        </div>

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

      <div className='wisdom'>
        <h1>Wisdom</h1>
        <h2>What a man learns in a lifetime Lord Jaywuzer learns in a moment.</h2>
        <div className='wise-tweets'>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1537503058267058176' target="_blank">
            <p>"Moderation in everything, including moderation."<br/>
            <h2>- Oscar Wilde</h2>
            </p>
          </a>
          <a className='tweet' href='https://twitter.com/JayWuzer/status/1537502931427110912' target='_blank'>
            <p>"The difference between a medicine and a poison, is dosage." <br/>
              <h2>- Johnny Wu</h2>
            </p>
          </a>
          <a className='tweet' href='https://twitter.com/JayWuzer/status/1537565381920845824' target='_blank'>
            <p>Only comment on things you have personally experienced. <br/>
            Don't talk sh#t about things you haven't tried yet, that's STOOPID! <br/>
            <h2>- Johnny Wu</h2>
            </p>
          </a>
        </div>

      </div>
      
      <div className='socials'>
        <h1>Socials</h1>
        <h2>Learn More About the Founder</h2>
        <div className='icons'>
          <a href='' target='_blank'> <TwitterIcon/> </a>
          <a href='' target='_blank'> <InstagramIcon/> </a>
          <a href='' target='_blank'> <LinkedInIcon/> </a>
          <a href='' target='_blank'> <img src={TwitchIcon}/> </a>
          <a href='' target='_blank'> <YouTubeIcon/> </a>
        </div>
      </div>

      <Footer className = "footer"/>
    </div>
  )
}

export default Johnny