import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";

const FooterTag = styled.footer`
    height: 140px;	
    width: 100%;	
    background-color: #F9FAFC;
    padding: 60px 110px;

    @media (max-width: 1080px) {
        padding: 110px;
    }
    @media (max-width: 768px) { 
        padding: 80px;
    }

    @media (max-width: 600px) { 
        padding: 40px;
    }

    @media (max-width: 370px) { 
        padding: 50px 20px;
    }
   
`;

const LeftDiv = styled.div`
    display: inline-block;
    width: 50%;
    float: left;
 
    > a.second-child {
        margin-left: 50px;
    }
    > a {

        text-decoration; none;
        font-family: Montserrat;	
        font-size: 15px;	
        font-weight: bold;	
        letter-spacing: 1.15px;	
        text-decoration: none;
        transition: all .3s;
        > span {
            color: #333F52;	
            &:hover {
                opacity: .8;
            }
        }
    }

    @media (max-width: 1080px) { 
        > a {	
            font-size: 15px;
            display:block;
            &.second-child {
                margin-left: 0px;
            }
        }
    }

    @media (max-width: 600px) { 
        display: block;
        width: 100%;
        margin-bottom: 20px;
    }
`;

const RightDiv = styled.div`
    display: inline-block;
    width: 50%;
    float: left;

    > span {
        color: #333F52;	
        font-family: Montserrat;	
        font-size: 15px;	
        letter-spacing: 1.15px;	
        
        &#from{
            margin-left: 50px;
        }
    }
    @media (max-width: 1080px) { 
        > span {
            color: #333F52;	
            font-family: Montserrat;	
            font-size: 15px;
            display:block;
            &#from{
                margin-left: 0px;
            }	  
        }
    }
    @media (max-width: 780px) { 
        font-size: 14px;	
        
    }
    @media (max-width: 600px) { 
        display: block;
        width: 100%;
        ont-size: 13px;	
        margin-bottom: 20px;
        
        
    }@media (max-width: 370px) { 
        font-size: 12px;	
        
    }

`;

const Footer = () => (

    <FooterTag>
        <LeftDiv>
            <a href="#" className="first-child"><span>Privacy policy</span></a>
            <a href="#" className="second-child"><span>Tearms of service</span></a>
        </LeftDiv>

        <RightDiv>
            <span id="email">hello@ticketButler.io</span>
            <span id="from">2018 ticketButler IVS | CVR: 38404687</span>
        </RightDiv>
        
    </FooterTag>
  
)

export default Footer
