import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import Toggle from "./Toggle";
import SocialMedia from "../socialMedia/SocialMedia";
import { whatWeDo } from "../../landing.js";
import { useLocation } from "react-router-dom";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer({ theme, themeName, toggleTheme }) {
  const message = whatWeDo.socialsBanner?.message;
  const location = useLocation();

  if (location.pathname === "/signup") {
    // The signup page does not need the footer or theme toggle.
    return null;
  }

  return (
    <div
      className="footer-div"
      style={{ backgroundColor: theme.highlight, color: theme.text }}
    >
      <Fade>
        <div className="footer-content">
          <div className="footer-socials">
            {message ? <p className="footer-message">{message}</p> : null}
            <SocialMedia theme={theme} />
          </div>
          <div className="footer-toggle">
            <Toggle theme={themeName} toggleTheme={toggleTheme} />
            <span
              className="footer-toggle-label"
              style={{ color: theme.secondaryText }}
            >
              toggle for theme
            </span>
          </div>
        </div>
      </Fade>
    </div>
  );
}
