import React from "react";
import { OnboardingHeader } from "../components/elements/onboarding_header";
import { OnboardingFooter } from "../components/elements/onboarding_footer";
import { styles } from "../layouts/style";

class CompanyDetails extends React.Component {
  render() {
    return (
      <div>
        <OnboardingHeader />
        <div
          css={{
            ...styles.sectionDiv,
            "@media(max-width:800px)": {
              marginTop: "30px"
            }
          }}
        >
          <h2 css={styles.h2}> STEP 2 OF 3</h2>
          <h1 css={styles.h1}>About your company</h1>

          <h3 css={{ ...styles.h3, maxWidth: "560px" }}>
            Nitty gritty details about your organization
          </h3>

          <div css={{ maxWidth: "444px" }}>
            <label css={styles.label}>Company / organization name*</label>
            <input css={styles.input} type="text" />

            <h2
              css={{
                ...styles.h2,
                color: "#89909B",
                marginTop: "30px",
                marginBottom: "5px"
              }}
            >
              optional fields
            </h2>
            <h3 css={{ fontSize: "14px", fontWeight: 500, color: "#89909B" }}>
              {" "}
              CVR-number and address are needed for your customers to reimburse
              the ticket costs.{" "}
            </h3>
            <label css={styles.label}>CVR</label>
            <input
              type="text"
              css={{ ...styles.input, marginBottom: "20px" }}
            />
            <label css={styles.label}>official organization street </label>
            <input type="text" css={styles.input} />
            <div css={{ marginTop: "5px" }}>
              <div css={{ display: "inline-flex", width: "100%" }}>
                <div>
                  <label css={styles.label}>zip code</label>
                  <input
                    type="number"
                    css={{ ...styles.input, width: "112px" }}
                  />
                </div>
                <div css={{ marginLeft: "20px", width: "100%" }}>
                  <label css={styles.label}>city</label>
                  <input
                    type="number"
                    css={{ ...styles.input, maxWidth: "312px", width: "100%" }}
                  />
                </div>
              </div>

              <div
                css={{
                  display: "inline-flex",
                  marginTop: "20px",
                  width: "100%"
                }}
              >
                <div>
                  <label css={styles.label}>bank reg. nr.</label>
                  <input
                    type="number"
                    css={{ ...styles.input, width: "112px" }}
                  />
                </div>
                <div css={{ marginLeft: "20px", width: "100%" }}>
                  <label css={styles.label}>bank account nr.</label>
                  <input
                    type="number"
                    css={{ ...styles.input, width: "100%", maxWidth: "312px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <OnboardingFooter
            divStyle={{
              marginTop: "30px",
              "@media(max-width:800px)": {
                display: "block"
              },
              "@media(max-width:400px)": {
                marginTop: "15px"
              }
            }}
            buttonStyle={{
              "@media(max-width: 800px)": {
                width: "50%"
              },
              "@media(max-width: 400px)": {
                width: "70%"
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default CompanyDetails;
