import React from "react";

const Company_logos = ({ items, heading }) => {
  return (
    <section className="container logo_section">
      <div>
        <h2>{heading}</h2>

        <div>
          {items.map((item, i) => (
            <img key={i + "v"} src={item.image} alt={item.alt} />
          ))}
        </div>
      </div>

      <style jsx>{`
        section.logo_section {
          padding: 100px 0;
          width: 100%;
          position: relative;
        }

        .logo_section div {
          width: 100%;
        }

        .logo_section div h2 {
          display: block;
          text-align: center;
          color: #333f52;
          font-family: Hind;
          font-size: 20px;
          font-weight: bold;
          line-height: 35px;
        }

        .logo_section div div {
          display: flex;
          justify-content: center;
          -webkit-flex-wrap: wrap;
          flex-wrap: wrap;
          width: 100%;
          height: auto;
          .logo_section div div img {
            height: 40px;
            margin: 10px 20px;
            opacity: 0.6;
          }
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
