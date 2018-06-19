import React from "react";
import styled from "styled-components";
import { Carousel } from 'react-responsive-carousel';
import "../js/jquery_slider";

const Section = styled.section`
  padding: 100px 0;
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
  div{
      div.slider{
        div.item{
            display:block;
            float: left;
            width: 100%;
            position: relative;
            padding: 50px 0;
            background-color: #efefef;
  
          div {
                position:absolute;
                display: inline;
                float: left;
                top: 0; 
                left: 0;
                height: 317.6px;	
                width: 396px;
                  span#quote{
      
                } 
            }
  
            p{
                display:block;
                margin-left: 50%;
              transform: translateX(-50%);
              height: 114px;	width: 769px;	color: #868E99;	font-family: Montserrat;	font-size: 24px;	line-height: 38px;	text-align: center;
            }
  
          img {
              displa: block;
              width: 200px;
              height: 200px;
              border-radius:100px;
              object-fit: cover
              margin-left: 50%;
              transform: translateX(-50%);
             
              margin-bottom: 40px;
          }
  
          span#about{
                  display:block;
                  margin-left: 50%;
              transform: translateX(-50%);
                  height: 29px;	width: 500px;	color: #333F52;	font-family: Hind;	font-size: 18px;	font-weight: bold;	line-height: 29px;	text-align: center;
          }
        
          span#logo{
              display: block;
              text-align: center;
              font-size: 25px;
              opacity: .7;
              margin-top: 15px;
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
           <Carousel showArrows="true" useKeyboardArrows="true" Responsive >
            {items.map(item => (
              <div className="item">
                <div>
                  <span id="quote">&#8220;</span>
                </div>
                 <img src={item.image} />
                <p>{item.text}</p>
                <span id="about">{item.about}</span>
                <span id="logo">{item.logo}</span>
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
