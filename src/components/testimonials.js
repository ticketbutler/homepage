import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider_section = ({ items }) => {
  let slides = items.map((item, index) => (
    <div
      key={index}
      css={{
        width: "100%",
        height: "100%",
        padding: "80px 0",
        backgroundColor: "rgb(246, 251, 255)"
      }}
    >
      <img
        css={{
          display: "block",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "40px",
          margin: "0 auto"
        }}
        src={item.image}
        style={{ objectFit: "cover" }}
      />
      <p
        css={{
          display: "block",
          marginLeft: "50%",
          transform: "translateX(-50%)",
          width: "769px;	color: #868E99",
          fontFamily: "Montserrat",
          fontSize: "24px",
          lineHeight: "38px",
          textAlign: "justify"
        }}
      >
        {item.text}
      </p>
      <span
        css={{
          display: "block",
          marginLeft: "50%",
          transform: "translateX(-50%)",
          height: "29px;	width: 500px",
          color: "#333F52",
          fontFamily: "Hind",
          fontSize: "18px",
          fontWeight: "bold",
          lineHeight: "29px",
          textAlign: "center"
        }}
      >
        {item.about}
      </span>
      <img
        css={{
          display: "block",
          textAlign: "center",
          fontSize: "25px",
          opacity: ".7",
          margin: " 0 auto",
          marginTop: "30px",
          marginBottom: "20px",
          width: "200px"
        }}
        src={item.logo}
      />
    </div>
  ));
  return (
    <section
      css={{
        padding: "100px 0",
        width: "90%",
        margin: "0 auto",
        height: "850px",
        position: "relative",
        marginBottom: "50px",
        marginTop: "150px"
      }}
    >
      <img
        css={{
          position: "absolute",
          width: "300px",
          left: "10%",
          top: "-20px",
          zIndex: "100",
          opacity: 1
        }}
        src={require("../img/quote.png")}
      />
      <Slider
        infinite="true"
        dots="true"
        slidesToShow="1"
        slidesToScroll=" 1"
        nextArrow={<div css={{ backgroundColor: "grey" }}>></div>}
        prevArrow={<div>></div>}
        speed="500"
        swipeToSlide="true"
        cssEase="linear"
      >
        {" "}
        {slides}{" "}
      </Slider>
    </section>
  );
};

export default Slider_section;
