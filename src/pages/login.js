import React from "react";
import { OnboardingHeader } from "../components/elements/onboarding_header";
import { styles } from "../layouts/style";
import { Button } from "../components/elements/elements";
import ButlerLogo from "../../static/img/Butler.png";
import { CancelIcon } from "../components/elements/icons";

class LogIn extends React.Component {
  render() {
    return (
      <div>
        <OnboardingHeader />

        <div
          css={{
            width: "100%",
            maxWidth: "600px",
            margin: "10em auto",
            "@media(max-width: 420px)": {
              margin: "0 auto",
              padding: "10px"
            }
          }}
        >
          <div
            css={{
              width: "40px",
              float: "right"
            }}
          >
            <a href="https://ticketbutler.io/">
              <CancelIcon />
            </a>
          </div>
          <div
            css={{
              "@media(max-width: 420px)": {
                paddingTop: "60px"
              }
            }}
          >
            <img
              src={ButlerLogo}
              css={{
                width: "50px",
                marginLeft: "auto",
                marginRight: "auto",
                display: "block"
              }}
            />
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
              Log in
            </h1>
            <div
              css={{
                maxWidth: "444px",
                width: "100%",
                margin: "0 auto"
              }}
            >
              <p
                css={{
                  textAlign: "left",
                  color: "#89909B",
                  margin: 0,
                  fontSize: "12px",
                  fontWeight: "500",
                  letterSpacing: "1.2px",
                  lineHeight: "21px"
                }}
              >
                YOUR EMAIL
              </p>
            </div>
            <input
              css={{
                ...styles.input,
                margin: "0.5em auto",
                padding: "10px"
              }}
            />

            <Button
              style={{
                background:
                  "linear-gradient(112.11deg, #326DE9 0%, #7E52E8 100%)",

                margin: "1.5em auto",
                "@media(max-width: 420px)": {
                  width: "0%",
                  fontSize: "14px",
                  padding: "15px 30px"
                }
              }}
            >
              Log in
            </Button>
            <a css={{ textDecoration: "none" }} href="/onboarding_brand">
              <p
                css={{
                  ...styles.label,
                  color: "#333F53",
                  fontWeight: "500",
                  letterSpacing: "1.2px",
                  lineHeight: "21px",
                  textAlign: "center",
                  margin: "1em",
                  fontSize: "14px"
                }}
              >
                I don't have an account
              </p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default LogIn;
