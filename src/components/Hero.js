import * as React from "react";

const Hero = ({ heading, description }) => (
  <div
    style={{
      display: "inline-block",
      width: "100%",
      marginTop: 100,
      textAlign: "center",
      padding: "60px 110px",
      zIndex: -1
    }}
  >
    <h1
      style={{
        width: 1025,
        marginBottom: 37,
        display: "block",
        color: "#FFFFFF",
        fontFamily: "Hind",
        fontSize: 75,
        fontWeight: "bold",
        lineHeight: 70,
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
        color: "#FFFFFF",
        fontFamily: "Montserrat",
        fontSize: 25,
        lineHeight: 30,
        textAlign: "center"
      }}
    >
      {description}
    </p>
    <a href="#">
      <span>Get started, it's free!</span>
    </a>
  </div>
);

export default Hero;
