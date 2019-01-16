import React from "react";
import { OnboardingHeader } from "../components/elements/onboarding_header";
import { LogInContainer } from "../components/elements/onboarding_elements";
import { styles } from "../layouts/style";

class LogInWhitelabels extends React.Component {
  state = {
    whitelabelList: []
  };
  componentDidMount() {
    const { whitelabelList } = this.props.location.state;
    console.log(whitelabelList);
    this.setState({
      whitelabelList
    });
  }
  renderList() {
    return this.state.whitelabelList.map(list => (
      <div
        key={list.whitelabel_title}
        onClick={list.login_url}
        css={{
          width: "300px",
          marginLeft: "auto",
          marginRight: "auto",
          borderTop: "1px solid rgb(219, 219, 219)",
          borderBottom: "1px solid rgb(219, 219, 219)",
          padding: "10px"
        }}
      >
        <div
          css={{
            width: "200px",
            height: "100px",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "5px"
          }}
        >
          <img
            src={"http://localhost:8000" + list.whitelabel_logo}
            css={{
              maxWidth: "100%",
              maxHeight: "100%",
              margin: "auto",
              display: "block"
            }}
          />
        </div>

        <h4 css={styles.h3}>{list.whitelabel_title}</h4>
      </div>
    ));
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
            <div css={{ textAlign: "center" }}>{this.renderList()}</div>
          </div>
        </LogInContainer>
      </div>
    );
  }
}
export default LogInWhitelabels;
