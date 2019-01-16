import React from "react";
import { OnboardingHeader } from "../components/elements/onboarding_header";
import { LogInContainer } from "../components/elements/onboarding_elements";

class LogInWhitelabels extends React.Component {
  componentDidMount() {
    const whitelabelList = this.props.location.state;
    this.setState({
      whitelabelList
    });
  }
  render() {
    return (
      <div>
        <OnboardingHeader />
        <LogInContainer>
          <div>
            <h1
              css={{
                textAlign: "center",
                margin: "1.5em",
                fontSize: "32px",
                lineHeight: "39px",
                fontWeight: "600",
                color: "#333F53"
              }}
            >
              Pick desired ticketing
            </h1>
          </div>
        </LogInContainer>
      </div>
    );
  }
}
export default LogInWhitelabels;
