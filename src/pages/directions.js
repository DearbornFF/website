import * as React from "react"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import get from "lodash/get"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Article from "../components/article"

import heroImage from "../assets/images/395825912_296679093248716_2687186518643641950_n.jpg"

const DirectionsPage = (props) => {
  const {title, description, siteUrl} = get(props, 'data.site.siteMetadata');
  const page = get(props, 'data.contentfulPages');
  const details = get(props, 'data.contentfulOperatingDetails');
  return (
    <Layout>
      <Hero 
        title="Contact and directions"
        background={heroImage}
        position="-40%"
      />
      <Article>
      {renderRichText(page.content)}
      </Article>
    </Layout>
  )
}

export default DirectionsPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    contentfulPages(slug: { eq: "directions" }) {
      title
      label
      description {
        description
      }
      content{
        raw
      }
    }
  }
`