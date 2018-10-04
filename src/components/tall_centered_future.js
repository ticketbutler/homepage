import React from "react";

import { Button, SectionText } from "./elements/elements";
import { SmallTriangle, SquareShape } from "./elements/shapes";

const TallCenteredFuture = ({
  heading,
  text,
  button_text,
  image,
  image_alt,
  button_link
}) => (
  <section>
    <div
      style={{
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        zIndex: "-3",
        position: "absolute",
        transform: "skewY(-3deg)",
        background: "linear-gradient(295.21deg, #326de9 0%, #7e52e8 100%)",
        backgroundSize: "cover",
        textalign: "center",
        marginTop: "50px"
      }}
    />
    <div className="TCF_section">
      <SectionText style={{ padding: 0 }}>
        <h2>{heading}</h2>
        <p>{text}</p>
        <img alt={image_alt} src={image} />
        {button_text &&
          button_text.length > 0 && (
            <Button
              to={button_link}
              style={{
                margin: "0 auto"
              }}
            >
              {button_text}
            </Button>
          )}
      </SectionText>
    </div>

    <div className="shape_pos_small_square tall_image_section">
      <SquareShape>
        <div className="shape">
          <span id="first" />
          <span id="second" />
        </div>
      </SquareShape>
    </div>

    <div className="shape_pos_small_triangle tall_image_section">
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

      .clear-fix {
        clear: both;
      }

      section {
        width: 100%;
        position: relative;
        bacground: #ccc;
        padding-top: 110px;
        padding-bottom: 110px;
      }

      @media (max-width: 768px) {
        section {
          padding: 80px;
        }
      }

      @media (max-width: 600px) {
        section {
          padding: 40px;
        }
      }

      @media (max-width: 376px) {
        section {
          padding: 50px 20px;
        }
      }

      /** Shape*/
      div.shape_pos_small_triangle.tall_image_section {
        position: absolute;
        top: 19%;
        left: 10%;
        z-index: 100;
      }

      div.shape_pos_small_square.tall_image_section {
        position: absolute;
        top: 19%;
        left: 80%;
        z-index: 100;
      }

      div.shape_pos_small_square.tall_image_section div.shape span#first {
        border: 4px solid #fff;
      }

      @media (max-width: 1080px) {
        div.shape_pos_small_triangle.tall_image_section {
          top: 10%;
          left: 5%;
        }
        div.shape_pos_small_square.tall_image_section {
          position: absolute;
          top: 19%;
          left: 80%;
          z-index: 100;
        }
      }
      @media (max-width: 600px) {
        div.shape_pos_small_triangle.tall_image_section {
          top: 10%;
          left: 3%;
        }
        div.shape_pos_small_square.tall_image_section {
          position: absolute;
          top: 20%;
          left: 85%;
          z-index: 100;
        }
      }

      /** Content*/
      div.TCF_section {
        text-align: center;
      }
      div.TCF_section h2 {
        color: #fff;
        display: block;
        width: 70%;
        margin: 40px auto;
      }
      div.TCF_section p {
        color: #fff;
        width: 60%;
        margin: 0px auto 50px;
      }

      div.TCF_section img {
        width: 100%;
      }

      @media (max-width: 1080px) {
        div.TCF_section h2 {
          width: 100%;
        }
        div.TCF_section p {
          width: 100%;
        }
      }

      @media (max-width: 600px) {
        div.TCF_section h2 {
          margin-top: 5px !important;
        }
      }
    `}</style>
  </section>
);

export default TallCenteredFuture;
