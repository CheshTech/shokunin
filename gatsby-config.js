module.exports = {
  siteMetadata: {
    title: `BoKing Performance Fitness: Optimize Your Physical Capabilities`,
    description: `Seattle personal training for athletes including boxing, basketball, and group workouts for kids and adults.`,
    author: `@Jon Bolden`,
    siteUrl: `https://bokingperformancefitness.com/`
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `g0dv39pxgsly`,
        accessToken: `k2nzefB07E3cLvL5VLUWikS55m2jJu3usR6E_Tc6EsE`
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/"
      },
      __key: "images"
    }
  ]
};
