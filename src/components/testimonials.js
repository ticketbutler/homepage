import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

const Section = styled.section`
  padding: 100px 0;
  width: 100%;
  height: 850px;
  position: relative;

  margin-bottom: 50px;
  margin-top: 150px;

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
    @media (max-width: 1080px) {
      right: 50px;
    }
    @media (max-width: 768px) {
      right: 30px;
    }
    @media (max-width: 500px) {
      right: 10px;
    }
    @media (max-width: 400px) {
      right: -5px;
    }

  }

  .carousel .control-arrow.control-prev, .carousel.carousel-slider .control-arrow.control-prev{
    left: 100px;
    z-index: 1001;
    &:hover {
      background-color: transparent;
    }
    @media (max-width: 1080px) {
      left: 50px;
    }
    @media (max-width: 768px) {
      left: 30px;
    }
    @media (max-width: 500px) {
      left: 10px;
    }
    @media (max-width: 400px) {
      left: -5px;
    }

  }


.carousel .control-arrow.control-prev::before, .carousel.carousel-slider .control-arrow.control-prev::before{
  color: #C5D0DE;
  content: "<";
  font-size: 60px;
  z-index: 1001;
  border:none;
  @media (max-width: 768px) {
    font-size: 50px;
 }
 @media (max-width: 500px) {
     font-size: 30px;
 }
 @media (max-width: 400px) {
     font-size: 25px;
 }
 }

.carousel .control-arrow::before, .carousel.carousel-slider .control-arrow::before{
    color: #C5D0DE;
    content: ">";
    font-size: 60px;
    z-index: 1001;
    border:none;
    @media (max-width: 768px) {
      font-size: 50px;
   }
   @media (max-width: 500px) {
       font-size: 30px;
   }
   @media (max-width: 400px) {
       font-size: 25px;
   }
   }

   .carousel .control-dots .dot {
     background: lightblue;
     box-shadow: 1px 1px 2px rgba(0,0,0,0);
   }
  div{
      div.slider{
        width: 100%;
        height: 100%;
        img.quote{
          position: absolute;
          width: 400px;
          left: 10%;
          top: -20px;
          font-size: 1000px;
          z-index: 100;
          opacity: 1;  
          position: none;
        } 
        div.item{
            width: 100%;
            height: 100%;
            padding: 80px 0;
            
            background-color:rgb(246, 251, 255);
            
            
            p{
                display:block;
                margin-left: 50%;
              transform: translateX(-50%);
              width: 769px;	color: #868E99;	font-family: Montserrat;	font-size: 24px;	line-height: 38px;	text-align: center;
            }
  
          img.pic {
              displa: block;
              width: 200px;
              height:200px;
              border-radius:50%;
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
      

  @media (max-width: 1680px) {
    div{
      div.slider{
        img.quote{
          width: 400px;
          left: 8%;
          top: -20px;
        } 
        div.item{
        }
    }
  }

  @media (max-width: 1680px) {
    div{
      div.slider{
        img.quote{
          width: 300px;
          left: 8%;
          top: 20px;
        } 
        div.item{
        }
    }
  }

  @media (max-width: 1080px) {
    div{
      div.slider{
        img.quote{
          width: 200px;
          left: 8%;
          top: 50px;
        } 
        div.item{
          padding:76px 150px;
          p{
        
          height: auto;	
          width: 100%;	
          
            font-size: 22px;	
            
        }

      img.pic {
        
          width: 200px;
          height: 200px;
         
         
         
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

  @media (max-width: 768px) {


    div{
      div.slider{
        img.quote{
          width: 100px;
         
          left: 8%;
          top: 70px;
        } 
        div.item{
          padding:76px 100px;

          p{
            font-size: 18px;
            line-height: 25px;	
          }
  
        img.pic {
          
          width: 150px;
          height: 150px;
           margin-bottom: 40px;
        }
  
        span.about{
          font-size: 15px;	
        }
        }
    }
  }
  @media (max-width: 600px) {
    div{
      div.slider{
        img.quote{
          width: 100px;
         
          left: 8%;
          top: 120px;
        } }}
  }
  @media (max-width: 500px) {


    div{
      div.slider{
        img.quote{
          width: 100px;
         
          left: 8%;
          top: 120px;
        } 
        div.item{
          padding:40px 80px;

          p{
            font-size: 16px;
            line-height: 25px;	 
          }
  
        img.pic {
          
            width: 130px;
            height: 130px;
            margin-bottom: 40px;
        }
  
        span.about{
          font-size: 15px;	
        }
        }
    }
  }
  @media (max-width: 375px) {


    div{
      div.slider{
        img.quote{
          width: 100px;
         
          left: 8%;
          top: 90px;
        } 
        div.item{
          padding:40px 50px;

          p{
            font-size: 16px;
            line-height: 25px;	 
          }
  
        img.pic {
          
            width: 110px;
            height: 110px;
            margin-bottom: 40px;
        }
  
        span.about{
          font-size: 15px;
          width: 200px;
          line-height: 20px;	
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
            <img className="quote" src={require("../img/quote.png")} />

            <Carousel
              showArrows="true"
              useKeyboardArrows="true"
              Responsive
              autoPlay
              swipeable
              emulateTouch
              interval="7000"
              // stopOnHover
              infiniteLoop
              transitionTime="500"
            >
              {items.map(item => (
                <div key={item} className="item">
                  <img
                    className="pic"
                    src={item.image}
                    style={{ objectFit: "cover" }}
                  />
                  <p>{item.text}</p>
                  <span className="about">{item.about}</span>
                  <img className="logo" src={item.logo} />
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
