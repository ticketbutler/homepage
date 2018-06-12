import React from "react";
// import Link from "gatsby-link";
import styled from "styled-components";
// import $ from "jquery";

const Section = styled.section`
  padding: 110px;

  padding-right: 0;
  position: relative;
  @media (max-width: 1080px) {
    padding: 110px 0;
  }
  @media (max-width: 768px) {
    padding: 80px 0;
  }

  @media (max-width: 600px) {
    padding: 40px 0;
  }

  @media (max-width: 376px) {
    padding: 50px 0;
  }
`;
const LeftBox = styled.div`
  display: inline-block;
  margin-top: 50px;
  width: 50%;
  float: left;
  position: relative;
  padding-right: 30px;

  > h1 {
    width: 400px;
    color: #333f52;
    font-family: Hind;
    font-size: 60px;
    font-weight: bold;
    line-height: 70px;
  }

  > h3 {
    width: 90%;
    color: #6c7582;
    font-family: Montserrat;
    font-size: 27px;
    line-height: 38px;
    font-weight: 500;
    padding: 0 10px;
  }

  @media (max-width: 1400px) {
    > h1 {
      font-size: 50px;
      line-height: 60px;
    }

    > h3 {
      font-size: 22px;
      line-height: 33px;
    }
  }

  @media (max-width: 1160px) {
    > h1 {
      font-size: 40px;
      line-height: 50px;
    }

    > h3 {
      font-size: 20px;
      line-height: 30px;
    }
  }

  @media (max-width: 1080px) {
    display: block;
    width: 100%;
    padding: 0 0px;
    margin-top: 40px;

    > h1 {
      width: 80%;
      font-size: 55px;
      line-height: 60px;
      text-align: center;
      margin-left: 50%;
      transform: translateX(-50%);
    }

    > h3 {
      width: 70%;
      margin-left: 50%;
      transform: translateX(-50%);
      font-size: 22px;
      line-height: 32px;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    margin-top: 40px;

    > h1 {
      width: 90%;
      font-size: 45px;
      line-hight: 50px;
    }

    > h3 {
      width: 80%;

      font-size: 20px;
    }
  }

  @media (max-width: 600px) {
    padding: 0 40px;

    > h1 {
      width: 100%;

      margin-top: 0px;
      font-size: 35px;
      margin-bottom: 10px;
    }

    > h3 {
      width: 100%;
      font-size: 16px;
      line-height: 25px;
    }
  }

  @media (max-width: 376px) {
    padding: 0 20px;

    > h1 {
      margin-top: -10px;
      font-size: 25px;
      line-height: 32px;
    }

    > h3 {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

const RightBox = styled.div`
  float: right;
  width: 50%;
  // height: auto;
  display: inline-block;
  position: relative;

  // transform: translateX(800px);
  // opacity: 0;
  transition: all 0.3s ease-out;

  > div.clear-fix {
    clear: both;
  }
  > img {
    max-width: 480px;
    height: 425px;
    object-fit: cover;
    position: absolute;
    right: 0px;
    z-index: 2;
  }

  > div.first-box.blue {
    position: absolute;
    height: 380px;
    width: 560px;
    right: 0px;
    top: 80px;
    background-color: #326de9;
  }

  > div.clear-fix {
    clear: both;
  }

  @media (max-width: 1400px) {
    > div.first-box.blue {
      width: 530px;
      height: 350px;
    }

    > div.second-box.green {
      right: 180px;
      width: 400px;
      height: 300px;
      top: 150px;
    }

    > img {
      right: -90px;

      height: 400px;
      max-width: 650px;
    }
  }

  @media (max-width: 1160px) {
    > div.first-box.blue {
      width: 490px;
      height: 320px;
    }

    > img {
      right: -90px;
      height: 380px;
      max-width: 610px;
    }
  }

  @media (max-width: 1080px) {
    display: block;
    width: 100%;

    > div.first-box.blue {
      top: -50px;
      height: 400px;
      left: 50%;
      transform: translateX(-50%);
      width: 760px;
    }

    > img {
      position: relative;
      height: auto;
      width: 600px;
      left: 50%;
      transform: translateX(-50%);
      top: 0px;
      right: 0px;

      border-radius: 3px;
      margin-bottom: 0;
    }
  }

  @media (max-width: 600px) {
    margin-top: 50px;
    height: auto;
    padding: 0 20px;

    > div.first-box.blue {
      // display: none;
      width: 100%;
      height: 100%;
      // left: 0;
      top: -15%;
    }
    > img {
      height: auto;
      width: 100%;
      left: 50%;
      transform: translateX(-50%);
      top: 0px;
      right: 0px;

      border-radius: 0px;
    }
  }
`;

const SquareShape = styled.div`
  position: absolute;
  top: -30%;
  left: 10%;

  > div.shape {
    width: 42px;
    height: 42px;
    margin: 1px;
    position: relative;
    > span {
      display: inline-block;
      width: 80%;
      height: 80%;
      // background-color: #FFF;
      position: absolute;
      transform: scaleY(-1);
    }
  }

  > div.shape span#first {
    top: 0;
    right: 0;
    border: 4px solid #7e52e8;
    z-index: -1;
  }
  > div.shape span#second {
    bottom: 0;
    border: 4px solid #28d8a7;
    left: 0;
    z-index: -2;
  }

  @media (max-width: 1080px) {
    top: -20%;
    left: 8%;
    > div.shape {
      > span {
        opacity: 0.8;
      }
    }
  }
  @media (max-width: 768px) {
    top: -15%;

    > div.shape {
      > span {
        opacity: 0.7;
      }
    }
  }
  @media (max-width: 600px) {
    > div.shape {
      width: 40px;
      height: 40px;
      > span {
        opacity: 0.5;
      }
    }
  }
  @media (max-width: 370px) {
    top: -25%;
    right: 8%;
    > div.shape {
      width: 36px;
      height: 36px;
      > span {
        opacity: 0.4;
      }
    }
  }
`;

const CircleShape = styled.div`
  position: absolute;
  top: 105%;
  left: 70%;

  > div.shape {
    width: 55px;
    height: 55px;
    margin: 1px;
    position: relative;
    > span {
      display: inline-block;
      width: 80%;
      height: 80%;
      position: absolute;
      transform: scaleY(-1);
    }
  }

  > .shape span#first {
    top: 0;
    z-index: -1;
    background-color: #dd52e8;
    border: none;
    border-radius: 50%;
    left: 0;
    // opacity: .85;
  }
  > .shape span#second {
    bottom: 0;
    z-index: -2;

    background-color: #326de9;
    border: none;
    border-radius: 50%;
    opacity: 0.54;
    left: 20%;
  }

  @media (max-width: 1650px) {
    bottom: 15%;
    left: 35%;
  }

  @media (max-width: 1200px) {
    bottom: 20%;
    right: 35%;
  }

  @media (max-width: 1080px) {
    top: 90%;
    right: 20%;
    > div.shape {
      > span {
        opacity: 0.8;
      }
    }
  }
  @media (max-width: 768px) {
    > div.shape {
      > span {
        opacity: 0.7;
      }
    }
  }
  @media (max-width: 600px) {
    top: 90%;
    right: 12%;

    > div.shape {
      width: 40px;
      height: 40px;
      > span {
        opacity: 0.5;
      }
    }
  }
  @media (max-width: 370px) {
    top: 93%;
    left: 8%;
    > div.shape {
      width: 36px;
      height: 36px;
      > span {
        opacity: 0.4;
      }
    }
  }
`;
const TriangleShape = styled.div`
  position: absolute;
  top: 50%;
  z-index: 100;
  right: 30%;
  > div.shape {
    width: 200px;
    height: 200px;
    margin: 1px;
    position: relative;
    transform: rotate(-40deg);
    > span {
      opacity: 0.9;
      color: transparent;
      font-size: 200px;
    }
    > span#first {
      -webkit-text-stroke: 20px #28d8a7;
      position: absolute;
      z-index: 2;
      left: 0;
      top: 0;
    }
    > span#second {
      -webkit-text-stroke: 20px #7e52e8;
      position: absolute;
      z-index: 1;

      left: 0;
      top: 35%;
    }
  }

  @media (max-width: 1080px) {
    top: 20%;
    right: 15%;
    > div.shape {
      transform: rotate(40deg);
    }
  }

  @media (max-width: 650px) {
    top: 10%;
    right: 5%;
    > div.shape {
      width: 100px;
      height: 100px;
      transform: rotate(40deg);
      > span {
        font-size: 100px;
      }
      > span#first {
        -webkit-text-stroke: 10px #28d8a7;
      }
      > span#second {
        -webkit-text-stroke: 10px #7e52e8;
      }
    }
  }

  @media (max-width: 300px) {
    top: 15%;
  }
`;

const FutureImageRightNew = ({ heading, text, image, image_alt }) => (
  <Section>
    <RightBox id="right-box-2">
      <img alt={image_alt} src={image} />
      <div className="first-box blue" />
      <div className="clear-fix" />
    </RightBox>
    <LeftBox>
      <h1>{heading}</h1>
      <h3>{text}</h3>
      <SquareShape>
        <div className="shape">
          <span id="first" />
          <span id="second" />
        </div>
      </SquareShape>
      <CircleShape>
        <div className="shape">
          <span id="first" />
          <span id="second" />
        </div>
      </CircleShape>
    </LeftBox>

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

export default FutureImageRightNew;
