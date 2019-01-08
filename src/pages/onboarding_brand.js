import React from "react";

const styles = {
  h2: {
    fontSize: 18,
    color: "#89909B",
    fontWeight: "500"
  }
};

class Form extends React.Component {
  render() {
    return (
      <div>
        <header
          style={{
            height: 80,
            width: 1440,
            backgroundColor: "#FFFFFF",
            boxShadow: "3px 3px 4px 0 #F0F2F5"
          }}
        >
          <img
            src={"../img/ticketbutler_logo_small.png"}
            style={{ maxWidth: 142, marginLeft: 38, marginTop: 30 }}
          />
        </header>
        <div style={{ marginLeft: 166, marginTop: 80 }}>
          <h3 style={{ fontWeight: 600, fontSize: 18 }}> STEP 1 OF 2</h3>
          <h1 style={{ fontWeight: 600, fontSize: 36 }}>Use your brand</h1>
          <h2 style={styles.h2}>
            It's all about your business!
            <span style={{ display: "block", paddingTop: 8 }}>
              Your brand is displayed across the ticketing experience
            </span>
          </h2>
        </div>
      </div>
    );
  }
}

export default Form;
