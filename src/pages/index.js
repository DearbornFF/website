import * as React from "react"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import get from "lodash/get"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Article from "../components/article"

import heroImage from "../assets/images/395934394_296682676581691_2741712652337783543_n.jpg"

const IndexPage = (props) => {
  const {title, description, siteUrl} = get(props, 'data.site.siteMetadata');
  const page = get(props, 'data.contentfulPages');
  return (
    <Layout>
      <Hero 
        title="Organic produce and pumpkin patch"
        background={heroImage}
        position="0"
      />
      <Article>
        {renderRichText(page.content)}
      </Article>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    contentfulPages(slug: { eq: "home" }) {
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