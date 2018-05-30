import * as React from "react";

const Hero = ({ heading, text }) => (
  <div
    style={{
      display: "inline-block",
      width: "100%",
      textAlign: "center",
      padding: "60px 110px",
      zIndex: -1
    }}
  >
    <h1
      style={{
        display: "block",
        fontFamily: "Hind",
        fontSize: 75,
        fontWeight: "bold",
        textAlign: "center",
        zIndex: -1
      }}
    >
      {heading}
    </h1>
    <p
      style={{
        width: 604,
        marginBottom: 37,
        display: "block",
        fontFamily: "Montserrat",
        fontSize: 25,
        lineHeight: 30,
        textAlign: "center"
      }}
    >
      {text}
    </p>
    <a href="#">
      <span>Get started, it's free!</span>
    </a>
  </div>
);

export default Hero;
