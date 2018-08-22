import React from "react";
import { Button, SectionText, RightImage } from "./elements/elements";

const FutureImageRight = ({
  heading,
  text,
  image,
  image_alt,
  button_text,
  button_link
}) => {
  return (
    <section className="Future_image_right">
      <div className="right_image_section">
        <RightImage id="right-box">
          <img alt={image_alt} src={image} />
          <div className="first-box green" />
          <div className="second-box blue" />
          <div className="clear" />
        </RightImage>
      </div>

      <div className="FIR_section">
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
              <Button className="right">
                <a
                  href={button_link}
                  style={{
                    right: "100%",
                    transform: "translateX(100%)"
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
            )}
        </SectionText>
      </div>

      <div className="clear-fix" />
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          overflow: none;
        }

        div.clear-fix {
          clear: both;
        }

        div.clear {
          clear: both;
        }

        section.Future_image_right {
          padding: 110px;
          padding-right: 0;
          position: relative;
          margin-bottom: 100px;
        }

        @media (max-width: 1080px) {
          section.Future_image_right {
            padding: 110px 0;
          }
        }
        @media (max-width: 768px) {
          section.Future_image_right {
            padding: 80px 0;
          }
        }

        @media (max-width: 600px) {
          section.Future_image_right {
            padding: 40px 0;
          }
        }

        @media (max-width: 376px) {
          section.Future_image_right {
            padding: 50px 0;
          }
        }

        /** ******************************************************
      Image Right style
      **********************************************************/

        div.right_image_section {
          float: right;
          width: 50%;
          display: inline-block;
          position: relative;
          transition: all 0.3s ease-out;
        }

        @media (max-width: 1080px) {
          div.right_image_section {
            display: block;
            width: 100%;
          }
        }

        @media (max-width: 1080px) {
          div.right_image_section {
            margin-top: 50px;
            height: auto;
            padding: 0 20px;
          }
        }

        /*********************************************************************
         Contetn Styling
         ***********************************************************************/
        div.FIR_section {
          width: 50%;
        }

        @media (max-width: 1080px) {
          div.FIR_section {
            width: 100%;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
};
export default FutureImageRight;
