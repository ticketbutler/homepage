import React from "react";
import { Button } from "./elements";

export const OnboardingFooter = ({ divStyle, buttonStyle }) => {
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
      <Button
        style={{
          background: "linear-gradient(112.11deg, #326DE9 0%, #7E52E8 100%)",
          width: "25%",
          ...buttonStyle
        }}
      >
        Next step{" "}
      </Button>
    </div>
  );
};
