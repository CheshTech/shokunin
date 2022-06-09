/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Navigation, Footer } from "./index";
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <React.Fragment>
      <Navigation siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
//   <HeroSplash
//     title="BoKing Performance Fitness"
//     subtitle="Optimize Your Physical Capabilities"
//     btnText="Book Class"
//     text="Contact For Free Consult"
//   />
