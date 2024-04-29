import * as React from "react"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import get from "lodash/get"
import styled from 'styled-components'

import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Article from "../components/article"
import Column from "../components/column"

import heroImage from "../assets/images/396175471_296682689915023_8972487937204021691_n.jpg"

const RightColumn = styled(Column)`
  font-size: var(--fontSizeBase300);
  padding: var(--spacingHorizontalXXL) var(--spacingHorizontalXL) 0 var(--spacingHorizontalXXL);
  border-left: var(--strokeWidthThin) solid var(--colorNeutral1);
  p{
    margin: 0 0 var(--spacingHorizontalXXXL);
    padding:0;
  }
  strong{
    display:block;
    padding-bottom: var(--spacingHorizontalS);
    color: var(--themeMedium);
    font-size: var(--fontSizeBase600);
    font-family: var(--fontFamilyHeading);
    font-weight:400;
  }
`;

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
        <Column flex="4 0 0">
          {renderRichText(page.content)}
        </Column>
        <Column as={RightColumn} flex="1 0 0">
          <p><strong>Hours</strong> {details.hours.hours}</p>
          <p><strong>Location</strong> {details.location}</p>
          <p><strong>For your visit</strong> {details.visitRecommendations.visitRecommendations}</p>
          
        </Column>
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
    contentfulOperatingDetails{
      hours {
        hours
      }
      location
      visitRecommendations{
        visitRecommendations
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