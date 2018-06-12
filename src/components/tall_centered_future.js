import React from "react";
// import Link from "gatsby-link";
import styled from "styled-components";
// import $ from "jquery";

const Section = styled.section`
  width: 100%;
  position: relative;
  bacground: #ccc;
  padding: 110px;
  @media (max-width: 768px) {
    padding: 80px;
  }

  @media (max-width: 600px) {
    padding: 40px;
  }

  @media (max-width: 376px) {
    padding: 50px 20px;
  }
`;
const BlueBackground = styled.div`
  width: 100%;
  height: 70%;
  top: 0;
  left: 0;
  z-index: -3;
  position: absolute;
  -webkit-transform: skewY(-3deg);
  transform: skewY(-3deg);
  background: linear-gradient(295.21deg, #326de9 0%, #7e52e8 100%);
  background-size: cover;
  text-align: center;
  margin-top: 50px;
`;

const Content = styled.div`
  > h1 {
    width: 70%;
    display: block;
    margin: 0 auto;
    margin-top: 0px;
    color: #ffffff;
    font-family: Hind;
    font-size: 60px;
    font-weight: bold;
    line-height: 70px;
    text-align: center;
    margin-bottom: 20px;
  }

  > h3 {
    width: 65%;
    display: block;
    margin: 0 auto;
    color: #ffffff;
    font-family: Montserrat;
    font-size: 27px;
    letter-spacing: -0.22px;
    line-height: 38px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 80px;
  }

  > img {
    display: block;
    margin: 0 auto;
    margin-top: 40px;

    width: 100%;
    // transform: scale(.2);
    // opacity: 0;
    transition: all 0.5s ease;
  }

  > a {
    margin: 50px auto;
    margin-bottom: 0;
    height: 60px;
    width: 260px;
    border-radius: 29px;
    background: linear-gradient(90deg, #28d8a7 0%, #1dc9ca 100%);
    display: blocK;
    text-align: center;
    text-decoration: none;
    position: relative;
    line-height: 55px;
    transition: all 0.3s;
    &:hover {
      // transform: scale(1.05);
      box-shadow: 0px 3px 20px -6px rgba(0, 0, 0, 0.3);
      > span {
        &::after {
          opacity: 1;
          margin-left: 10px;
        }
      }
    }

    > span {
      color: #ffffff;
      font-family: Montserrat;
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      transition: all 0.3s;

      &::after {
        content: "\00BB";
        opacity: 1;
        font-size: 25px;
        opacity: 0;
        margin-left: -8px;
        z-index: 10;
        color: #fff;
        transition: 0.3s;
      }
    }
  }

  @media (max-width: 1080px) {
    > a {
      padding: 0;

      > span {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 768px) {
    > h1 {
      width: 100%;
      font-size: 45px;
      line-hight: 50px;
    }
    > h3 {
      width: 100%;
      font-size: 20px;
    }
    > a {
      > span {
        font-size: 15px;
      }
    }
  }

  @media (max-width: 600px) {
    > h1 {
      margin-top: 20px;

      font-size: 36px;
    }
    > h3 {
      font-size: 18px;
    }
    > a {
      width: 220px;
      height: 50px;
      line-height: 50px;

      > span {
        font-size: 14px;
        &::after {
          font-size: 20px;
          line-height: 48px;
        }
      }
    }
  }

  @media (max-width: 376px) {
    > h1 {
      margin-top: 10px;
      font-size: 25px;
      line-height: 32px;
    }
    > h3 {
      font-size: 14px;
      line-height: 20px;
    }

    > a {
      width: 190px;
      height: 45px;
      line-height: 43px;
      margin-top: 35px;
      > span {
        font-size: 12px;
        &::after {
          font-size: 16px;
          line-height: 42px;
        }
      }
    }
  }
`;

const SquareShape = styled.div`
  position: absolute;
  top: 25%;
  right: 10%;
  z-index: -1;
  > div.shape {
    width: 60px;
    height: 60px;
    margin: 1px;
    position: relative;

    > span {
      opacity: 0.9;
      display: inline-block;
      width: 80%;
      height: 80%;
      // background-color: #FFF;
      position: absolute;
      transform: scaleY(-1);

      &#first {
        top: 0;
        right: 0;
        border: 5px solid #ffffff;
        z-index: 3;
      }
      &#second {
        bottom: 0;
        border: 5px solid #28d8a7;
        left: 0;
      }
    }
  }

  @media (max-width: 1080px) {
    top: 30%;
    > div.shape {
      opacity: 0.8;
      width: 60px;
      height: 60px;
    }
  }

  @media (max-width: 768px) {
    top: 42%;

    > div.shape {
      width: 50px;
      height: 50px;
      > span {
        opacity: 0.7;
      }
    }
  }

  @media (max-width: 600px) {
    top: 50%;
    right: 6%;

    > div.shape {
      width: 45px;
      height: 45px;
      > span {
        opacity: 0.5;
      }
    }
  }

  @media (max-width: 376px) {
    top: 45%;

    > div.shape {
      > span {
        opacity: 0.5;
      }
    }
  }
`;

const TriangleShape = styled.div`
  position: absolute;
  top: 17%;
  left: 20%;
  > div.shape {
    width: 55px;
    height: 55px;
    margin: 1px;
    position: relative;
    > span {
      opacity: 0.9;
      color: transparent;
      font-size: 70px;
    }
    > span#first {
      -webkit-text-stroke: 5px #28d8a7;
      position: absolute;
      z-index: -1;
      left: 0;
      top: 0;
    }
    > span#second {
      -webkit-text-stroke: 5px #dd52e8;
      position: absolute;
      z-index: -2;

      left: 0;
      top: 35%;
    }
  }

  @media (max-width: 1080px) {
    top: 20%;
    left: 15%;
    > span {
      opacity: 0.9;
    }
  }

  @media (max-width: 768px) {
    top: 10%;
    left: 10%;
    > div.shape {
      width: 50px;
      height: 50px;
      > span {
        opacity: 0.7;

        font-size: 60px;
      }
    }
  }

  @media (max-width: 600px) {
    top: 6%;
    left: -2%;
    > div.shape {
      width: 63px;
      height: 63px;
      > span {
        opacity: 0.5;

        font-size: 50px;
      }
    }
  }

  @media (max-width: 376px) {
    top: 15%;
    left: 4%;
    > div.shape {
      width: 50px;
      height: 50px;
      > span {
        opacity: 0.4;

        font-size: 40px;
      }
    }
  }
`;
const TallCenteredFuture = ({
  heading,
  text,
  button_text,
  image,
  image_alt,
  button_link
}) => (
  <Section className="section-4">
    <BlueBackground />
    <Content>
      <h1>{heading}</h1>
      <h3>{text}</h3>
      <img alt={image_alt} src={image} />
      <a href={button_link}>
        <span>{button_text}</span>
      </a>
    </Content>

    <SquareShape>
      <div className="shape">
        <span id="first" />
        <span id="second" />
      </div>
    </SquareShape>

    <TriangleShape>
      <div className="shape">
        <span id="first">&#x25BC;</span>
        <span id="second">&#x25BC;</span>
      </div>
    </TriangleShape>

    <div className="clear-fix" />

    <style jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .clear-fix {
        clear: both;
      }
    `}</style>
  </Section>
);

export default TallCenteredFuture;
