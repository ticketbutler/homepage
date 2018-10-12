//@flow

import * as React from "react";
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
  menuOffsetBuffer = 15;
  itemMargin = 10;
  containerRef = React.createRef();
  tileRefs = this.props.items.map(() => React.createRef());
  activeTileIndex = null;

  componentDidMount() {
    this.activeTileIndex = this.props.items.findIndex(t =>
      window.location.href.includes(encodeURI(t.link))
    );
    let currentTileRef = this.tileRefs[this.activeTileIndex].current;
    if (this.containerRef.current) {
      let menuOffset =
        this.containerRef.current.offsetTop - this.menuOffsetBuffer;
      window.addEventListener("scroll", () => {
        this.setState({ sticky: window.scrollY >= menuOffset });
      });
      if (currentTileRef && this.activeTileIndex) {
        this.containerRef.current.scrollTo({
          left:
            currentTileRef.offsetLeft -
            this.menuOffsetBuffer -
            this.activeTileIndex * this.itemMargin -
            currentTileRef.offsetWidth * 0.5,
          behavior: "smooth"
        });
      }
    }
  }
  render() {
    return (
      <div
        style={{
          zIndex: 999,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          ...(this.props.window.width < 800
            ? {
                paddingTop: 80
              }
            : { paddingTop: 120 }),
          ...(this.state.sticky
            ? {
                position: "relative"
              }
            : { position: "absolute" })
        }}
      >
        <div
          ref={this.containerRef}
          style={{
            display: "flex",
            margin: "0 auto",
            overflowX: "auto",
            padding: this.menuOffsetBuffer,
            transition: "0.5s background",
            borderBottomLeftRadius: 3,
            borderBottomRightRadius: 3,
            ...(this.state.sticky
              ? {
                  position: "fixed",
                  background: "white",
                  boxShadow: "0px 12px 73px -8px rgba(0,0,0,0.75)"
                }
              : {}),
            ...(this.state.sticky
              ? this.props.window.width < 800
                ? { zIndex: 1000 }
                : {
                    top: 0
                  }
              : {})
          }}
        >
          <div
            style={{
              display: "flex",
              margin: "0 auto",
              zIndex: "99"
            }}
          >
            {this.props.items.map((item, i) => (
              <FeatureTile
                marginOfItems={this.itemMargin}
                containerRef={this.tileRefs[i]}
                style={{
                  ...(this.props.window.width < 1050
                    ? {
                        width: 200
                      }
                    : {})
                }}
                styleimg={{
                  ...(this.props.window.width < 800
                    ? {
                        display: "none"
                      }
                    : {})
                }}
                active={this.activeTileIndex === i}
                {...item}
              />
            ))}
          </div>
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
    marginOfItems: number,
    containerRef: React.Ref<*>,
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
  marginOfItems = "0.5em";
  render() {
    return (
      <div
        ref={this.props.containerRef}
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
        onMouseOver={() => {
          this.setState({ hovered: true });
        }}
        style={{
          background: "#fff",
          width: 250,
          maxWidth: 500,
          borderRadius: 4,
          boxShadow: "1px 1px 10px 1px rgba(0, 0, 0, 0.2)",
          transition: "all 0.3s",
          textAlign: "center",
          cursor: "pointer",
          marginLeft: this.props.marginOfItems,
          marginRight: this.props.marginOfItems,
          paddingLeft: 5,
          paddingRight: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
            height: "auto",
            width: 40,
            margin: 5,
            ...this.props.styleimg
          }}
        />
        <span
          style={{
            color: "rgba(50, 109, 233, 1)",
            fontFamily: "Montserrat",
            fontWeight: 600,
            fontSize: 16,
            padding: 10,
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
    );
  }
}

export default withWindow(FeaturesNavigation);
