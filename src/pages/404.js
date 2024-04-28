import * as React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Article from "../components/article"

import heroImage from "../assets/images/395825912_296679093248716_2687186518643641950_n.jpg"

const FourOhFourPage = (props) => {
  const {title, description, siteUrl} = get(props, 'data.site.siteMetadata');
  const details = get(props, 'data.contentfulOperatingDetails');
  return (
    <Layout>
      <Hero 
        title="Woops"
        background={heroImage}
        height="60vh"
        position="0"
      />
      <Article>
        ...
      </Article>
    </Layout>
  )
}

export default FourOhFourPage

export const Head = (props) => (
  <SEO 
    title="404"
    description="Page missing">
  </SEO>
)

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    contentfulOperatingDetails(hours: {children: {}}) {
      hours {
        hours
      }
    }
  }
`