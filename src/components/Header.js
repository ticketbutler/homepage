import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";
// import { styled } from 'emotion'


const HeaderTag = styled.header`
    padding-top: 48px;
    height: 110vh;
    width: 100%;	
    color: #FFF;
    background-image: linear-gradient(to right, rgba(50, 109, 233, .85) , rgba(126, 82, 232, .85)), url("http://hdblackwallpaper.com/wallpaper/2015/09/black-hd-wallpaper-1920x1080-1-hd-wallpaper.jpg");
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 95%, 0% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 95%, 0% 100%);

    // @media (max-width: 1100px) {
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

  
  @media (max-width: 1100px) {
      color: #333F52;
      float:left;
      width: 127px;
      display:block;
      margin-left: 40px;
      
      
  }

  @media (max-width: 550px) {
    width: auto;
    font-size: 22px;    
}
`;

const Navbar = styled.div`
  width: 100%;
  height: 100px;      
  padding 0 50px;
  position: relative;
  @media (max-width: 1100px) {
    background-color: #F9FAFC;
    position: absolute;
    top: 0;  
    float: left;  
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
      font-size: 15px;	
      font-weight: 600;	
      letter-spacing: 1.15px;	
      text-align: center;
      position: relative;
      
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



    @media (max-width: 1100px) {
      float: left;
      width: 114px;
      height: 500px;
      padding:left: 0;
      position: absolute;
      left: 0;
      z-index: 11;
      

      > div.clear-fix {
        clear:both;
      }
      > ul{
        text-align: left;
        margin-top: 30px;
        transform: translateX(-280px);
        transition: transform .3s;



        &.active {
        width: 280px;
        background: #FFF;
        transform: translateX(0px);
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
          &:hover {
            background: #EEE;
            transition-delay: 0s;
            > a {
              margin-left: 8px;
            }
          }

          &.active {
       
            transition: all .0s;
            
            transform: rotate(0deg);
            background: linear-gradient(90deg, #326DE9 0%, #7E52E8 100%);
            
            &::after {
              content: "\00BB";
              font-size: 20px;
              float:right;
              color: #FFF;
            }
            > a {
              margin-left: 8px;
              color: #FFF;
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

    @media (max-width: 1100px) {
    display: block;
    width: 40px;
    height: 40px;
    padding: 3px 7px;
    border-radius: 25px;
    position: relative;
    margin-top: 30px;
    margin-left: 30px;
    &:hover {
      cursor: pointer;
      
      > div {
        background: rgba(51, 63, 82, .8);
      }
    }
   
    > div {
      width: 28px;
      height: 2.8px;
      background: rgba(51, 63, 82, .7);
      margin: 6px 0;
      border-radius: 2px;
      transition: background .3s;
      transition: all .1s;
      

     
    }
    &.clicked{
      transition: all .3s;
      
      > div.bar2 {
        display:none;
      }

      > div.bar1 {
        transform: rotate(45deg);
        position: absolute;
        top: 12.5px;
      }

      > div.bar3 {
        transform: rotate(-45deg);
        position: absolute;
        bottom: 12.5px;
      }
    }
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
    // float: right;
    margin-right: 0px;
    &#nav_login_btn{
      display: none;
    }
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

  @media (max-width: 1100px) {
        float: right;
        width: 35%;
        text-align: right;
        margin-right: 0;

        > a {
          border: 2px solid #326DE9;
        color: #326DE9;
          &:hover{
            background: linear-gradient(90deg, #326DE9 0%, #7E52E8 100%);
          }
            
        }
  }

  @media (max-width: 600px) {
    margin-top: 30px;
    
    > a {
      height: 40px;
      width: 100px;	
      font-size: 13px;

      > span {
        line-height: 38px;

      }
    }
  }  



  @media (max-width: 500px) {
    &#navbar_login_btn{
      display: none;
    }
  
    &#nav_login_btn{
      display: block;
    }


    float: left;
    margin-left: 30px;
    line-height: 0px;
    margin-top: 18px;

    > a {
      font-size: 13px;
      height: 45px;
      width: 220px;
      border-radius: 10px5
      > span {
        line-height: 40px;
      }
    }
  }
`;

const HeaderContent = styled.div`
    display:inline-block;
    width:100%;
    margin-top: 100px;
    text-align: center;
    padding: 60px 110px;

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
      text-decoration:none;   
      color: #FFFFFF;	
      font-family: Montserrat;	
      font-size: 15px;
      font-weight: 600;	
      letter-spacing: 1.15px;	
      text-align: center;
      display: inline-block;
      border-radius: 50px;
      padding: 20px 50px;
      background: linear-gradient(to right, rgba(40, 216, 167, 1),rgba(29, 201, 202, 1));
      transition: all .3s;
      &:hover {
        transform: scale(1.05);
        box-shadow: 0px 3px 20px -6px rgba(0,0,0,0.75);
      }

      
      > span {
        color: #FFFFFF;	
        font-family: Montserrat;	
        font-size: 18px;
        font-weight: bold;	
        text-align: center;
      }
    }

    @media (max-width: 1300px) {
      > h1 {
        width: 100%;
        display:block;
      }
      > p {
        width: 100%;
      }
    }    

    @media (max-width: 900px) {
      padding: 60px;
      
      > h1 {
      font-size: 60px;	
      }
      > p {
        width: 100%;
      }
    } 

    @media (max-width: 650px) {
      padding: 60px;
      
      > h1 {
      font-size: 40px;	
      line-height: 50px;	
      
      }
      > p {
      font-size: 20px;
      }

      > a{
      padding: 18px 40px;
        
        > span {
          font-size: 15px;

        }
      }
    } 

    @media (max-width: 446px) {
      padding: 60px 30px;
      > h1 {
      font-size: 30px;	
      line-height: 30px;	
      
      }
      > p {
      font-size: 18px;
      }

      > a{
        padding: 15px 30px;
          
          > span {
            font-size: 14px;
  
          }
        }
    } 

    
    @media (max-width: 446px) {
      padding: 30px 10px;
    }
    
`;

const state = {
  class: "active"
};



let liElements = document.getElementsByTagName("li");

const liHandler = () => {
  console.log(liElements)
}
  

const navbarEffect = () => {

  let nav_Bars = document.getElementById("bars");
  let ulElement = document.getElementById("ulNav");  
  let backDiv = document.getElementById("navActive_back");

  nav_Bars.classList.toggle("clicked");
  
  
  if(nav_Bars.classList.contains("clicked")){
    ulElement.classList.remove("!active");
    ulElement.classList.add("active");

    
    backDiv.classList.add("NavbarClicked-background");

    
    
  }else {
    ulElement.classList.add("!active");
    ulElement.classList.remove("active");

    backDiv.classList.remove("NavbarClicked-background");
    

  }
}


const Header = () => (

  <HeaderTag>
          <div id="navActive_back" ></div>

    <Navbar className="navbar">
      <LoginBtn id="navbar_login_btn"><a href="#"><span>Login</span></a></LoginBtn>  
      <Logo className="logo"><span>ticketbutler</span></Logo>
               
        <Nav>
          <NavBars onClick={navbarEffect} id="bars"/*className="clicked"*/>
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

            <LoginBtn id="nav_login_btn"><a href="#"><span>Login</span></a></LoginBtn>    
            </ul>

            <div className="clear-fix"></div> 
        </Nav>
    </Navbar>

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

export default Header
