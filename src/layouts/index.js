import React from "react";
import { Helmet } from "react-helmet";
import { Global } from "@emotion/core";
import Navbar from "../components/navbar";
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
    <Global
      styles={{
        "html, body": {
          fontFamily: "Montserrat"
        }
      }}
    />
    <Helmet>
      <link
        rel="shortcut icon"
        type="image/png"
        href="/../img/Favicon-tbsmall.png"
        sizes="16x16"
      />
      <link rel="icon" href="/img/Favicon-tbsmall.png" type="image/png" />
      <meta
        prefix="og: http://ogp.me/ns#"
        property="og:image"
        content="https://ticketbutler.io/img/logoticketbutler.jpg"
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:description"
        content="Gør dit event professionelt med et skræddersyet billetsystem"
      />
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
        property="og:description"
        content="Gør dit event professionelt med et skræddersyet billetsystem"
      />
      <meta property="og:title" content="Ticketbutler" />

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
           
            "image": "https://ticketbutler.io/img/logoticketbutler.jpg",
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
                "https://www.facebook.com/ticketbutler/",
                "https://www.linkedin.com/company/ticketbutler/"
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

    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
 _linkedin_partner_id = "975602";
 window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
 window._linkedin_data_partner_ids.push(_linkedin_partner_id);
 </script><script type="text/javascript">
 (function(){var s = document.getElementsByTagName("script")[0];
 var b = document.createElement("script");
 b.type = "text/javascript";b.async = true;
 b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
 s.parentNode.insertBefore(b, s);})();`
      }}
    />
    <noscript>
      <img
        height="1"
        width="1"
        style="display:none;"
        alt=""
        src="https://dc.ads.linkedin.com/collect/?pid=975602&fmt=gif"
      />
    </noscript>
  </div>
);
