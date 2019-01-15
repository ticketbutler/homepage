import React from "react";
import { SketchPicker } from "react-color";
import { ClickedOutside } from "../components/elements/helpers";
import Dropzone from "react-dropzone";
import UploadLogoIcon from "../img/upload-logo.png";
import { OnboardingHeader } from "../components/elements/onboarding_header";
import { OnboardingFooter } from "../components/elements/onboarding_footer";
import { styles } from "../layouts/style";

export class Branding extends React.Component {
  state = {
    colorPickerOpen: false,
    brand_colour: "#333",
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
        src={this.state.logo}
        css={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          marginBottom: 0
        }}
      />
    );
  };

  changeFont = event => {
    this.setState({ font: event.target.value });
  };
  render() {
    return (
      <div>
        <OnboardingHeader />
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

          <h3 css={{ ...styles.h3, maxWidth: "560px" }}>
            It’s all about your business! Your brand is displayed across the
            whole ticketing experience on the event page, in emails and on the
            tickets.
          </h3>

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
                  <option value="Arial">Arial</option>
                  <option value="Courier New">Courier New</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Palatino">Palatino</option>
                  <option value="Tahoma">Tahoma</option>
                  <option value="Times New Roman">Times New Roman</option>
                  <option value="Trebuchet MS">Trebuchet MS</option>
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
                    onDrop={acceptedFiles => {
                      acceptedFiles.forEach(file => {
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = () => {
                          this.setState({ logo: reader.result });
                        };
                        reader.onabort = () =>
                          console.log("file reading was aborted");
                        reader.onerror = () =>
                          console.log("file reading has failed");
                      });
                    }}
                  >
                    {({ getRootProps, getInputProps }) => {
                      return (
                        <div
                          css={{
                            height: "75px",
                            maxWidth: "150px",
                            border: "2px dashed #C5D0DE",
                            borderRadius: "6px",
                            backgroundColor: "#FFFFFF",
                            boxShadow: "0 2px 9px 0 rgba(0,0,0,0.03)",
                            marginTop: "7px"
                          }}
                          {...getRootProps()}
                        >
                          {this.renderLogo() || (
                            <div
                              css={{ textAlign: "center", marginTop: "20px" }}
                            >
                              <img
                                css={{ width: "20px", marginBottom: "-5px" }}
                                src={UploadLogoIcon}
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
                          )}

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
                    <div css={{ marginRight: "-45px", marginTop: "8px" }}>
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
                      <select
                        css={{
                          background: "white",
                          fontFamily: this.state.font
                        }}
                      >
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
                      color: "white",
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
          <OnboardingFooter />
        </div>
      </div>
    );
  }
}

export default Branding;
