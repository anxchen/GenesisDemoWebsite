import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../landing";
import styled from "styled-components";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.iconbg};
    transition: 0.3s ease-in;
  }
`;

export default function socialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media) => {
        return (
          <a
            key={media.name}
            href={media.link}
            className={`icon-button`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={media.name}
            title={media.name}
          >
            <IconWrapper {...media} {...props}>
              <i className={`fa-brands ${media.fontAwesomeIcon}`}></i>
            </IconWrapper>
            {/* <span></span> */}
          </a>
        );
      })}
    </div>
  );
}
