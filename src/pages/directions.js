import * as React from "react"
import { graphql } from 'gatsby'
import get from 'lodash/get'

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const DirectionsPage = (props) => {
  const {title, description, siteUrl} = get(props, 'data.site.siteMetadata');
  const details = get(props, 'data.contentfulOperatingDetails');
  return (
    <main style={pageStyles}>
      🎉 Directions
      <p>{title} + {description}</p>
      <p>{JSON.stringify(details)}</p>
    </main>
  )
}

export default DirectionsPage

export const pageQuery = graphql`
  query DirectionsQuery {
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
  }
`