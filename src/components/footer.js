import React from "react";
import styled from "styled-components";

const FooterTag = styled.footer`
  height: auto;
  width: 100%;
  background-color: #f9fafc;
  padding: 0px 110px;

  @media (max-width: 1080px) {
    padding: 0 45px;
  }
  @media (max-width: 768px) {
    padding: 0 42px;
  }

  @media (max-width: 600px) {
    padding: 0 40px;
  }

  @media (max-width: 540px) {
    padding: 0 30px;
    height: auto;
  }

  @media (max-width: 376px) {
    padding: 0 30px 20px;
  }
`;

const ContentDiv = styled.div`
    width: 100%;
    height: 140px;
    display:block;
    a {
        width: 25%;
        height: auto;
        display: inline-block;
        text-align: center;
        text-decoration: none;

        > span {
            color: #333F52;
            font-family: Hind;
            letter-spacing: .5px;
            font-size: 18px;
            line-height: 140px;
            &:hover {
                opacity: .85;
            }
        }
    }
    @media (max-width: 1200px) { 
        a {
            span {
                 font-size: 15px;
            }
        }
    }

    @media (max-width: 970px) { 
        a {
            span {
                 font-size: 10px;
            }
        }
    }

    @media (max-width: 874px) { 
        a {
            span {
                 font-size: 10px;
            }
        }
    }
    @media (max-width: 720px) {
        padding: 25px 0; 
        height: auto;
        a {
            width: 50%;
            span {
                line-height: 40px;
                justify-content: center;
                 font-size: 13px;
            }
        }
    }
    @media (max-width: 455px) {
        padding: 25px 0; 
        a {
            width: 100%;
        }
    }
        
}`;

const TopFooter = styled.div`
  width: 100%;
  height: 500px;
  dislpay: block;
  padding: 100px 0px;
  padding-bottom: 20px;

  > div#footer_logo {
    width: 25%;
    display: inline;
    float: left;

    > a {
      width: 100%;
      display:block;
      img{
          width: 170px;
          margin-bottom: 0;
          line-height: 100px;
      }
    }
    > span {
      height: 38px;
      color: #868e99;
      font-family: Montserrat;
      font-size: 15px;
      letter-spacing: 1.15px;
      line-height: 19px;
    }
  }

  > ul {
    width: 25%;
    margin: auto;
    height: 100%;
    display: inlnie;
    float: left;

    h3 {
      height: 19px;

      color: #356be9;
      font-family: Montserrat;
      font-size: 15px;
      font-weight: bold;
      letter-spacing: 1.15px;
      line-height: 19px;
      margin-left: auto;
      margin-right: auto;
      width: 12em;
    }
    li {
      list-style: none;
      font-family: Montserrat;
      font-size: 15px;
      font-weight: 300;
      letter-spacing: 1.15px;
      line-height: 19px;
      margin-left: auto;
      margin-right: auto;
      width: 12em;
      transition: all 0.3s ease;

      a {
        text-decoration: none;
        color: #868e99;
        &:hover {
          text-decoration: none;
          color: #333f52;
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: 900px) {
    height: 650px;
    > div#footer_logo {
      width: 50%;
      
      padding-left: 5%;
      > h1 {
        margin-left: auto;
        margin-right: auto;
      }
      > span {
      }
    }
    > ul {
      width: 50%;
      height: auto;

      margin-bottom: 40px;
    }
  }

  @media (max-width: 500px) {
    > div#footer_logo {
      width: 100%;
      padding-left: 0%;
      > a {
        img{
          display: block;
          margin: 10px auto;

        }
      }
      > span {
        text-align: center;
        display: block;
        margin-bottom: 50px;
      }
    }
    > ul {
      width: 100%;
      text-align: center;

      margin-bottom: 40px;
    }
  }
`;

const Footer = ({ features, integration, company, items }) => (
  <FooterTag>
    <TopFooter>
      <div id="footer_logo">
        <a href="/"><img src={"../img/logo_blue.png"}/></a>
        
        <span>
          2018 TicketButler IVS <br /> CVR: 38404687
        </span>
      </div>

      <ul className="Future footer_ul">
        <h3>Features</h3>
        {features.map(item => (
          <li>
            <a href={item.path}>{item.label}</a>
          </li>
        ))}
      </ul>
      <ul className="Integration footer_ul">
        <h3>Hjælpecenter</h3>

        {integration.map(item => (
          <li>
            <a href={item.path}>{item.label}</a>
          </li>
        ))}
      </ul>
      <ul className="Company footer_ul">
        <h3>Om os</h3>
        {company.map(item => (
          <li>
            <a href={item.path}>{item.label}</a>
          </li>
        ))}
      </ul>
    </TopFooter>
    <ContentDiv>
      {items.map(item => (
        <a href={item.path}>
          <span>{item.label}</span>
        </a>
      ))}
    </ContentDiv>

    <div className="clear-fix" />
    <style jsx>{`
      .clear-fix {
        clear: both;
      }
    `}</style>
  </FooterTag>
);

export default Footer;
