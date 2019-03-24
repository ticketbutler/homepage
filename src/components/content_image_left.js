import React from "react";
import { Button } from "./elements/elements";
import { CircleShape, SquareShape } from "./elements/shapes";
import { withWindow } from "../components/helpers";
import { makeSectionStyles, mq } from "../styles";

const ContentImageLeft = ({
  heading,
  text,
  button_text,
  image,
  image_alt,
  button_link
}) => {
  const itemWidth = 590;
  const sectionStyles = makeSectionStyles(590);
  return (
    <div css={sectionStyles.container}>
      <img alt={image_alt} src={image} css={sectionStyles.item} />
      <div
        css={[
          sectionStyles.item,
          {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            [mq(itemWidth * 2)]: {
              alignItems: "center"
            }
          }
        ]}
      >
        <h2 css={[{ textAlign: "right" }, sectionStyles.heading]}>{heading}</h2>
        <p css={[{ textAlign: "right" }, sectionStyles.text]}>{text}</p>
        {button_text && button_text.length > 0 && button_link === "#contact" ? (
          <Button to={button_link}>{button_text}</Button>
        ) : (
          <a
            href={button_link}
            target="_blank"
            rel="noopener noreferrer"
            css={{ textDecoration: "none" }}
          >
            <Button>{button_text}</Button>
          </a>
        )}
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
          <div
            className="shape"
            style={{
              right: 200
            }}
          >
            <span id="first" />
            <span id="second" />
          </div>
        </SquareShape>
      </div>
      <div className="shape_pos_circle Future_image_left_section">
        <CircleShape>
          <div
            style={{
              top: 70
            }}
            className="shape"
          >
            <span id="first" />
            <span id="second" />
          </div>
        </CircleShape>
      </div>
      <div className="clear-fix" />
      <style jsx>{`
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

      }
    `}</style>
    </div>
  );
};

export default withWindow(ContentImageLeft);
