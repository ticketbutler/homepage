import React from "react";

class changeDir extends React.Component {
  render() {
    function changeDir() {
      let userLang = navigator.language || navigator.userLanguage;
      if (userLang === "da-DA") {
        window.location.href = "/da/";
      } else {
        window.location.href = "/en/";
      }
    }
    return (
      <div>
        {changeDir()}
        <h1 style={{ fontSize: "30px", margin: "25% 45%" }}>oi mate</h1>
      </div>
    );
  }
}
export default changeDir;
