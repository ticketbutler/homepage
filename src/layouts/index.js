import React from "react";
import Navbar from "../components/navbar";
import Contact_page from "../components/contact";
import Footer from "../components/footer";
import "./index.css";

export const Layout = ({ children, TopMenu = [], FooterMenu = [], Contact= [], }) => (
  <div>
    <Navbar items={TopMenu} />
    {typeof children === "function" ? children() : children}
    <Contact_page items={Contact}/>

    <Footer items={FooterMenu} />
  </div>
);

// Dummy layout
export default ({ children }) => children();
