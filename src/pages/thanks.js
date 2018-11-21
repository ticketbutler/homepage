import React from "react";
import { Button } from "../components/elements/elements";

class Thanks extends React.Component {
  thank_you_text;
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
          background: "linear-gradient(90deg, #326DE9 0%, #7E52E8 100%)"
        }}
      >
        <div
          style={{
            display: "flex",
            margin: "0 auto",
            background: "white",
            width: "30%",
            borderRadius: 15,
            height: "20%"
          }}
        >
          <p style={{ margin: "0 auto" }}>{thank_you_text}</p>
          <Button to="https://ticketbutler.io" className="left">
            Go back
          </Button>
        </div>
      </div>
    );
  }
}
export default Thanks;
