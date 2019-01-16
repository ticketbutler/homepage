import React from "react";
import { OnboardingHeader } from "../components/elements/onboarding_header";
import { styles } from "../layouts/style";
import {
  Button,
  Form,
  LogInContainer
} from "../components/elements/onboarding_elements";
import { navigate } from "@reach/router";

class LogIn extends React.Component {
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
              Log in
            </h1>
            <Form
              validateFields={{ email: "exists" }}
              url="http://localhost:8000/api/user/whitelabels/?email=edita.gudan@gmail.com"
              onResponse={result => {
                if (result.length > 1) {
                  navigate("/login_whitelabels/", { state: result });
                } else {
                  window.open = result.login_url;
                }
              }}
            >
              {({
                values,
                updateForm,
                submitForm,
                validationErrors,
                requestError
              }) => {
                return (
                  <form onSubmit={submitForm}>
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
                      required
                      value={values.email}
                      onChange={e => {
                        updateForm({ email: e.target.value });
                      }}
                      css={{
                        ...styles.input,
                        margin: "0.5em auto",
                        padding: "10px"
                      }}
                    />

                    <Button
                      buttonProps={{ type: "submit" }}
                      buttonStyle={{
                        background:
                          "linear-gradient(112.11deg, #326DE9 0%, #7E52E8 100%)",
                        margin: "1.5em auto",
                        width: "30%",
                        fontSize: "14px",
                        "@media(max-width: 500px)": {
                          width: "50%",
                          padding: "15px 30px"
                        }
                      }}
                    >
                      Log in
                    </Button>
                  </form>
                );
              }}
            </Form>
          </div>
        </LogInContainer>
      </div>
    );
  }
}
export default LogIn;
