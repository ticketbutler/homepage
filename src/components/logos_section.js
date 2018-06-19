import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 110px 0;
  width: 100%;
  position: relative;

  @media (max-width: 1080px) {
    padding: 150px 0;
  }
  @media (max-width: 768px) {
    padding: 110px 0;
  }

  @media (max-width: 600px) {
    padding: 70px 0;
  }

  @media (max-width: 376px) {
    padding: 40px 0px;
  }
`;
const Content = styled.div``;

const Company_logos = ({ items }) => {
  return (
    <Section className="section-3 container">
      <Content>
        {items.map(item => (
          <li>
            <a href={item.path}>
              <img src={item.image} />
            </a>
          </li>
        ))}
      </Content>
    </Section>
  );
};

export default Company_logos;
