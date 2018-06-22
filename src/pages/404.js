import React from "react";

const NotFoundPage = () => (
  <div
    style={{
      minHeight: "85vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <img
      src={"../img/ticketbutler_logo.png"}
      width={170}
      style={{ margin: "50px 0" }}
    />
    <h1>Sorry, there's nothing here</h1>
    <p>
      <a href="/da/">Go back home</a>.
    </p>
  </div>
);

export default NotFoundPage;
