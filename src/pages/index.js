import * as React from "react"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { getImage } from "gatsby-plugin-image"
import get from "lodash/get"

import renderOptions from "../hooks/render-options"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Article from "../components/article"
import Column from "../components/column"


const IndexPage = (props) => {
  const page = get(props, 'data.contentfulPages');
  const heroImage = getImage(props.data.file);
  return (
    <Layout>
      <Hero 
        title={<span>Organic produce <br/> and pumpkin patch</span>}
        background={heroImage}
        height="60vh"
        position="0"
      />
      <Article>
        <Column flex="1 0 0">
        {renderRichText(page.content, renderOptions)}
        </Column>
      </Article>
    </Layout>
  )
}

export default IndexPage

export const Head = (props) => (
  <>
    <html lang="en" />
    <Seo 
      title={props.data.contentfulPages.title} 
      description={props.data.contentfulPages.description.description}>
    </Seo>
  </>
)

export const pageQuery = graphql`
  query IndexQuery {
    file(relativePath: { eq: "395934394_296682676581691_2741712652337783543_n.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: BLURRED
          formats: [AUTO]
        )
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