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
    resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.dearbornfamilyfarm.com',
        sitemap: 'https://dearbornfamilyfarm.com/sitemap-0.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
  },
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: [
        process.env.GA_TRACKING_ID,
      ],
      gtagConfig: {
        optimize_id: process.env.GT_CONTAINER_ID,
        anonymize_ip: true,
        cookie_expires: 0,
      },
      pluginConfig: {
        head: false,
        respectDNT: true,
        delayOnRouteUpdate: 0,
      },
    },
  },
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