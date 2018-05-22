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
        width: 230px;
        border-radius: 49px;	
        background: linear-gradient(90deg, #326DE9 0%, #7E52E8 100%);
        display: block;
        text-align: center;
    
        
        margin: 0 auto;
        transition: all .3s;
        &:hover {
            transform: scale(1.05);
            box-shadow: 0px 3px 20px -6px rgba(0,0,0,0.75);
        }
        
        
        > span {
            height: 64px;	
            width: 175px;	
            color: #FFFFFF;	
            font-family: Montserrat;	
            font-size: 18px;	
            font-weight: bold;	
            line-height: 60px;
            text-align: center;
        }
    }

    @media (max-width: 768px) { 
        h3 {
            width: 100%;
            font-size: 50px;	
        }
    }

 

    @media (max-width: 600px) {
        padding: 40px;
         
        h3 {
            width: 100%;
            font-size: 35px;	
        }
    }

    @media (max-width: 370px) {
        padding: 50px 20px;
         
        h3 {
            width: 100%;
            font-size: 25px;	
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
