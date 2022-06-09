import React from "react";
import styled from "styled-components";
import { Container, Wrapper, Column } from "../theme/index";
import { ContactForm } from "./contactform";
import { Responsive, Colors } from "../theme/styles";
import { StaticImage } from "gatsby-plugin-image";

const StyledColumn = styled(Column)`
  ${Responsive.sm`
  width: 100%;
  display: column;
  align-items: center;
  `}
  ${Responsive.lg`
  display: none;
  `}
`;

const ImageGrid = styled.div`
  ${Responsive.sm`
display: none;
`}
  ${Responsive.lg`
    display: grid;
    position: relative;
    grid-template-columns: repeat(12, 1fr);

.top-image {
  grid-row: 1;
  grid-column: 1 / span 8;
  padding-top: 15%; // slightly arbitrary, keeps proportion once resized
  z-index: 1;
}

.bottom-image {
  grid-column: 7 / -2;
  grid-row: 1;
  z-index: 2;
  
}
    
  `}
`;

export const ContactSection = () => {
  return (
    <Wrapper>
      <Container>
        <ImageGrid>
          <Column className="top-image">
            <StaticImage
              src="../images/fitnessfood.jpg"
              alt="Health without apologies"
              placeholder="blurred"
              style={{ borderRadius: "10px" }}
            />
          </Column>
          <Column className="bottom-image">
            <ContactForm
              inputborder={`1px solid ${Colors.red}`}
              color={Colors.red}
            />
          </Column>
        </ImageGrid>
        <StyledColumn>
          <ContactForm
            background="transparent"
            color={Colors.white}
            boxshadow="none"
            border={`solid 1px ${Colors.offWhite}`}
            inputborder={`1px solid ${Colors.red}`}
          />
        </StyledColumn>
      </Container>
    </Wrapper>
  );
};
