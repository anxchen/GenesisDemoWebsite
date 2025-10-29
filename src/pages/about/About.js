import React, { Component } from "react";
import "./About.css";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { about as aboutContent } from "../../portfolio";

class About extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div>
        <Header theme={theme} />
        <main className="about-main">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="about-title" style={{ color: theme.text }}>
              {aboutContent.title}
            </h1>
          </Fade>
          <Fade bottom duration={2000} distance="20px" delay={100}>
            <p
              className="about-description"
              style={{ color: theme.secondaryText }}
            >
              {aboutContent.description}
            </p>
          </Fade>
          <section className="about-highlights">
            {aboutContent.highlights.map((item, index) => (
              <Fade
                bottom
                duration={2000}
                distance="20px"
                delay={150 * (index + 1)}
                key={index}
              >
                <div
                  className="about-highlight-card"
                  style={{ backgroundColor: theme.highlight }}
                >
                  <p style={{ color: theme.text }}>{item}</p>
                </div>
              </Fade>
            ))}
          </section>
        </main>
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default About;
