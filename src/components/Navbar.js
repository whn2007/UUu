import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.scss";
import GreenLogo from '../assets/greenlogo.png'

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
          <Link to="/"> Home </Link>
          <Link to="/values/"> Values </Link>
          <Link to="/diamonds/"> Diamonds </Link>
          <Link to="/boss/"> Boss </Link>
          <Link to="/inspirations/"> Inspirations </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/values/"> Values </Link>
        <Link to="/diamonds/"> Diamonds </Link>
        <Link to="/boss/"> Boss </Link>
        <Link to="/inspirations/"> Inspirations </Link>
        <div className="greenLogo"><img src={GreenLogo}/></div>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
