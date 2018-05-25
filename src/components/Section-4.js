import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";

const Section = styled.section`
    width: 100%;	
    position: relative;
    bacground: #CCC;
    padding: 110px;
    @media (max-width: 768px) { 
        padding: 80px;
    }

    @media (max-width: 600px) { 
        padding: 40px;
    }

    @media (max-width: 376px) { 
        padding: 50px 20px;
    }
  
`;
const BlueBackground = styled.div`
    width: 100%;
    height: 70%;
    top: 0;
    left: 0;
    z-index: -3;
    position: absolute;
    -webkit-transform: skewY(-3deg);
    transform: skewY(-3deg);
    background: linear-gradient(295.21deg, #326DE9 0%, #7E52E8 100%);
    background-size: cover;
    text-align: center;

`;

const Content = styled.div`
    
    >h3 {
        width: 566px;
        display: block;
        margin: 0 auto;
        margin-top: 0px;	
        color: #FFFFFF;	
        font-family: Hind;	
        font-size: 60px;	
        font-weight: bold;	
        line-height: 70px;	
        text-align: center;
        margin-bottom: 20px;
    }

    >p{
        width: 514px;	
        display: block;
        margin: 0 auto;           
        color: #FFFFFF;	
        font-family: Montserrat;	
        font-size: 27px;	
        letter-spacing: -0.22px;	
        line-height: 38px;	
        text-align: center;
    }

    > img {
        display: block;
        margin: 0 auto;
        margin-top: 40px;

        width: 100%;
    }

    > a{
        margin: 50px auto;
        margin-bottom: 0;
        height: 60px;	
        width: 260px;	
        border-radius: 29px;	
        background: linear-gradient(90deg, #28D8A7 0%, #1DC9CA 100%);
        display: blocK;
        text-align: center;
        text-decoration: none;
        position:relative;
        line-height: 56px;
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
            font-size: 18px;
            font-weight: bold;	
            text-align: center;
          transition: all .3s;
            
            &::after {
              content: '\00BB';
              opacity: 1;
              font-size: 25px;
              opacity: 0;
              margin-left: -8px;
              z-index: 10;
              color: #FFF;
              transition: 0.3s;
            }
          }
    }

    @media (max-width: 1080px) { 
    
    > a{
        padding: 0;
          
          > span {
            font-size: 16px;
          }
        }
    }

    @media (max-width: 768px) { 
        > h3 {
            
            width: 100%;
            font-size: 45px;
            line-hight: 50px;  
        }
        > p {
            width: 100%;
            font-size: 20px;	 
        }
        > a{

            > span {
              font-size: 15px;
            }
          }
    }

    @media (max-width: 600px) { 
        
        > h3 {
        margin-top: 20px;	
            
            font-size: 36px;  
        }
        > p {
            font-size: 18px;	 
        }
        > a{
            width: 220px;
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
      
        
        > h3 {  
            margin-top: 10px;	
            font-size: 25px; 
            line-height: 32px;	     
        }
        > p {
            font-size: 14px;
            line-height: 20px;	 
        }   

        > a{
            width: 180px;
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

const SquareShape = styled.div`
    position: absolute;
    top: 25%;
    right: 10%;
   z-index: -1;
   > div.shape {
        width: 60px;
        height: 60px;
        margin: 1px;
        position:relative;

    > span {
        opacity: .9;
        display:inline-block;
        width: 80%;	                
        height: 80%;	
        // background-color: #FFF;
        position:absolute; 
        transform: scaleY(-1);

        &#first {
            top: 0;
            right: 0;
            border: 5px solid #FFFFFF;                
            z-index: 3;
        }
        &#second {
            bottom: 0;
            border: 5px solid #28D8A7;
            left:0;
        }
    }
    }

    @media (max-width: 1080px) {
        top: 30%;
        > div.shape {
            opacity: .8;
            width: 60px;
            height: 60px;
        }
        
    
    }        

    @media (max-width: 768px) {
            
        > div.shape {
            width: 50px;
            height: 50px;
            > span {
                opacity: .7;
            }
        }
       
    }

    @media (max-width: 600px) {
        top: 30%;
    right: 3%;
        
        > div.shape {
            width: 45px;
            height: 45px;
            > span {
                opacity: .5;
            }
        }
        
    }

    @media (max-width: 370px) {
        top: 35%;
        
        > div.shape {
           
            > span {
                opacity: .5;
            }
        }
    }
`;


const TriangleShape = styled.div`
    position: absolute;
    top: 17%;
    left: 20%;
        > div.shape {
            width: 55px;
            height: 55px;
            margin: 1px;
            position:relative;
            > span {
                opacity: .9;
                color: transparent;
                font-size: 70px;
               
            }
            > span#first {
                -webkit-text-stroke: 5px #28D8A7;            
                position: absolute;   
                z-index: -1;         
                left:0;
                top: 0;
            }
            > span#second {
                -webkit-text-stroke: 5px #DD52E8; 
                position: absolute; 
                z-index: -2;         
                  
                left:0;     
                top: 35%;
            }
        }

    @media (max-width: 1080px) {
        top: 20%;
        left: 15%;
        > span {
            opacity: .9;
        }
    
    }        

    @media (max-width: 768px) {
        top: 10%;
        left: 10%;
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
        top: 20%;
        left: 12%;
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
             top: 17%;
             left: 10%;
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
const Section4 = () => (

    <Section className="section-4">
        <BlueBackground></BlueBackground>
        <Content>
            <h3>Easy to get going easy to use</h3>
            <p>Picanha capicola pancetta ball tip prosciutto buffalo salami ribeye hamburger swine</p>
            <img src={require('../img/img-3.jpg')}/>
            <a href="#"><span>Do somthing now</span></a>
        </Content>

            <SquareShape>
                <div className="shape">
                    <span id="first"></span>
                    <span id ="second"></span>
                </div>
            </SquareShape>

            <TriangleShape>
                <div className="shape">
                    <span id="first">&#x25BC;</span>
                    <span id ="second">&#x25BC;</span>
                </div>
            </TriangleShape> 
        
        
        
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

export default Section4
