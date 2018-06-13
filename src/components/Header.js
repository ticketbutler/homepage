import React from "react";
// import Helemt from "react-helmet";
// import Link from "gatsby-link";
import styled from "styled-components";
// import navbarEffect from "../js/navbarEffect";
// import $ from "jquery";

const HeaderTag = styled.header`
  padding: 48px 0;
  min-height: 100vh;
  width: 100%;
  color: #fff;
  background: linear-gradient(
      to right,
      rgba(50, 109, 233, .9),
      rgba(126, 82, 232, .9)
    ),
    url("../img/splash-new.png");
      no-repeat center center;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 95%, 0% 100%);
  clip-path: polygon(0 0, 100% 0, 100% 95%, 0% 100%);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  > #navActive_back{
    position: absolute; 
    background-color: #000;
    top: 0;
    left: 0;
    width: 100%;
    height 100vh;
    z-index: 10;
    opacity: 0;
    visibility: hidden;
    &.NavbarClicked-background {
      visibility: visible;
      opacity: .6;
    }
  }

 
`;

const HeaderContent = styled.div`
  display: inline-block;
  width: 100%;
  margin-top: 100px;
  text-align: center;
  padding: 60px 110px;
  z-index: -1;

  > h1#title {
    width: 1025px;
    margin: auto;
    margin-bottom: 37px;
    display: block;
    color: #ffffff;
    font-family: Hind;
    font-size: 75px;
    font-weight: bold;
    line-height: 70px;
    text-align: center;
    z-index: -1;
    // transform: translateX(800px);
    // opacity: 0;
    transition: all 0.3s;
  }

  > p#description {
    width: 604px;
    margin: auto;
    margin-bottom: 37px;
    display: block;
    color: #ffffff;
    font-family: Montserrat;
    font-size: 25px;
    line-height: 30px;
    text-align: center;
    // transform: translateX(-800px);
    // opacity: 0;

    transition: all 0.3s;
  }

  > a#header-btn {
    z-index: 0;
    width: 300px;
    height: 60px;
    line-height: 55px;
    text-decoration: none;
    color: #ffffff;
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 1.15px;
    text-align: center;
    display: inline-block;
    border-radius: 50px;
    padding: 0px;
    background: linear-gradient(
      to right,
      rgba(40, 216, 167, 1),
      rgba(29, 201, 202, 1)
    );
    position: relative;
    // transform: translateX(-800px);
    // opacity: 0;

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

  @media (max-width: 1300px) {
    > h1#title {
      width: 100%;
      display: inlin-block;
    }
    > p#description {
      width: 100%;
    }
  }

  @media (max-width: 1080px) {
    padding: 60px;

    > h1#title {
      font-size: 55px;
      line-height: 60px;
    }
    > p#description {
      font-size: 22px;
    }
    > a#header-btn {
      padding: 0;
      > span {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 60px;

    > h1#title {
      font-size: 45px;
      line-height: 50px;
    }
    > p#description {
      font-size: 20px;
    }

    > a#header-btn {
      > span {
        font-size: 15px;
      }
    }
  }

  @media (max-width: 600px) {
    padding: 60px;
    margin-top: 50px;

    > h1#title {
      font-size: 35px;
      line-height: 40px;
    }
    > p#description {
      font-size: 16px;
    }

    > a#header-btn {
      width: 250px;
      height: 50px;
      line-height: 48px;

      > span {
        font-size: 14px;
        &::after {
          font-size: 20px;
        }
      }
    }
  }

  @media (max-width: 376px) {
    margin-top: 50px;
    padding: 30px 20px;
    > h1#title {
      font-size: 25px;
      line-height: 28px;
    }
    > p#description {
      font-size: 14px;
      line-height: 20px;
    }

    > a#header-btn {
      width: 190px;
      line-height: 42px;
      height: 45px;

      > span {
        font-size: 11px;
        &::after {
          font-size: 14px;
        }
      }
    }
  }
`;

const Header = ({ heading, text, button_text, button_link }) => {
  return (
    <HeaderTag id="header">
      <div id="navActive_back" />
      <HeaderContent className="header_content">
        <h1 id="title">{heading}</h1>
        <p id="description">{text}</p>
        <a href={button_link} id="header-btn">
          <span>{button_text}</span>
        </a>
      </HeaderContent>

      <style jsx>{`
        // @import url("https://fonts.googleapis.com/css?family=Hind:300,400,500,600,700|Montserrat:300,400,500,600,700");

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>
    </HeaderTag>
  );
  // {
  //     (function(a,l,b,c,r,s){
  //     _nQc=c,r=a.createElement(l),s=a.getElementsByTagName(l)[0];
  //     r.async=1;
  //     r.src=l.src=("https:"==a.location.protocol?"https://":"http://")+b;
  //     s.parentNode.insertBefore(r,s);})
  //     (document,"script","serve.albacross.com/track.js","89331168");
  // }
};
export default Header;
