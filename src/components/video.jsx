import React from "react";
import styled from "styled-components";
import { Container, Wrapper, Column, Text } from "../theme/index";
import { Responsive } from "../theme/styles";
import { StaticImage } from "gatsby-plugin-image";

const Grid = styled.div`
  ${Responsive.sm`
  width: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 100%;
  align-items: center;
  justify-items: center;
  `}
  ${Responsive.lg`
  width: 100%;
  grid-gap: 80px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  justify-items: flex-start;
  `}
`;

const StyledWrapper = styled(Wrapper)`
  ${Responsive.sm`
padding-top: 100px;
`}
  ${Responsive.lg`
padding-top: 125px;
`}
`;

const StyledColumn = styled(Column)`
  ${Responsive.sm`
width: 95%;
align-items: center;
margin: 0 auto;
`}
  ${Responsive.lg`
width: 100%;
align-items: flex-start;
`}
`;

export const Video = () => {
  return (
    <StyledWrapper>
      <Container>
        <Grid>
          <StyledColumn>
            <StaticImage
              src="../images/fitnessfood.jpg"
              alt="Health without apologies"
              placeholder="blurred"
            />
          </StyledColumn>
          <Column alignitems="flex-start">
            <Text white>This is to be the quote from the video excerpt</Text>
            <Text white>-Lawerence of Arabia</Text>
          </Column>
        </Grid>
      </Container>
    </StyledWrapper>
  );
};
