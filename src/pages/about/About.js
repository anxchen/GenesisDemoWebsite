import React, { Component } from "react";
import "./About.css";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { about as aboutContent } from "../../landing";

class About extends Component {
  render() {
    const theme = this.props.theme;
    const { introParagraphs, manifesto, videoSection } = aboutContent;
    const hasVideo = Boolean(videoSection.embedUrl);

    return (
      <div>
        <Header theme={theme} />
        <main className="about-main">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="about-title" style={{ color: theme.text }}>
              {aboutContent.title}
            </h1>
          </Fade>
          <section className="about-intro">
            {introParagraphs.map((paragraph, index) => (
              <Fade
                bottom
                duration={2000}
                distance="20px"
                delay={100 * (index + 1)}
                key={paragraph}
              >
                <p
                  className="about-intro-paragraph"
                  style={{ color: theme.secondaryText }}
                >
                  {paragraph}
                </p>
              </Fade>
            ))}
          </section>
          <Fade bottom duration={2000} distance="20px" delay={300}>
            <section className="about-manifesto">
              <h2
                className="about-manifesto-title"
                style={{ color: theme.text }}
              >
                {manifesto.heading}
              </h2>
              <p
                className="about-manifesto-text"
                style={{ color: theme.secondaryText }}
              >
                {manifesto.bodyLead}{" "}
                <strong style={{ color: theme.text }}>
                  {manifesto.highlight}
                </strong>
              </p>
            </section>
          </Fade>
          <section className="about-video-section">
            <div className="about-video-content">
              <Fade bottom duration={2000} distance="20px" delay={350}>
                <div className="about-video-details">
                  <h3
                    className="about-channel-name"
                    style={{ color: theme.text }}
                  >
                    {videoSection.channelName}
                  </h3>
                  <a
                    className="about-subscribe-button"
                    href={videoSection.subscribeHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {videoSection.subscribeCta}
                    <svg
                      className="about-subscribe-icon"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.82 0 1.54-.5 1.84-1.22l3-7c.1-.23.16-.47.16-.73v-2z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <p
                    className="about-video-intro"
                    style={{ color: theme.secondaryText }}
                  >
                    {videoSection.introLead}{" "}
                    <a
                      href={videoSection.introLinkHref}
                      target="_blank"
                      rel="noreferrer"
                      className="about-video-link"
                      style={{ color: theme.text }}
                    >
                      {videoSection.introLinkText}
                    </a>
                  </p>
                </div>
              </Fade>
              <Fade bottom duration={2000} distance="20px" delay={450}>
                <div className="about-video-frame">
                  {hasVideo ? (
                    <iframe
                      title={`${videoSection.channelName} introduction`}
                      src={videoSection.embedUrl}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <div
                      className="about-video-placeholder"
                      role="img"
                      aria-label="YouTube video placeholder"
                    >
                      <div className="about-video-play-icon" />
                    </div>
                  )}
                </div>
              </Fade>
            </div>
          </section>
        </main>
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default About;
