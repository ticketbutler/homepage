import React from "react";

import { Button, SectionText } from "./elements/elements";

import { SmallTriangle } from "./elements/shapes";

const FutureLayers = ({
  heading,
  text,
  button_text,
  image,
  image_alt,
  button_link
}) => (
  <section className="future_layer">
    <img alt={image_alt} className="content_image" src={image} />

    <div className="section_content">
      <SectionText>
        <h2
          style={{
            textAlign: "left",
            float: "left",
            display: "block"
          }}
        >
          {heading}
        </h2>
        <p
          style={{
            textAlign: "left",
            float: "left",
            display: "block"
          }}
        >
          {text}
        </p>
        {button_text &&
          button_text.length > 0 && (
            <Button
              to={button_link}
              className="right"
              style={{
                right: "100%"
              }}
            >
              {button_text}
            </Button>
          )}
      </SectionText>
    </div>

    <div className="shape_pos_small_triangle">
      <SmallTriangle>
        <div className="shape">
          <span id="first">&#x25BC;</span>
          <span id="second">&#x25BC;</span>
        </div>
      </SmallTriangle>
    </div>

    <div className="clear-fix" />

    <style jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }


      div.clear-fix {
        clear: both;
      }
    
      /** Shape*/
      div.shape_pos_small_triangle{
        position: absolute;
        top: 19%;
        left: 90%;
        z-index: 100;

    }

    @media (max-width: 1080px) {
      div.shape_pos_small_triangle{
        top: 19%;
        left: 80%;

    }
  }
    @media (max-width: 600px) {
      div.shape_pos_small_triangle{
        top: 10%;
        left: 70%;

    }
  }
    @media (max-width: 600px) {
      div.shape_pos_small_triangle{
        top: 6%;
        left: 70%;

    }
    }



    /**  Section Contetn */

      section.future_layer {
        width: 100%;
        // height: 970px;
        position: relative;
        padding: 110px 0;
        padding-left: 0;
        z-index: 1;
        margin-top: 330px;
      
        background: linear-gradient(311.59deg, #28d8a7 0%, #1dc9ca 100%);
      }
      
        // margin-top: 200px;
        @media (max-width: 1080px) {
          section.future_layer {
          padding: 110px 0;
          margin-top: 250px;
        }
      }
        @media (max-width: 768px) {
          section.future_layer {
          padding: 80px 0;
        }
      }
      
        @media (max-width: 600px) {
          section.future_layer {
          margin-top: 200px;
      
          padding: 60px 0;
        }
      }
        @media (max-width: 376px) {
          section.future_layer {   margin-top: 150px;
      
          padding: 30px 0;
        }}



      div.section_content{
        height: auto;	
        width: 55%;	
        background-color: #FFFFFF;
        box-shadow: 0px 0px 12px -4px rgba(0,0,0,0.35);
        margin-right: 8%
        position: relative;
        z-index: 1001;
        float: right;
        padding: 95px 86px;
        // transform: translateX(900px);
        // opacity: 0;
        transition: all .3s ease-out;
      }

      @media (max-width: 1080px) {
        
      div.section_content{
        
        width: 80%;	
        margin-right: 10%;
        padding: 80px 0;
      }
      div.section_content h2 {
        margin-top: 0;
      }
      
      }

/************** Sections Image**********************' */
      
div.image div.clear_fix{
  clear: both;
}

img.content_image {
  width: 60%;
  position: absolute;
  left: 0%;
  z-index: -1;
  margin-top: -300px;
  transition: 0.3s;
  box-shadow: 5px 5px 10px -4px rgba(0, 0, 0, 0.15);
}
@media (max-width: 1440px) {
 img.content_image {
  width: 70%;
    
  }
}

@media (max-width: 1250px) {
  img.content_image {
    width: 70%;
      
    }
 }

@media (max-width: 1080px) {
 img.content_image {
    position: absolute;
    top: -220px;
    margin: 0;
    float: left;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
  }
}

@media (max-width: 750px) {
   img.content_image {
    top: -180px;
  }
}

@media (max-width: 600px) {
   img.content_image {
    position: absolute;
    top: -140px;
  }
}
@media (max-width: 500px) {
   img.content_image {
    position: absolute;
    top: -100px;
  }
}

@media (max-width: 470px) {
   img.content_image {
    position: absolute;
    top: -110px;
  }
}

@media (max-width: 320px) {
 img.content_image {
    position: absolute;
    top: -70px;
  }
}
    `}</style>
  </section>
);

export default FutureLayers;
