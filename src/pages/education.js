import * as React from "react"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import get from "lodash/get"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Article from "../components/article"
import Column from "../components/column"
import Sidebar from "../components/sidebar"

import heroImage from "../assets/images/395939470_296683159914976_6925436787656827298_n.jpg"

const EducationPage = (props) => {
  const {title, description, siteUrl} = get(props, 'data.site.siteMetadata');
  const page = get(props, 'data.contentfulPages');
  const details = get(props, 'data.contentfulOperatingDetails');
  return (
    <Layout>
      <Hero 
        title={props.data.contentfulPages.header.header}
        background={heroImage}
        position='-10%'
        height="40vh"
        className="small"
      />
      <Article>
        <Column flex="4 0 0">
          {renderRichText(page.content)}
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
    contentfulPages(slug: { eq: "education" }) {
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