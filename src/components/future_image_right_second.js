import React from "react";

import { SectionText, RightImage } from "./elements/elements";

import { CircleShape, SquareShape } from "./elements/shapes";

const FutureImageRightSecond = ({ heading, text, image, image_alt }) => (
  <section className="Future_image_right_second">
    <div className="section_image_right_second">
      <RightImage id="right-box-2">
        <img alt={image_alt} src={image} />
        <div className="second_shape first-box blue" />
        <div className="second_shape second-box green" />
        <div className="clear-fix" />
      </RightImage>
    </div>

    <div className="FIRS_section">
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
      </SectionText>
    </div>

    <div className="shape_pos_square_1 Future_image_right_second_section">
      <SquareShape>
        <div className="shape">
          <span id="first" />
          <span id="second" />
        </div>
      </SquareShape>
    </div>
    <div className="shape_pos_square_2 Future_image_right_second_section">
      <SquareShape>
        <div className="shape">
          <span id="first" />
          <span id="second" />
        </div>
      </SquareShape>
    </div>
    <div className="shape_pos_circle Future_image_right_second_section">
      <CircleShape>
        <div className="shape">
          <span id="first" />
          <span id="second" />
        </div>
      </CircleShape>
    </div>

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

      section.Future_image_right_second {
        padding: 110px;
        padding-right: 0;
        position: relative;
      }

      @media (max-width: 1080px) {
        section.Future_image_right_second {
          padding: 110px 0;
        }
      }
      @media (max-width: 768px) {
        section.Future_image_right_second {
          padding: 80px 0;
        }
      }

      @media (max-width: 600px) {
        section.Future_image_right_second {
          padding: 40px 0;
        }
      }

      @media (max-width: 376px) {
        section.Future_image_right_second {
          padding: 50px 0;
        }
      }

      /** ******************************************************
      Image Right style
      **********************************************************/

      div.section_image_right_second {
        float: right;
        width: 50%;
        display: inline-block;
        position: relative;
        transition: all 0.3s ease-out;
      }

      @media (max-width: 1080px) {
        div.section_image_right_second {
          display: block;
          width: 100%;
        }
      }

      @media (max-width: 1080px) {
        div.section_image_right_second {
          margin-top: 50px;
          height: auto;
          padding: 0 20px;
        }
      }
      /*********************************************************************
         Contetn Styling
        ***********************************************************************/
      div.FIRS_section {
        width: 50%;
      }

      @media (max-width: 1080px) {
        div.FIRS_section {
          width: 100%;
          text-align: center !important;
        }
      }

      /** ******************************************************
      Shape Position
      **********************************************************/
      /**sqare */
      div.shape_pos_square_1.Future_image_right_second_section {
        position: absolute;
        top: 10%;
        left: 10%;
      }

      div.shape_pos_square_2.Future_image_right_second_section {
        position: absolute;
        top: 30%;
        left: 55%;
      }
      div.shape_pos_square_2.Future_image_right_second_section
        div.shape
        span#second {
        border: 4px solid #dd52e8;
      }
       {
        position: absolute;
        top: 30%;
        left: 50%;
      }

      div.shape_pos_circle.Future_image_right_second_section {
        position: absolute;
        top: 80%;
        left: 20%;
        z-index: 100;
      }

      @media (max-width: 1080px) {
        /**sqare */
        div.shape_pos_square_1.Future_image_right_second_section {
          position: absolute;
          top: 5%;
          left: 10%;
        }

        div.shape_pos_square_2.Future_image_right_second_section {
          position: absolute;
          top: 60%;
          left: 90%;
        }

        div.shape_pos_circle.Future_image_right_second_section {
          position: absolute;
          top: 90%;
          left: 50%;
          z-index: 100;
        }
      }

      @media (max-width: 600px) {
        /**sqare */
        div.shape_pos_square_1.Future_image_right_second_section {
          position: absolute;
          top: 0%;
          left: 10%;
        }

        div.shape_pos_square_2.Future_image_right_second_section {
          position: absolute;
          top: 65%;
          left: 90%;
        }

        div.shape_pos_circle.Future_image_right_second_section {
          position: absolute;
          top: 95%;
          left: 40%;
          z-index: 100;
        }
      }

      @media (max-width: 370px) {
        /**sqare */
        div.shape_pos_square_1.Future_image_right_second_section {
          position: absolute;
          top: 5%;
          left: 10%;
        }

        div.shape_pos_square_2.Future_image_right_second_section {
          position: absolute;
          top: 65%;
          left: 90%;
        }

        div.shape_pos_circle.Future_image_right_second_section {
          position: absolute;
          top: 95%;
          left: 40%;
          z-index: 100;
        }
      }
    `}</style>
  </section>
);

export default FutureImageRightSecond;
