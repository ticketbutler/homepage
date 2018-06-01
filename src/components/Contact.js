import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";

const Section = styled.section`

    padding: 0;
    width: 100%;
    text-align: center;
    margin-bottom: 0px;

    @media (max-width: 768px) { 
        padding: 0 80px;
    }

    @media (max-width: 600px) { 
        padding: 0px 40px;
    }

    @media (max-width: 376px) { 
        padding: 0px 20px;

    }
`;

const LeftBox = styled.div`
    width: 50%;
    height: 100%;
    display:inline;
    float: left;
    padding: 110px;

    h3 {
        float: left;
        margin-left: 30px;
    }
    > form {
        max-width: 100%;
        padding: 30px;
        margin: 50px auto;
        font-family: Montserrat;
      

        >ul {
            padding:0;
            margin:0;
            list-style:none;

            > li {
                min-height: 35px;
                display: block;
                width: 100%;
                margin-bottom: 0px;
                float:left;
                > input {
                    width: 60%;
                    display: block;
                    padding: 4px 10px;
                    margin-bottom: 20px;
                    border: 1px solid #CCC;
                    border-radius: 4px;
                    &::placeholder {
                        font-family: Montserrat;
                        font-size: 14px;
                    }

                }
                &#message-field {
                    display: inline;
                    width: 100%;
                    > textarea{
                        width: 60%;
                        display:inline;
                        float: left;
                        height: 120px;
                        padding: 4px 10px;
                        border: 1px solid #CCC;
                        border-radius: 4px;
                        &::placeholder {
                            font-family: Montserrat;
                            font-size: 14px;
                        }
                    }
                }
                

                &#contact-btn{
                    width: 40%;
                    margin-top: 60px;
                    float: left;
                   
                        > a{
                            height: 50px;
                            width: 210px;
                            display: block;
                            float:left;
                            border-radius: 29px;
                            // margin-right: 50%;
                            // transform: translateX(50%);	

                            margin: 0 auto;
                            background: linear-gradient(90deg, #326DE9 0%, #7E52E8 100%);
                            text-decoration:none;
                            text-align: center;
                            line-height: 43px;
                            position: relative;
                            transition: all .3s;
                            &:hover {
                                // transform: scale(1.05);
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
                                font-size: 22px;
                                opacity: 0;
                                margin-left: -8px;
                                z-index: 10;
                                color: #FFF;
                                transition: 0.3s;
                                }
                            }
                        }
                }
            }
        }
    }
    @media (max-width: 1080px) {
        padding: 110px 0;
        margin-top: 250px;
        padding-left: 0;
        
    }
    @media (max-width: 768px) { 
        padding: 80px 0;
        
    }

    @media (max-width: 600px) { 
        margin-top: 200px;
        padding: 60px 0;
        padding-left: 0;
        
    }

    @media (max-width: 376px) { 
        margin-top: 150px;
        padding: 30px 0;
        padding-left: 0;
        
    }
`;

const RightBox = styled.div`
    width: 50%;
    height: 100%;
    
    padding: 110px;
    float:right;
    
    display:block;

    > div.content {
        h3 {
            color: #000;	
        }

        span {
            display: block;
            margin: 50px 0;
            color: #000;
            #address{
                &::before {
                    
                }
            }	
        }
    }

    @media (max-width: 1080px) {
        padding: 110px 0;
        margin-top: 250px;
    }
    @media (max-width: 768px) { 
        padding: 80px 0;
    }

    @media (max-width: 600px) { 
    margin-top: 200px;
        
        padding: 60px 0;
    }

    @media (max-width: 376px) { 
    margin-top: 150px;
        
        padding: 30px 0;
    }
`;

const Contact = () => (
    
    <Section id="contact">
        <div className="container">
            <LeftBox className="left-box contact">
                <h3>Contact US!</h3>
                <form class="contact-form">
                    <ul>
                        <li>
                            <input type="text" name="name-field" id="align-left" placeholder="Name" />
                            <input type="email" name="email-field" id="align-right" placeholder="Email" />

                        </li>
                        <li id="message-field">
                            <textarea name="message-field" placeholder="Message"/>
                        </li>
                        <li id="contact-btn">
                            <a><span>Send Message</span></a>
                        </li>
                    </ul>
                    <div className="clear-fix"></div>
                    
                </form>
            </LeftBox>
            <RightBox >
                <div className="content">
                    <h3>More Info !</h3>
                    <span id="address">Address</span>
                    <span id="phone">Phone</span>
                    <span id="support">Gerenal Support</span>
                </div>
            </RightBox>
            
        </div>
        <div className="clear-fix"></div>

         <style jsx>{`
        * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
        }

        .clear-fix {
            clear:both;
        }
        
        `}</style>
    </Section>

)

export default Contact
