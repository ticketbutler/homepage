import React from "react";

import { mq } from "../styles";

function Testimonials({ items }) {
  let slides = items.map((item, index) => (
    <div
      key={index}
      css={{
        width: "100%",
        height: "100%",
        padding: "80px 0",
        [mq(900)]: {
          marginLeft: "10%",
          marginRight: "10%"
        }
      }}
    >
      <img
        css={{
          display: "block",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "40px",
          margin: "0 auto"
        }}
        src={item.image}
        style={{ objectFit: "cover" }}
      />
      <p
        css={{
          display: "block",
          marginLeft: "50%",
          padding: "20px",
          transform: "translateX(-50%)",
          maxWidth: "769px",
          width: "100%",
          color: "#868E99",
          fontFamily: "Montserrat",
          fontSize: "24px",
          lineHeight: "38px",
          textAlign: "justify",
          [mq(900)]: {
            fontSize: "15px"
          },
          [mq(400)]: {
            lineHeight: "25px"
          }
        }}
      >
        {item.text}
      </p>
      <span
        css={{
          display: "block",
          marginLeft: "50%",
          transform: "translateX(-50%)",

          width: "100%",
          maxWidth: "500px",
          color: "#333F52",
          fontFamily: "Hind",
          fontSize: "18px",
          fontWeight: "bold",
          lineHeight: "29px",
          textAlign: "center"
        }}
      >
        {item.about}
      </span>
      <img
        css={{
          display: "block",
          textAlign: "center",
          fontSize: "25px",
          opacity: ".7",
          margin: " 0 auto",
          marginTop: "30px",
          marginBottom: "20px",
          width: "200px"
        }}
        src={item.logo}
      />
    </div>
  ));
  return (
    <div
      css={{
        backgroundColor: "rgb(246, 251, 255)",
        position: "relative"
      }}
    >
      <img
        css={{
          position: "absolute",
          width: "300px",
          left: "10%",
          top: "-100px",
          zIndex: "100",
          opacity: 1,
          [mq(1200)]: {
            width: "250px"
          },
          [mq(900)]: {
            width: "200px"
          }
        }}
        src={require("../img/quote.png")}
      />
      <Slider items={slides} autoPlay={true} playSpeed={6000} />
    </div>
  );
}

// TODO: Move this to a shareable place when it needs to be used again
function Slider({
  items,
  autoPlay = false,
  playSpeed = 0,
  transitionDuration = 2000
}) {
  const [{ isPlaying, currentSlideIndex }, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case "NEXT":
        case "PROGRESS":
          return {
            ...state,
            // Go to the next slide if it exists, otherwise go to first slide
            currentSlideIndex: (state.currentSlideIndex + 1) % items.length,
            isPlaying: action.type === "PROGRESS"
          };
        case "PREVIOUS":
          return {
            ...state,
            // Go to the previous slide if it exists, otherwise go to last slide
            currentSlideIndex:
              (state.currentSlideIndex - 1 + items.length) % items.length,
            isPlaying: false
          };
        case "GOTO":
          return {
            ...state,
            currentSlideIndex: action.index,
            isPlaying: false
          };
        default:
          return state;
      }
    },
    {
      currentSlideIndex: 0,
      isPlaying: autoPlay
    }
  );
  React.useEffect(
    () => {
      let switchTimeout;
      if (isPlaying) {
        switchTimeout = setTimeout(() => {
          dispatch({ type: "PROGRESS" });
        }, playSpeed);
      }
      return () => {
        clearInterval(switchTimeout);
      };
    },
    [currentSlideIndex, isPlaying, playSpeed]
  );
  let arrowStyles = {
    color: "rgb(197, 208, 222)",
    fontSize: "100px",
    backgroundColor: "transparent",
    border: "none"
  };

  return (
    <div
      css={{
        height: "800px",
        width: "100%",
        position: "relative",
        [mq(500)]: {
          height: "900px"
        }
      }}
    >
      <div
        css={{
          position: "absolute",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          zIndex: 10,
          top: "50%",
          transform: "translateY(-50%)",
          paddingRight: "5%",
          paddingLeft: "5%",
          [mq(900)]: {
            paddingRight: "0px",
            paddingLeft: "0px"
          }
        }}
      >
        <button
          css={{
            ...arrowStyles
          }}
          onClick={() => {
            dispatch({ type: "PREVIOUS" });
          }}
        >
          {" "}
          &#8249;{" "}
        </button>
        <button
          css={{
            ...arrowStyles
          }}
          onClick={() => {
            dispatch({ type: "NEXT" });
          }}
        >
          {" "}
          &#8250;{" "}
        </button>
      </div>
      <div
        css={{
          position: "absolute",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          zIndex: 10,
          top: "95%",
          transform: "translateY(-95%)"
        }}
      >
        {items.map((item, index) => {
          return (
            <div
              css={{
                height: "10px",
                width: "10px",
                borderRadius: "50%",
                display: "inline-block",
                margin: "10px",
                transition: transitionDuration + "ms all",
                ...(index === currentSlideIndex
                  ? { backgroundColor: "#356be9" }
                  : { backgroundColor: "#bbb" })
              }}
              key={index}
              onClick={() => {
                dispatch({ type: "GOTO", index });
              }}
            />
          );
        })}
      </div>
      {items.map((item, i) => {
        const isNextSlide = (currentSlideIndex + 1) % items.length === i;
        const isPreviousSlide =
          (currentSlideIndex - 1 + items.length) % items.length === i;
        const isCurrentSlide = currentSlideIndex === i;

        return (
          <div
            key={i}
            css={[
              {
                minWidth: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                position: "absolute",
                top: 0,
                left: 0,
                transform: "translate(-100%)"
              },
              isNextSlide && {
                transform: "translate(100%)"
              },
              isCurrentSlide
                ? {
                    transform: "translate(0)"
                  }
                : {
                    visibility: "hidden"
                  },
              (isPreviousSlide || isNextSlide || isCurrentSlide) && {
                transition: transitionDuration + "ms all"
              }
            ]}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default Testimonials;
