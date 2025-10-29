import React from "react";
import "./Skills.css";
import { Fade } from "react-reveal";
import FullStackImg from "./FullStackImg";
import { whatWeDo } from "../../portfolio";
import SocialMedia from "../../components/socialMedia/SocialMedia";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <section className="what-we-do-section" id="what-we-do">
      <Fade bottom duration={2000} distance="20px">
        <h2 className="what-we-do-heading" style={{ color: theme.text }}>
          {whatWeDo.heading}
        </h2>
      </Fade>
      <div className="what-we-do-inner">
        <Fade bottom duration={2000} distance="20px">
          <div className="what-we-do-illustration">
            <FullStackImg theme={theme} />
          </div>
        </Fade>
        <Fade bottom duration={2000} distance="20px" delay={200}>
          <div className="what-we-do-text">
            <h3
              className="what-we-do-title secondary-heading"
              style={{ color: theme.text }}
            >
              {whatWeDo.title}
            </h3>
            <p
              className="what-we-do-description"
              style={{ color: theme.secondaryText }}
            >
              {whatWeDo.description}
            </p>
            <ul className="what-we-do-list" style={{ color: theme.text }}>
              {whatWeDo.bullets.map((item, index) => (
                <li key={index} className="what-we-do-list-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Fade>
      </div>
      {whatWeDo.socialsBanner?.message ? (
        <div
          className="what-we-do-socials"
          style={{ backgroundColor: theme.highlight }}
        >
          <p style={{ color: theme.text }}>{whatWeDo.socialsBanner.message}</p>
          <div className="what-we-do-socials-links">
            <SocialMedia theme={theme} />
          </div>
        </div>
      ) : null}
    </section>
  );
}
