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
          <h1>Lord JayWuzer/</h1>
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

      <div className='wisdom'>
        <h1>Wisdom</h1>
        <div className='wise-tweets'>
          <a className='tweet' href='https://twitter.com/JayWuzer/status/1538602089093353472' target='_blank'>
            <p>"California is the best country in the world." <br/>
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1538601385922400256' target='_blank'>
            <p>"Any time your feelings get hurt, it's just an indication that you need to dig a little more to more deeply understand yourself." <br/>
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1537502931427110912' target='_blank'>
            <p>"The difference between a medicine and a poison, is dosage." <br/>
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1537565381920845824' target='_blank'>
            <p>Only comment on things you have personally experienced. <br/>
            Don't talk sh#t about things you haven't tried yet, that's STOOPID! <br/>
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1538595515272556544' target='_blank'>
            <p>Silver bullets exist. <br/>
              We just need a lot of them.
            </p>
          </a>

          <a className='tweet' 
          href='https://twitter.com/JayWuzer/status/1538533999034806272' 
          target='_blank'>
            <p>No one will ever truly fully understand you.
            However, the sum of all your friends 
            CAN fully understand you. 
            That, is the purpose of friends. 
            To be understood. <br/>
            Fully.
            </p>
          </a>
        </div>
      </div>

      <div className='inspiration'>
        <h1>Inspiration</h1>
        <div className='inspiring-tweets'>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1537503058267058176' target="_blank">
            <p>"Moderation in everything, including moderation."<br/>
            </p>
          </a>

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
          <a href='https://www.youtube.com/channel/UCYmsa4XVlPT7WCoA09YjP0g' target='_blank'> <YouTubeIcon/> </a>
        </div>
      </div>

      <Footer className = "footer"/>
    </div>
  )
}

export default Johnny