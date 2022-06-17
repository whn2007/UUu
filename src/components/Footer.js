import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from "@material-ui/icons/YouTube";
import "../styles/Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://twitter.com/UUuLLC" target="_blank">
          <TwitterIcon />
        </a>
        <a href="https://instagram.com/jaywuzer?igshid=YmMyMTA2M2Y=" target="_blank">
          <InstagramIcon />
        </a>
        <a href="https://www.linkedin.com/company/uuu-llc/" target="_blank">
          <LinkedInIcon />
        </a>
        <a href="https://www.youtube.com/channel/UCYmsa4XVlPT7WCoA09YjP0g" target="_blank">
          <YouTubeIcon />
        </a>
      </div>
      <p>
        &copy; 2022 <strong>UUu LLC</strong>
      </p>
    </div>
  );
}

export default Footer;
