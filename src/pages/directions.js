import * as React from "react"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import get from "lodash/get"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Article from "../components/article"

import heroImage from "../assets/images/396175471_296682689915023_8972487937204021691_n.jpg"

const DirectionsPage = (props) => {
  const {title, description, siteUrl} = get(props, 'data.site.siteMetadata');
  const page = get(props, 'data.contentfulPages');
  const details = get(props, 'data.contentfulOperatingDetails');
  return (
    <Layout>
      <Hero 
        title={props.data.contentfulPages.title}
        background={heroImage}
        position="-25%"
        height="40vh"
        className="small"
      />
      <Article>
      {renderRichText(page.content)}
      </Article>
    </Layout>
  )
}

export default DirectionsPage

export const Head = (props) => (
  <SEO 
    title={props.data.contentfulPages.title} 
    description={props.data.contentfulPages.description.description}>
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