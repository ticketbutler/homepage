import React from "react";

import "./index.css";

// import Navbar from '../components/navbar';
// import Footer from "../components/footer";

const Layout = ({ children }) => (
  <div>
    {/* <Navbar/> */}
    {typeof children === "function" ? children() : children}
    {/* <Footer /> */}
  </div>
);

export default Layout;
