import React from "react";

import { SectionText, RightImage } from "./elements/elements";
import { CircleShape, SquareShape, BigTriangle } from "./elements/shapes";

const FutureImageRightNew = ({ heading, text, image, image_alt }) => (
  <section className="Future_image_right_new">
    <div className="RightImageNew">
      <RightImage id="right-box-2">
        <img alt={image_alt} src={image} />
        <div className="blue_box_along" />
        <div className="clear-fix" />
      </RightImage>
    </div>
    <div className="FIRN_sec">
      <SectionText>
        <h2>{heading}</h2>
        <p>{text}</p>
      </SectionText>
    </div>

    <div className="shape_pos_square Future_image_right_new_section">
      <SquareShape>
        <div className="shape">
          <span id="first" />
          <span id="second" />
        </div>
      </SquareShape>
    </div>

    <div className="shape_pos_circle Future_image_right_new_section">
      <CircleShape>
        <div className="shape">
          <span id="first" />
          <span id="second" />
        </div>
      </CircleShape>
    </div>
    <div className="shape_pos_triangle Future_image_right_new_section">
      <BigTriangle>
        <div className="shape">
          <span id="first">&#x25BC;</span>
          <span id="second">&#x25BC;</span>
        </div>
      </BigTriangle>
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

      section.Future_image_right_new {
        padding: 110px;
        padding-right: 0;
        position: relative;
      }

      @media (max-width: 1080px) {
        section.Future_image_right_new {
          padding: 110px 0;
        }
      }
      @media (max-width: 768px) {
        section.Future_image_right_new {
          padding: 80px 0;
        }
      }

      @media (max-width: 600px) {
        section.Future_image_right_new {
          padding: 40px 0;
        }
      }

      @media (max-width: 376px) {
        section.Future_image_right_new {
          padding: 50px 0;
        }
      }

      /** ******************************************************
      Shape Position
      **********************************************************/
      /**sqare */
      div.shape_pos_square.Future_image_right_new_section {
        position: absolute;
        top: 10%;
        left: 10%;
      }

      div.shape_pos_circle.Future_image_right_new_section {
        position: absolute;
        top: 90%;
        left: 40%;
      }

      div.shape_pos_triangle.Future_image_right_new_section {
        position: absolute;
        top: 45%;
        left: 60%;
        z-index: 100;
      }

      @media (max-width: 1200px) {
        div.shape_pos_circle.Future_image_right_new_section {
          bottom: 20%;
          left: 35%;
        }
      }

      @media (max-width: 1080px) {
        div.shape_pos_square.Future_image_right_new_section {
          top: 55%;
          left: 8%;
        }
        div.shape_pos_circle.Future_image_right_new_section {
          top: 90%;
          left: 70%;
        }

        div.shape_pos_triangle.Future_image_right_new_section {
          position: absolute;
          top: 20%;
          left: 60%;
        }
      }

      @media (max-width: 600px) {
        div.shape_pos_square.Future_image_right_new_section {
          top: 64%;
          left: 0%;
        }
        div.shape_pos_circle.Future_image_right_new_section {
          top: 95%;
          left: 75%;
        }

        div.shape_pos_triangle.Future_image_right_new_section {
          top: 10%;
          left: 70%;
        }
      }

      @media (max-width: 370px) {
        div.shape_pos_square.Future_image_right_new_section {
          top: 57%;
          left: -2%;
        }
        div.shape_pos_circle.Future_image_right_new_section {
          top: 93%;
          left: 65%;
        }

        div.shape_pos_triangle.Future_image_right_new_section {
          top: 15%;
          left: 55%;
        }
      }

      /** ******************************************************
      Image Right style
      **********************************************************/
      div.RightImageNew {
        float: right;
        width: 50%;
        display: inline-block;
        position: relative;
        transition: all 0.3s ease-out;
      }

      @media (max-width: 1080px) {
        div.RightImageNew {
          display: block;
          width: 100%;
        }
      }

      @media (max-width: 1080px) {
        div.RightImageNew {
          margin-top: 50px;
          height: auto;
          padding: 0 20px;
        }
      }

      /** ******************************************************
      Contetn style
      **********************************************************/
      div.FIRN_sec {
        width: 50%;
      }

      @media (max-width: 1080px) {
        div.FIRN_sec {
          width: 100%;
          text-align: center !important;
        }
      }
    `}</style>
  </section>
);

export default FutureImageRightNew;
