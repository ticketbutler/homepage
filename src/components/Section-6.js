import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";

const Section = styled.section `
    width:100%;
    height: 970px;
    position: relative;
    // padding: 110px;
    padding-left: 0;
    margin-top: 200px;
    

    @media (max-width: 1400px) {
       margin-top: 150px;
        
    }

    @media (max-width: 1080px) {
        height: 700px;
        
    }

`;


const GreenBackground = styled.div`
    height: 687px;	
    width: 100%;	
    background: linear-gradient(311.59deg, #28D8A7 0%, #1DC9CA 100%);
    margin-top: 283px;
    position:absolute;
    top: 0;
    left: 0;
    @media (max-width: 1080px) {
        margin-top: 00px;
        position:relative;
        padding: 110px;
    }
`;

const SectionImage = styled.div`	
    width: 70%;
    position:relative; 
    // z-index: 2;
    top: 0;
    left: 0;

    > img {
        position:absolute; 
        z-index: 2;
        width: 100%;
        height: auto;
    }

    @media (max-width: 1080px) {
        // position: absolute;
        // top: 12%;
        // left: 0;
        display: none;
    }
`;

const SectionContent = styled.div`
    height: 611px;	
    width: 713px;	
    background-color: #FFFFFF;
    box-shadow: 0px 0px 12px -4px rgba(0,0,0,0.35);
    position: absolute;
    z-index: 3;
    top: 33%;
    right: 10%;
    padding: 95px 86px;

    > h3 {
        
        width: 100%;	
        color: #333F52;	
        font-family: Hind;	
        font-size: 60px;	
        font-weight: bold;	
        line-height: 70px;
    }

    > p {
    
        width: 100%;	
        color: #6C7582;	
        font-family: Montserrat;	
        font-size: 27px;	
        letter-spacing: -0.22px;	
        line-height: 38px;
    }

    > a{
        margin-top: 30px;
        height: 60px;	
        width: 230px;	
        border-radius: 29px;	
        background: linear-gradient(90deg, #28D8A7 0%, #1DC9CA 100%);
        display: inline-block;
        text-align: center;
        transition: all .3s;
        &:hover {
            transform: scale(1.05);
            box-shadow: 0px 3px 20px -6px rgba(0,0,0,0.75);
        }
        > span {
            color: #FFFFFF;	
            font-family: 
            Montserrat;	
            font-size: 18px;	
            font-weight: bold;	
            line-height: 60px;	
            text-align: center;
        }
    }
   
    @media (max-width: 1400px) {
        padding: 80px;
        > h3 {
            
            font-size: 55px;
            line-height: 60px;
      
        }

        > p {
            font-size: 25px;	
            line-height: 33px;
        }
    }

    @media (max-width: 1160px) {
        right: 7%;
        width: 650px;	
        
        > h3 {
            font-size: 50px;
            line-height: 50px;
            
        }

        > p {
            font-size: 22px;	
            line-height: 30px;
        }
    }

    @media (max-width: 1080px) {
        padding: 90px;
         
        right: 10%;
        top: 40px;
        width: 80%;
        display: block; 
        > h3 {
            width: 100%;
            font-size: 50px;
            line-height: 50px;
            text-align: center;
            margin-top: 0px;

            
        }

        > p {
            width: 100%;
            font-size: 24px;	
            line-height: 36px;
            text-align: center;
            
        }

        > a{	
            margin: 0 auto;
            margin-top: 35px;            
            display:block;


        }

    }

    @media (max-width: 768px) { 

        padding: 80px;

        > h3 {
            font-size: 45px;  
        }

        > p {
            font-size: 23px;	 
        }
    }

    @media (max-width: 690px) { 

        padding: 70px;

        > h3 {
            font-size: 43px;  
        }

        > p {
            font-size: 21px;	 
        }
    }

    @media (max-width: 600px) { 

        padding:60px 50px;

        > h3 {
            font-size: 36px;  
        }

        > p {
            font-size: 18px;	 
        }
    }

    @media (max-width: 460px) { 

        padding:50px 40px;

        > h3 {
            font-size: 34px;
            line-height: 38px;	 
              
        }

        > p {
            font-size: 17px;
            line-height: 33px;	 
            	 
        }
    }

    @media (max-width: 370px) { 

        padding:50px 20px;
        margin-top: 0px;
        


        > h3 {
            font-size: 30px; 
            line-height: 35px;	 
             
        }

        > p {
            font-size: 15px;
            line-height: 25px;	 
        }  
        
        > a{
            margin-top: 20px;
            height: 55px;	
            width: 180px;	

            > span {
                font-size: 16px;	

                line-height: 55px;	

            }
        }

    }   
`;

const DivShape = styled.div `
    position: absolute;
   
    top: 30px;
    right: 60px;
    z-index: 10;

    > div.shape {
        width: 50px;
        height: 50px;
        margin: 1px;
        position:relative;
        z-index: 10;
    
        > span {
            color: transparent;
            font-size: 55px;


        }

        > span#first {
            -webkit-text-stroke: 5px #7E52E8;            
            position: absolute;   
            z-index: 10;         
            left:0;
            top: 0;

            
        }
        > span#second {
            -webkit-text-stroke: 5px #DD52E8; 
            position: absolute;   
            left:0;     
            top: 35%;
        }
    }
    @media (max-width: 1080px) {
        top: 2%;
        right: 1%;
        > span {
            opacity: .9;
        }

    }        

    @media (max-width: 768px) {
        top: 2%;
        right: 1%;
        > div.shape {
            width: 50px;
            height: 50px;
            > span {
                opacity: .7;

                font-size: 60px;
            
            }
        }
    }

    @media (max-width: 600px) {
        top: 2%;
        right: 1%;
        > div.shape {
            width: 63px;
            height: 63px;
            > span {
                opacity: .5;
    
                font-size: 50px;
            
            }
        }
    }

    @media (max-width: 370px) {
        top: 2%;
        right: 1%;
        > div.shape {
            width: 50px;
            height: 50px;
            > span {
                opacity: .4;
        
                font-size: 40px;
            
            }
        }
    }

`;  


const Section6 = () => (
    

    <Section className="section-6">
    
        <GreenBackground></GreenBackground>

            <SectionImage className="image">
                <img src={require("../img/img-6.jpg")} />
            </SectionImage>

            <SectionContent>
                <h3>Pork chop capicola shoulder doner ball</h3>
                <p>Picanha capicola pancette ball tip prosciutto buffalo salami ribeye hamburger swine corned beef filet mignon drumstick flank capicola</p>
                <a><span>Create an event</span></a>

                <DivShape>
                    <div className="shape">
                        <span id="first">&#x25BC;</span>
                        <span id="second">&#x25BC;</span>
                    </div>
                </DivShape>
            </SectionContent>

            <div className="clear-fix"></div>

        <style jsx>{`
        * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
        
        }

        body{
            overflow: hidden;
        }

        div.clear-fix {
            clear: both;
        }
        `}</style>
    </Section>
  
)

export default Section6
