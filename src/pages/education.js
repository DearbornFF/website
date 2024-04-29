import * as React from "react"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import get from "lodash/get"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Article from "../components/article"
import Column from "../components/column"

import heroImage from "../assets/images/395939470_296683159914976_6925436787656827298_n.jpg"

const EducationPage = (props) => {
  const {title, description, siteUrl} = get(props, 'data.site.siteMetadata');
  const page = get(props, 'data.contentfulPages');
  return (
    <Layout>
      <Hero 
        title={props.data.contentfulPages.title}
        background={heroImage}
        position='-10%'
        height="40vh"
        className="small"
      />
      <Article>
        <Column flex="1 0 0">
          {renderRichText(page.content)}
        </Column>
      </Article>
    </Layout>
  )
}

export default EducationPage

export const Head = (props) => (
  <SEO 
    title={props.data.contentfulPages.title} 
    description={props.data.contentfulPages.description.description}>
  </SEO>
)

export const pageQuery = graphql`
  query EducationQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    contentfulPages(slug: { eq: "education" }) {
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