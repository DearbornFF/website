import * as React from "react"
import { graphql } from "gatsby"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import get from "lodash/get"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Article from "../components/article"
import Column from "../components/column"
import Sidebar from "../components/sidebar"

import heroImage from "../assets/images/396056459_296683003248325_2332290033367886716_n.jpg"

const AboutPage = (props) => {
  const page = get(props, 'data.contentfulPages');
  const details = get(props, 'data.contentfulOperatingDetails');
  return (
    <Layout>
      <Hero 
        title={props.data.contentfulPages.header.header}
        background={heroImage}
        position="-10%"
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
        </Sidebar>
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
    contentfulOperatingDetails{
      hours {
        hours
      }
      location
      parking {
        parking
      }
    }
    contentfulPages(slug: { eq: "about" }) {
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