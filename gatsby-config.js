/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config({path: `./.env`})
; 
module.exports = {
  siteMetadata: {
    siteName: `Dearborn Family Farm`,
    title: `Organic produce and pumpkin patch`,
    description: `goo`,
    siteUrl: `https://www.dearbornfamilyfarm.com`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-styled-components", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", 
  {
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
      "spaceId": process.env.CONTENTFUL_SPACEID
    }
  }, {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/assets/graphx/icon.png"
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/assets/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "graphx",
      "path": "./src/assets/graphx/"
    },
    __key: "graphx"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "fonts",
      "path": "./src/assets/fonts/"
    },
    __key: "fonts"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};