import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "../js/jquery_slider";

const Section = styled.section`
  padding: 140px 0;
  width: 100%;
  height; 700px;
  dinsplay:block;
  position: relative;


  @media (max-width: 1080px) {
    padding: 100px 0;
  }
  @media (max-width: 768px) {
    padding: 100px 0;
  }

  @media (max-width: 600px) {
    padding: 150px 0;
  }

  @media (max-width: 376px) {
    padding: 120px 0px;
  }
`;
const Content = styled.div`
  width: 100%;

  .carousel .thumbs{
    display:none;
  }
  .carousel .carousel-status{
    display:none;
  }
  .carousel .control-arrow, .carousel.carousel-slider .control-arrow{
  //  background-color: #ccc;
  }

  .carousel .control-arrow, .carousel.carousel-slider .control-arrow{
    width: 60px;
    height: 60px;
    top: 50%;
    transform:translateY(-50%);

  }

  .carousel .control-arrow.control-next, .carousel.carousel-slider .control-arrow.control-next{
    
    right: 100px;
    z-index: 1001;
    &:hover {
      background-color: transparent;
    }

  }

  .carousel .control-arrow.control-prev, .carousel.carousel-slider .control-arrow.control-prev{
    left: 100px;
    z-index: 1001;
    &:hover {
      background-color: transparent;
    }

  }

.carousel .control-arrow.control-prev::before, .carousel.carousel-slider .control-arrow.control-prev::before{
  content: "<";
  font-size: 60px;

}

.carousel .control-arrow::before, .carousel.carousel-slider .control-arrow::before{
    color: #C5D0DE;
    content: ">";
    font-size: 60px;
    z-index: 1001;
    border:none;
   }

   .carousel .control-dots .dot {
     background: lightblue;
     box-shadow: 1px 1px 2px rgba(0,0,0,0);
   }
  div{
      div.slider{
        span.quote{
          position: absolute;
          left: 40px;
          top: 450px;
          font-size: 1000px;
          z-index: 100;
          opacity: .5;
        
          
          
        } 
        div.item{
            width: 100%;
            padding: 50px 0;
            
            background-color:rgb(246, 251, 255);
          
            
            p{
                display:block;
                margin-left: 50%;
              transform: translateX(-50%);
              height: 114px;	width: 769px;	color: #868E99;	font-family: Montserrat;	font-size: 24px;	line-height: 38px;	text-align: center;
            }
  
          img.pic {
              displa: block;
              width: 200px;
              height: 200px;
              border-radius:100px;
              object-fit: cover
              // margin-left: 50%;
              // transform: translateX(-50%);
             
              margin-bottom: 40px;
          }
  
          span.about{
                  display:block;
                  margin-left: 50%;
              transform: translateX(-50%);
                  height: 29px;	width: 500px;	color: #333F52;	font-family: Hind;	font-size: 18px;	font-weight: bold;	line-height: 29px;	text-align: center;
          }
        
          img.logo{
              display: block;
              text-align: center;
              font-size: 25px;
              opacity: .7;
              margin: 0 auto;
              margin-top: 30px;
              margin-bottom: 20px;
              width: 200px;
              
          }
        }
      }
  }
      



`;

const Slider_section = ({ items }) => {
  return (
    <Section className="container">
      <Content>
        <div className="slider_wrap">
          <div className="slider">
          <span className="quote">&#8220;</span>

           <Carousel showArrows="true" useKeyboardArrows="true" Responsive >
            {items.map(item => (
              <div className="item">
                 <img className="pic" src={item.image} />
                <p>{item.text}</p>
                <span className="about">{item.about}</span>
                <img className="logo" src={item.logo}></img>
              </div>
            ))}
          </Carousel>
          </div>
        </div>
      </Content>
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
        @import "~slick-carousel/slick/slick.css";
        @import "~slick-carousel/slick/slick-theme.css";
      `}</style>
    </Section>
  );
};

export default Slider_section;
