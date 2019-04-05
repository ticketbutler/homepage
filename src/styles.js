export function mq(breakpoint) {
  return "@media (max-width: " + breakpoint + "px)";
}

export function makeSectionStyles(itemWidth, imagePosition) {
  let breakpoint;
  switch (imagePosition) {
    case "RIGHT":
    case "LEFT":
      breakpoint = itemWidth * 2;
      break;
    case "TOP":
    case "BOTTOM":
      breakpoint = itemWidth;
  }
  let mediaQuery = mq(breakpoint);
  let textStyles = [
    imagePosition === "BOTTOM" && { color: "white", textAlign: "center" },
    imagePosition === "LEFT" && { textAlign: "left" },
    {
      [mediaQuery]: {
        textAlign: "center"
      }
    }
  ];
  let container = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10vh 0",
    maxWidth: "1800px",
    margin: "0 auto",
    [mediaQuery]: {
      flexDirection: "column",
      alignItems: "center"
    }
  };
  let item = {
    position: "relative",
    width: "100%",
    maxWidth: itemWidth + "px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    [mq(itemWidth * 2)]: {
      alignItems: "center"
    }
  };
  switch (imagePosition) {
    case "RIGHT":
      container.flexDirection = "row-reverse";
      break;
    case "LEFT":
      item.alignItems = "flex-end";
      break;
    case "BOTTOM":
    case "TOP":
      container.flexDirection = "column";
      item.alignItems = "center";
      break;
    default:
      break;
  }
  return {
    container,
    heading: [
      {
        fontSize: "46px",
        lineHeight: "54px",
        margin: "15px 0",
        color: "#333f52",
        fontFamily: "Hind",
        fontWeight: "bold",
        [mediaQuery]: {
          fontSize: "32px",
          lineHeight: "38px",
          textAlign: "center"
        }
      },
      textStyles
    ],
    text: [
      {
        margin: "15px 10px",
        textAlign: "justify",
        fontSize: "24px",
        lineHeight: 1.5,
        color: "#6c7582",
        marginBottom: "20px",
        [mediaQuery]: {
          fontSize: "18px",
          lineHeight: 1.6
        }
      },
      textStyles
    ],
    item
  };
}
