import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants/paths";
import {
  navbarStyle,
  imgStyle,
  ulStyle,
  liStyle,
  linkStyle,
} from "./navbar.styles";

function Navbar() {
  return (
    <nav style={navbarStyle}>
      <img
        src="https://plek.co/hs-fs/hubfs/plek%20transparent%20background-1.png?width=100&amp;height=50&amp;name=plek%20transparent%20background-1.png"
        alt="plek transparent background-1"
        style={imgStyle}
      />
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to={PATHS.HOME} style={linkStyle}>
            Home
          </Link>
        </li>
        <li style={liStyle}>
          <Link to={PATHS.WATCH} style={linkStyle}>
            Watch
          </Link>
        </li>
        <li style={liStyle}>
          <Link to={PATHS.TIMER} style={linkStyle}>
            Timer
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
