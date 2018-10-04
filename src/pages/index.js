import React from "react";

class Index extends React.Component {
  componentDidMount() {
    this.changeDir();
  }
  changeDir() {
    if (typeof window !== "undefined") {
      let userLang = window.navigator.language || window.navigator.userLanguage;
      if (userLang === "da-DK") {
        window.location.href = "/da/";
      } else {
        window.location.href = "/en/";
      }
    }
  }
  render() {
    return <div />;
  }
}
export default Index;
