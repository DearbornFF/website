/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config({path: "./.env"})
; 
module.exports = {
  siteMetadata: {
    siteName: "Dearborn Family Farm",
    title: "Organic produce and pumpkin patch",
    description: "We offer plant starts, seasonal organic produce, huckleberry goods, fall pumpkin patch, corn maze and holiday events",
    siteUrl: "https://www.dearbornfamilyfarm.com"
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-styled-components", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", 
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: "Dearborn Family Farm and Pumpkin Patch",
      short_name: "Dearborn Family Farm",
      description: "We offer plant starts, seasonal organic produce, huckleberry goods, fall pumpkin patch, corn maze and holiday events.",
      lang: "en",
      display: "standalone",
      icon: "src/assets/graphx/icon.png",
      start_url: "/",
      background_color: "#91c19f",
      theme_color: "#3a5e45"
    }
  }, {
    resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://dearbornfamilyfarm.com',
        sitemap: 'https://dearbornfamilyfarm.com/sitemap-0.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
  }, {
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl: `https://dearbornfamilyfarm.com`,
      stripQueryString: true
    }
  }, {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: process.env.GTM_TAG_ID,
      includeInDevelopment: false,
      defaultDataLayer: { platform: "gatsby" },
      enableWebVitalsTracking: true
    },
  }, {
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
      "spaceId": process.env.CONTENTFUL_SPACEID
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