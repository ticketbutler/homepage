import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";
// import 'font-awesome/css/font-awesome.min.css';

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

    h3 {
        float: left;
        margin-left: 0px;
        margin-bottom: 50px;
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
                margin-bottom: 0px;
                float:left;
                margin-left: 50%;
                transform: translateX(-50%);
                > input {
                    width: 400px;
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
                    display: block;
                    float: left;
                    width: 100%;
                    margin-left: 50%;
                    transform: translateX(-50%);
                    > textarea{
                        width: 400px;
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
                    margin-left: 0%;
                    transform: translateX(0%);
                        > a{
                            height: 45px;
                            width: 200px;
                            display: block;
                            float:left;
                            border-radius: 29px;
                            // margin-right: 50%;
                            // transform: translateX(50%);	

                            margin: 0 auto;
                            background: linear-gradient(90deg, #326DE9 0%, #7E52E8 100%);
                            text-decoration:none;
                            text-align: center;
                            line-height: 41px;
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
                                font-size: 20px;
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
    @media (max-width: 1200px) {
        > form {
            >ul {
                > li {
                    > input {
                        width: 100%;
                    }
                    &#message-field {
                        > textarea{
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
    @media (max-width: 1080px) {
        padding: 110px 40px;
    }
    @media (max-width: 768px) { 
        display: block;
        width: 100%;
        h3 {
            float: none;
        }
        > form {
            >ul {
                > li {
                    width: 400px;
                    > input {
                        width: 400px;
                    }
                    &#message-field {
                        width: 400px;                        
                        > textarea{
                            width: 400px;
                        }
                    }
                    &#contact-btn{
                        width: auto;
                        margin-top: 45px;
                        margin-left: 50%;
                        transform: translateX(-50%);
                }
            }
        }
        
    }

     @media (max-width: 500px) { 
        padding: 110px 30px;
         
        > form {
            >ul {
                > li {
                    width: 100%;
                    
                    > input {
                        width: 100%;
                    }
                    &#message-field {
                        width: 100%;
                        
                        > textarea{
                            width: 100%;
                        }
                    }
                    &#contact-btn{
                        width: auto;
                        margin-top: 40px;
                        float: left;
                        margin-left: 50%;
                        transform: translateX(-50%);
                        > a{
                            height: 42px;
                            width: 165px;
                            line-height: 38px;
                            > span {
                                font-size: 14px;
                                &::after {
                                font-size: 18px;
                                }
                            }
                        }
                    }
                }
            }
        }  
 }


 
`;

const RightBox = styled.div`
    width: 50%;
    height: 660px;
    padding: 110px;
    float:right;
    display:inline-block;
    background: linear-gradient(to right, rgba(50, 109, 233, .85) , rgba(126, 82, 232, .85)), url("../../img/contact.jpg") no-repeat center center ;
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
               font-size: 16px;
               width: 40px;
               height: 30px;
               width: 20%;
               text-align: left;
               margin-left: -10px;
            }
            span {
                width: 80%
                font-size: 16px;
                
                &#address,&#phone, &#support{
                    font-size: 13px;
                }
                }	
            }
        }
       
        
    }
`;

const Contact_page = ({adress, phone, support}) => (
    
    <Section id="contact">
        <div className="container">
            <LeftBox className="left-box contact">
                <h3>Contact US!</h3>
                <form className="contact-form">
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
                    <ul>
                        <li>
                            <i className="fa fa-map-marker"></i>
                            <span>Address</span>
                            <span id="address"> {adress}</span>
                            </li>
                        <li>
                            <i className="fa fa-phone"></i>
                            <span>Phone</span>
                            <span id="phone">{phone}</span>
      

                        </li>
                        <li>
                            <i className="fa fa-envelope"></i>
                            <span>General soppurt</span>
                            <span id="support">{support}</span>

                        </li>
                        
                    </ul>
                    
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

export default Contact_page
