import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";

const Section = styled.section`
    padding: 110px;
    padding-left: 0;
    width:100%;
    position: relative;

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

const LeftBox = styled.div`
    display: inline-block;
    float:left;
    width:50%;
    position:relative;
    
    > figure {
        width: 100%;
        z-index: -4;
        
        > img {	
            width: 773px;
            transform: translateX(-4%);
            margin:0;
            z-index: -4;
        }
    }

    @media (max-width: 1080px) {
        display: block;
        width:100%;
    
    > figure {
        width: 600px;
        margin-left: 50%;
        transform: translateX(-50%);
        margin-right: -10px;
        

        > img {	
            width: 100%;
            transform: translateX(0%);
            margin:0;
        }
    }
    }

    @media (max-width: 768px) {
        
    > figure {
        width: 100%;
    }
    }

    @media (max-width: 600px) { 
        > figure {
            width: 102%;
            
    
        }
    }


    @media (max-width: 370px) { 
        
    }
`;

const RightBox = styled.div`
    margin-top: 30px;   
    display: inline-block;
    width:50%;
    float: right;
    padding-right: 110px;

        >h3 {
            // width: 600px;
            padding-left: 25px;
            color: #333F52;	
            font-family: Hind;	
            font-size: 60px;	
            font-weight: bold;	
            line-height: 70px;	
            display:block;                
            text-align: right;
            margin-right: 0;
            float: right;
            z-index:2;
        }
        > p {
            float:right;
            color: #6C7582;	
            font-family: Montserrat;	
            font-size: 27px;	
            letter-spacing: -0.22px;	
            line-height: 38px;	
            text-align: right;
            margin-right: 0px !important;
            padding-right: 0px !important;
            display:block;
            margin-bottom: 50px;
            padding-left: 25px;
            
        }

        > a{
            height: 60px;
            width: 230px;
            display: block;
            float:right;
            border-radius: 29px;
            // margin-right: 50%;
            // transform: translateX(50%);	

            margin: 0 auto;
            background: linear-gradient(90deg, #28D8A7 0%, #1DC9CA 100%);
            text-decoration:none;
            text-align: center;
            transition: all .3s;
            &:hover {
                transform: scale(1.05);
                box-shadow: 0px 3px 20px -6px rgba(0,0,0,0.75);
            }
            >span {
                height: 64px;	
                width: 146px;	
                color: #FFFFFF;	
                font-family: Montserrat;	
                font-size: 18px;	
                font-weight: bold;	
                line-height: 60px;	
                text-align: center;
            }
        }
    
    
    @media (max-width: 1400px) {
        > h3 {
            font-size: 50px;
            line-height: 60px;
        }
        > p {
            font-size: 22px;	
            line-height: 33px;
        }
    }

    @media (max-width: 1160px) {
        > h3 {
            font-size: 40px;
            line-height: 50px;  
        }
        > p {
            font-size: 20px;	
            line-height: 30px;
        }
    }

    @media (max-width: 1080px) { 
        display: block;
        width: 100%;
        padding: 0 100px;    
        > h3 {
            padding-left: 0;
            width: 100%;
            font-size: 40px;
            line-height: 50px;
            text-align: center;  
        }
        > p {
            padding-left: 0;
            font-size: 20px;	
            line-height: 36px;
            text-align: center; 
        } 

        > a {
            margin-right: 50%;
            transform: translateX(50%) !important;
            display: block;
            // margin: 0 auto;
        }
    }


    @media (max-width: 768px) { 
        margin-top: 40px;
        padding: 0 70px;

        > h3 {
            font-size: 40px;  
        }
        > p {
            font-size: 20px;	 
        }
    }

    @media (max-width: 600px) { 
        padding: 0 40px;
        margin-top: 20px;
        > h3 {
            font-size: 36px;  
        }
        > p {
            font-size: 18px;	 
        }
    }


    @media (max-width: 370px) { 
        padding: 0 20px;
        margin-top: 10px;
        
        > h3 {
            font-size: 30px; 
            line-height: 40px;	     
        }
        > p {
            font-size: 15px;
            line-height: 30px;	 
        }   

        > a {
            margin-bottom: 20px;
            margin-top: -20px !important; 
            height: 55px;
            > span {
                font-size: 16px;
                line-height: 55px;
            }
        }
        
       
    }

    
`;

const SquareShape_1 = styled.div`
    position: absolute;
    top:12%;
    right:7%;

    > div.shape {
        width: 42px;
        height: 42px;
        margin: 1px;
        position:relative;
        > span {
            display:inline-block;
            width: 80%;	                
            height: 80%;	
            // background-color: #FFF;
            position:absolute; 
            transform: scaleY(-1);
        }
    } 

    
    > div.shape span#first {
        top: 0;
        right: 0;
        border: 4px solid #7E52E8;                
        z-index: -1;
    }
    > div.shape span#second {
        bottom: 0;
        border: 4px solid #28D8A7;
        left:0;
        z-index: -2;
        
    }

    @media (max-width: 1080px) {
        top: 50%;
        > div.shape {
        
            > span {
                opacity: .8;
            }
        }
    }
    @media (max-width: 768px) {
        > div.shape {
            > span {
                opacity: .7;
            }
        }
    }    
    @media (max-width: 600px) {
        > div.shape {
            width: 40px;
            height: 40px;
            > span {
                opacity: .5;
            }
        }
    }
    @media (max-width: 370px) {
        top: 40%;
        right: 10%;
        > div.shape {
            width: 36px;
            height: 36px;
            > span {
                opacity: .4;
            }
        }

    }    
`;

const SquareShape_2 = styled.div`
    position: absolute;
    top:55%;
    right:49%;

    > div.shape {
        width: 42px;
        height: 42px;
        margin: 1px;
        position:relative;
       > span {
            display:inline-block;
            width: 80%;	                
            height: 80%;	
            position:absolute; 
            transform: scaleY(-1);
        } 
    }
    

    >  .shape span#first{
        top: 0;
        right: 0;            
        z-index: -1;
        border: 4px solid #7E52E8;
    }
    > .shape span#second {
        bottom: 0;
        left:0;
        z-index: -2;
        border: 4px solid #DD52E8;
    }

   
    @media (max-width: 1080px) {
        top: 65%;
        left: 15%;
        > div.shape {
        
            > span {
                opacity: .8;
            }
        }
    }
    @media (max-width: 768px) {
        > div.shape {
            > span {
                opacity: .7;
            }
        }
    }    
    @media (max-width: 600px) {
        left: 8%;
        
        > div.shape {
            width: 40px;
            height: 40px;
            > span {
                opacity: .5;
            }
        }
    }
    @media (max-width: 370px) {
        top: 34%;
        > div.shape {
            width: 36px;
            height: 36px;
            > span {
                opacity: .4;
            }
        }

    }  
`; 

const CircleShape = styled.div`
    position: absolute;                
    bottom: 15%;
    right: 10%;

    > div.shape {
        width: 55px;
        height: 55px;
        margin: 1px;
        position:relative;
        > span {
            display:inline-block;
            width: 80%;	                
            height: 80%;	
            position:absolute; 
            transform: scaleY(-1);
        }
    }
   

    >  .shape span#first{
        top: 0;          
        z-index: -1;
      background-color: #DD52E8;
        border: none;
        border-radius: 50%;
        left: 0;
        // opacity: .85;
    }
    > .shape span#second {
        bottom: 0;
        z-index: -2;
        
        background-color: #326DE9;
        border: none; 
        border-radius: 50%; 
        // opacity: .6;      
        left:20%;
    }


    @media (max-width: 1080px) {
        right: 20%;
        > div.shape {
        
            > span {
                opacity: .8;
            }
        }
    }
    @media (max-width: 768px) {
        > div.shape {
            > span {
                opacity: .7;
            }
        }
    }    
    @media (max-width: 600px) {
        top: 83%;
        right: 25%;
        
        > div.shape {
            width: 40px;
            height: 40px;
            > span {
                opacity: .5;
            }
        }
    }
    @media (max-width: 370px) {
        top: 80%;
        > div.shape {
            width: 36px;
            height: 36px;
            > span {
                opacity: .4;
            }
        }

    } 
  
`;

const Section3 = () => (

    <Section className="section-3 container">
        <LeftBox>
            <figure>
                <img src={require('../img/mac.png')}/>   
            </figure>
        </LeftBox>
        <RightBox>
          
                <h3>Pork chop capicola shoulder doner ball</h3>
                <p>Picanha capicola pancetta ball tip prosciutto buffalo salami ribeye hamburger swine. pig landjaeger swine corned beef fliet mignon drumstick flank capicola</p>
                <a href="#"><span>Create an event</span></a>
            
            <SquareShape_1>
                <div className="shape">
                    <span id="first"></span>
                    <span id ="second"></span>
                </div>
            </SquareShape_1>
            <SquareShape_2>
                <div className="shape">
                    <span id="first"></span>
                    <span id ="second"></span>
                </div>
            </SquareShape_2>
            <CircleShape >
                <div className="shape">
                    <span id="first"></span>
                    <span id ="second"></span>
                </div>
            </CircleShape>

        </RightBox>

        <div className="clear-fix"></div>
         <style jsx>{`

        * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
        
        }

        div.clear-fix{
            clear: both;
        }

        `}</style>
         
    </Section>
  
)

export default Section3
