import React from "react";
import { HeroSplash, BlogGrid, Cta } from "../components/index";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Blog = () => {
  return (
    <Layout>
      <Seo title="Hello there" />
      <HeroSplash
        title="Shokunin"
        subtitle="Literature, Wine, Dining, and Behaviorial Economics"
        type="blog"
      />
      <BlogGrid type="blog" />
      <Cta />
    </Layout>
  );
};

export default Blog;
