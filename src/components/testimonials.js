import React from "react";
import { Transition } from "react-transition-group";
import { mq } from "../styles";

function Testimonials({ items }) {
  let slides = items.map((item, index) => (
    <div
      key={index}
      css={{
        width: "100%",
        height: "100%",
        padding: "80px 0"
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
          textAlign: "justify"
        }}
      >
        {item.text}
      </p>
      <span
        css={{
          display: "block",
          marginLeft: "50%",
          transform: "translateX(-50%)",
          height: "29px;	width: 500px",
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
            currentIndex:
              (state.currentIndex - 1 + items.length) % items.length,
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
  return (
    <div
      style={{
        height: 700,
        position: "relative",
        width: "100%"
      }}
    >
      {items.map((item, i) => {
        return (
          <Transition
            key={i}
            in={i === currentSlideIndex}
            timeout={transitionDuration}
          >
            {state => {
              let transitionStyles = {
                entering: {
                  transform: "translateX(0%)"
                },
                entered: {
                  transform: "translateX(0)"
                },
                exiting: {
                  transform: "translateX(-100%)",
                  opacity: 0
                },
                exited: {
                  transform: "translateX(100%)",
                  opacity: 0
                }
              };
              return (
                <div
                  style={{
                    minWidth: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    transition: transitionDuration + "ms all",
                    ...transitionStyles[state]
                  }}
                >
                  <div>
                    <button
                      onClick={() => {
                        dispatch({ type: "NEXT" });
                      }}
                    >
                      {" "}
                      next{" "}
                    </button>
                    <button
                      onClick={() => {
                        dispatch({ type: "PREVIOUS" });
                      }}
                    >
                      {" "}
                      prev{" "}
                    </button>
                  </div>
                  {item}
                </div>
              );
            }}
          </Transition>
        );
      })}
    </div>
  );
}

// const Slider_section = ({ items }) => {
//   let slides = items.map((item, index) => (
//     <div
//       key={index}
//       css={{
//         width: "100%",
//         height: "100%",
//         padding: "80px 0",
//         backgroundColor: "rgb(246, 251, 255)"
//       }}
//     >
//       <img
//         css={{
//           display: "block",
//           width: "200px",
//           height: "200px",
//           borderRadius: "50%",
//           objectFit: "cover",
//           marginBottom: "40px",
//           margin: "0 auto"
//         }}
//         src={item.image}
//         style={{ objectFit: "cover" }}
//       />
//       <p
//         css={{
//           display: "block",
//           marginLeft: "50%",
//           transform: "translateX(-50%)",
//           width: "769px;	color: #868E99",
//           fontFamily: "Montserrat",
//           fontSize: "24px",
//           lineHeight: "38px",
//           textAlign: "justify"
//         }}
//       >
//         {item.text}
//       </p>
//       <span
//         css={{
//           display: "block",
//           marginLeft: "50%",
//           transform: "translateX(-50%)",
//           height: "29px;	width: 500px",
//           color: "#333F52",
//           fontFamily: "Hind",
//           fontSize: "18px",
//           fontWeight: "bold",
//           lineHeight: "29px",
//           textAlign: "center"
//         }}
//       >
//         {item.about}
//       </span>
//       <img
//         css={{
//           display: "block",
//           textAlign: "center",
//           fontSize: "25px",
//           opacity: ".7",
//           margin: " 0 auto",
//           marginTop: "30px",
//           marginBottom: "20px",
//           width: "200px"
//         }}
//         src={item.logo}
//       />
//     </div>
//   ));
//   return (
//     <section
//       css={{
//         padding: "100px 0",
//         width: "90%",
//         margin: "0 auto",
//         height: "850px",
//         position: "relative",
//         marginBottom: "50px",
//         marginTop: "150px"
//       }}
//     >
//       <img
//         css={{
//           position: "absolute",
//           width: "300px",
//           left: "10%",
//           top: "-20px",
//           zIndex: "100",
//           opacity: 1
//         }}
//         src={require("../img/quote.png")}
//       />
//       <Slider
//         infinite="true"
//         dots="true"
//         slidesToShow="1"
//         slidesToScroll=" 1"
//         nextArrow={<div css={{ backgroundColor: "grey" }}>></div>}
//         prevArrow={<div>></div>}
//         speed="500"
//         swipeToSlide="true"
//         cssEase="linear"
//       >
//         {" "}
//         {slides}{" "}
//       </Slider>
//     </section>
//   );
// };

export default Testimonials;
