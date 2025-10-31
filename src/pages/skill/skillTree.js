import React, { Component } from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import "./skillTree.css";

class SkillTree extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="skill-main">
        <Header theme={theme} />
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <p className="subTitle" style={{ color: theme.secondaryText }}>
            Detailed skill breakdowns have been retired while we focus on the
            core storytelling experience. Check back soon for new updates.
          </p>
        </div>
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default SkillTree;
