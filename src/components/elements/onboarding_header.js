import React from "react";

export const OnboardingHeader = () => {
  return (
    <div>
      <header
        css={{
          height: " 80px",

          backgroundColor: "#FFFFFF",
          boxShadow: "3px 3px 4px 0 #F0F2F5"
        }}
      >
        <img
          src={"../img/ticketbutler_logo_small.png"}
          css={{ maxWidth: "142px", marginLeft: "38px", marginTop: "30px" }}
        />
      </header>
    </div>
  );
};
