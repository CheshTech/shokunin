import React, { Fragment } from "react";
import styled from "styled-components";
import {
  Title,
  Column,
  Container,
  Button,
  Text,
  Row,
  Subtitle
} from "../theme/index";
import { Responsive, Colors } from "../theme/styles";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

const StyledImg = styled(BgImage)`
  height: 100vh;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  // border-radius: 0 0 25% 35% / 0 0 100% 100%;
  // border-radius: 0 0 100% 15% / 0 0 10% 10%;
  // mix-blend-mode: multiply;
  transform: scaleX(1);
  &::before {
    opacity: 0.2 !important;
  }
  &::after {
    background-position: center;
    background-size: contain;
    opacity: 1 !important;
  }

  @media (max-width: 720px) {
    &::before {
      opacity: 0.3 !important;
    }
    &::after {
      background-position: center;
      background-size: contain;
      opacity: 1 !important;
    }
  }
`;

const StyledColumn = styled(Column)`
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
`;

const StyledTitle = styled(Title)`
  ${Responsive.sm`
font-size: 30px;
text-transform: uppercase;
text-align: center;
letter-spacing: 8.8px;
margin: 0;
color: ${Colors.white};
`}
  ${Responsive.lg`
font-size: 88px;
text-align: left;
`}
`;

const ButtonRow = styled(Row)`
  ${Responsive.sm`
    flex-direction: column;
    margin-top: 90px;
  `}
  ${Responsive.lg`
  flex-direction: row;
  margin-top: 30px;
`}
`;

const StyledText = styled(Text)`
  ${Responsive.sm`
  width: 60%;
  margin-top: 10px;
  color: ${Colors.white};
  text-align: left;
  font-family: 'Proxima Nova', sans-serif;
                                                
`}
  ${Responsive.lg`
  width: 30%;
`}
`;

const StyledSubtitle = styled(Subtitle)`
  ${Responsive.sm`
margin: 0;
font-size: 16px;
font-weight: bold;
color: ${Colors.white};
`}
  ${Responsive.lg`
font-size: 32px;
`}
`;

export const HeroSplash = ({ title, type, subtitle, btnText, text }) => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "splashhero.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
          }
        }
      }
    `
  );

  const pluginImage = getImage(placeholderImage);

  return (
    <Fragment>
      {type !== "blog" && (
        <StyledImg
          image={pluginImage}
          type={type}
          id="home"
          preserveStackingContext={true}
        >
          <Container>
            <StyledColumn>
              <StaticImage
                src="../images/shokuninsymboltransparent.png"
                alt="Health without apologies"
                placeholder="blurred"
                style={{
                  width: "150px",
                  height: "75px",
                  top: "16px",
                  left: "275px"
                }}
              />

              <StyledTitle splash>{title}</StyledTitle>
              <StyledText white margin="10px 0 0 0" width="30%">
                {subtitle}
              </StyledText>
              <ButtonRow>
                <Button>{text}</Button>
              </ButtonRow>
            </StyledColumn>
          </Container>
        </StyledImg>
      )}
      {type === "blog" && (
        <StyledImg
          image={pluginImage}
          type={type}
          id="home"
          preserveStackingContext={true}
        >
          <Container>
            <StyledColumn>
              <Row alignitems="center">
                <StyledSubtitle>
                  <em>Blog</em>
                </StyledSubtitle>
                <StaticImage
                  src="../images/shokuninsymboltransparent.png"
                  alt="Health without apologies"
                  placeholder="blurred"
                  style={{
                    width: "150px",
                    height: "75px",
                    top: "16px",
                    left: "275px"
                  }}
                />
              </Row>
              <StyledTitle splash>{title}</StyledTitle>
              <StyledText white margin="10px 0 0 0" width="30%">
                {subtitle}
              </StyledText>
            </StyledColumn>
          </Container>
        </StyledImg>
      )}
    </Fragment>
  );
};
// <Column justifycontent="flex-end" height="100%">
//   <StaticImage
//     src="../images/wave.png"
//     alt="Health without apologies"
//     placeholder="blurred"
//   />
// </Column>
// <StaticImage
//   src="../images/curve.png"
//   alt="Health without apologies"
//   placeholder="blurred"
// />
