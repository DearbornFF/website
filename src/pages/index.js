import * as React from "react"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import get from "lodash/get"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Article from "../components/article"
import Column from "../components/column"

import heroImage from "../assets/images/395934394_296682676581691_2741712652337783543_n.jpg"

const IndexPage = (props) => {
  const {title, description, siteUrl} = get(props, 'data.site.siteMetadata');
  const page = get(props, 'data.contentfulPages');
  return (
    <Layout>
      <Hero 
        title={props.data.contentfulPages.title}
        background={heroImage}
        height="60vh"
        position="0"
      />
      <Article>
        <Column flex="1 0 0">
          {renderRichText(page.content)}
        </Column>
      </Article>
    </Layout>
  )
}

export default IndexPage

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
        siteName
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