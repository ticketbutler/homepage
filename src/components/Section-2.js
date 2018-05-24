import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";


const Section = styled.section`
    padding: 110px;    

    padding-right:0;
    position: relative;
    @media (max-width: 1080px) {
        padding: 110px 0;
    }
    @media (max-width: 768px) { 
        padding: 80px 0;
    }

    @media (max-width: 600px) { 
        padding: 40px 0;
    }

    @media (max-width: 376px) { 
        padding: 50px 0;
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
        padding: 0 0px;
        margin-top: 40px;    

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

    }

    @media (max-width: 768px) { 
        margin-top: 40px;


        > h3 {
            width: 90%;
            font-size: 45px;
            line-hight: 50px;  
        }

        > p {
            width: 80%;
        
            font-size: 20px;	 
        }
    }

    @media (max-width: 600px) { 

        padding: 0 40px;

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
    }

    @media (max-width: 376px) { 

        padding: 0 20px;
        


        > h3 {
            margin-top: -10px;
            font-size: 25px; 
            line-height: 32px;	 
             
        }

        > p {
            font-size: 14px;
            line-height: 20px;	 
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
    

    > div.clear-fix{
        clear:both;
    }



    
    @media (max-width: 1400px) {
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
        
        > img {
            height: 380px;
            width: 500px;
        }

    }

    @media (max-width: 1160px) {
    
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
       
        > img {
            height: 355px;
            width: 475px;
        }

    }

    @media (max-width: 1080px) { 
        display: block;
        width: 100%;

   
            > div.first-box.green {
               top: -50px;
               height: 400px;
                left: 50%;
                transform: translateX(-50%);
                width: 760px;
            }
        
            > div.second-box.blue{
                top: -50px;
               height: 400px;
                left: 50%;
                transform: translateX(-50%);
                width: 760px;
        
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

    @media (max-width: 600px) { 
        margin-top: 50px;
        height: auto;
        padding: 0 20px;
        
        > div.first-box.green {
            // display: none;
            width: 100%;
            height: 100%;
            // left: 0;
            top: -15%;
            

        
        }
    
        > div.second-box.blue{
            // display: none;
            top: -15%;
            // left: 0;                
            width: 100%;
            height: 100%;
            
            
    
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
                <div className="first-box green"></div>
                <div className="second-box blue"></div>
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
