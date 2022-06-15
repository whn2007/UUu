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
        <a href="" target="_blank">
          <TwitterIcon />
        </a>
        <a href="" target="_blank">
          <InstagramIcon />
        </a>
        <a href="" target="_blank">
          <LinkedInIcon />
        </a>
        <a href="" target="_blank">
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
