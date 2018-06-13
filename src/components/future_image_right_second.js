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
  margin-top: 110px;
  width: 50%;
  float: left;
  position: relative;
  padding-right: 30px;

  > h1 {
    width: 600px;
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
      width: 100%;

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
      width: 100%;
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
  display: inline-block;
  position: relative;

  transition: all 0.3s ease-out;
  > div.clear-fix {
    clear: both;
  }
  > img {
    width: 524px;
    height: 420px;
    object-fit: cover;
    float:right;
    z-index: 2;
  }

  > div.first-box.blue {
    position: absolute;
    height: 380px;
    width: 560px;
    right: 0px;
    top: 80px;
    background-color: #326de9;
    z-index: -2;
  }

  > div.second-box.green {
    position: absolute;
    top: 135px;
    right: 160px;
    height: 340px;
    width: 448px;
    z-index: -1;
    background-color: #1dc9cc;
    -webkit-clip-path: polygon(0 0, 0% 100%, 100% 100%);
    clip-path: polygon(0 0, 0% 100%, 100% 100%);
    
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
      width: 500px;
    }
  }

  @media (max-width: 1160px) {
    > div.first-box.blue {
      width: 490px;
      height: 320px;
    }

    > div.second-box.green {
      right: 150px;
      width: 390px;
      height: 300px;
      top: 120px;
    }

    > img {
      right: -90px;
      height: 380px;
      width: 450px;
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

    > div.second-box.green {
      top: -50px;
      height: 400px;
      left: 50%;
      transform: translateX(-50%);
      width: 760px;
    }

    > img {
      position: relative;
      width: 600px;
      border-radius: 3px;
      right: 0;
      margin-right: 50%;
      transform: translateX(50%);

    }
  }

  @media (max-width: 768px) {
    padding: 0 30px;
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

    > div.second-box.green {
      // display: none;
      top: -15%;
      // left: 0;
      width: 100%;
      height: 100%;
    }
    > img {
      width: 100%;
    height: auto;

      top: 0px;
      right: 0px;

      border-radius: 0px;
    }
  }
  
  @media (max-width: 300px) {
    > img {
      height: auto;
    }
  }
`;

const SquareShape_1 = styled.div`
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

const SquareShape_2 = styled.div`
  position: absolute;
  top: 40%;
  right: 0%;

  > div.shape {
    width: 42px;
    height: 42px;
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
    right: 0;
    z-index: -1;
    border: 4px solid #7e52e8;
  }
  > .shape span#second {
    bottom: 0;
    left: 0;
    z-index: -2;
    border: 4px solid #dd52e8;
  }

  @media (max-width: 1380px) {
    top: 25%;
    right: 40%;
  }

  @media (max-width: 1160px) {
    top: 20%;
    right: 20%;
  }

  @media (max-width: 1080px) {
    top: 62%;
    right: -1%;
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
    > div.shape {
      width: 40px;
      height: 40px;
      > span {
        opacity: 0.5;
      }
    }
  }
  @media (max-width: 370px) {
    top: 35%;
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
// $(document).ready(()=> {
//     $("#right-box-2").css({
//       "transform": "translateX(0)",
//       "opacity": "1",
//     })
//   })

const FutureImageRightSecond = ({ heading, text, image, image_alt }) => (
  <Section>
    <RightBox id="right-box-2">
      <img alt={image_alt} src={image} />
      <div className="first-box blue" />
      <div className="second-box green" />
      <div className="clear-fix" />
    </RightBox>
    <LeftBox>
      <h1>{heading}</h1>
      <h3>{text}</h3>
      <SquareShape_1>
        <div className="shape">
          <span id="first" />
          <span id="second" />
        </div>
      </SquareShape_1>
      <SquareShape_2>
        <div className="shape">
          <span id="first" />
          <span id="second" />
        </div>
      </SquareShape_2>
      <CircleShape>
        <div className="shape">
          <span id="first" />
          <span id="second" />
        </div>
      </CircleShape>
    </LeftBox>

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

export default FutureImageRightSecond;
