import * as React from "react"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import get from "lodash/get"

import renderOptions from "../hooks/render-options"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Article from "../components/article"
import Column from "../components/column"
import Sidebar from "../components/sidebar"

import heroImage from "../assets/images/395934394_296682676581691_2741712652337783543_n.jpg"

const IndexPage = (props) => {
  const {title, description, siteUrl} = get(props, 'data.site.siteMetadata');
  const page = get(props, 'data.contentfulPages');
  const details = get(props, 'data.contentfulOperatingDetails');
  return (
    <Layout>
      <Hero 
        title={<span>Organic produce <br/> and pumpkin patch</span>}
        background={heroImage}
        height="60vh"
        position="0"
      />
      <Article>
        <Column flex="4 0 0">
        {renderRichText(page.content, renderOptions)};
        </Column>
        <Sidebar>
          <p><strong>Hours</strong> {details.hours.hours}</p>
          <p><strong>Address</strong> {details.location}</p>
          <p><strong>Parking</strong> {details.parking.parking}</p>
          {/* <p><strong>For your visit</strong> {details.visitRecommendations.visitRecommendations}</p> */}
        </Sidebar>
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
    contentfulOperatingDetails{
      hours {
        hours
      }
      location
      parking {
        parking
      }
      visitRecommendations{
        visitRecommendations
      }
    }
    contentfulPages(slug: { eq: "home" }) {
      label
      header{
        header
      }
      description {
        description
      }
      content{
        raw
      }
    }
  }
`