import React from "react";

const Thanks = ({ thanks, thanks_message, call_us, back_to_side_button }) => (
  <div className="thanks_page">
    <div className="content">
      <h1
        style={{
          color: "#414546",
          fontFamily: "Montserrat"
        }}
      >
        {thanks}
      </h1>
      <span className="tak_message">{thanks_message}</span>
      <span className="akutte">{call_us}</span>
      <div id="thanks">
        <a
          href="/da/"
          style={{
            float: "left",
            left: "0",
            transform: "translateX(0)"
          }}
        >
          <span />
          {back_to_side_button}
          <span
            style={{
              transition: "all 0.3s"
            }}
          >
            &#187;
          </span>
        </a>
      </div>
    </div>

    <style jsx>{`
      .thanks_page {
        background: #f4f6f6;
        width: 100%;
        height: 100vh;
      }
      .thanks_page .content {
        width: 700px;
        height: 300px;
        background: #eeeeee;
        display: block;
        margin: 0 auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 25px 80px;
      }

      .tak_message {
        color: #414546;
        font-size: 22px;
        display: block;
        margin-bottom: 10px;
        font-family: Montserrat;
      }
      .akutte {
        font-size: 16px;
        color: #8c8c8c;
        font-family: Montserrat;
      }

      div#thanks {
        display: block;
        position: relative;
        width: 100%;
      }

      div#thanks a {
        position: absolute;
        right: 50%;
        transform: translateX(50%);
        width: auto;
        line-height: 60px;
        height: 60px;
        font-size: 14px;
        z-index: 0;
        margin-top: 20px;

        text-decoration: none;
        color: #ffffff;
        font-family: Montserrat;
        font-weight: bold;
        letter-spacing: 1.15px;
        text-align: center;
        border-radius: 51px;
        display: block;
        float: right;
        position: relative;
        color: #326de9;
        transition: all 0.3s ease;
      }

      div#thanks span {
        position: absolute;
        left: 0;
        opacity: 0;
        color: #326de9;
        transition: all 0.3s ease;
        transform: rotate(180deg);
      }

      div#thanks a:hover {
        margin-left: 14px;
      }
      div#thanks a:hover span {
        left: -14px;
        opacity: 1 !important;
      }

      @media (max-width: 1080px) {
        div#thanks a {
          font-size: 16px;
        }
      }

      @media (max-width: 768px) {
        div#thanks a {
          font-size: 15px;
        }
        .thanks_page .content {
          width: 550px;
          height: auto;
        }
        .tak_message {
          font-size: 18px;
        }
        .akutte {
          color: #8c8c8c;
        }
      }

      @media (max-width: 600px) {
        div#thanks a {
          font-size: 14px;
        }
        .thanks_page {
          padding: 20px;
          position: relative;
        }
        .thanks_page .content {
          width: 90%;
          height: auto;
          padding: 20px 40px;
        }
      }

      @media (max-width: 376px) {
        div#thanks a {
          font-size: 11px;
        }
        .thanks_page .content {
          padding: 20px;
        }
        .tak_message {
          margin-bottom: 10px;
        }
        .akutte {
          font-size: 14px;
        }
      }
    `}</style>
  </div>
);

export default Thanks;
