import React from "react";
import { Link } from "gatsby";
import { SmallTriangle, SquareShape } from "./elements/shapes";
import { WindowHelper } from "../components/helpers";

const SubscriptionPrices = () => (
  <WindowHelper>
    {window => {
      const styles = {
        priceCard: {
          margin: "20px",
          maxWidth: window.width > 800 ? 350 : "100%",
          height: "auto",

          borderRadius: 5,
          boxShadow: "2px 2px 30px 0 #848EA2",
          background: "#ffffff",
          color: "#333",
          display: "block"
        },
        h1: {
          fontSize: 25,
          paddingTop: 50
        },
        ul: {
          listStyle: "none",
          marginTop: 30,
          marginBottom: 30
        },
        p: {
          color: "#a1a1a1",
          fontSize: 20,
          margin: "0 auto",
          width: "100%",
          paddingTop: 20,
          paddingBottom: 20
        },
        numbers: {
          color: "#1ac5c5",
          height: 160,
          padding: 50
        },
        span: {
          fontSize: 50
        },
        line: {
          boxSizing: "border-box",
          height: "2px",
          width: "150px",
          border: "2px solid #1ac5c5",
          margin: "0 auto"
        }
      };
      return (
        <section
          style={{
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 100,
            paddingBottom: 10
          }}
        >
          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: " center"
            }}
          >
            <div style={styles.priceCard}>
              <h1 style={styles.h1}>{priceCard1Heading}</h1>
              <div style={styles.line} />
              <p style={styles.p}>{priceCard1Subtitle}</p>
              <h3 style={styles.numbers}>
                <span style={styles.span}>799</span> kr <br />
                {priceCardtext}{" "}
              </h3>
              <ul style={styles.ul}>
                <li>{priceCardFirstListText}</li>
                <li>{priceCardSecondListText} </li>
                <li>{priceCardThirdListText} </li>
              </ul>
            </div>
            <div style={styles.priceCard}>
              <h1 style={styles.h1}>{priceCard2Heading}</h1>
              <div style={styles.line} />
              <p style={styles.p}>{priceCard2Subtitle}</p>
              <div
                style={{
                  height: 160,
                  background: "linear-gradient(90deg, #28D8A7 0%, #1DC9CA 100%)"
                }}
              >
                <h3 style={{ color: "white", fontSize: 60, padding: 50 }}>
                  {priceCard2text}{" "}
                </h3>
              </div>
              <ul style={styles.ul}>
                <li>{priceCardFirstListText} </li>
                <li>{priceCard2SecondListText}</li>
                <li>{priceCardThirdListText} </li>
              </ul>
            </div>
            <div style={styles.priceCard}>
              <h1 style={styles.h1}>{priceCard3Heading}</h1>
              <div style={styles.line} />
              <p style={styles.p}>{priceCard3Subtitle}</p>
              <h3 style={styles.numbers}>
                <span style={styles.span}>2.499 </span> kr <br />
                {priceCardtext}{" "}
              </h3>
              <ul style={styles.ul}>
                <li>{priceCardFirstListText} </li>
                <li>{priceCardSecondListText} </li>
                <li>{priceCardThirdListText} </li>
                <li>{priceCard3ListText} </li>
              </ul>
            </div>
          </div>
          <p
            style={{
              color: "#b9b8b8",
              fontSize: 20
            }}
          >
            {momsText}
          </p>
        </section>
      );
    }}
  </WindowHelper>
);
export default SubscriptionPrices;
