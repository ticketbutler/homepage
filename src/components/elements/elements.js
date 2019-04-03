import React from "react";
import { mq } from "../../styles";

export class Button extends React.Component {
  static defaultProps = {
    arrow: true,
    outline: false,
    contactButton: false,
    buttonProps: {}
  };
  state = {
    hovered: false
  };
  renderButton() {
    return (
      <button
        onMouseOver={() => {
          this.setState({ hovered: true });
        }}
        onMouseLeave={() => {
          this.setState({ hovered: false });
        }}
        css={{
          color: "white",
          fontWeight: "bold",
          borderRadius: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          cursor: "pointer",
          border: "2px solid transparent",
          transition: "2s all",
          maxWidth: "300px",
          padding: "20px 30px",
          fontSize: "18px",
          [mq(600)]: {
            maxWidth: "210px",
            padding: "10px 15px",
            fontSize: "14px"
          },

          ...(this.props.outline && !this.state.hovered
            ? {
                background:
                  "linear-gradient( to right, rgba(40, 216, 167, 0), rgba(29, 201, 202, 0) )",
                color: "white",
                border: "2px solid #1dc9ca"
              }
            : {
                background:
                  "linear-gradient( to right, rgba(40, 216, 167, 1), rgba(29, 201, 202, 1) )"
              }),
          ...(this.props.contactButton && {
            background: "linear-gradient(90deg, #326DE9 0%, #7E52E8 100%)"
          }),
          ...this.props.css
        }}
        {...this.props.buttonProps}
      >
        {this.props.children}
        {this.props.arrow && (
          <span
            css={{
              transition: "300ms all",
              ...(this.state.hovered
                ? {
                    opacity: 1,
                    marginLeft: "10px"
                  }
                : {
                    opacity: 0,
                    marginLeft: "0px"
                  })
            }}
          >
            »
          </span>
        )}
      </button>
    );
  }
  render() {
    return this.props.to ? (
      <a href={this.props.to} style={{ textDecoration: "none" }}>
        {this.renderButton()}
      </a>
    ) : (
      this.renderButton()
    );
  }
}
