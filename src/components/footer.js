import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";

const FooterTag = styled.footer`
    height: 140px;	
    width: 100%;	
    background-color: #F9FAFC;
    padding: 0px 110px;

    @media (max-width: 1080px) {
        padding: 0 45px;
    }
    @media (max-width: 768px) { 
        padding:0 42px;
    }

    @media (max-width: 600px) { 
        padding:0 40px;
    }

    @media (max-width: 540px) { 
        padding:0 30px;
        height: auto;
    }

    @media (max-width: 376px) { 
        padding:0 30px 20px;
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
            font-size: 18px;
            line-height: 140px;
            &:hover {
                opacity: .85;
            }
           
        }
    }
    @media (max-width: 1200px) { 
        a {
            span {
                 font-size: 17px;
            }
        }
    }

    @media (max-width: 970px) { 
        a {
            span {
                 font-size: 15px;
            }
        }
    }

    @media (max-width: 874px) { 
        a {
            span {
                 font-size: 12px;
            }
        }
    }
    @media (max-width: 720px) {
        padding: 25px 0; 
        height: auto;
        a {
            width: 50%;
            span {
                line-height: 40px;
                justify-content: center;
                 font-size: 13px;
            }
        }
    }
    @media (max-width: 455px) {
        padding: 25px 0; 
        a {
            width: 100%;
        }
    }
        
}`;

const Footer = ({items}) => (

    <FooterTag>
        <ContentDiv>
            {/* {items.map(item => <a href={item.path}><span>{item.label}</span></a>)} */}
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
