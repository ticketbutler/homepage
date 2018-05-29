import React from 'react';
import Helemt from 'react-helmet';
import Link from 'gatsby-link';
import styled from "styled-components";
import navbarEffect from '../js/navbarEffect';


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

const Logo = styled.div`
    width: 20%;
    color: #FFFFFF;	
    font-size: 25px;	
    font-weight: 600;	
    letter-spacing: -0.62px;	
    display: inline;
    float:left;
    line-height: 100px;
    > span {
      font-family: Hind;  
      display: block;
    text-align:center;
        
    }

    @media (max-width: 1200px) {
      font-size: 22px;
  }
  
  @media (max-width: 1080px) {
      color: #fff;
      float:left;
      width: 127px;
      margin-left: 40px;
      line-height: 60px;
      font-size: 20px;
      
      
      
      
  }

  @media (max-width: 600px) {
    width: auto;
    margin-left: 0px;
    font-size: 18px;    
 }
`;

const Navbar = styled.div`
  width: 100%;
  height: 60px;      
  padding 0 50px;
  position: relative;

  @media (max-width: 1080px) {
    background-color: #326DE9;;
    position: absolute;
    top: 0;  
    z-index: 100;
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
        margin-top: 60px;
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
          padding: 0 20px;
          opacity: 0;
          visibility: hidden;

            &:nth-child(1) {
              margin-top: 30px;
            }
        

           > a {
            color: #333F52;
            border:none;
            padding: 0px 0;
            &:hover {
              border:none;
            }
           }

           
        }


        &.active > li {
          transition: all .3s;
          padding 0 30px;
          border-bottom: 1px solid rgba(238,238,238, .5);
          &:hover {
            background-color: rgba(238,238,238, .5);
            transition-delay: 0s;
            > a {
              margin-left: 8px;
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
              color:#28D8A7;
     
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
    padding:5px 7px;
    border-radius: 25px;
    position: relative;
    margin-top: 11px;
    &:hover {
      cursor: pointer;
      opacity: .85;
    }
   
    > div {
      width: 22px;
      height: 2.1px;
      background: #fff;
      margin: 5px 0;
      border-radius: 2px;
      // transition: background .3s;

      transition: all .1s;
    }
    &.clicked{
      > div.bar2 {
        display:none;
      }

      > div.bar1 {
        transform: rotate(45deg);
        position: absolute;
        top:12.5px;
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

const LoginBtn = styled.div`
    width: 20%;
    display: inline-block;
    text-align: center;
    font-size: 15px;	
    font-weight: 600;	
    letter-spacing: 1.15px;	
    text-align: center;
    margin-top: 28px;
    margin-right: 0px;
 
    > a {
      text-decoration:none;   
      color: #FFFFFF;	
      font-size: 15px;
      font-weight: 600;	
      letter-spacing: 1.15px;	
      text-align: center;
      display: inline-block;
      height: 44px;
      width: 120px;	
      border: 2px solid #1DC9CA;	
      border-radius: 26px;
      background: linear-gradient(to right, rgba(40, 216, 167, 0),rgba(29, 201, 202, 0));
      font-family: Montserrat;
      transition: all 0.3s;
      &:hover {
      background: linear-gradient(to right, rgba(40, 216, 167, 1),rgba(29, 201, 202, 1));
      border-color: transparent;
      color: #FFF;
      }
      
      > span {
        font-family: Montserrat;	
        text-decoration:none;
        line-height: 40px;
      }

      
    }
    @media (max-width: 1200px) {
      margin-top: 30px;

      a{
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
    margin-right: 30px;
    float: right;
        > a {
          border: none;
          color: #fff;
          margin-top: 15px;
          height: 30px;
          width: auto;	
          margin-right: 25px;
          border-radius: 0;
          position: relative;
          
          &:hover{
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
            opacity: .6;
     
          }

          > span {
            line-height:30px;
            padding:  10px;
            
            
          }
            
        }
  }

  @media (max-width: 600px) {
    width: 50px;
    
    margin-right: 40px;
    >a {
      font-size: 10px;
      
    }
  }  



  @media (max-width: 350px) {
    margin-right: 45px;
    
    
  }
`;

const HeaderContent = styled.div`
    display:inline-block;
    width:100%;
    margin-top: 100px;
    text-align: center;
    padding: 60px 110px;
    z-index: -1;

    > h1 {

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
      
    }
    
    >p {
      width: 604px;	
      margin: auto;
      margin-bottom: 37px;      
      display: block;
      color: #FFFFFF;	
      font-family: Montserrat;	
      font-size: 25px;	
      line-height: 30px;	
      text-align: center;
    }

    > a{
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
      > h1 {
        width: 100%;
        display:inlin-block;
      }
      > p {
        width: 100%;
      }
    }    

    @media (max-width: 1080px) {
      padding: 60px;
      
      > h1 {
      font-size: 55px;
      line-height: 60px;	
      	
      }
      > p {
        font-size: 22px;
          
        }
        > a{
          padding: 0;
            > span {
              font-size: 16px;
            }
          }
    } 

    @media (max-width: 768px) {
      padding: 60px;
      
      > h1 {
      font-size: 45px;
      line-height: 50px;	
      	
      }
      > p {
      font-size: 20px;
        
      }

      > a{

          > span {
            font-size: 15px;
          }
        }
    } 


    @media (max-width: 600px) {
      padding: 60px;
      margin-top: 50px;
      
      > h1 {
      font-size: 35px;	
      line-height: 40px;	
      
      }
      > p {
      font-size: 16px;
      }

      > a{
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
      > h1 {
      font-size: 25px;	
      line-height: 28px;	
      
      }
      > p {
      font-size: 14px;
      line-height: 20px;	
      
      }

      > a{
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


   const Header = ({data}) => {
     console.log(data)

  const { markdownRemark: post} = data;

    return (
      <HeaderTag id="header">
        <Navbar className="navbar">
          <Logo className="logo"><span>{post.frontmatter.title}</span></Logo>
                  
            <Nav>
              <NavBars onClick={navbarEffect} id="bars" /*className="clicked"*/>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </NavBars>
                <ul id="ulNav">
                  <li className="active"><a href="#" >Home</a></li>            
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Contact</a></li>
                  <div id="lang">
                    <img id="dk_flag" src={require('../img/dk.jpg')}></img>
                    <img id="en_flag" src={require('../img/en.png')}></img>
                  </div>
                </ul>
                {/* <div className="clear-fix"></div>  */}
            </Nav>
            <LoginBtn id="navbar_login_btn"><a href="#"><span>Login</span></a></LoginBtn>  
        </Navbar>

              <div id="navActive_back" ></div>

        <HeaderContent className="header_content">
          <h1 id="header">A single platform to manage and grow your event</h1>
          <p id="description">We need some more text here, just a punch line</p>
          <a href="#"><span>Get started, it's free!</span></a>
        </HeaderContent>
      
        <style jsx>{`
              @import url("https://fonts.googleapis.com/css?family=Hind:400,500,600,700|Montserrat:300,400,500,600,700,800,900");

              * {
                margin: 0;
                padding:0;
                box-sizing: border-box;
                
              }
          
      
              div.NavbarClicked-background {
                display: none;
                
                position: absolute;
                top: 0;
                left:0;
                height: 100%;
                width: 100%;
                position:fixed;
                background-color: rgba(0,0,0,.75);
                z-index: 10;
              }
              @media (max-width: 1100px) {
                div.NavbarClicked-background {
                  display: block;
                }

              }

              // media queries


          
        `}</style>
      </HeaderTag>
  
    )

  }


// const AboutPage = ({ data }) => {
//   console.log(data);
//   console.log("hello");
  
//   const { markdownRemark: post } = data

//   return (
//     <Header
//       title={post.frontmatter.title}
//     />
//   )
// }

export default Header

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      id
      frontmatter {
        path
        title
      }
    }
  }
`