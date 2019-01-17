import React from "react";
import { Button } from "./onboarding_elements";

export const OnboardingFooter = ({
  divStyle,
  buttonStyle,
  buttonText,
  backProps,
  changeComponent
}) => {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "space-between",
        ...divStyle
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
        {" "}
        Need help? Call us at 89 80 12 80.{" "}
      </h2>
      <div css={{ display: "flex" }}>
        <a
          style={{
            fontSize: 16,
            color: "#89909B",
            fontWeight: "300",
            cursor: "pointer",
            textDecoration: "underline",
            paddingTop: "22px"
          }}
          {...backProps}
        />
        <Button
          style={{
            background: "linear-gradient(112.11deg, #326DE9 0%, #7E52E8 100%)",
            width: "263px",
            ...buttonStyle
          }}
          onClick={changeComponent}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
