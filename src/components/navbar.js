import React from "react";
// import Helemt from "react-helmet";
// import Link from "gatsby-link";
import styled from "styled-components";
import navbarEffect from "../js/navbarEffect";
// import Scrollchor from "react-scrollchor";
import "../js/navItems_smallScreent";

const Logo = styled.div`
  width: 20%;
  color: #ffffff;
  font-size: 25px;
  font-weight: 600;
  letter-spacing: -0.62px;
  display: inline;
  float: left;
  line-height: 100px;
  > span {
    font-family: Hind;
    display: block;
    text-align: center;
  }

  @media (max-width: 1200px) {
    font-size: 22px;
  }

  @media (max-width: 1080px) {
    color: #fff;
    float: left;
    width: 127px;
    margin-left: 40px;
    line-height: 80px;
    font-size: 20px;
  }

  @media (max-width: 600px) {
    width: auto;
    // margin-left: 0px;
    font-size: 18px;
  }

  @media (max-width: 350px) {
    width: auto;
    margin-left: 0px;
    font-size: 18px;
  }
`;

const Navbar = styled.div`
  width: 100%;
  height: 60px;      
  padding 40px 50px;
  position: absolute;
  z-index: 1000;

  @media (max-width: 1080px) {
    background-color: #326DE9;;
    position: absolute;
    top: 0;  
    z-index: 100;
    height: 80px;
    padding: 0px;
  }

  @media (max-width: 350px) {
   padding 0 25px;
  }
`;

const Nav = styled.nav`
    width: 60%;
    text-align:center;
    display: inline;
    float: left;
    line-height: 100px;
    position: relative;
    
    > ul {
      margin: 0;
      color: #FFFFFF;	
      font-size: 14px;	
      font-weight: 600;	
      letter-spacing: 1.15px;	
      text-align: center;
      
      div#lang {
        display:none;
        img {
          width: 24px;
          height: 15px;
        }
      }
      >li{
        list-style:none;
        display:inline-block;
        margin: 0 20px;
        line-height: 100px;
        font-family: Montserrat;

        
        > a {
          text-decoration:none;
          color: #fff;
          padding: 20px 0;
          border-top: 2px solid rgba(255,255,255, 0);
            border-bottom: 2px solid rgba(255,255,255, 0);
          transition: all 0.3s ease-out;

          &:hover {
            border-top: 2px solid rgba(255,255,255, .9);
            border-bottom: 2px solid rgba(255,255,255, .9);
            padding: 8px 0;
            // border-radius: 20px;
            
          }
        }
      }
    }


    @media (max-width: 1200px) {
      ul {
      font-size: 12px;
      }
    }

    @media (max-width: 1080px) {
      float: right;
      width: 114px;
      position: absolute;
      right: 30px;

      

      > div.clear-fix {
        clear:both;
      }
      > ul{
 
        
        height: 60px;
        text-align: left;
        margin-top: 80px;
        display: block;
        transform: translateX(0px);
        transition: transform .3s;
        
        > div#lang {
          position: absolute;
          right: 25px;
          bottom: -55px;
          img{
            margin-left: 10px;
            opacity: .7;
          transition: all .1s ease;            
            &:hover{
            opacity: 1;
            transform: scale(1.1);
            }
          }
        }
          &.active {
          width: 280px;
          height: 500px;
          
          background: #fff;
          transform: translateX(-135px);
          height: 450px;
          border-radius: 0 0 0 4px;
          li {
            visibility: visible;
             
            }
        }
        > li {
          margin: 0px 0px !important;
          display: block;
          line-height: 60px;
          transform: rotate(10deg);
          transform-origin: 0% 0%;
          padding: 0;
          opacity: 0;
          visibility: hidden;

            &:nth-child(1) {
              margin-top: 30px;
            }
        

           > a {
            color: #333F52;
            border:none;
            padding: 0 20px;
            display:block;
            width: 100%;
            height: 100%;
            
            &:hover {
              border:none;
              padding: 0;
  
            }
           }

           
        }


        &.active > li {
          transition: all .3s;
          padding 0 0px;
          border-bottom: 1px solid rgba(238,238,238, .5);
          &:hover {
            background-color: rgba(238,238,238, .5);
            transition-delay: 0s;
            > a {
              padding-left: 28px;
              padding-right: 12px;
            }
          }

          &.active {
            transition: all .0s;
            transform: rotate(0deg);
            background: #efefef;
            
            &::after {
              content: "\00BB";
              font-size: 20px;
              float:right;
              color:rgba(50, 109, 233, 0.85);
     
            }
            > a {
              margin-left: 8px;
            }
            
          }
          transform: rotate(0deg);
          margin: 0 30px;
          
            opacity: 1;
           }
      }
    }
`;

const NavBars = styled.div`
  display: none;

  @media (max-width: 1080px) {
    display: block;
    width: 40px;
    float: right;
    margin-right: 35px;
    height: 40px;
    padding: 5px 7px;
    border-radius: 25px;
    position: relative;
    margin-top: 21px;
    &:hover {
      cursor: pointer;
      opacity: 0.85;
    }

    > div {
      width: 22px;
      height: 2.1px;
      background: #fff;
      margin: 5px 0;
      border-radius: 2px;
      // transition: background .3s;

      transition: all 0.1s;
    }
    &.clicked {
      > div.bar2 {
        display: none;
      }

      > div.bar1 {
        transform: rotate(45deg);
        position: absolute;
        top: 12.5px;
      }

      > div.bar3 {
        transform: rotate(-45deg);
        position: absolute;
        bottom: 15px;
      }
    }
  }

  @media (max-width: 600px) {
    margin-right: 10px;
  }

  @media (max-width: 350px) {
    margin-right: -10px;
  }
`;

const Login_Lang = styled.div`
  width: 20%;
  display: inline-block;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 1.15px;
  text-align: center;
  margin-top: 28px;
  margin-right: 0px;
  div.language {
    display: none;
  }
  > a {
    text-decoration: none;
    color: #ffffff;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 1.15px;
    text-align: center;
    display: inline-block;
    height: 44px;
    width: 120px;
    border: 2px solid #1dc9ca;
    border-radius: 26px;
    background: linear-gradient(
      to right,
      rgba(40, 216, 167, 0),
      rgba(29, 201, 202, 0)
    );
    font-family: Montserrat;
    transition: all 0.3s;
    &:hover {
      background: linear-gradient(
        to right,
        rgba(40, 216, 167, 1),
        rgba(29, 201, 202, 1)
      );
      border-color: transparent;
      color: #fff;
    }

    > span {
      font-family: Montserrat;
      text-decoration: none;
      line-height: 40px;
    }
  }
  @media (max-width: 1200px) {
    margin-top: 30px;

    a {
      font-size: 12px;
      height: 40px;
      width: 100px;
      > span {
        // line-height: 60px;
      }
    }
  }

  @media (max-width: 1080px) {
    margin-top: 0px;
    width: 100px;
    margin-right: 80px;
    float: right;
    > a {
      border: none;
      color: #fff;
      margin-top: 25px;
      height: 30px;
      width: auto;
      margin-right: 25px;
      border-radius: 0;
      position: relative;

      &:hover {
        background: none;
      }
      &:after {
        content: "";
        background: #fff;
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0px;
        width: 1px;
        height: 20px;
        opacity: 0.6;
      }

      > span {
        line-height: 30px;
        padding: 10px;
      }
    }
  }

  @media (max-width: 600px) {
    width: 50px;

    margin-right: 90px;
    > a {
      font-size: 10px;
    }
  }

  @media (max-width: 350px) {
    margin-right: 45px;
  }
`;

const NavbarSection = ({ items }) => {
  return (
    <Navbar className="navbar">
      <Logo>
        <span>ticketbutler</span>{" "}
      </Logo>

      <Nav>
        <NavBars onClick={navbarEffect} id="bars" /*className="clicked"*/>
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
        </NavBars>
        <ul id="ulNav">
          {items.map(item => (
            <li
              onClick={() => {
                document.getElementById("ulNav").classList.remove("active");
                document
                  .getElementById("navActive_back")
                  .classList.remove("NavbarClicked-background");
                document.getElementById("bars").classList.toggle("clicked");

                // if(item.path == "#contact"){
                //   document.getElementsByTagName("a").animate({offset: 200, duration: 2000 })
                // }
              }}
            >
              <a
                href={item.path}
                className="nav-link"
                animate={{ offset: 20, duration: 600 }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </Nav>
      <Login_Lang id="navbar_login_btn">
        <div className="language">
          <span id="Lang">Danish</span>
          <ul>
            <li>
              <span>English</span>
            </li>
          </ul>
        </div>
        <a href="#">
          <span>Login</span>
        </a>
      </Login_Lang>
      <div className="clear-fix" />

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        div.NavbarClicked-background {
          display: none;

          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          position: fixed;
          background-color: rgba(0, 0, 0, 0.75);
          z-index: 10;
        }
        @media (max-width: 1100px) {
          div.NavbarClicked-background {
            display: block;
          }
        }
      `}</style>
    </Navbar>
  );
};

export default NavbarSection;
