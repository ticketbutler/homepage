import React from "react";
import { Button } from "./elements/elements";
import { makeTranslations } from "mini-trans";
import { navigate } from "@reach/router";
import { mq } from "../styles";

function Burger({ active, ...htmlProps }) {
  return (
    <div
      css={{
        cursor: "pointer",
        width: "40px",
        height: "40px",
        padding: "5px 7px",
        borderRadius: "25px",
        position: "relative",
        zIndex: 5,
        ":hover": {
          opacity: 0.85
        }
      }}
      {...htmlProps}
    >
      {[
        { top: "5px", activeStyle: { transform: "rotate(45deg)" } },
        { top: "12.5px", activeStyle: { display: "none" } },
        {
          top: "20px",
          activeStyle: {
            transform: "rotate(-45deg)",
            top: "5px"
          }
        }
      ].map(({ top, activeStyle }) => (
        <span
          key={top}
          css={[
            {
              position: "absolute",
              right: "10px",
              width: "22px",
              height: "2.1px",
              top,
              background: "#fff",
              margin: active ? "10px 0" : "5px 0",
              borderRadius: "2px",
              display: "inline-block",
              transition: "all 100ms",
              lineHeight: 0
            },
            active && [{ position: "absolute" }, activeStyle]
          ]}
        />
      ))}
    </div>
  );
}

function Menu({ items, itemStyle }) {
  itemStyle = {
    ...itemStyle,
    cursor: "pointer",
    textDecoration: "none"
  };
  return items.map(
    ({ path, label, external = false, ...props }, i) =>
      external ? (
        <a
          key={i}
          href={path}
          target="_blank"
          rel="noopener noreferrer"
          css={itemStyle}
          {...props}
        >
          {label}
        </a>
      ) : (
        <div
          key={i}
          css={itemStyle}
          onClick={() => {
            navigate(path);
          }}
        >
          {label}
        </div>
      )
  );
}

const translations = {
  da: {
    "Log in": "Log Ind"
  }
};

class Navbar extends React.Component {
  state = { menuOpen: false };

  t = makeTranslations(translations, this.props.currentLocale.id);

  navbarhandleClick = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  breakpoint = 910;

  render() {
    return (
      <nav
        css={{
          padding: "0 10px",
          width: "100%",
          position: "absolute",
          zIndex: 100,
          fontWeight: 500,
          letterSpacing: "1.2px",
          fontSize: "14px",
          [`@media (max-width: ${this.breakpoint}px)`]: {
            position: "fixed",
            background: "#326de9"
          }
        }}
      >
        <div
          css={{
            margin: "0 auto",
            minHeight: "75px",
            width: "100%",
            maxWidth: "1200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <img
            src="/img/tb_wink_white.gif"
            css={{
              display: "block",
              maxWidth: "200px",
              [mq(440)]: {
                maxWidth: "100px"
              }
            }}
            onClick={() => {
              navigate("/" + this.props.currentLocale.id + "/");
            }}
          />
          <div
            css={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              [`@media (max-width: ${this.breakpoint}px)`]: {
                display: "none"
              }
            }}
          >
            <Menu
              items={this.props.items}
              itemStyle={{
                color: "white",
                paddingLeft: "10px",
                paddingRight: "10px",
                borderColor: "transparent",
                transition: "500ms all",
                paddingBottom: "20px",
                paddingTop: "20px",
                ":hover": {
                  borderStyle: "solid",
                  borderColor: "rgba(255, 255, 255, 0.9)",
                  borderWidth: "2px 0 2px 0",
                  paddingBottom: "5px",
                  paddingTop: "5px"
                }
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <a
              href={this.props.otherLocale.currentPageUrl}
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: 14,
                fontWeight: 600,
                margin: "0 15px"
              }}
            >
              {this.props.otherLocale.label}
            </a>

            <a
              href={
                "//you.ticketbutler.io/" +
                this.props.currentLocale.id +
                "/login/"
              }
              style={{ textDecoration: "none" }}
            >
              <Button
                outline
                small
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  whiteSpace: "nowrap"
                }}
                arrow={false}
              >
                {this.t("Log in")}
              </Button>
            </a>
            {/* Mobile menu */}
            <div
              css={{
                marginLeft: "10px",
                [`@media (min-width: ${this.breakpoint}px)`]: {
                  display: "none"
                }
              }}
            >
              <Burger
                active={this.state.menuOpen}
                onClick={this.navbarhandleClick}
              />
              <div
                css={[
                  {
                    position: "absolute",
                    right: 0,
                    top: "75px",
                    display: "flex",
                    flexDirection: "column",
                    background: "white",
                    transition: "100ms all",
                    width: "100%",
                    maxWidth: "250px"
                  },
                  !this.state.menuOpen && {
                    transform: "translateX(100%)"
                  }
                ]}
              >
                <Menu
                  items={this.props.items}
                  itemStyle={{
                    color: "#333",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    fontSize: "14px",
                    borderBottom: "1px solid rgba(238, 238, 238, 0.5)",
                    transition: "250ms padding",
                    ":hover": {
                      backgroundColor: "rgba(238, 238, 238, 0.5)",
                      paddingLeft: "25px"
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
