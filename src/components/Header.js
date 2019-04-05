import React from "react";
import { withWindow } from "../components/helpers";
import { Button } from "./elements/elements";
import { mq } from "../styles";

const Header = ({ heading, text, button_text, button_link, image }) => {
  return (
    <header
      css={{
        padding: "100px 0",
        maxHeight: "100vh",
        width: "100%",
        color: "#fff",
        position: "relative",
        background: `linear-gradient( to right, rgba(50, 109, 233, .9),rgba(126, 82, 232, .9)),url('${image}'),no-repeat center center`,
        clipPath: "polygon(0 0, 100% 0, 100% 95%, 0% 100%)",
        backgroundSize: "cover",
        "@media(max-width: 600px)": {
          padding: 0
        }
      }}
    >
      <div
        css={{
          display: "inline-block",
          width: "100%",
          padding: "100px 0px",
          textAlign: "center",
          position: "relative",
          [mq(600)]: {
            padding: "150px 10px"
          }
        }}
      >
        <h1
          css={{
            margin: "auto",
            display: "block",
            color: "#ffffff",
            fontFamily: "Hind",
            fontWeight: "bold",
            textAlign: "center",
            transition: "all 0.3s",
            width: "100%",
            maxWidth: "900px",
            fontSize: "75px",
            lineHeight: "75px",
            [mq(1020)]: {
              fontSize: "50px"
            },
            [mq(600)]: {
              fontSize: "30px",
              lineHeight: "40px"
            }
          }}
        >
          {heading}
        </h1>
        <p
          css={{
            margin: "auto",
            marginBottom: "37px",
            marginTop: "30px",
            display: "block",
            color: "#ffffff",
            fontFamily: "Montserrat",
            textAlign: "center",
            transition: "all 0.3s",
            fontSize: "25px",
            lineHeight: "35px",
            width: "100%",
            maxWidth: "772px",
            [mq(750)]: {
              fontSize: "15px",
              marginTop: "0px"
            }
          }}
        >
          {text}
        </p>
        <div css={{ display: "flex", justifyContent: "center" }}>
          {button_text &&
            button_text.length > 0 && (
              <Button to={button_link}>{button_text}</Button>
            )}
        </div>
      </div>
    </header>
  );
};
export default withWindow(Header);
