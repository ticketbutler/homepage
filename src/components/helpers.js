import React from "react";
export class WindowHelper extends React.Component {
  state = {
    width: null
  };
  componentDidMount() {
    this.setState({ width: window.innerWidth });
    window.addEventListener("resize", () => {
      this.setState({ width: window.innerWidth });
    });
  }
  render() {
    return this.props.children(this.state);
  }
}

export const withWindow = (Component: React.ComponentType<any>) =>
  class extends React.Component<
    {},
    {
      window: {
        width: number
      }
    }
  > {
    state = {
      window: {
        width: 1200
      }
    };
    componentDidMount() {
      this.setWindowProperties();
      if (window) {
        window.addEventListener("resize", () => {
          this.setWindowProperties();
        });
      }
    }
    setWindowProperties = () => {
      if (window) {
        this.setState({
          window: {
            width: window.innerWidth
          }
        });
      }
    };
    render() {
      return <Component {...this.state} {...this.props} />;
    }
  };
