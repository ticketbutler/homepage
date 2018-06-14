import React from "react";
import {Helmet} from "react-helmet";

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
    
    
    <Helmet>
       <title>TicketButler</title>
       <script src="https://www.googletagmanager.com/gtag/js?id=UA-70000511-3"></script>
       <script src="https://wchat.freshchat.com/js/widget.js"></script>
  
   
    <script
    dangerouslySetInnerHTML={{
        __html: `
      (function(a,l,b,c,r,s){
      _nQc=c,r=a.createElement(l),s=a.getElementsByTagName(l)[0];
      r.async=1;
      r.src=l.src=("https:"==a.location.protocol?"https://":"http://")+b;
      s.parentNode.insertBefore(r,s);})
      (document,"script","serve.albacross.com/track.js","89331168");`
     }}
    />
    </Helmet>
    <script
      async
      dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments)}
      gtag('js', new Date());
      gtag('config', 'UA-70000511-3');`
    }}
    />

    <script
      async
      dangerouslySetInnerHTML={{
          __html: `window.fcWidget.init({
              token: "caada681-1687-44bf-b803-7e061a49883e",
              host: "https://wchat.freshchat.com",
            });`
      }}
    ></script>
    
  </div>
);


// Dummy layout
export default ({ children }) => children();
