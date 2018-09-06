import React from "react";

// import { Button } from "./elements/elements";

const Newsletter_Page = () => {
  return (
    <section className="container newsletter_page">
      <div className="content">
        <h1>Tilmeld Ticketbutler Nyhedsbrev</h1>
        <form
          className="newsletter"
          name="newsletter"
          method="post"
          data-netlify="true"
          action="/thanks_page/"
        >
          <label>
            <input name="email" type="email" placeholder="Din email her" />
          </label>

          <button id="newsletter_btn">
            <span>
              Tilmeld <em>&#187;</em>
            </span>
          </button>
        </form>
      </div>

      <style jsx>{`
      section {
        margin-top: 0;
      }

      section.container.newsletter_page{
        padding: 110px 0;
        width: 100%;
        position: relative;
      }

      button#newsletter_btn{
      height: 60px;
      width: 200px;
      display: inline;
      float: right;
      border-radius: 29px;

      border: 0;
      background: linear-gradient(90deg, #326de9 0%, #7e52e8 100%);
      text-decoration: none;
      text-align: center;
      position: relative;
      transition: all 0.3s;
          }
      button#newsletter_btn:hover {
        box-shadow: 0px 3px 20px -6px rgba(0, 0, 0, 0.3);
        cursor: pointer;

      }
        button#newsletter_btn:hover span em {
          margin-left: 10px;
          opacity: 1;
      }

      button#newsletter_btn span {
        color: #ffffff;
        font-family: Montserrat;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        transition: all 0.3s;

      }
      button#newsletter_btn span em{
        font-size: 20px;
        margin-left: -10px;
        opacity: 0;
        transition: all .3s;
      }

      @media (max-width: 768px) {
        button#newsletter_btn{
        width: 190px;
        height: 55px;
      }
      }
      @media (max-width: 600px) {
        button#newsletter_btn{
        width: 180px;
        height: 50px;
        }
      }
      @media (max-width: 530px) {
        button#newsletter_btn{
        display: block;
        float: none;
        margin-left: 50%;
        transform: translateX(-50%);
        }
      }
      @media (max-width: 376px) {
        button#newsletter_btn span {
          font-size: 13px;
        }
      }

      .content{
            width: 100%;
      }
      .content h1 {
        display: block;
        height: 140px;
        width: 570px;
        color: #333f52;
        font-family: Hind;
        font-size: 55px;
        font-weight: bold;
        line-height: 70px;
        text-align: center;
        margin: auto;
        margin-bottom: 50px;
      }
    
      .content form {
        width: 570px;
        height: auto;
        display: inline-block;
        margin-left: 50%;
        transform: translateX(-50%);
        position: relative;
        margin-bottom: 0;
      }
      .content form label {
          height: 60px;
          width: 350px;
          display: inline;
          float: left;
          position: relative;
      }
      .content form label input {
            width: 100%;
            height: 100%;
            border: 1px solid #979797;
            border-radius: 49px;
            font-family: Montserrat;
            display: inline;
            padding-left: 20px;
      }
      .content form label input &::placeholder {
              font-size: 15px;
              font-family: Montserrat;
            }

      @media (max-width: 1080px) {
        section.container.newsletter_page{
          padding: 150px 0;}
        }

      }
      @media (max-width: 768px) {
        section.container.newsletter_page{
         padding: 110px 0;
        }

        .content h1 {
          padding: 0 30px;
          height: auto;
          font-size: 50px;
          line-height: 55px;
        }
        .content form {
          width: 520px;
         
        }
        .content form label {
          height: 55px;
          width: 300px;
        }
      }
    
      @media (max-width: 600px) {
       section.container.newsletter_page{
          padding: 70px 0;
       }

       .content h1 {
        width: 100%;
        padding: 0 30px;
        height: auto;
        font-size: 38px;
        line-height: 40px;
      }
      .content form {
        width: 100%;
        margin-left: 0%;
        transform: translateX(0%); 
        padding: 0 30px;
      }
        .content form  label {
          height: 50px;
          width: 270px;
        }
      
      }

      @media (max-width: 530px) {

        .content form {
          width: 100%;
          margin-left: 0%;
          transform: translateX(0%);
          padding: 0 20px;
        }
          .content form  label {
            width: 340px;
            display: block;
            margin-left: 50%;
            transform: translateX(-50%);
            margin-bottom: 25px;
          }
      }

      @media (max-width: 376px) {
        section.container.newsletter_page{
         padding: 40px 0px;
        }
        .content h1 {
          width: 100%;
          font-size: 28px;
          line-height: 35px;
        }
        .content form {
          width: 100%;
          margin-left: 0%;
          transform: translateX(0%);
          padding: 0 20px;
        }
          .content form  label  {
            height: 50px;
            width: 100%;
          }
      }
      `}</style>
    </section>
  );
};

export default Newsletter_Page;
