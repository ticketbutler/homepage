import React, { useState } from "react";
import { Button } from "./elements/elements";
// import { withShapes } from "./with_shapes";
import { makeSectionStyles } from "../styles";
import { CancelIcon, PlayIcon } from "./elements/icons";

// TODO: Add shapes
const ContentImage = ({
  imagePosition = "LEFT",
  heading,
  text,
  button_text,
  image,
  image_alt,
  button_link,
  video
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
            height: "auto"
          }}
        />
        {background}
      </div>
    );
  }
  function Video() {
    const [isModalOpen, toogleModal] = useState(false);
    function Modal() {
      return (
        <div
          style={{
            zIndex: 100,
            top: 0,
            display: "flex",
            flexDirection: "column",
            transition: "all 200ms",
            ...(isModalOpen
              ? {
                  opacity: 1,
                  visibility: "visible"
                }
              : {
                  opacity: 0,
                  visibility: "hidden"
                })
          }}
        >
          {" "}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "#10234D",
              opacity: 0.3,
              zIndex: 100
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              top: "53%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              transition: "500ms opacity",
              zIndex: 100,
              width: "80%",
              margin: "o auto",
              height: "auto"
            }}
          >
            <span
              style={{
                possition: "fixed",
                textAlign: "right",
                width: "110%",
                color: "white",
                fontSize: 25,
                margin: "10px 10px 0px 0px"
              }}
              onClick={() => toogleModal(false)}
            >
              {" "}
              <CancelIcon />
            </span>
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%" /* 16:9 */,

                height: 0
              }}
            >
              {isModalOpen && (
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                  }}
                  id="ytplayer"
                  type="text/html"
                  src={video + "?autoplay=1"}
                  frameBorder="0"
                  webkitAllowFullScreen
                  mozallowfullscreen
                  allowFullScreen
                  allow="autoplay; encrypted-media"
                />
              )}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          ":hover img": {
            transform: "scale(1.05)",
            transitionTimingFunction: "ease-in",
            transitionDuration: ".5s"
          },
          ":hover button": {
            background:
              " linear-gradient(to right, rgb(40, 216, 167), rgb(29, 201, 202))",
            transition: "color .15s,background .25s",
            transitionTimingFunction: "ease-in",
            borderRadius: "50px",
            color: "white"
          },
          ":hover .overlay": {
            opacity: 1,
            transition: "opacity 1.5s"
          }
        }}
      >
        <div
          css={{
            position: "relative"
          }}
        >
          <img
            alt={image_alt}
            src={image}
            css={{
              cursor: "pointer",
              display: "block",
              objectFit: "contain",
              maxWidth: "100%",
              height: "auto"
            }}
          />
          <div
            className="overlay"
            onClick={() => toogleModal(true)}
            css={{
              position: "absolute",
              top: "0px",
              bottom: "0px",
              left: "0px",
              right: "0px",
              height: "100%",
              width: "100%",
              opacity: 0,
              transition: ".3s ease"
            }}
          >
            <div
              css={{
                position: "absolute",
                width: "30%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",

                textAlign: "center"
              }}
            >
              {" "}
              <PlayIcon />{" "}
            </div>
          </div>
        </div>
        <button
          className="video-poster"
          onClick={() => toogleModal(!isModalOpen)}
          css={{
            color: "#002b64",
            borderRadius: "50px",
            marginTop: "12px",
            fontSize: "18px",
            border: "none",
            padding: "10px 20px",
            width: "30%",
            margin: "20px auto",
            cursor: "pointer",
            lineHeight: "24px",
            fontWeight: "bold"
          }}
        >
          {" "}
          &#9654; Watch video
        </button>
        <Modal isOpen={isModalOpen} toogle={toogleModal} />
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
  let Media;
  switch (true) {
    case Boolean(video):
      Media = Video;
      break;
    case Boolean(image):
      Media = Image;
      break;
    default:
      Media = null;
  }
  let items = [<Media key="media" />, <Content key="content" />];
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
