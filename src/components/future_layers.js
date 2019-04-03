import React from "react";
import { mq } from "../styles";
import { Button } from "./elements/elements";
import { SmallTriangle } from "./elements/shapes";

const FutureLayers = ({
  heading,
  text,
  button_text,
  image,
  image_alt,
  button_link
}) => (
  <section
    css={{
      width: "100%",
      position: "relative",
      padding: "110px 0",
      paddingLeft: 0,
      zIndex: 1,
      marginTop: "330px",
      background: "linear-gradient(311.59deg, #28d8a7 0%, #1dc9ca 100%)"
    }}
  >
    <img
      alt={image_alt}
      src={image}
      css={{
        width: "60%",
        position: "absolute",
        left: "0%",
        zIndex: "-1",
        marginTop: "-300px",
        marginLeft: "50px",
        transition: "0.3s",
        boxShadow: "5px 5px 10px -4px rgba(0, 0, 0, 0.15)",
        [mq(1000)]: {
          position: "absolute",
          top: "-220px",
          margin: 0,
          float: "left",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%"
        },
        [mq(700)]: {
          width: "100%"
        },
        [mq(400)]: {
          top: "-60px"
        }
      }}
    />

    <div
      css={{
        height: "auto",
        width: "55%",
        margin: "30px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 0px 12px -4px rgba(0,0,0,0.35)",
        position: "relative",
        zIndex: 1001,
        float: "right",
        padding: "80px",
        transition: "all .3s ease-out",
        [mq(1000)]: {
          width: "80%",
          margin: "0px",
          marginRight: "10%",
          [mq(750)]: {
            marginRight: "0px",
            width: "100%",
            padding: "30px"
          }
        }
      }}
    >
      <div>
        <h2
          css={{
            fontSize: "46px",
            lineHeight: "54px",
            margin: "15px 0",
            color: "#333f52",
            fontFamily: "Hind",
            fontWeight: "bold",
            [mq(1350)]: {
              fontSize: "32px",
              lineHeight: "38px",
              textAlign: "center"
            }
          }}
        >
          {heading}
        </h2>
        <p
          css={{
            margin: "15px 0",
            fontSize: "24px",
            lineHeight: 1.5,
            color: "#6c7582",
            [mq(1350)]: {
              fontSize: "18px",
              lineHeight: 1.6
            }
          }}
        >
          {text}
        </p>
        {button_text &&
          button_text.length > 0 && (
            <div css={{ display: "flex", justifyContent: "center" }}>
              <Button to={button_link}>{button_text} </Button>
            </div>
          )}
      </div>
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
  </section>
);

export default FutureLayers;
