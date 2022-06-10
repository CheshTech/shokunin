import React, { Fragment } from "react";
import styled from "styled-components";
import * as styles from "./splash.module.css";
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
import { graphql, useStaticQuery, Link } from "gatsby";
import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image";
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
text-align: ${props => props.textalign || "center"};
letter-spacing: 8.8px;
margin: 0;
width: ${props => props.width};
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
  width: ${props => props.width || "60%"};
  margin-top: 10px;
  color: ${Colors.white};
  text-align: left;
  font-family: 'Proxima Nova', sans-serif;
                                                
`}
  ${Responsive.lg`
  width: ${props => props.width || "30%"};
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
  const heroData = useStaticQuery(graphql`
    query {
      contentfulHeroComponent {
        title
        subtitle
        shokuninSymbol {
          gatsbyImageData
        }
        backgroundImage {
          gatsbyImageData
        }
      }
    }
  `);

  // const { placeholderImage } = useStaticQuery(
  //   graphql`
  //     query {
  //       placeholderImage: file(relativePath: { eq: "splashhero.jpg" }) {
  //         childImageSharp {
  //           gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
  //         }
  //       }
  //     }
  //   `
  // );

  const pluginImage = getImage(
    heroData.contentfulHeroComponent.backgroundImage.gatsbyImageData
  );

  return (
    <Fragment>
      {type !== "blog" && type !== "blogArticle" && (
        <StyledImg
          image={pluginImage}
          type={type}
          id="home"
          preserveStackingContext={true}
        >
          <Container>
            <StyledColumn>
              <GatsbyImage
                image={getImage(
                  heroData.contentfulHeroComponent.shokuninSymbol
                    .gatsbyImageData
                )}
                alt="Health without apologies"
                placeholder="blurred"
                className={styles.symbol}
                // style={{
                //   width: "150px",
                //   height: "75px",
                //   top: "16px",
                //   left: "275px"
                // }}
              />

              <StyledTitle splash>
                {heroData.contentfulHeroComponent.title}
              </StyledTitle>
              <StyledText white margin="10px 0 0 0" width="60%">
                {heroData.contentfulHeroComponent.subtitle}
              </StyledText>
              <ButtonRow>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <Button>{text}</Button>
                </Link>
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
                  className={styles.symbol}
                  style={{ marginTop: "40px" }}
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
      {type === "blogArticle" && (
        <StyledImg
          image={pluginImage}
          type={type}
          id="home"
          preserveStackingContext={true}
        >
          <Container>
            <StyledColumn>
              <StyledTitle textalign="left" splash>
                {title}
              </StyledTitle>
              <StyledText white margin="10px 0 0 0" width="80%">
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
