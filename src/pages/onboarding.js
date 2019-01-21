import React from "react";
import { Button } from "../components/elements/onboarding_elements";
import { styles } from "../layouts/style";
import { Form } from "../components/elements/onboarding_elements";
import { Branding } from "../components/onboarding_brand";
import { CompanyDetails } from "../components/onboadring_company_det";
import { OnboardingHeader } from "../components/elements/onboarding_header";
import { makeTranslations } from "mini-trans";

const translations = {
  da: {
    "step 1 of 3": "Step 1 ud af 3",
    "step 2 of 3": "Step 2 ud af 3",
    "Design tour brand": "Design dit brand",
    "About your company": "Om din organisation",
    "It’s all about your business! Your brand is displayed across the whole ticketing experience on the event page, in emails and on the tickets.":
      "Din organisation sættes i centrum! Dit brand vises på gennem hele billetoplevelsen: på event-siden, i emails og på billetterne",
    "Nitty gritty details about your organization":
      "Detaljer om din organisation som billetsystemet baseres på.",
    "Next step": "Næste step",
    "Need help? Call us at 89 80 12 80":
      "Brug for hjælp? Ring til os på 89 80 12 80"
  }
};

class OnboardingLayout extends React.Component {
  state = {
    activePage: "branding"
  };

  t = makeTranslations(translations, this.props.locale);

  getNextButtonText() {
    switch (this.state.activePage) {
      case "branding":
        return this.t("Next step");
      case "business":
        return this.t("Continue to last step");
    }
  }
  getStepText() {
    switch (this.state.activePage) {
      case "branding":
        return this.t("step 1 of 3");
      case "business":
        return this.t("step 2 of 3");
    }
  }
  getTitleText() {
    switch (this.state.activePage) {
      case "branding":
        return this.t("Design your brand");
      case "business":
        return this.t("About your company");
    }
  }
  getDescrText() {
    switch (this.state.activePage) {
      case "branding":
        return this.t(
          "It’s all about your business! Your brand is displayed across the whole ticketing experience on the event page, in emails and on the tickets."
        );
      case "business":
        return this.t("Nitty gritty details about your organization");
    }
  }

  render() {
    return (
      <div>
        <OnboardingHeader />
        <div css={styles.sectionDiv}>
          <h2 css={styles.h2}>{this.getStepText()}</h2>
          <h1 css={styles.h1}>{this.getTitleText()}</h1>

          <h3 css={{ ...styles.h3, maxWidth: "560px" }}>
            {this.getDescrText()}
          </h3>
          <Form
            validateFields={{ address: { business_name: "exists" } }}
            beforePost={values => {
              return {
                bank_details: {
                  registration_number: values.registration_number,
                  account_number: values.account_number
                },
                address: {
                  business_name: values.business_name,
                  cvr: values.cvr,
                  street: values.street,
                  postcode: values.postcode,
                  city: values.city
                }
              };
            }}
            url="http://localhost:8002/en/"
            onResponse={result => {
              window.location.href = result.next_url;
            }}
          >
            {formProps => {
              switch (this.state.activePage) {
                case "branding":
                  return <Branding {...formProps} />;
                case "business":
                  return <CompanyDetails {...formProps} />;
              }
            }}
          </Form>
          <div
            css={{
              display: "flex",
              justifyContent: "space-between",
              "@media(max-width: 850px)": { display: "block" },
              ...this.props.divStyle
            }}
          >
            <h2
              css={{
                "@media(max-width:400px)": {
                  fontSize: "14px"
                },
                fontSize: "18px",
                color: "#89909B",
                fontWeight: "500",
                paddingTop: "20px"
              }}
            >
              {this.t("Need help? Call us at 89 80 12 80")}.
            </h2>
            <div css={{ display: "flex" }}>
              {this.state.activePage === "business" && (
                <a
                  style={{
                    fontSize: 16,
                    color: "#89909B",
                    fontWeight: "300",
                    cursor: "pointer",
                    textDecoration: "underline",
                    paddingTop: "22px"
                  }}
                  onClick={() => {
                    if (this.state.activePage === "business") {
                      this.setState({ activePage: "branding" });
                    }
                  }}
                >
                  back
                </a>
              )}
              <Button
                style={{
                  background:
                    "linear-gradient(112.11deg, #326DE9 0%, #7E52E8 100%)",
                  width: "263px",
                  marginLeft: "30px",
                  ...this.props.buttonStyle
                }}
                onClick={() => {
                  if (this.state.activePage === "branding") {
                    this.setState({ activePage: "business" });
                  }
                }}
              >
                {this.getNextButtonText()}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default OnboardingLayout;
