import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { withWindow } from "../components/helpers";
import * as emailjs from "emailjs-com";
import { Button } from "./elements/elements";
import { mq } from "../styles";

const styles = {
  listInput: {
    width: "100%",
    maxWidth: "500px",
    display: "block",
    padding: "0 15px",
    height: "40px",
    border: "1px solid #CCC",
    borderRadius: "4px",
    position: "relative",
    marginBottom: "10px",
    fontSize: "15px"
  },
  listItem: {
    display: "flex",
    textAlign: "left",
    margin: "40px"
  },
  listIcon: {
    marginRight: "20px"
  },
  addressDetails: {
    opacity: 0.5,
    fontSize: "16px"
  }
};
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
    sent: false
  };
  componentDidMount() {
    emailjs.init("user_2wPNd3ilAJ3t4kODqM4wK");
  }
  render() {
    return (
      <section
        css={{
          padding: "0px",
          width: "100%",
          textAlign: "center",
          marginBottom: "0px"
        }}
      >
        <div
          css={{
            width: "50%",
            height: "100%",
            display: "inline",
            float: "left",
            padding: "80px",
            paddingTop: "100px",
            [mq(800)]: {
              width: "100%"
            },
            [mq(500)]: {
              padding: "20px"
            }
          }}
        >
          <h1
            css={{
              float: "left",
              marginBottom: "50px",
              fontSize: "50px",
              [mq(500)]: {
                fontSize: "32px"
              }
            }}
          >
            {this.props.heading}
          </h1>
          {this.state.sent ? (
            <div
              style={{
                display: "inline-table",
                color: "#6c7582",
                ...(this.props.window.width > 768
                  ? {
                      textAlign: "left"
                    }
                  : {
                      textAlign: "center"
                    })
              }}
            >
              <h3>{this.props.thanks_message}</h3>
              <h3>{this.props.call_us} </h3>
              <h3>{this.props.number} </h3>
            </div>
          ) : (
            <form
              onSubmit={e => {
                e.preventDefault();
                emailjs.send("default_service", "template_ykOd5LLE", {
                  name: this.state.name,
                  email: this.state.email,
                  message: this.state.message
                });
                this.setState({ sent: true });
              }}
              css={{
                maxWidth: "100%",
                paddingRight: "30px",
                margin: "50px auto",
                fontFamily: "Montserrat",
                marginBottom: 0
              }}
            >
              <input type="hidden" name="form-name" value="contact-form" />
              <ul css={{ listStyleType: "none", width: "100%" }}>
                <li>
                  <label>
                    <input
                      css={styles.listInput}
                      name="name"
                      id="align-left"
                      value={this.state.name}
                      placeholder={this.props.placeholder_name}
                      onChange={e => {
                        this.setState({ name: e.target.value });
                      }}
                    />
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      css={styles.listInput}
                      type="email"
                      name="email"
                      value={this.state.email}
                      id="align-right"
                      placeholder={this.props.placeholder_email}
                      required
                      onChange={e => {
                        this.setState({ email: e.target.value });
                      }}
                    />
                  </label>
                </li>
                <li
                  css={{
                    display: "block",
                    float: "left",
                    width: "100%",
                    marginLeft: "50%",
                    transform: "translateX(-50%)"
                  }}
                >
                  <label>
                    <textarea
                      name="message"
                      value={this.state.message}
                      placeholder={this.props.placeholder_text}
                      required
                      css={{
                        ...styles.listInput,
                        height: "120px",
                        padding: "4px 15px"
                      }}
                      onChange={e => {
                        this.setState({ message: e.target.value });
                      }}
                    />
                  </label>
                </li>
              </ul>

              <Button contactButton="true" type="submit" id="contact_btn">
                {this.props.button_text}
              </Button>
              <div className="clear-fix" />
            </form>
          )}
        </div>
        <div
          css={{
            display: "flex",
            justifyContent: "center",
            width: "50%",
            height: "660px",
            padding: "110px",
            float: "right",
            background:
              "linear-gradient(to right, rgba(50, 109, 233, .85) , rgba(126, 82, 232, .85)), url(/img/kontaktmin.png) no-repeat -150px ",
            color: "#FFF",
            backgroundSize: "cover",
            fontSize: "20px",
            fontWeight: 500,
            [mq(800)]: {
              width: "100%"
            }
          }}
        >
          <ul css={{ listStyleType: "none" }}>
            <li css={styles.listItem}>
              <i className="fa fa-map-marker" css={styles.listIcon} />
              <div>
                <div>{this.props.address_text}</div>
                <div css={styles.addressDetails}>{this.props.address}</div>
                <div css={styles.addressDetails}>{this.props.city}</div>
              </div>
            </li>
            <li css={styles.listItem}>
              <i className="fa fa-phone" css={styles.listIcon} />
              <div>
                <div>{this.props.phone_text}</div>
                <div css={styles.addressDetails}>{this.props.phone}</div>
              </div>
            </li>
            <li css={styles.listItem}>
              <i className="fa fa-envelope" css={styles.listIcon} />
              <div>
                <div>{this.props.support_text}</div>
                <div css={styles.addressDetails}>{this.props.support}</div>
              </div>
            </li>
          </ul>
        </div>

        <div className="clear-fix" />
      </section>
    );
  }
}
export default withWindow(Contact);
