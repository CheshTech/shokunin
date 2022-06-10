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
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/_EZCG2Ex8Q0?clip=UgkxFxqNqcBNXxpWr0Dm4eRDR8DxKudagFjc&amp;clipt=ENu4BhiqjAg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </StyledColumn>
          <Column alignitems="flex-start">
            <Text white style={{ fontStyle: "italic" }}>
              "Nothing is Written"
            </Text>
            <Text white>-Lawerence of Arabia</Text>
          </Column>
        </Grid>
      </Container>
    </StyledWrapper>
  );
};
