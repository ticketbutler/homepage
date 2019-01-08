import * as React from "react";

export class ClickedOutside extends React.Component<{
  onOutsideClick: Event => void
}> {
  state = { clicked: false };
  ref = React.createRef();
  componentDidMount() {
    document.addEventListener("click", this.handleClick, true);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick, false);
  }
  handleClick = e => {
    let ref = this.ref.current;

    if (ref && !ref.contains(e.target)) {
      this.props.onOutsideClick && this.props.onOutsideClick(e);
    }
  };
  render() {
    let { children, onOutsideClick, ...rest } = this.props;
    return (
      <div ref={this.ref} {...rest}>
        {children}
      </div>
    );
  }
}
