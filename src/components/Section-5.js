import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";

const Section = styled.section`
    width:100%;
    position: relative;
    padding: 110px;
    padding-right: 0;

    @media (max-width: 1080px) {
        padding: 110px;
    }
    @media (max-width: 768px) { 
        padding: 80px;
    }

    @media (max-width: 600px) { 
        margin-top: 20px;
        padding: 40px;
    }

    @media (max-width: 370px) { 
        padding: 50px 20px;
    }
`;
const LeftBox = styled.div`
    display: inline-block;

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
        margin-top: 40px;
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
            m
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
            margin-top: 0px;

            
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
        max-width: 850px;
        position: absolute;
        right: -130px;
        z-index: 2;
    }
    >div.shapes {
        > div.first-box.blue {
            position: absolute;
            height: 380px;	
            width: 560px;
            right: 0px;
            top: 80px;	
            background-color: #326DE9;
        }

        > div.second-box.green{
            position: absolute;
            top: 135px;
            right: 160px;
            height: 340px;
            width: 448px;
            z-index: 1;
            background-color: #1DC9CC;
            -webkit-clip-path: polygon(0 0, 0% 100%, 100% 100%);
            clip-path: polygon(0 0, 0% 100%, 100% 100%);
        }
        }
    

    > div.clear-fix{
        clear:both;
    }



    
    @media (max-width: 1400px) {
        >div.shapes {
            > div.first-box.blue {
                width: 530px;
                height: 350px;
            }

            > div.second-box.green{
                right: 180px;
                width: 400px;
                height: 300px;
                top: 150px;
                
            }
        }
        > img {
            right: -90px;
            
            height: 400px;
            max-width: 650px;
            
        }

    }

    @media (max-width: 1160px) {
        >div.shapes {
            > div.first-box.blue {
                width: 490px;
                height: 320px;
            }

            > div.second-box.green{
                right: 150px;
                width: 390px;
                height: 300px;
                top: 120px;
                
            }
        }
        > img {
            right: -90px;
            height: 380px;
            max-width: 610px;
            
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
            > div.first-box.blue {
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
        
            > div.second-box.green{
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
            height: 350px;
            width: 600px;
            left: 50%;
            transform: translateX(-50%);
            top:0px;
            right: 0px;
            border-radius: 3px;
            margin-bottom: 0;
        }
    }

    @media (max-width: 650px) { 

        height: auto;
        >div.shapes {
            > div.first-box.blue {
                // display: none;
                width: 80%;
                top: 0%;
                

            
            }
        
            > div.second-box.green{
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
    
            border-radius: 0px;
            
        }
        
    }

    @media (max-width: 370px) { 

        height: auto;
        >div.shapes {
            > div.first-box.blue {
                height: 50px;
                // display: none;
                width: 100%;
                top: 0%;
            }
        }
        
            > div.second-box.green{
                height: 50px;
                top: -10px;
                width: 90%;
            }
        > img {
            height: auto;
            width: 100%;
            left: 50%;
            transform: translateX(-50%);
            top:0px;
            right: 0px;
            border-radius: 0px;
            
        }
        
    }

`;
const Section5 = () => (

    <Section >
        <RightBox>
                <img src={require('../img/mac_lap.png')}></img>

                <div className="shapes">
                    <div className="first-box blue"></div>
                    <div className="second-box green"></div>
                </div>
                
                <div className="clear-fix"></div>
            </RightBox>
        <LeftBox>
            <h3>A better understanding of your event</h3>
            <p>Access, analize and manage your data from everywhere. Understand your atteendees and keep them coming back</p>
        </LeftBox>
    
       <div className="clear-fix"></div>

        <style jsx>{`
        * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
 
        
        }
    
        .clear-fix {
            clear: both;
        }


        `}</style>
    </Section>
  
)

export default Section5
