import React from "react";
import Navbar from '../components/navbar';
import Footer from "../components/footer";
import "./index.css";

const Layout = ({ children }) => (
  <div>
    <Navbar/>
    {typeof children === "function" ? children() : children}
    <Footer />
  </div>
);

export default Layout;
