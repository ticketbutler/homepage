import React from "react";
import { Button } from "./elements/elements";
// import { withShapes } from "./with_shapes";
import { makeSectionStyles } from "../styles";

// TODO: Add shapes
const ContentImage = ({
  imagePosition = "LEFT",
  heading,
  text,
  button_text,
  image,
  image_alt,
  button_link
}) => {
  let itemWidth;
  switch (imagePosition) {
    case "TOP":
    case "BOTTOM":
      itemWidth = 920;
      break;
    case "LEFT":
    case "RIGHT":
      itemWidth = 680;
      break;
  }
  const sectionStyles = makeSectionStyles(itemWidth, imagePosition);
  function Image() {
    let background;
    switch (imagePosition) {
      case "RIGHT":
        background = (
          <div
            css={{
              position: "absolute",
              backgroundColor: "#326de9",
              width: "95%",
              height: "80%",
              bottom: "-5%",
              left: "-5%",
              zIndex: -1
            }}
          />
        );
        break;
      case "TOP":
        background = (
          <div
            css={{
              position: "absolute",
              width: "110%",
              height: "110%",
              top: 0,
              left: 0,
              background:
                "linear-gradient(to bottom right, #326de9, 50%, #1dc9cc, 50%)"
            }}
          />
        );
        break;
      default:
        background = null;
    }
    return (
      <div
        css={[
          sectionStyles.item,
          imagePosition === "BOTTOM" && { maxWidth: "1400px" }
        ]}
      >
        <img
          alt={image_alt}
          src={image}
          css={{
            objectFit: "contain",
            maxWidth: "100%",
            height: "100%"
          }}
        />
        {background}
      </div>
    );
  }
  function Content() {
    return (
      <div css={sectionStyles.item}>
        <h2 css={sectionStyles.heading}>{heading}</h2>
        <p css={sectionStyles.text}>{text}</p>
        {button_text &&
          button_text.length > 0 &&
          (button_link === "#contact" ? (
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
          ))}
      </div>
    );
  }
  let items = [<Image key="image" />, <Content key="content" />];
  if (imagePosition === "BOTTOM") {
    items.reverse();
  }
  function Background() {
    switch (imagePosition) {
      case "BOTTOM":
        return (
          <div
            css={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              zIndex: -3,
              transform: "skewY(-3deg)",
              background:
                "rgba(0, 0, 0, 0) linear-gradient(295.21deg, rgb(50, 109, 233) 0%, rgb(126, 82, 232) 100%) repeat scroll 0% 0% / cover"
            }}
          />
        );
      default:
        return null;
    }
  }
  return (
    <div
      css={{
        position: "relative"
      }}
    >
      <div css={sectionStyles.container}>{items}</div>
      <Background />
    </div>
  );
};

export default ContentImage;
