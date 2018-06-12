import React from "react";
import styled from "styled-components";
// import $ from "jquery";

const Section = styled.section`
  padding: 110px;
  padding-left: 0;
  width: 100%;
  position: relative;

  @media (max-width: 1080px) {
    padding: 150px 0;
  }
  @media (max-width: 768px) {
    padding: 110px 0;
  }

  @media (max-width: 600px) {
    padding: 100px 0;
  }

  @media (max-width: 376px) {
    padding: 80px 0px;
  }
`;

const Content = styled.div`
    width: 100%;
        > h1 {
            display: block;
            height: 140px;	
            width: 566px;	
            color: #333F52;	
            font-family: Hind;	
            font-size: 55px;	
            font-weight: bold;	
            line-height: 70px;	
            text-align: center;
            margin: auto;
            margin-bottom: 50px;
        }

    > form {
        display: inline-block;
        margin-left: 50%;
        transform: translateX(-50%);
        
        label {
            height: 60px;	
            width: 350px;	
            display:inline;
            float:left;
            position: relative;
            input {
                width: 100%;
                height: 100%;
                border: 1px solid #979797;
                border-radius: 49px;
                display: inline;
                padding-left: 20px;
            }
        }
        > button {
            height: 60px;
            width: 200px;
            border-radius: 30px;
            border: 0;
            margin-left: 30px;
            color: #fff;
            background: linear-gradient(90deg, #326DE9 0%, #7E52E8 100%);
            text-decoration: none;
            &:hover {
                text-decoration: none;
            }
        }
    }
`;

const Button = styled.button`
float: left;
height: 50px;
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

const Newsletter_Page = () => {
    return (
        <Section className="section-3 container">
            <Content>
                <h1>Join Ticketbutler newsletter</h1>
                <form
                 className="newsletter"
                 name="newsletter"
                 method="post"
                 data-netlify="true"
                 data-netlify-honeypot="bot-field"
                >
                    <label>
                        <input name="email" type="email" placeholder="Din email here &#128522;"/>
                    </label>
                    <Button><span>Subscribe</span></Button>
                </form>
            </Content>
            
        </Section>
    );
};


export default Newsletter_Page;
