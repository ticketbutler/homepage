import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";

const Section = styled.section `
    width:100%;
    // height: 970px;
    position: relative;
    padding: 110px 0;
    padding-left: 0;
    z-index: -2;
    margin-top: 330px;
    
    background: linear-gradient(311.59deg, #28D8A7 0%, #1DC9CA 100%);
    
    // margin-top: 200px;
    @media (max-width: 1080px) {
        padding: 110px 0;
        margin-top: 250px;
    }
    @media (max-width: 768px) { 
        padding: 80px 0;
    }

    @media (max-width: 600px) { 
    margin-top: 200px;
        
        padding: 60px 0;
    }

    @media (max-width: 376px) { 
    margin-top: 150px;
        
        padding: 30px 0;
    }

`;


const SectionImage = styled.div`
        width: 100%;
        z-index: 100;

    > img {
        position:absolute; 
        z-index: 1;
        width: 70%;
        top: -230px;
    }

    

    @media (max-width: 1080px) {
        width: 100%;
       
            > img {
            position: absolute;
            top:-220px;
            margin: 0;
            float: left;
            left: 50%;
            transform: translateX(-50%);
            width: 70%;
            
        }
        
    }

 

    @media (max-width: 750px) {
            > img {
                top:-180px;
   
        }
    }

    @media (max-width: 600px) {
        > img {
        position: absolute;
        top:-140px;    
    }
}

@media (max-width: 470px) {
    > img {
    position: absolute;
    top:-110px;    
}
}


    @media (max-width: 500px) {
        > img {
        position: absolute;
        top:-100px;    
      
    }
}
`;

const SectionContent = styled.div`
    height: 611px;	
    width: 60%;	
    background-color: #FFFFFF;
    box-shadow: 0px 0px 12px -4px rgba(0,0,0,0.35);
    margin-right: 110px;
    position: relative;
    z-index: 3;
    float: right;
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

    > a {
        margin-top: 30px;
        height: 60px;	
        width: 230px;	
        border-radius: 29px;	
        background: linear-gradient(90deg, #28D8A7 0%, #1DC9CA 100%);
        display: inline-block;
        text-align: center;
        position: relative;
        line-height: 60px;
        transition: all .3s;
        &:hover {
            box-shadow: 0px 3px 20px -6px rgba(0,0,0,0.30);
           > span {
            margin-right: 20px;
                &::after {
                opacity: 1;
                right: 25px;
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
              position: absolute;
              opacity: 1;
              line-height: 55px;
              margin: 0;
              padding: 0;
              font-size: 25px;
              opacity: 0;
              right: 40px;
              z-index: 10;
              color: #FFF;
              transition: 0.3s;
            }
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
        height: auto;
        width: 80%;
        margin: 0;        
        float: left;        
        margin-left: 50%;
        transform: translateX(-50%);
       
        > h3 {
            width: 100%;
            font-size: 55px;
            line-height: 50px;
            text-align: center;
            margin-top: 0px;

            
        }

        > p {
            width: 100%;
            font-size: 22px;	
            line-height: 34px;
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
            font-size: 20px;
            line-height: 32px;	 
        }
    }

    @media (max-width: 690px) { 

        padding: 70px;
    }

    @media (max-width: 600px) { 

        padding:60px 50px;

        > h3 {
            font-size: 34px;
            line-height: 38px;	 
              
        }

        > p {
            font-size: 17px;
            line-height: 33px;	 
            	 
        }

        > a{
            margin-top: 20px;
            height: 50px;	
            width: 180px;	

            > span {
                font-size: 14px;	
                line-height: 50px;	

            }
        }
    }

    @media (max-width: 460px) { 

        padding:50px 40px;
        
    }

    @media (max-width: 376px) { 

        padding:50px 20px;
        margin-top: 0px;
        


        > h3 {
            font-size: 25px; 
            line-height: 32px;	 
             
        }

        > p {
            font-size: 14px;
            line-height: 20px;	 
        }  
        
        > a{
            width: 170px;
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

            <SectionImage className="image">
                <img className="content_image" src={require("../img/img-6.jpg")} />
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

        .content_image:hover{
            display: none;
        }
        `}</style>
    </Section>
  
)

export default Section6
