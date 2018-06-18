import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 100px 0;
  width: 100%;
  position: relative;

  @media (max-width: 1080px) {
    padding: 100px 0;
  }
  @media (max-width: 768px) {
    padding: 100px 0;
  }

  @media (max-width: 600px) {
    padding: 150px 0;
  }

  @media (max-width: 376px) {
    padding: 120px 0px;
  }
`;
const Content = styled.div`
  width: 100%;

  h2 {
    display:block;
    text-align: center;
    color: #333F52;	
    font-family: Hind;	
    font-size: 20px;	
    font-weight: bold;	
    line-height: 35px;	
  }

  div {
    display: flex;
    justify-content: center;
    -webkit-flex-wrap: wrap; 
    flex-wrap:         wrap;
    width: 100%;
    height: auto;
      img{

        height: 40px;
        margin: 10px 20px;
        opacity: .6;
      }
    
  }
`;

const Company_logos = ({ all_items, heading }) => {
  {console.log(all_items);}
  return (
    <Section className="section-3 container">
    <Content>
    <h2>{heading}</h2>

      <div>
      {all_items.map(item => (
              <img src={item.image}/>
          ))}
      </div>
       
    </Content>
     
    </Section>
  );
};

export default Company_logos;
