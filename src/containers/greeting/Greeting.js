import React from "react";
import "./Greeting.css";
import Button from "../../components/button/Button";
import { greeting } from "../../landing";
import { Fade } from "react-reveal";

export default function Greeting(props) {
  const theme = props.theme;
  const handleCtaClick = (event) => {
    if (!greeting.ctaLink) {
      return;
    }
    if (
      greeting.ctaLink.startsWith("#") &&
      !greeting.ctaLink.startsWith("#/")
    ) {
      event.preventDefault();
      const targetId = greeting.ctaLink.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <Fade bottom duration={2000} distance="40px">
      <section className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-content">
            <div className="greeting-header">
              <h1 className="greeting-title" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.tagline ? (
                <p className="greeting-tagline" style={{ color: theme.text }}>
                  {greeting.tagline}
                </p>
              ) : null}
            </div>
            {greeting.description ? (
              <p
                className="greeting-description"
                style={{ color: theme.secondaryText }}
              >
                {greeting.description}
              </p>
            ) : null}
            {greeting.statement ? (
              <p
                className="greeting-statement secondary-heading"
                style={{ color: theme.text }}
              >
                {greeting.statement}
              </p>
            ) : null}
            {greeting.ctaText && greeting.ctaLink ? (
              <div className="button-greeting-div">
                <Button
                  text={greeting.ctaText}
                  newTab={(greeting.ctaLink || "").startsWith("http")}
                  href={greeting.ctaLink}
                  theme={theme}
                  className="greeting-cta-button"
                  onClick={handleCtaClick}
                />
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </Fade>
  );
}
