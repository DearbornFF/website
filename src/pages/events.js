import * as React from "react"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import styled from 'styled-components'
import get from "lodash/get"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Article from "../components/article"
import Column from "../components/column"
import Sidebar from "../components/sidebar"

import heroImage from "../assets/images/329693658_6036260803100793_7836501218673709703_n.jpg"

const PageStyling = styled.div`
  h2,h3,h4,blockquote{
    margin:0;
    padding: var(--spacingVerticalM) 0 0;
    text-align:left;
  }
  h2{
    font-size: var(--fontSizeHero900);
  }
  h3{
    font-size: var(--fontSizeHero700);
  }
  h3+p {
    margin-top: var(--spacingVerticalXL);
  }
  hr{
    margin: var(--spacingVerticalXXXL) 0 var(--spacingVerticalL);
    width:100%;
  }
`;

const EventPage = (props) => {
  const {title, description, siteUrl} = get(props, 'data.site.siteMetadata');
  const page = get(props, 'data.contentfulPages');
  const details = get(props, 'data.contentfulOperatingDetails');
  return (
    <Layout>
      <Hero 
        title={props.data.contentfulPages.header.header}
        background={heroImage}
        position="-20%"
        height="40vh"
        className="small"
      />
      <Article>
        <Column flex="4 0 0">
          <PageStyling>
            {renderRichText(page.content)}
          </PageStyling>
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

export default EventPage

export const Head = (props) => (
  <SEO 
    title={props.data.contentfulPages.title} 
    description={props.data.contentfulPages.description.description}>
  </SEO>
)

export const pageQuery = graphql`
  query EventQuery {
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
    contentfulPages(slug: { eq: "events" }) {
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