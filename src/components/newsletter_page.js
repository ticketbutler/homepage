import React from "react";
import dateFns from "date-fns";
import qs from "query-string";
import { withWindow } from "../components/helpers";
import { Button } from "./elements/elements";
import { mq } from "../styles";

class NewsletterSubscribe extends React.Component {
  state = {
    email: "",
    sent: false
  };
  render() {
    return (
      <section
        css={{
          padding: "110px 0",
          width: "100%",
          position: "relative"
        }}
      >
        <div>
          <h1
            css={{
              display: "block",
              height: "auto",
              width: "100%",
              color: "#333f52",
              fontFamily: "Hind",
              fontSize: "55px",
              fontWeight: "bold",
              lineHeight: "70px",
              textAlign: "center",
              margin: "auto",
              marginBottom: "50px",
              [mq(1000)]: {
                fontSize: "40px"
              },
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
                color: "#6c7582"
              }}
            >
              <h2>{this.props.newsletter_text}</h2>
            </div>
          ) : (
            <form
              css={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "570px",
                width: "100%",
                height: "auto",
                margin: "0 auto"
              }}
              onSubmit={async e => {
                e.preventDefault();
                let data = qs.stringify({
                  email: this.state.email,
                  date_added: dateFns.format(new Date(), "DD/MM/YYYY H:mm")
                });
                fetch(
                  "//script.google.com/macros/s/AKfycbySdHBTZ0jjTMOqrDWqnimXNFEeqxwV9udZHcU83-boqrpw__w/exec?" +
                    data
                );
                this.setState({
                  sent: true
                });
              }}
            >
              <input type="hidden" name="form-name" value="newsletter" />
              <label
                css={{
                  height: " 60px",
                  width: "350px",
                  display: "inline",
                  float: "left",
                  position: "relative",
                  marginBottom: "20px"
                }}
              >
                <input
                  css={{
                    width: "100%",
                    height: "100%",
                    border: "1px solid #979797",
                    borderRadius: "49px",
                    display: "inline",
                    paddingLeft: "20px",
                    fontSize: "15px"
                  }}
                  name="email"
                  type="email"
                  placeholder={this.props.placeholder}
                  onChange={e => {
                    this.setState({ email: e.target.value });
                  }}
                />
              </label>

              <Button contactButton id="newsletter_btn" type="submit">
                {this.props.button_text}
              </Button>
            </form>
          )}
        </div>
      </section>
    );
  }
}

export default withWindow(NewsletterSubscribe);
