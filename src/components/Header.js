import React from 'react';
import Helemt from 'react-helmet';
import Link from 'gatsby-link';
import styled from "styled-components";
import navbarEffect from '../js/navbarEffect';
import $ from 'jquery'; 

import Navbar from "../components/navbar"

const HeaderTag = styled.header`
    padding: 48px 0;
    min-height: 100vh;
    width: 100%;	
    color: #FFF;
    background: linear-gradient(to right, rgba(50, 109, 233, .85) , rgba(126, 82, 232, .85)), url("http://hdblackwallpaper.com/wallpaper/2015/09/black-hd-wallpaper-1920x1080-1-hd-wallpaper.jpg") no-repeat center center ;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 95%, 0% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 95%, 0% 100%);
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    // @media (max-width: 1080px) {
    //   padding-top: 0;

    //   > Logo {
    //     color: #333F52;

    //   }
    // }

    
`;

const HeaderContent = styled.div`
    display:inline-block;
    width:100%;
    margin-top: 100px;
    text-align: center;
    padding: 60px 110px;
    z-index: -1;

    > h1#title {

      width: 1025px;
      margin: auto;
      margin-bottom: 37px;
      display: block;	
      color: #FFFFFF;	
      font-family: Hind;	
      font-size: 75px;	
      font-weight: bold;	
      line-height: 70px;	
      text-align: center;
      z-index: -1;
      transform: translateX(800px);
      opacity: 0;
      transition: all .3s;


    }
    
    >p#description {
      width: 604px;	
      margin: auto;
      margin-bottom: 37px;      
      display: block;
      color: #FFFFFF;	
      font-family: Montserrat;	
      font-size: 25px;	
      line-height: 30px;	
      text-align: center;
      transform: translateX(-800px);
      opacity: 0;
      
      transition: all .3s;
      
    }

    > a#header-btn{
      z-index: 0;
      width: 300px;
      height: 60px;
      line-height: 58px;
      text-decoration:none;   
      color: #FFFFFF;	
      font-family: Montserrat;	
      font-size: 15px;
      font-weight: 600;	
      letter-spacing: 1.15px;	
      text-align: center;
      display: inline-block;
      border-radius: 50px;
      padding: 0px;
      background: linear-gradient(to right, rgba(40, 216, 167, 1),rgba(29, 201, 202, 1));
      position: relative;
      transform: translateX(-800px);
      opacity: 0;
      
      transition: all .3s;
      &:hover {
        // transform: scale(1.05);
        box-shadow: 0px 3px 20px -6px rgba(0,0,0,0.30);
       > span {
        &::after {
          opacity: 1;
          margin-left: 10px;
        }
        }
      }

      
      > span {
        color: #FFFFFF;	
        font-family: Montserrat;	
        font-size: 18px;
        font-weight: bold;	
        text-align: center;
      transition: all .3s;
        
        &::after {
          content: '\00BB';
          opacity: 1;
          font-size: 25px;
          opacity: 0;
          margin-left: -8px;
          z-index: 10;
          color: #FFF;
          transition: 0.3s;
        }
      }
    }

    @media (max-width: 1300px) {
      > h1#title {
        width: 100%;
        display:inlin-block;
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
        > a#header-btn{
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

      > a#header-btn{

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

      > a#header-btn{
        width: 250px;
        height: 50px;
        line-height: 48px;
          
          > span {
            font-size: 14px;
            &::after{
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

      > a#header-btn{
        width: 210px;
        height: 50px;
          
          > span {
            font-size: 12px;
            &::after{
              font-size: 16px;
            }
          }
        }
    }    
`;
 

  $(document).ready(()=> {
    $("h1#title, p#description, a#header-btn").css({
      "transform": "translateX(0)",
      "opacity": "1",
    })
  })
    
   const Header = () => {
    return (
      <HeaderTag id="header">
      <Navbar />
          <div id="navActive_back" ></div>
        <HeaderContent className="header_content">
          <h1 id="title">A single platform to manage and grow your event</h1>
          <p id="description">We need some more text here, just a punch line</p>
          <a href="#" id="header-btn"><span>Get started, it's free!</span></a>
        </HeaderContent>
      
        <style jsx>{`
              @import url("https://fonts.googleapis.com/css?family=Hind:400,500,600,700|Montserrat:300,400,500,600,700,800,900");

              * {
                margin: 0;
                padding:0;
                box-sizing: border-box;
                
              }

        `}</style>
      </HeaderTag>
  
    )

  }
export default Header

