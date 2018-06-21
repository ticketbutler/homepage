import React from "react";
import styled from "styled-components";
// import $ from "jquery";

const Section = styled.section`
  padding: 110px 0;
  width: 100%;
  position: relative;

  @media (max-width: 1080px) {
    padding: 150px 0;
  }
  @media (max-width: 768px) {
    padding: 110px 0;
  }

  @media (max-width: 600px) {
    padding: 70px 0;
  }

  @media (max-width: 376px) {
    padding: 40px 0px;
  }
`;

const Content = styled.div`
  width: 100%;
  > h1 {
    display: block;
    height: 140px;
    width: 566px;
    color: #333f52;
    font-family: Hind;
    font-size: 55px;
    font-weight: bold;
    line-height: 70px;
    text-align: center;
    margin: auto;
    margin-bottom: 50px;
  }

  > form {
    width: 600px;
    height: auto;
    display: inline-block;
    margin-left: 50%;
    transform: translateX(-50%);
    position: relative;
    margin-bottom: 0;
    label {
      height: 60px;
      width: 350px;
      display: inline;
      float: left;
      position: relative;
      input {
        width: 100%;
        height: 100%;
        border: 1px solid #979797;
        border-radius: 49px;
        display: inline;
        padding-left: 20px;
        &::placeholder {
          font-size: 15px;
          font-family: Montserrat;
        }
      }
    }
  }

  @media (max-width: 768px) {
    > h1 {
      padding: 0 30px;
      height: auto;
      font-size: 50px;
      line-height: 55px;
    }
    > form {
      width: 520px;
      label {
        height: 55px;
        width: 300px;
      }
    }
  }

  @media (max-width: 600px) {
    > h1 {
      width: 100%;
      padding: 0 30px;
      height: auto;
      font-size: 38px;
      line-height: 40px;
    }
    > form {
      width: 100%;
      margin-left: 0%;
      transform: translateX(0%);
      padding: 0 30px;
      label {
        height: 50px;
        width: 270px;
      }
    }
  }

  @media (max-width: 530px) {
    > form {
      width: 100%;
      margin-left: 0%;
      transform: translateX(0%);
      padding: 0 20px;
      label {
        width: 100%;
        display: block;
        margin-bottom: 25px;
      }
    }
  }

  @media (max-width: 376px) {
    > h1 {
      width: 100%;
      font-size: 28px;
      line-height: 35px;
    }
    > form {
      width: 100%;
      margin-left: 0%;
      transform: translateX(0%);
      padding: 0 20px;
      label {
        height: 50px;
        width: 100%;
      }
    }
  }
`;

const Button = styled.button`
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
  &:hover {
    box-shadow: 0px 3px 20px -6px rgba(0, 0, 0, 0.3);
    > span {
      &::after {
        opacity: 1;
        margin-left: 10px;
      }
    }
  }

  > span {
    color: #ffffff;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    transition: all 0.3s;

    &::after {
      content: "\00BB";
      opacity: 1;
      font-size: 20px;
      opacity: 0;
      margin-left: -8px;
      z-index: 10;
      color: #fff;
      transition: 0.3s;
    }
  }
  @media (max-width: 768px) {
    width: 190px;
    height: 55px;
  }
  @media (max-width: 600px) {
    width: 180px;
    height: 50px;
  }
  @media (max-width: 530px) {
    display: block;
    float: none;
    margin-left: 50%;
    transform: translateX(-50%);
  }
  @media (max-width: 376px) {
    > span {
      font-size: 13px;
    }
  }
`;

const Newsletter_Page = () => {
  return (
    <Section className="container">
      <Content>
        <h1>Tilmeld Ticketbutler Nyhedsbrev</h1>
        <form
          className="newsletter"
          name="newsletter"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <label>
            <input name="email" type="email" placeholder="Din email her" />
          </label>
          <Button>
            <span>Tilmeld</span>
          </Button>
        </form>
      </Content>
    </Section>
  );
};

export default Newsletter_Page;
