import React from "react";
import styled from "styled-components";
import {
  Subtitle,
  Container,
  Button,
  Wrapper,
  Column,
  Text
} from "../theme/index";
import { Responsive, Colors } from "../theme/styles";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery, Link } from "gatsby";

const Grid = styled.div`
  ${Responsive.sm`
  width: 100%;
  display: grid;
  align-items: center;
  grid-gap: ${props => (props.small ? "15px" : "30px")};
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  `}
  ${Responsive.lg`
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  `}
`;

const BlogWrapper = styled.div`
  width: 100%;
  // height: 308px;
  background: ${Colors.red};
  border: 1px solid ${Colors.blue};
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

export const BlogGrid = ({ type }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlog {
        nodes {
          slug
          excerpt
          title
          article {
            raw
          }
          image {
            gatsbyImageData
          }
        }
      }
    }
  `);
  // const data = [
  //   {
  //     title: "Article Name",
  //     date: "Date",
  //     excerpt:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat…. ",
  //     btn: "Read More"
  //   },
  //   {
  //     title: "Article Name",
  //     date: "Date",
  //     excerpt:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat…. ",
  //     btn: "Read More"
  //   },
  //   {
  //     title: "Article Name",
  //     date: "Date",
  //     excerpt:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat…. ",
  //     btn: "Read More"
  //   }
  // ];
  // console.log(data.allContentfulBlog.nodes, "ANAKIN");

  // const { blogPosts } = data.allContentfulBlog.edges[0].node;

  return (
    <Wrapper>
      <Container>
        <Column alignitems="center">
          <Subtitle>Blog Posts</Subtitle>
          <Grid>
            {data.allContentfulBlog.nodes.map((key, index) => {
              return (
                <BlogWrapper key={index}>
                  {type === "blog" && (
                    <Link to={`${key.slug}`} style={{ textDecoration: "none" }}>
                      <StaticImage
                        src="../images/splashhero.jpg"
                        alt="Health without apologies"
                        placeholder="blurred"
                      />
                      <TextColumn>
                        <Text fontweight="bold" white>
                          {key.title}
                        </Text>
                        <Text margin="8px 0 24px 0" fontweight="bold" white>
                          {key.date}
                        </Text>
                        <Text white>{key.excerpt}</Text>
                        <Text
                          style={{ cursor: "pointer" }}
                          fontweight="bold"
                          white
                          margin="8px 0 0 0"
                          textAlign="right"
                        >
                          Read More
                        </Text>
                      </TextColumn>
                    </Link>
                  )}
                  {type !== "blog" && (
                    <Link
                      to={`blog/${key.slug}`}
                      style={{ textDecoration: "none" }}
                    >
                      <StaticImage
                        src="../images/splashhero.jpg"
                        alt="Health without apologies"
                        placeholder="blurred"
                      />
                      <TextColumn>
                        <Text fontweight="bold" white>
                          {key.title}
                        </Text>
                        <Text margin="8px 0 24px 0" fontweight="bold" white>
                          {key.date}
                        </Text>
                        <Text white>{key.excerpt}</Text>
                        <Text
                          style={{ cursor: "pointer" }}
                          fontweight="bold"
                          white
                          margin="8px 0 0 0"
                          textAlign="right"
                        >
                          Read More
                        </Text>
                      </TextColumn>
                    </Link>
                  )}
                </BlogWrapper>
              );
            })}
          </Grid>
          {type !== "blog" && (
            <Link to="/blog" style={{ textDecoration: "none" }}>
              <Button
                margin="60px 0 0 0"
                color={Colors.white}
                background={Colors.red}
              >
                More Posts
              </Button>
            </Link>
          )}
        </Column>
      </Container>
    </Wrapper>
  );
};
