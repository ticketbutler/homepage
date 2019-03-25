import React from "react";
import { withWindow } from "../components/helpers";
import { makeTranslations } from "mini-trans";
import { BigTriangle } from "./elements/shapes";

const styles = {
  input: {
    height: "2em",
    width: "8.5em",
    marginTop: "0.5em",
    border: "1px solid #C0C5CF",
    borderRadius: "2px",
    backgroundColor: "#FFFFFF",
    boxShadow: "6px 6px 20px 0 #ECECEC",
    padding: "0.2em"
  },
  h3: {
    color: "#6C7582",
    fontSize: "21px",
    lineHeight: "25px",
    margin: "0.5em",

    fontWeight: 600
  },
  small: {
    color: "#333F52",
    fontSize: "21px",
    lineHeight: "50px",
    fontWeight: 600,
    margin: "0 auto",
    paddingTop: "2em"
  }
};

const translations = {
  da: {
    "I'd sell": "Jeg sælger",
    " tickets sold": " billetter solgt",
    tickets: "billetter",
    at: "til",
    " tickets price": " billetpris",
    each: "per styk",
    "Ticket purchaser pays ticket fee": "Billetkøber betaler billetgebyr",
    "Event organizer pays ticket fee": "Arrangør betaler billetgebyr",
    "Your estimated revenue": "Din forventede udbetaling",
    Summary: "Oversigt",
    "Ticket fee per ticket*": "Billetgebyr per billet*",
    "Subscription fee per month": "Abbonementsgebyr per måned",
    "Expected newsletter signups": "Forventet antal nye nyhedsbrevsmodtagere",
    "Expected extra brand impressions":
      "Forventet antal ekstra brand-visninger",
    "Prices above include VAT": "Ovenstående priser vises inklusiv moms",
    "*If you receive ongoing payments ": "*Får du løbende udbetaling trækkes ",
    "fees ": "gebyr ",
    "will be deducted from your revenue": "fra din omsætning"
  }
};

class PriceCalculator extends React.Component {
  static defaultProps = {
    locale: "da"
  };
  constructor(props) {
    super(props);
    this.state = {
      numberOfTickets: null,
      price: null,
      includeTicketFee: props.includeTicketFee || false,
      hasInteracted: false
    };
  }
  fixedTicketFee = 3.75;
  percentTicketFee = 0.0375;

  t = makeTranslations(translations, this.props.locale);

  handleNumberOfTicketsInput = e => {
    this.setState({ numberOfTickets: e.target.value });
  };

  handlePriceInput = e => {
    this.setState({ price: e.target.value });
  };

  switchFunction = () => {
    this.setState({ includeTicketFee: !this.state.includeTicketFee });
  };

  render() {
    let total = 0;
    let subscriptions = 0;
    let impressions = 0;
    let fee = 0;
    let localFee;

    if (this.state.includeTicketFee) {
      fee = (
        (Number(this.state.price) + this.fixedTicketFee) *
          this.percentTicketFee +
        this.fixedTicketFee
      ).toFixed(2);
      localFee = new Number(fee).toLocaleString("da-DK");
      let totalPercentFee =
        (Number(this.state.price) + this.fixedTicketFee) *
        this.percentTicketFee;
      let totalFee =
        (totalPercentFee + this.fixedTicketFee) *
        Number(this.state.numberOfTickets);
      let grossRevenue =
        Number(this.state.numberOfTickets) * Number(this.state.price);
      total = (grossRevenue - totalFee).toFixed(2);
      localTotal = new Number(total).toLocaleString("da-DK");
      impressions = Number(this.state.numberOfTickets) * 5;
      subscriptions = (Number(this.state.numberOfTickets) * 0.2).toFixed(0);
    } else {
      fee = (
        (Number(this.state.price) + this.fixedTicketFee) *
          this.percentTicketFee +
        this.fixedTicketFee
      ).toFixed(2);
      localFee = new Number(fee).toLocaleString("da-DK");
      total = (
        Number(this.state.numberOfTickets) * Number(this.state.price)
      ).toFixed(2);
      localTotal = new Number(total).toLocaleString("da-DK");
      subscriptions = (Number(this.state.numberOfTickets) * 0.2).toFixed(0);
      impressions = Number(this.state.numberOfTickets) * 5;
    }
    // let localFee = new Number(fee).toLocaleString('da-DK')

    let localTotal = this.state.price == 0 ? 0 : localTotal;
    return (
      <div
        className="rectangle"
        style={{
          width: "100%",
          background: "linear-gradient(-125.21deg, #326de9  0%, #7e52e8 100%)",
          transform: "skew(0deg,-2deg)",
          margin: 0,
          padding: 0,
          marginBottom: this.props.window.width > 800 ? "400px" : "100px",
          ...(this.props.window.width > 800
            ? {
                height: "1000px"
              }
            : this.props.window.width > 600
              ? {
                  height: "1200px"
                }
              : {
                  height: "1500px"
                })
        }}
      >
        <div
          style={{
            transform: "skew(0deg,2deg)",
            padding: this.props.window.width > 800 ? 0 : "1em"
          }}
        >
          <BigTriangle style={{ display: "block", position: "absolute" }} />
          <h1
            css={{
              fontWeight: "bold",
              textAlign: "center",
              paddingTop: "20px",
              lineHeight: "70px",
              color: "#fff",
              fontSize: "45px",
              "@media(max-width: 600px)": {
                fontSize: "27px"
              }
            }}
          >
            {this.props.heading}
          </h1>
          <h2
            css={{
              color: "#fff",
              fontWeight: 500,
              fontSize: "27px",
              letterSpacing: "-0.19px",
              textAlign: "center",
              margin: "0 auto",
              lineHeight: "38px",
              width: "60%",
              paddingBottom: "4em",
              paddingTop: "2em",
              "@media(max-width: 600px)": {
                paddingTop: "0px",
                paddingBottom: "1em",
                width: "90%",
                fontSize: "16px",
                lineHeight: "24px"
              }
            }}
          >
            {this.props.text}
          </h2>
          <div
            className="form"
            css={{
              width: "100%",
              maxWidth: "815px",
              borderRadius: "5px",
              backgroundColor: "#F5F8FB",
              boxShadow: "2px 2px 30px 0 #848EA2",
              margin: "0 auto",
              textAlign: "center",
              padding: "4em",
              height: "800px",
              "@media(max-width: 600px)": {
                padding: "1em",
                height: "830px"
              }
            }}
          >
            <div
              css={{
                marginBottom: "1em",
                justifyContent: "center",
                display: "flex",
                "@media(max-width: 600px)": {
                  display: "block"
                }
              }}
            >
              <h3
                css={{
                  "@media(max-width: 600px)": {
                    fontSize: "16px"
                  },
                  ...styles.h3
                }}
              >
                {" "}
                {this.t("I'd sell")}{" "}
              </h3>
              <input
                css={styles.input}
                type="number"
                placeholder={this.t(" tickets sold")}
                required
                value={this.state.numberOfTickets}
                onChange={this.handleNumberOfTicketsInput}
              />
              <h3
                css={{
                  "@media(max-width: 600px)": {
                    fontSize: "16px"
                  },
                  ...styles.h3
                }}
              >
                <span style={{ color: "black" }}>{this.t("tickets")}</span>{" "}
                {this.t("at")}
              </h3>
              <input
                style={styles.input}
                type="number"
                placeholder={this.t(" tickets price")}
                required
                value={this.state.price}
                onChange={this.handlePriceInput}
              />
              <h3
                css={{
                  "@media(max-width: 600px)": {
                    fontSize: "16px"
                  },
                  ...styles.h3
                }}
              >
                <span style={{ color: "black" }}> kr</span> {this.t("each")}
              </h3>
            </div>

            <div
              className="toggle"
              css={{
                margin: "0 auto",
                display: "inline-flex",
                "@media(max-width: 600px)": {
                  fontSize: "11px"
                }
              }}
            >
              <span
                style={this.state.includeTicketFee ? {} : { color: "#326DE9" }}
              >
                {this.t("Ticket purchaser pays ticket fee")}
              </span>
              <label
                className="switch"
                onClick={this.switchFunction}
                css={{
                  position: "relative",
                  display: "inline-block",
                  height: "24px",
                  width: "60px",
                  outline: "none",
                  marginLeft: "1em",
                  marginRight: "1em",
                  "@media(max-width: 600px)": {
                    width: "100px"
                  }
                }}
              >
                <div
                  className="slider"
                  style={{
                    position: "absolute",
                    cursor: "pointer",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "#326DE9",
                    transition: "0.4s",
                    borderRadius: "24px",
                    ...(this.state.includeTicketFee
                      ? {
                          backgroundColor: "#326DE9"
                        }
                      : {})
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      height: "20px",
                      width: "20px",
                      top: "2px",
                      backgroundColor: "white",
                      transition: "0.4s",
                      borderRadius: "50%",
                      ...(this.state.includeTicketFee
                        ? { left: "calc(98% - 20px)" }
                        : { left: "2%" })
                    }}
                  />
                </div>
              </label>
              <span
                style={this.state.includeTicketFee ? { color: "#326DE9" } : {}}
              >
                {this.t("Event organizer pays ticket fee")}
              </span>
            </div>
            <p
              css={{
                "@media(max-width: 600px)": {
                  fontSize: "16px"
                },
                ...styles.small
              }}
            >
              {this.t("Your estimated revenue")}{" "}
            </p>
            <p
              css={{
                color: "#326DE9",
                fontSize: this.props.window.width > 420 ? "2.5em" : "1.5em",
                fontWeight: "500",
                lineHeight: "61px",
                letterSpacing: "normal",
                marginBottom: "0.5rem",
                "@media(max-width: 600px)": {
                  lineHeight: "45px"
                }
              }}
            >
              {localTotal} kr
            </p>
            <div
              className="line"
              style={{
                boxSizing: "border-box",
                height: "2px",
                width: "250px",
                border: "1px solid #C0C5CF",
                margin: "0 auto"
              }}
            />

            <p
              css={{
                "@media(max-width: 600px)": {
                  fontSize: "16px"
                },
                ...styles.small
              }}
            >
              {this.t("Summary")}
            </p>
            <div
              style={{
                height: "250px",
                width: "100%",
                maxWidth: "650px",
                borderRadius: "5px",
                backgroundColor: "#FFFFFF",
                padding: "2em",
                display: "flex",
                flexWrap: "wrap",
                ...(this.props.window.width < 700
                  ? {
                      justifyContent: "center",
                      fontSize: "12px"
                    }
                  : {
                      justifyContent: "space-between"
                    })
              }}
            >
              {[
                {
                  label: this.t("Ticket fee per ticket*"),
                  value:
                    isZeroOrNull(this.state.price) ||
                    isZeroOrNull(this.state.numberOfTickets)
                      ? "0 kr"
                      : localFee + " kr"
                },
                {
                  label: this.t("Subscription fee per month"),
                  value:
                    this.state.numberOfTickets > 50 && this.state.price == 0
                      ? "800-2.500 kr"
                      : "0 kr"
                },

                {
                  label: this.t("Expected newsletter signups"),
                  value: subscriptions
                },
                {
                  label: this.t("Expected extra brand impressions"),
                  value: impressions
                }
              ].map(({ label, value }, i) => (
                <div
                  key={i}
                  style={{
                    display: "contents"
                  }}
                >
                  <div
                    css={{
                      textAlign: "left",
                      minWidth: "290px",
                      "@media(max-width: 700px)": {
                        minWidth: "100%",
                        textAlign: "center"
                      }
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      color: "#374355",
                      fontSize: "21px",
                      fontWeight: 600,
                      ...(this.props.window.width < 600
                        ? {
                            textAlign: "center"
                          }
                        : {})
                    }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>
            <p
              css={{
                color: "grey",
                fontSize: "1em",
                marginTop: "2em",
                "@media(max-width: 600px)": {
                  fontSize: "11px",
                  margin: "10px"
                }
              }}
            >
              {this.t("Prices above include VAT")}
            </p>
            <p
              css={{
                color: "grey",
                fontSize: "1em",
                margin: "1em",
                "@media(max-width: 600px)": {
                  fontSize: "11px",
                  margin: 0
                }
              }}
            >
              {this.t("*If you receive ongoing payments ")}{" "}
              <a
                href="https://stripe.com/dk/pricing"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Stripe {this.t("fees ")}{" "}
              </a>{" "}
              {this.t("will be deducted from your revenue")}
            </p>
            <style jsx>{`
                  input:focus + .slider {
                    box-shadow: 0 0 1px blue;
                  }
                 
                  }
                `}</style>
          </div>
        </div>
      </div>
    );
  }
}

export default withWindow(PriceCalculator);

function isZeroOrNull(number) {
  return number == 0 || number == null;
}
