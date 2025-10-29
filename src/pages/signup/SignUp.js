import React, { Component } from "react";
import "./SignUp.css";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { signUpContent } from "../../portfolio";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      submitted: false,
    };
  }

  handleChange = (event) => {
    this.setState({ email: event.target.value, submitted: false });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.email.trim()) {
      return;
    }

    this.setState({ email: "", submitted: true });
  };

  render() {
    const theme = this.props.theme;
    const { email, submitted } = this.state;

    return (
      <div>
        <Header theme={theme} />
        <main className="signup-main">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="signup-title" style={{ color: theme.text }}>
              {signUpContent.title}
            </h1>
          </Fade>
          <Fade bottom duration={2000} distance="20px" delay={100}>
            <p
              className="signup-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {signUpContent.subtitle}
            </p>
          </Fade>
          <Fade bottom duration={2000} distance="20px" delay={200}>
            <form className="signup-form" onSubmit={this.handleSubmit}>
              <input
                className="signup-input"
                type="email"
                value={email}
                onChange={this.handleChange}
                placeholder={signUpContent.emailPlaceholder}
                aria-label="Email address"
                style={{
                  color: theme.text,
                  borderColor: theme.secondaryText,
                  backgroundColor: theme.body,
                }}
              />
              <button
                className="signup-button"
                type="submit"
                style={{ backgroundColor: theme.highlight, color: theme.text }}
              >
                {signUpContent.buttonText}
              </button>
            </form>
          </Fade>
          {submitted ? (
            <Fade bottom duration={2000} distance="20px" delay={300}>
              <p className="signup-success" style={{ color: theme.text }}>
                {signUpContent.successMessage}
              </p>
            </Fade>
          ) : null}
        </main>
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default SignUp;
