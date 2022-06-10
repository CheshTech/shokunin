import React, { Fragment } from "react";
import styled from "styled-components";
import {
  Row,
  Container,
  Wrapper,
  Column,
  Subtitle,
  Text
} from "../theme/index";
import { Colors, Responsive } from "../theme/styles";
import { BsPencilSquare, BsPencil, BsEnvelope } from "react-icons/bs";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image";

const Grid = styled.div`
  ${Responsive.sm`
  width: 100%;
  display: grid;
  grid-gap: ${props => (props.small ? "15px" : "30px")};
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  `}
  ${Responsive.lg`
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  `}
`;

const Box = styled.div`
  ${Responsive.sm`
  width: 30%;
  border: ${props =>
    props.red ? `2px solid ${Colors.red}` : `2px solid ${Colors.blue}`};
  box-shadow: ${props =>
    props.red ? `0px 3px 6px ${Colors.red}` : `0px 3px 6px ${Colors.blue}`};
  padding: 10px;
  margin-top: 60px;
  margin-right: 0px;
  background: ${Colors.white};
`}
  ${Responsive.lg`
  margin-right: 20px;
  width: 132px;
// height: 140px;
  padding: 20px;
`}
`;

const MobileWrapper = styled.div`
  ${Responsive.sm`
    display: flex;
    flex-direction: column;
    background: ${Colors.white};
    width: 100%;

    padding: 50px 0 0 0
`}
  ${Responsive.lg`
    display: none;
`}
`;

const StyledWrapper = styled(Wrapper)`
  ${Responsive.sm`
    display: none;
    
`}
  ${Responsive.lg`
    display: inherit;
    margin-bottom: -125px;
`}
`;

const StyledText = styled(Text)`
  text-align: left;
`;

const MobileColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin-bottom: 10px;
`;

export const AboutSection = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAbout {
        title
        subtitle
        service1
        service2
        service3
        description
        aboutImage {
          gatsbyImageData
        }
      }
    }
  `);

  const info = [
    {
      text: data.contentfulAbout.service,
      icon: <BsPencilSquare size={34} />,
      red: false
    },
    {
      text: "Copywriting",
      icon: <BsPencil size={34} />,
      red: true
    },
    {
      text: "Email",
      icon: <BsEnvelope size={34} />,
      red: false
    }
  ];

  return (
    <Fragment>
      <StyledWrapper>
        <Container>
          <Grid>
            <Column alignitems="flex-start">
              <Text large margin="0 0 10px 0">
                {data.contentfulAbout.title}
              </Text>
              <Subtitle textAlign="left">
                {data.contentfulAbout.subtitle}
              </Subtitle>
              <Text small>{data.contentfulAbout.description}</Text>
              <Row>
                <Box>
                  <Column alignitems="center">
                    <BsPencilSquare size={34} />
                    <Text margin="8px 0 0 0" textAlign="center">
                      {data.contentfulAbout.service1}
                    </Text>
                  </Column>
                </Box>
                <Box red>
                  <Column alignitems="center">
                    <BsPencil size={34} />
                    <Text margin="8px 0 0 0" textAlign="center">
                      {data.contentfulAbout.service2}
                    </Text>
                  </Column>
                </Box>
                <Box>
                  <Column alignitems="center">
                    <BsEnvelope size={34} />
                    <Text margin="8px 0 0 0" textAlign="center">
                      {data.contentfulAbout.service3}
                    </Text>
                  </Column>
                </Box>
              </Row>
            </Column>
            <Column width="50%" margin="0 auto">
              <GatsbyImage
                image={getImage(
                  data.contentfulAbout.aboutImage.gatsbyImageData
                )}
                alt="Health without apologies"
                placeholder="blurred"
              />
            </Column>
          </Grid>
        </Container>
        <Column width="100%">
          <StaticImage
            src="../images/bodycurve.png"
            alt="Health without apologies"
            placeholder="blurred"
          />
        </Column>
      </StyledWrapper>
      <MobileWrapper>
        <Container>
          <MobileColumn margin="0 0 20px 0">
            <StyledText margin="0 0 10px 0">
              {" "}
              {data.contentfulAbout.title}
            </StyledText>
            <Subtitle textAlign="left">
              {data.contentfulAbout.subtitle}
            </Subtitle>
            <StyledText>{data.contentfulAbout.description}</StyledText>
            <Column width="75%" margin="40px auto 0 auto">
              <StaticImage
                src="../images/manwork.jpg"
                alt="Health without apologies"
                placeholder="blurred"
                style={{ borderRadius: "10px" }}
              />
            </Column>
          </MobileColumn>
          <Row alignitems="center" justifycontent="space-between">
            <Box>
              <Column alignitems="center">
                <BsPencilSquare size={34} />
                <Text margin="8px 0 0 0" textAlign="center">
                  {data.contentfulAbout.service1}
                </Text>
              </Column>
            </Box>
            <Box red>
              <Column alignitems="center">
                <BsPencil size={34} />
                <Text margin="8px 0 0 0" textAlign="center">
                  {data.contentfulAbout.service2}
                </Text>
              </Column>
            </Box>
            <Box>
              <Column alignitems="center">
                <BsEnvelope size={34} />
                <Text margin="8px 0 0 0" textAlign="center">
                  {data.contentfulAbout.service3}
                </Text>
              </Column>
            </Box>
          </Row>
        </Container>
        <Column width="100%">
          <StaticImage
            src="../images/nobottom.png"
            alt="Health without apologies"
            placeholder="blurred"
          />
        </Column>
      </MobileWrapper>
    </Fragment>
  );
};
// {info.map((key, index) => {
//   return (
//     <Fragment>
//       {key.red === true ? (
//         <Box key={index} red>
//           <Column alignitems="center">
//             {key.icon}
//             <Text margin="8px 0 0 0" textAlign="center">
//               {key.text}
//             </Text>
//           </Column>
//         </Box>
//       ) : (
//         <Box key={index}>
//           <Column alignitems="center">
//             {key.icon}
//             <Text margin="8px 0 0 0" textAlign="center">
//               {key.text}
//             </Text>
//           </Column>
//         </Box>
//       )}
//     </Fragment>
//   );
// })}

// {data.map((key, index) => {
//   return (
//     <Fragment>
//       {key.red === true ? (
//         <Box key={index} red>
//           <Column alignitems="center">
//             {key.icon}
//             <Text margin="8px 0 0 0" textAlign="center">
//               {key.text}
//             </Text>
//           </Column>
//         </Box>
//       ) : (
//         <Box key={index}>
//           <Column alignitems="center">
//             {key.icon}
//             <Text margin="8px 0 0 0" textAlign="center">
//               {key.text}
//             </Text>
//           </Column>
//         </Box>
//       )}
//     </Fragment>
//   );
// })}
