import * as React from "react"
import { graphql } from "gatsby"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import get from "lodash/get"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Article from "../components/article"

import heroImage from "../assets/images/396056459_296683003248325_2332290033367886716_n.jpg"

const AboutPage = (props) => {
  const {title, description, siteUrl} = get(props, 'data.site.siteMetadata');
  const page = get(props, 'data.contentfulPages');
  return (
    <Layout>
      <Hero 
        title={props.data.contentfulPages.title}
        background={heroImage}
        position="-10%"
        height="40vh"
        className="small"
      />
      <Article>
        {renderRichText(page.content)}
      </Article>
    </Layout>
  )
}

export default AboutPage

export const Head = (props) => (
  <SEO 
    title={props.data.contentfulPages.title} 
    description={props.data.contentfulPages.description.description}>
  </SEO>
)

export const pageQuery = graphql`
  query AboutQuery {
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
    contentfulPages(slug: { eq: "about" }) {
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