import * as React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Article from "../components/article"
import Column from "../components/column"

const FourOhFourPage = (props) => {
  const heroImage = getImage(props.data.file);
  return (
    <Layout>
      <Hero 
        title="Page not found"
        background={heroImage}
        height="60vh"
        position="0"
      />
      <Article>
        <Column flex="1 0 0">
          <h2>That's a 404 error. The requested page was not found.</h2>
        </Column>
      </Article>
    </Layout>
  )
}

export default FourOhFourPage

export const Head = (props) => (
  <>
    <html lang="en" />
    <Seo 
      title="404"
      description="Page missing">
    </Seo>
  </>
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
    file(relativePath: { eq: "395825912_296679093248716_2687186518643641950_n.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: BLURRED
          formats: [AUTO]
        )
      }
    }
  }
`