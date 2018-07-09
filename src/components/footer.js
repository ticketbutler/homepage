import React from "react";

const FooterSection = ({ features, integration, company, items }) => (
  <footer>
    <div className="top_footer">
      <div id="footer_logo">
        <a href="/">
          <img src={"../img/logo_blue.png"} />
        </a>

        <span>
          2018 Ticketbutler IVS <br /> CVR: 38404687
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
      </div>
    <div className="footer_bottom">
      {items.map(item => (
        <a href={item.path}>
          <span>{item.label}</span>
        </a>
      ))}
    </div>

    <div className="clear-fix" />
    <style jsx>{`
      .clear-fix {
        clear: both;
      }

      footer {
      height: auto;
      width: 100%;
      background-color: #f9fafc;
      padding: 0px 110px;
      }

      .top_footer{
        width: 100%;
        height: 500px;
        dislpay: block;
        padding: 100px 0px;
        padding-bottom: 20px;
      }
   
    
      .top_footer div#footer_logo {
        width: 25%;
        display: inline;
        float: left;
      }
      .top_footer div#footer_logo a {
        width: 100%;
        display: block;
      }
      .top_footer div#footer_logo a img {
          width: 170px;
          margin-bottom: 0;
          line-height: 100px;
        }
      
      .top_footer div#footer_logo span {
        height: 38px;
        color: #868e99;
        font-family: Montserrat;
        font-size: 15px;
        letter-spacing: 1.15px;
        line-height: 19px;
      }
      
    
      .top_footer ul {
        width: 25%;
        margin: auto;
        height: 100%;
        display: inlnie;
        float: left;
      }
        .top_footer ul h3 {
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
        .top_footer ul li {
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
        }
        .top_footer ul li a {
            text-decoration: none;
            color: #868e99;
        }
        .top_footer ul li a:hover {
          text-decoration: none;
          color: #333f52;
          cursor: pointer;
        }
    

      .footer_bottom {
        width: 100%;
        height: 140px;
        display:block;
      }
      .footer_bottom a {
        width: 25%;
        height: auto;
        display: inline-block;
        text-align: center;
        text-decoration: none;
      }
      .footer_bottom a span {
        color: #333F52;
        font-family: Hind;
        letter-spacing: .5px;
        font-size: 18px;
        line-height: 140px;
      }
      .footer_bottom a:hover {
          opacity: .85;
      }

      @media (max-width: 1200px) { 
        .footer_bottom a span{
          font-size: 15px;
        }
        
    }

      @media (max-width: 1080px) {
        footer {
          padding: 0 45px;
        }
      }

      @media (max-width: 970px) { 
        .footer_bottom a span{
                 font-size: 10px;
            }
        
    }

    
    @media (max-width: 900px) {
      .top_footer{
      height: 650px;
      }
      .top_footer div#footer_logo {
        width: 50%;
  
        padding-left: 5%;
      }
      .top_footer ul {
        width: 50%;
        height: auto;
  
        margin-bottom: 40px;
      }
    }
  

    @media (max-width: 874px) { 
      .footer_bottom a span{
        font-size: 10px;
      } 
    }
      @media (max-width: 768px) {
        footer {        
          padding: 0 42px;
        }
      }

      @media (max-width: 720px) {
        .footer_bottom {
        padding: 25px 0; 
        height: auto;
        }
        .footer_bottom a  {
            width: 50%;
        }
        .footer_bottom a span{ 
            line-height: 40px;
            justify-content: center;
              font-size: 13px;
        }
    }
    
      @media (max-width: 600px) {
        footer {        
          padding: 0 40px;
        }
      }
    
      @media (max-width: 540px) {
        footer {        
          padding: 0 30px;
          height: auto;
        }
      }

      @media (max-width: 500px) {
        .top_footer div#footer_logo {
          width: 100%;
          padding-left: 0%;
        }
        .top_footer div#footer_logo a img{
        
          display: block;
          margin: 10px auto;
        }
          
        .top_footer div#footer_logo span {
          text-align: center;
          display: block;
          margin-bottom: 50px;
        }
      
        .top_footer ul {
          width: 100%;
          text-align: center;
    
          margin-bottom: 40px;
        }
      }

      
    @media (max-width: 455px) {
      .footer_bottom{
        padding: 25px 0;
      } 
      .footer_bottom a {
          width: 100%;
      }
    }
    
    @media (max-width: 376px) {
      footer {        
        padding: 0 30px 20px;
      }
    }
   
        
    `}</style>
    </footer>
);

export default FooterSection;
