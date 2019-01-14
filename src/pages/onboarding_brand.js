import React from "react";
import { SketchPicker } from "react-color";
import { ClickedOutside } from "../components/elements/helpers";
import Dropzone from "react-dropzone";
import UploadLogo from "../img/upload-logo.png";
import { Button } from "../components/elements/elements";
const styles = {
  h2: {
    fontSize: "18px",
    color: "#89909B",
    fontWeight: "500"
  },
  label: {
    textTransform: "uppercase",
    fontSize: "12px",
    fontWeight: 500,
    color: "#89909B"
  },
  input: {
    display: "block",
    background: "none",
    borderRadius: "4px",
    border: "1px solid #C5D0DE",
    marginTop: "8px",
    height: "46px"
  },
  div: {
    marginTop: "20px"
  },
  h4: {
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: "10px",
    color: "rgb(51, 51, 51)",
    fontSize: "14px"
  }
};

class Form extends React.Component {
  state = {
    colorPickerOpen: false,
    brand_colour: "#FDF4A4",
    logo: "",
    font: "",
    bank_details: {
      registration_number: "",
      account_number: ""
    },
    address: {
      business_name: "",
      cvr: "",
      street: "",
      postcode: "",
      city: ""
    }
  };

  handleChangeComplete = color => {
    this.setState({ brand_colour: color.hex });
  };
  renderLogo = () => {
    return (
      <img
        src={this.state.logo ? this.state.logo.preview : this.props.logo[0]}
        css={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    );
  };

  changeFont = event => {
    this.setState({ font: event.target.value });
  };
  render() {
    return (
      <div>
        <header
          css={{
            height: " 80px",

            backgroundColor: "#FFFFFF",
            boxShadow: "3px 3px 4px 0 #F0F2F5"
          }}
        >
          <img
            src={"../img/ticketbutler_logo_small.png"}
            css={{ maxWidth: "142px", marginLeft: "38px", marginTop: "30px" }}
          />
        </header>
        <div
          css={{
            marginLeft: "12%",
            marginRight: "12%",
            marginTop: "80px",
            marginBottom: "80px"
          }}
        >
          <h3 css={{ fontWeight: "600px", fontSize: "18px" }}> STEP 1 OF 3</h3>
          <h1 css={{ fontWeight: "600px", fontSize: "36px" }}>
            Desing your brand
          </h1>

          <h2 css={{ ...styles.h2, maxWidth: "560px" }}>
            It’s all about your business! Your brand is displayed across the
            whole ticketing experience on the event page, in emails and on the
            tickets.
          </h2>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <div css={styles.div}>
                <label css={styles.label}>
                  select a font that goes with your brand
                </label>
                <select
                  css={{
                    ...styles.input,
                    maxWidth: "348px",
                    width: "100%",
                    color: "#C5D0DE",
                    fontSize: "14px"
                  }}
                  onChange={this.changeFont}
                >
                  <option value="Courier New">Courier New</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Lucida Console">Lucida Console</option>
                  <option value="Lucida Sans Unicode">
                    Lucida Sans Unicode
                  </option>
                  <option value="Tahoma">Tahoma</option>
                  <option value="Times New Roman">Times New Roman</option>
                  <option value="Verdana">Verdana</option>
                </select>
                <div css={{ marginTop: "30px" }}>
                  <label css={styles.label}>select a color</label>
                  <div
                    css={{
                      ...styles.input,
                      display: "block",
                      width: "148px",
                      marginBottom: "10px"
                    }}
                    onClick={() => {
                      this.setState({ colorPickerOpen: true });
                    }}
                  >
                    <div
                      css={{
                        ...styles.input,
                        height: "26px",
                        width: "60px",
                        marginLeft: "20px",
                        marginTop: "9px",
                        background: this.state.brand_colour
                      }}
                    />
                  </div>
                  {this.state.colorPickerOpen && (
                    <ClickedOutside
                      css={{ display: "inline-block" }}
                      onOutsideClick={() => {
                        this.setState({ colorPickerOpen: false });
                      }}
                    >
                      <SketchPicker
                        color={this.state.brand_colour}
                        onChangeComplete={this.handleChangeComplete}
                        disableAlpha={true}
                      />
                    </ClickedOutside>
                  )}
                </div>
                <div css={{ marginTop: "30px" }}>
                  <label css={styles.label}>upload your logo</label>
                  <Dropzone
                    multiple={false}
                    onDrop={files => {
                      this.setState({ logo: files[0] });
                    }}
                  >
                    {({ getRootProps, getInputProps }) => {
                      return (
                        <div
                          css={{
                            height: "64px",
                            maxWidth: "348px",
                            border: "2px dashed #C5D0DE",
                            borderRadius: "6px",
                            backgroundColor: "#FFFFFF",
                            boxShadow: "0 2px 9px 0 rgba(0,0,0,0.03)",
                            marginTop: "7px"
                          }}
                          {...getRootProps()}
                        >
                          <div css={{ textAlign: "center", marginTop: "20px" }}>
                            <img
                              css={{ width: "20px", marginBottom: "-5px" }}
                              src={UploadLogo}
                            />
                            <p
                              css={{
                                padding: 0,
                                marginLeft: "13px",
                                marginBottom: 0,
                                color: "#C5D0DE",
                                textTransform: "uppercase",
                                fontSize: "11px",
                                letterSpacing: "1px",
                                display: "inline"
                              }}
                            >
                              upload your logo here
                            </p>
                          </div>
                          <input {...getInputProps()} />
                        </div>
                      );
                    }}
                  </Dropzone>
                  <div />
                </div>
              </div>
            </div>
            <div css={styles.div}>
              <h2 css={{ ...styles.label, marginBottom: "12px" }}>
                Preview of a simple homepage integration
              </h2>
              <div
                css={{
                  height: "286px",
                  width: "526px",
                  boxShadow: "rgb(212, 217, 223) 2px 2px 8px 0px",
                  fontFamily: "Times New Roman"
                }}
              >
                <div
                  css={{
                    marginLeft: "30px",
                    marginRight: "30px"
                  }}
                >
                  <div
                    style={{
                      paddingTop: "50px",
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",

                      borderBottom: "1px solid #EEEEEE"
                    }}
                  >
                    <div>
                      <h4 css={{ ...styles.h4, fontFamily: this.state.font }}>
                        DEMO TICKET NAME
                      </h4>
                      <p
                        style={{
                          fontSize: "12px",
                          fontWeight: 500,
                          color: "#636E6D",
                          fontFamily: this.state.font
                        }}
                      >
                        Demo text to show how your font looks
                      </p>
                    </div>
                    <div css={{ marginRight: "-43px", marginTop: "8px" }}>
                      <span css={{ ...styles.h4, fontFamily: this.state.font }}>
                        99.00 kr{" "}
                      </span>{" "}
                      <span
                        css={{ fontSize: "10px", fontFamily: this.state.font }}
                      >
                        + 7.61kr fee
                      </span>
                    </div>
                    <div css={{ marginTop: "8px" }}>
                      <select css={{ background: "white" }}>
                        <option> 3</option>{" "}
                      </select>
                    </div>
                  </div>
                  <p
                    css={{
                      margin: "7px 0px",
                      fontSize: "11px",
                      fontFamily: this.state.font
                    }}
                  >
                    Price include 25% VAT
                  </p>

                  <div
                    css={{
                      height: "53px",
                      width: "120px",
                      border: "none",
                      background: this.state.brand_colour,
                      fontSize: "13px",
                      fontWeight: "bold",
                      display: "flex",
                      placeContent: "center",
                      color: "black",
                      padding: " 20px 10px",
                      marginTop: "35px",
                      float: "right",
                      fontFamily: this.state.font
                    }}
                  >
                    Buy tickets
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            css={{
              marginTop: "150px",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <h2 css={{ ...styles.h2, paddingTop: "20px" }}>
              {" "}
              Need help? Call us at 89 80 12 80.{" "}
            </h2>
            <Button
              style={{
                background:
                  "linear-gradient(112.11deg, #326DE9 0%, #7E52E8 100%)",
                width: "25%"
              }}
            >
              Next step{" "}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
