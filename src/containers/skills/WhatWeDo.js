import React from "react";
import "./WhatWeDo.css";
import { Fade } from "react-reveal";
import FullStackImg from "./FullStackImg";
import { whatWeDo } from "../../landing";

export default function WhatWeDo(props) {
  const theme = props.theme;
  return (
    <section className="what-we-do-section" id="what-we-do">
      <Fade bottom duration={2000} distance="20px">
        <div className="what-we-do-header">
          <h2 className="what-we-do-heading" style={{ color: theme.text }}>
            {whatWeDo.heading}
          </h2>
          <h3
            className="what-we-do-subheading"
            style={{ color: theme.secondaryText }}
          >
            {whatWeDo.subheading}
          </h3>
        </div>
      </Fade>
      <div className="what-we-do-inner">
        <Fade bottom duration={2000} distance="20px">
          <div className="what-we-do-illustration">
            <FullStackImg theme={theme} />
          </div>
        </Fade>
        <Fade bottom duration={2000} distance="20px" delay={200}>
          <div className="what-we-do-text">
            {whatWeDo.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="what-we-do-paragraph"
                style={{ color: theme.secondaryText }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}
