import React from "react";
import { mq } from "../styles";

function makeRelativeAbsolutePosition(xPercentage, yPercentage) {
  return {
    position: "abosolute",
    left: xPercentage + "%",
    bottom: yPercentage + "%"
  };
}

export function withShapes(Component, positions) {
  return function Shapes(props) {
    return (
      <div css={{ position: "relative" }}>
        <SquareShape style={makeRelativeAbsolutePosition(...positions[0])} />
        <CircleShape style={makeRelativeAbsolutePosition(...positions[1])} />
        <Component {...props} />
      </div>
    );
  };
}

export const SquareShape = ({ style = {} }) => {
  const squareStyle = {
    width: "80%",
    height: "80%",
    position: "absolute",
    transform: "scaleY(-1)",
    opacity: 0.8,
    border: "4px solid #7e52e8",
    [mq(600)]: {
      borderWidth: "2px"
    }
  };
  return (
    <div
      css={[
        {
          width: "42px",
          height: "42px",
          margin: "1px",
          [mq(600)]: {
            width: "36px",
            height: "36px"
          }
        },
        style
      ]}
    >
      <span
        css={[
          {
            top: 0,
            right: 0,
            zIndex: -1
          },
          squareStyle
        ]}
      />
      <span
        css={[
          {
            bottom: 0,
            left: 0,
            zIndex: -2
          },
          squareStyle
        ]}
      />
    </div>
  );
};

export const CircleShape = ({ style = {} }) => {
  const circleStyle = {
    width: "80%",
    height: "80%",
    position: "absolute",
    borderRadius: "50%",
    transform: "scaleY(-1)",
    [mq(600)]: {
      opacity: 0.5
    }
  };
  return (
    <div
      css={[
        {
          zIndex: -1,
          width: "42px",
          height: "42px",
          margin: "1px",
          [mq(600)]: {
            width: "36px",
            height: "36px"
          }
        },
        style
      ]}
    >
      <span
        css={[
          circleStyle,
          {
            top: 0,
            zIndex: -1,
            backgroundColor: "#dd52e8",
            border: "none",
            left: 0
          }
        ]}
      />
      <span
        css={[
          circleStyle,
          {
            bottom: 0,
            left: "20%",
            zIndex: -2,
            backgroundColor: "#326de9",
            border: "none",
            opacity: 0.54
          }
        ]}
      />
    </div>
  );
};
