import React from "react";

import { Button, SectionText } from "./elements/elements";

const Header = ({ heading, text, button_text, button_link }) => {
  return (
    <header
      style={{
        padding: "48px 0",
        minHeight: "100vh",
        width: "100%",
        color: "#fff",
        position: "relative",
        background:
          "linear-gradient( to right, rgba(50, 109, 233, .9),rgba(126, 82, 232, .9)),url('../img/splash-new.png'),no-repeat center center",
        clipPath: "polygon(0 0, 100% 0, 100% 95%, 0% 100%)",
        backgroundSize: "cover"
      }}
    >
      <div
        id="navActive_back"
        style={{
          position: "absolute",
          backgroundColor: "#000",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: 10,
          opacity: 0,
          visibility: "hidden"
        }}
      />
      <div
        className="header_content"
        style={{
          display: "inline-block",
          width: "100%",
          textAlign: "center",
          position: "relative",
          zIndex: "-1"
        }}
      >
        <h1
          style={{
            margin: "auto",
            display: "block",
            color: "#ffffff",
            fontFamily: "Hind",
            fontWeight: "bold",
            textAlign: "center",
            zIndex: "-1",
            transition: "all 0.3s"
          }}
        >
          {heading}
        </h1>
        <p
          style={{
            margin: "auto",
            marginBottom: "37px",
            marginTop: "30px",
            display: "block",
            color: "#ffffff",
            fontFamily: "Montserrat",
            textAlign: "center",
            transition: "all 0.3s"
          }}
        >
          {text}
        </p>
        <Button>
          <a href={button_link}>
            {button_text}

            <span
              style={{
                transition: "all 0.3s"
              }}
            >
              &#187;
            </span>
          </a>
        </Button>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        div#navActive_back.NavbarClicked-background {
          visibility: visible;
          opacity: 0.6;
        }

        header div.header_content {
          padding: 100px 110px;
          margin-top: 100px; 
        }

        header div.header_content h1 {
          width: 1025px;
          font-size: 75px;
          line-hight: 70px;
          margin-bottom: 37px ;
        }
        header div.header_content p {
          width: 604px;
          font-size: 25px;
        }

        
    @media (max-width: 1300px) {
      
      header div.header_content h1 {
          display: inlin-block !important;
        }
        header div.header_content p {
          width: 100%;
        }
      }
  
    @media (max-width: 1080px) {
      header div.header_content{
        padding: 60px 110px !important;
        margin-top: 60px !important;
      }
      header div.header_content h1 {
        width: 100% ;
        font-size: 55px ;
        line-height: 60px ;
      }
      header div.header_content p {
        font-size: 22px ;
      }
    }
  
    @media (max-width: 768px) {
      header{
        padding: 00px !important;
      }

      header div.header_content{
        padding: 60px 90px !important;
        margin-top: 80px !important;
      }
  
      header div.header_content h1{
        font-size: 45px ;
        line-height: 50px ;
       
      }
      header div.header_content p{
        font-size: 20px ;
      }
  
    }
  
    @media (max-width: 600px) {
      header{
        padding: 0px !important;
        margin-top: 50px !important; 
      }
  
      header div.header_content{
        padding: 60px 40px !important;
        margin-top: 60px !important;
      }

      header div.header_content h1{
        font-size: 35px ;
        line-height: 40px ;
        margin-bottom: 20px ;
      }
      header div.header_content p{
        font-size: 16px !important;
        margin-bottom: 20px ;
      }
   
  
    @media (max-width: 376px) {
      header{
        padding: 30px 20px !important;
        margin-top: 50px !important; 
      }

      header div.header_content{
        padding: 60px 00px !important;
        margin-top: 00px !important;
      }
  
      header div.header_content h1{
        font-size: 25px ;
        line-height: 28px ;
      }
      header div.header_content p{
        font-size: 14px !important;
        line-height: 20px ;

      }
    
      
    }
      `}</style>
    </header>
  );
};
export default Header;
