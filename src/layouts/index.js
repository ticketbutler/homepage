import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import Navbar from "../components/navbar";
import Contact from "../components/Contact";
import Footer from "../components/footer";
import "./index.css";

export const Layout = ({
  children,
  nav,
  currentLocale,
  locales,
  metaData,
  meta_description,
  title
}) => (
  <div>
    <Helmet>
      <link
        rel="shortcut icon"
        type="image/png"
        href="/../img/Favicon-tbsmall.png"
        sizes="16x16"
      />
      <link rel="icon" href="/img/Favicon-tbsmall.png" type="image/png" />
      <meta property="og:image" content="../img/logox400.png" />
      <meta property="og:site_name" content={`${metaData.companyName}`} />

      <meta name="theme-color" content="#1DC9CC" />
      <meta name="msapplication-navbutton-color" content="#326DE9" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#1DC9CC" />
      <title>Ticketbutler</title>
      <meta
        name="description"
        content="Gør dit event professionelt med et skræddersyet billetsystem"
      />
      <meta property="og:type" content="business.business" />
      <meta property="og:url" content={`${metaData.url}`} />
      <meta
        property="business:contact_data:street_address"
        content={`${metaData.address}`}
      />
      <meta
        property="business:contact_data:locality"
        content={`${metaData.locality}`}
      />
      <meta
        property="business:contact_data:region"
        content={`${metaData.region}`}
      />
      <meta
        property="business:contact_data:postal_code"
        content={`${metaData.postalCode}`}
      />
      <meta
        property="business:contact_data:country_name"
        content={`${metaData.country}`}
      />
      <script type="application/ld+json">
        {`
        {
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            "name": "Ticketbutler",
           
            "image": "https://test-ticketbutler.netlify.com/img/logo_blue.png",
            "@id": "",
            "url": "ticketbutler.io",
            "telephone": "89 80 12 80",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Esplanaden 7, København K",
                "addressLocality": "København",
                "postalCode": "1263",
                "addressCountry": "DA"
            },
            "sameAs": [
                "https://www.facebook.com/BilletFix/",
                "https://www.linkedin.com/company/billetfix/"
            ], 
            
            "founders": [
            {
              "@type": "Person",
              "name": "Mads Kjer",
              "sameAs": 
              "https://www.linkedin.com/in/madskjer/"
          
          },
          {
              "@type": "Person",
              "name": "Emil Brøgger Kjer",
              "sameAs": 
              "https://www.linkedin.com/in/emilkjer/"
              
          },
          {
              "@type": "Person",
              "name": "Kyle Thomson",
              "sameAs":
              "https://www.linkedin.com/in/kyle-thomson/"
              
          }
          ]
        }
        `}
      </script>

      <script src="https://www.googletagmanager.com/gtag/js?id=UA-70000511-3" />
      <script src="https://wchat.freshchat.com/js/widget.js" />

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
      <style
        dangerouslySetInnerHTML={{
          __html: `#hubspot-messages-iframe-container {
            max-height: 90%
        }`
        }}
      />
    </Helmet>
    <Navbar
      items={nav.topMenu}
      currentLocale={currentLocale}
      otherLocale={locales.filter(locale => locale.id !== currentLocale.id)[0]}
    />
    {typeof children === "function" ? children() : children}
    <Footer linkLists={nav.footerMenu} />
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
      id="hs-script-loader"
      async
      defer
      src="//js.hs-scripts.com/3835323.js"
    />
  </div>
);
