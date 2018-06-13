import React from "react";
import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";

const Section = styled.section`
  padding: 0;
  width: 100%;
  text-align: center;
  margin-bottom: 0px;
`;

const LeftBox = styled.div`
    width: 50%;
    height: 100%;
    display:inline;
    float: left;
    padding: 110px;

    h1 {
        float: left;
        margin-left: 0px;
        margin-bottom: 50px;
        font-size: 50px;

    }
    > form {
        max-width: 100%;
        padding: 30px;
        margin: 50px auto;
        font-family: Montserrat;
        margin-bottom: 0;
        padding: 0;

        >ul {
            padding:0;
            margin:0;
            list-style:none;

            > li {
                min-height: 35px;
                display: block;
                width: 100%;
                float:left;
                margin-left: 50%;
                transform: translateX(-50%);
                position: relative;

                >label{
                    padding-top: 15px;
                    > input {
                        width: 400px;
                        display: block;
                        padding: 0 15px;
                        height: 40px;
                        border: 1px solid #CCC;
                        border-radius: 4px;
                        position: relative;
                        &::placeholder{
                            font-size: 15px;
                        }
                        
                    }
                    input:focus ~ span.floating-label{
                        font-size: 10px;
                      
                    }

                }
                
                &#message-field {
                    display: block;
                    float: left;
                    width: 100%;
                    margin-left: 50%;
                    transform: translateX(-50%);
                    >label{
                        > textarea{
                            width: 400px;
                            display:inline;
                            float: left;
                            height: 120px;
                            padding: 4px 15px;
                            border: 1px solid #CCC;
                            border-radius: 4px;
                            &::placeholder{
                                font-size: 15px;
                            }
                        }
                    }
                   
                }
              
            }
        }
    }
    @media (max-width: 1200px) {
        > form {
            >ul {
                > li {
                    >label{
                    > input {
                        width: 100%;
                    }
                }
                    &#message-field {
                >label{

                        > textarea{
                            width: 100%;
                        }
                    }
                }
                }
            }
        }
    }
    @media (max-width: 1080px) {
        
        padding: 110px 40px;
        h1 {
           
            font-size: 40px;
        }
    }
    @media (max-width: 768px) { 
        display: block;
        width: 100%;
        h1 {
            float: none;
            font-size: 40px;
        }
        > form {
            >ul {
                > li {
                    width: 400px;
                    >label{
                    > input {
                        width: 400px;
                    }
                }
                    &#message-field {
                        width: 400px;   
                        >label{                     
                        > textarea{
                            width: 400px;
                        }
                    }
                    }

            }
        }
        
    }

     @media (max-width: 500px) { 
        padding: 110px 30px;
        h1 {
            float: none;
            font-size: 30px;
        }
        > form {
            >ul {
                > li {
                    width: 100%;
                >label{
                    
                    > input {
                        width: 100%;
                    }}
                    
                    &#message-field {
                        width: 100%;
                >label{
                        
                        > textarea{
                            width: 100%;
                        }}
                    }
                }
            }
        }  
 }
`;

const Button = styled.button`
margin-top: 40px;
float: left;
height: 55px;
width: 200px;
display: block;
float:left;
border-radius: 29px;

border: 0;
background: linear-gradient(90deg, #326DE9 0%, #7E52E8 100%);
text-decoration:none;
text-align: center;
position: relative;
transition: all .3s;
    &:hover {
        box-shadow: 0px 3px 20px -6px rgba(0,0,0,0.30);
    > span {
            &::after {
                opacity: 1;
                margin-left: 10px;
            }
        }
    }
    
        
    > span {
    color: #FFFFFF;	
    font-family: Montserrat;	
    font-size: 16px;
    font-weight: bold;	
    text-align: center;
    transition: all .3s;

        &::after {
        content: '\00BB';
        opacity: 1;
        font-size: 20px;
        opacity: 0;
        margin-left: -8px;
        z-index: 10;
        color: #FFF;
        transition: 0.3s;
        }
    }

    @media (max-width: 920px) { 
        margin-left: 50%;
        transform:translateX(-50%);
        
    }
    @media (max-width: 768px) { 
        width: 190px;
        >span {
            font-size: 15px;
            line-height: 40px;
            &::after {
                font-size: 18px;
                line-height: 39px;
        }
        }
    }
    @media (max-width: 600px) { 
        >span {
            font-size: 14px;
            line-height: 40px;
            &::after {
                font-size: 18px;
                line-height: 39px;
        }
        
    }
    @media (max-width: 376px) { 
        width: 180px;

       height: 45px;
       >span {
        font-size: 12px;
        line-height: 40px;
        &::after {
            font-size: 16px;
            line-height: 39px;
    }
        
    }
`;

const RightBox = styled.div`
    width: 50%;
    height: 660px;
    padding: 110px;
    float:right;
    display:inline-block;
    background: linear-gradient(to right, rgba(50, 109, 233, .85) , rgba(126, 82, 232, .85)), url("../img/kontaktmin.png") no-repeat center center ;
    color: #FFF;
    
    > div.content {
        ul{
            li{
                display: block;
                list-style: none;
                margin: 50px auto;
                width: 340px;
                &:first-child{
                    margin-top: 0;
                }
                &:last-child{
                    margin-bottom: 0;
                }
            }
        }
        i {
           display: inline;
           float:left;
           font-size: 20px;
        }
        span {
            display:block;
            text-align: center;
            width: 250px;
            text-align:left;
            margin-left: 50%;
            transform: translateX(-50%);
            color: #fff;
            font-family: Montserrat;
            font-size: 20px;
            font-weight: 500;
            text-decoration: none;
            &:nth-child(2){
                margin-bottom: 10px;
            }
            &#address,&#phone, &#support{
                opacity: .5;
                font-size: 16px;
            }
        }	
        }
    }

    @media (max-width: 1080px) {
        padding: 110px 40px;
    }
    @media (max-width: 768px) { 
        height: auto;
        display: block;
        width: 100%;   
        height: 550px;
    }

    @media (max-width: 350px) { 
        padding: 110px 30px;
        height: 500px;
        
        > div.content {
            ul{
                li{
                    display: block;
                    list-style: none;
                    margin: 50px auto;
                    width: 100%;
                }
            }
            i {
               float:left;
               font-size: 15px;
               width: 40px;
               height: 30px;
               width: 20%;
               text-align: left;
               margin-left: -10px;
            }
            span {
                width: 80%
                font-size: 14px;
                
                &#address,&#phone, &#support{
                    font-size: 12px;
                }
                }	
            }
        }
       
        
    }
`;

const Contact_page = ({ items }) => (
  <Section id="contact">
    <div className="container">
      <LeftBox className="left-box contact">
        <h1>Kontakt</h1>
        <form
          className="contact-form"
          name="contact-form"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <ul>
            <li>
              <label>
                <input
                  type="text"
                  name="name"
                  id="align-left"
                  placeholder="Dit navn"
                />
              </label>
            </li>
            <li>
              <label>
                <input
                  type="email"
                  name="email"
                  id="align-right"
                  placeholder="Din email"
                />
              </label>
            </li>
            <li id="message-field">
              <label>
                <textarea name="message" placeholder="Besked" />
              </label>
            </li>
          </ul>
          <Button>
            <span>Send besked</span>
          </Button>
          <div className="clear-fix" />
        </form>
      </LeftBox>
      <RightBox>
        <div className="content">
          <ul>
            <li>
              <i className="fa fa-map-marker" />
              <span>Adresse </span>
              <span id="address"> {items.address}</span>
            </li>
            <li>
              <i className="fa fa-phone" />
              <span>Telefon</span>
              <span id="phone">{items.phone}</span>
            </li>
            <li>
              <i className="fa fa-envelope" />
              <span>Generel support</span>
              <span id="support">{items.support}</span>
            </li>
          </ul>
        </div>
      </RightBox>
    </div>
    <div className="clear-fix" />

    <style jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .clear-fix {
        clear: both;
      }
    `}</style>
  </Section>
);

export default Contact_page;
