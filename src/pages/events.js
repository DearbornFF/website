import * as React from "react"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import get from "lodash/get"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Article from "../components/article"

import heroImage from "../assets/images/329693658_6036260803100793_7836501218673709703_n.jpg"

const EventPage = (props) => {
  const {title, description, siteUrl} = get(props, 'data.site.siteMetadata');
  const page = get(props, 'data.contentfulPages');
  return (
    <Layout>
      <Hero 
        title="Events at the farm"
        background={heroImage}
        position="-20%"
      />
      <Article>
      {renderRichText(page.content)}
      </Article>
    </Layout>
  )
}

export default EventPage

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