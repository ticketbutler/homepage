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

const ContentDiv = styled.div`
    width: 100%;
    height: 100%;

    a {
        width: 25%;
        height: auto;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        
        span {
            color: #333F52;
            font-family: Hind;
            letter-spacing: .5px;
            &:hover {
                opacity: .85;
            }
           
        }
    }
`;

const Footer = ({items}) => (

    <FooterTag>
        <ContentDiv>
            {items.map(item => <a href={item.path}><span>{item.label}</span></a>)}
        </ContentDiv>
        
        <div className="clear-fix"></div>
        <style jsx>{`
            .clear-fix {
                clear: both;
            }
        `}</style>
    </FooterTag>

    
  
)

export default Footer
