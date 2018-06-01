import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";

const FooterTag = styled.footer`
    height: 140px;	
    width: 100%;	
    background-color: #F9FAFC;
    padding: 60px 110px;

    @media (max-width: 1080px) {
        padding: 45px;
    }
    @media (max-width: 768px) { 
        padding: 42px;
    }

    @media (max-width: 600px) { 
        padding: 40px;
    }

    @media (max-width: 540px) { 
        padding: 30px;
        height: auto;
    }

    @media (max-width: 376px) { 
        padding: 30px 20px;
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
            font-size: 13px;
            display:block;
            
            &.second-child {
                margin-left: 0px;
            }
        }
    }
    @media (max-width: 768px) { 
       
        margin-bottom: 20px;
        >a {
            font-size: 11px;
            
        }
    }
    
    @media (max-width: 600px) {       
        >a {
            font-size: 10px;
            
        }
    }

    @media (max-width: 376px) { 
   
        margin-bottom: 20px;
        >a {
            font-size: 9.5px;
            
        }
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
        width: 100%;
        
        &#from{
            margin-left: 50px;
        }
    }
    @media (max-width: 1080px) { 
        > span {
            color: #333F52;	
            font-family: Montserrat;	
            font-size: 13px;
            display:inline-block;
            &#from{
                margin-left: 0px;
            }	  
        }
    }
    @media (max-width: 768px) { 
        > span {
        font-size: 11px;	
        }
    }
    @media (max-width: 600px) { 

        margin-bottom: 20px;
        > span {
            font-size: 10px;	

        }
        }
    @media (max-width: 376px) {
        > span {
            font-size: 9.5px;	

        }
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
        
        <div className="clear-fix"></div>
        <style jsx>{`
            .clear-fix {
                clear: both;
            }
        `}</style>
    </FooterTag>

    
  
)

export default Footer
