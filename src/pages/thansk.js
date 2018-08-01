import React from "react";
import Link from "gatsby-link";
import { Button } from "../components/elements/elements";

const Thanks = () => (
  <div
    style={{
      background: "#F4F6F6",
      width: "100%",
      height: "100vh"
    }}
  >
    <div
      className="content"
      style={{
        width: "40%",
        height: "300px",
        background: "#EEEEEE",
        display: "block",
        margin: "0 auto",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "25px 80px"
      }}
    >
      <div className="content">
        <h1
          style={{
            color: "#414546"
          }}
        >
          Thanks
        </h1>
        <p
          style={{
            color: "#414546"
          }}
        >
          we have recived your email, Have a good day
        </p>
      </div>
      <Button style={{}}>
        <a
          href="/da/"
          style={{
            float: "left",
            left: "0",
            transform: "translateX(0)"
          }}
        >
          Back to website
          <span
            style={{
              transition: "all 0.3s"
            }}
          >
            &#187;
          </span>
        </a>
      </Button>
    </div>
  </div>
);

export default Thanks;
