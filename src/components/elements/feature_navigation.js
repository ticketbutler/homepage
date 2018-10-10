//@flow

import React from "react";
import { Link, navigate } from "gatsby";
import { withWindow } from "../helpers";

class FeaturesNavigation extends React.Component<
  {
    items: Array<{
      image: string,
      name: string,
      link: string
    }>,
    window: { width: number }
  },
  { sticky: boolean }
> {
  state = { sticky: false };
  menuOffsetBuffer = 0;
  myRef = React.createRef();
  componentDidMount() {
    if (this.myRef.current) {
      let menuOffset = this.myRef.current.offsetTop - this.menuOffsetBuffer;
      window.addEventListener("scroll", () => {
        this.setState({ sticky: window.scrollY >= menuOffset });
      });
    }
  }
  render() {
    return (
      <div
        style={{
          zIndex: 99,
          position: "absolute",
          width: "100%",
          ...(this.props.window.width < 500
            ? {
                paddingTop: 60
              }
            : { paddingTop: 120 }),
          ...(this.state.sticky
            ? {
                position: "static"
              }
            : {})
        }}
      >
        <div
          ref={this.myRef}
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            overflowX: "auto",
            zIndex: "999",
            ...(this.state.sticky
              ? this.props.window.width < 600
                ? {}
                : {
                    position: "fixed",
                    top: this.menuOffsetBuffer,
                    background: "white",
                    transition: "0.5s all",
                    boxShadow: "0px 12px 73px -8px rgba(0,0,0,0.75)"
                  }
              : {})
          }}
        >
          {this.props.items.map((item, i) => (
            <FeatureTile
              style={{}}
              /* styleimg={{
                ...(this.state.sticky
                  ? {
                      display: "none"
                    }
                  : {})
              }} */
              {...item}
              active={window.location.href.includes(item.link)}
            />
          ))}
        </div>
      </div>
    );
  }
}

class FeatureTile extends React.Component<
  {
    active: boolean,
    name: string,
    image: string,
    link: string,
    style?: { [string]: any },
    styleimg?: { [string]: any }
  },
  { hovered: boolean }
> {
  static defaultProps = {
    style: {},
    styleimg: {}
  };
  state = { hovered: false };
  render() {
    return (
      <div
        // key={this.propsitem}
        onClick={() => {
          if (window.scrollY === 0) {
            navigate(this.props.link);
          } else {
            window.scrollTo({
              top: 0,

              behavior: "smooth"
            });
            window.addEventListener("scroll", () => {
              if (window.scrollY === 0) navigate(this.props.link);
            });
          }
        }}
        style={{ textDecoration: "none" }}
        onMouseOver={() => {
          this.setState({ hovered: true });
        }}
      >
        <div
          style={{
            background: "#fff",
            height: 100,
            minWidth: 200,
            padding: 20,

            borderRadius: 4,
            boxShadow: "1px 1px 10px 1px rgba(0, 0, 0, 0.2)",
            transition: "all 0.3s",
            textAlign: "center",
            cursor: "pointer",
            marginLeft: "1em",
            marginRight: "1em",
            ...(this.props.active
              ? {
                  background: "#1dc9cb"
                }
              : {}),
            ...this.props.style
          }}
        >
          <img
            src={this.props.image}
            style={{
              height: 40,
              width: 40,
              display: "block",
              margin: "0 auto",
              ...this.props.styleimg
            }}
          />
          <span
            style={{
              color: "rgba(50, 109, 233, 1)",
              fontFamily: "Montserrat",
              fontWeight: 600,
              fontSize: 16,
              marginTop: 15,
              ...(this.props.active
                ? {
                    color: "white"
                  }
                : {})
            }}
          >
            {this.props.name}
          </span>
        </div>
      </div>
    );
  }
}

export default withWindow(FeaturesNavigation);
