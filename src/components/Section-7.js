import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";

const Section = styled.section`

    padding: 110px;
    width: 100%;
    text-align: center;
    margin-bottom: 30px;

    

    > h3 {	
        width: 566px;	
        color: #333F52;	
        font-family: Hind;	
        font-size: 60px;	
        font-weight: bold;	
        line-height: 70px;	
        text-align: center;
        margin: auto;
        margin-bottom: 60px;
    }

    > a {
        height: 60px;	
        width: 260px;
        border-radius: 49px;	
        background: linear-gradient(90deg, #326DE9 0%, #7E52E8 100%);
        display: block;
        text-align: center;
        position: relative;
        line-height: 60px;
        margin: 0 auto;
        transition: all .3s;
        &:hover {
            // transform: scale(1.05);
            box-shadow: 0px 3px 20px -6px rgba(0,0,0,0.30);
           > span {
            margin-right: 20px;
            &::after {
              opacity: 1;
              right: 25px;
            }
            }
          }
    
          
          > span {
            color: #FFFFFF;	
            font-family: Montserrat;	
            font-size: 18px;
            font-weight: bold;	
            text-align: center;
          transition: all .3s;
            
            &::after {
              content: '\00BB';
              position: absolute;
              opacity: 1;
              line-height: 55px;
              margin: 0;
              padding: 0;
              font-size: 25px;
              opacity: 0;
              right: 40px;
              z-index: 10;
              color: #FFF;
              transition: 0.3s;
            }
          }
        }

    @media (max-width: 1080px) {   
        
        > h3 {
            width: 80%;
            font-size: 55px;
            line-height: 60px;
            text-align: center;
            margin-left: 50%;
            transform: translateX(-50%);
            
        }

        > p {
            width: 70%;
           margin-left: 50%;
           transform: translateX(-50%);
            font-size: 22px;	
            line-height: 32px;
            text-align: center;
            
        }
        > a{
            padding: 0;
              
              > span {
                font-size: 16px;
              }
            }

    }

    @media (max-width: 768px) { 
        padding: 80px;
        > h3 {
            width: 90%;
            font-size: 45px;
            line-hight: 50px;  
        }

        > p {
            width: 80%;
        
            font-size: 20px;	 
        }
        > a{

            > span {
              font-size: 15px;
            }
          }
    }

    @media (max-width: 600px) { 
        padding: 80px 40px;

        > h3 {
            width: 100%;
            
            margin-top: 0px;
            font-size: 35px; 
            margin-bottom: 10px; 
        }

        > p {
            width: 100%;
            font-size: 16px;
            line-height: 25px;	 
        }
        > a{
            width: 250px;
            height: 50px;
            line-height: 50px;
              
              > span {
                font-size: 14px;
                &::after{
                  font-size: 20px;
                  line-height: 48px;
                }
              }
            }
    }

    @media (max-width: 376px) { 
        padding: 80px 20px;
        
        > h3 {
            margin-top: -10px;
            font-size: 25px; 
            line-height: 32px;	 
             
        }

        > p {
            font-size: 14px;
            line-height: 20px;	 
        }   
        > a{
            width: 200px;
            height: 50px;
            line-height: 50px;
              
              > span {
                font-size: 12px;
                &::after{
                  font-size: 16px;
                  line-height: 49px;
                }
              }
            }

    }


`;

const Section7 = () => (
    
    <Section>
        <h3>Some nice thing to say here</h3>
        <a><span>Do something here</span></a>
    </Section>

)

export default Section7
