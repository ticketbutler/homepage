import React from "react";

const itemMargin = 25;
const Footer = ({ linkLists }) => (
  <footer
    css={{
      width: "100%",
      backgroundColor: "#f9fafc",
      padding: "50px 0",
      position: "relative"
    }}
  >
    <div
      onClick={() => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      }}
      id="to_top"
      css={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        top: "-30px",
        width: "60px",
        height: "60px",
        background: "#f9fafc",
        borderRadius: "50%",
        border: "1.5px solid #356be9",
        textDecoration: "none",
        transition: "all .2s ease",
        cursor: "pointer",
        color: "#868e99",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        ":hover": {
          top: "-40px",
          border: "1.5px solid #356be9"
        }
      }}
    >
      <div css={{ transform: "rotate(90deg)", marginRight: "-5px" }}>
        &#171;
      </div>
      <div css={{ fontSize: "14px" }}>top</div>
    </div>
    <div
      css={{
        width: "100%",
        padding: "3vw 20px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between"
      }}
    >
      <div css={{ margin: itemMargin + "px" }}>
        <a href="/">
          <img src="/img/logo_purple.png" style={{ maxWidth: 200 }} />
        </a>

        <div
          style={{
            color: "#868e99",
            fontSize: 15,
            letterSpacing: 1.15,
            marginTop: "20px"
          }}
        >
          Ticketbutler IVS <br /> CVR: 38404687
        </div>
      </div>

      {linkLists.map(({ heading, items }, i) => (
        <div
          key={i}
          css={{
            width: "100%",
            maxWidth: "260px",
            height: "100%",
            margin: itemMargin + "px"
          }}
        >
          <h3
            css={{
              color: "#356be9",
              fontWeight: "bold",
              marginBottom: "20px"
            }}
          >
            {heading}
          </h3>

          {items.map((item, i) => (
            <a
              key={i}
              href={item.path}
              css={{
                display: "block",
                textDecoration: "none",
                color: "#868e99",
                paddingBottom: "10px",
                ":hover": {
                  color: "#333f52"
                }
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      ))}
    </div>
    <div css={{ fontSize: "18px", textAlign: "center", marginTop: "2%" }}>
      Made with ❤️ in Copenhagen
      <br />
      <a href="mailto:hello@ticketbutler.io" css={{ color: "#333f52" }}>
        hello@ticketbutler.io
      </a>
    </div>
  </footer>
);

export default Footer;
