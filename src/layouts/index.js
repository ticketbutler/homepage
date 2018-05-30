import React from "react";

import "./index.css";

const Layout = ({ children }) => (
  <div>{typeof children === "function" ? children() : children}</div>
);

export default Layout;
