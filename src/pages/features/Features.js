import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/header/Header";
import "./Features.css";

const ORBIT_RADIUS = 150;

const FEATURES = [
  {
    id: "upload",
    title: "Upload your media",
    description:
      "Drag and drop your footage or assets straight into Genesis to kick off a new edit without ever leaving the browser.",
    Icon: function UploadIcon({ className }) {
      return (
        <svg
          className={className}
          viewBox="0 0 48 48"
          role="img"
          aria-hidden="true"
        >
          <g fill="none" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" d="M24 31V11" />
            <polyline
              strokeLinecap="round"
              strokeLinejoin="round"
              points="16 19 24 11 32 19"
            />
            <rect
              x="12"
              y="31"
              width="24"
              height="8"
              rx="2.5"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      );
    },
  },
  {
    id: "story",
    title: "Genesis recommends story chapters",
    description:
      "Let Genesis surface smart story beats and assemble them into chapters so you can focus on crafting the narrative.",
    Icon: function StoryIcon({ className }) {
      return (
        <svg
          className={className}
          viewBox="0 0 48 48"
          role="img"
          aria-hidden="true"
        >
          <g fill="none" stroke="currentColor" strokeWidth="3">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 10h24a2 2 0 0 1 2 2v27l-8-5-8 5-8-5-8 5V12a2 2 0 0 1 2-2Z"
            />
            <path strokeLinecap="round" d="M18 18h12M18 24h8" />
          </g>
        </svg>
      );
    },
  },
  {
    id: "collaborate",
    title: "Comment and host polls to adjust your edit",
    description:
      "Invite collaborators, gather feedback, and vote on changes in real time so every voice shapes the final cut.",
    Icon: function CommentIcon({ className }) {
      return (
        <svg
          className={className}
          viewBox="0 0 48 48"
          role="img"
          aria-hidden="true"
        >
          <g fill="none" stroke="currentColor" strokeWidth="3">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M34 9H14a5 5 0 0 0-5 5v11a5 5 0 0 0 5 5h4v7l8-7h8a5 5 0 0 0 5-5V14a5 5 0 0 0-5-5Z"
            />
            <circle cx="18" cy="20" r="1.8" />
            <circle cx="24" cy="20" r="1.8" />
            <circle cx="30" cy="20" r="1.8" />
          </g>
        </svg>
      );
    },
  },
];

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const getOrbitalPosition = (rotation, index) => {
  const step = 360 / FEATURES.length;
  const baseAngle = index * step - 90;
  const angle = rotation + baseAngle;
  const radians = (angle * Math.PI) / 180;
  const x = Math.cos(radians) * ORBIT_RADIUS;
  const y = Math.sin(radians) * ORBIT_RADIUS;

  return { x, y };
};

export default function Features({ theme }) {
  const scrollSectionRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = scrollSectionRef.current;
      if (!section) return;

      const top = section.offsetTop;
      const height = section.offsetHeight;
      const viewport = window.innerHeight;
      const end = top + height - viewport;

      if (height <= viewport) {
        setRotation(0);
        setActiveIndex(0);
        return;
      }

      const progress = clamp((window.scrollY - top) / (end - top), 0, 1);
      const nextRotation = -progress * 360;
      const nextIndex = Math.min(
        FEATURES.length - 1,
        Math.floor(progress * FEATURES.length + 0.0001)
      );

      setRotation(nextRotation);
      setActiveIndex(nextIndex);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const styleVariables = {
    backgroundColor: theme.body,
    color: theme.text,
    "--page-bg": theme.body,
    "--page-text": theme.text,
    "--subtitle-color": theme.secondaryText || theme.text,
    "--orbit-accent": theme.highlight || theme.text,
    "--orbit-muted": theme.isDark ? "#2f343f" : "#dfe3eb",
    "--orbit-shadow": theme.isDark
      ? "rgba(0, 0, 0, 0.48)"
      : "rgba(0, 28, 85, 0.18)",
    "--orbit-center-ink": theme.isDark ? theme.text : theme.dark || "#001C55",
  };

  const activeFeature = FEATURES[activeIndex] || FEATURES[0];

  return (
    <div className="features-page" style={styleVariables}>
      <Header theme={theme} />
      <main>
        <section className="features-intro" ref={scrollSectionRef}>
          <div className="features-intro__sticky">
            <h1 className="features-intro__title">
              Editing becomes as simple as leaving a comment.
            </h1>

            <div className="features-intro__layout">
              <div className="features-intro__copy-wrapper" aria-live="polite">
                <p key={activeFeature.id} className="features-intro__copy">
                  {activeFeature.title}
                </p>
              </div>

              <div className="features-orbit">
                {FEATURES.map((feature, index) => {
                  const { x, y } = getOrbitalPosition(rotation, index);
                  const isActive = index === activeIndex;
                  const SatelliteIcon = feature.Icon;
                  return (
                    <div
                      key={feature.id}
                      className={`features-orbit__satellite ${
                        isActive ? "is-active" : ""
                      }`}
                      style={{
                        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                      }}
                    >
                      <SatelliteIcon
                        className={`features-icon ${
                          isActive ? "features-icon--active" : ""
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="features-list" id="key-features">
          <div className="features-list__inner">
            <h2>Key Features</h2>
            <ul>
              <li>
                Auto-cutting, editing suggestions, and narrative guidance.
              </li>
              <li>Cross collaboration and polls with family and friends.</li>
              <li>Edit through text and speech.</li>
              <li>Easily share and export your project.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
