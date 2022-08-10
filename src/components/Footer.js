import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from "@material-ui/icons/YouTube";
import RedditIcon from '@material-ui/icons/Reddit';
import FacebookIcon from '@material-ui/icons/Facebook';
import "../styles/Footer.scss";
import GreenBottomLogo from '../assets/greenbottomlogo.png'
import RedBottomLogo from '../assets/redbottomlogo.png'
import SpotifyIcon from '../assets/spotify.png'
import TikTokIcon from '../assets/tiktok.png'
import TwitchIcon from '../assets/twitch.png'
import SoundcloudIcon from '../assets/soundcloud.png'
import PatreonIcon from '../assets/patreon.png'
import TwitchIconDark from '../assets/twitch2.png'
import SpotifyIconDark from '../assets/spotify2.png'
import TikTokIconDark from '../assets/tiktok2.png'

function Footer() {
  return (
    <div className="footer">
      <div className="greenBottomLogo"><img src={GreenBottomLogo} /></div>
      <div className="redBottomLogo"><img src={RedBottomLogo} /></div>
      <div className="socialMedia">  
        <div className="firstHalf">
          <a href="https://twitter.com/LordJayWu" target="_blank">
            <TwitterIcon className="special"/>
          </a>
          <a id = 'tiktok' href="https://www.tiktok.com/@lordjaywu" target="_blank">
            <img src={TikTokIcon} className = 'imported special'/>
          </a>
          <a id = 'soundcloud' href="https://soundcloud.com/LordJayWu" target='_blank'>
            <img src= {SoundcloudIcon} 
            className="imported special"/>
          </a>
          <a id = 'spotify' href="https://open.spotify.com/user/12166954044" target='_blank'>
            <img src= {SpotifyIcon} 
            className="imported"/>
          </a>
          <a href="https://www.instagram.com/jaywuzer/" target="_blank">
            <InstagramIcon />
          </a>
        </div>    
        <div className="secondHalf">
          <a href="https://www.youtube.com/c/JayWuzer" target="_blank">
            <YouTubeIcon />
          </a>
          <a href="https://www.linkedin.com/company/uuu-llc/" target="_blank">
            <LinkedInIcon />
          </a>
          <a href="https://www.facebook.com/JayUUuzer" target="_blank">
            <FacebookIcon />
          </a>
          <a  href="https://www.twitch.tv/jaywuzer" target="_blank">
            <img src={TwitchIcon} className='imported'/>
          </a>
          <a href="https://www.reddit.com/user/JayWuzer/" target="_blank">
            <RedditIcon/>
          </a>
        </div>
      </div>
      <p>
        &copy; 2022 <strong>UUu LLC</strong>
      </p>
    </div>
  );
}

export default Footer;
