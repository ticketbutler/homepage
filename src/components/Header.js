import React from "react";
import { withWindow } from "../components/helpers";
import { Button } from "./elements/elements";

const Header = ({
  heading,
  text,
  button_text,
  button_link,
  image,
  style = {},

  featureHeader,
  window
}) => {
  return (
    <header
      style={{
        padding: "100px 0",
        maxHeight: "100vh",
        width: "100%",
        color: "#fff",
        position: "relative",
        background: `linear-gradient( to right, rgba(50, 109, 233, .9),rgba(126, 82, 232, .9)),url('${image}'),no-repeat center center`,
        clipPath: "polygon(0 0, 100% 0, 100% 95%, 0% 100%)",
        backgroundSize: "cover",
        ...(featureHeader
          ? window.width < 500
            ? {
                height: "80vh",
                padding: "60px 0"
              }
            : {
                height: "80vh"
              }
          : {})
      }}
    >
      <div
        className="header_content"
        style={{
          display: "inline-block",
          width: "100%",
          textAlign: "center",
          position: "relative"
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
        {button_text &&
          button_text.length > 0 && (
            <Button
              to={button_link}
              style={{
                margin: "0 auto",
                maxWidth: 300
              }}
            >
              {button_text}
            </Button>
          )}
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
          width: 900px;

          font-size: 75px;
          line-height: 75px;
        }
        header div.header_content p {
          font-size: 25px;
          line-height: 35px;
          width: 772px;
          
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
        padding: 00px 
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
        padding: 0px ;
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
          line-height: 28px;
          margin-bottom: 20px ;
      }
   
  
    @media (max-width: 376px) {
      header{
        padding: 30px 20px 
        margin-top: 50px !important; 
      }

      header div.header_content{
        padding: 60px 00px   
        margin-top: 00px !important;
      }
  
      header div.header_content h1{
        font-size: 25px ;
        line-height: 28px ;
      }
      header div.header_content p{
        font-size: 14px ;
        line-height: 20px ;

      }
    
      
    
      `}</style>
    </header>
  );
};
export default withWindow(Header);
