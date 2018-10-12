import React from "react";
import { withWindow } from "../components/helpers";
const ImagesList = ({ images, heading, imageStyle, sectionStyle }) => (
  <section style={{ padding: 20 }}>
    {heading && (
      <p
        style={{
          textAlign: "center",
          fontSize: 24,
          color: "#6c7582",
          fontWeight: 500,
          margin: 50
        }}
      >
        {heading}
      </p>
    )}
    <div
      style={{
        display: "flex",
        background: "#fff",
        zIndex: "1",
        flexFlow: "row wrap",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
        ...sectionStyle
      }}
    >
      {images.map(img => (
        <a target="_blank" rel="noopener noreferrer" href={img.href}>
          <img
            alt="logo"
            style={{
              objectFit: "contain",
              maxHeight: 80,
              maxWidth: 120,
              margin: 20,
              filter: "grayscale(100%)",
              ...imageStyle
            }}
            src={img.src}
          />
        </a>
      ))}
    </div>
  </section>
);

export default withWindow(ImagesList);
