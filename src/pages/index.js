import * as React from "react";
import styled from "styled-components";
import {
  HeroSplash,
  AboutSection,
  Video,
  BlogGrid,
  Steps,
  Cta,
  ContactSection
} from "../components/index";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Wrapper = styled.div`
  background: transparent
    linear-gradient(180deg, #9f4048 0%, #a64e5531 100%, #fcfcfc 100%) 0% 0%
    no-repeat padding-box;
  width: 100%;
  height: auto;
  padding: 75px 0;
`;

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSplash text="Get in contact" />
    <AboutSection />
    <Wrapper>
      <Video />
      <Steps />
      <ContactSection />
    </Wrapper>
    <BlogGrid />
    <Cta />
  </Layout>
);

export default IndexPage;
