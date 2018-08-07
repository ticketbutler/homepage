import React from "react";

import { Button, SectionText, LeftImage } from "./elements/elements";

import { CircleShape, SquareShape } from "./elements/shapes";

const FutureImageIeft = ({
  heading,
  text,
  button_text,
  image,
  image_alt,
  button_link
}) => (
  <section className="container future_image_left">
    <div className="section_image_left">
      <LeftImage id="left-box">
        <figure>
          <img className="device" alt={image_alt} src={image} />
        </figure>
      </LeftImage>
    </div>

    <div className="FIL_section">
      <SectionText>
        <h2
          style={{
            textAlign: "right",
            float: "right",
            display: "block"
          }}
        >
          {heading}
        </h2>
        <p
          style={{
            textAlign: "right",
            float: "right",
            display: "block"
          }}
        >
          {text}
        </p>
        <Button className="right">
          <a
            href={button_link}
            style={{
              right: "0",
              transform: "translateX(0)"
            }}
          >
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
      </SectionText>
    </div>
    <div className="shape_pos_square_1 Future_image_left_section">
      <SquareShape>
        <div className="shape">
          <span id="first" />
          <span id="second" />
        </div>
      </SquareShape>
    </div>
    <div className="shape_pos_square_2 Future_image_left_section">
      <SquareShape>
        <div className="shape">
          <span id="first" />
          <span id="second" />
        </div>
      </SquareShape>
    </div>
    <div className="shape_pos_circle Future_image_left_section">
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

      div.clear-fix {
        clear: both;
      }

      section.future_image_left {
        padding: 110px;
        padding-left: 0;
        width: 100%;
        position: relative;
      }

      @media (max-width: 1080px) {
        section.future_image_left {
          padding: 70px 0;
        }
      }
      @media (max-width: 768px) {
        section.future_image_left {
          padding: 50px 0;
        }
      }

      @media (max-width: 600px) {
        section.future_image_left {
          padding: 0px;
        }
      }

      @media (max-width: 376px) {
        section.future_image_left {
          padding: 0px;
        }
      }

      /** ******************************************************
      Shape Position
      **********************************************************/
      /**sqare */
      div.shape_pos_square_1.Future_image_left_section {
        position: absolute;
        top: 10%;
        left: 80%;
      }

      div.shape_pos_square_2.Future_image_left_section {
        position: absolute;
        top: 30%;
        left: 50%;
      }
      div.shape_pos_square_2.Future_image_left_section div.shape span#second {
        border: 4px solid #dd52e8;
      }
       {
        position: absolute;
        top: 30%;
        left: 50%;
      }

      div.shape_pos_circle.Future_image_left_section {
        position: absolute;
        top: 80%;
        left: 20%;
        z-index: 100;
      }

      //   @media (max-width: 1200px) {
      //     div.shape_pos_circle.Future_image_left_section{
      //     bottom: 20%;
      //     left: 35%;
      //     }
      // }

      @media (max-width: 1080px) {
        /**sqare */
        div.shape_pos_square_1.Future_image_left_section {
          position: absolute;
          top: 10%;
          left: 85%;
        }

        div.shape_pos_square_2.Future_image_left_section {
          position: absolute;
          top: 40%;
          left: 30%;
        }

        div.shape_pos_circle.Future_image_left_section {
          position: absolute;
          top: 90%;
          left: 80%;
          z-index: 100;
        }
      }

      @media (max-width: 600px) {
        /**sqare */
        div.shape_pos_square_1.Future_image_left_section {
          position: absolute;
          top: 7%;
          left: 90%;
        }

        div.shape_pos_square_2.Future_image_left_section {
          position: absolute;
          top: 38%;
          left: 10%;
        }

        div.shape_pos_circle.Future_image_left_section {
          position: absolute;
          top: 90%;
          left: 80%;
          z-index: 100;
        }
      }

      @media (max-width: 370px) {
        /**sqare */
        div.shape_pos_square_1.Future_image_left_section {
          position: absolute;
          top: 7%;
          left: 90%;
        }

        div.shape_pos_square_2.Future_image_left_section {
          position: absolute;
          top: 33%;
          left: 10%;
        }

        div.shape_pos_circle.Future_image_left_section {
          position: absolute;
          top: 95%;
          left: 85%;
          z-index: 100;
        }
      }

      /** ******************************************************
      Image Box Styling
      **********************************************************/
      .section_image_left {
        display: inline-block;
        float: left;
        width: 50%;
        position: relative;
        transition: all 0.3s ease-out;
      }

      @media (max-width: 1080px) {
        .section_image_left {
          display: block;
          width: 100%;
        }
      }

      /** ******************************************************
      Content
      **********************************************************/
      div.FIL_section {
        width: 50%;
        float: right;
      }

      @media (max-width: 1080px) {
        div.FIL_section {
          width: 100%;
          text-align: center !important;
        }
      }
    `}</style>
  </section>
);

export default FutureImageIeft;
