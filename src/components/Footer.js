import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from "@material-ui/icons/YouTube";
import RedditIcon from '@material-ui/icons/Reddit';
import FacebookIcon from '@material-ui/icons/Facebook';
import "../styles/Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.youtube.com/c/JayWuzer" target="_blank">
          <YouTubeIcon />
        </a>
        <a href="https://twitter.com/UUuLLC" target="_blank">
          <TwitterIcon />
        </a>
        <a href="https://www.instagram.com/jaywuzer/" target="_blank">
          <InstagramIcon />
        </a>
        <a href="https://www.linkedin.com/company/uuu-llc/" target="_blank">
          <LinkedInIcon />
        </a>
        <a href="https://www.facebook.com/JayUUuzer" target="_blank">
          <FacebookIcon />
        </a>
        <a href="https://www.reddit.com/user/JayWuzer/" target="_blank">
          <RedditIcon/>
        </a>
      </div>
      <p>
        &copy; 2022 <strong>UUu LLC</strong>
      </p>
    </div>
  );
}

export default Footer;
