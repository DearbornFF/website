/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Dearborn Family Farm`,
    description: `goo`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-styled-components", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", 
  {
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "ki_PxTnAbCJSaV1DP8KmYnAvt_CKFlkM4PnvxP0SUSo",
      "spaceId": "rxdo758may96"
    }
  },
  {
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