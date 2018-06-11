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
    height: 425px;
    max-width: 850px;
    position: absolute;
    right: -130px;
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

  > div.second-box.green {
    position: absolute;
    top: 135px;
    right: 160px;
    height: 340px;
    width: 448px;
    z-index: 1;
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
      max-width: 650px;
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

    > div.second-box.green {
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

    > div.second-box.green {
      // display: none;
      top: -15%;
      // left: 0;
      width: 100%;
      height: 100%;
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

// $(document).ready(()=> {
//     $("#right-box-2").css({
//       "transform": "translateX(0)",
//       "opacity": "1",
//     })
//   })

const FutureImageRightSecond = ({ heading, text, image }) => (
  <Section>
    <RightBox id="right-box-2">
      <img src={image} />
      <div className="first-box blue" />
      <div className="second-box green" />
      <div className="clear-fix" />
    </RightBox>
    <LeftBox>
      <h1>{heading}</h1>
      <h3>{text}</h3>
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
