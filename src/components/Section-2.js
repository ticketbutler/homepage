import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";


const Section = styled.section`
    padding: 110px;    

    padding-right:0;
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
    margin-top: 110px;
    width: 50%;
    float:left;
    position: relative; 
    padding-right: 30px;  
    

    > h3 {
        width: 400px;	
        color: #333F52;	
        font-family: Hind;	
        font-size: 60px;	
        font-weight: bold;	
        line-height: 70px;
    }

    > p {	
        width: 90%;	
        color: #6C7582;	
        font-family: Montserrat;	
        font-size: 27px;	
        line-height: 38px;
        font-weight: 500;
        padding: 0 10px;
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
        // padding: 0 100px;
        margin-top: 40px;    

        > h3 {
            width: 100%;
            font-size: 50px;
            line-height: 50px;
            text-align: center;

            
        }

        > p {
            width: 100%;
            font-size: 24px;	
            line-height: 36px;
            text-align: center;
            
        }

    }

    @media (max-width: 768px) { 
        margin-top: 40px;

        // padding: 0 70px;

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
        margin-top: 0px;
        


        > h3 {
            font-size: 30px; 
            line-height: 40px;	 
             
        }

        > p {
            font-size: 15px;
            line-height: 30px;	 
        }   

    }
`;

const RightBox = styled.div`
    float: right;
    width: 50%;
    // height: auto;
    display: inline-block;                
    position: relative;

    > div.clear-fix{
        clear:both;
    }
    > img {
        height: 425px;
        width: 624px;
        position: absolute;
        top:50px;
        right: 0px;
        z-index: 2;
    }
    >div.shapes {
        > div.first-box.green {
            position: absolute;
            height: 427px;	
            width: 627px;
            right: 85px;	
            background-color: #1DC9CC;
        }

        > div.second-box.blue{
            position: absolute;
            top: 100px;
            right: 220px;
            height: 411px;
            width: 448px;
            z-index: 1;
            background-color: #326DE9;
            -webkit-clip-path: polygon(0 0, 0% 100%, 100% 100%);
            clip-path: polygon(0 0, 0% 100%, 100% 100%);
        }
        }
    

    > div.clear-fix{
        clear:both;
    }



    
    @media (max-width: 1400px) {
        >div.shapes {
            > div.first-box.green {
                top: 10px;
                right: 40px;	
                height: 360px;	
                width: 520px;
            }

            > div.second-box.blue{
                right: 210px;
                height: 350px;
                width: 320px;
            }
        }
        > img {
            height: 380px;
            width: 500px;
        }

    }

    @media (max-width: 1160px) {
        >div.shapes {
            > div.first-box.green {
                top: 15px;
                right: 55px;	
                height: 340px;	
                width: 480px;
            }

            > div.second-box.blue{
                top: 110px;
                right: 185px;
                height: 320px;
                width: 320px;
            }
        }
        > img {
            height: 355px;
            width: 475px;
        }

    }

    @media (max-width: 1080px) { 
        display: block;
        width: 100%;
        >div.shapes {
            display:block;
            width; 100%;
            height: 80px;
            position: relative;
            margin-top: -20px;
            > div.first-box.green {
                width: 500px;            
                height: 60px;
                top: 0px;
                left: 50%;
                border-radius: 0 0px 10px 10px;
                transform: translateX(-50%);
                // -webkit-clip-path: polygon(0 0, 100% 0, 100% 30%, 50% 100%, 0 30%);
                // clip-path: polygon(0 0, 100% 0, 100% 30%, 50% 100%, 0 30%);
                right: 85px;
            
            }
        
            > div.second-box.blue{
                top: 0px;
                right: 220px;
                height: 40px;
                width: 450px;
                left: 50%;
                border-radius: 0 0px 10px 10px;                
                transform: translateX(-50%);
                // -webkit-clip-path: polygon(0 0, 100% 0, 100% 30%, 50% 100%, 0 30%);
                // clip-path: polygon(0 0, 100% 0, 100% 30%, 50% 100%, 0 30%);
                -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
                clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        
            }
        }
        > img {
            position: relative;
            height: 425px;
            width: 600px;
            left: 50%;
            transform: translateX(-50%);
            top:0px;
            right: 0px;
            box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.20);
            border-radius: 3px;
            margin-bottom: 0;
        }
    }

    @media (max-width: 650px) { 

        height: auto;
        >div.shapes {
            > div.first-box.green {
                // display: none;
                width: 80%;
                top: 0%;
                

            
            }
        
            > div.second-box.blue{
                // display: none;
                top: 0px;
                width: 70%;
                
        
            }
        }
    
        > img {
            height: auto;
            width: 100%;
            left: 50%;
            transform: translateX(-50%);
            top:0px;
            right: 0px;
            box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.20);
            border-radius: 0px;
            
        }
        
    }

    @media (max-width: 420px) { 

        height: auto;
        >div.shapes {
            > div.first-box.green {
                height: 50px;
                // display: none;
                width: 100%;
                top: 0%;
            }
        
            > div.second-box.blue{
                height: 50px;
                top: -10px;
                width: 90%;
            }
    }
        > img {
            height: auto;
            width: 100%;
            left: 50%;
            transform: translateX(-50%);
            top:0px;
            right: 0px;
            box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.20);
            border-radius: 0px;
            
        }
        
    }

`;
const Section2 = () => (

    <Section>

            <RightBox>
                <img src={require('../img/img-7.jpg')}></img>

                <div className="shapes">
                    <div className="first-box green"></div>
                    <div className="second-box blue"></div>
                </div>

                <div className="clear"></div>
            </RightBox>
      
            <LeftBox>
                <h3>Lorem Ipsum sit amet</h3>
                <p>Bacon ipsum dolor amet rump beef check, tri-tip sausage brisket leberkas porchetta hamburger tenderloin short</p>
            </LeftBox>

            
        
        <div className="clear-fix"></div>
        <style jsx>{`
        * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
        
         }

         div.clear-fix{
             clear:both;
         }
         
         div.clear{
            clear:both;
        }

        `}</style>
    </Section>
  
)

export default Section2
