import React from "react";
import styled from "styled-components";
import { HeroSplash, Cta } from "../components/index";
import { Text, Container, Column } from "../theme/index";
import { Responsive } from "../theme/styles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const StyledContainer = styled(Container)`
  ${Responsive.sm`
width: 90%;
margin: 125px auto;
`}
  ${Responsive.lg`
width: 65%;
`}
`;

const BlogPage = ({ data }) => {
  console.log(data, "ANAKIN");

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const { gatsbyImageData } = node.data.target;
        if (!gatsbyImageData) {
          // asset is not an image
          return null;
        }
        return (
          <Column alignitems="center" margin="80px auto">
            <GatsbyImage
              image={getImage(gatsbyImageData)}
              style={{ borderRadius: "10px" }}
            />
          </Column>
        );
      }
    }
  };

  return (
    <Layout>
      <Seo title="Hello there" />
      <HeroSplash
        title={data.contentfulBlog.title}
        subtitle={data.contentfulBlog.excerpt}
        type="blogArticle"
      />
      <StyledContainer>
        <Text>{renderRichText(data.contentfulBlog.article, options)}</Text>
      </StyledContainer>
      <Cta />
    </Layout>
  );
};

export default BlogPage;
// {blogPost.mainContent && renderRichText(data.contentfulBlog.article, options)}
// renderRichText(data.contentfulBlogPost.body)}
export const query = graphql`
  query($slug: String) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      slug
      excerpt
      image {
        gatsbyImageData
      }
      article {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData(width: 600)
          }
        }
      }
    }
  }
`;
// export const query = graphql`
//   query($slug: String!) {
//     contentfulBlog(slug: { eq: "$slug" }) {
// title
// slug
// excerpt
// image {
//   gatsbyImageData
// }
// article {
//   raw
// }
//     }
//   }
// `;
