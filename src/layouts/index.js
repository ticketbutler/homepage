import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./index.css";

export const Layout = ({ children, TopMenu = [], FooterMenu = [] }) => (
  <div>
    <Navbar items={TopMenu} />
    {typeof children === "function" ? children() : children}
    <Footer items={FooterMenu} />
  </div>
);

// Dummy layout
export default ({ children }) => children();
