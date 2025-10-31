import React, { Component } from "react";
import Header from "../../components/header/Header";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

const projectsContent = {
  title: "Storytelling in Action",
  description:
    "We're refreshing this space with collaborative storytelling showcases. Explore recent experiments below while we prepare new highlights.",
};

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsContent.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsContent.description}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-pad">
          <div className="repo-cards-div-main">
            {ProjectsData.data.map((repo) => {
              return <GithubRepoCard repo={repo} theme={theme} />;
            })}
          </div>
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href="https://github.com/Tasin5541"
          newTab={true}
          theme={theme}
        />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
