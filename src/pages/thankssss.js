/* import React from "react";
import { Button } from "../components/elements/elements"; */
import React from "react";
import Helmet from "react-helmet";

import pic11 from "../img/logo_blue.png";

const Success = () => (
  <div>
    <Helmet>
      <title>Success Page</title>
      <meta name="description" content="Success Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Success/Thank You Page</h1>
          </header>
          <span className="image main">
            <img src={pic11} alt="" />
          </span>
          <p>Thank you for contacting us!</p>
        </div>
      </section>
    </div>
  </div>
);

export default Success;

/* class Thanks extends React.Component {
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
 */
