import React from "react";
import { CancelIcon } from "../elements/icons";
import { ClickedOutside } from "@ticketbutler/components";

export const Modal = props => {
  return (
    <div
      style={{
        zIndex: 100,
        top: 0,
        display: "flex",
        flexDirection: "column",
        transition: "all 200ms",
        ...(props.isOpen
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
            width: "105%",
            color: "white",
            fontSize: 25,
            margin: "10px 10px 0px 0px"
          }}
          onClick={() => props.toogle(false)}
        >
          {" "}
          <CancelIcon />
        </span>
        <ClickedOutside
          onClickOutside={() => {
            props.toogle(false);
          }}
        >
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%" /* 16:9 */,

              height: 0
            }}
          >
            {props.isOpen && (
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
                src={props.video + "?autoplay=1"}
                frameBorder="0"
                webkitAllowFullScreen
                mozallowfullscreen
                allowFullScreen
                allow="autoplay; encrypted-media"
              />
            )}
          </div>
        </ClickedOutside>
      </div>
    </div>
  );
};
