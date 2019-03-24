export function mq(breakpoint) {
  return "@media (max-width: " + breakpoint + "px)";
}

export function makeSectionStyles(itemWidth) {
  let breakpoint = itemWidth * 2;
  return {
    container: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      [mq(breakpoint)]: {
        flexDirection: "column",
        alignItems: "center"
      }
    },
    heading: {
      fontSize: "42px",
      lineHeight: "52px",
      margin: "15px 0",
      color: "#333f52",
      fontFamily: "Hind",
      fontWeight: "bold",
      [mq(breakpoint)]: {
        fontSize: "32px",
        lineHeight: "38px",
        textAlign: "center"
      }
    },
    text: {
      margin: "15px 0",
      fontSize: "24px",
      lineHeight: 1.5,
      color: "#6c7582",
      [mq(breakpoint)]: {
        fontSize: "18px",
        lineHeight: 1.4,
        textAlign: "center"
      }
    },
    item: {
      objectFit: "contain",
      width: "100%",
      maxWidth: itemWidth + "px",
      padding: "20px"
    }
  };
}
