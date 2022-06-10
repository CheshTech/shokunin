import React from "react";
import styled from "styled-components";
import { Container, Wrapper, Column, Text } from "../theme/index";
import { Colors, Responsive } from "../theme/styles";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { ContactForm } from "../components/index";

const Grid = styled.div`
  ${Responsive.sm`
  width: 100%;
  display: grid;
  grid-gap: ${props => (props.small ? "15px" : "30px")};
  grid-template-columns: 100%;
  `}
  ${Responsive.lg`
  width: 100%;
  grid-template-columns: 50% 50%;
  `}
`;

const StyledColumn = styled(Column)`
  ${Responsive.sm`
display: none;
  `}
  ${Responsive.lg`
display: flex;
flex-direction: column;
  `}
`;

const ContentColumn = styled(Column)`
  ${Responsive.sm`
justify-content: center;
width: 100%;
  `}
  ${Responsive.lg`
justify-content: space-between;
width: 50%;
  `}
`;

const TextColumn = styled(Column)`
  ${Responsive.sm`
margin-top: 60px;
  `}
  ${Responsive.lg`
  margin-top: 0px;
  `}
`;

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulFooter {
        email
        website
        phone
        logo {
          gatsbyImageData
        }
      }
    }
  `);

  return (
    <Wrapper red style={{ paddingBottom: "0" }}>
      <Container>
        <Grid>
          <ContentColumn>
            <StaticImage
              src="../images/shokuninlogo.png"
              alt="Health without apologies"
              placeholder="blurred"
            />
            <TextColumn>
              <Text white>{data.contentfulFooter.email}</Text>
              <Text white>{data.contentfulFooter.phone}</Text>
              <Text white>{data.contentfulFooter.website}</Text>
            </TextColumn>
          </ContentColumn>
          <StyledColumn>
            <ContactForm
              background="transparent"
              inputbackground="transparent"
              color={Colors.white}
              inputcolor={Colors.white}
              paddingtop="0"
              boxshadow="none"
              border={`solid 1px ${Colors.offWhite}`}
              inputborder={`1px solid ${Colors.white}`}
            />
          </StyledColumn>
        </Grid>
      </Container>
      <Column justifycontent="flex-end" height="100%">
        <StaticImage
          src="../images/wave.png"
          alt="Health without apologies"
          placeholder="blurred"
        />
      </Column>
    </Wrapper>
  );
};
// <GatsbyImage
//               image={getImage(
//                 {data.contentfulFooter.logo.gatsbyImageData
//               )}
//               alt="Shokunin"
//               placeholder="blurred"
//             />
