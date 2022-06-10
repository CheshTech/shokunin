import React from "react";
import styled from "styled-components";
import { HeroSplash, BlogGrid, Cta, ContactForm } from "../components/index";
import { Column, Container } from "../theme/index";
import { Responsive } from "../theme/styles";
import Layout from "../components/layout";
import Seo from "../components/seo";

const StyledColumn = styled(Column)`
  ${Responsive.sm`
width: 85%;
margin: 75px auto;
`}
  ${Responsive.lg`
width: 60%;
`}
`;

const Contact = () => {
  return (
    <Layout>
      <Seo title="Hello there" />
      <HeroSplash
        title="Contact Me"
        subtitle="Curious about my services? Let's chat!"
        type="blogArticle"
      />
      <Container>
        <StyledColumn>
          <ContactForm paddingright="20px" paddingleft="20px" />
        </StyledColumn>
        <Column>
          <BlogGrid />
        </Column>
      </Container>
      <Cta />
    </Layout>
  );
};

export default Contact;
