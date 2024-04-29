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
  return (
    <Layout>
      <Hero 
        title={props.data.contentfulPages.title}
        background={heroImage}
        position="-20%"
        height="40vh"
        className="small"
      />
      <Article>
        <Column flex="1 0 0">
          <PageStyling>
            {renderRichText(page.content)}
          </PageStyling>
        </Column>
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
    contentfulPages(slug: { eq: "events" }) {
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