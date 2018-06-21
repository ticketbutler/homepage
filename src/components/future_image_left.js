import React from "react";
import styled from "styled-components";
// import $ from "jquery";

const Section = styled.section`
  padding: 110px;
  padding-left: 0;
  width: 100%;
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
    padding: 50px 0px;
  }
`;

const LeftBox = styled.div`
    display: inline-block;
    float:left;
    width:50%;
    position:relative;
    // transform: translateX(-800px);
    // opacity: 0;
    transition: all .3s ease-out;
    > figure {
        width: 100%;
        z-index: -4;
        > img.device {	
            width: 773px;
            // transform: translateX(-4%);
            margin:0;
            z-index: -4;
            position: relative;
        }

        > img.content {
            position: absolute;
            left: .5%;
            right: .5%;
            
            top: 4.7%; 
            width: 100%;
            // height: 100px;
           
            border: 1px solid: #ccc;
        }
    }

    @media (max-width: 1080px) {
        display: block;
        width:100%;
    
    > figure {
        width: 600px;
        margin-left: 50%;
        transform: translateX(-50%);
        margin-right: -10px;
        

        > img.device {	
            width: 100%;
            transform: translateX(0%);
            margin:0;
        }
    }
    }

    // @media (max-width: 768px) {
        
    // > figure {
    //     width: 0%;
    // }
    // }

    @media (max-width: 600px) { 
        > figure {
            width: 100%;
            padding: 20px;
    
        }
    }


    // @media (max-width: 370px) { 
        
    // }
`;

const RightBox = styled.div`
  margin-top: 30px;
  display: inline-block;
  width: 50%;
  float: right;
  padding-right: 0px;

  > h1 {
    // width: 600px;
    padding-left: 25px;
    color: #333f52;
    font-family: Hind;
    font-size: 60px;
    font-weight: bold;
    line-height: 70px;
    display: block;
    margin-right: 0;
    text-align: right;

    // float: right;
    z-index: 2;
  }
  > h3 {
    color: #6c7582;
    font-weight: 500;
    font-family: Montserrat;
    font-size: 27px;
    letter-spacing: -0.22px;
    line-height: 38px;
    text-align: right;
    margin-right: 0px !important;
    padding-right: 0px !important;
    display: block;
    margin-bottom: 50px;
    padding-left: 25px;
  }

  > a {
    height: 60px;
    width: 230px;
    display: block;
    float: right;
    border-radius: 29px;
    // margin-right: 50%;
    // transform: translateX(50%);

    margin: 0 auto;
    background: linear-gradient(90deg, #28d8a7 0%, #1dc9ca 100%);
    text-decoration: none;
    text-align: center;
    line-height: 55px;
    position: relative;
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
    > h1 {
      display: block;
      font-size: 55px;
      line-height: 60px;
      padding: 0;
      text-align: center;
      width: 70%;
      margin-left: 50%;
      transform: translateX(-50%);
    }
    > h3 {
      width: 70%;
      padding-left: 0;
      font-size: 22px;
      line-height: 32px;
      text-align: center;
      margin-left: 50%;
      transform: translateX(-50%);
    }

    > a {
      margin-right: 50%;
      transform: translateX(50%) !important;
      display: block;

      > span {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 768px) {
    margin-top: 40px;

    > h1 {
      font-size: 45px;
      line-hight: 50px;
    }

    > h3 {
      width: 90%;

      font-size: 20px;
    }
    > a {
      > span {
        font-size: 15px;
      }
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
    > a {
      width: 200px;
      height: 50px;
      line-height: 45px;

      > span {
        font-size: 14px;
        &::after {
          font-size: 20px;
          line-height: 45px;
        }
      }
    }
  }

  @media (max-width: 376px) {
    padding: 0 20px;
    margin-top: 0;

    > h1 {
      margin-top: -10px;
      font-size: 25px;
      line-height: 32px;
    }

    > h3 {
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 25px;
    }
    > a {
      width: 190px;
      height: 45px;
      line-height: 42px;
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

const SquareShape_1 = styled.div`
  position: absolute;
  top: 10%;
  right: 10%;

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
    top: 50%;
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
  @media (max-width: 540px) {
    top: 45%;
    right: -1%;
  }

  @media (max-width: 376px) {
    top: 45%;
    right: 0%;
    > div.shape {
      width: 36px;
      height: 36px;
      > span {
        opacity: 0.4;
      }
    }
  }
  @media (max-width: 332px) {
    top: 39%;
    right: -1%;
  }
  @media (max-width: 294px) {
    top: 38%;
  }
`;

const SquareShape_2 = styled.div`
  position: absolute;
  top: 55%;
  right: 52%;

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
    top: 28%;
    right: 50%;
  }

  @media (max-width: 1080px) {
    top: 40%;
    left: 8%;
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
    top: 39%;

    left: 7%;

    > div.shape {
      width: 40px;
      height: 40px;
      > span {
        opacity: 0.5;
      }
    }
  }
  @media (max-width: 450px) {
    top: 35%;
    left: 0;
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
  bottom: 20%;
  right: 20%;

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
    right: 35%;
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
//     $("img").css({
//       "transform": "scale(1)",
//       "opacity": "1",
//     })
//   })

const FutureImageIeft = ({
  heading,
  text,
  button_text,
  image,
  image_alt,
  button_link
}) => (
  <Section className="container">
    <LeftBox id="left-box">
      <figure>
        <img className="device" alt={image_alt} src={image} />
        {/* <img className="content" src={require('../img/img-7.jpg')}/>   */}
      </figure>
    </LeftBox>
    <RightBox>
      <h1>{heading}</h1>
      <h3>{text}</h3>
      <a href={button_link}>
        <span>{button_text}</span>
      </a>
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
    </RightBox>

    <div className="clear-fix" />
    <style jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      div.clear-fix {
        clear: both;
      }
    `}</style>
  </Section>
);

export default FutureImageIeft;
