import React from "react";

const Company_logos = ({ items, heading }) => {
  return (
    <section className="logo_section">
      <div className="content">
        <h2>{heading}</h2>

        <div className="logoes">
          {items.map((item, i) => (
            <img key={i} src={item.image} alt={item.alt} />
          ))}
        </div>
      </div>

      <style jsx>{`
        section.logo_section {
          padding: 60px 0;
          padding-top: 0px;
          width: 100%;
          position: relative;
        }

        section.logo_section div.content {
          width: 100%;
        }

        section.logo_section div.content h2 {
          display: block;
          text-align: center;
          color: #333f52;
          font-family: Hind;
          font-size: 30px;
          font-weight: bold;
          line-height: 35px;
        }

        div.logoes {
          display: flex;
          justify-content: center;
          -webkit-flex-wrap: wrap;
          flex-wrap: wrap;
          width: 100%;
          // max-width: 1200px;
          // margin: 0 auto;
          height: auto;
        }
        div.logoes img {
          max-height: 2.9em;
          max-width: 14em;
          object-fit: contain;
          margin: 10px 35px;
          opacity: 0.7;
        }

        @media (max-width: 1080px) {
          section {
            padding: 100px 0;
          }
        }
        @media (max-width: 768px) {
          section {
            padding: 100px 0;
          }
        }

        @media (max-width: 600px) {
          section {
            padding: 150px 0;
          }
        }

        @media (max-width: 376px) {
          section {
            padding: 120px 0px;
          }
        }
      `}</style>
    </section>
  );
};

export default Company_logos;
