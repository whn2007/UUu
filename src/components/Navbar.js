import React, { useState } from "react";
import Logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.scss";
import GreenLogo from '../assets/greenlogo.webp'

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/">
          <img src={Logo} className="logo" alt="Handshake Logo"/>
        </Link>
        <div className="hiddenLinks">
        <a href="https://uuu.vip/" className=""> <b>Home</b> </a>
        <a href="https://values.uuu.vip/" className=""> <b>Values</b> </a>
        <a href="https://diamonds.uuu.vip/" className=""> <b>Diamonds</b> </a>
        <a href="https://boss.uuu.vip/" className="current"> <b>Boss</b> </a>
        <a href="https://inspirations.uuu.vip/" className=""> <b>Inspirations</b> </a>
          {/* <Link to="/"> <b>Home</b> </Link>
          <Link to="/values/"> <b>Values</b> </Link>
          <Link to="/diamonds/"> <b>Diamonds</b> </Link>
          <Link to="/boss/"> <b>Boss</b> </Link>
          <Link to="/inspirations/"> <b>Inspirations</b> </Link> */}
        </div>
      </div>
      <div className="rightSide">
        <a href="https://uuu.vip/" className=""> <b>Home</b> </a>
        <a href="https://values.uuu.vip/" className=""> <b>Values</b> </a>
        <a href="https://diamonds.uuu.vip/" className=""> <b>Diamonds</b> </a>
        <a href="https://boss.uuu.vip/" className="current"> <b>Boss</b> </a>
        <a href="https://inspirations.uuu.vip/" className=""> <b>Inspirations</b> </a>
        <div className="greenLogo"><img src={GreenLogo}/></div>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
        {/* <Link to="/"> <b>Home</b> </Link>
        <Link to="/values/"> <b>Values</b> </Link>
        <Link to="/diamonds/"> <b>Diamonds</b> </Link>
        <Link to="/boss/"> <b>Boss</b> </Link>
        <Link to="/inspirations/"> <b>Inspirations</b> </Link>
        <div className="greenLogo"><img src={GreenLogo}/></div>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button> */}
      </div>
    </div>
  );
}

export default Navbar;
