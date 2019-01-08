import React from "react";

const styles = {
  h2: {
    fontSize: "18px",
    color: "#89909B",
    fontWeight: "500"
  }
};

class Form extends React.Component {
  render() {
    return (
      <div>
        <header
          css={{
            height: " 80px",
            width: "px",
            backgroundColor: "#FFFFFF",
            boxShadow: "3px 3px 4px 0 #F0F2F5"
          }}
        >
          <img
            src={"../img/ticketbutler_logo_small.png"}
            css={{ maxWidth: "142px", marginLeft: "38px", marginTop: "30px" }}
          />
        </header>
        <div css={{ marginLeft: "166px", marginTop: "80px" }}>
          <h3 css={{ fontWeight: "600px", fontSize: "18px" }}> STEP 1 OF 2</h3>
          <h1 css={{ fontWeight: "600px", fontSize: "36px" }}>
            Use your brand
          </h1>
          <h2 css={styles.h2}>
            It's all about your business!
            <span css={{ display: "block", paddingTop: "8px" }}>
              Your brand is displayed across the ticketing experience
            </span>
          </h2>

          <div>
            <label
              css={{
                textTransform: "uppercase",
                fontSize: "12px",
                fontWeight: 500,
                color: "#89909B"
              }}
            >
              select a font that goes with your brand
            </label>
            <select value={this.state.value}>
              <option value="courierNew">Courier New</option>
              <option value="georgia">Georgia</option>
              <option value="lucidaConsole">Lucida Console</option>
              <option value="lucidaSansUnicode">Lucida Sans Unicode</option>
              <option value="tahoma">Tahoma</option>
              <option value="timesNewRoman">Times New Roman</option>
              <option value="verdana">Verdana</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
