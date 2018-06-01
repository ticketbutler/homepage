import React from "react";

import "./index.css";

import Hero from '../components/Header';
import Footer from "../components/Footer";

const Layout = ({ children }) => (
  <div>
    <Hero/>
    {typeof children === "function" ? children() : children}
    <Footer />
  </div>
);

export default Layout;
