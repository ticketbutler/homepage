import React from "react";
import { SketchPicker } from "react-color";
import { ClickedOutside } from "../components/elements/helpers";
import Dropzone from "react-dropzone";

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
  }
};

class Form extends React.Component {
  state = {
    colorPickerOpen: false,
    brand_colour: "blue",
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
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    );
  };
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

          <div css={{ marginTop: "40px" }}>
            <label css={styles.label}>
              select a font that goes with your brand
            </label>
            <select
              css={{
                ...styles.input,
                width: "348px",

                color: "#C5D0DE",
                fontSize: "14px"
              }}
            >
              <option value="courierNew" style={{ color: "pink" }}>
                Courier New
              </option>
              <option value="georgia">Georgia</option>
              <option value="lucidaConsole">Lucida Console</option>
              <option value="lucidaSansUnicode">Lucida Sans Unicode</option>
              <option value="tahoma">Tahoma</option>
              <option value="timesNewRoman">Times New Roman</option>
              <option value="verdana">Verdana</option>
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
                      style={{
                        height: 64,
                        width: 346,
                        border: "2px dashed #C5D0DE",
                        borderRadius: 6,
                        backgroundColor: "#FFFFFF",
                        boxShadow: "0 2px 9px 0 rgba(0,0,0,0.03)",
                        marginTop: 7
                      }}
                      {...getRootProps()}
                    >
                      <p
                        style={{
                          padding: 0,
                          textAlign: "center",
                          marginBottom: 0,
                          marginTop: 21,
                          color: "#C5D0DE",
                          textTransform: "uppercase",
                          fontSize: 11,
                          letterSpacing: 1
                        }}
                      >
                        upload your logo here
                      </p>
                      <input {...getInputProps()} />
                    </div>
                  );
                }}
              </Dropzone>
              <div />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
