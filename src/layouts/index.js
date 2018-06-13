import React from "react";
import Navbar from "../components/navbar";
import Contact_page from "../components/Contact";
import NewsLetter_Page from "../components/newsletter_page";
import Footer from "../components/footer";
import "./index.css";

export const Layout = ({
  children,
  TopMenu = [],
  FooterMenu = [],
  Features = [],
  Integration = [],
  Company = [],
  Contact = []
}) => (
  <div>
    <Navbar items={TopMenu} />
    {typeof children === "function" ? children() : children}
    <NewsLetter_Page />
    <Contact_page items={Contact} />
    <Footer
      items={FooterMenu}
      features={Features}
      integration={Integration}
      company={Company}
    />
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-70000511-3"
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments)}
      gtag('js', new Date());
    
      gtag('config', 'UA-70000511-3');`
      }}
    />
  </div>
);

// Dummy layout
export default ({ children }) => children();
